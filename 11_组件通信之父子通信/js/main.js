//组件
/*Vue.component('alert',{
	template:'<button @click="on_Click()">章台南京市</button>', //可视化内容	
	props:["msg"], //传参
	methods:{
		on_Click:function(){
			alert(this.msg);
		}
	}
});*/
Vue.component('user',{
	template:'<a :href="\'/user/\'+username">{{username}}</a>', //可视化内容	
	props:["username"], //传参
	methods:{}
});

//域
new Vue({
	el:"#app",
})
