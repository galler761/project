// Initialize your app
var myApp = new Framework7({
	swipePanel: 'left',
	smartSelectBackText: "返回",
	smartSelectPopupCloseText: "关闭",
	smartSelectPickerCloseText: "完成"
	
});

// Export selectors engine
var $$ = Dom7;
var mainView = myApp.addView('.view-main');
// Add view
//首页的tar切换,标题切换
$$(".toolbar-bottom .toolbar-inner a").click(function() {
	var s = $$(this).find(".tabbar-label");
	var value = s.text();
	$$("#first-ye").text(value);

});
//$$(".toolbar-bottom .toolbar-inner a").mouseover(function() {
//	var s = $$(this).find(".tabbar-label");
//	var value = s.text();
//	$$("#first-ye").text(value);
//
//});
$$(document).on('pageInit', function(e) {
	// Page Data contains all required information about loaded and initialized page 
	var page = e.detail.page;
	if(page.name == 'shopcat') {
		var list = [
			// picture
			{
				content: 'img/e5ff0081cb237db138012f73.jpg'
			},
			// HTML String
			{
				content: 'img/e5ff0081cb237db138012f73.jpg'
			},
			{
				content: 'img/e5ff0081cb237db138012f73.jpg'
			},
			{
				content: 'img/e5ff0081cb237db138012f73.jpg'
			},
			// element

		];
		//
		var S = new iSlider(document.getElementById('iSlider-wrapper1'), list, {
			isLooping: 1,
			isOverspread: 1,
			isAutoplay: 1,
			animateTime: 800,
			animateType: 'flow',
			plugins: ['dot']
		});

	}
	if(page.name == 'index') {
		//  	alert(111);
		var list = [
			// picture
			{
				content: 'img/e5ff0081cb237db138012f73.jpg'
			},
			// HTML String
			{
				content: 'img/e5ff0081cb237db138012f73.jpg'
			},
			{
				content: 'img/e5ff0081cb237db138012f73.jpg'
			},
			{
				content: 'img/e5ff0081cb237db138012f73.jpg'
			},
			// element

		];
		//
		var S = new iSlider(document.getElementById('iSlider-wrapper'), list, {
			isAutoplay: 1,
			isLooping: 1,
			isOverspread: 1,
			animateTime: 800,
			plugins: ['dot']
		});

	}
	if(page.name == 'address') {
		var area1 = new LArea();
		area1.init({
			'trigger': '#home', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
			'valueTo': '#value1', //选择完毕后id属性输出到该位置
			'keys': {
				id: 'id',
				name: 'name'
			}, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
			'type': 1, //数据源类型
			'data': LAreaData //数据源
		});
	}
	if(page.name == 'message') {
		//消息中心的a标签
		$$("#a-message a").click(function() {
			//		var ms = $$(this).hasClass("matels");
			$$(this).addClass("bg-color").siblings('#a-message a').removeClass("bg-color");
		});
	}
	if(page.name=="oder"){
		//有bug//正在找办法解决
		  var tex= page.query;  
		  document.getElementById("center").innerHTML =tex.value;
		  if(tex.value=="我的订单"){
		  	document.getElementById("status").innerHTML ="完成";
		  	document.getElementById("zhifu").innerHTML ="支付";
		  }else if(tex.value=="待收货"){
		  	document.getElementById("status").innerHTML ="未完成";
		  	document.getElementById("zhifu").innerHTML ="支付";
		  }else if(tex.value=="待付款"){
		  	document.getElementById("status").innerHTML ="未完成";
		  	document.getElementById("zhifu").innerHTML ="未支付";
		  }else if(tex.value=="待评价"){
		  	document.getElementById("status").innerHTML ="完成";
		  	document.getElementById("zhifu").innerHTML ="支付";
		  	document.getElementById("pingjie").innerHTML ="未评价";
		  }
	   
	}
	if(page.name=="admin"){
		var pickerDevice = myApp.picker({
	    input: '#picker-device',
	    toolbarCloseText:  '关闭',
	    cols: [
	        {
	            textAlign: 'center',
	            
	            values: ['商品相关(质量,建议,咨询,缺货等)', '服务相关(支付,发货,退换货,售后等)', '活动相关(预约,抢购,方案优化等)', '网站相关(错别字,连接失效,体验改进等)', '其他问题']
	        }
	    ]
});
	}
	//商品详情页 的参数弹框
	$$('#create-popup').on('click', function() {
		var popupHTML = '<div class="popup">' +
			'<div class="content-block1">' +
			'<p><a href="#" class="close-popup">关闭</a></p>' +
			'<p class="pupo-title">参数详情</p>' +
			'<div class="list-block">' +
			' <ul>' +
			' <li class="item-content">' +
			' <div class="item-inner">' +
			' <div class="item-title">颜色：555</div>' +
			'</div>' +
			' </li>' +
			'<li class="item-content">' +
			'<div class="item-inner">' +
			'  <div class="item-title">型号:444</div>' +
			' </div>' +
			' </li>' +
			'</ul>' +
			'</div>' +
			'</div>' +
			'</div>';
		myApp.popup(popupHTML);
	});
	//商品详情页 的评论
	$$('#pinglun').on('click', function() {
		var popupHTML = '<div class="popup">' +
			'<div class="content-block">' +
			'<p><a href="#" class="close-popup">关闭</a></p>' +
			'<p class="pupo-title">评论</p>' +
			'<div class="list-block media-list">' +
			'<ul>' +
			'<li>' +
			'<div class="item-content">' +
			'<div class="item-media"><img src="..." width="44"></div>' +
			'<div class="item-inner">' +
			'<div class="item-title-row">' +
			'  <div class="item-title">Yellow Submarine</div>' +
			' </div>' +
			'   <div class="item-subtitle">Beatles</div>' +
			'  </div>' +
			' </div>' +
			'</li>' +
			'<li>' +
			'<div class="item-content">' +
			'<div class="item-media"><img src="..." width="44"></div>' +
			'<div class="item-inner">' +
			'<div class="item-title-row">' +
			'  <div class="item-title">Yellow Submarine</div>' +
			' </div>' +
			'   <div class="item-subtitle">Beatles</div>' +
			'  </div>' +
			' </div>' +
			'</li>' +
			'</ul>' +
			'</div>' +
			'</div>';
		myApp.popup(popupHTML);
	});
	//忘记密码页面的下一步
	$$('#yixiabu a').on('click', function() {
		$$("#lslss #first-b").addClass("matels");
		$$("#lslss #first-a").removeClass("matels");
		$$("#lslss #first-c").removeClass("matels");
	});
	$$('#ajaxpot #backl').on('click', function() {
		$$("#lslss #first-a").addClass("matels");
		$$("#lslss #first-b").removeClass("matels");
		$$("#lslss #first-c").removeClass("matels");
	});
	$$('#ajaxpot #next').on('click', function() {
		$$("#lslss #first-c").addClass("matels");
		$$("#lslss #first-a").removeClass("matels");
		$$("#lslss #first-b").removeClass("matels");
	});
});
//分类页面的左边a标签
$$(".leftman a").click(function() {
	//		var ms = $$(this).hasClass("matels");
	$$(this).addClass("leftavcter").siblings('.leftman a').removeClass("leftavcter");
});

