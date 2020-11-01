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
            <el-form-item label="客户名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="客户 ID">
              <span>{{ props.row.customerId }}</span>
            </el-form-item>
            <el-form-item label="客户生日">
              <span>{{ props.row.birthday }}</span>
            </el-form-item>
            <el-form-item label="客户地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="客户年龄">
              <span>{{ props.row.age }}</span>
            </el-form-item>
            <el-form-item label="客户手机">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <!-- 表头 -->
      <el-table-column label="客户 ID" prop="customerId"> </el-table-column>
      <el-table-column label="客户名称" prop="name"> </el-table-column>
      <el-table-column label="性别" prop="sex"> </el-table-column>

      <el-table-column align="right">
        <template slot="header">
          <el-button size="medium" type="primary" @click="addInfo"
            >添加</el-button
          >
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
    <el-dialog :title="changeTitle" :visible.sync="dialogFormVisible" :destroy-on-close="true">
      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item
          label="客户名称"
          :label-width="formLabelWidth"
          prop="name"
        >
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户生日" :label-width="formLabelWidth" prop="birthday">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.birthday"
            :default-value="['2000-01-01']"
            
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="客户地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input v-model.number="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible=false">取 消</el-button>
        <el-button type="primary" @click="saveInfo">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getCustomerInfo,
  saveCustomerInfo,
  deleteCustomerInfo,
  addCustomerInfo,
} from "@/api/index";
export default {
  data() {
    //自定义校验
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字！"));
        } else {
          if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(value)) {
            callback(new Error("请输入正确的手机号！"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      changeTitle: "编辑",
      search: "",
      //复用编辑框判断是否为 编辑状态
      isEdit: true,
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
        customerId: "",
        name: "",
        sex: "",
        birthday: "",
        address: "",
        phone:0,
      },
      formLabelWidth: "120px",

      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "最少输入两个字符", trigger: "blur" },
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" },
          { min: 6, max: 20, message: "最少输入六个字符", trigger: "blur" },
        ],
        birthday: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        phone: [{ required: true,validator: checkPhone, trigger: "blur" }],
      },
    };
  },
  methods: {
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //添加新信息
    addInfo() {
      
      this.dialogFormVisible = true;
      this.form.name = "";
      this.form.sex = "男";
      this.form.birthday = Date.parse(0);
      this.form.address = "";
      this.form.phone = "";
      //不是编辑状态
      this.isEdit = false;
      this.changeTitle = "添加新信息";
    },

    //编辑框确认 保存信息
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
            saveCustomerInfo(data).then(
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
        console.log(data.birthday)
        data.birthday = new Date(data.birthday).format("yyyy-MM-dd");
        console.log(data)
        this.$confirm("此操作将添加新信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            addCustomerInfo(data).then(
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
        customerId: data.customerId,
      };
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log("确定");
          //删除
          deleteCustomerInfo(Data).then(
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

      this.changeTitle = "编辑";
      this.dialogFormVisible = true;
      this.form.name = data.name;
      this.form.sex = data.sex;
      this.form.birthday = Date.parse(data.birthday);
      //console.log( this.form.birthday)
      this.form.address = data.address;
      this.form.phone = Number.parseInt(data.phone);
      //console.log(Number.isInteger(this.form.phone))
      this.form.customerId = data.customerId;

      this.isEdit = true;
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

    //获取客户信息
    getInfo() {
      getCustomerInfo().then(
        (success) => {
          //console.log(success);
          this.tableData = success.data;
          let date = new Date();
          this.tableData.forEach((item, index) => {
            //保留临时值
            let br = item.birthday;
            item.birthday = new Date(item.birthday).format("yyyy-MM-dd");
     
            item["age"] = Math.floor(
              (date.getTime() - new Date(br).getTime()) /
                1000 /
                60 /
                60 /
                24 /
                365
            );
           
          });

         
        },
        (error) => {}
      );
    },
  },
  mounted() {
    //获取客户信息
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
  padding-bottom: 80px;
  background-color: #2e3236;
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