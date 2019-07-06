Vue.directive('pin',function(el,binding){ //元素，指令和信息
	var pinned=binding.value;
	var position=binding.modifiers;
	var warning=binding.arg;
//	{name: "pin", rawName: "v-pin:true.bottom.left", value: false, expression: "card1.pinned", arg: "true", …}
//	arg: "true"
//	def: {bind: ƒ, update: ƒ}
//	expression: "card1.pinned"
//	modifiers: {bottom: true, left: true}
//	name: "pin"
//	rawName: "v-pin:true.bottom.left"
//	value: false
//	__proto__: Object

	if(pinned){
		el.style.position='fixed';
		for(var key in position){
			if(position[key]){
				el.style[key]='10px'
			}
		}
		if(warning === 'true'){
			el.style.background='yellow';
		}
	}else{
		el.style.position='static';
	}
})
//域
new Vue({
	el:"#app",
	data:{
		card1:{
			pinned:false,
		},
		card2:{
			pinned:false,
		},
	}
})
