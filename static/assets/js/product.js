///集合取交集
Array.intersect = function () {
    var result = new Array();
    var obj = {};
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            var str = arguments[i][j];
            if (!obj[str]) {
                obj[str] = 1;
            }
            else {
                obj[str]++;
                if (obj[str] == arguments.length)
                {
                    result.push(str);
                }
            }//end else
        }//end for j
    }//end for i
    return result;
};

$.showTooltip = function () {
	var sizeJson = $.sizeToJsonSize();
		
	var tableType = $('#table_type').val();
	var $size,
		$cupSize,
		sizeText = '',
		csize = null,
		sizearrObj = null;

	var attrSize = ''; // 多个size
	
	var sizeType = tableType ? $.cookie(tableType) : false;

	var arrayCvs = [];

	var replaceCvs = function (arr) {
		var metra,
			replaceData;
		if ($.type(arr) === 'array' && arr.length === 2) {
			metra = arr[0];
			replaceData = arr[1].split(',');
			return metra.replace('%cup%', replaceData[0]).replace('%oricup%', replaceData[1]);
		} else {
			return arr;
		}
	};

	$('.goods_main_attr[option_id="380"] li, .goods_main_attr[option_id="396"] li').each(function () {
		var sizeText = $(this).attr('value_name');
		var csize = sizeText.toLowerCase();
		var sizearrObj = csize.split('-');
		var arrayCvs = [];
		attrSize = csize;
		if(sizearrObj[1]){
			sizeJson[csize] = sizeJson[sizearrObj[0]]+'-'+sizeJson[sizearrObj[1]];
		}		
		sizeType && arrayCvs.push( $('#size_' + sizeType + '_' + sizeText).html());

		if ($('.goods_main_attr[option_id="404"]').length && ($cupSize = $('.goods_main_attr[option_id="404"] li.active')).length) {
			attrSize += $cupSize.attr('value_name');
			sizeType && arrayCvs.push( $('#size_' + sizeType + '_' + $cupSize.attr('value_name')).html());
		}
		var $sizeText = null;
		$('.sizeText').hide().each(function() {
			var tmpText = $(this).attr('size').toLowerCase();
			if (tableType && (tmpText == attrSize.toLowerCase() || tmpText == sizeJson[csize])) {
				$(this).find('.conversion').html(replaceCvs(arrayCvs));
				$sizeText = $(this);
			} else {
				if (sizeJson[tmpText] == sizeText.toLowerCase()) {
					$sizeText = $(this);
				}
			}
		});
		if ($sizeText) {
			if ($(this).data('toggle')) {
				$(this).attr('title', $sizeText.html());
			} else {
				$(this).attr({
					'data-placement': 'bottom-right',
					'data-title': $sizeText.html(),
					'data-toggle': 'tooltip',
					'data-skin': 'pro-size-tooltip',
					// 'data-align-to': '.goods_main_attr'
				});
			}
		}
	});
};


var changeBigpicTimer;

$.fn.lazyload && $('.img-list-container .img-box img, .img-big-container img').lazyload();
$(".info_title_nc .title_h1 i").click(function() {
	$(".title_h1").hide();
	$(".info_title_nc").removeClass("info_title");
});
$(".goods_main_tabs .currency, .goods_main_tabs .sale_box").HoverDelay({
	hoverEvent: function(obj) {
		return function() {
			$('.sale_box table .has').append($.moreSaveList());
			$(obj).children(".box").slideDown(200);
		}
	},
	outEvent: function(obj) {
		return function() {
			$(obj).children(".box").slideUp(200);
		}
	}
});
$(".price_other .timeback").timeGo({
	callBack: function(element) {
		element.parent().remove();
		var _this = $(".price_number");
		var price_number = _this.attr("timeprice");
		_this.attr("oriprice", price_number).html(price_number);
	}
});
$('.goods_main_attr .color li').hover(function() {
	var $this = $(this);
	changeBigpicTimer && clearTimeout(changeBigpicTimer);
	this.timer = setTimeout(function() {
		if ($this.find('img').length > 0) {
			$.changeAttrImage($this.find('img')[0]);
		}
	}, 100);

}, function() {
	this.timer && clearTimeout(this.timer);
	changeBigpicTimer = setTimeout(function() {
		$.changeAttrImage($('.goods_main_attr .color li.active img')[0]);
	}, 2000);

});
$(".goods_main_attr li").click(function() {
	var $this = $(this);
	if ($this.hasClass('gray')) {
		return;
	}
	if ($this.hasClass('out_stock')) {
		$this.removeClass('active');
		return;
	}	
	
	if ($this.hasClass('active')) { // 取消选中状态
		$this.removeClass('active').find('i').remove();
		$('.status', '.pro-detail-container').html('');
		
		if (!$(".goods_main_attr li.active").length) {
			$(".goods_main_attr li.out_stock").filter(function () { return !$(this).hasClass('out_stock_default');}).removeClass('out_stock');
		}
		$(".goods_main_attr li.active").siblings('.out_stock').filter(function () { return !$(this).hasClass('out_stock_default');}).removeClass('out_stock');
		if ($this.closest('ul').hasClass('size')) {
			// $('.sizeText[size="' + $(this).attr('value_name') + '"]').hide();
			$('.sizeText').hide();
		}

		// 清除状态
		$('.addcart').removeClass('gray');
        $('.addcart').each(function () {
            var btn = $(this).attr('mtitle');
            $('b',$(this)).html('<i></i>' + btn);
        })


		// 还原数量
		$('#maximum').html($('#maximum').attr('str') + ': ' + $('#maximum').data('default'));

		$('.shipping-time-msg', '.pro-detail-container').html($('.shipping-time-msg', '.pro-detail-container').data('defaultMsg'));

		$.vidCheckPoa();
		return;
	}

	$this.addClass('active')
		.append('<i/>')
		.siblings().removeClass('active')
		.find('i').remove();
	if ($this.find('img').length > 0) {
		$.changeAttrImage($this.find('img')[0]);
	}
	$.when($.getUsefulPoa($this.attr('value_id'))).then(function () {
		$.showAttrDesc();
		$.stockMessage();
		$.validateIsSel();
	});
	
});
$(".goods_main_list .size_list_box .list li").click(function() {
	$.selConversion($(this));
});

$(function() {
	$.iniSize();
	$.reset_img_size();
	$.iniTableType();
});
$(".goods_main_list .size_list_box").mouseenter(function () {
	var o = $(".goods_main_list .size_list_box .list");
	o.show();
}).mouseleave(function () {
	var o = $(".goods_main_list .size_list_box .list");
	o.hide();
});
$(".goods_main_list .size_list_box .cy_list li").click(function() {
	var o = $(".goods_main_list .size_list_box .list");
	if (o.is(":hidden")) {
		o.show();
	} else {
		o.hide();
	}
	$.getSelectedOptions(true);
});

