import {mapActions,mapGetters} from "vuex"

export const Admin={
        //变量
        computed: {
            ...mapGetters(["isUserInfoCenter","isLogin","administratorsInfo","isUserLogin","isFirstLogin"])
        },
        //方法
        methods: {
            ...mapActions(["setIsUserInfoCenter","setIsLogin","setAdministratorsInfo","setIsUserLogin","setIsFirstLogin"]),

            //重置滚动条
            resetScrollBar(){
                document.documentElement.scrollTop=0
            }
        },
}