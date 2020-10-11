<template>
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
import {register} from "@/api/index"
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
    return {
        //需要校验的变量内容
      ruleForm: {
        pass: "",
        checkPass: "",
        userName: "",
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
            password:this.ruleForm.checkPass
          }
          console.log(info)
          register(info).then(Response=>{
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
                this.$router.push("Login")
              },1000)
            }
          },error=>{
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
      height: 360px;
      left: 0;
      right: 0;
      top: 0;
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