$.extend({
	chkQuantity: function() {
		var quantity = parseInt($("#qty").val());
		if (!(/(^[0-9]\d*$)/.test(quantity)) || !quantity || quantity == 0) {
			quantity = 1;
		}
		$("#qty").val(quantity);
	},

	//添加产品到购物车
	addToCart: function(btn) {
		
		//判断是否是flash deals产品?
		if ($(btn).hasClass("dealsguy")) {
			var limitbuy = $(btn).attr('limitbuy');
			if (limitbuy == 0) {
				var xiangou_tip = $(btn).siblings("#xiangou_tip").text();
				$(btn).addClass('gray');
				ZSAlert(xiangou_tip, 'Tips', 'OK');
			}
		}
		
		if ($(btn).hasClass('gray')) {
			return false;
		}

		$.chkQuantity();

		var qty = $("#qty").val();

		//获取选中的属性
		var selOpResult = $.getSelectedOptions();
		$(".info_title_nc").attr('flg', 1);
		//是否全选中属性
		if(!$.validateSelOptions()){
			selOpResult = false;
		}
		if (!selOpResult) {
			$.validateIsSel();
			return false;
		}
		if (selOpResult) {
			if ($('#isCheckStock').val() == 1) { //检查是否还在查库存状态
				return false;
			}
			//先要删除attr隐藏信息重新生成
			$('#detailCartForm .pAttr').each(function() {
				$(this).remove();
			});
			for (var i = 0; i < selOpResult.optionIds.length; i++) {
				var op = selOpResult.optionIds[i];
				var val = selOpResult.valueIds[i];
				var html = '<input type="hidden" class="pAttr" name="attrs[' + op + ']" value="' + val + '" />';
				$('#detailCartForm').append(html);
			}
		}
		var save = function () {
			var params = $('#detailCartForm').serialize();

			params += '&com=shopcart&t=addProduct';

			var msg = $(btn).attr('msg');
			msg = msg.replace('%d', qty);
			var mTitle = $(btn).attr('mTitle');
			var mBtn = $(btn).attr('mBtn');
			var mBtn1 = $(btn).attr('mBtn1');

			var products_id = $('#products_id').val();
			var catPath = $('#categoryPath').attr('data-path');
			catPath = $.trim(catPath);
			$.ajax({
				type: 'post',
				url: '/index.php',
				data: params,
				dataType: 'json',
				beforeSend: function() {
					ZSLoad('', '');
				},
				success: function(res) {
					//ZSConfirm(msg, mTitle, mBtn, mBtn1, function(result){
					//	if(result){window.location.href = httpsHomeUrl+'shopping_cart.php';}
					//});
					if(typeof(res.status) != 'undefined' && res.status == false){
						$.alert(res.msg);
					}else{
                        if($(btn).hasClass('wh_addcart')){
                            location.href='/shopping_cart.php';
                            return false;
                        }
						$.ajax({
							type: 'get',
							url: '/index.php',
							data: 'com=ajax&t=loadHeadCarts',
							success: function(res) {
								$('.head_right .bag').html(res);
								$(".bag .box").slideDown(200);
								$('html, body').animate({
									scrollTop: 0
								}, 'slow');
								/*小购物车调用到倒计时*/
								$.chirst_goods_timers();
								$.pre_goods_timers();
							}
						});

						var p = {
							"content_category": fbCode.content_category,
							"content_type": "product",
							"content_ids": fbCode.content_ids,
							"frist_source": fbCode.frist_source,
							"content_name": fbCode.content_name,
							"campaign": fbCode.campaign,
							"medium": fbCode.medium,
						};

						fbq('track', 'AddToCart', p);
						pintrk('track', 'AddToCart', p);
					}
				},
				complete: function() {
					$.ZSmsgBox._hide();
				}
			});
		};
		save();
		sendGa({
			beforeSend: function () {
				window.dataLayer && (window.dataLayer.quantity = qty);
			},
			callback: function () {
				ga('ec:setAction', 'add');
				ga('send', 'event', 'UX', 'click', 'add to cart');
			} 
		});
		/*if (limitbuy == 1) {
			$.ajax({
				url: '/index.php?com=shopcart&t=canFDAddCart&qty=' + $('#qty').val() + '&products_id=' + $('#products_id').val(),
				dataType:'json',
				beforeSend: function() {
					ZSLoad('', '');
				},
				complete: function() {
					$.ZSmsgBox._hide();
				},
				success: function(res) {
					if (res.code == 1) {
						save();
					} else {
						$.alert(res.msg);
					}
				}

			});
		} else {
			save();
		}*/


	},

	//获取产品评论信息
	reviewList: function() {
		$(".pagination").pagination({
			callback: function(page_index, obj) {
				obj = $(obj);
				var firstpage = obj.attr("firstpage"); //是否静态加载第一页
				obj.removeAttr("firstpage");
				if (firstpage) return;
				var page = page_index + 1;
				var $reviews_content = $('#reviews_content');
				var pid = $('#products_id').val();
				if (!pid) {
					return;
				}
				var data = 'products_id=' + pid;
				data += '&page=' + page;
				$.ajax({
					url: '/ajaxload/product-reviewsList.html',
					type: 'get',
					data: data,
					beforeSend: function() {
						obj.find(".active").addClass("gray");
					},
					success: function(html) {
						obj.find(".active").removeClass("gray");
                        if (html.length > 0) {
                            $reviews_content.html(html);
                        }
					}
				});
				return false;
			}
		});

	},
	//对批量购买的优惠列表处理
	moreSaveList: function() {
		if ($('.sale_box table .has').find('td').length > 2) {
			return '';
		}
		var price = $('.price_number').attr('oriPrice');
		var new_currency = $.setCurrency.getCookieCurrency();
		var price_1 = $.setCurrency.getPriceByCurrencyNew(price, new_currency);

		var price_3 = $.setCurrency.getPriceByCurrencyNew(price * 0.98 - 0.2, new_currency);
		price_3 = (Number(price_3) * 100).toFixed(0) / 100;
		var price_10 = $.setCurrency.getPriceByCurrencyNew(price * 0.97 - 0.24, new_currency);
		price_10 = (Number(price_10) * 100).toFixed(0) / 100;
		var price_30 = $.setCurrency.getPriceByCurrencyNew(price * 0.96 - 0.26, new_currency);
		price_30 = (Number(price_30) * 100).toFixed(0) / 100;
		var price_100 = $.setCurrency.getPriceByCurrencyNew(price * 0.95 - 0.3, new_currency);
		price_100 = (Number(price_100) * 100).toFixed(0) / 100;

		var html = '<td>' + price + '</td><td>' + price + '</td><td>' + price + '</td><td>' + price + '</td><td>' + price + '</td>';
		if (price >= 0.5) {
			html = '<td>' + Number(price_1).toFixed(2) + '</td><td>' + Number(price_3).toFixed(2) + '</td><td>' + Number(price_10).toFixed(2) + '</td><td>' + Number(price_30).toFixed(2) + '</td><td>' + Number(price_100).toFixed(2) + '</td>';
		}
		return html;
	},

	//查询库存信息
	stockMessage: function() {
		if (!$.validateSelOptions()) {
			return false;
		}
		var sku = $('#sku').val();
		var curWarehouse = 'CN';
		var products_id = $('#products_id').val();
		if (!products_id) {
			return;
		}

		var divID = 'stockMsg_' + curWarehouse;
		var data = 'com=product&t=stockMessage';

		//Get selected options
		var selOptions = $.getSelectedOptions();
		if (selOptions.valueIds.length > 0) {
			for (var i = 0; i < selOptions.valueIds.length; i++) {
				data += '&value_ids[]=' + selOptions.valueIds[i];
				divID += '_' + selOptions.valueIds[i];
			}
		}
		if ($('#' + divID).html()) {
			if ($('#' + divID).html().length > 0) {
				$.stockMessageCallback(divID, true);
				return true;
			}
		}

		data += '&sku=' + encodeURIComponent(sku);
		data += '&warehouse=' + curWarehouse;
		data += '&products_id=' + products_id;


		//loadding
		$('.shipping-time-msg', '.pro-detail-container').parent().loading(true);

		$.ajax({
			url: '/index.php',
			type: 'get',
			data: data,
			dataType: 'json',
			beforeSend: function() {
				$('#isCheckStock').val(1);
			},
			success: function(result) {
				$('#isCheckStock').val('');
				var vHtml = $.vidToVids(result.vids);
				//计算币种转换
				var currency = $.setCurrency.getCookieCurrency();
				var nowFinalPrice = result.final_price; //$.setCurrency.getPriceByCurrency(result.final_price_usd, currency);
				var nowPrice = result.price; //$.setCurrency.getPriceByCurrency(result.price_usd, currency);
				var nowFormatPrice = $.setCurrency.getPriceByCurrency(result.price_usd, currency, true);
				$('#stockMsgCache').append('<div id="' + divID + '" stocks="' + result.stocks + '" clearStock="' + result.clearStock + '" limitProduct="'+result.limitProduct+'" showStocks="'+result.showStocks+'" otherSataus="' +result.otherSataus+ '" clearStockMsg="' + result.clearStockMsg + '" product_type="' + result.list_type + '"  discount="' + result.discount + '" points="' + result.points + '" hideBuy="' + result.hideBuy + '" oriPrice="' + result.price_usd + '" oriFinalPrice="' + result.final_price_usd + '" price="' + nowPrice + '" format_price="' + nowFormatPrice + '" final_price="' + nowFinalPrice + '" stockTip="' + result.stockTips + '" ' + '" ' + vHtml + '>' + result.message + '</div>');
				$.stockMessageCallback(divID);
			},
			complete: function () {
				$('.shipping-time-msg', '.pro-detail-container').parent().loading(false);
			}
		});
	},

	vidToVids: function(res) {
		if (!res) {
			return '';
		}
		var html = ' ';
		for (var i in res) {
			html = html + ' v_' + i + '="' + res[i] + '" ';
		}
		return html;
	},

	vidNoPoa: function(divID) {
		var length = $('.goods_main_attr').length;
		if (length ==1 || length > 2) {
			return;
		}

		$('.goods_main_attr li').each(function() {
			if ($(this).hasClass('out_stock') && !$(this).hasClass('out_stock_default')) {
				$(this).find("span").remove();
				$(this).removeClass('out_stock');
			}
		});
		var vidStr = divID.replace(/stockMsg_CN/ig, "");
		if (vidStr) {
			vidStr = divID.replace(/stockMsg_CN_/ig, "");
			var poaVids = '';
			var vids = vidStr.split('_');
			for (var i in vids) {
				var tmp = $('#' + divID).attr('v_' + vids[i]);
				if (typeof(tmp) == 'undefined' || tmp == '') {
					continue;
				}
				poaVids = tmp.split('.');
				var node = $("li[value_id^=" + vids[i] + "]").parent();
				node.children().each(function() {
					var cVid = $(this).attr('value_id');
					if ($.inArray(cVid, poaVids) == -1) {
						if ($(this).find("img").length > 0) {
							$(this).append("<span></span>")
						}
						$(this).removeClass('active').addClass('out_stock');
					}
				});
			}
		}
	},
	// 获取属性的poa 只获取一次
	getUsefulPoa: function (poaValue) {
		var $elm = $('[value_id="' + poaValue + '"]');
		if (!$elm.length) {
			return true;
		}
		if ($elm.data('poalist')) {
			return $elm.data('poalist');
		}
		var dtd = $.Deferred();
		$.ajax({
			type: 'POST',
			dataType: 'JSON',
			url: '/ajaxload/product-vidCheckPoa.html',
			data: {
				'vid': poaValue,
				'products_id': $('#products_id').val()
			},
			success: function(result) {
				$elm.data('poalist', result[poaValue]);
				dtd.resolve(result[poaValue]);
			},
			error: function () {
				dtd.reject();
			}
		});
		return dtd.promise();

	},
	//单属性检查多属性poa是否存在
	vidCheckPoa: function() {
		var addStock = function ($elm) {
			if ($('img', $elm).length && !$('span', $elm).length) {
				$elm.append("<span></span>");
			}
			$elm.addClass('out_stock');
		};
		$('.goods_main_attr li.active').each(function () {
			var _attr = $(this).closest('.goods_main_attr')[0],
				poalist = $(this).data('poalist');
			if (!poalist) {
				return;
			} else {
				var $list = $('.goods_main_attr').filter(function () {
					return this !== _attr;
				}).find('li[value_id]').filter(function () {
					return !$(this).hasClass('out_stock_default');
				}).removeClass('out_stock');
				$list.each(function () {
					if (poalist.indexOf($(this).attr('value_id')) === -1) {
						addStock($(this));
						this.stockout = true;	
					}
				});
			}
		});
		$('.goods_main_attr li').each(function () {
			if (this.stockout) {
				this.stockout = false;
				addStock($(this));
			}
		});
		
		switch($('.goods_main_attr li.active').length) {
			case 0:
				$('.goods_main_attr li:not(.out_stock_default)').removeClass('out_stock');
				break;
			case 1:
				$('.goods_main_attr li.active').siblings(':not(.out_stock_default)').removeClass('out_stock');
				break;
		}
		return;

		var optionList = $('.goods_main_attr');
		var length = optionList.length;
		if (length <= 1) {
			return;
		}
		var activeLen = 0;
		var vid = 0;
		optionList.find('li').each(function() {
			if ($(this).hasClass('active')) {
				vid = $(this).attr('value_id');
				activeLen++;
			}
		});
		if (activeLen > 1) {
			return;
		}

		var products_id = $('#products_id').val();
		if (!vid || !products_id) {
			return;
		}
		$.ajax({
			type: 'POST',
			dataType: 'JSON',
			url: homeUrl + '/ajaxload/product-vidCheckPoa.html',
			data: {
				'vid': vid,
				'products_id': products_id
			},
			success: function(vids) {
				var length = $('.goods_main_attr').length;
				if (length > 3) {
					return;
				}

				var node = $("li[value_id^=" + vid + "]").parent().parent();
				var opid = node.attr('option_id');

				$('.goods_main_attr').each(function() {
					if ($(this).attr('option_id') != opid) {
						var oNode = $(this);
						oNode.find('li').each(function() {
							if ($(this).hasClass('out_stock') && !$(this).hasClass('out_stock_default')) {
								$(this).find("span").remove();
								$(this).removeClass('out_stock');
							}
							var cVid = $(this).attr('value_id');
							if ($.inArray(cVid, vids[vid]) == -1) {
								if ($(this).find("img").length > 0) {
									$(this).append("<span></span>")
								}
								$(this).removeClass('active').addClass('out_stock');
							}
						});
					}
				});
			}
		});
	},
	//单属性情况下，获取有效可选择的poa
	getValidPoa: function(){
		var products_id = $('#products_id').val();
		if (!products_id) {
			return;
		}
		$.ajax({
			type: 'POST',
			dataType: 'JSON',
			url: homeUrl + '/ajaxload/product-getValidPoa.html',
			data: {
				'products_id': products_id
			},
			success: function(vids) {
				if(vids){
					$('.goods_main_attr').each(function() {
						var oNode = $(this);
						oNode.find('li').each(function() {
							var cVid = parseInt($(this).attr('value_id'));
							
							if ($.inArray(cVid, vids) == -1) {
								if ($(this).find("img").length > 0) {
									$(this).append("<span></span>")
								}
								$(this).removeClass('active').addClass('out_stock');
							}
						});
					
					});
				}
				
			}
		});
	},

	//库存数据处理回调函数
	stockMessageCallback: function(divID, reFormat) {
		var $status = $('.shipping-time-msg', '.pro-detail-container');
		$status.html($('#' + divID).html());
		if ($('#' + divID).attr("stockTip") == 1) {
			$status.addClass("tips");
		} else {
			$status.removeClass("tips");
		}
		//处理poa不存在情况
		$.vidNoPoa(divID);

		//切换售价
		var finalPrice = $('#' + divID).attr('final_price');
		//是否要重新格式化价格
		if (reFormat == true) {
			var currency = $.setCurrency.getCookieCurrency();
			finalPrice = $('#' + divID).attr('oriFinalPrice');
			finalPrice = $.setCurrency.getPriceByCurrency(finalPrice, currency);
		}
		$('.price_number').attr('oriPrice', $('#' + divID).attr('oriFinalPrice'));
		$('.price_number').html(finalPrice);
		//切换原始价格
		var price = $('#' + divID).attr('price');
		var format_price = $('#' + divID).attr('format_price');
		$('.price_old').attr('oriPrice', $('#' + divID).attr('oriPrice'));
		if (finalPrice != price) {
			//是否要重新格式化价格
			if (reFormat == true) {
				var tmpPrice = $('#' + divID).attr('oriPrice');
				format_price = $.setCurrency.getPriceByCurrency(tmpPrice, currency, true);
			}
			$('.price_old').html(format_price);
			$('.price_other').show();
		} else {
			$('.price_other').hide();
		}

		//切换折扣
		var discount = $('#' + divID).attr('discount');
		if (discount != '' && discount != 'undefined' && discount != null) {
			//先remove掉在追加
			$(".goods_photo_max strong").remove();
			$(".goods_photo_max").append('<strong>' + discount + '</strong>');
			$('.price_off').html(discount + '% OFF');
			$('.icon-sale').html(discount);
		} else {
			$(".goods_photo_max strong").remove();
			$('.price_off').html('');
		}

		//处理积分
		var points = $('#' + divID).attr('points');
		$('#goods_main_note').html(points);

		//是否允许购买
		//var hideBuy = $('#' + divID).attr('hideBuy') == '1' || $('#' + divID).attr('supply_type') == '3';
		var hideBuy = $('#' + divID).attr('hideBuy') == '1';
		if (hideBuy) {
			$('.addcart').addClass('gray');
            $('.addcart').each(function () {
                var btn = $(this).attr('stitle');
                if (btn) {
                    $('b',$(this)).html('<i></i>' + btn);
                }
            })

		} else {
			$('.addcart').removeClass('gray');
            $('.addcart').each(function () {
                var btn = $(this).attr('mtitle');
                $('b',$(this)).html('<i></i>' + btn);
            })

		}
		//处理最大购买 是否是清货产品
		var maximum = $('#' + divID).attr('stocks');
		var limitProduct = $('#' + divID).attr("limitProduct");
		var showStocks = $('#' + divID).attr("showStocks");
		var clearStock = $('#' + divID).attr('clearStock');
		var otherSataus = $('#' + divID).attr('otherSataus');
		clearStock = parseInt(clearStock);
		limitProduct = parseInt(limitProduct);
		var maxbuynum = $("#qty").attr("maxbuylimit");
		$('#maximum').html($('#maximum').attr('str') + ': ' + maximum);
		if (clearStock > 0 || (limitProduct > 0 && showStocks > 0)) {
			$('#maximum').show();
			if ($(".quantity_box #qty").val() > maximum) {
				$(".quantity_box #qty").val(maximum);
				$(".quantity_box #qty").attr("oldqty", maximum);
			} else {
				$(".quantity_box #qty").val(1);
				$(".quantity_box #qty").attr("oldqty", 1);
				$(".quantity_box .next").removeClass("gray");
			}
		}else{
			$('#maximum').hide();
		}
		
		if (clearStock > 0) {
			if(otherSataus == 1 && $('#' + divID).attr('product_type') != 16 && $('#' + divID).attr('product_type') != 4){
				//清仓产品提示
				$(".goods_title").find("span b").text($(".goods_title").find("span").attr("data-tip"));
				$(".goods_title").find("span").hide();

				$(".clear_tip").html($(".clear_tip").attr("data-save") + ' <b>20%</b> ' + $(".clear_tip").attr("data-off"));
				$(".clear_tip").hide();
				
				if($('#' + divID).attr('product_type') == 7){//dropship 产品
					$("#dropshipPro").hide();
					$(".goods_title").find("span").show();
					$("#dropshipPro").html($('#dropshipPro').attr('str') + ': ' + maximum);
				}
			}else{
				//清仓产品提示
				$(".goods_title").find("span b").text($(".goods_title").find("span").attr("data-tip"));
				$(".goods_title").find("span").show();

				$(".clear_tip").html($(".clear_tip").attr("data-save") + ' <b>20%</b> ' + $(".clear_tip").attr("data-off"));
				// 清仓20标志不显示
				// $(".clear_tip").show();
			}
			
		} else {
			$(".quantity_box #qty").val(1);
			$(".quantity_box #qty").attr("oldqty", 1);
			$(".quantity_box .next").removeClass("gray");

			//清仓产品提示
			$(".goods_title").find("span").hide();
			$(".goods_title").find("span b").text("");

			$(".clear_tip").hide();
			$(".clear_tip").text("");
			if($('#' + divID).attr('product_type') == 7){//dropship 产品
				$('#maximum').hide();
				$("#dropshipPro").html($('#dropshipPro').attr('str') + ': ' + maximum);
				$("#dropshipPro").show();
			}

		};
		$('#qty').attr('clearStock', clearStock);
		$('#qty').attr('buylimit', maximum);
		$('#qty').attr('showStocks', showStocks);
		$('#qty').attr('limitProduct', limitProduct);
		$('#qty').attr('maximum', maximum);
		$("#maximum").attr("data-default", maximum);
		//批发用户处理:10件启购
        ajaxisWsPro_fn('ajaxisWsPro');

	},


	//点击有图片的属性切换主图区域
	changeAttrImage: function(img) {
		var viewImage = $(img).attr('largeimage'),
			$container = $('.img-big-container .img');
		if (!viewImage) {
			return;
		}
		$container.loading(true, 'big');
		$('img', $container).attr({
			'data-original': viewImage,
			'src': viewImage
		}).data('original', viewImage);
		var img = new Image();
			img.src = viewImage ;
			img.onload = function () {				
				$container.loading(false);
			};
		$('.goods_photo_min .box').find('li.active').removeClass('active')
			.find('img[ref="' + viewImage + '"]').parent().addClass('active');
		$('.img-list-container .img-list img[data-big-img="' + viewImage + '"]').closest('li')
			.addClass('active')
			.siblings().removeClass('active');

	},


	//验证属性项是否有选中
	validateSelOptions: function() {
		var optionList = $('.goods_main_attr');
		var length = optionList.length;
		var i = 0;
		optionList.each(function() {
			var len = 0;
			$(this).find('li').each(function() {
				var acClass = 'active';
				if ($(this).hasClass(acClass)) {
					len = 1;
					return false;
				}
			});
			if (len == 1) {
				i++;
				$(this).attr('attr_data', 1);
			} else {
				$(this).attr('attr_data', 0);
			}
		});
		//如果是多个属性 并且只选择了一个属性
		$.vidCheckPoa();
		// if (length > 1 && i == 1) {
		// 	$.vidCheckPoa();
		// }

		return length == i;
	},
	validateIsSel: function() {
		var optionList = $('.goods_main_attr');
		var i = 0;
		optionList.each(function() {
			var temp = parseInt($(this).attr('attr_data'));
			if (!temp) {
				i++;
			}
		});
		var hasWarn = $(".info_title_nc").hasClass("info_title");
		var click_flg = parseInt($(".info_title_nc").attr('flg'));
		if (i >= 1 && !hasWarn && click_flg) {
			$(".info_title_nc").addClass("info_title");
			$(".info_title_nc .title_h1").show();
		}
		if (!i && hasWarn) {
			$(".title_h1").hide();
			$(".info_title_nc").removeClass("info_title");
		}
		return;
	},
	 // 显示属性描述信息
	showAttrDesc :function () {
		var sizeJson = $.sizeToJsonSize();
		var tableType = $('#table_type').val();
		var $size,
			$cupSize,
			sizeText = '',
			csize = null,
			sizearrObj = null;
	
		var attrSize = ''; // 多个size
		
		var sizeType = tableType ? $.cookie(tableType) : false;

		var arrayCvs = [];

		var replaceCvs = function (arr) {
			var metra,
				replaceData;
			if ($.type(arr) === 'array' && arr.length === 2) {
				metra = arr[0];
				replaceData = arr[1].split(',');
				return metra.replace('%cup%', replaceData[0]).replace('%oricup%', replaceData[1]);
			} else {
				return arr;
			}
		};

		if (($size = $('.goods_main_attr[option_id="380"] li.active, .goods_main_attr[option_id="396"] li.active')).length) {
			sizeText = $size.attr('value_name');
			csize = sizeText.toLowerCase();
			sizearrObj = csize.split("-");
			attrSize = csize;
			if(sizearrObj[1]){
				sizeJson[csize] = sizeJson[sizearrObj[0]]+'-'+sizeJson[sizearrObj[1]];
			}
			sizeType && arrayCvs.push( $('#size_' + sizeType + '_' + sizeText).html());
		}
		if (($cupSize = $('.goods_main_attr[option_id="404"] li.active')).length) {
			attrSize += $cupSize.attr('value_name');
			sizeType && arrayCvs.push( $('#size_' + sizeType + '_' + $cupSize.attr('value_name')).html());
		}

		var $sizeText = null;
		//sizeText = $.trim(sizeText.replace('<i></i>',''));
		$('.sizeText').hide().each(function() {
			var tmpText = $(this).attr('size').toLowerCase();

			if (tableType && (tmpText == attrSize.toLowerCase() || tmpText == sizeJson[csize])) {
				
				$(this).find('.conversion').html(replaceCvs(arrayCvs));
				$sizeText = $(this);
				// $(this).show();
			} else {

				if (sizeJson[tmpText] == sizeText.toLowerCase()) {
					$sizeText = $(this);
					// $(this).show();
				}
			}
		});

		$.showTooltip();
	},

	//获取选中属性项的数据
	getSelectedOptions: function(jump) {
		if(jump==false){
			if (!$.validateSelOptions()) {
				return false;
			}
		}
		
		var optionList = $('.goods_main_attr');
		var optionIds = new Array;
		var valueIds = new Array;

		optionList.each(function() {
			var option_id = $(this).attr('option_id');
			var value_id = $('li.active', this).attr('value_id');

			// $(this).find('li').each(function() {
			// 	var acClass = 'active';
			// 	if ($(this).hasClass(acClass)) {
			// 		value_id = $(this).attr('value_id');
			// 		var tableType = $('#table_type').val();
			// 		if (tableType && (option_id == 380 || option_id == 396)) {
			// 			var sizeJson = $.sizeToJsonSize();
			// 			var sizeText = $(this).attr('value_name'); //$(this).html();
			// 			//sizeText = $.trim(sizeText.replace('<i></i>',''));
			// 			$('.sizeText').hide().each(function() {
			// 				var tmpText = $(this).attr('size').toLowerCase();
			// 				var csize = sizeText.toLowerCase();
			// 				var sizearrObj = csize.split("-");
			// 				if(sizearrObj){
			// 					sizeJson[csize] = sizeJson[sizearrObj[0]]+'-'+sizeJson[sizearrObj[1]];
			// 				}
			// 				if (tmpText == csize || tmpText == sizeJson[csize]) {

			// 					var sizeType = $.cookie(tableType);
			// 					var conversion = $('#size_' + sizeType + '_' + sizeText).html();
			// 					$(this).find('.conversion').html(conversion);
			// 					$(this).show();
			// 				} else {

			// 					if (sizeJson[tmpText] == sizeText.toLowerCase()) {
			// 						$(this).show();
			// 					}
			// 				}
			// 			});
			// 		}
			// 		return false;
			// 	}
			// });
			optionIds.push(option_id);
			valueIds.push(value_id);
		});
		$.showAttrDesc();
		var result = {};
		result.optionIds = optionIds;
		result.valueIds = valueIds;
		return result;
	},
	//尺寸显示兼容对照数组
	sizeToSize: function(ss) {
		var size = new Array();
		size['xxl'] = '2xl';
		size['2xl'] = 'xxl';
		size['xxxl'] = '3xl';
		size['3xl'] = 'xxxl';
		size['xxxxl'] = '4xl';
		size['4xl'] = 'xxxxl';
		size['xxxxxl'] = '5xl';
		size['5xl'] = 'xxxxxl';
		size['6xl'] = 'xxxxxxl';
		size['xxxxxxl'] = '6xl';
		size['7xl'] = 'xxxxxxxl';
		size['xxxxxxxl'] = '7xl';
		if (ss == 'xxl') {
			var sss = '2xl';
			return sss;
		}
		if (ss == '2xl') {
			var sss = 'xxl';
			return sss;
		}
		return size;
	},
	//尺寸显示兼容对照
	sizeToJsonSize: function(size) {
		var sizeJson = {
			'xxl': '2xl',
			'2xl': 'xxl',
			'xxxl': '3xl',
			'3xl': 'xxxl',
			'4xl': 'xxxxl',
			'xxxxl': '4xl',
			'5xl': 'xxxxxl',
			'xxxxxl': '5xl',
			'6xl': 'xxxxxxl',
			'xxxxxxl': '6xl',
			'7xl': 'xxxxxxxl',
			'xxxxxxxl': '7xl'
		};
		if (size) {
			return sizeJson[size];
		}
		return sizeJson;
	},
	addInches: function (o) {
		var type = o.find('a').attr('size');
		var objInches = {
			type: type,
			sizes: [o.find('a').text()]
		};
		var arrCup = [],
			arrSize = [];
		$('.size_' + type + '[data-classid="380"]').each(function() {
			arrSize.push($(this).attr('data').split(' ').slice(-1).toString());
		});
		$('.size_' + type + '[data-classid="404"]').each(function() {
			arrCup.push($(this).attr('data').split(' ').slice(-1).toString());
		});
		if (arrCup.length) {
			arrSize.forEach(function (size) {
				arrCup.forEach(function (cup) {
					objInches.sizes.push(size + ' ' + cup);
				});
			});
		} else {
			objInches.sizes = objInches.sizes.concat(arrSize);
		}
		
		$('.table-inches').each(function () {
			if ($('th.local-inches', this).length) {
				$('tr', this).each(function (i) {
					$(this).children().eq(1).text(objInches.sizes[i] || '-');
				});
			} else {
				$('tr', this).each(function (i) {
					$(this).children().eq(0).after(i === 0 ? '<th class="local-inches">' + objInches.sizes[i] + '</th>' : '<td>' + (objInches.sizes[i] || '-') + '</td>');
				});
			}
		});
	},
	//转换国际码
	selConversion: function(o) {
		var type = o.find('a').attr('size');
		var sizes = new Array();
		
		$('.size_' + type).each(function() {
			sizes[$(this).attr('size')] = $(this).attr('data');
		});

		$('.size_list_box').each(function () {
			$('.cy_title a').attr('size', type).html(o.find('a').html());
			$('li.active', this).removeClass('active');
			$('li [size="' + type + '"]', this).closest('li').addClass('active');
		});
		o.parent().find(".active").removeClass('active');
		o.addClass('active');


		$('#sizeText').attr('size', type);
		$('#sizeText').html(o.find('a').html());

		$('.goods_main_attr .size li').each(function() {
			var sizeText = $(this).attr('value_name');
			if (typeof(sizes[sizeText]) != "undefined") {
				var sel = '';
				if ($(this).hasClass('active')) {
					sel = '<i></i>';
				}
				$(this).html(sizes[sizeText] + sel);
			}
		});

		var tableType = $('#table_type').val();
		if (tableType) {
			var date = new Date();
			date.setTime(date.getTime() + (24 * 3600 * 1000));
			$.cookie(tableType, type, {
				path: '/',
				expires: date
			});
		}

		$.getSelectedOptions();
		$(".goods_main_list .size_list_box .list").hide();

		$.addInches(o);
			
	},
	//初始化size选中
	iniSize: function() {
		var leng = $(".goods_main_list .size_list_box .list li").length;
		if (leng > 0) {
			var type = $('#table_type').val();
			var sizeType = $.cookie(type);
			var $a = $('.goods_main_list .size_list_box .list li a[size="' + sizeType + '"]');
			
			if ($a.length) {
				$.selConversion($a.closest('li'));
			}
			// $(".goods_main_list .size_list_box .list li").each(function() {
			// 	if ($(this).find('a').attr('size') == sizeType) {
			// 		$.selConversion($(this));
			// 	}
			// });
		}
	},
	//初始化size table type
	iniTableType: function() {
		var tableType = $('#table_type').val();
		if (tableType) {
			var sizeType = $.cookie(tableType);
			$(".goods_main_list .size_list_box .list li").each(function() {
				if ($(this).find('a').attr('size') == sizeType) {
					$.selConversion($(this));
				}
			});
			if (!sizeType) {
				$.ajax({
					type: 'GET',
					dataType: 'HTML',
					url: homeUrl + '/ajaxload/ajax-initTableType.html',
					success: function() {
						$.iniSize();
						var sizeType = $('#sizeText').attr('size');
						var $a = $('.goods_main_list .size_list_box .list li a[size="' + sizeType + '"]');
						$a.length && $.addInches($a.closest('li'));
					}
				});
			}
		}
	},

	//添加心愿单
	addToWish: function(e) {
		var products_id = $('#products_id').val();
		products_id = parseInt(products_id);
		$btn = $('#gh').closest('.addwish');
		if (products_id <= 0 || $btn.hasClass('wished')) {return false;}
		$btn.loading();
		// $("i").addClass("active");
		// $btn.addClass('wished');
		// var num = parseInt($("#gh").attr("data-num")) + 1;
		// var Adds = $("#gh").attr("data");
		// var wish = '<u> ' + Adds + '</u>';
		// $('.count', '.addwish').text(num);
		// if (parseInt($("#gh").attr("data-num")) == 0) {
		// 	$("#wishAmount").after(wish);
		// }
		$.ajax({
			type: 'POST',
			dataType: 'JSON',
			url: homeUrl + '/ajaxload/account-addWishlist.html',
			data: {
				'products_id': products_id
			},
			success: function(result) {
				if (result.status) {
					// $("i").addClass("active");
					// $btn.addClass('wished');
					// var num = parseInt($("#gh").attr("data-num")) + 1;
					// var Adds = $("#gh").attr("data");
					// var wish = '<u> ' + Adds + '</u>';
					// $('.count', '.addwish').text(num);
					// if (parseInt($("#gh").attr("data-num")) == 0) {
					// 	$("#wishAmount").after(wish);
					// }
					$btn.addClass('wished');
					var num = parseInt($("#gh").attr("data-num")) + 1;
					$('.count', '.addwish').text(num);
					// ZSConfirm(result.message, result.label, result.view, result.close, function(r) {
					// 	if (r) {
					// 		window.location.href = homeUrl + 'index.php?com=account&t=my_wishs';
					// 	}
					// });
					/*$.alert({
						title: result.label,
						content: result.message,
						okValue: result.view,
						ok:function () {
							window.location.href = homeUrl + 'index.php?com=account&t=my_wishs';
						},
						cancelValue:result.close,
						cancel: true
					});*/
					$.msg(result.message, 'success', 2);
					$.FBaddWishlist();
				} else if (result.noLogin) {
					// ZSAlert(result.message, result.label, result.btn, '', function(res) {
					// 	if (res && result.url) {
					// 		window.location.href = result.url;
					// 	}
					// });
					$.alert({
						title: result.label,
						content: result.message,
						okValue: result.btn,
						ok:function () {
							window.location.href = result.url;
						}
					});
				} else {
					$.alert({
						title: result.label,
						content: result.message,
						ok: false,
						autoClose: 2
					});
				}
			},
			complete: function () {
				$btn.loading(false);
			}
		});
	},
	//fb增加统计
	FBaddWishlist: function() {
		if(typeof fbCode=='undefined'){return;}
		var products_id = fbCode.content_ids;
		var currency = fbCode.currency;
		var value = fbCode.value;
		var content_name = fbCode.content_name;
		var content_category = fbCode.content_category;
		var p = {
			"content_type":'product',
			"content_name": content_name,
			"content_ids": products_id,
			"content_category": content_category,
			"value": value,
			"currency": currency,
		};

		fbq('track', 'AddToWishlist', p);
		pintrk('track', 'lead', p);
	},
	reset_img_size: function() {
		//console.log($(".carouse_swipe_box .goodsbox li").width());
		$(".carouse_swipe_box .goodsbox li span.img").height($(".carouse_swipe_box .goodsbox li").width() * 4 / 3);
	},

	//获取套餐产品的属性
	getpackageProductpoa: function(obj) {
		var _this = $(obj);
		var _products_id = _this.attr("data-product");
		if (!_products_id) return;

		var _poa = _this.attr("data-poa");
		var _package = _this.attr("data-package");

		if ($("#package" + _package + "_'" + _products_id).hasClass("hasData")) {
			$.stockPackageMessageCallback(_package, _products_id);
			return;
		}
		$.ajax({
			type: 'POST',
			dataType: 'JSON',
			url: homeUrl + '/ajaxload/ajax-getAttributes.html',
			data: {
				'products_id': products_id,
				'poa': _poa
			},
			success: function(result) {
				$("#packageMessage").append('<div id="package' + _package + '_' + _products_id + '" class="hasData">' + result + '</div>');
			}
		});
	},

	stockPackageMessageCallback: function(_package, _products_id) {
		var html = $("#package" + _package + "_'" + _products_id).html();
	},

	//添加产品到购物车
	packageAddToCart: function(btn) {
		//判断是否是flash deals产品?
		if ($(btn).hasClass("dealsguy")) {
			var limitbuy = $(btn).attr('limitbuy');
			if (limitbuy == 0) {
				var xiangou_tip = $(btn).siblings("#xiangou_tip").text();
				$(btn).addClass('gray');
				ZSAlert(xiangou_tip, 'Tips', 'OK');
			}
		}

		if ($(btn).hasClass('gray')) {
			return false;
		}

		$.chkQuantity();

		var qty = $("#qty").val();

		//获取选中的属性
		var selOpResult = $.getSelectedOptions();
		$(".info_title_nc").attr('flg', 1);
		if (!selOpResult) {
			$.validateIsSel();
			return false;
		}
		if (selOpResult) {
			if ($('#isCheckStock').val() == 1) { //检查是否还在查库存状态
				return false;
			}
			//先要删除attr隐藏信息重新生成
			$('#detailCartForm .pAttr').each(function() {
				$(this).remove();
			});
			for (var i = 0; i < selOpResult.optionIds.length; i++) {
				var op = selOpResult.optionIds[i];
				var val = selOpResult.valueIds[i];
				var html = '<input type="hidden" class="pAttr" name="attrs[' + op + ']" value="' + val + '" />';
				$('#detailCartForm').append(html);
			}
		}
		var save = function () {
			var params = $('#detailCartForm').serialize();

			params += '&com=shopcart&t=addProduct';

			var msg = $(btn).attr('msg');
			msg = msg.replace('%d', qty);
			var mTitle = $(btn).attr('mTitle');
			var mBtn = $(btn).attr('mBtn');
			var mBtn1 = $(btn).attr('mBtn1');

			var products_id = $('#products_id').val();
			var catPath = $('#categoryPath').attr('data-path');
			catPath = $.trim(catPath);
			$.ajax({
				type: 'post',
				url: '/index.php',
				data: params,
				dataType: 'json',
				beforeSend: function() {
					ZSLoad('', '');
				},
				success: function(res) {
					//ZSConfirm(msg, mTitle, mBtn, mBtn1, function(result){
					//	if(result){window.location.href = httpsHomeUrl+'shopping_cart.php';}
					//});
					$.ajax({
						type: 'get',
						url: '/index.php',
						data: 'com=ajax&t=loadHeadCarts',
						success: function(res) {
							$('.head_right .bag').html(res);
							$(".bag .box").slideDown(200);
							$('html, body').animate({
								scrollTop: 0
							}, 'slow');
						}
					});

					var p = {
						"content_category": fbCode.content_category,
						"content_type": "product",
						"content_ids": fbCode.content_ids,
						"frist_source": fbCode.frist_source,
						"campaign": fbCode.campaign,
					};
					fbq('track', 'AddToCart', p);
					pintrk('track', 'AddToCart', p);
				},
				complete: function() {
					$.ZSmsgBox._hide();
				}
			});
		};

		if (limitbuy == 1) {
			$.ajax({
				url: '/ajaxload/shopcart-canFDAddCart.html?qty=' + $('#qty').val() + '&products_id=' + $('#products_id').val(),
				dataType:'json',
				beforeSend: function() {
					ZSLoad('', '');
				},
				complete: function() {
					$.ZSmsgBox._hide();
				},
				success: function(res) {
					if (res.code == 1) {
						save();
					} else {
						$.alert(res.msg);
					}
				}

			});
		} else {
			save();
		}

	}
});



