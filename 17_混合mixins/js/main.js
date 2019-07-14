var base={
	methods:{
		show:function(){
			this.visible= true;
		},
		hide:function(){
			this.visible= false;
		},
		toggle:function(){
			this.visible=!this.visible;
		}
	},
	data: function(){
		return{
			visible:false,
		}
	}
};

Vue.component('tooltip',{
	template:`
	<div>
		<span @mouseenter="show" @mouseleave="hide">Tip</span>
		<div v-if="visible">花花</div>
	</div>
	`,
	mixins:[base],
	data:function(){
		return{
			visible:true,
		}
	}
});

Vue.component('popup',{
	template:`
	<div>
		<button @click="toggle">Popup</button>
		<div v-if="visible">
			<span @click="hide">隐藏</span>
			<h4>title</h4>
			乌啦啦啦
		</div>
	</div>
	`,
	mixins:[base],
});

new Vue({
	el:"#app",
	data:{
		
	}
})
