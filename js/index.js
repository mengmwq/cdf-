/*
 * @Author: your name
 * @Date: 2020-09-02 18:46:28
 * @LastEditTime: 2021-02-23 13:07:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Taurus\js\index.js
 */
//判断微信内打开链接
function is_weixin() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
}
// 判断安卓
function isAndroid() {
    var u = navigator.userAgent;
    if (u.indexOf("Android") > -1 || u.indexOf("Linux") > -1) {
        return true;
    }
    return false;
}
// 判断设备为 ios
function isIos() {
    var u = navigator.userAgent;
    if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
        return true;
    }
    return false;
}
$(function(){
	window.location.href = 'weixin://dl/business/?t=Gk6QAZsX1Si'
	var win = window,
	doc = document;
	function setFontSize() {
	　　var winWidth = $(window).width();
	　　//750这个数字是根据你的设计图的实际大小来的，所以值具体根据设计图的大小
	　　var size = (winWidth / 750) * 100;
	　　doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
	};
	//这里我们给个定时器来实现页面加载完毕再进行字体设置
	setTimeout(function() {
	　　//初始化
	　　setFontSize();
	}, 100);
	$('#android').hide();
	$('#ios').hide();
	$('#wx').hide();
	if(is_weixin()){
		//微信端打开的
		$('#wx').show();
		$('#android').show();
		//window.location.href = 'weixin://dl/business/?t=Gk6QAZsX1Si'
	}else{
		if(isIos()){
			//苹果端打开的
			$('#ios').show();
		}else{
			//安卓端打开的
			$('#android').show();
		
		}
	}
	
	
});
