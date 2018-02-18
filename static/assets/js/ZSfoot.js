
	//邮件订阅提交
	function subscribes_form_submit(obj){
		//域名
		var location_url = 'http://'+window.location.host+'/'+'index.php';		
		//获取email的内容
		//var email = $(obj).siblings('.inputbox').find('input').val();
		var email = $.trim($(obj).closest('.input-group').find('[name="subscribes-email"]').val());
		if(!email){
			ZSAlert('Please enter your email !', 'Error','');	
		}else if(!check_email(email)){//验证邮箱是否合法
			ZSAlert('Please enter a valid email !', 'Error','');	
		}else{
			var ajaxTimeoutTest =$.ajax({
				url:location_url,
				timeout : 10000,
				type : 'get',
				dataType:'json',
				data :'com=ajax&t=subscribes&email='+email,
				success:function(obj){			
					ZSAlert( obj.message , 'Message' ,'');						
				},
				complete : function(XMLHttpRequest,status){
					if(status=='timeout'){
						ajaxTimeoutTest.abort();
					}
				}
			});	
		}
	}

	//js邮箱正则验证
	function check_email(str/*String*/){
		var reg =  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; 
		return reg.test(str);
	}
	
	//邮件订阅提交
	function unsubscribe(){	
		//获取email的内容
		var email = $('#uEmail').val();
		var uType = $('#uType').val();
		
		if(!$.trim(email)){
			ZSAlert('Please enter your email !', 'Error','');	
		}else if(!check_email(email)){//验证邮箱是否合法
			ZSAlert('Please enter a valid email !', 'Error','');	
		}else{
			var ajaxTimeoutTest =$.ajax({
				url:homeUrl+'index.php',
				type : 'get',
				dataType:'json',
				data :'com=unsubscribe&t=unsubscribe&email='+email+'&uType='+uType,
				beforeSend:function(){
					ZSLoad();
				},
				success:function(obj){
					$.ZSmsgBox._hide();
					ZSAlert(obj.msg , 'Message' ,'');						
				},
			});	
		}
	}

	//回到顶部模块
	toTop();
	function toTop(){
		var $window = $(window);
		var $btn = $(".totop_btn");
		var $app = $(".app_btn");
		$window .scroll(function(){
			if($window.scrollTop()>300){
				$btn.slideDown(200);
			}else{
				$btn.slideUp(200);
			}
		});
		$btn.click(function(){
			$("html,body").animate({scrollTop:0});
		});
		$app.HoverDelay({
			hoverDuring: 100,
			outDuring: 100,
			hoverEvent: function(obj){
				return function(){
					obj = $(obj);
					obj.find("div").show();
				}
			},
			outEvent: function(obj){
				return function(){
					obj = $(obj);
					obj.find("div").hide();
				}
			}						
		});
	}
	
	//锚点平滑滚动处理
    $("a[href*=#],area[href*=#]").click(function(){
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                300);
                return false;
            }
        }
    });
	
	$(".inputbox").ZSinput();
	
	$(function () {
	$(".head .currency, .head .mobile, .head .help, .head .bag,.head .account,.head .language").HoverDelay({
		hoverEvent: function(obj){
			return function(){
				$(obj).children(".box").slideDown(200);
			}
		},
		outEvent: function(obj){
			return function(){
				$(obj).children(".box").slideUp(200); 
			}
		}
	});
	});
	//proceed to checkout
	$(document).on("click", ".head .proceedCheckout", function(){
		//window.location.href = httpsHomeUrl+'checkout.html';
		window.location.href = httpsHomeUrl+'shopping_cart.php';
	});
	
	//full site
	$("#full_site").on("click",function(){
		var url = $(this).attr("data-href");
		var rep = url.replace('www.','m.');
		rep = rep.replace('?pm=1','');
		rep = rep.replace('?pm=2','');
		window.location.href = rep+'?pm=2';
	});
	
	$(".top_ad .close").on("click",function(){
		// 点击关闭时，清除此广告banner		
		var $top_ad = $(this).closest(".top_ad"),
			imgUrl = $('.banner_click img', $top_ad).attr('src');
		$.cookie('top_ad_img', imgUrl, {expires:30, path:'/'});
		$top_ad.slideUp(200).remove();

	});

	// top_ad
	//
	(function () {
		var $top_ad = $('.top_ad'),
			adUrl = $.cookie('top_ad_img'),
			imgUrl = $('.banner_click img', $top_ad).attr('src');
		if ( !$top_ad.length || !adUrl) {
			return;
		}
		if (imgUrl === adUrl) {
			$top_ad.slideUp(200).remove();
		}
	})();
	$(function(){
		

		var checkEmail = function(){
			var val = $.trim(this.value),
				errMsg = null,
				$group = $(this).closest('.input-group'),
				$err = $group.find('.err-msg');
			if (!val) {
				errMsg = 'Please enter your email !';
			} else if (!check_email(val)) {
				errMsg = 'Please enter a valid email !';
			} 
			if(errMsg){
				!$err.length && ($err = $('<div class="err-msg" />').appendTo($group));
				$err.html(errMsg);
			}else{
				$err.remove();
			}
		};
		$('.btn-subscribes').click(function(){
			var $email = $('input[name="subscribes-email"]');
			checkEmail.call($email[0]);
			if($(this).closest('.input-group').find('.err-msg:visible').length){
				return;
			} else {
				var email = $.trim($email.val());
				if($('.anchor-email-subscribe').length > 0){
					window.location = "#winner";
				}else{
					window.location = "/subscribing.html?#winner";
				}
				

				/*var location_url = 'http://'+window.location.host+'/'+'index.php',	
					email = $.trim($email.val()),
					ajaxTimeoutTest =$.ajax({
						url:location_url,
						timeout : 10000,
						type : 'get',
						dataType:'json',
						data :'com=ajax&t=subscribes&email='+email,
						success:function(obj){			
							ZSAlert( obj.message , 'Message' ,'');						
						},
						complete : function(XMLHttpRequest,status){
							if(status=='timeout'){
								ajaxTimeoutTest.abort();
							}
						}
					});	*/
			}
		});
		$('input[name="subscribes-email"]').blur(function(){
			// 此处不用工作了
		}).focus(function(){
			 $(this).closest('.input-group').find('.err-msg').remove();
		});
	});

