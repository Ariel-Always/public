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




if (typeof Array.prototype.forEach != "function") {									//forEach兼容IE
	  Array.prototype.forEach = function (fn, context) {
	    for (var k = 0, length = this.length; k < length; k++) {
	      if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) fn.call(context, this[k], k, this);
	    }
	  };
	}

	if (typeof Array.prototype.map != "function") {									//map兼容IE
	  Array.prototype.map = function (fn, context) {
		var arr = [];
		if (typeof fn === "function") {
	   	  for (var k = 0, length = this.length; k < length; k++) {
			  arr.push(fn.call(context, this[k], k, this));
		  }
	    }
		return arr;
	  };
	}

	if (typeof Array.prototype.filter != "function") {								//filter兼容IE
	  Array.prototype.filter = function (fn, context) {
		var arr = [];
		if (typeof fn === "function") {
	   	  for (var k = 0, length = this.length; k < length; k++) {
			  fn.call(context, this[k], k, this) && arr.push(this[k]);
		  }
	    }
		return arr;
	  };
	}

	if (typeof Array.prototype.some != "function") {								//some兼容IE
	  Array.prototype.some = function (fn, context) {
		var passed = false;
		if (typeof fn === "function") {
	   	  for (var k = 0, length = this.length; k < length; k++) {
			  if (passed === true) break;
			  passed = !!fn.call(context, this[k], k, this);
		  }
	    }
		return passed;
	  };
	}

	if (typeof Array.prototype.every != "function") {							//every兼容IE
	  Array.prototype.every = function (fn, context) {
		var passed = true;
		if (typeof fn === "function") {
	   	  for (var k = 0, length = this.length; k < length; k++) {
			  if (passed === false) break;
			  passed = !!fn.call(context, this[k], k, this);
		  }
	    }
		return passed;
	  };
	}

	if (typeof Array.prototype.indexOf != "function") {							//indexof兼容IE
	  Array.prototype.indexOf = function (searchElement, fromIndex) {
		var index = -1;
		fromIndex = fromIndex * 1 || 0;

	   	for (var k = 0, length = this.length; k < length; k++) {
		  if (k >= fromIndex && this[k] === searchElement) {
			  index = k;
			  break;
		  }
	    }
		return index;
	  };
	}

	if (typeof Array.prototype.lastIndexOf != "function") {						
	  Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
		var index = -1, length = this.length;
		fromIndex = fromIndex * 1 || length - 1;

	   	for (var k = length - 1; k > -1; k-=1) {
	    	if (k <= fromIndex && this[k] === searchElement) {
				index = k;
				break;
			}
	    }
		return index;
	  };
	}

	if (typeof Array.prototype.reduce != "function") {								//reduce兼容IE
	  Array.prototype.reduce = function (callback, initialValue ) {
		 var previous = initialValue, k = 0, length = this.length;
		 if (typeof initialValue === "undefined") {
			previous = this[0];
			k = 1;
		 }
		 
	    if (typeof callback === "function") {
	      for (k; k < length; k++) {
			 this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
		  }
	    }
		return previous;
	  };
	}

	if (typeof Array.prototype.reduceRight != "function") {
	  Array.prototype.reduceRight = function (callback, initialValue ) {
	    var length = this.length, k = length - 1, previous = initialValue;
	    if (typeof initialValue === "undefined") {
	        previous = this[length - 1];
	        k--;
	    }
	    if (typeof callback === "function") {
	       for (k; k > -1; k-=1) {          
	          this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
	       }
	    }
	    return previous;
	  };
	}

