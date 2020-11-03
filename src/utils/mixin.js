import {mapActions,mapGetters} from "vuex"

export const Admin={
        //变量
        computed: {
            ...mapGetters(["isUserInfoCenter","isLogin","administratorsInfo","isUserLogin","isFirstLogin","customerInfo"])
        },
        //方法
        methods: {
            ...mapActions(["setIsUserInfoCenter","setIsLogin","setAdministratorsInfo","setIsUserLogin","setIsFirstLogin","setCustomerInfo"]),

            //重置滚动条
            resetScrollBar(){
                document.documentElement.scrollTop=0
            },
            //判断字符串是否为数字
            checkNumber(theObj) {
                var reg = /^[0-9]+.?[0-9]*$/;
                if (reg.test(theObj)) {
                  return true;
                }
                return false;
            }

            
            
        },
}