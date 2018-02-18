$.extend({
	checkEmail:function(email){
		var isemail = false;
		var reg = /^[\w-']+([\.\+][\w-']+)*@([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,13}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
		if(reg.test(email.replace(/(^\s*)|(\s*$)/g, ""))){
			isemail=true;
		}
		return isemail;
	},
	regCheck:function(trigger){
		var codeReg = $.cookie('__couponReg');
		if(!codeReg){
			var data = 'com=ajax&t=regCheck';
			$.ajax({
				url:homeUrl+'index.php',
				type : 'post',
				data :data,
				dataType:'html',			
				success:function(html){
					if(html){
						//$("body").css("overflow","hidden");
						$('#coupon_reg').html(html);
						$('#coupon_reg .popup_overlay').css("height",$(document).height());
						//$("#coupon_reg .popup_main").css("top",($(window).height()-$("#coupon_reg .popup_main").outerHeight())/2);
						//$("#coupon_reg .popup_main").css({"margin-left":($(window).width()-$(".popup_main").width())/2});
						//
						$('#footer').data('margin-bottom',$('#footer').css('margin-bottom')).css('margin-bottom', '105px');
						if(trigger){
							$('#act_banner .register').trigger('click');
							$('#act_banner').addClass('hidden');
						}
					}
				}   
			});
            $.cookie("__couponReg", 1, { expires: 7, path: '/' });
		}
	},
	regInput:function(){
		var data = 'com=ajax&t=regInput';
		$.ajax({
			url:homeUrl+'index.php',
			type : 'post',
			data :data,
			dataType:'html',			
			success:function(html){
				if(html){
					$("body").css("overflow","hidden");
					$('#coupon_reg').html(html);
					$('#coupon_reg .popup_overlay').css("height",$(document).height());
					$('#msgTip').hide();
					/*$("#coupon_reg .popup_main").css("top",($(window).height()-$("#coupon_reg .popup_main").outerHeight())/2);
					$("#coupon_reg .popup_main").css({"margin-left":($(window).width()-$(".popup_main").width())/2});*/
				}
			}   
		});
	},
	regAccount:function(jq_btn,callback){
		var email = $.trim($('#regEmail').val());
		if($.checkEmail(email)==true){
			$('#msgTip').hide();
			var validate = true;
			var password = $.trim($("#password").val());
			var rePassword = $.trim($("#rePassword").val());
			var regToken = $.trim($("#regToken").val());
			if(password=='' || rePassword ==''){
				validate = false;
                callback && callback(jq_btn);
			}
			if(validate)
			{
				var data = 'com=ajax&t=regAccount&email='+email+'&password='+password+'&rePassword='+rePassword+'&regToken='+regToken;
				$.ajax({
					url:homeUrl+'index.php',
					type : 'post',
					data :data,
					dataType:'JSON',		
					success:function(res){
                        callback && callback(jq_btn);
						if(res.status==0){
							$('#msgTip').show().html(res.msg);
						}else{
							$('#coupon_reg').html(res.msg);
							$('#coupon_reg .popup_overlay').css("height",$(document).height());
							//$("#coupon_reg .popup_main").css("top",($(window).height()-$("#coupon_reg .popup_main").outerHeight())/2);
							//$("#coupon_reg .popup_main").css({"margin-left":($(window).width()-$(".popup_main").width())/2});
							$.validateLogin();
						}
					}, 
				});
			}
		}else{
			$('#msgTip').show().html(email_error_tip);
            callback && callback(jq_btn);
		}
	},
});
$(document).ready(function(){
	//$.regCheck();
	$('.fix_slides .gift').click(function(){
		$.cookie("__couponReg", 1, { expires: -7, path: '/' });
		$.regCheck(1);
	});
});
$(document).on("click","#act_banner .register",function(){
	$.regInput();
	setTimeout(function () {
		if($('#coupon_reg .register_popup').length){
          var reight_area=$('#coupon_reg .register_popup').height() - $(window).height();
          if(reight_area > 0){
          	  if(reight_area > 165){
                  $('#coupon_reg .register_popup').animate({'top':-165+'px'});
                  return false;
			  }
              $('#coupon_reg .register_popup').animate({'top':-reight_area+'px'})
		  }
		}
    },300);
	$('#footer').css('margin-bottom', $('#footer').data('margin-bottom') || 0);
})
.on("click","#doRegister",function(){
    if($(this).hasClass('reg_lock')) return false;
    $(this).css({
        'background':"url('/templates/default/images/loading_3.gif')  center center no-repeat #eaeaea",
        'cursor':'default',
        'text-indent':'-99999px',
    }).addClass('reg_lock');
	$.regAccount($(this),function (jq_btn) {
        jq_btn.removeAttr('style').removeClass('reg_lock');
    });
})
.on("click","#coupon_reg .close_btn",function(){
	$('#footer').css('margin-bottom', $('#footer').data('margin-bottom') || 0);
	//$.cookie("__couponReg", 1, { expires: 7, path: '/' });
	$('#coupon_reg').empty();
	$("body").css("overflow","visible");
});
$(window).resize(function(){
	if($("#coupon_reg .popup_main").length>0){
		//$("#coupon_reg .popup_main").css("top",($(window).height()-$("#coupon_reg .popup_main").outerHeight())/2);
	}
});
