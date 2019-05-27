//父组件
/*Vue.component('balance',{
	template:'<div><show @show_balance="show_balance=true"></show><div v-if="show_balance">您的余额：98￥</div></div>', //父组件
	data:function(){
		return{
			show_balance:false,
		}
	}
});*/
Vue.component('balance',{
	template:'<div><show @show_balance="show_balance"></show><div v-if="show">您的余额：98￥</div></div>', //父组件
	methods:{
		show_balance:function(data){
			this.show=true;
			console.log('data',data)
		}
	},
	data:function(){
		return{
			show:false,
		}
	}
});


//子组件（子组件触发事件，父组件接收到事件，同时修改了显示的值）
Vue.component('show',{
	template:'<button @click="on_Click">显示余额</button>',  //子组件
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
