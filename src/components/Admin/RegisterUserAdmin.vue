<template>
  <!-- 客户组件 -->
  <div class="customer-content-wrapper">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search ||
            data.name.toLowerCase().includes(search.toLowerCase()) ||
            data.id.toLowerCase().includes(search.toLowerCase())
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
            <el-form-item label="用户生日">
              <span>{{ props.row.birthday }}</span>
            </el-form-item>
            <el-form-item label="用户手机号">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="用户年龄">
              <span>{{ props.row.age }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <!-- 表头 -->
      <el-table-column label="用户 ID" prop="userInfoId"> </el-table-column>
      <el-table-column label="用户名称" prop="name"> </el-table-column>
      <el-table-column label="性别" prop="sex"> </el-table-column>

      <el-table-column align="right">
        <template slot="header">
          <el-button size="medium" type="primary" @click="addInfo">添加</el-button>
        </template>
      </el-table-column>

      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <!-- slot-scope="scope" -->
          <el-input v-model="search" size="big" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 编辑信息的表单 -->
    <el-dialog :title="changeTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="生日" :label-width="formLabelWidth">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.birthday"
            :default-value="['2000-01-01']"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveInfo">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getAllUserInfo,
  updateRegisterUserInfo,
  deleteUserInfo,
  addUserInfo
} from "@/api/index";
export default {
  data() {
    return {
      search: "",
      changeTitle:"编辑",
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
      isEdit: false,
      dialogFormVisible: false,
      form: {
        userInfoId: 0,
        name: "",
        sex: "",
        birthday: "",
        phone: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    //添加新信息
    addInfo() {
      
      this.dialogFormVisible = true;
      this.form.name = "";
      this.form.sex = "男";
      this.form.birthday = Date.parse(0);
      this.form.phone = "";
      //不是编辑状态
      this.isEdit = false;
      this.changeTitle = "添加新信息";
    },
    //保存信息
    saveInfo() {
      if (this.isEdit) {
        let data = this.form;
        //console.log(data);
        data.birthday = new Date(data.birthday).format("yyyy-MM-dd");
        this.$confirm("此操作将保存信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            updateRegisterUserInfo(data).then(
              (success) => {
                this.$message({
                  type: "success",
                  message: "保存成功!",
                });
                this.getInfo();
              },
              (error) => {
                console.log(error);
                this.$message({
                  type: "warning",
                  message: "保存失败!",
                });
              }
            );
            this.dialogFormVisible = false;
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消保存",
            });
          });
      } else {
        //添加信息
        let data = this.form;
        //console.log(data.birthday)
        data.birthday = new Date(data.birthday).format("yyyy-MM-dd");
        //console.log(data);
        this.$confirm("此操作将添加新信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            addUserInfo(data).then(
              (success) => {
                this.$message({
                  type: "success",
                  message: "添加成功!",
                });
                this.getInfo();
              },
              (error) => {
                console.log(error);
                this.$message({
                  type: "warning",
                  message: "添加失败!",
                });
              }
            );
            this.dialogFormVisible = false;
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消添加",
            });
          });
      }
    },
    //删除
    handleDelete(index, data) {
      //封装客户id
      let Data = {
        userInfoId: data.userInfoId,
      };
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteUserInfo(Data).then(
            (success) => {
              this.$message({
                type: "success",
                message: "删除成功！",
              });
              //刷新
              this.getInfo();
            },
            (error) => {
              this.$message({
                type: "success",
                message: "删除失败！",
              });
            }
          );
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    //编辑
    handleEdit(index, data) {
      // console.log(index);
      //console.log(data);
      //this.dialogTableVisible=true
      this.changeTitle="编辑"
      this.isEdit = true;
      this.dialogFormVisible = true;
      this.form.name = data.name;
      this.form.sex = data.sex;
      this.form.birthday = data.birthday;
      this.form.phone = data.phone;
      this.form.userInfoId = data.userInfoId;
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

    getInfo() {
      //获取客户信息
      getAllUserInfo().then(
        (success) => {
          //console.log(success);
          this.tableData = success.data;
          let date = new Date();
          this.tableData.forEach((item, index) => {
            //保留临时值
            let br = item.birthday;
            item.birthday = new Date(item.birthday).format("yyyy-MM-dd");
            //console.log(new Date(item.birthday).format("yyyy-MM-dd"));
            // let age = {
            //   age: Math.floor((date.getTime() - item.birthday) / 1000 / 60 / 60 / 24 / 365),
            // };
            item["age"] = Math.floor(
              (date.getTime() - new Date(br).getTime()) /
                1000 /
                60 /
                60 /
                24 /
                365
            );
            //console.log(Math.floor((date.getTime() - new Date(br).getTime()) / 1000 / 60 / 60 / 24 / 365))
            //console.log(new Date(br).getTime())
            //console.log(date.getTime() - item.birthday)
          });

          //console.log(this.tableData)
        },
        (error) => {}
      );
    },
  },
  mounted() {
    this.getInfo();
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