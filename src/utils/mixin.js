import {mapActions,mapGetters} from "vuex"

export const Admin={
        //变量
        computed: {
            ...mapGetters(["isUserInfoCenter","isLogin","administratorsInfo"])
        },
        //方法
        methods: {
            ...mapActions(["setIsUserInfoCenter","setIsLogin","setAdministratorsInfo"]),

            
        },
}