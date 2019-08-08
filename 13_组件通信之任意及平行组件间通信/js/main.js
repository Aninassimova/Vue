var Event=new Vue(); //关键点：调度器

//平行组件
Vue.component('huahua',{
	template:'<div>我说：<input @keyup="on_change" v-model="i_said"></div>',
	methods:{
		on_change:function(){
			Event.$emit('huahua-said-something',this.i_said);  //emit(事件，数据）
		}
	},
	data:function(){
		return{
			i_said:'',
		}
	}
});
Vue.component('dandan',{
	template:'<div>花花说：{{huahua_said}}</div>',
	data:function(){
		return{
			huahua_said:'',
		};
	},
	mounted:function(){  //初始化完毕
		var me=this;
		Event.$on('huahua-said-something',function(data){    //监听
			//console.log("data",data);
			//console.log("this",this);//this此时的域不再是component，而是调度器
			me.huahua_said=data;
		});
	}
});

//域
new Vue({
	el:"#app",
})