$(".quantity_box").on("input propertychange keypress", "input:text", function(event) {
	$.ZSquantityInput($(this));
});

;
(function($) {
	var $goods_photo_max = $(".goods_photo_max");
	var $goods_photo_min_img = $(".goods_photo_min .box img");

	$goods_photo_max.HoverDelay({
		hoverDuring: 100,
		outDuring: 100,
		hoverEvent: function(obj) {
			return function() {
				$(obj).find("span b").html('<i/>' + $(obj).find("span b").attr("attr_1"));
			};
		},
		outEvent: function(obj) {
			return function() {
				$(obj).find("span b").html('<i/>' + $(obj).find("span b").attr("attr_2"));
			};
		}
	});

	$(".goods_photo_min").Swipe({
		auto: 1,
		continuous: true,
		disableScroll: false,
		startSlide: 0,
		direction:'vertical',
		callback: function(pos) {}
	});
	$('.goods_photo_min .box li').hover(function() {
		var $this = $(this);
		changeBigpicTimer && clearTimeout(changeBigpicTimer);
		this.timer = setTimeout(function() {
			$this.parent().parent().find('.active').removeClass('active');
			$this.addClass('active');
			$goods_photo_max.find('div').html("<img src='" + $this.children('img').attr('ref') + "' />");
		}, 100);
	}, function() {
		this.timer && clearTimeout(this.timer);
		changeBigpicTimer = setTimeout(function() {
			$.changeAttrImage($('.goods_main_attr .color li.active img')[0]);
		}, 2000);
	});



	$goods_photo_max.click(function() {
		var maxlist = '',
			minlist = '',
			a = 0,
			css = '',
			goods_zoom_two = '',
			active, thisIndex;
		goods_zoom_two = $goods_photo_min_img.length > 10 ? ' goods_zoom_two' : '';
		$goods_photo_min_img.each(function(i) {
			active = '';
			if ($(this).parent().hasClass("active")) {
				active = ' class="active"';
				thisIndex = i;
			}
			maxlist += '<li' + active + '><img src="' + $(this).attr("big") + '" /></li>';
			minlist += '<li' + active + ' ' + css + '><img src="' + $(this).attr("src") + '" /></li>';
		});
		// $goods_photo_min_img.each(function(){
		// 	if(a > 9){
		// 		if(goods_zoom_two == '') goods_zoom_two = ' goods_zoom_two';
		// 		css = 'style="top:' + 59 * (a-10) + 'px;left:59px;"';
		// 		$(".good_photo_zoom_box").addClass("good_photo_zoom_box_2");
		// 	}
		// 	else
		// 	{
		// 		css = 'style="top:' + 59 * a + 'px;"';
		// 	}
		// 	active = '';
		// 	if($(this).parent().hasClass("active")){
		// 		active = ' class="active"';
		// 		thisIndex = a;
		// 	}
		// 	maxlist = maxlist + '<li' + active + '><img src="' + $(this).attr("big") + '" /></li>';
		// 	minlist = minlist + '<li' + active + ' ' + css + '><img src="' + $(this).attr("src") + '" /></li>';
		// 	a++;
		// });
		var msg = '' +
			'<div class="goods_zoom' + goods_zoom_two + '">' +
			'<div class="goods_zoom_swipe">' +
			'<div class="carouse_swipe_box">' +
			'<ul>' + maxlist + '</ul>' +
			'</div>' +
			'<ul class="carouse_btn">' +
			'<li class="prev"><i></i></li>' +
			'<li class="next"><i></i></li>' +
			'</ul>' +
			'<ul class="carouse_tab">' +
			'</ul>' +
			'<s onclick="$.ZSmsgBox._hide();">×</s>' +
			'</div>' +
			'<div class="goods_zoom_list">' +
			'<ul>' + minlist + '</ul>' +
			'</div>' +
			'</div>';
		ZSHtml(msg, "none");
		var zoomlist = $(".goods_zoom_list li");
		var goods_zoom_swipe = Swipe(
			$(".goods_zoom_swipe")[0], {
				auto: 0,
				continuous: true,
				disableScroll: false,
				startSlide: thisIndex,
				callback: function(pos) {
					zoomlist.removeClass("active").eq(pos).addClass("active");
				}
			}
		);

		zoomlist.HoverDelay({
			hoverDuring: 100,
			outDuring: 100,
			hoverEvent: function(obj) {
				return function() {
					var $this = $(obj);
					if ($this.index() == zoomlist.find("active").index()) return false;
					goods_zoom_swipe.slide($this.index());
				}
			}
		});

	});
})(jQuery);

