//组件
Vue.component('balance',{
	template:'<div><show @show_balance="show_balance=true"></show><div v-if="show_balance">您的余额：98￥</div></div>',
	data:function(){
		return{
			show_balance:false,
		}
	}
});
Vue.component('show',{
	template:'<button @click="on_Click">显示余额</bitton>',  //子组件
	methods:{
		on_Click(){
			this.$emit('show_balance',{a:1,b:2});  //emit触发一个事件
		}
	}
});


//域
new Vue({
	el:"#app",
})
