import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button ,Form,FormItem, Input,Divider, MenuItem,
  MenuItemGroup, Menu,Submenu, Dropdown, DropdownMenu,
  DropdownItem, Table,TableColumn, Popover, Image,  Select,
  Option, Col, DatePicker,TimePicker, Checkbox, Switch, CheckboxGroup, Radio,
  RadioGroup, Upload,Dialog,} from 'element-ui';
  // 导入echarts
  import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
