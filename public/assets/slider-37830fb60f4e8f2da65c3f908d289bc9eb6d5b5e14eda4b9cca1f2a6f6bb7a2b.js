function isValidEmailAddress(F){return new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i).test(F)}function createCookie(F,e,u){if(u){var t=new Date;t.setTime(t.getTime()+24*u*60*60*1e3);var n="; expires="+t.toGMTString()}else var n="";document.cookie=F+"="+e+n+"; path=/"}function getCookie(F){return document.cookie.length>0&&(c_start=document.cookie.indexOf(F+"="),-1!=c_start)?(c_start=c_start+F.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""}$(function(){function F(){$(window).scrollTop()>=112?e.css({position:"fixed",top:20,right:$(window).width()>700?$(window).width()-($("#primary h1").offset().left+$("#primary").width()):20}):e.css({position:"absolute",top:0,right:$(window).width()>1040?0:20})}$(".home .bxslider").bxSlider({auto:!0,mode:"fade"});var e=$(".reference-wrap");e.length>0&&($(".reference-wrap h3").click(function(){$(".reference-content").slideToggle(300)}),$(".reference-content a").click(function(){$(".reference-content").slideToggle(300);var F=$(this).html();return $("html, body").animate({scrollTop:$("#"+F).offset().top-20},300),!1}),$(window).bind("scroll resize",F)),$(".btn-donate").click(function(){return $("#frm-paypal").submit(),!1}),$(".block-signup form").submit(function(){if(!isValidEmailAddress($("#mce-EMAIL").val()))return $(".block-signup .error").show(),!1})}),function(){var F=document.createElement("script");F.type="text/javascript",F.async=!0,F.src="//s3.buysellads.com/ac/bsa.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(F)}();