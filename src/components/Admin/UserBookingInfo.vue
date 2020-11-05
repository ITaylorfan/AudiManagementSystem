<template>
  <!-- 客户组件 -->
  <div class="customer-content-wrapper">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search ||
            data.name.toLowerCase().includes(search.toLowerCase()) ||
            data.id == search||data.status.includes(search)
        )
      "
      style="width: 100%"
      height="100%"
      stripe
      :span-method="arraySpanMethod"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="用户 ID">
              <span>{{ props.row.userInfoId }}</span>
            </el-form-item>
            <el-form-item label="用户性别">
              <span>{{ props.row.sex }}</span>
            </el-form-item>
            <el-form-item label="预约时间">
              <span>{{ props.row.bookingTime }}</span>
            </el-form-item>
            <el-form-item label="用户手机号">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="预约类型">
              <span>{{ props.row.bookingType }}</span>
            </el-form-item>
            <el-form-item label="创建时间">
              <span>{{ props.row.createTime }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <!-- 表头 -->
      <el-table-column label="预约 ID" prop="id"> </el-table-column>
      <el-table-column label="用户名称" prop="name"> </el-table-column>
      <el-table-column label="审核状态" prop="status"> </el-table-column>

      <el-table-column align="right">
        <template slot="header">
          <el-button size="medium" type="primary">添加</el-button>
        </template>
      </el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <!-- slot-scope="scope" -->
          <el-input v-model="search" size="big" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="success"
            @click="handlePast(scope.$index, scope.row)"
            :disabled="scope.row.status == '通过'"
            ref="pass"
            >通过</el-button
          >
          <el-button
            size="mini"
            type="warning"
            @click="handleNoPast(scope.$index, scope.row)"
            :disabled="scope.row.status == '不通过'"
            ref="noPass"
            >不通过</el-button
          >
           <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            ref="delete"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑信息的表单 -->
    <el-dialog title="审核" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules"  ref="ruleForm">
        <el-form-item
          label="拒绝理由"
          :label-width="formLabelWidth"
          prop="content"
        >
          <el-input v-model="form.content" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveInfo('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getAllUserBookingInfo,
  pastUserSubmit,
  noPastUserSubmit,
  deleteUserSubmit
} from "@/api/index";
export default {
  data() {
    return {
      search: "",
      //表格中的数据
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ],

      dialogFormVisible: false,
      form: {
        content: "",
      },
      //保存行数据
      rowData: {},
      formLabelWidth: "120px",

      //校验规则
      rules: {
        content: [
          { required: true, message: "请输入理由", trigger: "blur" },
          { min: 5, max: 50, message: "最少输入五个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    //保存拒绝的理由
    saveInfo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //console.log(this.rowData);
          this.$confirm("确定保存么?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          })
            .then(() => {
              let Data = {
                id: this.rowData.id,
                content: this.form.content,
              };
              noPastUserSubmit(Data).then(
                (success) => {
                  this.$message({
                    type: "success",
                    message: "已拒绝!",
                  });
                  //刷新数据
                  (this.dialogFormVisible = false), this.refreshInfo();
                },
                (error) => {
                  this.$message({
                    type: "warning",
                    message: "处理错误!",
                  });
                }
              );
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消!",
              });
            });
        }else{

        }
      });
    },
    //删除
    handleDelete(index,data){
        this.$confirm("确定删除么?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let Data={
            id:data.id
          }
          deleteUserSubmit(Data).then(
            (success) => {
              this.$message({
                type: "success",
                message: "已删除!",
              });
              //刷新数据
              this.refreshInfo();
            },
            (error) => {
              this.$message({
                type: "warning",
                message: "处理错误!",
              });
            }
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消!",
          });
        })
    },
    //不通过
    handleNoPast(index, data) {
      this.dialogFormVisible = true;
      this.rowData = data;
    },

    //通过
    handlePast(index, data) {
      // console.log(index);
      //console.log(data);
      //console.log(this.$refs.pass)
      //封装数据
      let Data = {
        id: data.id,
      };
      this.$confirm("确定通过么?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          pastUserSubmit(Data).then(
            (success) => {
              this.$message({
                type: "success",
                message: "已通过!",
              });
              //刷新数据
              this.refreshInfo();
            },
            (error) => {
              this.$message({
                type: "warning",
                message: "处理错误!",
              });
            }
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消!",
          });
        });
    },
    // 合并列用到的函数
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex >= 0) {
        if (columnIndex === 3) {
          return [1, 2];
        } else if (columnIndex === 4) {
          return [0, 0];
        }
      }
    },

    refreshInfo() {
      //获取预约信息
      getAllUserBookingInfo().then(
        (success) => {
          //console.log(success);
          this.tableData = success.data;
          let date = new Date();
          this.tableData.forEach((item, index) => {
            if (item.sex === "先生") {
              item.sex = "男";
            } else {
              item.sex = "女";
            }
            //日期转换
            item.bookingTime = new Date(item.bookingTime).format("yyyy-MM-dd");
            item.createTime = new Date(item.createTime).format(
              "yyyy-MM-dd hh:mm:ss"
            );
          });
        },
        (error) => {}
      );
    },
  },

  mounted() {
    this.refreshInfo();
  },
};
</script>

<style lang="scss" scoped>
.customer-content-wrapper {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 60px;
  padding-left: 180px;
  //background-color: aquamarine;
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}
</style>