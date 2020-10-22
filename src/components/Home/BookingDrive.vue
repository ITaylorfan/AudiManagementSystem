<template>
 
    <!-- 预约试驾 -->

    <div class="booking-drive-wrapper">
      <!-- 顶部栏 -->
      <top-bar></top-bar>
      <right-switch></right-switch>
      <div class="page-title">
        <div class="title"><span>预约试驾</span></div>
        <div class="line"></div>
      </div>
      <transition
        name="backInRight"
        appear
        enter-active-class="animate__animated animate__backInLeft"
        leave-active-class="animate__animated  animate__backOutRight"
      >
        <div class="content-wrapper">
          <div class="input-wrapper">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="意向车型" prop="carType" required>
                <el-select
                  v-model="ruleForm.carType"
                  placeholder="请选择中意车型"
                >
                  <el-option label="A3" value="A3"></el-option>
                  <el-option label="A4" value="A4"></el-option>
                  <el-option label="A5" value="A5"></el-option>
                  <el-option label="A6" value="A6"></el-option>
                  <el-option label="A7" value="A7"></el-option>
                  <el-option label="A8" value="A8"></el-option>
                  <el-option label="Q3" value="Q3"></el-option>
                  <el-option label="Q5" value="Q5"></el-option>
                  <el-option label="Q7" value="Q7"></el-option>
                  <el-option label="Q8" value="Q8"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="试车时间" required>
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
                  v-model.number="ruleForm.phone"
                  placeholder="请输入手机号"
                   maxlength="11"
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
      </transition>
      <bottom-bar></bottom-bar>
    </div>
 
</template>

<script>
import TopBar from "../Home/TopBar";
import BottomBar from "../Home/BottomBar";
import MapShow from "../Home/MapShow";
import { Admin } from "../../utils/mixin";
import RightSwitch from "../../components/Home/RightSwitch"
export default {
  mixins: [Admin],
  components: {
    TopBar,
    BottomBar,
    MapShow,
    RightSwitch
  },
  data() {
    //自定义校验
      var checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入正确的手机号！'));
          } else {
            if (!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(value))) {
              callback(new Error('请输入正确的手机号！'));
            } else {
              callback();
            }
          }
        }, 1000);
      }
    return {
      pickerOptions: {
        disabledDate(time) {
          //此条为设置禁止用户选择今天之前的日期，包含今天。
          // return time.getTime() <= (Date.now()-(24 * 60 * 60 * 1000));
          //此条为设置禁止用户选择今天之前的日期，不包含今天。
          return time.getTime() <= Date.now() - 24 * 60 * 60 * 1000;
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
          { min: 3, max: 5, message: "最少输入两个字符", trigger: "blur" },
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
        phone: [{ validator: checkPhone, trigger: "blur"}],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(!this.isUserLogin){
            alert("先登录")
          }
          alert("submit!");

        } else {
          console.log("error submit!!");
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
.booking-drive-wrapper {
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
      .map-box{
        padding-top: 30px;
        height: 76%;
      }
    }
  }
}
</style>