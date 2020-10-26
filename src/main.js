import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import { Button ,Form,FormItem, Input,Divider, MenuItem,
  MenuItemGroup, Menu,Submenu, Dropdown, DropdownMenu,
  DropdownItem, Table,TableColumn, Popover, Image,  Select,
  Option, Col, DatePicker,TimePicker, Checkbox, Switch, CheckboxGroup, Radio,
  RadioGroup, Upload,Dialog,Message, MessageBox, Carousel,
  CarouselItem,Drawer, Collapse,
  CollapseItem, Card,Loading} from 'element-ui';
  // 导入echarts
  import echarts from 'echarts'
  //导入百度地图
  import BaiduMap from 'vue-baidu-map';
  //导入第三方动画库
  import animated from 'animate.css'
  //导入md5加密
  import md5 from 'js-md5';

  //在原型中加入，方便调用
Vue.prototype.$echarts = echarts
Vue.prototype.$axios=axios
Vue.prototype.$message=Message
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$Loading=Loading
Vue.prototype.$md5=md5

Vue.config.productionTip = false

Vue.use(animated)
Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: 'pGaVGbXveybMBhW5BWb5aioaPpD6s7jT'
})
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Divider)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Image)
Vue.use(Select)
Vue.use(Option)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Drawer)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Card)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
