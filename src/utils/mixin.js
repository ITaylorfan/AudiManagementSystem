import {mapActions,mapGetters} from "vuex"

export const Admin={
        //变量
        computed: {
            ...mapGetters(["isUserInfoCenter","isLogin","administratorsInfo"])
        },
        //方法
        methods: {
            ...mapActions(["setIsUserInfoCenter","setIsLogin","setAdministratorsInfo"]),

            //重置滚动条
            resetScrollBar(){
                document.documentElement.scrollTop=0
            }
        },
}