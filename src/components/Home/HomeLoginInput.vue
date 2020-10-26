<template>
<!-- 主页登录输入框 -->
  <div class="input-wrapper">
    <div class="input-content">
      <div class="input-title">
        <h2>用户登录</h2>

        <!-- <div class="close" @click="close">
          <i class="el-icon-close"></i>
        </div> -->
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
            <el-input
              type="text"
              v-model="ruleForm.userName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              ref="passwordInput"
            ></el-input>
            <!-- show-password 显示密码-->
          </el-form-item>

          <el-form-item label="验证码" prop="inputCheckCode">
           <el-col :span="14">
           <el-input
              type="text"
              v-model="ruleForm.inputCheckCode"
              autocomplete="off"
              
            ></el-input>
            </el-col>
            <!-- 验证码 -->
                <identify-box @getCheckCode="getCheckCode" ref="identifyBox"></identify-box>
          </el-form-item>

          <el-form-item class="button-center">
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')" type="danger"
              >重置</el-button
            >
          </el-form-item>
        </el-form>

        <div class="register">
          <span>没有账号？<span class="go-register" @click="register">注册</span>一个</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Admin } from "../../utils/mixin";
import {  userLoginCheck } from "@/api/index.js";
import {saveUserLoginStatus} from "@/api/localStorage"
import IdentifyBox from "@/components/Home/IdentifyBox"
export default {
  mixins: [Admin],
  components:{
    IdentifyBox
  },
  data() {
    var validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
       var validateInputCheckCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else if (value !== this.ruleForm.checkCode) {
        
        callback(new Error("验证码错误!"));
        
        //console.log(typeof value)
      } else {
        callback();
      }
    };
    return {
      //判断是否允许登录
      allowLogin: false,
      ruleForm: {
        userName: "",
        pass: "",
        //获取生成的验证码
        checkCode:"",
        //用户输入的验证码
        inputCheckCode:""
      },
      rules: {
        userName: [
          { validator: validateUserName, trigger: "blur" },
          {
            min: 4,
            max: 10,
            message: "长度在 4 到 10 个字符",
            trigger: "blur",
          },
        ],
        
        pass: [
          { validator: validatePass, trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
        inputCheckCode:[
          { validator: validateInputCheckCode, trigger: "blur" },
        ]
      },
    };
  },
  methods: {
    //获取验证码
    getCheckCode(v){
      this.ruleForm.checkCode=v
      console.log(this.ruleForm.checkCode)
    },
    register(){
      console.log("1")
      this.$router.push("Register")
    },
    //关闭
    close() {
      //调用父组件中的方法
      this.$emit("closeLoginInput");
      //重置表单
      this.resetForm("ruleForm");
    },
    //提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //alert("submit!");
          //console.log(this.ruleForm.userName, this.ruleForm.pass);
          //封装成对象
          let loginInfo = {
            username: this.ruleForm.userName,
            password: this.ruleForm.pass,
          };

          //console.log(loginInfo);

          //登录验证接口 传入参数
          userLoginCheck(loginInfo).then(res => {
            //打印响应结果
            //console.log(res.data);
            if (res.data.length > 0) {
              //登录成功
              // this.$message({
              //   message: "欢迎登录！",
              //   type: "success",
              // });
              //已登录
              this.setIsUserLogin("true")
            
              this.$emit("getUserInfoId",res.data[0].userInfoId)

              let  saveLocalData={
                userInfoId:res.data[0].userInfoId,
                isUserLogin:this.isUserLogin
              }
              //保存用户登录状态到localStorage
              saveUserLoginStatus("isUserLogin",saveLocalData)

              // setTimeout(()=>{
              //   this.$router.push("Admin");
              // },1000)
              
            } else if(res.data.length ===0) {
              //登录失败
              this.$message.error("账号或密码错误！")
              //清空密码
              this.ruleForm.pass=""
               //更改验证码  
              this.$refs.identifyBox.changeCode();   
            }
          },error=>{
            this.$message.error("服务器出错了！")
            console.log("服务器出错了",error)
          });
        } else {
          //更改验证码  
          this.$refs.identifyBox.changeCode();   
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/global";
.input-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  //padding-top: 20px;
  z-index: 0;
  //background-color: rgba(0, 0, 0, 0.5);
  .input-content {
    border-radius: 10px;
    width:100%;
    height: 300px;
    background-color: rgba(255, 255, 255, 1);

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
      .button-center {
        padding-left: 48px;
      }
      .register {
        text-align: right;
        font-size: 12px;
        span {
          .go-register {
            color: #409eff;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>