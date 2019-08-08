var routes = [
	{
		path: '/',
		component:{
			template: `
			<div>
				<h1>首页</h1>
			</div>
			`,
		}
	},
	{
		path: '/user',
		components:{
			sidebar:{
				template: `
				<div>
					<ul>
						<li>用户列表</li>
						<li>权限管理</li>
					</ul>
				</div>
				`
			},
			content:{
				template: `
				<div>
					我是用户内容
				</div>
				`
			}
		}
	},
	{
		path: '/post',
		components:{
			sidebar:{
				template: `
				<div>
					<ul>
						<li>帖子列表</li>
						<li>帖子管理</li>
					</ul>
				</div>
				`
			},
			content:{
				template: `
				<div>
					我是帖子内容
				</div>
				`
			}
		}
	}
	
];

var router = new VueRouter({
	routes: routes,
});

new Vue({
	el:'#app',
	router:router,
});
