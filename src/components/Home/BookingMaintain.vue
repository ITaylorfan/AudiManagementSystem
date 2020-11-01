<template>
  <!-- 预约试驾 -->
  <div class="booking-maintain-wrapper">
    <!-- 顶部栏 -->
    <top-bar></top-bar>
    <right-switch @getUserLoginInfo="getUserLoginInfo"></right-switch>
    <div class="page-title">
      <div class="title"><span>预约保养</span></div>
      <div class="line"></div>
    </div>

    <div class="content-wrapper">
      <div class="input-wrapper">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="保养车型" prop="carType" required>
            <el-select
              v-model="ruleForm.carType"
              placeholder="请选择要保养的车型"
            >
              <el-option label="A3" value="1"></el-option>
              <el-option label="A4" value="2"></el-option>
              <el-option label="A5" value="3"></el-option>
              <el-option label="A6" value="4"></el-option>
              <el-option label="A7" value="5"></el-option>
              <el-option label="A8" value="6"></el-option>
              <el-option label="Q3" value="7"></el-option>
              <el-option label="Q5" value="8"></el-option>
              <el-option label="Q7" value="9"></el-option>
              <el-option label="Q8" value="10"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="预约时间" required>
            <el-col :span="10">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.date1"
                  style="width: 100%"
                  :picker-options="pickerOptions"
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

          <el-form-item label="" prop="sex" required>
            <el-radio-group v-model="ruleForm.sex">
              <el-radio label="先生"></el-radio>
              <el-radio label="女士"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="手机号" prop="phone">
            <el-input
              v-model="ruleForm.phone"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重填</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="map-wrapper" id="MapContainer">
        <div class="map-box">
          <map-show></map-show>
        </div>
      </div>
    </div>

    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import TopBar from "../Home/TopBar";
import BottomBar from "../Home/BottomBar";
import MapShow from "../Home/MapShow";
import { Admin } from "../../utils/mixin";
import RightSwitch from "../../components/Home/RightSwitch";
import { userSubmit } from "@/api/index";
export default {
  mixins: [Admin],
  components: {
    TopBar,
    BottomBar,
    MapShow,
    RightSwitch,
  },
  data() {
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
        disabledDate(time) {
          //此条为设置禁止用户选择今天之前的日期，包含今天。
          // return time.getTime() <= (Date.now()-(24 * 60 * 60 * 1000));
          //此条为设置禁止用户选择今天之前的日期，不包含今天。
          return time.getTime() <= Date.now();
        },
      },
      ruleForm: {
        carType: "",
        date1: "",
        name: "",
        sex: "先生",
        phone: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "最少输入两个字符", trigger: "blur" },
        ],
        carType: [{ required: true, message: "请选择车型", trigger: "change" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
      },
    };
  },
  methods: {
    //将用户信息中的姓名和手机号填入表单 并获取用户信息id
    getUserLoginInfo(v) {
      //console.log(v)
      this.ruleForm.name = v.name;
      this.ruleForm.phone = v.phone;
      this.userInfoId = v.userInfoId;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.isUserLogin) {
            this.$message.error("请先登录！");
          } else {
            //alert("submit!");
            //console.log(new Date(this.ruleForm.date1).format("yyyy-MM-dd"))
            let data = {
              carType: this.ruleForm.carType,
              bookingTime: new Date(this.ruleForm.date1).format("yyyy-MM-dd"),
              name: this.ruleForm.name,
              sex: this.ruleForm.sex,
              phone: this.ruleForm.phone,
              userInfoId: this.userInfoId,
              bookingType: "预约保养",
            };
            userSubmit(data).then(
              (success) => {
                // console.log(success);
                   setTimeout(() => {
                  this.$message({
                    message: "提交成功！",
                    type: "success",
                  });
                }, 2000);
                  //加载中动画
                let loadingInstance = this.$Loading.service({
                  lock: true,
                  text: "Loading",
                  spinner: "el-icon-loading",
                  background: "rgba(0, 0, 0, 0.7)",
                });
          
                setTimeout(() => {
                  loadingInstance.close();
                  this.$router.go(-1);
                }, 2000);
              },
              (error) => {
                console.log(error);
                this.$message.error("提交失败！");
              }
            );
            //console.error(data)
          }
        } else {
          //console.log("error submit!!");
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //设置地图容器高度
    setMapContainerHeight() {
      let MapContainer = document.getElementById("MapContainer");
      let innerHeight = window.innerHeight;
      MapContainer.style.cssText = `flex:0 0 ${innerHeight - 50}px`;
    },
  },
  mounted() {
    //console.log("adadada")
    this.resetScrollBar();
  },
};
</script>


<style lang="scss" scoped>
@import "../../assets/styles/global";
.booking-maintain-wrapper {
  width: 100%;
  height: 1000px;
  @include columnTopLeft;

  .page-title {
    flex: 0 0 50px;
    width: 100%;
    //background-color: bisque;
    margin-top: 100px;
    padding: 0 100px;
    box-sizing: border-box;
    @include columnTopLeft;
    .title {
      flex: 0 0 35px;
      span {
        font-size: 20px;
        font-weight: bold;
      }
    }
    .line {
      flex: 1;
      width: 100%;
      border-top: 1px solid #e5e8e7;
    }
  }
  .content-wrapper {
    flex: 1;
    width: 100%;
    //background-color: bisque;
    padding: 0 100px;
    box-sizing: border-box;
    @include left;
    .input-wrapper {
      flex: 0 0 600px;
      height: 100%;
      background-color: rgb(255, 255, 255);
      padding-right: 10%;
      padding-top: 30px;
      box-sizing: border-box;
    }
    .map-wrapper {
      flex: 1;
      height: 100%;
      //margin-top: -10px;
      padding: 0 30px 0 30px;
      box-sizing: border-box;
      //background-color: blueviolet;
      .map-box {
        padding-top: 30px;
        height: 76%;
      }
    }
  }
}
</style>