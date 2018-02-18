$(".head .account").HoverDelay({
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

			$(document).ready(function(){
			$(".goodsbox_1200").length && $(".goodsbox_1200").Swipe({
				auto: 0,
				continuous: true,
				disableScroll: false,
				startSlide: 0,
				callback: function(pos) {}
			});
			$('.cart_deals li .quantity_box').each(function(){
				var _this = $(this);
				var _input =  _this.children('input');
				var num = _input.val();
				if(_input.hasClass('_hasflash')){
					var buylimit = _input.attr('buylimit');
					if(parseInt(num) > parseInt(buylimit)){
						buylimit = parseInt(buylimit);
						if(buylimit <= 0){
							var _checkbox = _this.parent(".td_quantity").siblings(".td_select").children(".checkbox").children("span");
							var _cart_id = _checkbox.attr("cart_id");
							var _warehouse = _checkbox.attr("warehouse");
							$.moveCart(_cart_id,_warehouse);
						}else{
							_input.attr("value",buylimit);
							_input.attr("oldqty",buylimit);
							_this.children('.hide_tip').removeAttr("hidden");
							_input.val(buylimit);
							$.changeQty(_input,buylimit);
						}
					}
				}
			});
		});


	$(".tools").HoverDelay({
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
	(function($) {
		$.cart = {
			checkbox: function(o){
				var o = $(o);
				o.hasClass('check_off') && function(){return false;}
				o.hasClass('check_on') ? o.removeClass('check_on').addClass('check_un') : o.removeClass('check_un').addClass('check_on');
			},
	
			selectall: function(o){
				this.checkbox($(o));
			}
		}
	})(jQuery);

	$(document).on("click",".td_product .quantity_box .next",function(){
		var $_this = this;
		var ajaxRe = null;
		var ajaxRe2 = null;
		$.ZSquantityNext($_this,$.changeQty);
		
	});
	$(document).on("click",".td_product .quantity_box .prev",function(){
		$.ZSquantityPrev(this,$.changeQty);
	});
    ajaxisWsPro_fn('fun_gray')
	var getXhrFd = function () {
		var $o = $(this);
		var cart_id = $o.attr('cart_id');
		var qty = $o.val();
		var prenum = $o.attr("prenum");
		var warehouse = $o.attr('warehouse');	
		var data = 'qty=' + qty + '&cart_id=' + cart_id + '&warehouse=' + warehouse + '&prenum=' + prenum;
		
		window.xhrChangeFd && window.xhrChangeFd.abort();
		window.xhrChangeFd = $.ajax({
			type: 'post',
			dataType: 'JSON',
			async: false,
			url: 'index.php?com=shopcart&t=canChangeQty',
			data: data,
			success: function(res) {
				if(res.code==0){
					ZSAlert(res.msg);
				}else{
					$.ZSquantityInput($o[0],$.changeQty);
				}
			}
		});
	};

	$(document).on("keyup",".td_quantity input",function(){
			$.ZSquantityInput(this,$.changeQty);
	});
	$(document).on("keyup",".td_product input",function(){
			$.ZSquantityInput(this,$.changeQty);
	});
	
	$(document).on("click",".package_quantity .next",function(){
		$.ZSquantityNext(this,$.changePackageQty);
	});
	$(document).on("click",".package_quantity .prev",function(){
		$.ZSquantityPrev(this,$.changePackageQty);
	});
	$(document).on("keyup",".package_quantity input",function(){
		$.ZSquantityInput(this,$.changePackageQty);
	});
	$(function(){showSaveForLater();});