// $(".images_water").on("click", ".btn b", function() {
// 	var $this = $(this);
// 	var $like = $this.find("s");
// 	var $li = $this.parents("li");
// 	var likenum = parseInt($like.text());
// 	if ($this.index() == 0) {
// 		if ($this.hasClass("gray")) return;
// 		var media_id = $this.parent().attr('id');
// 		var type = $this.parent().attr('type');
// 		var method = 'diggImage';
// 		var media_name = 'image_id';
// 		if (type == 'video') {
// 			method = 'diggVideo';
// 			media_name = 'video_id';
// 		}
// 		var data = 'com=review&t=' + method + '&' + media_name + '=' + media_id;
// 		$.ajax({
// 			url: '/index.php',
// 			type: 'get',
// 			data: data,
// 			dataType: 'json',
// 			success: function(result) {
// 				if (result.status == true) {
// 					$like.text(likenum + 1);
// 					$this.addClass("gray");
// 				} else {
// 					ZSConfirm(result.message, '', result.btn, result.cancel, function(res) {
// 						if (res && result.url) {
// 							window.location.href = homeUrl + result.url;
// 						}
// 					});
// 				}
// 			}
// 		});
// 	} else {
// 		$this.parents(".images_water").find(".review").hide();
// 		if ($li.find(".review").length > 0) {
// 			$li.find(".review").show();
// 			return;
// 		}
// 		var media_id = $this.parent().attr('id');
// 		var type = $this.parent().attr('type');
// 		$li.find(".btn").after(
// 			'<span class="review">' +
// 			'<textarea name="content"></textarea>' +
// 			'<b onclick="$.submitMediaComment(this);" mid="' + media_id + '" type="' + type + '">Sumbit</b>' +
// 			'</span>'
// 		);
// 	}
// });

