fr([1],[function(e,t,n){"use strict";var o=angular.module("myApp",[]);o.controller("myController",function(){this.ajaxPost=function(e,t){return $http({method:"POST",url:e,data:$.param(t),headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:null}).then(function(e){console.log(e.data),window.location.href="./"},function(e){console.log(e.data)})},this.cookieSave=function(e){$.cookie("getNum",e,{expires:1})},this.checkCookie=function(){return $.cookie("getNum")}(),this.submit=function(e,t,n,o,a,i){if(e.preventDefault(),"disabled"!==$(e.target).parent().attr("disabled")&&"disabled"!==$(e.target).attr("disabled")){var l={doctor:n,specialtiy:t,concerns:o,behalfOfSomeone:a,patientName:i};console.log(l),window.location.href="./",this.cookieSave(!0)}},this.doctors=[{name:"Dr.One"},{name:"Dr.Two"},{name:"Dr.Tree"}],this.specialists=[{name:"Surgery"},{name:"Internal medicine"},{name:"Dentistry"},{name:"Department of Obstetrics and Gynecology"}],this.specialties=[{name:"Doctor’s specialty",value:""},{name:"Psychiatry",value:"psychiatry"},{name:"Pediatrics",value:"specialty-1"},{name:"Internal Medicine",value:"specialty-2"},{name:"Obstetrics & Gynecology",value:"specialty-3"},{name:"Ophtalmology",value:"specialty-4"},{name:"Neurology",value:"specialty-5"},{name:"Dermatology",value:"specialty-6"},{name:"Family Medicine",value:"specialty-7"},{name:"Dentist",value:"specialty-8"},{name:"Pulmonology",value:"specialty-9"},{name:"Hematology and Onconlogy",value:"specialty-10"},{name:"Rheumatology",value:"specialty-11"},{name:"Nephrology",value:"specialty-12"},{name:"Gastrointerology",value:"specialty-13"},{name:"DiabetologyCardiolog",value:"specialty-14"},{name:"yEENT",value:"specialty-15"}]}),n(2),n(3),n(1),n(7)},function(e,t){"use strict";!function(){function e(){o=i.width(),a=s.length}function t(){s.css("width",o),l.css("width",o*a)}function n(){e(),t()}var o,a,i=$(window),l=$("#js-form-slider .form__inner"),s=l.find(".form__item");i.on("load resize",n)}()},function(e,t){"use strict";var n=function(){for(var e=document.documentElement,t=window.navigator.userAgent.toLowerCase(),n=["windows"],o=" ",a=0,i=n.length;i>a;a+=1)if(-1!==t.indexOf(n[a])){e.className+=o+n[a];break}}();e.exports=n},function(e,t){"use strict";!function(){function e(){a.on("DOMMouseScroll",n),a.on("mousewheel",n)}function t(){a.off("DOMMouseScroll",n),a.off("mousewheel",n)}function n(e){e.preventDefault()}var o=50,a=$(document);$("a.js-scroll").click(function(n){if(!$(this).hasClass("nolink")){var a=$(this).attr("href"),i=$(a).offset().top;return e(),$("html, body").animate({scrollTop:i-o},500,t),n.preventDefault(),!1}})}()},,,,function(e,t){"use strict";!function(){function e(){setTimeout(function(){n.fadeOut(750)},500)}var t=$(window),n=$("#js-loading");t.on("load",e)}()}]);
//# sourceMappingURL=maps/app.map