function createContentPage() {
	mainView.router.loadContent(
		'<!-- Top Navbar-->' +
		'<div class="navbar">' +
		'  <div class="navbar-inner">' +
		'    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
		'    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
		'  </div>' +
		'</div>' +
		'<div class="pages">' +
		'  <!-- Page, data-page contains page name-->' +
		'  <div data-page="dynamic-pages" class="page">' +
		'    <!-- Scrollable page content-->' +
		'    <div class="page-content">' +
		'      <div class="content-block">' +
		'        <div class="content-block-inner">' +
		'          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
		'          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
		'        </div>' +
		'      </div>' +
		'    </div>' +
		'  </div>' +
		'</div>'
	);
	return;
}
//子页面可以引入js
$$(document).on('pageInit', function(e) {
	var page = e.detail.page;
	var ajaxLoadedData = $(page.container).html();
	var regDetectJs = /<script(.|\n)*?>(.|\n|\r\n)*?<\/script>/ig;
	var jsContained = ajaxLoadedData.match(regDetectJs);
	if(jsContained) {
		var regGetJS = /<script(.|\n)*?>((.|\n|\r\n)*)?<\/script>/im;
		var jsNums = jsContained.length;
		for(var i = 0; i < jsNums; i++) {
			var jsSection = jsContained[i].match(regGetJS);
			if(jsSection[2]) {
				if(window.execScript) {
					window.execScript(jsSection[2]);
				} else {
					window.eval(jsSection[2]);
				}
			}
		}
	}
});
//所以下拉刷新当前页面
$$(document).on('pageInit', function(e) {
	$$('.pull-to-refresh-content').on('refresh', function(e) {
		mainView.router.reloadPage(mainView.url);
		myApp.pullToRefreshDone();
	});
});