$(".images_water_loading").on("click", "span", function() {
	var $this = $(this);
	if ($this.hasClass("gray")) return;
	var page = $this.attr('next_page');
	var total_page = $this.attr('total_page');
	var act = $this.attr("page_action");
	if (page > total_page) return;

	$this.addClass("gray");
	var pid = $('#products_id').val();
	var data = 'com=product&t=' + act;
	data += '&products_id=' + pid;
	data += '&page=' + page;

	$.ajax({
		url: '/index.php',
		type: 'get',
		data: data,
		dataType: 'json',
		success: function(result) {

			var next_page = parseInt(page) + 1;
			$this.attr('next_page', next_page);
			ZSwater(".images_water", 5, result.html);
			$(".images_water").find("li").css("background", "#FFFFFF");
			$this.removeClass("gray");

			if (next_page > total_page) {
				$this.hide();
			}
		}
	});
});

$('.sizeText i').click(function() {
	$('.sizeText').hide();
});
//$.stockMessage();
$(document).ready(function() {
	// $(".goods_main_attr li").each(function(){
	// 	var $this = $(this);
	// 	if($this.hasClass('active') && $this.find('img').length > 0){
	// 		$.changeAttrImage($this.find('img')[0]);
	// 	}
	// });
	$.changeAttrImage($('.goods_main_attr li.active img')[0]);

});
$(".goodsbox_1200").Swipe({
	auto: 0,
	continuous: true,
	disableScroll: false,
	startSlide: 0,
	callback: function(pos) {}
});


//产品心愿单的统计数
function wishAmount(num) {
	
	var Adds = $("#gh").attr("data");
	var wish = '<u> ' + Adds + '</u>';
	$("#wishAmount").text(' ' + num);
	$("#wishAmount").after(wish);
	$("#gh").attr("data-num", num).data('num', num);
	$('#uy').find('.count').text(num);


	
}

//判断用户是否将该产品add to wish
function ajaxHasAddWish() {
		$("#gh").addClass("active").closest('.addwish').addClass('wished');
	
}

//判断将该产品是否是优惠 产品
function ajaxSpecialPro() {
	var time = new Date().getTime();
	var pid = $('#products_id').val();
	if (!pid) {
		return;
	}
	$.ajax({
		url: '/ajaxload/ajax-ajaxSpecialPro.html?products_id=' + pid + '&qt=' + time,
		type: 'get',
		data: '',
		dataType: 'json',
		success: function(res) {
			//var currency = $.setCurrency.getCookieCurrency();
			//var nowFinalPrice = res.total_price;
			//var nowPrice = res.price;
			//var nowFormatFinalPrice = $.setCurrency.getPriceByCurrency(nowFinalPrice, currency, true);
			//var nowFormatPrice = $.setCurrency.getPriceByCurrency(nowPrice, currency, true);

			if (res) {
				var message = $("#specialProduct").attr("message");
				var special = $("#specialProduct").attr("special");
				var message2 = $("#specialProduct").attr("message2");
				var pre_category_id = $("#specialProduct").attr("pre_categoriy_id");
				var str = '<div class="sale"><i></i><span><b>' + special + '</b> ' + res.amount + ' / <em class="price" oriprice="' + res.total_price + '">' + res.format_special_total_price + '</em></span><u>' + message + '</u><a href="'+homeUrl+'specials/pre-'+pre_category_id+'/" class="see_more"><span></span>' + message2 + ' &gt;&gt;</a></div>';
				//$.setCurrency.autoChangePrice($(".price_number"), currency, true);
				$("#specialProduct").before(str);
				$("#specialProduct").text(res.format_special_price);
				$("#specialProduct").attr('status', 1);
				$("#specialProduct").attr('oriprice', res.price);
				$("#specialProduct").attr('amount', res.amount);
			}
		}
	});
}

//判断用户是否有登录，刷新flash deals产品的信息
function ajaxFlashLogin() {
	var time = new Date().getTime();
	var pid = $('#products_id').val();
	if (!pid) {
		return;
	}
	$.ajax({
		url: '/ajaxload/ajax-ajaxLoginFlash.html?products_id=' + pid + '&qt=' + time,
		type: 'get',
		data: '',
		dataType: 'json',
		success: function(res) {
			if ($(".addcart").hasClass("dealsguy")) {
				$(".addcart").attr("limitbuy", res);
			}
		}
	});
}

//判断该产品是否为套餐产品
//var isStock = 0;
function ajaxisPackageProduct() {
	return;
	var time = new Date().getTime();
	var pid = $('#products_id').val();
	if (!pid) {
		return;
	}

	$.ajax({
		url: '/ajaxload/ajax-ajaxisPackageProduct.html?products_id=' + pid + '&qt=' + time,
		type: 'get',
		data: '',
		dataType: 'json',
		success: function(result) {
			if (result) {
				$("#maindet").after(result);
			}
		}
	});
}

function ajaxSpecialPro_new(res) {
	if (res) {
		var message = $("#specialProduct").attr("message");
		var special = $("#specialProduct").attr("special");
		var message2 = $("#specialProduct").attr("message2");
		var pre_category_id = $("#specialProduct").attr("pre_categoriy_id");
		var str = '<div class="sale"><i></i><span><b>' + special + '</b> ' + res.amount + ' / <em class="price" oriprice="' + res.total_price + '">' + res.format_special_total_price + '</em></span><u>' + message + '</u><a href="'+homeUrl+'specials/pre-'+pre_category_id+'/" class="see_more"><span></span>' + message2 + ' &gt;&gt;</a></div>';
		//var str = '<div class="sale"><i></i><span><b>' + special + '</b> ' + res.amount + ' / <em class="price" oriprice="' + res.total_price + '">' + res.format_special_total_price + '</em></span><u>' + message + '</u><a href="http://www.newchic.com/specials/" class="see_more"><span></span>' + message2 + '&gt;&gt;</a></div>';
		$("#specialProduct").before(str);
		$("#specialProduct").text(res.format_special_price);
		$("#specialProduct").attr('status', 1);
		$("#specialProduct").attr('oriprice', res.price);
		$("#specialProduct").attr('amount', res.amount);
	}
}

function ajaxWishAmount_new(result) {
	if (result > 0) {
		var Adds = $("#gh").attr("data");
		var wish = '<u> ' + Adds + '</u>';
		$("#wishAmount").text(' ' + result);
		$("#wishAmount").after(wish);
		$("#gh").attr("data-num", result);
		var Adds = $("#gh").attr("data-num", result);
	}
}

function ajaxHasAddWish_mew(result) {
	if (result == 1) {
		$("#gh").addClass("active");
	}
}

