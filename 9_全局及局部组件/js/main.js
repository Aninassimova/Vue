//第1个传参：这个组件在Vue里的名字
/*Vue.component('alert',{
	template:'<button @click="onClick">弹弹弹弹走鱼尾纹</button>',
	methods:{
		onClick:function(){
			alert('Yo')
		}
	}
});*/

//Vue.component('alert',);//全局组件

var alert_component={
	template:'<button @click="onClick">弹弹弹弹走鱼尾纹</button>',
	methods:{
		onClick:function(){
			alert('Yo')
		}
	}
};

//域
new Vue({
	el:"#seg1",
	components:{		//局部组件
		alert:alert_component
	}
});
new Vue({
	el:"#seg2"			//无法调用seg1的局部组件
});
