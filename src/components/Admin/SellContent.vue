<template>
  <!-- 销售信息 -->
  <div class="sell-content-wrapper">
    <el-table
      :data="tableData.filter((data) => !search || data.orderID == search)"
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
            <el-form-item label="车型">
              <span>{{ props.row.cname }}</span>
            </el-form-item>
            <el-form-item label="客户 ID">
              <span>{{ props.row.customerID }}</span>
            </el-form-item>
            <el-form-item label="车型 ID">
              <span>{{ props.row.carID }}</span>
            </el-form-item>
            <el-form-item label="客户手机">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="客户地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="创建时间">
              <span>{{ props.row.createTime }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="订单 ID" prop="orderID"> </el-table-column>
      <el-table-column label="成交金额(CNY)" prop="showMoney">
      </el-table-column>
      <!-- 图片预览 -->
      <el-table-column label="车型预览图">
        <template slot-scope="props">
          <div id="closeImage">
            <el-image
              style="width: 60px; height: 40px"
              :src="props.row.imageUrl"
              :preview-src-list="props.row.imageList"
            >
            </el-image>
          </div>
        </template>
      </el-table-column>

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

    <el-dialog :title="changeTitle" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="客户名称" :label-width="formLabelWidth" v-if="isEdit">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
          <el-form-item label="客户ID" :label-width="formLabelWidth" v-if="!isEdit">
            <el-select v-model="form.customerId" placeholder="请选择客户ID">
              <!-- 遍历客户信息id -->
            <el-option :label="item.customerId+' '+item.name" :value="item.customerId" v-for="(item,index) in customerInfo " :key="index" ></el-option>
            
          </el-select>
        </el-form-item>
        <el-form-item label="成交金额(CNY)" :label-width="formLabelWidth">
          <el-input v-model="form.money" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="车型" :label-width="formLabelWidth">
          <el-select v-model="form.carId" placeholder="请选择性别">
            <el-option label="奥迪A3" value="1"></el-option>
            <el-option label="奥迪A4" value="2"></el-option>
            <el-option label="奥迪A5" value="3"></el-option>
            <el-option label="奥迪A6" value="4"></el-option>
            <el-option label="奥迪A7" value="5"></el-option>
            <el-option label="奥迪A8" value="6"></el-option>
            <el-option label="奥迪Q3" value="7"></el-option>
            <el-option label="奥迪Q5" value="8"></el-option>
            <el-option label="奥迪Q7" value="9"></el-option>
            <el-option label="奥迪Q8" value="10"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="客户地址" :label-width="formLabelWidth" v-if="isEdit">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="手机号" :label-width="formLabelWidth" v-if="isEdit">
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
import { getAllSellInfo, saveSellInfo,deleteSellInfo,addSellInfo} from "@/api/index";
import { Admin } from "@/utils/mixin";
export default {
  mixins: [Admin],
  data() {
    return {
      search: "",
      changeTitle:"编辑",
      //复用编辑框判断是否为 编辑状态
      isEdit: true,
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "https://pic.downk.cc/item/5f7c5bb1160a154a67fad24f.jpg",
          srcList: ["https://pic.downk.cc/item/5f7c5bb1160a154a67fad24f.jpg"],
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "https://pic.downk.cc/item/5f7c5bb1160a154a67fad24f.jpg",
          srcList: ["https://pic.downk.cc/item/5f7c5bb1160a154a67fad24f.jpg"],
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ],
      dialogFormVisible: false,
      CARID: 0, //保存初始id
      form: {
        name: "",
        money: "",
        cname: "",
        address: "",
        phone: "",
        orderId: 0,
        customerId: 0,
        carId: 0,
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
      addInfo() {
      
      this.dialogFormVisible = true;
      this.form.name = "";
      this.form.money=0
      this.form.address = "";
      this.form.phone = "";
      this.form.carId="1"
      this.form.customerId=""
      //不是编辑状态
      this.isEdit = false;
      this.changeTitle = "添加新信息";
    },
    //保存信息
    saveInfo() {
      if (this.isEdit) {
        let data = this.form;
        console.log(data);
        console.log(data.carId);

        console.log(this.checkNumber(data.carId));
        if (!this.checkNumber(data.carId)) {
          //未选择汽车 保持默认值
          data.carId = this.CARID;
        }

        this.$confirm("此操作将保存信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            saveSellInfo(data).then(
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
            console.log("的");
            this.$message({
              type: "info",
              message: "已取消保存",
            });
          });
      } else {
        //添加信息
        let data = this.form;
        //console.log(data.birthday)
        //data.birthday = new Date(data.birthday).format("yyyy-MM-dd");
        console.log(data);
        this.$confirm("此操作将添加新信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            addSellInfo(data).then(
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
       orderId: data.orderID,
      };
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //console.log("确定");
          //删除
          deleteSellInfo(Data).then(
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
      //console.log(data)
      this.changeTitle="编辑"

      this.CARID = data.carID;
      this.form.carId = data.cname;
      this.form.customerId = data.customerID;
      this.form.orderId = data.orderID;

      this.isEdit = true;
      this.dialogFormVisible = true;
      this.form.name = data.name;
      this.form.cname = data.cname;
      this.form.money = data.money;
      this.form.address = data.address;
      this.form.phone = data.phone;
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
    //获取所有信息
    getInfo() {
      getAllSellInfo().then(
        (success) => {
          //console.log(success);
          this.tableData = success.data;
          this.tableData.forEach((item, index) => {
            //在对象中加入图片列表属性
            item["imageList"] = [item.imageUrl];
            item.createTime = new Date(item.createTime).format(
              "yyyy-MM-dd hh:mm:ss"
            );
            item["showMoney"] = item.money / 10000 + "万";
          });
         
        },
        (error) => {}
      );
    },
  },
  mounted() {
    this.getInfo()
  },
};
</script>

<style lang="scss" scoped>
.sell-content-wrapper {
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

<style lang="scss">
#closeImage {
  color: white;
}
</style>