//产品 ajax 合并处理  (活动产品)
function ajaxProductOperate() {
	var time = new Date().getTime();
	var pid = $('#products_id').val();
	if (!pid) {
		return;
	}
	var displayFdTag = function (status) {
		if (status) {
			$(".deals_cc").addClass("fla_icon");
			$(".clock").show();
			$(".clearance_tag").hide();
			$(".clear_tip").hide();
		} else {
			$(".clock").remove();
			//$(".clearance_tag").show();
			//$(".clear_tip").show();
		}
		
	};
	
	var utm_medium = getQueryString("utm_medium");
	if (!utm_medium) {
		utm_medium = $('#utm_medium').val();
	};
	var url = '/ajaxload/ajax-ajaxProductOperate.html?products_id=' + pid + '&qt=' + time;
	if(utm_medium){
		url = '/ajaxload/ajax-ajaxProductOperate.html?products_id=' + pid + '&utm_medium=' + utm_medium;
	}

	$.ajax({
		url: url,
		type: 'get',
		data: '',
		dataType: 'json',
		success: function(result) {
				switch(true) {
					case 'ajaxSpecialPro' in result:
						displayFdTag(false);
						ajaxSpecialPro_new(result.ajaxSpecialPro);
						break;
					case 'ajaxFlashPro' in result://fd产品
						if(result.ajaxFlashPro.data.is_customer_special == 1){
							$('div.clock').find('.time_left').remove();
							var timeLeft = result.ajaxFlashPro.data.time_left;
							window.dealsCountDown = setInterval(function(){
								second_obj = timeCountDown(timeLeft);
								if(timeLeft == 0){
									$('.time_left, .fla_icon, .time-left-landing-page').remove();
									window.location.reload();
								}
								
								$('div.clock').find('.sales_clock').show().html('<i></i> <span class="cl_h">' + second_obj.hour + '</span> : <span class="cl_m">' + second_obj.minute + '</span> : <span class="cl_s">' + second_obj.second + '</span>');
								timeLeft--;
							},1000);
							
							//价格显示处理
							ajaxChangePrice(result);
						}else{
							$.getDealsCountDown({
								productId: pid
							});
						}
						
						displayFdTag(true);
						$(".clock").css("display","block");
						$(".deals_cc").addClass("fla_icon");
						$('.deal_more').show();
						//限购库存处理
						if(result.stock > 0){
							$("#maximum").attr("data-default", result.stock);
							$("#maximum").text("Maximum: "+result.stock);
							$("#qty").attr("LimitProduct", result.limitProduct);
							$("#qty").attr("maximum", result.stock);
							$("#qty").attr("buylimit", result.stock);
							if(result.showStocks == 1){
								$("#maximum").show();
							}
							
						}
						//价格显示处理
						ajaxChangePrice(result);
						
						break;
					case 'ajaxisClearPro' in result:
						if ('data' in result.ajaxisClearPro && 'time_left' in result.ajaxisClearPro.data) {
							$(".clock").show();
							var timeLeft = result.ajaxisClearPro.data.time_left;
							$('.deal_more').show();
							$('.deal_more a').attr('href', '/clearance/');
							window.dealsCountDown = setInterval(function(){
								second_obj = timeCountDown(timeLeft);
								if(timeLeft == 0){
									$('.time_left, .fla_icon, .time-left-landing-page').remove();
									$('.deal_more').hide();
									window.location.reload();
								}
								var left_day = '';
								if (second_obj.day > 0) {
									left_day = '<span class="cl_d">'+second_obj.day+'</span> : ';
								}
								$('div.clock').find('.time_left').show().html('<i></i> ' + left_day + '<span class="cl_h">' + second_obj.hour + '</span> : <span class="cl_m">' + second_obj.minute + '</span> : <span class="cl_s">' + second_obj.second + '</span>');
								timeLeft--;
							}, 1000);
							
						}
						//价格显示处理
						ajaxChangePrice(result);
						break;

					case 'ajaxEdmPro' in result:
						displayFdTag(false);
						//价格显示处理
						ajaxChangePrice(result.ajaxEdmPro);
						
						break;
					case 'ajaxisDropshipPro' in result:
						
						//价格显示处理
						ajaxChangePrice(result);
						
						//库存处理
						if(result.ajaxisDropshipPro.stocks > 0){
							var _maxStr = $("#dropshipPro").attr("str");
							$("#dropshipPro").text(_maxStr + ':' + result.ajaxisDropshipPro.stocks);
							$("#dropshipPro").show();
							$("#maximum").hide();
						}
						
						//清仓标志去掉
						if(result.ajaxisDropshipPro.clearStock == 1){
							$(".clearance_tag").show();
						}else{
							$(".clearance_tag").hide();
						}
						$(".clear_tip").remove();
						
						break;
					case 'ajaxisActivityPro' in result://os设置的限购产品
						//价格显示处理
						ajaxChangePrice(result);
						
						//限购库存处理
						if(result.stock > 0){
							$("#maximum").attr("data-default", result.stock);
							$("#maximum").text("Maximum: "+result.stock);
							$("#qty").attr("LimitProduct", result.limitProduct);
							$("#qty").attr("maximum", result.stock);
							$("#qty").attr("buylimit", result.stock);
							if(result.showStocks == 1){
								$("#maximum").show();
							}
							
						}
						
						//清仓标志去掉
						$(".clearance_tag").remove();
						$(".clear_tip").remove();
						
						
						displayFdTag(false);
						 /*圣诞节活动 start*/
                          if(result.ajaxisActivityPro.APP_Price == 0){
                        	  if(result.ajaxisActivityPro.start == 1){
                        		  var pre_order_count = result.ajaxisActivityPro.activity_time
                        		  var moreUrl = ''
                        		  if (result.ajaxisActivityPro.moreUrl) {
                        		  	moreUrl = '<div class="deal_more" style=""><a href="'+result.ajaxisActivityPro.moreUrl+'">MORE &gt;&gt;</a></div>'
                        		  }
								  pre_order_timer = setInterval(function () {
									  var detail_json=timeCountDown(pre_order_count);
									  var detail_html_str='<div class="clock special_clocks"><strong class="pre_timer_html">'
										  +'<em class="pre_timer_sign" style="background: url('+result.ajaxisActivityPro.imageUrl+') no-repeat center center;"></em>'
										  +'<span class="cl_d">'+detail_json.day+'</span>'
										  +' : <span class="cl_h">'+detail_json.hour+'</span>'
										  +' : <span class="cl_m">'+detail_json.minute+'</span>'
										  +' : <span class="cl_s">'+detail_json.second+'</span> to end'
										  +'</strong>'
										  +moreUrl
										  +'</div>';
									  $('.goods_main_price .clock').remove();
									  $('.goods_main_price').append(detail_html_str);
									  if (pre_order_count === 0) {
										  clearInterval(pre_order_timer);
									  }
									  pre_order_count --;
								  }, 1000);
							  }else{
								$(".activity_tip").html('<strong class="activity_price price" oriprice="'+result.ajaxisActivityPro.promotion_price+'">'+result.ajaxisActivityPro.format_promotion_price+'</strong> '+result.ajaxisActivityPro.dateTitle);
								$(".chirstx_times").css("background","url("+result.ajaxisActivityPro.imageUrl_before+") no-repeat scroll center left");
	                            $('.chirstx_times').show();
                                  if(result.ajaxisActivityPro.moreUrl){
                                      $('.chirstx_times a').attr('href',result.ajaxisActivityPro.moreUrl).attr('target','_blank');
                                  }else{
                                      $('.chirstx_times a').hide();
                                  }
							  }
						  }else{
							  $(".app_tip").html('<strong class="app_price price" oriprice="'+result.ajaxisActivityPro.specials_price+'">'+result.ajaxisActivityPro.format_specials_price+'</strong> '+result.ajaxisActivityPro.dateTitle);
							  $(".appx_times").show();
							  
							  
							  $('.app_price').append('<i style="font-style: normal; font-weight: normal;"> '+result.ajaxisActivityPro.dateTitle+'</i>');
							  $("#apponly_price").html(result.ajaxisActivityPro.format_specials_price).attr('oriprice', result.ajaxisActivityPro.specials_price);
                              $('.goods_main_price').addClass('clearfix');
							  function res_wid() {
                                  var wid_sale=$('.price_other_sale').width();
                                  $('.price_other_sale').closest('.price_other').css({'width':wid_sale,'margin-right':'20px'});
                              }
                              res_wid();
                              $(document).on("click", ".head .currency .box li",function () {
                                  res_wid();
                              })
                              $('.pc_app_price').show();
						  }
						  ajaxChangePrice(result);
						/*圣诞节活动 end*/
						break;
					case result.product_style == 9:
						displayFdTag(false);
						$(".goods_main_price").after(result.tplHtml);
						break;

					case 'oriPro' in result:
						$(".price_number").attr("oriprice", result.oriPro.usprice);
						$(".price_number").text(result.oriPro.price);
						break;
					case 'ajaxPreorder' in result://预售产品信息异步处理（待处理）
						$(".status").css("display",'none');
						if(result.ajaxPreorder.supply_type==3){
							$('.addcart').addClass('gray');
							var btn = $('.addcart').attr('stitle');
							if (btn) {
								$('.addcart b').html('<i></i>' + btn);
							}
						}else{
							var moedels=result.ajaxPreorder.data;
	                        if(result.ajaxPreorder.code == 1){//显示预售产品详情
	                            $('.pre_order_tips,.pre_order_detail').show();
	                            $('#shippedTime').html(moedels.shipped_date);
								var pre_order_count =moedels.gameOutTime,
									pre_order_timer = setInterval(function () {
										var detail_json=timeCountDown(pre_order_count);
										var detail_html_str='<div class="clock red_clocks" style="text-align: center;;"><strong style=" margin-left: 0" class="pre_timer_html">'
											+'<em class="pre_timer_sign"></em>'
											+'<span class="cl_d">'+detail_json.day+'</span>'
											+' : <span class="cl_h">'+detail_json.hour+'</span>'
											+' : <span class="cl_m">'+detail_json.minute+'</span>'
											+' : <span class="cl_s">'+detail_json.second+'</span> to end'
											+'</strong>'
                                            +'<a href="/pre-order.html" target="_blank"  class="clock_link">MORE<span>>></span></a>'
                                           /* +'<a href="/pre-order.html" target="_blank"  class="clock_link">MORE<span>>></span></a>'*/
											+'</div>';
										$('.goods_main_price .clock').remove();
										$('.goods_main_price').append(detail_html_str);
										if (pre_order_count === 0) {
											clearInterval(pre_order_timer);
										}
										pre_order_count --;
									}, 1000);
								if(moedels.areaType == 2){//2表示预售产品有价格区间
									$('.pre_order_detail .is_squire').show();
									$('.pre_order_detail .pre_order_prog').css('width',moedels.sale_jd+'%');
									$('.pre_order_detail ol li').eq(0).attr('oriprice',moedels.products_price1);
									$('.pre_order_detail ol li').eq(1).attr('oriprice',moedels.products_price2);
									$('.pre_order_detail ol li').eq(2).attr('oriprice',moedels.products_price3);
									$('.pre_order_detail ul li').eq(0).find('span:not(:first)').html(moedels.products_qty4);
									$('.pre_order_detail ul li').eq(1).html(moedels.products_qty5);
									$('.pre_order_detail ul li').eq(2).html(moedels.products_qty6);
								}
								
								//限购库存处理
								if(result.stock > 0){
									$("#maximum").attr("data-default", result.stock);
									$("#maximum").text("Maximum: "+result.stock);
									$("#qty").attr("LimitProduct", result.limitProduct);
									$("#qty").attr("maximum", result.stock);
									$("#qty").attr("buylimit", result.stock);
																	
								}else{
									$('.addcart').addClass('gray');
									var btn = $('.addcart').attr('stitle');
									if (btn) {
										$('.addcart b').html('<i></i>' + btn);
									}
								}
								var now_currency=$.cookie('currency');
								var sign = eval('CurrencyCfg.' +now_currency + '[1]');
								$(".pre_order_detail .price").each(function(){
									$.setCurrency.autoChangePrice($(this), now_currency, true);
								});

							}else{
								$('.pre_order_tips,.pre_order_detail').remove();
							}
						}
						break;
					case "ajaxisWsPro" in result:
                        displayFdTag(false);
						ajaxChangePrice(result);
                        ajaxisWsPro_fn('create',result.ajaxisWsPro);
                        break;
					default:
						displayFdTag(false);
						ajaxChangePrice(result);
						
				}
				
				//套餐
				if(typeof(result.ajaxisPackageProduct) != 'undefined'){
					// $("#maindet").after(result.ajaxisPackageProduct);
				}

            //如果存在价格区间，显示价格区间
            rangePrice();
		}
	});
}


