//组件
Vue.component('like',{
	//template:'<button :class="{liked:liked}" @click="toggle_like()">👍{{like_count}}</button>', //可视化内容	
	template:'#like-component-tpl', //可视化内容	
	data:function(){
		return{
			like_count:10,
			liked:false,
		}
	},
	methods:{
		toggle_like:function(){
			if(!this.liked) //如果还没有点过赞，this.liked=false
				this.like_count++;
			else			//如果点过赞，this.liked=true
				this.like_count--;

			this.liked=!this.liked;
		}
	}
});

//域
new Vue({
	el:"#app",
})