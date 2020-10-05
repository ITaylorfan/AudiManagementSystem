import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button ,Form,FormItem, Input,Divider, MenuItem,
  MenuItemGroup, Menu,Submenu, Dropdown, DropdownMenu,
  DropdownItem, Table,TableColumn,} from 'element-ui';
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
