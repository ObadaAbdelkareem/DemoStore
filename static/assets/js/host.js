(function(){if(window.jQuery===undefined){var p=document.createElement("script");p.setAttribute("type","text/javascript");
p.setAttribute("src","//cdn.ywxi.net/static/jquery/1.12.4/jquery-1.12.4.min.js?2");if(p.readyState){p.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){u()
}}}else{p.onload=u}(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(p)}else{jQuery=window.jQuery;
h()}function u(){jQuery=window.jQuery.noConflict(true);h()}function h(){var x=0;if(parseInt(q("trustedsite_session"))==1){x=1
}else{f("trustedsite_session",1,5)}var e=document.createElement("img");e.id="trustedsite-8e972ce17a51465492b4ed3d546c8eef-image-bg";
e.src="//cdn.ywxi.net/static/img/tm-float-bg-right-bottom.png";e.alt="McAfee SECURE";jQuery(e).addClass("trustedsite-floating-element");
e.style.cssText=v()+"position:fixed !important;width:100px;height:40px !important;z-index:1000002 !important;bottom:0px !important;right:0px;";
var y;if(!l()){y=document.createElement("div");jQuery(y).addClass("trustedsite-floating-element");y.style.cssText=v()+"z-index:1000001;width:36px !important;height:40px !important;position:fixed;background:#ffffff !important;opacity:0.7 !important;right:0px;bottom:0px;border-top-left-radius:3px;"
}var z=document.createElement("div");jQuery(z).addClass("trustedsite-floating-element");z.id="trustedsite-8e972ce17a51465492b4ed3d546c8eef-image";
z.innerHTML='<img src="//cdn.ywxi.net/tm/img/float2-right.png?h=newchic.com&d=20180202" width="100" height="40" style="'+v()+'width:100px !important;height:40px !important;" alt="McAfee SECURE">';
z.style.cssText=v()+"position:fixed;height:40px !important;width:100px;overflow:hidden;bottom:0px;right:0px;z-index:1000003 !important;cursor:pointer !important;";
z.oncontextmenu=function(){return false};z.onmousedown=function(){j()};z.onmouseover=function(){n()};z.onmouseout=function(){d()
};if(x){e.style.right="-56px";e.style.display="none";z.style.right="-56px";if(y){document.body.appendChild(y)}}else{if(y){window.setTimeout(function(){document.body.appendChild(y)
},100)}window.setTimeout(function(){i()},2000)}document.body.appendChild(z);document.body.appendChild(e);if(o()){c();jQuery(window).scroll(function(){c()
})}}function n(){window.clearTimeout(w);w=0;g()}var w=0;var m=1;function d(){if(w){return}w=window.setTimeout(function(){i();
w=0},1000)}function i(){if(jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-verify").is(":visible")){return}if(parseInt(jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-image").css("right"))<0){console.log("Already Small");
return}m=0;jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-image-bg").animate({right:"-56px"},400,function(){if(!m){jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-image-bg").fadeOut(100)
}});jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-image").animate({right:"-56px"},400)}function g(){if(o()){return
}if(parseInt(jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-image").css("right"))>0){console.log("Already Big");return
}m=1;jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-image-bg").show();jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-image-bg").animate({right:"0"},200);
jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-image").animate({right:"0"},200)}try{window.addEventListener("message",function(x){if(x.data&&new String(x.data).indexOf("mfesecure_verifyhover_hide")==0){b()
}})}catch(t){}function b(){jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-verify").fadeOut(200)}function j(){if(s()||o()||jQuery(window).height()<=400||jQuery(window).width()<=400){var e=window.open("https://www.mcafeesecure.com/verify?host=newchic.com&popup=1");
if(!e){document.location="https://www.mcafeesecure.com/verify?host=newchic.com&popup=1"}return}var x=document.getElementById("trustedsite-8e972ce17a51465492b4ed3d546c8eef-verify");
if(!x){x=document.createElement("div");x.id="trustedsite-8e972ce17a51465492b4ed3d546c8eef-verify";k(x);x.style.position="fixed";
x.style.boxShadow="rgba(0, 0, 0, 0.298039) 1px 1px 3px";x.innerHTML='<iframe style="'+v()+'width:300px;height:350px;" frameborder="0" src="https://www.mcafeesecure.com/verify-float?host=newchic.com"></iframe>';
x.style.border="solid 1px #ccc";x.style.background="#f5f6f7";x.style.width="300px";x.style.height="350px";x.style.overflow="hidden";
x.style.margin="0";x.style.padding="0";x.style.bottom="50px";x.style.right="10px";x.style.zIndex="1000004";x.style.display="none";
document.body.appendChild(x)}if(jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-verify").is(":visible")){jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-verify").fadeOut(200)
}else{jQuery("#trustedsite-8e972ce17a51465492b4ed3d546c8eef-verify").fadeIn(200)}}function r(y){try{var x=document.createElement("script");
x.setAttribute("type","text/javascript");x.setAttribute("src",y);document.getElementsByTagName("head")[0].appendChild(x)}catch(z){}}function f(x,z,A){if(A){var y=new Date();
y.setTime(y.getTime()+(A*60*1000));var e="expires="+y.toGMTString();document.cookie=x+"="+z+"; path=/;"+e}else{document.cookie=x+"="+z+"; path=/;"
}}function q(y){var x=y+"=";var e=document.cookie.split(";");for(var z=0;z<e.length;z++){var A=a(e[z]);if(A.indexOf(x)==0){return A.substring(x.length,A.length)
}}return""}function c(){if(!o()){return}try{jQuery(".trustedsite-floating-element").css("zoom",((window.innerWidth)/(screen.width))*1)
}catch(x){}}function a(x){if(!x){return""}try{return new String(x).trim()}catch(y){return x}}function s(){return !document.addEventListener
}function o(){return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)}function l(){return navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i)
}function k(x){try{x.style.maxWidth="none"}catch(y){}try{x.style.minWidth="none"}catch(y){}try{x.style.maxHeight="none"}catch(y){}try{x.style.minHeight="none"
}catch(y){}}function v(){return"margin:0 !important;padding:0 !important;border:0 !important;background:none !important;max-width:none !important;max-height:none !important;"
}})();