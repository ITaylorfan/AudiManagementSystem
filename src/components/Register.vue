<template>
<!-- 用户注册 -->
  <div class="register-wrapper">
    <header>
      <!-- 顶部图片 -->
    </header>

    <div class="content">
      <div class="register-content">
        <div class="input-title">
          <h2>用户注册</h2>

          <div class="close" @click="close">
            <i class="el-icon-close"></i>
          </div>
        </div>
        <div class="input-ui">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            
          >
            <el-form-item label="用户名" prop="userName">
              <el-input   type="text" v-model="ruleForm.userName" autocomplete="off" ></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="pass">
              <el-input
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
              ></el-input>
            </el-form-item>
               <el-form-item label="生日" required>
              <el-col>
                <el-form-item prop="date1">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="ruleForm.date1"
                    style="width: 100%"
                    :picker-options="pickerOptions"
                    :default-value="['2000-01-01']"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
              <el-input
                v-model="ruleForm.name"
                placeholder="请输入姓名"
              ></el-input>
            </el-form-item>

            <el-form-item label="性别" prop="sex" required>
              <el-radio-group v-model="ruleForm.sex">
                <el-radio label="先生"></el-radio>
                <el-radio label="女士"></el-radio>
              </el-radio-group>
            </el-form-item>
             <el-form-item label="手机号" prop="phone">
              <el-input
                v-model.number="ruleForm.phone"
                placeholder="请输入手机号"
                maxlength="11"
              ></el-input>
            </el-form-item>

            <el-form-item class="button-center">
              <el-button type="primary" @click="submitForm('ruleForm')"
                >注册</el-button
              >
              <el-button @click="resetForm('ruleForm')" type="danger"
                >重置</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {UserRegister} from "@/api/index"
export default {
  data() {

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
        //自定义校验
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入正确的手机号！"));
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
      pickerOptions: {
        // disabledDate(time) {
        //   //此条为设置禁止用户选择今天之前的日期，不包含今天。
        //   //return time.getTime() <= (Date.now()-(24 * 60 * 60 * 1000));
        //   //此条为设置禁止用户选择今天之前的日期，包含今天。
        //   return time.getTime() <= Date.now();
        // },
      },
        //需要校验的变量内容
      ruleForm: {
        pass: "",
        checkPass: "",
        userName: "",
        date1: "",
        name: "",
        sex: "先生",
        phone: "",
      },
      //校验规则
      rules: {
        pass: [
            {required: true,message: '请输入密码', trigger: 'blur'},
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' },
            { validator: validatePass, trigger: "blur" }],
        checkPass: [
            {required: true,message: '请确认密码', trigger: 'blur'},
            { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' },
            { validator: validatePass2, trigger: "blur" }],
        userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 4, max: 10, message: '长度在 4 到 10 个字符', trigger: 'blur' }
          ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "最少输入两个字符", trigger: "blur" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        phone: [{ validator: checkPhone, trigger: "blur", required: true }],
      },
    };
  },
  methods: {
    close(){
      this.$router.go(-1)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //alert("submit!");
          let info={
            username:this.ruleForm.userName,
            password:this.ruleForm.checkPass,
            birthday:new Date(this.ruleForm.date1).format("yyyy-MM-dd"),
            name:this.ruleForm.name,
            sex:this.ruleForm.sex,
            phone:this.ruleForm.phone
          }
          console.log(info)
           UserRegister(info).then(Response=>{
            console.log("成功")
            console.log(Response)

            if(Response.data.sqlState==="23000"){
               //注册失败
              this.$message.error("注册失败,用户名已存在！")
              setTimeout(()=>{
                this.resetForm("ruleForm")
              },1000)
            }else{
               //注册成功
              this.$message({
                message: "注册成功！",
                type: "success",
              });
              setTimeout(()=>{
                this.$router.push("Home")
              },1000)
            }
          },error=>{
              this.$message({
                message: "注册失败！",
                type: "error",
              });
            console.log(error)
          })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss"  scoped>
.register-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  header {
    width: 100%;
    height: 10%;
    background-image: url("../assets/images/head.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .content {
    width: 100%;
    height: 90%;
    background-image: url("../assets/images/banner.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    .register-content {
      position: absolute;
      width: 350px;
      height: 600px;
      left: 0;
      right: 0;
      top: 50px;
      bottom: 0;
      margin: auto;
      background-color: white;
      border-radius: 10px;
      opacity: 0.95;
      .input-title {
        width: 100%;
        height: 40px;
        text-align: center;
        border-bottom: 2px solid #dcdfe6;
        .close {
          color: black;
          font-size: 30px;
          position: absolute;
          right: 5px;
          top: 0;
          cursor: pointer;
        }
        .close:hover {
          color: red;
        }
      }
      .input-ui {
        margin-top: 20px;
        padding-right: 48px;
        // .button-center {
        //   padding-left: 20px;
        // }
      }
    }
  }
}
</style>