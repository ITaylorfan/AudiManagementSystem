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
            :disabled="false"
            ref="upload"
            id="uploader"
          >
            <el-button size="small" type="primary" @click="imagetip"
              >点击上传</el-button
            >
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
import { Admin } from "../../utils/mixin";
import {
  DateToString,
  blobToDataURI,
  urlToBlob,
  updateAdministratorInfo,
} from "../../api/index";
export default {
  mixins: [Admin],
  watch: {
    // '$store.state.administratorsInfo': function (v) {
    //   console.log(v)
    // }
  },
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
          // {url:"https://pic.downk.cc/item/5f7b19dd160a154a67b5027d.jpg"}
        ],
      },
      //校验规则
      rules: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur",
          },
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
    //图片超出上传次数提示
    imagetip() {
      if (this.ruleForm.fileList.length === 1) {
        let hanle = function (event) {
          //阻止浏览器默认事件
          if (event.preventDefault && event) {
            event.preventDefault();
          }
        };
        if (this.ruleForm.fileList.length === 1) {
          let inputFile = document
            .getElementById("uploader")
            .getElementsByTagName("div")[0]
            .getElementsByTagName("input")[0];
          //console.log(inputFile)
          //此变量是判断是否已经上传文件
          inputFile.addEventListener("click", hanle, false); //满足条件给input绑定事件
          this.$message.error("只能上传一张图片！");
          setTimeout(function () {
            inputFile.removeEventListener("click", hanle, false); //移除事件
          }, 500);
        } else {
          //如果将 inputFile.removeEventListener('click',hanle,false)写在else,不能移除hanle事件
        }
      }
    },
    submitForm(formName) {
      //console.log(this.ruleForm.fileList)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          //封装成对象
          //new Date(data).format("yyyy/MM/dd");
          var date = new Date();
          //console.log(date.getTime())
          //console.log(new Date(date.getTime()-this.ruleForm.birthday).format("yyyy-MM-dd"));
          //计算出年龄
          //console.log((date.getTime()-this.ruleForm.birthday)/1000/60/60/24/365)

          //封装对象数据
          let data = {
            nickname: this.ruleForm.name,
            sex: this.ruleForm.sex,
            birthday: new Date(this.ruleForm.birthday).format("yyyy-MM-dd"),
            avatar: this.ruleForm.fileList[0].url,
            age: Math.floor(
              (date.getTime() - this.ruleForm.birthday) /
                1000 /
                60 /
                60 /
                24 /
                365
            ),
            avatarBlob: "",
          };
          console.log(this.ruleForm.fileList[0].url);
          console.log(data);
          urlToBlob(data.avatar, function (result) {
            data.avatarBlob = result;
            console.log(data);
            setTimeout(() => {
              //上传数据到node
              updateAdministratorInfo(data).then(
                (success) => {
                  console.log(success)
                },
                (error) => {
                  console.log(error);
                }
              );
            }, 1000);
          });
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
    changeUpload(file, fileList) {
      this.ruleForm.fileList = fileList;
      // console.log(fileList)
      // console.log(this.ruleForm.fileList)
    },
    //移除
    handleRemove(file, fileList) {
      //两个fileList不是一个东西 一个是自己的变量 一个是upload中的fileList
      this.ruleForm.fileList = fileList;
    },
    //图片预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    beforeAvatarUpload(file) {
      console.log(file);
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

  mounted() {
    //console.log(this.administratorsInfo.nickname);
    //给表单中赋值
    if (this.administratorsInfo.nickname) {
      //昵称
      this.ruleForm.name = this.administratorsInfo.nickname;
      //性别
      this.ruleForm.sex = this.administratorsInfo.sex;
      //头像
      this.ruleForm.fileList.push({ url: this.administratorsInfo.avatar });
      //生日
      this.ruleForm.birthday = Date.parse(this.administratorsInfo.birthday);
      //console.log(this.ruleForm.birthday)
      //console.log(this.ruleForm.fileList[0])
    }
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