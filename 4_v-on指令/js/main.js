var app=new Vue({
	el:'#app',
	methods:{
		onClick:function(){
			console.log('clicked');
		},
		onEnter:function(){
			console.log('mouse enter');
		},
		onOut:function(){
			console.log('mouse leave');
		},
		/*onSubmit:function(e){
			e.preventDefault();//防止整页刷新
			console.log('submitted');
		},*/
		onSubmit:function(){
			console.log('submitted');
		},
		keyEnter:function(){
			console.log('entered');
		},
	}
})