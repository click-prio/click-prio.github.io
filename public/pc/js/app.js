fr([1],[function(e,n,o){"use strict";var t=angular.module("myApp",[]);t.controller("myController",function(){this.items=[{name:"Dr.One"},{name:"Dr.Two"},{name:"Dr.Tree"}]}),o(1),o(2)},function(e,n){"use strict";var o=function(){for(var e=document.documentElement,n=window.navigator.userAgent.toLowerCase(),o=["windows"],t=" ",r=0,s=o.length;s>r;r+=1)if(-1!==n.indexOf(o[r])){e.className+=t+o[r];break}}();e.exports=o},function(e,n){"use strict";!function(){function e(){r.on("DOMMouseScroll",o),r.on("mousewheel",o)}function n(){r.off("DOMMouseScroll",o),r.off("mousewheel",o)}function o(e){e.preventDefault()}var t=50,r=$(document);$("a.js-scroll").click(function(o){if(!$(this).hasClass("nolink")){var r=$(this).attr("href"),s=$(r).offset().top;return e(),$("html, body").animate({scrollTop:s-t},500,n),o.preventDefault(),!1}})}()}]);
//# sourceMappingURL=maps/app.map