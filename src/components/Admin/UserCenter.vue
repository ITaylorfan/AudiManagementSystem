<template>
  <div class="user-center-wrapper">
    <div class="user-info-content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名称" prop="name" style="width: 50%">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex" style="width: 50%">
          <el-select v-model="ruleForm.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" required>
          <el-col :span="11">
            <el-form-item prop="birthday">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.birthday"
                style="width: 100%"
                :default-value="['2000-01-01']"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="头像上传" prop="fileList" required>
          <el-upload
            class="upload-demo"
            action="#"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-change="changeUpload"
            :before-upload="beforeAvatarUpload"
            :file-list="ruleForm.fileList"
            list-type="picture-card"
            :auto-upload="false"
            :limit="1"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              <!-- 用来插入提示信息 -->
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >保存</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 图片上传相关
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,

      //表单内容
      ruleForm: {
        name: "",
        sex: "",
        birthday: "",
            //文件列表
      fileList: [
     
      ],
      },
      //校验规则
      rules: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        birthday: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        fileList: [
          {
            type: "array",
            required: true,
            message: "请上传一张图片",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      //console.log(this.ruleForm.fileList)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      //this.changeUpload()
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    //图片上传相关方法
    //图片上传状态改变的钩子
    changeUpload(file, fileList){
      this.ruleForm.fileList=fileList
      // console.log(fileList)
      // console.log(this.ruleForm.fileList)
    },
    //移除
    handleRemove(file, fileList) {
      //两个fileList不是一个东西 一个是自己的变量 一个是upload中的fileList
      this.ruleForm.fileList=fileList 
    },
    //图片预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

  
    beforeAvatarUpload(file) {
      console.log(file)
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-center-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  //background-color: white;
  .user-info-content {
    width: 50%;
    height: 100%;
    position: absolute;
    padding-top: 10px;
  }
}
</style>