/*价格变动和折扣*/
function ajaxChangePrice(data){
	var _this = $(".price_number");
	if (data.oriprice) {
		_this.attr("oriprice", data.oriprice);
	};
	if (data.finalPrice) {
		_this.html(data.finalPrice);
	};
	if (data.usprice) {
		_this.attr("oriprice", data.usprice);
	};
	if (data.price) {
		_this.html(data.price);
	};
	if (data.discount) {
		$('.price_off').html(data.discount + '% OFF');
		$('.icon-sale').html(data.discount);
	};
	if(data.now_price_max){
		_this.attr("now_price_max", data.now_price_max);
		_this.attr("ori_max_price", data.now_price_max);
	}
	if(data.now_price_min){
		_this.attr("now_price_min", data.now_price_min);
		_this.attr("ori_min_price", data.now_price_min);
	}
	if(data.point > 0){
		$(".order-earn-points-tips span").html(data.point);
	}
	
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}



window.fbAsyncInit = function() {
	FB.init({
		appId: '1543133879317815',
		xfbml: true,
		version: 'v2.4',
		status: true,
		cookie: true
	});
};
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/* 点击执行分享，登记用户分享的数据 */
function shareFacebook(shareCode) {
	// $('.share_feedback').hide();
	var image = $('meta[property="og:img"]').attr("content");
	var title = $('meta[property="og:title"]').attr("content");
	var url = $('meta[property="og:url"]').attr("content");
	var product_desctiption = $('meta[property="og:description"]').attr("content");
	var products_id = $('input#products_id').val();
	if(url.indexOf('?') == -1){
		url += '?utm_source=share_facebook';
	}else{
        url += '&utm_source=share_facebook';
	}
	var params = {
		method: 'feed',
		display: 'popup',
		link: url,
		picture: image,
		name: title,
		caption: 'newchic',
		description: product_desctiption
	};
	/*	FB.init({
			appId      : fbAppId,
			xfbml      : true,
			version    : 'v2.4'
		});*/
	FB.ui(params, function(response) {
		// if (response && response.post_id) {
		if (response != undefined) {
			$.ajax({
				type: 'POST',
				url: homeUrl + '/ajaxload/product-ajaxSaveFbShareDate.html',
				dataType: 'JSON',
				// data: 'post_id=' + response.post_id + '&pid=' + products_id,
				data: 'pid=' + products_id,
				success: function(res) {
					ZSAlert(res.message, res.title, res.tip, '', function(result) {
						if (result && res.url) {
							window.location.href = res.url;
						}
					});
				}
			});
		} else {
			ZSAlert(res.message, res.title, res.tip, '', function(result) {
				if (result && res.url) {
					window.location.href = res.url;
				}
			});
		}
	});
}

/*$(".reviews_text,.review_pack_up").on("click", function(){
	$(this).toggle();
	$(this).siblings("a").toggle();
	$(this).siblings(".review_hide").toggle();
});*/

$(".reviews_text .review_read_more").on("click", function() {
	$(this).hide().next().show();
	$(this).siblings(".review_hide").show();
});

$(".reviews_text .review_pack_up").on("click", function() {
	$(this).hide().prev().show();
	$(this).siblings(".review_hide").hide();
});


/*$(function(){
	(function () {
		var $img = $('.goods_photo_max img:first'),
			$div = $img.closest('div'),
			mImg = new Image(),
			imgHeight;
		mImg.src = $img.data('original');
		mImg.onload = function () {
			imgHeight = $div.outerWidth() * mImg.height / mImg.width;
			$div.css('min-height', imgHeight);
		};
		
		
	})();	
});*/

function shareTumblr(elm) {
    var href = window.location.href.split('?');
    var url = href[0];
    if(url.indexOf('?') == -1){
        url += '?utm_source=share_tumblr';
    }else{
        url += '&utm_source=share_tumblr';
    }
	elm.href = '//www.tumblr.com/widgets/share/tool?canonicalUrl=' + url;
}

function shareTwitter(elm) {
    var href = window.location.href.split('?');
    var url = href[0];
    if(url.indexOf('?') == -1){
        url += '?utm_source=share_twitter';
    }else{
        url += '&utm_source=share_twitter';
    }
	var text = document.title + '---' + url;
	elm.href = '//twitter.com/intent/tweet?text=' + text;
}


$(function () {
	$(document).click(function () {
		$('.pro-detail-ws-meta').removeClass('active');
	})
	$('.pro-detail-ws-meta').click(function (event) {
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
		event.stopPropagation();
	});
	$('.pro-detail-ds-download').click(function () {
		var $this = $(this),
			data = $this.data(),
			ajaxData = {
				country: data.country,
	            'price-code':data.priceCode,
	            category: data.category,
	            skus: data.sku
			};
		$this.loading(true);
		$.ajax({
            url: '/ajaxload/account-dropshipDataFeedImport.html',
            dataType: 'json',
            type: 'post',
            data: ajaxData,
            success: function (result) {
                if (result.code == 200) {
                    window.location.href = result.url;
                } else {
                    $.msg(result.msg, 'error', 5);
                }
            },
            complete: function () {
                $this.loading(false);
            }
        });
	});

	$('.nav-tabs a', '.pro-detail-container').click(function () {
		var $this = $(this),
			$pane = $($this.data('tab'));

		$this.closest('li').addClass('active')
						   .siblings().removeClass('active');
		$pane.show()
			 .siblings().hide();

		if($this.hasClass("ajaxData") && !$pane.hasClass("hasData")){
			var cid = $this.attr("cid");
			$pane.loading(true, 'nobackdrop');
			$.ajax({
				type: 'POST',
				url: homeUrl + '/ajaxload/product-getArticeInfo.html',
				dataType: 'JSON',
				data: 'cat_id=' + cid,
				success: function(res) {
					$pane.append(res);
				},
				complete: function () {
					$pane.loading(false);
				}
			});
			$pane.addClass("hasData");
		}
		
		return false;
	});

	new Slide();

	
	// $('.size_chart.size_chart_anchor a', '.goods_main_list').click(function () {
	// 	var me = this,
	// 		anchor = $(this).data('anchor');
	// 	$('.pro-detail-container .nav-tabs a:first').trigger('click');
	// 	$(document).scrollTop($(anchor).offset().top - 79);
	// });
});
function Slide (options) {
	this.init(options);
}
$.extend(Slide.prototype, {
	init: function (options) {
		this.options = $.extend({
			index: 0,
			showItem: $('.prod-square-container').length ? 7 : 6,
			container: '.img-list-container .img-list',
			prev: '.img-list-container .prev',
			next: '.img-list-container .next'
		}, options);
		this.index = this.options.index;
		this.$container = $(this.options.container);
		this.length = this.$container.children().length;
		this.scrollHeight = this.$container.children().eq(0).outerHeight() + parseInt(this.$container.children().eq(0).css('margin-bottom'));
		this.options.prev && (this.$prev = $(this.options.prev));
		this.options.next && (this.$next = $(this.options.next));
		this.slide();

		var defaultImg = $('.img-big-container .img img', '.pro-img-container').data('original');
		$('.img img[data-big-img="' + defaultImg + '"]', this.$container).closest('.item').addClass('active');

	},
	slide: function () {
		this.format();
		this.bindEvent();
	},
	format: function () {
		var me = this,
			options = this.options,
			changeBtn = function (elmStr, display/*boolean*/) {
				me['$' + elmStr] && me['$' + elmStr][display ? 'removeClass' : 'addClass']('disabled');
			};
		if (this.index === 0 || this.length <= this.options.showItem) {
			changeBtn('prev', false);
		} else {
			changeBtn('prev', true);
		}
		if (this.length - this.options.showItem - this.index <= 0  || this.length <= this.options.showItem){
			changeBtn('next', false);
		} else {
			changeBtn('next', true);
		}


	},
	bindEvent: function () {
		var me = this;
		if (this.$prev) {
			this.$prev.bind('click', function () {
				if ($(this).hasClass('disabled')) {
					return;
				}
				me.index -= 1;
				me.$container
					.stop(true,true)
					.animate({'margin-top':'+=' + me.scrollHeight + 'px'}, 200);
				me.format();
			});
			this.$prev.bind('mouseenter', function () {
				this.timer = setTimeout(function () {
					me.$prev.trigger('click');
				}, 100);
			}).bind('mouseleave', function () {
				this.timer && clearTimeout(this.timer);
			});
		}
		if (this.$next) {
			this.$next.bind('click', function () {
				if ($(this).hasClass('disabled')) {
					return;
				}
				me.index += 1;
				me.$container
					.stop(true,true)
					.animate({'margin-top':'-=' + me.scrollHeight + 'px'}, 200);
				me.format();
			});
			this.$next.bind('mouseenter', function () {
				this.timer = setTimeout(function () {
					me.$next.trigger('click');
				}, 100);
			}).bind('mouseleave', function () {
				this.timer && clearTimeout(this.timer);
			});
		}

		this.$container.on('mouseenter', '.item', function () {
			var imgUrl = $('img', this).data('big-img'),
				$imgContainer = $('.img-big-container'),
				$item = $(this);
			// changeBigpicTimer && clearTimeout(changeBigpicTimer);
			if ($('.img-big-container img.big').attr('src') === imgUrl) {
				return;
			}
			this.timer = setTimeout(function () {
				$imgContainer.loading(true, 'big');
				$item.addClass('active').find('.img').loading(true).end()
					 .siblings().removeClass('active')
					 			.find('.img').loading(false);
				$('.img-big-container img.big').attr('src', imgUrl).data('original', imgUrl);
				var img = new Image();
				img.src = imgUrl;
				img.onload = function () {
					$imgContainer.loading(false);
					$('.img', $item).loading(false);
				};
			}, 100);
		}).on('mouseleave', '.item', function () {
			this.timer && clearTimeout(this.timer);
		});

		$('.pro-img-container').on('mouseenter', function () {
			changeBigpicTimer && clearTimeout(changeBigpicTimer);
		}).on('mouseleave', function () {
			changeBigpicTimer = setTimeout(function() {
				var $img = $('.goods_main_attr .color li.active img');
				if ($img.length) {
					$('.etalage_magnifier').hide();
					$.changeAttrImage($img[0]);
				}
			}, 2000);
		})


	}
});
$(window).load(function() {
	Slide.prototype.init();
});
//价格区间
function rangePrice() {
    var priceObj = $('.price_number');
    var currency = $.setCurrency.getCookieCurrency();
    if (priceObj.attr('ori_min_price') != undefined && priceObj.attr('ori_max_price') != undefined &&
        parseFloat(priceObj.attr('ori_max_price')) > parseFloat(priceObj.attr('ori_min_price'))) {
        $.setCurrency.handlePriceRange(priceObj, currency, false, false);
    }
}

// 多POA产品图片可浮动
(function () {

	$(window).scroll(function () {
		var $imgWrap = $('.pro-img-container'),
			$buyWrap = $('.pro-buy-container'),
			$proWrap = $('.pro-detail-container'),
			imgHeight = $imgWrap.height(),
			buyHeight = $buyWrap.height(),
			fixHeadHeight = 95,
			resize = function () {
				var offsetTop = $proWrap.offset().top,
					scrollTop = $(window).scrollTop(),
					moveTop = 0,
					maxMoveTop = buyHeight - imgHeight;
				if (offsetTop < scrollTop + fixHeadHeight) {
					moveTop = scrollTop + fixHeadHeight - offsetTop;
				}
				moveTop = moveTop > maxMoveTop ? maxMoveTop : moveTop;

				$imgWrap.css({
					position: 'relative',
					top: moveTop
				});
			}
		if (imgHeight < buyHeight - 50) {
			resize();
		} else {
			if (parseInt($imgWrap.css('top')) > 0) {
				$imgWrap.css({
					position: 'relative',
					top: 0
				});
			}
		}
	});
})();


