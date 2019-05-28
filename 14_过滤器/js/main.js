Vue.filter('meter',function(val,unit){  //过滤器名字，传参
	val=val||0;
	unit=unit||'m';
	return (val/1000).toFixed(2)+unit;
});

Vue.filter('currency',function(val,unit){  //过滤器名字，传参
	val=val||0;
	unit=unit||'元';
	return val+unit;
});

//域
new Vue({
	el:"#app",
	data:{
		price:10,
		length:10,
	}
})
