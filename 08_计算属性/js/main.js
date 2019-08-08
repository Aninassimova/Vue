var app=new Vue({
	el:'#app',
	data:{
		math:90,
		physics:50,
		english:80,
	},
	computed:{
		sum:function(){
			return parseFloat(this.math)+parseFloat(this.physics)+parseFloat(this.english);
		},
		average:function(){
			return Math.round(this.sum / 3)
		}
	}
})