$(document).on('click', '.size-charts-wrap .nav-tabs li span', function () {
	var $li = $(this).closest('li'),
		index = $li.index(),
		$pane = $li.closest('.nav-tabs').siblings('.tab-content').children().eq(index);
	$li.addClass('active').siblings().removeClass('active');
	$pane.show().siblings().hide();
}).on('click', '.size-charts-wrap :radio[name="radio-chart-size"]', function () {
	var $this = $(this),
		$tab = $($this.data('tab'));
	
	$tab.show().siblings().hide();
	setTimeout(function () {
		$this.uniform().closest('li').siblings().uniform();
	}, 100)
}).on('mouseenter', '.size-charts-wrap .tab-chart-size-wrap td', function () {
	var $tr = $(this).closest('tr');
	$(this).addClass('active');
	$('td:first', $tr).addClass('active');
}).on('mouseleave', '.size-charts-wrap .tab-chart-size-wrap td', function () {
	var $tr = $(this).closest('tr');
	$('td', $tr).removeClass('active');
}).on('click', '.size-charts-wrap .size_list_box .list li', function () {
	var size = $('a', this).attr('size');
	$(this).addClass('active').siblings().removeClass('active');
	$('.goods_main_list .size_list_box .list li a[size="' + size + '"]').trigger('click');
	$('a', $(this).closest('.cy_title')).attr('size', size).html($(this).text());
	$('.list', $(this).closest('.size_list_box')).hide();
}).on('mouseenter', '.size-charts-wrap .size_list_box', function () {
	$('.list', this).stop().slideDown();
}).on('mouseleave', '.size-charts-wrap .size_list_box', function () {
	$('.list', this).stop().slideUp();
}).on('mouseenter', '.app-discount-wrap', function () {
	var $d = $('.dialog-app', this);
	this.timer && clearTimeout(this.timer);
	$d.show();
}).on('mouseleave', '.app-discount-wrap', function () {
	var $d = $('.dialog-app', this);
	this.timer = setTimeout(function () {
		$d.hide();
	}, 200);
	
});


;(function () {
	var showChats = function () {
		ZSdialog({
			title: '',
			width: Math.min($(window).width() * 0.8, 800),
			height: Math.min($(window).height() * 0.8, 800),
			content: $('.size-charts-wrap').clone().show(),
			skin: 'dialog-size-charts',
			onshow: function() {
				$('.size-charts-wrap', this.node).uniform();
				$('.nav-tabs span:first, :radio[name="radio-chart-size"]:first', '.size-charts-wrap').click();
			}
		}).showModal();
	};
	$('.size_chart_anchor a').click(function () {
		showChats();
	});
	var data = {
			thumb_image_width: 480,
			thumb_image_height: 640,
			scale_width: 225,
			scale_height: 300
		};
	if ($('.pro-detail-container.prod-square-container').length) {
		$.extend(data, {
			thumb_image_width: 600,
			thumb_image_height: 600
		});
	}
	var img = new Image();
	img.src = $('.img-big-container .img img').data('original');

	img.onload = function () {				
		var width = img.width;
		if (width / $('.img-big-container').width() < 1.5) {
			data.scale_width = 300;
			data.scale_height = 400;
		}
		$('.img-big-container').zoom(data);
		
	};
	
})();


function gaSetData () {
	sendGa({
		callback: function () {
			ga('ec:setAction', 'detail');
		} 
	});
}


// 埋点

;(function () {
	$.page = $.page || {};
	$.page.pointObj = {
		pointData: {
			'top_Home_link_180122': {
				// ac: 'click', // 默认click
				selector: '.inhere a:first' // 点击跳转首页
			},
			'top_Category_link_180122': '.inhere a:gt(0)', //点击跳转对应类目
			'top_prev_button_180122': '.img-list-container .prev', //点击切换上图
			'top_next_button_180122': '.img-list-container .next', //点击切换下图
			'top_img-list_image_180122': {
				ac: 'mouseenter',
				selector: '.img-list-container .img-list',
			}, //鼠标移入展示右侧大图
			'top_img_image_180122': {
				ac: 'mouseenter',
				selector: '.img-list-container .img-big-container',
			}, //鼠标移入展示图片细节
			'top_margin-right-10_link_180122': '.sub-desc a.brand', //鼠标点击跳转品牌汇集页
			'top_star-wrap_button_180122': $('.sub-desc .star-wrap').closest('a'), //鼠标点击下滑到评论模块
			'top_read-more_link_180122': '.price-info-wrap .discount-wrap .read-more', //鼠标点击跳转各个活动商品汇集页
			'top_color-clearfix1_image_180122': '.goods_main_attr .color > li', //鼠标点击选择color
			'top_cy_title-active_datalist_180122': {
				ac: 'mouseenter',
				selector: '.goods_main_list .size_list_box .cy_list',
			}, //鼠标移入size展示不同单位下拉选择
			'top_size-clearfix1_button_180122': '.goods_main_attr[option_id="380"] .size > li', //鼠标点击选择size
			'top_size_chart size_chart_anchor_button_180122': '.goods_main_attr .size_chart', //鼠标点击弹窗出现尺码表
			'top_quantity_box_button_180122': '.goods_main_quantity .quantity_box .prev, .goods_main_quantity .quantity_box .next', //鼠标点击+-按钮
			'top_addcart_button_180122': '.goods_main_buy .addcart', //鼠标点击加购物车按钮
			'top_addwish_button_180122': '.goods_main_buy .addwish', //鼠标点击收藏按钮
			'top_nc-icon font-12 nc-icon-plus_button_180122': '.shipping-method-wrap .btn-shipping-method .nc-icon-plus', //点击+展开内容
			'middle_nc-icon font-12 nc-icon-down-double_button_180122': '.prod-desc-wrap .view-more .btn-view-more:not(.expand)', //点击展开描述内容
			'middle_item_image_180122': '.also-like-wrap .item a', //点击推荐商品
			'middle_btn-slide prev prevStop_button_180122': '.also-like-wrap .prev', //点击切换上一页推荐商品
			'middle_btn-slide next_button_180122': '.also-like-wrap .next', //点击切换下一页推荐商品
			'down_dl-horizontal review-type-wrap_tapbar_180122': '.customer-reviews-wrap .review-type-wrap dt[data-num]', //点击筛选评论
			'down_text-right_button_180122': '.customer-reviews-wrap .write-wrap a', //点击发表评论按钮
			'down_All_button_180122': '#reviews_content .reviews-operator :radio:first', //点击ALL评论按钮
			'down_Customer-Posting-Photos_button_180122': '#reviews_content .reviews-operator :radio:last', //点击筛选图片评论按钮
			'down_Likes_button_180122': '.reviews-list-wrap .operator a', //点击点赞按钮
			'down_pagination1_button_180122': '#reviews_content .pagination a', //点击评论分页按钮
			'down_btn btn-roseo_button_180122': '.question-answer-wrap .ask-wrap a:last', //点击提问按钮
			'down_pagination2_button_180122': '.question-answer-wrap .pagination a', //点击提问分页按钮
			'down_info_link_180122': '.related-searches-wrap a', //点击关键词
			'top_nc-icon font-12 nc-icon-minus_button_180122': '.shipping-method-wrap .btn-shipping-method .nc-icon-minus', //点击-收起内容
			'middle_nc-icon font-12 nc-icon-up-double_button_180122': '.prod-desc-wrap .view-more .btn-view-more.expand', //点击收起描述内容
			'middle_nc-icon nc-icon-facebook_button_180122': '.share-wrap .share-facebook a', //点击分享FB按钮
			'middle_nc-icon nc-icon-pin_button_180122': '.share-wrap .share-pin a', //点击分享PIN按钮
			'middle_nc-icon nc-icon-tumblr_button_180122': '.share-wrap .share_tumblr a', //点击分享tumblr按钮
			'middle_nc-icon nc-icon-polyvore_button_180122': '.share-wrap .share_polyvore a', //点击分享polyvore按钮
			'middle_nc-icon nc-icon-twitter_button_180122': '.share-wrap .share_twitter a', //点击分享twitter按钮
			'top_size-clearfix2_button_180122': '.goods_main_attr[option_id="404"] .size > li', //鼠标点击选择cup
			// 'top_color-clearfix2_image_180122': {
			// 	ac: 'mouseenter',
			// 	selector: '.goods_main_attr .color > li',
			// }, //鼠标移入color切换大图
			
			'top_quantity_box_text_180122': {
				ac: 'focus',
				selector: '.goods_main_quantity .quantity_box :input',
			} //输入购买数量
		},
		attrData:  function (tag) {
			var data = $.page.pointObj.pointData[tag],
				selector;
			if (!data) {
				return;
			}
			selector = $.type(data) === 'object' ? data.selector : data;

			$(selector).attr({
				'data-ga-tag': tag, 
				'data-ga-ac': $.type(data) === 'object' ? (data.ac || 'click') : 'click'
			});
		}
	};

	for (var tag in $.page.pointObj.pointData) {
		$.page.pointObj.attrData(tag);
	}
})();

if($.cookie('showSku')){$('#showSku').show();}
                    $('.pre_order_titles a').mouseover(function () {
                        $('.pre_ask_tips').show();
                    }).mouseout(function () {
                      $('.pre_ask_tips').hide();
                    });
                    
					
 $(function () {
                  if (window.goToPage) {
                      $(".pagination a:not(.page_docs)").click(function () {
                          goToPage($(this).data('page'), this);
                      });
                  }
              });
			  
$(function(){if($.cookie('showSku')){$('#showSku').show();}});

 (function () {
                            var $timeCount = $('[data-timetag]', '.price-info-wrap');
                            var timetag;
                            var timeCount;
                            if ($timeCount.length) {
                              timetag = $timeCount.data('timetag');
                              timeCount = $timeCount.data('timecount');
                              if (!timeCount) {return;}
                              switch(timetag) {
                                case 'flashdeals':
                                  if(!window.dealsCountDown) {
                                    window.dealsCountDown = setInterval(function(){
                                      second_obj = $.timeCountDown(timeCount);
                                      if(timeCount == 0){
                                        $timeCount.closest('li').remove();
                                        window.location.reload();
                                      }
                                      $timeCount.html('<span class="cl_d">' + second_obj.day + '</span> : ' + '<span class="cl_h">' + second_obj.hour + '</span> : <span class="cl_m">' + second_obj.minute + '</span> : <span class="cl_s">' + second_obj.second + '</span>');
                                      timeCount--;
                                    }, 1000);
                                  }
                                  break;
                                default: 
                                  window.prodCountDown = setInterval(function(){
                                    second_obj = $.timeCountDown(timeCount);
                                    if(timeCount == 0){
                                      $timeCount.closest('li').remove();
                                      window.location.reload();
                                    }
                                    var left_day = '';
                                    if (second_obj.day > 0) {
                                      left_day = '<span class="cl_d">'+second_obj.day+'</span> : ';
                                    }
                                    $timeCount.html('<span class="cl_d">' + second_obj.day + '</span> : ' + '<span class="cl_h">' + second_obj.hour + '</span> : <span class="cl_m">' + second_obj.minute + '</span> : <span class="cl_s">' + second_obj.second + '</span>');
                                    timeCount--;
                                  }, 1000);
                                  break;
                              }
                              
                            }
                            
                          })();
						  
	$(function () {
                      
                    $(document).on('click', '.btn-set-alarm',function () {
                        if($(this).hasClass('disabled')){
                          $data_already_title = $('.add_inven').attr('data-already-title');
                              $.msg({
                                  content:$data_already_title,
                                  skin:'text-center',
                              });
                              return false;
                    }
                          var $this = $(this),
                              $tr = $this.closest('.my-inventory'),
                              id = $tr.data('id'),
                          poa = $tr.data('poa');
                          var d = ZSdialog({
                              title: 'Set',
                              width: 300,
                              skin: 'inventory-search-dialog',
                              content: $('#set-inventory-tmpl').html(),
                              onshow: function () {
                
                                  $('.btn-save', this.node).bind('click', function () {
                                      var $qty = $('input[name="qty"]', d.node),
                                          qty = $qty.val(),
                                          $btn = $(this);
                                      if (parseInt(qty) != qty || qty < 1) {
                                          $.msg({
                                              content:$qty.data('msg-required'),
                                              skin:'text-center',
                                          });
                                          return;
                                      }
                                      $btn.loading(true);
                
                                      $.ajax({
                                          url: '/index.php?com=account&t=dropshipInventoryAdd',
                                          data: {
                                              products_id: id,
                                              sku_or_poa: poa,
                                              qty: qty
                                          },
                                          dataType:'json',
                                          success: function (result) {
                                              if (result.status == 1) {
                                                  $.msg({
                                                      content:result.msg,
                                                      skin:'text-center',
                                                  });
                                                  $this.addClass('disabled')
                                              } else {
                                                  $.msg({
                                                      content:result.msg,
                                                      skin:'text-center',
                                                  });
                                              }
                                              d.close().remove();
                                          },
                                          complete: function () {
                                              $btn.loading(false);
                                          }
                                      });
                
                
                                  });
                              }
                          }).showModal(this);
                      });
                  });