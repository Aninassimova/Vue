var vue = new Vue({
    el: "#app",
    data: {
        //总项目数
        totalCount: 200,
        //分页数
        pageCount: 20,
        //当前页面
        pageCurrent: 1,
        //分页大小
        pagesize: 10,
        //显示分页按钮数
        showPages: 5,
        //开始显示的分页按钮
        showPagesStart: 1,
        //结束显示的分页按钮
        showPageEnd: 100,
        //分页数据
        arrayData: []
    },
    methods: {
        //分页方法
		showPage: function (pageIndex, forceRefresh) {
 
			if (pageIndex > 0) {
				if (pageIndex > this.pageCount) {
					pageIndex = this.pageCount;
				}
 
	            //判断数据是否需要更新
	            var currentPageCount = Math.ceil(this.totalCount / this.pagesize);
	            if (currentPageCount != this.pageCount) {
	                pageIndex = 1;
	                this.pageCount = currentPageCount;
	            }
				else if (this.pageCurrent == pageIndex && currentPageCount == this.pageCount && typeof (forceRefresh) == "undefined") {
					// console.log("not refresh");
					return;
				}
	 
				//处理分页点中样式
				var buttons = $("#pager").find("span");
				for (var i = 0; i < buttons.length; i++) {
					if (buttons.eq(i).html() != pageIndex) {
						buttons.eq(i).removeClass("active");
					}
					else {
						buttons.eq(i).addClass("active");
					}
				}
	 
				//测试数据 随机生成的
				var newPageInfo = [];
				for (var i = 0; i < this.pagesize; i++) {
					var pagesize = this.pagesize;
					newPageInfo[newPageInfo.length] = {
						IP: "test" + (i + (pageIndex - 1) * pagesize),
						HostName: (i + (pageIndex - 1) * pagesize),
						OpModule:3,
						FixAssets:4,
						Set:5,
						ChineseName:6,
						Maintainer:7,
						Backup:8,
						Product:9,
						Room:10
					};
				}
				this.pageCurrent = pageIndex;
				this.arrayData = newPageInfo;
	 
				//计算分页按钮数据
				if (this.pageCount > this.showPages) {
					if (pageIndex <= (this.showPages - 1) / 2) {
						this.showPagesStart = 1;
						this.showPageEnd = this.showPages - 1;
						// console.log("showPage1")
					}
					else if (pageIndex >= this.pageCount - (this.showPages - 3) / 2) {
						this.showPagesStart = this.pageCount - this.showPages + 2;
						this.showPageEnd = this.pageCount;
						// console.log("showPage2")
					}
					else {
						// console.log("showPage3")
						this.showPagesStart = pageIndex - (this.showPages - 3) / 2;
						this.showPageEnd = pageIndex + (this.showPages - 3) / 2;
					}
				}
				// console.log("showPagesStart:" + this.showPagesStart + ",showPageEnd:" + this.showPageEnd + ",pageIndex:" + pageIndex);
 			}
 
		}
		
	}
});

vue.showPage(vue.pageCurrent,true);

//只能输入正整数过滤器
Vue.filter('onlyNumeric', {
    // model -> view
    // 在更新 `<input>` 元素之前格式化值
    read: function (val) {
        return val;
    },
    // view -> model
    // 在写回数据之前格式化值
    write: function (val, oldVal) {
        var number = +val.replace(/[^\d]/g, '')
        return isNaN(number) ? 1 : parseFloat(number.toFixed(2))
    }
})
 
//数组删除某项功能
Array.prototype.remove = function (dx) {
    if (isNaN(dx) || dx > this.length) { return false; }
    for (var i = 0, n = 0; i < this.length; i++) {
        if (this[i] != this[dx]) {
            this[n++] = this[i]
        }
    }
    this.length -= 1
}