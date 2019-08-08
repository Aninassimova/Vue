var routes = [
	{
		path: '/',
		component:{
			template: `
			<div>
				<h1>首页</h1>
			</div>
			`,
		},
	},
	{
		path: '/about',
		component:{
			template: `
			<div>
				<h1>关于我们</h1>
			</div>
			`,
		},
	},
	{
		path: '/user/:name',
		name: 'user',
		component:{
			template: `
			<div>
				<div>我叫:{{$route.params.name}}</div>
				<div>我今年:{{$route.query.age}}岁了</div>
				<router-link :to="'/user/' + $route.params.name + '/more'">更多信息方法1</router-link>
				<router-link to="more" append>更多信息方法2</router-link>
				<router-view></router-view>
			</div>
			`,
		},
		children: [
			{
				path:'more',
				component:{
					template:`
					<div>
						用户：{{$route.params.name}}的详细信息
						</br>
						这个人很懒，什么都没有留下。
					</div>
					`
				}
			}
		]
	}
];

var router = new VueRouter({
	routes: routes,
});

new Vue({
	el:'#app',
	router:router,
	methods:{
		surf:function(){
			setTimeout(function(){
				this.router.push('/about');
				setTimeout(function(){
					this.router.push({name: 'user', params: {name: '花花'}});
				},2000)
			},2000)
		}
	}
});