$(function () {
	// 网页头部滚动广告
	(function () {
		var timer = null;
		$('.top-favorable').mouseenter(function () {
			timer && clearTimeout(timer);
		}).mouseleave(function () {
			timer = setTimeout(function animate() {
				if (!$('.top-favorable>div').is('animated')) {
					$('.top-favorable>div').animate({'margin-top': '-38px'}, 500, function () {
						$(this).children().eq(0).appendTo($(this));
						$(this).css('margin-top', 0);
						timer = setTimeout(animate, 10000);
					});
				}
			}, 10000);
		}).trigger('mouseleave');
	})();

	// 抽出写在头部页面的live-chat代码
	$(document).on('click','.open-live-chat',function () {
	    window.__lc = window.__lc || {};
	    window.__lc.license = 7243681;
	    $.ajax({
	        url:'/ajaxload/ajax-getVCproducts.html?zmkm=1',
	        type:'post',
	        dataType:'json',
	        async:false,
	        success:function (res) {
	            window.__lc.params = res;
	        }
	    });

	    (function() {
	        var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
	        lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
	        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
	    })();
	    
	    var liveChatParams = '';
	    $.ajax({
	    	url:'/ajaxload/ajax-getCustomerInfo.html',
	    	type:'post',
	    	dataType:'json',
	    	async:false,
	    	success:function(res){
	    		if(res.customers_name){
	    			liveChatParams += '&name='+res.customers_name;
	    		}
	    		if(res.customers_email_address){
	    			liveChatParams += '&email='+res.customers_email_address;
	    		}
	    	}
	    });

	    window.open('https://secure.livechatinc.com/licence/7243681/open_chat.cgi?groups=2'+liveChatParams,'_blank','toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=no, resizable=no, copyhistory=yes, width=400, height=600');

	})

	
});