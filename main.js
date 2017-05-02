var wheight=window.screen.height;
var wwidth=window.screen.width;
function twidth(ele){
    return $(ele).width();
}
function theight(ele) {
    return $(ele).height();
}
function goto_midle(child,father) {               //设置高度居中  在某个元素的基础上居中

    $(child).css({
        "top": theight($(father)) * 0.5 - $(child).height() * 0.5 + 'px',
    });
}
function goto_center(child,father){                            //设置水平居中
    $(child).css({
        "left":twidth($(father))*0.5-twidth($(child))*0.5+'px',
    });
}
function squqre(){//成正方形
    for (var i=0;i<arguments.length;i++){
        $(arguments[i]).css({
            "height":twidth($(arguments[i]))+'px',
        });
    }

}
function shape(ele,num){                                    //成任意矩形
    $(ele).css({
        "height":twidth($(ele))*num+'px',
    });
}
function disappear(){
    for (var i=0;i<arguments.length;i++){
            $(arguments[i]).css({"display":"none"});
    }
}
function appear(){
    for (var i=0;i<arguments.length;i++){
        $(arguments[i]).css({"display":"block"});
    }
}
function liHeight(ele){
    for (var i=0;i<arguments.length;i++){
    $(arguments[i]).css({
        "lineHeight":theight($(arguments[i]))+'px',
    });
    }
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURI(r[2]); return null;            //获取url的数据
}

function decode(s) {
    return unescape(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'));                 //将Unicode的编码字符串转化为汉字
}
function doAjaxPost(url,param,fuc){										//封装ajax的post方法
	$.ajax({
		url:url,
		dataType:"json",
		type:"post",
		data:param,
		success:fuc()
	});
}
function doAjaxGet(url,param,fuc){										//封装ajax的get方法
	$.ajax({
		url:url,
		dataType:"json",
		type:"get",
		data:param,
		success:fuc()
	});
}
function doAjaxJsonp(url,param,getCallbackName,fuc){										//封装ajax的jsonp方法
	$.ajax({
		url:url,
		dataType:"jsonp",
		jsonpCallback:getCallbackName,
		data:param,
		success:fuc()
	});
}

function getCookieValues(){
	return $.cookie();
}

function setCookie(val,time){
	for(var v in val){
		$.cookie(v,val[v],{expires:time,path:'/'});
	}
}

//if (typeof Array.prototype.forEach != "function") {
//Array.prototype.forEach = function (fn, context) {
//  for (var k = 0, length = this.length; k < length; k++) {
//    if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) {
//      fn.call(context, this[k], k, this);
//    }
//  }
//};
//}


Array.prototype.myForEach = function myForEach(callBack, context) {					//让forEach兼容IE浏览器
    typeof context === "undefined" ? context = window : null;
    if ("forEach" in Array.prototype) {
        this.forEach(callBack, context);
        return;
    }

    //->不兼容处理
    for (var i = 0; i < this.length; i++) {
        typeof callBack === "function" ? callBack.call(context, this[i], i, this) : null;
    }
};

var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }						//返回顶层对象
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};


