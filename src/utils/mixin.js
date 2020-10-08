import {mapActions,mapGetters} from "vuex"

export const Admin={
        //变量
        computed: {
            ...mapGetters(["isUserInfoCenter"])
        },
        //方法
        methods: {
            ...mapActions(["setIsUserInfoCenter"]),
        },
}