<template>
  <div class="input-wrapper">
    <div class="input-content">
        <div class="input-title">
        <h2>管理系统登录</h2>
         
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
          ></el-input>
        </el-form-item>
        
        <el-form-item class="button-center">
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')" type="danger">重置</el-button>
        </el-form-item>
      </el-form>

      <div class="register">
          <span>没有账号？<span class="go-register">注册</span>一个</span>
      </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    
      var validateUserName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
        return {
        ruleForm: {
          userName:'',
          pass: '',
        },
        rules: {
          userName: [
            { validator: validateUserName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
        
    },
    methods: {
        //关闭
        close(){
            this.$emit("closeLoginInput")
            this.resetForm("ruleForm")
        },
        //提交表单
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.input-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  .input-content {
    border-radius: 10px;
    width: 400px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.90);
    
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    
    .input-title{
      width: 100%;
      height: 40px;
        text-align: center;
        border-bottom: 2px solid #DCDFE6;
        .close{
            color: black;
            font-size: 30px;
            position: absolute;
            right: 5px;
            top: 0;
            cursor: pointer;
        }
        .close:hover{
            color:red;
        }
    }
    .input-ui{
        margin-top: 20px;
        padding-right: 48px;
        .button-center{
           padding-left: 28px;
         
        }
        .register{
          text-align: right;
          font-size: 12px;
          span{
            .go-register{
             color:#409EFF ;
             cursor: pointer;

            }
           }
        }
    }
  }
}
</style>