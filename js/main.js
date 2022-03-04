const app = Vue.createApp({
    data(){
        return {
            title: "Contador app - Vue",
            count: 0
        }
    },
    methods:{
        modCount(sumOrRes = "sum", limit = 1){
            if("res" === sumOrRes){
                this.count -= limit
            }
            if("res" !== sumOrRes){
                this.count += limit
            }
        }
    }
});