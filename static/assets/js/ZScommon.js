  	/* ===========================================================
  			写给IE8
  		 * =========================================================== */
  	document.head = document.head || document.getElementsByTagName('head')[0];

  	/* ===========================================================
  		输出调试日志
  	 * =========================================================== */
  	function log(m) {
  	    //return;
  	    if (window.console && window.console.log) {
  	        window.console.log(m);
  	    } else if (window.opera && window.opera.postError) {
  	        window.opera.postError(m);
  	    }
  	}

  	/* ===========================================================
  		移动终端浏览器版本信息
  	 * =========================================================== */
  	$.extend({
  	    chirst_goods_timers: function() {
  	        /*圣诞节列表倒计时*/
  	        if (typeof(pre_chirst_timers) != "undefined") {
  	            clearInterval(pre_chirst_timers);
  	        }
  	        window.pre_chirst_timers = setInterval(function() {
  	            if (!$('[data-christ-timers]').length) {
  	                clearInterval(pre_chirst_timers);
  	            }
  	            $('[data-christ-timers]').each(function(k, v) {
  	                if (!$(this).hasClass('status') && $(this).attr('data-christ-id') != undefined) {
  	                    $('[data-christ-id=' + $(this).attr('data-christ-id') + ']').attr('data-christ-timers', $(this).attr('data-christ-timers')).addClass('status');
  	                }
  	                var get_second = parseInt($(this).attr('data-christ-timers'));
  	                var get_josn = timeCountDown(get_second);
  	                if (get_second < 0) { //为0是的操作
  	                    $(this).removeAttr('data-christ-timers');
  	                } else {
  	                    get_second--;
  	                    if (!$(this).find('.pre_timer_html').length) {
  	                        var html_str = '<strong class="pre_timer_html">' +
  	                            '<em class="pre_timer_sign"></em>' +
  	                            '<span class="cl_d">' + get_josn.day + '</span>' +
  	                            ' : <span class="cl_h">' + get_josn.hour + '</span>' +
  	                            ' : <span class="cl_m">' + get_josn.minute + '</span>' +
  	                            ' : <span class="cl_s">' + get_josn.second + '</span> to end' +
  	                            '</strong>';
  	                        if ($(this).find('.td_price').length && $(this).hasClass('cart_deals')) {
  	                            $(this).find('.td_price').append(html_str);
  	                        } else {
  	                            $(this).append(html_str);
  	                        }
  	                    } else {
  	                        $(this).find('.cl_d').text(get_josn.day);
  	                        $(this).find('.cl_h').text(get_josn.hour);
  	                        $(this).find('.cl_m').text(get_josn.minute);
  	                        $(this).find('.cl_s').text(get_josn.second);
  	                    }
  	                    $(this).attr('data-christ-timers', get_second);
  	                }
  	            })
  	        }, 1000);
  	    },
  	    pre_goods_timers: function() {
  	        /*预售列表倒计时*/
  	        if (typeof(pre_goods_timers) != "undefined") {
  	            clearInterval(pre_goods_timers);
  	        }
  	        window.pre_goods_timers = setInterval(function() {
  	            if (!$('.pre_goods_lst[pre_good_timer]').length) {
  	                clearInterval(pre_goods_timers);
  	            }
  	            $('.pre_goods_lst[pre_good_timer]').each(function(k, v) {
  	                if (!$(this).hasClass('status') && $(this).attr('data-products_id') != undefined) {
  	                    $('.pre_goods_lst[data-products_id=' + $(this).attr('data-products_id') + ']').attr('pre_good_timer', $(this).attr('pre_good_timer')).addClass('status');
  	                }
  	                var get_second = parseInt($(this).attr('pre_good_timer'));
  	                var get_josn = timeCountDown(get_second);
  	                if (get_second < 0) { //为0是的操作
  	                    $(this).removeAttr('pre_good_timer');
  	                } else {
  	                    get_second--;
  	                    if (!$(this).find('.pre_timer_html').length) {
  	                        var html_str = '<strong class="pre_timer_html">' +
  	                            '<em class="pre_timer_sign"></em>' +
  	                            '<span class="cl_d">' + get_josn.day + '</span>' +
  	                            ' : <span class="cl_h">' + get_josn.hour + '</span>' +
  	                            ' : <span class="cl_m">' + get_josn.minute + '</span>' +
  	                            ' : <span class="cl_s">' + get_josn.second + '</span> to end' +
  	                            '</strong>';
  	                        if ($(this).find('.td_price').length && $(this).hasClass('cart_deals')) {
  	                            $(this).find('.td_price').append(html_str);
  	                        } else {
  	                            $(this).append(html_str);
  	                        }
  	                    } else {
  	                        $(this).find('.cl_d').text(get_josn.day);
  	                        $(this).find('.cl_h').text(get_josn.hour);
  	                        $(this).find('.cl_m').text(get_josn.minute);
  	                        $(this).find('.cl_s').text(get_josn.second);
  	                    }
  	                    $(this).attr('pre_good_timer', get_second);
  	                }
  	            })
  	        }, 1000);
  	    },
  	    customers_cart_sale_timers: function() {
  	        var cartItem = $('.cart_main').find('ul[cart_id]');

  	        if (cartItem.length > 0) {
  	            cartItem.each(function() {

  	                var _this = $(this);
  	                var cart_id = _this.attr('cart_id')
  	                //var pId = parseInt(cart_id);
  	                var pId = cart_id;
  	                var timerName = 'customers_cart_sale_timers_' + pId;


  	                var left_second = parseInt(_this.attr('data-cs-left-second'));
  	                if (left_second > 0) {
  	                    if (typeof(window[timerName]) != 'undefined') {
  	                        clearInterval(window[timerName]);
  	                    }

  	                    window[timerName] = setInterval(function() {
  	                        var second_obj = timeCountDown(left_second);
  	                        if (left_second < 0) {
  	                            _this.find('.sales_clock').remove();
  	                            $('li[cart_id=' + cart_id + ']').find('.sales_clock').remove();
  	                        } else {
  	                            var left_day = '';
  	                            if (second_obj.day > 0) {
  	                                left_day = '<span class="cl_d">' + second_obj.day + '</span> : ';
  	                            }
  	                            $('li[cart_id=' + cart_id + ']').find('.sales_clock').html('<i></i> ' + left_day + '<span class="cl_h">' + second_obj.hour + '</span> : <span class="cl_m">' + second_obj.minute + '</span> : <span class="cl_s">' + second_obj.second + '</span>');
  	                            _this.find('.sales_clock').html('<i></i> ' + left_day + '<span class="cl_h">' + second_obj.hour + '</span> : <span class="cl_m">' + second_obj.minute + '</span> : <span class="cl_s">' + second_obj.second + '</span>');
  	                        }

  	                        left_second--;
  	                    }, 1000);
  	                }

  	            });
  	        }
  	    },

  	    customers_mini_cart_timers: function() {
  	        var miniCart = $('li.quantity_select[cart_id]');
  	        if (miniCart.length > 0) {
  	            miniCart.each(function() {
  	                var _this = $(this);
  	                var cart_id = _this.attr('cart_id')
  	                //var pId = parseInt(cart_id);
  	                var pId = cart_id;
  	                if (typeof(window['customers_cart_sale_timers_' + pId]) == 'undefined') {
  	                    var timerName = 'customers_mini_cart_sale_timers_' + pId;

  	                    var left_second = parseInt(_this.attr('data-cs-left-second'));
  	                    if (left_second > 0) {
  	                        if (typeof(window[timerName]) != 'undefined') {
  	                            clearInterval(window[timerName]);
  	                        }
  	                        console.log(timerName)
  	                        window[timerName] = setInterval(function() {
  	                            var second_obj = timeCountDown(left_second);
  	                            if (left_second < 0) {
  	                                _this.find('.sales_clock').remove();
  	                                $('li[cart_id=' + cart_id + ']').find('.sales_clock').remove();
  	                            } else {
  	                                var left_day = '';
  	                                if (second_obj.day > 0) {
  	                                    left_day = '<span class="cl_d">' + second_obj.day + '</span> : ';
  	                                }
  	                                $('li[cart_id=' + cart_id + ']').find('.sales_clock').html('<i></i> ' + left_day + '<span class="cl_h">' + second_obj.hour + '</span> : <span class="cl_m">' + second_obj.minute + '</span> : <span class="cl_s">' + second_obj.second + '</span>');
  	                                _this.find('.sales_clock').html('<i></i> ' + left_day + '<span class="cl_h">' + second_obj.hour + '</span> : <span class="cl_m">' + second_obj.minute + '</span> : <span class="cl_s">' + second_obj.second + '</span>');
  	                            }

  	                            left_second--;
  	                        }, 1000);
  	                    }
  	                }

  	            });
  	        }

  	    },

  	    loadHeadCart: function() {
  	        $.ajax({
  	            type: 'get',
  	            url: '/index.php',
  	            data: 'com=ajax&t=loadHeadCarts',
  	            success: function(res) {
  	                $('.head .bag').html(res);
  	                /*小购物车调用到倒计时*/
  	                $.chirst_goods_timers();
  	                $.pre_goods_timers();
  	                //var currency = $.setCurrency.getCookieCurrency();
  	                //$.setCurrency.autoChangePrice($("#top_total"), currency, true);	
  	            }
  	        });
  	    },
  	    removeHeadCart: function(btn) {
  	        var cart_id = $(btn).attr('cart_id');
  	        if (typeof(cart_id) == 'undefined' || !cart_id) {
  	            return false;
  	        }
  	        $(btn).parent().parent().remove();
  	        $.ajax({
  	            type: 'get',
  	            dataType: 'html',
  	            url: '/index.php',
  	            data: 'com=ajax&t=removeHeadCart&cart_id=' + cart_id,
  	            success: function(rs) {
  	                $('.head .bag').html(rs);
  	                if (typeof(page_reFlash) != 'undefined' && page_reFlash == 1) {
  	                    location.reload(true);
  	                }
  	            }
  	        });
  	    },
  	    removePackageCart: function(btn) {
  	        var cart_id = $(btn).attr('package_id');
  	        if (typeof(cart_id) == 'undefined' || !cart_id) {
  	            return false;
  	        }
  	        $(btn).parent(".discount_item_wrap").remove();
  	        $.ajax({
  	            type: 'get',
  	            dataType: 'html',
  	            url: '/index.php',
  	            data: 'com=ajax&t=removePackageCart&cart_id=' + cart_id,
  	            success: function(rs) {

  	                $('.head_right .bag').html(rs);
  	                if (typeof(page_reFlash) != 'undefined' && page_reFlash == 1) {
  	                    location.reload(true);
  	                }

  	            }
  	        });
  	    },
  	    getProRecommends: function() {
  	        var count = 0;
  	        var pId = $('#products_id').val();
  	        var time = new Date().getTime();
  	        var getre = setInterval(function() {
  	            var rec_sid = $.cookie('rec_sid');
  	            if (rec_sid || count == 20) {
  	                clearInterval(getre);
  	            }
  	            if (rec_sid) {
  	                $.ajax({
  	                    type: 'get',
  	                    dataType: 'json',
  	                    url: '/ajaxload/ajax-getProRecommends.html?qt=' + time + '&pId=' + pId,
  	                    success: function(res) {
  	                        if (res.recommends) {
  	                            $('.recommend').html(res.recommends);
  	                        }
  	                    }
  	                });
  	            }
  	            count++;
  	        }, 500);
  	    },
  	    validateLogin: function() {
  	        $.ajax({
  	            type: 'get',
  	            url: '/index.php',
  	            data: 'com=ajax&t=validateLogin',
  	            success: function(res) {
  	                $.loginHtml(res);
  	            }
  	        });
  	    },
  	    loginHtml: function(res) {
  	        $('.head_right .nav_login').html(res);
  	        var $href_url;
  	        if ($("#customers_name").val()) {
  	            $href_url = "/?com=account&t=my_coupons#tabIndex=4";
  	        } else {
  	            $href_url = "/?com=account&t=hot_coupons&unlog=1#tabIndex=3";
  	        }
  	        $("#coupon_login_unlogin_url").attr("href", $href_url);

  	        if (parseInt($("#head_ds_flg").val())) {
  	            $("#head_aff_flg").closest('li').hide();
  	        } else {
  	            $("#head_aff_flg").closest('li').show();
  	        }
  	        if (typeof(shop_pp) != "undefined" && shop_pp == 1) {
  	            $(".shop_pp").next().remove();
  	            $(".shop_pp").remove();
  	        }

  	        $(".head .account").HoverDelay({
  	            hoverEvent: function(obj) {
  	                return function() {
  	                    $(obj).children(".box").slideDown(200);
  	                }
  	            },
  	            outEvent: function(obj) {
  	                return function() {
  	                    $(obj).children(".box").slideUp(200);
  	                }
  	            }
  	        });
  	    },
  	    GET: function(a, b) {
  	        var c = new RegExp("[?&]" + a + "=([^&]+)", "g");
  	        //b = b || location.search;
  	        for (var d, e = ""; null !== (d = c.exec(b));) e = d[1];
  	        return e
  	    },
  	    ZSversions: function() {
  	        var u = navigator.userAgent,
  	            app = navigator.appVersion;
  	        return {
  	            trident: u.indexOf('Trident') > -1,
  	            presto: u.indexOf('Presto') > -1,
  	            webKit: u.indexOf('AppleWebKit') > -1,
  	            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
  	            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
  	            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
  	            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
  	            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
  	            iPad: u.indexOf('iPad') > -1,
  	            webApp: u.indexOf('Safari') == -1
  	        };
  	    }(),
  	    //浏览器语种
  	    ZSlanguage: (navigator.browserLanguage || navigator.language).toLowerCase(),
  	    //模拟选择框
  	    ZScheckbox: function(o) {
  	        var $this = $(o);
  	        $this.hasClass('checkbox_off') && function() {
  	            return false;
  	        };
  	        $this.hasClass('checkbox_on') ? $this.removeClass('checkbox_on').addClass('checkbox_on_active') : $this.removeClass('checkbox_on_active').addClass('checkbox_on');
  	    },
  	    ZScheckboxOn: function(o) {
  	        $(o).removeClass('checkbox_on').addClass('checkbox_on_active');
  	    },
  	    ZScheckboxUn: function(o) {
  	        $(o).removeClass('checkbox_on_active').addClass('checkbox_on');
  	    },
  	    //数量增加
  	    ZSquantityNext: function(o, callback) {
  	        var $o = $(o);
  	        if ($o.hasClass("gray")) return;
  	        var $input = $o.siblings(":text");
  	        var maximum = parseInt($input.attr("maximum"));
  	        var clearStock = parseInt($input.attr("clearStock"));
  	        var limitPro = parseInt($input.attr("limitproduct"));
  	        var num = parseInt($input.val());
  	        if (!(/(^[0-9]\d*$)/.test(num)) || !num || num == 0) {
  	            num = 1;
  	        }

  	        if ((clearStock == 1 || limitPro == 1) && /(^[0-9]\d*$)/.test(maximum) && num >= maximum) { //清货产品限制购买数量
  	            $o.siblings("s").addClass("active");
  	            setTimeout(function() {
  	                $o.siblings("s").removeClass("active");
  	            }, 2000);
  	            $input.val(maximum);
  	            $o.addClass('gray');
  	            if (maximum > 1) {
  	                $o.siblings(".prev").removeClass('gray');
  	            }
  	        } else {
  	            num += 1;
  	            if (num > 1) {
  	                $o.siblings(".prev").removeClass('gray');
  	                if (num > 99999) num = 99999;
  	            }
  	            $input.val(num);
  	        }

  	        //产品优惠规则
  	        $.showSpecialProduct(num);

  	        ('undefined' == typeof(quantityTime)) || clearTimeout(quantityTime);
  	        quantityTime = setTimeout(
  	            function() {
  	                var qty = parseInt($input.val());
  	                var oldQty = parseInt($input.attr('oldQty'));
  	                if (qty != oldQty) {
  	                    $input.attr('oldQty', qty);
  	                    callback && callback(o, num);
  	                }
  	            },
  	            500);
  	    },
  	    //数量减少
  	    ZSquantityPrev: function(o, callback) {
  	        var $o = $(o);
  	        if ($o.hasClass("gray")) return;
  	        var $input = $o.siblings(":text");
  	        $o.siblings("s").removeClass("active");
  	        var num = parseInt($input.val());
  	        var maximum = parseInt($input.attr("maximum"));
  	        if (!(/(^[0-9]\d*$)/.test(num)) || !num || num == 0) {
  	            num = 1;
  	        }

  	        num -= 1;
  	        if (num == 0) num = 1;
  	        if (ajaxisWsPro_fn('num', {
  	                'deom': $o,
  	                'num': num
  	            }) || num == 1) { //(ajaxisWsPro) 此条件用于批发用户10件启购
  	            if (ajaxisWsPro_fn('num', {
  	                    'deom': $o,
  	                    'num': num
  	                })) num = $input.attr('buyMinNums');
  	            $o.addClass('gray');
  	            if ($o.siblings(".next").hasClass("gray")) {
  	                $o.siblings(".next").removeClass("gray");
  	            }
  	        }

  	        if (/(^[0-9]\d*$)/.test(maximum) && num < maximum) {
  	            $o.siblings(".next").removeClass('gray');
  	        }
  	        $input.val(num);

  	        //产品优惠规则
  	        $.showSpecialProduct(num);


  	        ('undefined' == typeof(quantityTime)) || clearTimeout(quantityTime);
  	        quantityTime = setTimeout(
  	            function() {
  	                var qty = parseInt($input.val());
  	                var oldQty = parseInt($input.attr('oldQty'));

  	                if (qty != oldQty) {
  	                    $input.attr('oldQty', qty);
  	                    callback && callback(o, num);
  	                }
  	            },
  	            500);
  	    },
  	    //输入数量,失去焦点执行
  	    ZSquantityInput: function(o, callback) {
  	        var $o = $(o);
  	        var num = $o.val();
  	        var maximum = parseInt($o.attr("maximum"));
  	        var oldQty = parseInt($o.attr('oldQty'));
  	        var clearStock = parseInt($o.attr("clearStock"));
  	        var limitPro = parseInt($o.attr("limitproduct"));
  	        var num_qty = parseInt($(o).attr('oldqty'));


  	        if (!(/(^[0-9]\d*$)/.test(num)) || !num || num == 0) {
  	            num = 1;
  	            $o.val(num);
  	        }
  	        $o.siblings("s").removeClass("active");
  	        if ((clearStock == 1 || limitPro == 1) && num > maximum) { //清货产品最大购买数量
  	            $o.val(maximum);
  	            num = maximum;
  	            $o.siblings("s").addClass("active");
  	            setTimeout(function() {
  	                $o.siblings("s").removeClass("active");
  	            }, 2000);
  	        }
  	        //产品优惠规则
  	        num = parseInt(num);
  	        if (num != 1) {
  	            $(".prev").removeClass("gray");
  	        } else {
  	            $(".prev").addClass("gray");
  	        }
  	        $.showSpecialProduct(num);

  	        ('undefined' == typeof(quantityTime)) || clearTimeout(quantityTime);
  	        if (num != oldQty) {
  	            setTimeout(function() {
  	                    $o.attr('oldQty', num);
  	                    callback && callback(o, num);
  	                },
  	                1000);
  	        }
  	    },
  	    //切换语言
  	    changeLang: function(o) {
  	        var code = $(o).attr('code');
  	        $.cookie("_bgLang", code, {
  	            expires: 7,
  	            path: '/'
  	        });
  	        var cType = $(o).attr('cType');
  	        if (cType) {
  	            $.cookie("_clothesType", cType, {
  	                expires: 7,
  	                path: '/'
  	            });
  	        }
  	        return true;
  	    },
  	    showSpecialProduct: function(num) {
  	        var amount = $("#specialProduct").attr("amount");
  	        if (num >= amount) {
  	            var forprice = $("#specialProduct").text();
  	            var oriprice = $("#specialProduct").attr("oriprice");
  	            $(".each .price").html(forprice);
  	            $(".each .price").attr('oriprice', oriprice);
  	            $(".each").show();
  	        } else {
  	            $(".each").hide();
  	        }
  	    },
  	    fixedCartSider: function(options) {
  	        options = $.extend({
  	            $box: $('.order_leave_box'),
  	            $container: $('.checkout-container')
  	        }, options);
  	        if (!(options.$box.length && options.$container.length)) {
  	            return;
  	        }
  	        var $box = options.$box,
  	            $footer = $('#footer'),
  	            $container = options.$container,
  	            defaultTop = $box.css('top'),
  	            defaultTopNumber = parseInt(defaultTop) || 0,
  	            headHeight = $('.head').outerHeight(),
  	            footerHeight = $footer.outerHeight(),

  	            offsetTop = options.$container.offset().top;
  	        var setConMinHeight = function() {
  	            var conMinHeight = parseInt($container.css('min-height')) || 0,
  	                boxHeight = $box.outerHeight();
  	            if (conMinHeight < defaultTopNumber + boxHeight) {
  	                conMinHeight = defaultTopNumber + boxHeight;
  	                $container.css({
  	                    'min-height': conMinHeight
  	                });
  	            }
  	        };
  	        setConMinHeight();

  	        $(window).scroll(function() {
  	            var scroll = $(window).scrollTop(),
  	                winHeight = $(window).height(),
  	                boxHeight = $box.outerHeight(),
  	                footerOffsetTop = $footer.offset().top,
  	                moveHeight = scroll - offsetTop + headHeight;

  	            var footerVisHeight = scroll + winHeight - footerOffsetTop;
  	            footerVisHeight = footerVisHeight > 0 ? footerVisHeight : 0;
  	            var boxVisHeight = winHeight - headHeight - footerVisHeight;
  	            if (boxHeight > winHeight - headHeight) {
  	                $box.css({
  	                    top: defaultTop
  	                });
  	                return;
  	            }
  	            if (boxVisHeight < boxHeight) {
  	                $box.css({
  	                    top: moveHeight - (boxHeight - boxVisHeight)
  	                });
  	                return;
  	            }
  	            if (moveHeight >= defaultTopNumber) {
  	                $box.css({
  	                    top: moveHeight
  	                });
  	            } else {
  	                $box.css({
  	                    top: defaultTop
  	                });
  	            }

  	            setConMinHeight();


  	        }).trigger('scroll');
  	    },
  	    initCookieLang: function() {
  	        var pathname = window.location.pathname;
  	        var pattern = /\/[a-z]{2}\//;
  	        var m = pathname.match(pattern);
  	        var c = pathname.match(/\-c\-[0-9]+/);
  	        var p = pathname.match(/\/p\-[0-9]+/);
  	        var s = pathname.match(/\/search\//);
  	        var nc = pathname.match(/\/nc\//);
  	        var fd = pathname.match(/\/flash\-deals\//);
  	        var clear = pathname.match(/\/clearance\//);
  	        var topsell = pathname.match(/\/top\-sale\//);
  	        var activity = pathname.match(/\/activity\//);
  	        var whathot = pathname.match(/\/whathot\//);
  	        var anniversary = pathname.match(/\/2017an/);
  	        var newArrivals = pathname.match(/\/new\-arrivals\//);
  	        var fashionCollection = pathname.match(/\/(pc\-)?fashion\-collection\//);
  	        var brand = pathname.match(/\/brand(\-deals)?/);
  	        var singles = pathname.match(/\/2018/);

  	        if (pathname == '/' || m || c || p || s || nc || fd || clear || topsell || activity || anniversary || newArrivals || fashionCollection || brand || singles || whathot) {
  	            if (pathname == '/') {
  	                $.setCookieLang('en-GB');
  	            } else if (m) {
  	                if (m[0] == '/ru/') {
  	                    $.setCookieLang('ru-RU');
  	                } else if (m[0] == '/es/') {
  	                    $.setCookieLang('es-ES');
  	                } else if (m[0] == '/fr/') {
  	                    $.setCookieLang('fr-FR');
  	                } else if (m[0] == '/it/') {
  	                    $.setCookieLang('it-IT');
  	                } else if (m[0] == '/pt/') {
  	                    $.setCookieLang('pt-BR');
  	                } else if (m[0] == '/de/') {
  	                    $.setCookieLang('de-DE');
  	                } else if (m[0] == '/nl/') {
  	                    $.setCookieLang('nl-NL');
  	                } else if (m[0] == '/ar/') {
  	                    $.setCookieLang('ar-AR');
  	                }
  	            } else if (c || p || s || nc || fd || clear || topsell || activity || anniversary || newArrivals || fashionCollection || brand || singles || whathot) {
  	                $.setCookieLang('en-GB');
  	            }
  	        }
  	    },
  	    setCookieLang: function(code) {
  	        var _bgCK = '04e4adf37ffcbe95bf074adf5cbd1d1b';
  	        if (code == 'ru-RU') {
  	            _bgCK = '92addcb0c5eeba81a27e5d782e61da33';
  	        } else if (code == 'pt-BR') {
  	            _bgCK = '7114e4a6610bea1aee6083d3a5fe2d8e';
  	        } else if (code == 'es-ES') {
  	            _bgCK = 'c593893196169ba8d4e81bf88fb24c39';
  	        } else if (code == 'it-IT') {
  	            _bgCK = 'd57ae4b094d9bc372a22804b581039e7';
  	        } else if (code == 'fr-FR') {
  	            _bgCK = '9da77a03e9e1d00bd6cacd4c2b9c2e32';
  	        } else if (code == 'de-DE') {
  	            _bgCK = '11ff01e0364e4b0356be673664e47842';
  	        } else if (code == 'jp-JP') {
  	            _bgCK = 'ecb2aed216f6c2aa73f3f4aefd34634c';
  	        } else if (code == 'nl-NL') {
  	            _bgCK = '7b442fc94a859285de53fe40079b1d21';
  	        } else if (code == 'ar-AR') {
  	            _bgCK = 'fd7648f7ffddfed893c458ca97631c8e';
  	        } else {
  	            code = 'en-GB';
  	        }
  	        $.cookie("_bgLang", code, {
  	            expires: 7,
  	            path: '/'
  	        });
  	        $.cookie("_bgCK", _bgCK, {
  	            expires: 7,
  	            path: '/'
  	        });
  	    },
  	    // 为A/B测试链接添加参数
  	    addABTestingParam: function(link, paramStr) {
  	        var a = document.createElement('a');
  	        var sess_id = ($.cookie('rec_sid') || '').split('|')[0];

  	        a.href = link;
  	        var searchObj = $.queryToObject(a.search.substring(1));
  	        if ('ht' in searchObj) {
  	            delete searchObj.ht;
  	        }
  	        if (sess_id % 2 === 1) {
  	            searchObj.ht = 1;
  	            a.search = $.param(searchObj);
  	        }
  	        return a.href;
  	    }

  	});


  	/* ===========================================================
  		输入框提示语
  		<div class="inputbox">
  			<span class="tips">test</span>
  			<input type="text" value="" class="input" />
  		</div>
  		$(".inputbox").ZSinput();
  	 * =========================================================== */

  	;
  	(function($) {
  	    $.fn.extend({
  	        ZSinput: function() {
  	            var $this = $(this).find("input[type!='hidden'],textarea");
  	            $this.each(function() {
  	                var $this = $(this);
  	                var $thisTips = $this.siblings(".tips");
  	                var $thisSelect = $this.siblings(".select");
  	                var $thisSelectInput = $this.siblings("input[type='hidden']");
  	                if ($thisSelect.length > 0) {
  	                    $thisSelect.css("min-width", $this.outerWidth(true) - 2);
  	                    $this.parent().click(function() {
  	                        $thisSelect.toggle();
  	                        $this.blur();
  	                    });
  	                    $thisSelect.children().click(function() {
  	                        $thisTips.hide();
  	                        $this.val($(this).text());
  	                        $thisSelectInput.val($(this).attr("value"));
  	                    });

  	                    $("body").click(function(event) {
  	                        if (!($(event.target).parents("div").index() == $this.parents("div").index())) {
  	                            $thisSelect.hide();
  	                        }
  	                    });

  	                    return;
  	                }
  	                $thisTips.width($this.width());
  	                $this.blur(function(event) {
  	                    if ($this.val().length < 1) $thisTips.show();
  	                });
  	                $this.focus(function() {
  	                    $thisTips.hide();
  	                });
  	                $thisTips.click(function() {
  	                    $(this).hide();
  	                    $this.focus();
  	                });
  	            })
  	        },
  	        //此方法在utils里有重写过。此处尽量不要用
  	        tabs: function(type) {
  	            var $this = $(this);
  	            $this.children().on(type, function() {
  	                $(this).addClass("active").append("<i />").siblings().removeClass("active").find("i").remove().end().parent().next().children().eq($(this).index()).show().siblings().hide();
  	            });
  	        }
  	    });
  	})(jQuery);


  	;
  	(function($) {
  	    Validator = {
  	        Require: /.+/,
  	        Email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  	        Phone: /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/,
  	        //Url : /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
  	        Currency: /^\d+(\.\d+)?$/,
  	        Number: /^\d+$/,
  	        Zip: /^[1-9]\d{5}$/,
  	        QQ: /^[1-9]\d{3,11}$/,
  	        Integer: /^[-\+]?\d+$/,
  	        Double: /^[-\+]?\d+(\.\d+)?$/,
  	        English: /^[A-Za-z]+$/,
  	        //Username : /^[\w|а|б|в|г|д|е|ё|ж|з|и|й|к|л|м|н|о|п|р|с|т|у|ф|х|ц|ч|ш|щ|э|ю|я|á|é|í|ó|ú|à|ù|è|ò|ì|ä|ö|ü]{2,}$/i,
  	        Username: /.*/,
  	        //UnSafe : /^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/,
  	        IsSafe: function(str) {
  	            return !this.UnSafe.test(str);
  	        },
  	        SafeString: "this.IsSafe(value)",
  	        Filter: "this.DoFilter(value, getAttribute('accept'))",
  	        Limit: "this.limit(value.length,getAttribute('min'),  getAttribute('max'))",
  	        LimitB: "this.limit(this.LenB(value), getAttribute('min'), getAttribute('max'))",
  	        Date: "this.IsDate(value, getAttribute('min'), getAttribute('format'))",
  	        Repeat: "value == document.getElementsByName(getAttribute('to'))[0].value",
  	        Range: "getAttribute('min') < (value|0) && (value|0) < getAttribute('max')",
  	        Compare: "this.compare(value,getAttribute('operator'),getAttribute('to'))",
  	        Custom: "this.Exec(value, getAttribute('regexp'))",
  	        Group: "this.MustChecked(getAttribute('name'), getAttribute('min'), getAttribute('max'))",
  	        ErrorItem: [document.forms[0]],
  	        ErrorMessage: ["以下原因导致提交失败：\t\t\t\t"],
  	        AddError: function(obj) {
  	            obj.parents(".inputbox,.radiobox").find(".error").text(obj.attr("msg")).css("display", "block");
  	            $(".inputbox,.radiobox").click(function() {
  	                $(this).find(".error").hide();
  	            });
  	        },
  	        Validate: function(obj, mode) {
  	            var validate = true;
  	            var $this = $(obj);
  	            var $elem = $this.find("input,textarea,select");
  	            var must = 0;

  	            this.ErrorMessage.length = 1;
  	            this.ErrorItem.length = 1;
  	            this.ErrorItem[0] = obj;

  	            for (var i = 0; i < $elem.length; i++) {
  	                with($elem[i]) {
  	                    var dataType = getAttribute("dataType");
  	                    var require = getAttribute("require");
  	                    if (require) must++;
  	                    if (typeof(dataType) == "object" || typeof(this[dataType]) == "undefined") continue;
  	                    if (!require && (dataType == "Group" || value == "")) continue;
  	                    switch (dataType) {
  	                        case "Date":
  	                        case "Repeat":
  	                        case "Range":
  	                        case "Compare":
  	                        case "Custom":
  	                        case "Group":
  	                        case "Limit":
  	                        case "LimitB":
  	                        case "SafeString":
  	                        case "Filter":
  	                            if (!eval(this[dataType])) {
  	                                this.AddError($elem.eq(i));
  	                                validate = false;
  	                            }
  	                            break;
  	                        default:
  	                            if (!this[dataType].test(value)) {
  	                                this.AddError($elem.eq(i));
  	                                validate = false;
  	                            }
  	                            break;
  	                    }
  	                }
  	            }

  	            return validate;
  	        },
  	        limit: function(len, min, max) {
  	            min = min || 0;
  	            max = max || Number.MAX_VALUE;
  	            return min <= len && len <= max;
  	        },
  	        LenB: function(str) {
  	            return str.replace(/[^\x00-\xff]/g, "**").length;
  	        },
  	        Exec: function(op, reg) {
  	            return new RegExp(reg, "g").test(op);
  	        },
  	        compare: function(op1, operator, op2) {
  	            switch (operator) {
  	                case "NotEqual":
  	                    return (op1 != op2);
  	                case "GreaterThan":
  	                    return (op1 > op2);
  	                case "GreaterThanEqual":
  	                    return (op1 >= op2);
  	                case "LessThan":
  	                    return (op1 < op2);
  	                case "LessThanEqual":
  	                    return (op1 <= op2);
  	                default:
  	                    return (op1 == op2);
  	            }
  	        },
  	        MustChecked: function(name, min, max) {
  	            var groups = document.getElementsByName(name);
  	            var hasChecked = 0;
  	            min = min || 1;
  	            max = max || groups.length;
  	            for (var i = groups.length - 1; i >= 0; i--)
  	                if (groups[i].checked) hasChecked++;
  	            return min <= hasChecked && hasChecked <= max;
  	        },
  	        DoFilter: function(input, filter) {
  	            return new RegExp("^.+\.(?=EXT)(EXT)$".replace(/EXT/g, filter.split(/\s*,\s*/).join("|")), "gi").test(input);
  	        },
  	        IsDate: function(op, formatString) {
  	            formatString = formatString || "ymd";
  	            var m, year, month, day;
  	            switch (formatString) {
  	                case "ymd":
  	                    m = op.match(new RegExp("^((\\d{4})|(\\d{2}))([-./])(\\d{1,2})\\4(\\d{1,2})$"));
  	                    if (m == null) return false;
  	                    day = m[6];
  	                    month = m[5] * 1;
  	                    year = (m[2].length == 4) ? m[2] : GetFullYear(parseInt(m[3], 10));
  	                    break;
  	                case "dmy":
  	                    m = op.match(new RegExp("^(\\d{1,2})([-./])(\\d{1,2})\\2((\\d{4})|(\\d{2}))$"));
  	                    if (m == null) return false;
  	                    day = m[1];
  	                    month = m[3] * 1;
  	                    year = (m[5].length == 4) ? m[5] : GetFullYear(parseInt(m[6], 10));
  	                    break;
  	                default:
  	                    break;
  	            }
  	            if (!parseInt(month)) return false;
  	            month = month == 0 ? 12 : month;
  	            var date = new Date(year, month - 1, day);
  	            return (typeof(date) == "object" && year == date.getFullYear() && month == (date.getMonth() + 1) && day == date.getDate());

  	            function GetFullYear(y) {
  	                return ((y < 30 ? "20" : "19") + y) | 0;
  	            }
  	        }
  	    }
  	})(jQuery);




  	/* ===========================================================
  		多功能通用兼容移动端滑动切换功能
  		
  		startSlide (默认:0) - Swipe开始的索引
  		speed (默认:300) - 前进和后退的速度，单位毫秒.
  		auto (默认:0) 自动滑动ms 0为禁止
  		tabClick (默认:false) 切换click/entermouse 
  		resizeAuto (默认:false) 窗口拉动时是否重载
  		continuous (默认:true) -是否可以循环播放（注：我设置为false好像也是循环的）
  		disableScroll (默认:false) - 停止触摸滑动
  		stopPropagation (默认:false) -停止事件传播
  		callback - 回调函数，可以获取到滑动中图片的索引.
  		transitionEnd - 在最后滑动结束后执行.
  		window.mySwipe = $('').Swipe().data('Swipe');
  		var banner = Swipe(
  			$(".carouse_swipe")[0],{auto:4000,continuous:true,disableScroll:false,startSlide:0,callback: function(pos){console.log(pos)}
  		});
  		扩展 banner.next()
  		$(".carouse_swipe").Swipe({auto:4000,continuous:true,disableScroll:false,startSlide:0,callback: function(pos){}});
  	 * =========================================================== */

  	;
  	(function($) {
  	    $.fn.Swipe = function(params) {
  	        return this.each(function() {
  	            $(this).data('Swipe', new Swipe($(this)[0], params));
  	        });
  	    }
  	})(jQuery)

  	function Swipe(container, options) {

  	    "use strict"; //严格模式
  	    if (!container) return;

  	    var noop = function() {};
  	    var offloadFn = function(fn) {
  	        setTimeout(fn || noop, 0)
  	    }; //将函数放在队列的最后执行

  	    // 检测浏览器功能
  	    var browser = {
  	        addEventListener: !!window.addEventListener,
  	        touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
  	        transitions: (function(temp) {
  	            var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
  	            for (var i in props)
  	                if (temp.style[props[i]] !== undefined) return true;
  	            return false;
  	        })(document.createElement('swipe'))
  	    };

  	    var element = container.children[0].children[0];
  	    var element_btn = container.children[1];
  	    var element_tab = container.children[2];
  	    var slides, slidePos, width, length;
  	    options = options || {};
  	    var index = parseInt(options.startSlide, 10) || 0;
  	    var speed = options.speed || 300;
  	    var is_len_two = false;
  	    options.continuous = options.continuous !== undefined ? options.continuous : true;

  	    function setup() {

  	        slides = element.children; //滚动元素
  	        length = slides.length; //滚动元素个数

  	        // 元素只有一个时禁用滚动
  	        if (slides.length < 2) options.continuous = false;

  	        //只有二个元素时的滚动
  	        if (browser.transitions && options.continuous && slides.length < 3) {
  	            is_len_two = true;
  	            element.appendChild(slides[0].cloneNode(true));
  	            element.appendChild(element.children[1].cloneNode(true)); //克隆二个元素插入容器后面
  	            slides = element.children;
  	        }

  	        width = container.getBoundingClientRect().width || container.offsetWidth; //容器宽度
  	        element.style.width = (slides.length * width) + 'px'; //容器内元素宽度之和

  	        // 创建一个数组来保存滑块位置
  	        slidePos = new Array(slides.length);

  	        // 给每个元素定位
  	        var pos = slides.length;
  	        var slides_tab = '';
  	        while (pos--) {
  	            var slide = slides[pos];
  	            slide.style.width = width + 'px'; //给每个子元素创建宽度样式
  	            slide.setAttribute('data-index', pos); //给每子个元素一个序号

  	            //如果支持滑动，给每个子元素添加css3滑动样式
  	            if (browser.transitions) {
  	                slide.style.left = (pos * -width) + 'px';
  	                move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
  	            }
  	            //创建滑块tab
  	            slides_tab = is_len_two ? "<li><i></i></li><li><i></i></li>" : slides_tab + "<li><i></i></li>";
  	        }

  	        $(element_tab).html(slides_tab).children().eq(index).addClass("active");
  	        imgload();

  	        // 重置默认开始显示元素之前和之后的参数
  	        if (options.continuous && browser.transitions) {
  	            move(circle(index - 1), -width, 0);
  	            move(circle(index + 1), width, 0);
  	        }

  	        //如果不支持滑动，给元素添加定位样式
  	        if (!browser.transitions) element.style.left = (index * -width) + 'px';

  	        //初始化完成后，设置容器为可见状态
  	        container.style.visibility = 'visible';

  	        //如果只有一个元素时，把翻页按钮设为隐藏状态
  	        if (slides.length < 2) {
  	            element_btn.style.visibility = 'hidden';
  	            element_tab.style.visibility = 'hidden';
  	        }
  	    }

  	    function prev() {
  	        if (options.continuous) slide(index - 1);
  	        else if (index) slide(index - 1);
  	    }

  	    function next() {
  	        if (options.continuous) slide(index + 1);
  	        else if (index < slides.length - 1) slide(index + 1);
  	    }

  	    function circle(index) {
  	        // a simple positive modulo using slides.length
  	        return (slides.length + (index % slides.length)) % slides.length;

  	    }

  	    function slide(to, slideSpeed) {
  	        // 如果已经滑动
  	        if (index == to) return;

  	        if (browser.transitions) {

  	            var direction = Math.abs(index - to) / (index - to); // 1: 向左, -1: 向右

  	            // 获取滑块的实际位置
  	            if (options.continuous) {
  	                var natural_direction = direction;
  	                direction = -slidePos[circle(to)] / width;

  	                // if going forward but to < index, use to = slides.length + to
  	                // if going backward but to > index, use to = -slides.length + to
  	                if (direction !== natural_direction) to = -direction * slides.length + to;

  	            }

  	            var diff = Math.abs(index - to) - 1;

  	            // move all the slides between index and to in the right direction
  	            while (diff--) move(circle((to > index ? to : index) - diff - 1), width * direction, 0);

  	            to = circle(to);

  	            move(index, width * direction, slideSpeed || speed);
  	            move(to, 0, slideSpeed || speed);

  	            if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place
  	        } else {
  	            //不支持transitions时使用animate
  	            to = circle(to);
  	            animate(index * -width, to * -width, slideSpeed || speed);
  	        }

  	        index = to;
  	        offloadFn(options.callback && options.callback(index, slides[index]));
  	    }

  	    //图片按需加载处理 
  	    function imgload() {
  	        $(element).children().eq(index).find("[data-src]").each(function() {
  	            var $this = $(this);
  	            $this.html('<img src="' + $this.attr("data-src") + '" alt="' + $this.attr("data-name") + '"/>').removeAttr("data-src");
  	        });
  	    }

  	    function tabmove() {
  	        var res_index = is_len_two ? index % 2 : index;
  	        $(element_tab).children().eq(res_index).addClass("active").siblings().removeClass("active");
  	        imgload();
  	    }

  	    function move(index, dist, speed) {

  	        translate(index, dist, speed);
  	        slidePos[index] = dist;

  	    }

  	    function translate(index, dist, speed) {

  	        var slide = slides[index];
  	        var style = slide && slide.style;

  	        if (!style) return;

  	        style.webkitTransitionDuration =
  	            style.MozTransitionDuration =
  	            style.msTransitionDuration =
  	            style.OTransitionDuration =
  	            style.transitionDuration = speed + 'ms';

  	        style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
  	        style.msTransform =
  	            style.MozTransform =
  	            style.OTransform = 'translateX(' + dist + 'px)';

  	    }

  	    function animate(from, to, speed) {

  	        // 如果不是动画，就复位
  	        if (!speed) {

  	            element.style.left = to + 'px';
  	            return;

  	        }

  	        var start = +new Date;

  	        var timer = setInterval(function() {
  	            var timeElap = +new Date - start;

  	            if (timeElap > speed) {

  	                element.style.left = to + 'px';

  	                if (delay) begin();

  	                options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

  	                clearInterval(timer);
  	                return;

  	            }

  	            element.style.left = (((to - from) * (Math.floor((timeElap / speed) * 100) / 100)) + from) + 'px';

  	        }, 4);

  	    }

  	    // 设置自动滚动
  	    var delay = options.auto || 0;
  	    var interval;

  	    function begin() {
  	        clear();
  	        interval = setTimeout(next, delay);
  	    }

  	    function clear() {
  	        clearTimeout(interval);
  	    }

  	    function stop() {
  	        delay = 0;
  	        clearTimeout(interval);
  	    }

  	    var start = {};
  	    var delta = {};
  	    var isScrolling;

  	    // 设置事件监听
  	    var events = {

  	        handleEvent: function(event) {

  	            switch (event.type) {
  	                case 'touchstart':
  	                    this.start(event);
  	                    break;
  	                case 'touchmove':
  	                    this.move(event);
  	                    break;
  	                case 'touchend':
  	                    offloadFn(this.end(event));
  	                    break;
  	                case 'webkitTransitionEnd':
  	                case 'msTransitionEnd':
  	                case 'oTransitionEnd':
  	                case 'otransitionend':
  	                case 'transitionend':
  	                    offloadFn(this.transitionEnd(event));
  	                    break;
  	                case 'resize':
  	                    offloadFn(setup.call());
  	                    break;
  	            }

  	            if (options.stopPropagation) event.stopPropagation();

  	        },
  	        start: function(event) {

  	            var touches = event.touches[0];

  	            start = {
  	                x: touches.pageX,
  	                y: touches.pageY,
  	                time: +new Date
  	            };

  	            isScrolling = undefined;
  	            delta = {};
  	            element.addEventListener('touchmove', this, false);
  	            element.addEventListener('touchend', this, false);

  	        },
  	        move: function(event) {

  	            if (event.touches.length > 1 || event.scale && event.scale !== 1) return
  	            if (options.disableScroll) event.preventDefault();
  	            var touches = event.touches[0];
  	            delta = {
  	                x: touches.pageX - start.x,
  	                y: touches.pageY - start.y
  	            }
  	            if (typeof isScrolling == 'undefined') {
  	                isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
  	            }
  	            if (!isScrolling) {
  	                event.preventDefault();

  	                // 停止延时自动滚动
  	                clear();
  	                if (options.continuous) {

  	                    translate(circle(index - 1), delta.x + slidePos[circle(index - 1)], 0);
  	                    translate(index, delta.x + slidePos[index], 0);
  	                    translate(circle(index + 1), delta.x + slidePos[circle(index + 1)], 0);

  	                } else {

  	                    delta.x =
  	                        delta.x /
  	                        ((!index && delta.x > 0 // if first slide and sliding left
  	                                ||
  	                                index == slides.length - 1 // or if last slide and sliding right
  	                                &&
  	                                delta.x < 0 // and if sliding at all
  	                            ) ?
  	                            (Math.abs(delta.x) / width + 1) // determine resistance level
  	                            :
  	                            1); // no resistance if false

  	                    // translate 1:1
  	                    translate(index - 1, delta.x + slidePos[index - 1], 0);
  	                    translate(index, delta.x + slidePos[index], 0);
  	                    translate(index + 1, delta.x + slidePos[index + 1], 0);
  	                }

  	            }

  	        },
  	        end: function(event) {

  	            // measure duration
  	            var duration = +new Date - start.time;

  	            // determine if slide attempt triggers next/prev slide
  	            var isValidSlide =
  	                Number(duration) < 250 // if slide duration is less than 250ms
  	                &&
  	                Math.abs(delta.x) > 20 // and if slide amt is greater than 20px
  	                ||
  	                Math.abs(delta.x) > width / 2; // or if slide amt is greater than half the width

  	            // determine if slide attempt is past start and end
  	            var isPastBounds = !index && delta.x > 0 // if first slide and slide amt is greater than 0
  	                ||
  	                index == slides.length - 1 && delta.x < 0; // or if last slide and slide amt is less than 0

  	            if (options.continuous) isPastBounds = false;

  	            // determine direction of swipe (true:right, false:left)
  	            var direction = delta.x < 0;

  	            // if not scrolling vertically
  	            if (!isScrolling) {

  	                if (isValidSlide && !isPastBounds) {

  	                    if (direction) {

  	                        if (options.continuous) { // we need to get the next in this direction in place

  	                            move(circle(index - 1), -width, 0);
  	                            move(circle(index + 2), width, 0);

  	                        } else {
  	                            move(index - 1, -width, 0);
  	                        }

  	                        move(index, slidePos[index] - width, speed);
  	                        move(circle(index + 1), slidePos[circle(index + 1)] - width, speed);
  	                        index = circle(index + 1);

  	                    } else {
  	                        if (options.continuous) { // we need to get the next in this direction in place

  	                            move(circle(index + 1), width, 0);
  	                            move(circle(index - 2), -width, 0);

  	                        } else {
  	                            move(index + 1, width, 0);
  	                        }

  	                        move(index, slidePos[index] + width, speed);
  	                        move(circle(index - 1), slidePos[circle(index - 1)] + width, speed);
  	                        index = circle(index - 1);

  	                    }

  	                    options.callback && options.callback(index, slides[index]);

  	                } else {

  	                    if (options.continuous) {

  	                        move(circle(index - 1), -width, speed);
  	                        move(index, 0, speed);
  	                        move(circle(index + 1), width, speed);

  	                    } else {

  	                        move(index - 1, -width, speed);
  	                        move(index, 0, speed);
  	                        move(index + 1, width, speed);
  	                    }

  	                }

  	            }

  	            element.removeEventListener('touchmove', events, false)
  	            element.removeEventListener('touchend', events, false)

  	        },
  	        transitionEnd: function(event) {
  	            if (parseInt(event.target.getAttribute('data-index'), 10) == index) {
  	                if (delay) begin();
  	                options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
  	                tabmove();
  	            }
  	        }
  	    }

  	    // trigger setup
  	    setup();

  	    // 如果设置了auto大于0，开始自动滚动
  	    if (delay) begin();

  	    // 添加事件监听
  	    if (browser.addEventListener) {

  	        // 设置在元素上的触摸开始
  	        if (browser.touch) {
  	            element.addEventListener('touchstart', events, false);
  	        }
  	        if (browser.transitions) {
  	            element.addEventListener('webkitTransitionEnd', events, false);
  	            element.addEventListener('msTransitionEnd', events, false);
  	            element.addEventListener('oTransitionEnd', events, false);
  	            element.addEventListener('otransitionend', events, false);
  	            element.addEventListener('transitionend', events, false);
  	        }

  	        // 设置屏幕拉动事件
  	        if (options.resizeAuto) window.addEventListener('resize', events, false);
  	    } else {

  	        if (options.resizeAuto) window.onresize = function() {
  	            setup()
  	        }; //IE

  	    }
  	    // 设置自动滚动
  	    var tabClick = options.tabClick || false;
  	    var _tabClick = "mouseenter";
  	    tabClick && (_tabClick = "click");
  	    $(element_tab).on(_tabClick, "li", function() {
  	        clear();
  	        slide($(this).index());
  	        if (delay) begin();
  	    });
  	    $(element_btn)
  	        .on("click", "li.prev", function() {
  	            clear();
  	            prev();
  	            if (delay) begin();
  	        })
  	        .on("click", "li.next", function() {
  	            clear();
  	            next();
  	            if (delay) begin();
  	        });
  	    $.ZSversions.mobile || $(element_btn).find("li").addClass("onhover");


  	    // 暴露API
  	    return {
  	        setup: function() {
  	            setup();
  	        },
  	        slide: function(to, speed) {
  	            clear();
  	            slide(to, speed);
  	            if (delay) begin();
  	        },
  	        prev: function() {
  	            clear();
  	            prev();
  	            if (delay) begin();
  	        },
  	        next: function() {
  	            clear();
  	            next();
  	            if (delay) begin();
  	        },
  	        getPos: function() {
  	            // 获取当前元素的位置
  	            return index;
  	        },
  	        getNumSlides: function() {
  	            // 获取元素总个数
  	            return length;
  	        },
  	        kill: function() {
  	            stop();
  	            // 重置元素样式
  	            element.style.width = 'auto';
  	            element.style.left = 0;

  	            var pos = slides.length;
  	            while (pos--) {
  	                var slide = slides[pos];
  	                slide.style.width = '100%';
  	                slide.style.left = 0;
  	                if (browser.transitions) translate(pos, 0, 0);
  	            }

  	            // 移除绑定事件
  	            if (browser.addEventListener) {
  	                element.removeEventListener('touchstart', events, false);
  	                element.removeEventListener('webkitTransitionEnd', events, false);
  	                element.removeEventListener('msTransitionEnd', events, false);
  	                element.removeEventListener('oTransitionEnd', events, false);
  	                element.removeEventListener('otransitionend', events, false);
  	                element.removeEventListener('transitionend', events, false);
  	                window.removeEventListener('resize', events, false);
  	            } else {
  	                window.onresize = null;
  	            }

  	        }
  	    }

  	}


  	/* ===========================================================
  		对话框模拟
  		ZSAlert('This is a custom alert box', 'Alert Dialog');
  		ZSConfirm('Can you confirm this?', 'Confirmation Dialog', function(r) {
  			ZSAlert('Confirmed: ' + r, 'Confirmation Results');
  		});
  		ZSPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
  			if( r ) alert('You entered ' + r);
  		});
  		$.alerts.dialogClass = "dialogClass";
  		ZSAlert('设置自定义样式', 'Custom Styles', function() {
  			$.alerts.dialogClass = null; // 恢复到默认置
  		});
  	 * =========================================================== */

  	;
  	(function($) {
  	    var $popup_msg, $popup_msg_title, $popup_msg_content, $popup_msg_message, popup_msg_pos;
  	    $.ZSmsgBox = {
  	        verticalOffset: -75, // 垂直位移px
  	        horizontalOffset: 0, // 水平位移px
  	        repositionOnResize: true, // 屏幕缩放是否执行重定位
  	        overlayOpacity: .55, // 背景层透明度
  	        overlayColor: '#000000', // 背景层颜色
  	        dialogClass: null, // 自定义样式标签
  	        alertTitle: 'Alert',
  	        confirmTitle: 'Confirm',
  	        promptTitle: 'Prompt',

  	        ajaxload: function(message, title) {
  	            if (title == null) title = $.ZSmsgBox.alertTitle;
  	            $.ZSmsgBox._show(title, message, null, 'ajaxload');
  	        },

  	        gethtml: function(message, title, callback) {
  	            if (title == null) title = $.ZSmsgBox.alertTitle;
  	            $.ZSmsgBox._show(title, message, null, 'html', '', '', callback);
  	        },
  	        alert: function(message, title, ok, cancel, callback) {
  	            if (title == null) title = $.ZSmsgBox.alertTitle;
  	            $.ZSmsgBox._show(title, message, null, 'alert', ok, cancel, function(result) {
  	                if (callback) callback(result);
  	            });
  	        },

  	        confirm: function(message, title, ok, cancel, callback) {
  	            if (title == null) title = $.ZSmsgBox.confirmTitle;
  	            $.ZSmsgBox._show(title, message, null, 'confirm', ok, cancel, function(result) {
  	                if (callback) callback(result);
  	            });
  	        },

  	        prompt: function(message, value, title, ok, cancel, callback) {
  	            if (title == null) title = $.ZSmsgBox.promptTitle;
  	            $.ZSmsgBox._show(title, message, value, 'prompt', ok, cancel, function(result) {
  	                if (callback) callback(result);
  	            });
  	        },

  	        _show: function(title, msg, value, type, ok, cancel, callback) {

  	            $.ZSmsgBox._hide();
  	            $.ZSmsgBox._overlay('show');

  	            var css_name = '';
  	            var title_h1 = '<h1 class="popup_msg_title"></h1>';
  	            if (title == 'none') {
  	                css_name = 'border';
  	                title_h1 = '';
  	            }

  	            $("body").append(
  	                '<div class="popup_msg ' + css_name + '">' +
  	                title_h1 +
  	                '<div class="popup_msg_content">' +
  	                '<div class="popup_msg_message"></div>' +
  	                '</div>' +
  	                '</div>');

  	            $popup_msg = $(".popup_msg");
  	            $popup_msg_title = $(".popup_msg .popup_msg_title");
  	            $popup_msg_content = $(".popup_msg .popup_msg_content");
  	            $popup_msg_message = $(".popup_msg .popup_msg_message");

  	            if ($.ZSmsgBox.dialogClass) $popup_msg.addClass($.ZSmsgBox.dialogClass);

  	            // IE6 Fix
  	            var popup_msg_pos = ('undefined' == typeof(document.body.style.maxHeight)) ? 'absolute' : 'fixed';

  	            $popup_msg.css({
  	                position: popup_msg_pos,
  	                zIndex: 999,
  	                padding: 0,
  	                margin: 0
  	            });

  	            if (title != 'none') {
  	                $popup_msg_title.html(title);
  	                if (type != 'ajaxload') {
  	                    $popup_msg_title.append('<s onclick="$.ZSmsgBox._hide();"></s>');
  	                }
  	            }
  	            $popup_msg_content.addClass(type);
  	            if (type == 'html' || type == 'ajaxload') {
  	                $popup_msg_message.html(msg);
  	            } else {
  	                $popup_msg_message.html('<div class="msg">' + msg + '</div>');
  	            }

  	            $popup_msg.css({
  	                minWidth: $popup_msg_message.outerWidth(),
  	                maxWidth: $popup_msg_message.outerWidth()
  	            });

  	            if (type == 'ajaxload') {
  	                $popup_msg.html('<div class="loading"></div>');
  	            }

  	            $.ZSmsgBox._reposition();
  	            $.ZSmsgBox._maintainPosition(true);

  	            switch (type) {
  	                case 'ajaxload':
  	                    $(".popup_overlay").off("click.overlay");
  	                    break;
  	                case 'html':
  	                    callback && callback();
  	                    break;
  	                case 'alert':
  	                    if (ok != '') {
  	                        $popup_msg_message.after('<div class="popup_msg_panel"><input type="button" value="' + ok + '" class="popup_btn_ok" /></div>');
  	                    }
  	                    $(".popup_btn_ok").click(function() {
  	                        $.ZSmsgBox._hide();
  	                        callback(true);
  	                    }).focus().keypress(function(e) {
  	                        if (e.keyCode == 13 || e.keyCode == 27) $(".popup_btn_ok").trigger('click');
  	                    });
  	                    break;
  	                case 'confirm':
  	                    $popup_msg_message.after('<div class="popup_msg_panel"><input type="button" value="' + ok + '" class="popup_btn_ok" /><input type="button" value="' + cancel + '" class="popup_btn_cancel" /></div>');
  	                    $(".popup_btn_ok").click(function() {
  	                        $.ZSmsgBox._hide();
  	                        if (callback) callback(true);
  	                    }).focus();
  	                    $(".popup_btn_cancel").click(function() {
  	                        $.ZSmsgBox._hide();
  	                        if (callback) callback(false);
  	                    });
  	                    $(".popup_btn_ok, .popup_btn_cancel").keypress(function(e) {
  	                        if (e.keyCode == 13) $(".popup_btn_ok").trigger('click');
  	                        if (e.keyCode == 27) $(".popup_btn_cancel").trigger('click');
  	                    });
  	                    break;
  	                case 'prompt':
  	                    $popup_msg_message.append('<br /><input type="text" size="30" class="popup_msg_prompt" />').after('<div class="popup_msg_panel"><input type="button" value="' + ok + '" class="popup_btn_ok" /> <input type="button" value="' + cancel + '" class="popup_btn_cancel" /></div>');
  	                    $(".popup_msg_prompt").width($popup_msg_message.width());
  	                    $(".popup_btn_ok").click(function() {
  	                        $.ZSmsgBox._hide();
  	                        if (callback) callback($(".popup_msg_prompt").val());
  	                    });
  	                    $(".popup_btn_cancel").click(function() {
  	                        $.ZSmsgBox._hide();
  	                        if (callback) callback(null);
  	                    });
  	                    $(".popup_msg_prompt, .popup_btn_ok, .popup_btn_cancel").keypress(function(e) {
  	                        if (e.keyCode == 13) $(".popup_btn_ok").trigger('click');
  	                        if (e.keyCode == 27) $(".popup_btn_cancel").trigger('click');
  	                    });
  	                    if (value) $(".popup_msg_prompt").val(value);
  	                    $(".popup_msg_prompt").focus().select();
  	                    break;
  	            }
  	        },

  	        _hide: function() {
  	            $popup_msg && $popup_msg.remove();
  	            $.ZSmsgBox._overlay('hide');
  	            $.ZSmsgBox._maintainPosition(false);
  	        },

  	        _overlay: function(status) {
  	            switch (status) {
  	                case 'show':
  	                    $.ZSmsgBox._overlay('hide');
  	                    $("body").append('<div class="popup_overlay"></div>');
  	                    $(".popup_overlay").css({
  	                        position: 'absolute',
  	                        zIndex: 998,
  	                        top: '0px',
  	                        left: '0px',
  	                        width: '100%',
  	                        height: $(document).height(),
  	                        background: $.ZSmsgBox.overlayColor,
  	                        opacity: $.ZSmsgBox.overlayOpacity
  	                    }).on('click.overlay', function() {
  	                        /*$.ZSmsgBox._hide();*/
  	                    });

  	                    break;
  	                case 'hide':
  	                    $(".popup_overlay").remove();
  	                    break;
  	            }
  	        },

  	        _reposition: function() {
  	            var top = (($(window).height() / 2) - ($popup_msg.outerHeight() / 2)) + $.ZSmsgBox.verticalOffset;
  	            var left = (($(window).width() / 2) - ($popup_msg.outerWidth() / 2)) + $.ZSmsgBox.horizontalOffset;
  	            var maxHeight;
  	            if (top < 0) top = 50;
  	            if (left < 0) left = 0;
  	            maxHeight = $(window).height() - top * 2;
  	            // IE6 fix
  	            if ('undefined' == typeof(document.body.style.maxHeight)) top = top + $(window).scrollTop();
  	            $popup_msg.css({
  	                top: top + 'px',
  	                left: left + 'px',
  	                maxHeight: maxHeight
  	            }).find('.popup_msg_content').css('max-height', maxHeight - ($('.popup_msg_title:visible').height() || 0) - 10);
  	            $(".popup_overlay").height($(document).height());
  	        },

  	        _maintainPosition: function(status) {
  	            if ($.ZSmsgBox.repositionOnResize) {
  	                switch (status) {
  	                    case true:
  	                        $(window).bind('resize', $.ZSmsgBox._reposition);
  	                        break;
  	                    case false:
  	                        $(window).unbind('resize', $.ZSmsgBox._reposition);
  	                        break;
  	                }
  	            }
  	        }
  	    }

  	    ZSAlert = function(message, title, ok, cancel, callback) {
  	        $.ZSmsgBox.alert(message, title, ok, cancel, callback);
  	    };

  	    ZSLoad = function(message, title) {
  	        $.ZSmsgBox.ajaxload(message, title);
  	    };

  	    ZSHtml = function(message, title, callback) {
  	        $.ZSmsgBox.gethtml(message, title, callback);
  	    };

  	    ZSConfirm = function(message, title, ok, cancel, callback) {
  	        $.ZSmsgBox.confirm(message, title, ok, cancel, callback);
  	    };

  	    ZSPrompt = function(message, value, title, ok, cancel, callback) {
  	        $.ZSmsgBox.prompt(message, value, title, ok, cancel, callback);
  	    };

  	})(jQuery);


  	/* ===========================================================
  		select模拟
  		
  		$('select').selectOrDie({
  			placeholder: '选择你的职位', //设置默认占位
  			//prefix: '职位', //设置前缀
  			customClass: 'myselect', //绑定class
  			cycle: true, //键盘控制
  			size: 5, //设置高度个数
  			onChange: function(){
  				alert('你选择了：' + $(this).val());
  			}
  		});
  	 * =========================================================== */

  	;
  	(function($) {
  	    $.fn.selectOrDie = function(method) {
  	        "use strict";

  	        var $defaults = {
  	                customID: null, // String - "" by default - Adds an ID to the SoD
  	                customClass: "", // String - "" by default - Adds a class to the SoD
  	                placeholder: null, // String - "" by default - Adds a placeholder that will be shown before a selection has been made
  	                prefix: null, // String - "" by default - Adds a prefix that always will be shown before the selected value
  	                cycle: false, // Boolean - false by default - Should keyboard cycle through options or not?
  	                links: false, // Boolean - false by default - Should the options be treated as links?
  	                linksExternal: false, // Boolean - false by default - Should the options be treated as links and open in a new window/tab?
  	                size: 0, // Integer - 0 by default - The value set equals the amount of items before scroll is needed
  	                tabIndex: 0, // integer - 0 by default
  	                onChange: $.noop // Adds a callback function for when the SoD gets changed
  	            },
  	            $_settings = {},
  	            $_sodFilterTimeout, $_sodViewportTimeout;

  	        var _private = {

  	            initSoD: function(options) {
  	                $_settings = $.extend({}, $defaults, options);

  	                return this.each(function(i) {

  	                    if (!$(this).parent().hasClass("sod_select")) {
  	                        var $select = $(this),
  	                            $settingsId = $_settings.customID ? $_settings.customID : ($select.data("custom-id") ? $select.data("custom-id") : $_settings.customID),
  	                            $settingsClass = $_settings.customClass ? $_settings.customClass : ($select.data("custom-class") ? $select.data("custom-class") : $_settings.customClass),
  	                            $settingsPrefix = $_settings.prefix ? $_settings.prefix : ($select.data("prefix") ? $select.data("prefix") : $_settings.prefix),
  	                            $settingsPlaceholder = $_settings.placeholder ? $_settings.placeholder : ($select.data("placeholder") ? $select.data("placeholder") : $_settings.placeholder),
  	                            $settingsCycle = ($_settings.cycle || $select.data("cycle")) ? true : $_settings.cycle,
  	                            $settingsLinks = ($_settings.links || $select.data("links")) ? true : $_settings.links,
  	                            $settingsLinksExternal = ($_settings.linksExternal || $select.data("links-external")) ? true : $_settings.linksExternal,
  	                            $settingsSize = $_settings.size ? $_settings.size : ($select.data("size") ? $select.data("size") : $_settings.size),
  	                            $settingsTabIndex = $_settings.tabIndex ? $_settings.tabIndex : ($select.data("tabindex") ? $select.data("tabindex") : ($select.attr("tabindex") ? $select.attr("tabindex") : $_settings.tabIndex)),
  	                            $selectTitle = $select.prop("title") ? $select.prop("title") : null,
  	                            $selectDisabled = $select.is(":disabled") ? " disabled" : "",
  	                            $sodPrefix = "",
  	                            $sodHtml = "",
  	                            $sodHeight = 0,
  	                            $sod, $sodListWrapper, $sodList;

  	                        // If there's a prefix defined
  	                        if ($settingsPrefix) {
  	                            $sodPrefix = "<span class=\"sod_prefix\">" + $settingsPrefix + "</span> ";
  	                        }

  	                        // If there's a placeholder defined
  	                        if ($settingsPlaceholder && !$settingsPrefix) {
  	                            $sodHtml += "<div class=\"sod_label sod_placeholder\">" + $settingsPlaceholder + "</span>";
  	                        } else {
  	                            $sodHtml += "<div class=\"sod_label\">" + $sodPrefix + "</div>";
  	                        }

  	                        // Inserts a new element that will act like our new <select>
  	                        $sod = $("<div/>", {
  	                            id: $settingsId,
  	                            "class": "sod_select " + $settingsClass + $selectDisabled,
  	                            title: $selectTitle,
  	                            tabindex: $settingsTabIndex,
  	                            html: $sodHtml,
  	                            "data-cycle": $settingsCycle,
  	                            "data-links": $settingsLinks,
  	                            "data-links-external": $settingsLinksExternal,
  	                            "data-placeholder": $settingsPlaceholder,
  	                            "data-prefix": $settingsPrefix,
  	                            "data-filter": ""
  	                        }).insertAfter(this);

  	                        // If it's a touch device
  	                        if (_private.isTouch()) {
  	                            $sod.addClass("touch");
  	                        }

  	                        // Add a wrapper for the option list
  	                        $sodListWrapper = $("<div/>", {
  	                            "class": "sod_list"
  	                        }).appendTo($sod);

  	                        // Inserts a <ul> into our wrapper created above. It will host our <option>:s
  	                        $sodList = $("<ul/>").appendTo($sodListWrapper);

  	                        // Inserts a <li> for each <option>
  	                        $("option, optgroup", $select).each(function(i) {
  	                            _private.populateSoD($(this), $sodList, $sod);
  	                        });

  	                        // If the setting size is set, then add a max-height to the SoD
  	                        if ($settingsSize) {
  	                            // Show the SoD options
  	                            $sodListWrapper.show();

  	                            // Calculate a max-height
  	                            $("li:lt(" + $settingsSize + ")", $sodList).each(function(i) {
  	                                $sodHeight += $(this).outerHeight();
  	                            });

  	                            // Hide the SoD list wrapper and set a "max-height" to the list itself
  	                            $sodListWrapper.removeAttr("style");
  	                            $sodList.css({
  	                                "max-height": $sodHeight
  	                            });
  	                        }

  	                        // Move the <select> into the SoD element
  	                        $select.appendTo($sod);

  	                        // Bind events to the SoD
  	                        $sod.on("focusin", _private.focusSod)
  	                            .on("click", _private.triggerSod)
  	                            .on("click", "li", _private.optionClick)
  	                            .on("mousemove", "li", _private.optionHover)
  	                            .on("keydown keypress", _private.keyboardUse);

  	                        // Bind change event to the <select>
  	                        $select.on("change", _private.selectChange);

  	                        // Blur the SoD when clicking outside it
  	                        $("html").on("click", function() {
  	                            _private.blurSod($sod);
  	                        });

  	                        // When a label for the native select is clicked we want to focus the SoD
  	                        $(document).on("click", "label[for='" + $select.attr("id") + "']", function(e) {
  	                            e.preventDefault();
  	                            $sod.focus();
  	                        });
  	                    } else {
  	                        log("Select or Die: It looks like the SoD already exists");
  	                    }

  	                });
  	            }, // initSoD


  	            populateSoD: function($option, $sodList, $sod) {
  	                var $sodPlaceholder = $sod.data("placeholder"),
  	                    $sodPrefix = $sod.data("prefix"),
  	                    $optionParent = $option.parent(),
  	                    $optionText = $option.text(),
  	                    $optionValue = $option.val(),
  	                    $optionCustomId = $option.data("custom-id") ? $option.data("custom-id") : null,
  	                    $optionCustomClass = $option.data("custom-class") ? $option.data("custom-class") : "",
  	                    $optionIsDisabled = $option.is(":disabled") ? " disabled " : "",
  	                    $optionIsSelected = $option.is(":selected") ? " selected active " : "",
  	                    $optionLink = $option.data("link") ? " link " : "",
  	                    $optionLinkExternal = $option.data("link-external") ? " linkexternal" : "";

  	                // Create <li> for each <option>
  	                if ($option.is("option")) { // If <option>
  	                    $("<li/>", {
  	                        "class": $optionCustomClass + $optionIsDisabled + $optionIsSelected + $optionLink + $optionLinkExternal,
  	                        id: $optionCustomId,
  	                        title: $optionText,
  	                        html: $optionText,
  	                        "data-value": $optionValue
  	                    }).appendTo($sodList);

  	                    // If selected and no placeholder is set, update label
  	                    if ($optionIsSelected && !$sodPlaceholder || $optionIsSelected && $sodPrefix) {
  	                        $sod.find(".sod_label").append($optionText);
  	                    }

  	                    // Set the SoD data-label (used in the blur event)
  	                    if ($optionIsSelected && $sodPlaceholder && !$sodPrefix) {
  	                        $sod.data("label", $sodPlaceholder);
  	                    } else if ($optionIsSelected) {
  	                        $sod.data("label", $optionText);
  	                    }

  	                    // If child of an <optgroup>
  	                    if ($optionParent.is("optgroup")) {
  	                        $sodList.find("li:last").addClass("groupchild");

  	                        // If <optgroup> disabled
  	                        if ($optionParent.is(":disabled")) {
  	                            $sodList.find("li:last").addClass("disabled");
  	                        }
  	                    }
  	                } else { // If <<optgroup>
  	                    $("<li/>", {
  	                        "class": "optgroup " + $optionIsDisabled,
  	                        title: $option.prop("label"),
  	                        html: $option.prop("label"),
  	                        "data-label": $option.prop("label")
  	                    }).appendTo($sodList);
  	                }
  	            }, // populateSoD


  	            focusSod: function() {
  	                var $sod = $(this);

  	                // If not disabled we'll add focus and an .active class to enable keyboard
  	                if (!$sod.hasClass("disabled")) {
  	                    $sod.addClass("focus");
  	                } else {
  	                    _private.blurSod($sod);
  	                }
  	            }, // focusSod


  	            triggerSod: function(e) {
  	                e.stopPropagation();

  	                var $sod = $(this),
  	                    $sodList = $sod.find("ul"),
  	                    $sodPlaceholder = $sod.data("placeholder"),
  	                    $optionSelected = $sod.find(".selected");

  	                // Trigger the SoD if it's not disabled, already open or a touch device
  	                if (!$sod.hasClass("disabled") && !$sod.hasClass("open") && !$sod.hasClass("touch")) {
  	                    // Add the .open class to display list
  	                    $sod.addClass("open");

  	                    // Close all other SoD's except for the current one
  	                    $(".sod_select").not(this).removeClass("open focus");

  	                    // If a placeholder is set, then show it
  	                    if ($sodPlaceholder && !$sod.data("prefix")) {
  	                        $sod.find(".sod_label").addClass("sod_placeholder").html($sodPlaceholder);
  	                    }

  	                    // Scroll list to selected item
  	                    _private.listScroll($sodList, $optionSelected);

  	                    // Check if the option list fits in the viewport
  	                    _private.checkViewport($sod, $sodList);
  	                } else {
  	                    // Clears viewport check timeout
  	                    clearTimeout($_sodViewportTimeout);
  	                    $sod.removeClass("open above");
  	                }
  	            }, // triggerSod


  	            keyboardUse: function(e) {
  	                var $sod = $(this),
  	                    $sodList = $sod.find("ul"),
  	                    $sodOptions = $sod.find("li"),
  	                    $sodLabel = $sod.find(".sod_label"),
  	                    $sodCycle = $sod.data("cycle"),
  	                    $optionActive = $sodOptions.filter(".active"),
  	                    $sodFilterHit, $optionNext, $optionCycle, $scrollList, $scrollOption;

  	                // "Filter" options list using keybaord based input
  	                if (e.which !== 0 && e.charCode !== 0) {
  	                    // Clears data-filter timeout
  	                    clearTimeout($_sodFilterTimeout);

  	                    // Append the data-filter with typed character
  	                    $sod.data("filter", $sod.data("filter") + String.fromCharCode(e.keyCode | e.charCode));

  	                    // Check for matches of the typed string
  	                    $sodFilterHit = $sodOptions.filter(function() {
  	                        return $(this).text().toLowerCase().indexOf($sod.data("filter").toLowerCase()) === 0;
  	                    }).not(".disabled, .optgroup").first();

  	                    // If the typed value is a hit, then set it to active
  	                    if ($sodFilterHit.length) {
  	                        $optionActive.removeClass("active");
  	                        $sodFilterHit.addClass("active");
  	                        _private.listScroll($sodList, $sodFilterHit);
  	                        $sodLabel.get(0).lastChild.nodeValue = $sodFilterHit.text();
  	                    }

  	                    // Set a timeout to empty the data-filter
  	                    $_sodFilterTimeout = setTimeout(function() {
  	                        $sod.data("filter", "");
  	                    }, 500);
  	                }

  	                // Highlight prev/next element if up/down key pressed
  	                if (e.which > 36 && e.which < 41) {

  	                    // Set $optionNext and $optionCycle
  	                    if (e.which === 37 || e.which === 38) { // Left/Up key
  	                        $optionNext = $optionActive.prevAll(":not('.disabled, .optgroup')").first();
  	                        $optionCycle = $sodOptions.not(".disabled, .optgroup").last();
  	                    } else if (e.which === 39 || e.which === 40) { // Right/Down key
  	                        $optionNext = $optionActive.nextAll(":not('.disabled, .optgroup')").first();
  	                        $optionCycle = $sodOptions.not(".disabled, .optgroup").first();
  	                    }

  	                    // If there's no option before/after and cycle is enabled
  	                    if (!$optionNext.is("li") && $sodCycle) {
  	                        $optionNext = $optionCycle;
  	                    }

  	                    // Add .active to the next option, update the label and scroll the list
  	                    if ($optionNext.is("li") || $sodCycle) {
  	                        $optionActive.removeClass("active");
  	                        $optionNext.addClass("active");
  	                        $sodLabel.get(0).lastChild.nodeValue = $optionNext.text();
  	                        _private.listScroll($sodList, $optionNext);
  	                    }

  	                    // Disables the up/down keys from scrolling the page
  	                    return false;
  	                } else if (e.which === 13 || (e.which === 32 && $sod.hasClass("open") && $sod.data("filter") === "")) { // Enter key or space, simulate click() function
  	                    e.preventDefault();
  	                    $optionActive.click();
  	                } else if (e.which === 32 && !$sod.hasClass("open") && $sod.data("filter") === "") { // Space bar, Opens the SoD if already closed
  	                    e.preventDefault();
  	                    $sod.click();
  	                } else if (e.which === 27) { // Esc key, hides dropdown
  	                    _private.blurSod($sod);
  	                }
  	            }, // keyboardUse


  	            optionHover: function() {
  	                var $option = $(this);

  	                // Mousemove event on option to make the SoD behave just like a native select
  	                if (!$option.hasClass("disabled") && !$option.hasClass("optgroup")) {
  	                    $option.siblings().removeClass("active").end().addClass("active");
  	                }
  	            }, // optionHover


  	            optionClick: function(e) {
  	                e.stopPropagation();

  	                var $clicked = $(this),
  	                    $sod = $clicked.closest(".sod_select"),
  	                    $optionDisabled = $clicked.hasClass("disabled"),
  	                    $optionOptgroup = $clicked.hasClass("optgroup"),
  	                    $optionIndex = $sod.find("li:not('.optgroup')").index(this);

  	                // If not disabled or optgroup
  	                if (!$optionDisabled && !$optionOptgroup) {
  	                    $sod.find(".selected, .sod_placeholder").removeClass("selected sod_placeholder");
  	                    $clicked.addClass("selected");
  	                    $sod.find("select option")[$optionIndex].selected = true;
  	                    $sod.find("select").change();
  	                }

  	                // Clear viewport check timeout
  	                clearTimeout($_sodViewportTimeout);

  	                // Hide the list
  	                $sod.removeClass("open above");
  	            }, // optionClick


  	            selectChange: function() {
  	                var $select = $(this),
  	                    $optionSelected = $select.find(":selected"),
  	                    $optionText = $optionSelected.text(),
  	                    $sod = $select.closest(".sod_select");

  	                $sod.find(".sod_label").get(0).lastChild.nodeValue = $optionText;
  	                $sod.data("label", $optionText);

  	                // Triggers the onChange callback
  	                $_settings.onChange.call(this);

  	                // If $_settings.links, send the user to the URL
  	                if (($sod.data("links") || $optionSelected.data("link")) && !$optionSelected.data("link-external")) {
  	                    window.location.href = $optionSelected.val();
  	                } else if ($sod.data("links-external") || $optionSelected.data("link-external")) {
  	                    window.open($optionSelected.val(), "_blank");
  	                }
  	            }, // selectChange


  	            blurSod: function($sod) {
  	                if ($("body").find($sod).length) {
  	                    var $sodLabel = $sod.data("label"),
  	                        $optionActive = $sod.find(".active"),
  	                        $optionSelected = $sod.find(".selected");

  	                    // Clear viewport check timeout
  	                    clearTimeout($_sodViewportTimeout);

  	                    // Remove above/open class
  	                    $sod.removeClass("open focus above");

  	                    // Restore the select if no change has been made
  	                    if (!$optionActive.hasClass("selected")) {
  	                        $sod.find(".sod_label").get(0).lastChild.nodeValue = $sodLabel;
  	                        $optionActive.removeClass("active");
  	                        $optionSelected.addClass("active");
  	                    }

  	                    $sod.blur();
  	                }
  	            }, // blurSod


  	            checkViewport: function($sod, $sodList) {
  	                var $sodPosition = $sod[0].getBoundingClientRect(),
  	                    $sodListHeight = $sodList.outerHeight();

  	                // If the list is below the viewport AND fits above, then show it above
  	                if (($sodPosition.bottom + $sodListHeight + 10) > $(window).height() && ($sodPosition.top - $sodListHeight) > 10) {
  	                    $sod.addClass("above");
  	                } else {
  	                    $sod.removeClass("above");
  	                }

  	                // This was fun, lets do it again and again.
  	                $_sodViewportTimeout = setTimeout(function() {
  	                    _private.checkViewport($sod, $sodList);
  	                }, 200);
  	            }, // checkViewport


  	            listScroll: function($sodList, $option) {
  	                var $scrollList = $sodList[0].getBoundingClientRect(), // getBoundingClientRect FTW!
  	                    $scrollOption = $option[0].getBoundingClientRect();

  	                // Scroll list up and down
  	                if ($scrollList.top > $scrollOption.top) {
  	                    $sodList.scrollTop($sodList.scrollTop() - $scrollList.top + $scrollOption.top);
  	                } else if ($scrollList.bottom < $scrollOption.bottom) {
  	                    $sodList.scrollTop($sodList.scrollTop() - $scrollList.bottom + $scrollOption.bottom);
  	                }
  	            }, // listScroll


  	            isTouch: function() {
  	                return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
  	            } // isTouch

  	        };

  	        var methods = {

  	            destroy: function() {
  	                return this.each(function(i) {
  	                    var $select = $(this),
  	                        $sod = $select.parent();

  	                    // Destroy the SoD
  	                    if ($sod.hasClass("sod_select")) {
  	                        // Unbind the change event on the real <select>
  	                        $select.off("change");

  	                        // Restore DOM
  	                        $sod.find("div").remove();
  	                        $select.unwrap();
  	                    } else {
  	                        log("Select or Die: There's no SoD to destroy");
  	                    }
  	                });
  	            }, // destroy


  	            update: function() {
  	                return this.each(function(i) {
  	                    var $select = $(this),
  	                        $sod = $select.parent(),
  	                        $sodList = $sod.find("ul:first");

  	                    // Check for the SoD
  	                    if ($sod.hasClass("sod_select")) {
  	                        // Empty current list of options in faux <select>
  	                        $sodList.empty();

  	                        // Clear the label (but keep prefix)
  	                        $sod.find(".sod_label").get(0).lastChild.nodeValue = "";

  	                        // Disable the SoD if the select is disabled
  	                        if ($select.is(":disabled")) {
  	                            $sod.addClass("disabled");
  	                        }

  	                        // Inserts a <li> for each <option>
  	                        $("option, optgroup", $select).each(function(i) {
  	                            _private.populateSoD($(this), $sodList, $sod);
  	                        });
  	                    } else {
  	                        log("Select or Die: There's no SoD to update");
  	                    }
  	                });

  	            }, // update


  	            disable: function($value) {
  	                return this.each(function(i) {
  	                    var $select = $(this),
  	                        $sod = $select.parent();

  	                    // Check for the SoD
  	                    if ($sod.hasClass("sod_select")) {
  	                        if (typeof $value !== "undefined") { // Disable option/optgroup

  	                            // Disables the option (and possible children if optgroup) in the SoD
  	                            $sod.find("ul:first li[data-value='" + $value + "']").addClass("disabled");
  	                            $sod.find("ul:first li[data-label='" + $value + "']").nextUntil(":not(.groupchild)").addClass("disabled");

  	                            // Disables the option/optgroup in the real <select>
  	                            $("option[value='" + $value + "'], optgroup[label='" + $value + "']", this).prop("disabled", true);

  	                        } else if ($sod.hasClass("sod_select")) { // Disable select/SoD
  	                            $sod.addClass("disabled");
  	                            $select.prop("disabled", true);
  	                        }
  	                    } else {
  	                        log("Select or Die: There's no SoD to disable");
  	                    }
  	                });
  	            }, // disable


  	            enable: function($value) {
  	                return this.each(function(i) {
  	                    var $select = $(this),
  	                        $sod = $select.parent();

  	                    // Check for the SoD
  	                    if ($sod.hasClass("sod_select")) {
  	                        if (typeof $value !== "undefined") { // Enable option/optgroup

  	                            // Enables the option (and possible children if optgroup) in the SoD
  	                            $sod.find("ul:first li[data-value='" + $value + "']").removeClass("disabled");
  	                            $sod.find("ul:first li[data-label='" + $value + "']").nextUntil(":not(.groupchild)").removeClass("disabled");

  	                            // Enables the option in the real <select>
  	                            $("option[value='" + $value + "'], optgroup[label='" + $value + "']", this).prop("disabled", false);

  	                        } else if ($sod.hasClass("sod_select")) { // Enable select/SoD
  	                            $sod.removeClass("disabled");
  	                            $select.prop("disabled", false);
  	                        }
  	                    } else {
  	                        log("Select or Die: There's no SoD to enable");
  	                    }
  	                });
  	            } // enable

  	        };

  	        if (methods[method]) {
  	            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
  	        } else if (typeof method === "object" || !method) {
  	            return _private.initSoD.apply(this, arguments);
  	        } else {
  	            $.error("Select or Die: Oh no! No such method \"" + method + "\" for the SoD instance");
  	        }
  	    };

  	})(jQuery);


  	/* ===========================================================
  		Hover延时处理
  		hoverDuring       鼠标经过的延时时间
  		outDuring         鼠标移出的延时时间
  		hoverEvent        鼠标经过执行的方法
  		outEvent          鼠标移出执行的方法
  	 * =========================================================== */

  	;
  	(function($) {
  	    function HoverDelay(obj, options) {
  	        var defaults = {
  	            hoverDuring: 200,
  	            outDuring: 200,
  	            hoverEvent: function() {
  	                $.noop();
  	            },
  	            outEvent: function() {
  	                $.noop();
  	            }
  	        };

  	        var sets = $.extend(defaults, options || {});

  	        var hoverTimer, outTimer;
  	        obj.hover(function() {
  	            clearTimeout(outTimer);
  	            hoverTimer = setTimeout(sets.hoverEvent(this), sets.hoverDuring);
  	        }, function() {
  	            clearTimeout(hoverTimer);
  	            outTimer = setTimeout(sets.outEvent(this), sets.outDuring);
  	        });
  	    }
  	    $.fn.HoverDelay = function(params) {
  	        return this.each(function() {
  	            $(this).data('HoverDelay', new HoverDelay($(this), params));
  	        });
  	    }
  	})(jQuery);


  	/* ===========================================================
  		jQuery Cookie Plugin v1.4.1
  	 * =========================================================== */
  	;
  	(function($) {

  	    var pluses = /\+/g;

  	    function encode(s) {
  	        return config.raw ? s : encodeURIComponent(s);
  	    }

  	    function decode(s) {
  	        return config.raw ? s : decodeURIComponent(s);
  	    }

  	    function stringifyCookieValue(value) {
  	        return encode(config.json ? JSON.stringify(value) : String(value));
  	    }

  	    function parseCookieValue(s) {
  	        if (s.indexOf('"') === 0) {
  	            // This is a quoted cookie as according to RFC2068, unescape...
  	            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  	        }

  	        try {
  	            // Replace server-side written pluses with spaces.
  	            // If we can't decode the cookie, ignore it, it's unusable.
  	            // If we can't parse the cookie, ignore it, it's unusable.
  	            s = decodeURIComponent(s.replace(pluses, ' '));
  	            return config.json ? JSON.parse(s) : s;
  	        } catch (e) {}
  	    }

  	    function read(s, converter) {
  	        var value = config.raw ? s : parseCookieValue(s);
  	        return $.isFunction(converter) ? converter(value) : value;
  	    }

  	    var config = $.cookie = function(key, value, options) {

  	        // Write

  	        if (value !== undefined && !$.isFunction(value)) {
  	            options = $.extend({}, config.defaults, options);

  	            if (typeof options.expires === 'number') {
  	                var days = options.expires,
  	                    t = options.expires = new Date();
  	                t.setTime(+t + days * 864e+5);
  	            }

  	            return (document.cookie = [
  	                encode(key), '=', stringifyCookieValue(value),
  	                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
  	                options.path ? '; path=' + options.path : '',
  	                options.domain ? '; domain=' + options.domain : '',
  	                options.secure ? '; secure' : ''
  	            ].join(''));
  	        }

  	        // Read

  	        var result = key ? undefined : {};

  	        // To prevent the for loop in the first place assign an empty array
  	        // in case there are no cookies at all. Also prevents odd result when
  	        // calling $.cookie().
  	        var cookies = document.cookie ? document.cookie.split('; ') : [];

  	        for (var i = 0, l = cookies.length; i < l; i++) {
  	            var parts = cookies[i].split('=');
  	            var name = decode(parts.shift());
  	            var cookie = parts.join('=');

  	            if (key && key === name) {
  	                // If second argument (value) is a function it's a converter...
  	                result = read(cookie, value);
  	                break;
  	            }

  	            // Prevent storing a cookie that we couldn't decode.
  	            if (!key && (cookie = read(cookie)) !== undefined) {
  	                result[name] = cookie;
  	            }
  	        }

  	        return result;
  	    };

  	    config.defaults = {};

  	    $.removeCookie = function(key, options) {
  	        if ($.cookie(key) === undefined) {
  	            return false;
  	        }

  	        // Must not alter options, thus extending a fresh object...
  	        $.cookie(key, '', $.extend({}, options, {
  	            expires: -1
  	        }));
  	        return !$.cookie(key);
  	    };

  	})(jQuery);



  	/* ===========================================================
  		倒计时
  		callBack:function(element,msg){msg.show();}
  	 * =========================================================== */

  	;
  	(function($) {
  	    $.fn.timeGo = function(options) {
  	        var opts = $.extend({}, $.fn.timeGo.defaults, options);
  	        return this.each(function() {
  	            $this = $(this);
  	            var sysSecond, interValObj;
  	            var $day = opts.day;
  	            var $ms = opts.ms;
  	            var callBack = opts.callBack;
  	            var n = 10;
  	            if (!$ms) n = 1;
  	            sysSecond = parseInt($this.attr('timeback')) * n;
  	            interValObj = window.setInterval(setRemainTime, 1000 / n);

  	            function setRemainTime() {
  	                sysSecond = sysSecond - 1;
  	                var msecond = Math.floor(sysSecond % 10);
  	                var second = Math.floor(sysSecond / n % 60);
  	                var minite = Math.floor((sysSecond / n / 60) % 60);
  	                var hour = Math.floor((sysSecond / n / 3600) % 24);
  	                var day = Math.floor((sysSecond / n / 3600) / 24);
  	                if (sysSecond >= 0) {
  	                    if (second >= 0 && second < 10) {
  	                        second = "0" + second
  	                    };
  	                    //if (day>=0&&day<10) {day="0"+day};
  	                    if (hour >= 0 && hour < 10) {
  	                        hour = "0" + hour
  	                    };
  	                    if (minite >= 0 && minite < 10) {
  	                        minite = "0" + minite
  	                    };
  	                    var dayhtml = "";
  	                    if ($day) {
  	                        dayhtml = "<span class='day'>" + day + "</span><i>day(s)</i>"
  	                    }
  	                    if (!$ms) {
  	                        $this.html(dayhtml + hour + "<i>:</i>" + minite + "<i>:</i>" + second);
  	                    } else {
  	                        $this.html(dayhtml + hour + "<i>:</i>" + minite + "<i>:</i>" + second + "<b class='msec'>." + msecond + "</b></span>");
  	                    }
  	                } else {
  	                    window.clearInterval(interValObj);
  	                    if (typeof callBack == "function") callBack($this);
  	                }
  	            }
  	        });
  	    };
  	    $.fn.timeGo.defaults = {
  	        ms: true,
  	        day: true,
  	        callBack: ''
  	    };

  	})(jQuery);


  	/* ===========================================================
  		嵩人瀑布流插件2015 v1.0
  		ZSwater(obj , col, ajaxData);
  		obj 容器
  		col 列数
  		ajaxData 数组
  	 * =========================================================== */
  	;
  	(function($) {
  	    $.ZSwater = {
  	        setup: function(o, col, ajaxData) {
  	            var $o = $(o).children();
  	            var heightArray = [];
  	            var htmlArray = [];
  	            if (ajaxData) {
  	                $.each(ajaxData, function(key, val) {
  	                    var column = key % col + 1;
  	                    var _this = htmlArray[column - 1];
  	                    if (_this) {
  	                        htmlArray[column - 1] = _this + val;
  	                    } else {
  	                        htmlArray[column - 1] = val
  	                    }
  	                });
  	            }
  	            $o.each(function() {
  	                var $this = $(this);
  	                if (ajaxData) $this.append(htmlArray[($this.index())]);
  	                eval('heightArray[' + $this.index() + '] = ' + $this.outerHeight());
  	            });
  	            $.ZSwater.move(o, heightArray);
  	        },
  	        move: function(o, heightArray) {
  	            var $o = $(o).children();

  	            $.each(heightArray, function(key, val) {
  	                var compareR = 0,
  	                    _k = 0,
  	                    _key = 0;
  	                for (var k = 0; k < heightArray.length; k++) {
  	                    if (k != key) {
  	                        var liLast = $o.eq(key).children(":last");
  	                        var compare = val - liLast.outerHeight(true) - heightArray[k];
  	                        if (compare > 0) {
  	                            if (compare > compareR) {
  	                                _k = k;
  	                                _key = key;
  	                                compareR = compare;
  	                            }
  	                        }
  	                    }
  	                }
  	                if (compareR > 0) {
  	                    $o.eq(_key).children(":last").appendTo($o.eq(_k));
  	                    $o.eq(_k).children(":last").css({
  	                        "background": "#e33057"
  	                    });
  	                    $o.each(function() {
  	                        var $_this = $(this);
  	                        eval('heightArray[' + $_this.index() + '] = ' + $_this.outerHeight());
  	                    });
  	                    $.ZSwater.move(o, heightArray);
  	                    return false;
  	                }
  	            });
  	        }
  	    }
  	    ZSwater = function(obj, col, ajaxData) {
  	        $.ZSwater.setup(obj, col, ajaxData)
  	    }
  	})(jQuery)




  	//币种切换全局变量
  	/*CurrencyCfg={"USD":[1,"US$",true,"2"],"EUR":[EURRATE,"\u20ac",true,"2"],"GBP":[GBPRATE,"\u00a3",true,"2"],"AUD":[AUDRATE,"AU$",true,"2"],"CAD":[CADRATE,"CA$",true,"2"],"RUB":[RUBRATE,"\u0440\u0443\u0431.",false,"0"],"BRL":[BRLRATE,"R$",true,"2"],"CHF":[CHFRATE,"SFr",true,"2"],"DKK":[DKKRATE,"Dkr",true,"2"],"PHP":[PHPRATE,"\u20b1",true,"2"],"SGD":[SGDRATE,"S$",true,"2"],"CZK":[CZKRATE,"K\u010d",true,"2"],"HUF":[HUFRATE,"Ft",true,"0"],"MXN":[MXNRATE,"Mex$",true,"2"],"NOK":[NOKRATE,"Kr",true,"2"],"NZD":[NZDRATE,"NZD$",true,"2"],"PLN":[PLNRATE,"z\u0142",true,"2"],"THB":[THBRATE,"\u0e3f",true,"2"],"HKD":[HKDRATE,"HK$",true,"2"],"ILS":[ILSRATE,"\u20aa",true,"2"],"SEK":[SEKRATE,"Kr",true,"2"]}
  	CurrencyList=["USD","EUR","GBP","AUD","CAD","RUB","BRL","CHF","DKK","PHP","SGD","CZK","HUF","MXN","NOK","NZD","PLN","THB","HKD","ILS","SEK"];
  	CurrencyLoss=1.0278;*/


  	/* ===========================================================
  		币种切换
  	 * =========================================================== */
  	var SpCurrencyList = ["INR", "KRW", "TRY", "ZAR", "MYR", "AED", "KWD", "QAR", "BHD", "SAR", "CLP", "BRL", "EUR", "CZK", "HUF", "PLN", "ILS"];
  	var EuCurrencyList = ['EUR', 'DKK', 'HUF', 'PLN', 'SEK', 'CZK'];
  	var UkCurrencyList = ['GBP', 'AUD', 'NZD'];;
  	(function($) {
  	    $.setCurrency = {
  	        initCurrency: function() {
  	            var g_currency = $.GET("currency", window.location.href);
  	            if ($.inArray(g_currency, CurrencyList) >= 0) {
  	                $.setCurrency.doSelCurrency(g_currency);
  	                $.setCurrency.setSpCookieCurrency(g_currency, -1);
  	            } else {
  	                var c_currency = $.setCurrency.getCookieCurrency();
  	                c_currency = $.inArray(c_currency, CurrencyList) < 0 ? 'USD' : c_currency;
  	                var sp_currency = $.setCurrency.getSpCookieCurrency();
  	                if ($.inArray(sp_currency, SpCurrencyList) > -1 && sp_currency != c_currency) {
  	                    var p_t = $.GET("t", window.location.href);
  	                    if (p_t != 'checkoutReturn') {
  	                        c_currency = sp_currency;
  	                    }
  	                }
  	                $.setCurrency.doSelCurrency(c_currency);
  	            }
  	        },
  	        doSelCurrency: function(currency) {
  	            var sign = eval('CurrencyCfg.' + currency + '[1]');
  	            //Price Range
  	            $('.sale_box .box td span').html(sign);
  	            var hasTr = $(".sale_box table tr.has");
  	            hasTr.find('td').eq(0).nextAll().remove();

  	            var signHtml = sign + ' ' + currency + '<i></i>';
  	            var $this = $('.head .currency .box li');
  	            var singObj = $this.parents(".currency").find("strong");
  	            if (signHtml == singObj.html()) {
  	                var $detail = $('.goods_main_tabs .currency .box li');
  	                if ($detail.length) {
  	                    $detail.parents(".currency").find("strong").html(signHtml);
  	                }
  	                if (currency != 'USD') {
  	                    return;
  	                }
  	            };
  	            singObj.html(signHtml);
  	            $('.goods_main_tabs .currency').find("strong").html(sign);
  	            $('.price_box .currency').find("strong").html(sign);
  	            $(".price,.price_old,.special_price").each(function() {
  	                $.setCurrency.autoChangePrice($(this), currency, true);
  	                // 价格区间
  	                if ($(this).attr('ori_min_price') != undefined && $(this).attr('ori_max_price') != undefined &&
  	                    parseFloat($(this).attr('ori_max_price')) > parseFloat($(this).attr('ori_min_price'))) {
  	                    var spCurrency = new Array('RUB', 'AED');
  	                    if ($.inArray(currency, spCurrency)) {
  	                        $.setCurrency.handlePriceRange($(this), currency, false, true);
  	                    } else {
  	                        $.setCurrency.handlePriceRange($(this), currency, true, false);
  	                    }
  	                }
  	            });

  	            $(".price_number").each(function() {
  	                $.setCurrency.autoChangePrice($(this), currency);
  	                // 价格区间
  	                if (!$('.goods_main_attr[option_id=379] li.active').length && $(this).attr('ori_min_price') != undefined && $(this).attr('ori_max_price') != undefined &&
  	                    parseFloat($(this).attr('ori_max_price')) > parseFloat($(this).attr('ori_min_price'))) {
  	                    $.setCurrency.handlePriceRange($(this), currency, false, false);
  	                }
  	            });
  	            //设置Cookies币种
  	            $.setCurrency.setCookieCurrency(currency);

  	            var sizeType = 'US';
  	            var date = new Date();
  	            date.setTime(date.getTime() + (24 * 3600 * 1000));
  	            if ($.inArray(currency, UkCurrencyList) > -1) { //英国尺寸的币种   hmh
  	                sizeType = 'UK';

  	            } else if ($.inArray(currency, EuCurrencyList) > -1) { //欧洲尺寸的币种   hmh

  	                sizeType = 'EU';
  	            }
  	            $.cookie('_clothesType', sizeType, {
  	                path: '/',
  	                expires: date
  	            });
  	            $.cookie('_shoesType', sizeType, {
  	                path: '/',
  	                expires: date
  	            });
  	            var $a = $('.goods_main_list .size_list_box .list li a[size="' + sizeType + '"]');

  	            if ($a.length) {
  	                // 因为产品详情页才用，所以这个方法在产品js里
  	                $.selConversion && $.selConversion($a.closest('li'));
  	            }

  	            $.changePriceCallback && $.changePriceCallback();
  	        },
  	        setCookieCurrency: function(currency) {
  	            $.cookie("currency", currency, {
  	                expires: 7,
  	                path: '/'
  	            });
  	        },
  	        getCookieCurrency: function() {
  	            return $.cookie("currency");
  	        },
  	        getSpCookieCurrency: function() {
  	            return $.cookie("sp_currency");
  	        },
  	        setSpCookieCurrency: function(currency, expire) {
  	            if (typeof(expire) == 'undefined') {
  	                expire = -1;
  	            }
  	            $.cookie("sp_currency", currency, {
  	                expires: expire,
  	                path: '/'
  	            });
  	        },
  	        autoChangePrice: function(node, currency, format, attr) {
  	            if (!node) {
  	                return false;
  	            }
  	            var oriPrice = parseFloat(node.attr('oriprice'));
  	            if (!oriPrice > 0) {
  	                return false;
  	            }
  	            var formatPrice = $.setCurrency.getPriceByCurrency(oriPrice, currency, format);
  	            var preg = /<span.+?\/span>/;
  	            if (attr) {
  	                node.attr(attr, formatPrice);
  	            } else if (preg.test(node.html())) {
  	                var span = node.html().match(preg);
  	                formatPrice = span + formatPrice;
  	                node.html(formatPrice);
  	            } else {
  	                node.text(formatPrice);
  	            }
  	        },
  	        numberFormat: function(s, n) {
  	            n = n >= 0 && n <= 20 ? n : 2;
  	            s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  	            var l = s.split(".")[0].split("").reverse(),
  	                r = s.split(".")[1];
  	            t = "";
  	            for (i = 0; i < l.length; i++) {
  	                t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
  	            }
  	            var res = t.split("").reverse().join("");
  	            if (r) {
  	                res += "." + r;
  	            }
  	            return res;
  	        },
  	        getPriceByCurrency: function(price, currency, format) {
  	            var rate = eval('CurrencyCfg.' + currency + '[0]');
  	            var place = eval('CurrencyCfg.' + currency + '[3]');
  	            var result = parseFloat(price) * parseFloat(rate);
  	            if (currency != 'USD') {
  	                result = result * parseFloat(CurrencyLoss);
  	            }
  	            result = parseFloat(result.toFixed(place));
  	            if (format) {
  	                result = $.setCurrency.numberFormat(result, place);
  	                var sign = eval('CurrencyCfg.' + currency + '[1]');
  	                var spCurrency = new Array('RUB', 'AED');
  	                ($.inArray(currency, spCurrency)) && (sign = ' ' + sign) || (sign = sign + ' ');
  	                var isPrefix = eval('CurrencyCfg.' + currency + '[2]');
  	                result = isPrefix ? sign + result : result + sign;
  	            }
  	            result += "";
  	            var r = result.split(".")[1];
  	            if (!r && place > 0) {
  	                result += '.';
  	                r = result.split(".")[1];
  	            }
  	            if (typeof(r) != 'undefined' && r.length < place) {
  	                for (var k = r.length; k < place; k++) {
  	                    result += '0';
  	                }
  	            }
  	            return result;
  	        },
  	        getPriceByCurrencyNew: function(price, currency) {
  	            var rate = eval('CurrencyCfg.' + currency + '[0]');
  	            var place = eval('CurrencyCfg.' + currency + '[3]');
  	            var result = parseFloat(price) * parseFloat(rate);
  	            if (currency != 'USD') {
  	                result = result * parseFloat(CurrencyLoss);
  	            }

  	            return result;
  	        },
  	        formatPirce: function(price, currency) {
  	            var rate = eval('CurrencyCfg.' + currency + '[0]');
  	            var place = eval('CurrencyCfg.' + currency + '[3]');
  	            var result = price;
  	            result = parseFloat(result.toFixed(place));
  	            result = $.setCurrency.numberFormat(result, place);
  	            var sign = eval('CurrencyCfg.' + currency + '[1]');
  	            var spCurrency = new Array('RUB', 'AED');
  	            ($.inArray(currency, spCurrency)) && (sign = ' ' + sign) || (sign = sign + ' ');
  	            var isPrefix = eval('CurrencyCfg.' + currency + '[2]');
  	            result = isPrefix ? sign + result : result + sign;
  	            result += "";
  	            var r = result.split(".")[1];
  	            if (!r && place > 0) {
  	                result += '.';
  	                r = result.split(".")[1];
  	            }
  	            if (typeof(r) != 'undefined' && r.length < place) {
  	                for (var k = r.length; k < place; k++) {
  	                    result += '0';
  	                }
  	            }
  	            return result;
  	        },
  	        handlePriceRange: function(node, currency, minFormat, maxFormat) {
  	            if (!node) {
  	                return false;
  	            }
  	            var oriMinPrice = parseFloat(node.attr('ori_min_price'));
  	            var oriMaxPrice = parseFloat(node.attr('ori_max_price'));
  	            if (!oriMinPrice > 0 && !oriMaxPrice > 0) {
  	                return false;
  	            }
  	            var formatMinPrice = $.setCurrency.getPriceByCurrency(oriMinPrice, currency, minFormat);
  	            var formatMaxPrice = $.setCurrency.getPriceByCurrency(oriMaxPrice, currency, maxFormat);
  	            var priceStr = formatMinPrice + ' ~ ' + formatMaxPrice;
  	            var preg = /<span.+?\/span>/;
  	            if (preg.test(node.html())) {
  	                var span = node.html().match(preg);
  	                priceStr = span + priceStr;
  	                node.html(priceStr);
  	            } else {
  	                node.text(priceStr);
  	            }
  	        }
  	    }
  	})(jQuery);

  	$(function() {
  	    //$.validateLogin();
  	    //$.loadHeadCart();
  	    //$.headData();
  	    $.setCurrency.initCurrency();
  	    $.initCookieLang();
  	});

  	/* ===========================================================
  		分页
  		maxentries 				总条目数 	必选参数，整数
  		items_per_page 			每页显示的条目数 	可选参数，默认是10
  		num_display_entries 	连续分页主体部分显示的分页条目数 	可选参数，默认是10
  		current_page 			当前选中的页面 	可选参数，默认是0，表示第1页
  		num_edge_entries 		两侧显示的首尾分页的条目数 	可选参数，默认是0
  		link_to 				分页的链接 	字符串，可选参数，默认是"#"
  		prev_text 				“前一页”分页按钮上显示的文字 	字符串参数，可选，默认是"Prev"
  		next_text 				“下一页”分页按钮上显示的文字 	字符串参数，可选，默认是"Next"
  		ellipse_text 			省略的页数用什么文字表示 	可选字符串参数，默认是"..."
  		prev_show_always 		是否显示“前一页”分页按钮 	布尔型，可选参数，默认为true，即显示“前一页”按钮
  		next_show_always 		是否显示“下一页”分页按钮 	布尔型，可选参数，默认为true，即显示“下一页”按钮
  		goto 					是否显示“goto”分页按钮 	布尔型，可选参数，默认为true，即显示“跳转到____”按钮
  		callback 				回调函数 	默认无执行效果
  	 * =========================================================== */
  	;
  	(function($) {
  	    $.fn.pagination = function(opts) {
  	        opts = $.extend({
  	            items_per_page: 1,
  	            num_display_entries: 4,
  	            current_page: 0,
  	            num_edge_entries: 1,
  	            link_to: "javascript:;",
  	            ellipse_text: "...",
  	            prev_show_always: true,
  	            next_show_always: true,
  	            goto: false,
  	            callback: function() {
  	                return false;
  	            }
  	        }, opts || {});

  	        return this.each(function() {
  	            var $this = $(this);
  	            var maxentries = parseInt($this.attr("pagenum"));
  	            var prev_text = $this.attr("prev");
  	            var next_text = $this.attr("next");
  	            var goto_text = $this.attr("goto");

  	            /**
  	             * 计算最大分页显示数目
  	             */
  	            function numPages() {
  	                return Math.ceil(maxentries / opts.items_per_page);
  	            }
  	            /**
  	             * 极端分页的起始和结束点，这取决于current_page 和 num_display_entries.
  	             * @返回 {数组(Array)}
  	             */
  	            function getInterval() {
  	                var ne_half = Math.ceil(opts.num_display_entries / 2);
  	                var np = numPages();
  	                var upper_limit = np - opts.num_display_entries;
  	                var start = current_page > ne_half ? Math.max(Math.min(current_page - ne_half, upper_limit), 0) : 0;
  	                var end = current_page > ne_half ? Math.min(current_page + ne_half, np) : Math.min(opts.num_display_entries, np);
  	                return [start, end];
  	            }

  	            /**
  	             * 分页链接事件处理函数
  	             * @参数 {int} page_id 为新页码
  	             */
  	            function pageSelected(page_id, evt) {
  	                current_page = page_id;
  	                drawLinks();
  	                var continuePropagation = opts.callback(page_id, panel);
  	                if (!continuePropagation) {
  	                    if (evt.stopPropagation) {
  	                        evt.stopPropagation();
  	                    } else {
  	                        evt.cancelBubble = true;
  	                    }
  	                }
  	                return continuePropagation;
  	            }

  	            /**
  	             * 此函数将分页链接插入到容器元素中
  	             */
  	            function drawLinks() {
  	                panel.empty();
  	                var interval = getInterval();
  	                var np = numPages();
  	                // 这个辅助函数返回一个处理函数调用有着正确page_id的pageSelected。
  	                var getClickHandler = function(page_id) {
  	                    return function(evt) {
  	                        return pageSelected(page_id, evt);
  	                    }
  	                }
  	                //辅助函数用来产生一个单链接(如果不是当前页则产生span标签)
  	                var appendItem = function(page_id, appendopts) {
  	                    page_id = page_id < 0 ? 0 : (page_id < np ? page_id : np - 1); // 规范page id值
  	                    appendopts = $.extend({
  	                        text: page_id + 1,
  	                        classes: ""
  	                    }, appendopts || {});
  	                    if (page_id == current_page) {
  	                        var lnk = $("<span class='active'>" + (appendopts.text) + "</span>");
  	                        if (appendopts.classes) lnk = $("<span>" + (appendopts.text) + "</span>");
  	                    } else {
  	                        var lnk = $("<a>" + (appendopts.text) + "</a>")
  	                            .bind("click", getClickHandler(page_id))
  	                            .attr('href', opts.link_to.replace(/__id__/, page_id));
  	                    }
  	                    if (appendopts.classes) {
  	                        lnk.addClass(appendopts.classes);
  	                    }
  	                    panel.append(lnk);
  	                }
  	                // 产生"Previous"-链接
  	                if (prev_text && (current_page > 0 || opts.prev_show_always)) {
  	                    appendItem(current_page - 1, {
  	                        text: prev_text,
  	                        classes: "prev"
  	                    });
  	                }
  	                // 产生起始点
  	                if (interval[0] > 0 && opts.num_edge_entries > 0) {
  	                    var end = Math.min(opts.num_edge_entries, interval[0]);
  	                    for (var i = 0; i < end; i++) {
  	                        appendItem(i);
  	                    }
  	                    if (opts.num_edge_entries < interval[0] && opts.ellipse_text) {
  	                        $("<span>" + opts.ellipse_text + "</span>").appendTo(panel);
  	                    }
  	                }
  	                // 产生内部的些链接
  	                for (var i = interval[0]; i < interval[1]; i++) {
  	                    appendItem(i);
  	                }
  	                // 产生结束点
  	                if (interval[1] < np && opts.num_edge_entries > 0) {
  	                    if (np - opts.num_edge_entries > interval[1] && opts.ellipse_text) {
  	                        $("<span>" + opts.ellipse_text + "</span>").appendTo(panel);
  	                    }
  	                    var begin = Math.max(np - opts.num_edge_entries, interval[1]);
  	                    for (var i = begin; i < np; i++) {
  	                        appendItem(i);
  	                    }

  	                }
  	                // 产生 "Next"-链接
  	                if (next_text && (current_page < np - 1 || opts.next_show_always)) {
  	                    appendItem(current_page + 1, {
  	                        text: next_text,
  	                        classes: "next"
  	                    });
  	                }

  	                if (!opts.goto) {
  	                    jQuery("<span class='goto'><input name='goto' value='' type='text' /><i>Go to page</i></span>").appendTo(panel);

  	                    panel.find(".goto").on("input propertychange keypress", "input:text", function(event) {
  	                        var $this = $(this);
  	                        var num = parseInt($this.val());
  	                        if (!(/(^[0-9]\d*$)/.test(num)) || !num || num == 0) {
  	                            num = 1;
  	                            $this.val("");
  	                        }
  	                        (num > numPages()) && (num = numPages());
  	                        if (event.keyCode == 13 || event.keyCode == 27) {
  	                            pageSelected(num - 1, event);
  	                        }
  	                    }).on("click", "i", function(event) {
  	                        var $this = $(this).prev();
  	                        var num = parseInt($this.val());
  	                        if (!(/(^[0-9]\d*$)/.test(num)) || !num || num == 0) {
  	                            num = 1;
  	                            $this.val("");
  	                            return;
  	                        }
  	                        (num > numPages()) && (num = numPages());
  	                        pageSelected(num - 1, event);
  	                    });
  	                }
  	            }

  	            //从选项中提取current_page
  	            var current_page = opts.current_page;
  	            //创建一个显示条数和每页显示条数值
  	            maxentries = (!maxentries || maxentries < 0) ? 1 : maxentries;
  	            opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0) ? 1 : opts.items_per_page;
  	            //存储DOM元素，以方便从所有的内部结构中获取
  	            var panel = $(this);
  	            // 获得附加功能的元素
  	            this.selectPage = function(page_id) {
  	                pageSelected(page_id);
  	            }
  	            this.prevPage = function() {
  	                if (current_page > 0) {
  	                    pageSelected(current_page - 1);
  	                    return true;
  	                } else {
  	                    return false;
  	                }
  	            }
  	            this.nextPage = function() {
  	                if (current_page < numPages() - 1) {
  	                    pageSelected(current_page + 1);
  	                    return true;
  	                } else {
  	                    return false;
  	                }
  	            }
  	            // 所有初始化完成，绘制链接
  	            drawLinks();
  	            // 回调函数

  	            opts.callback(current_page, this);
  	        });
  	    }
  	})(jQuery);


  	$(function() {
  	    if ($("#range").length > 0) {
  	        var str_range = window.location.href;
  	        var curren_obj = CurrencyCfg[$.cookie('currency')];
  	        var pto = Math.ceil(($('#pto').val() * curren_obj[0]).toFixed(curren_obj[3]));
  	        var pfrom = parseInt(($('#pfrom').val() * curren_obj[0]).toFixed(curren_obj[3]));
  	        var maxPrice = Math.ceil(($('#maxPrice').val() * curren_obj[0]).toFixed(curren_obj[3]));
  	        var minPrice = parseInt(($('#minPrice').val() * curren_obj[0]).toFixed(curren_obj[3]));
  	        var usmaxPrice = $('#usmaxPrice').val();
  	        var usminPrice = $('#usminPrice').val();
  	        if (minPrice == 0) {
  	            minPrice = 1;
  	        }
  	        var formatSign = $('#formatSign').val();
  	        var currentUrl = $('#currentUrl').val();
  	        //currentUrl = currentUrl.replace(/price-(.*)/,'');
  	        var isSearch = false;
  	        if (currentUrl.indexOf("\/search\/") >= 0) {
  	            isSearch = true;
  	            currentUrl = currentUrl.replace(/\?(.*)/, '');
  	        }
  	        $("#range").ionRangeSlider({
  	            hide_min_max: true,
  	            keyboard: true,
  	            min: minPrice,
  	            max: maxPrice,
  	            type: 'double',
  	            from: pfrom,
  	            to: pto,
  	            step: 1,
  	            prefix: CurrencyCfg[$.cookie('currency')][1] ? CurrencyCfg[$.cookie('currency')][1] : formatSign,
  	            grid: true,
  	            grid_num: 1,
  	            onFinish: function() {

  	                //3、价格进度条 ：price
  	                var gasource = $('#gasource').attr("data-gasource");
  	                ga('send', 'event', gasource, 'Price', 'Price', 1);
  	                var sumit_obj = CurrencyCfg[$.cookie('currency')];
  	                /*var result_from = parseInt($(".irs-from").text().replace(" ", "").substr(this.prefix.length));
  	                var result_to = parseInt($(".irs-to").text().replace(" ", "").substr(this.prefix.length));*/
  	                var result_from = parseInt((ionRange.result.from / sumit_obj[0]).toFixed(curren_obj[3]));
  	                var result_to = Math.ceil((ionRange.result.to / sumit_obj[0]).toFixed(curren_obj[3]));
  	                if (result_from && result_to) {

  	                    if (isSearch == true) {
  	                        window.location.href = $.addABTestingParam(currentUrl + "?pfrom=" + result_from + "&pto=" + result_to);
  	                    } else {
  	                        if (/\/new-arrivals\//.test(location.href)) {
  	                            var pro_search = "&pfrom=" + result_from + "&pto=" + result_to;
  	                            var href = location.origin + location.pathname + (location.search ? location.search.replace(/(pfrom=[^&]*&?)|(pto=[^&]*&?)/g, '') : '?') + pro_search + location.hash;
  	                            window.location.href = $.addABTestingParam(href);
  	                        } else {
  	                            if (currentUrl.match(/\/price-.{0,}\//)) {
  	                                window.location.href = $.addABTestingParam(currentUrl.replace(/\/price-.{0,}\//, "/price-" + result_from + "-" + result_to + "/"));
  	                            } else {
  	                                window.location.href = $.addABTestingParam(currentUrl + "price-" + result_from + "-" + result_to + "/");
  	                            }
  	                        }

  	                    }
  	                }

  	            }
  	        });
  	        window.ionRange = $("#range").data("ionRangeSlider");

  	    }
  	    $(document).on("click", ".head .currency .box li, .goods_main_tabs .currency .box li", function() {
  	        var currency = $(this).attr("sel");
  	        var path = window.location.pathname;
  	        var old_currency = '';
  	        if (path == '/checkout.html') {
  	            var old_currency = $.setCurrency.getCookieCurrency();
  	        }
  	        $.setCurrency.setSpCookieCurrency(currency, -1);
  	        $.setCurrency.doSelCurrency(currency);
  	        var spCurrency = ["CZK", "MXN", "THB", "ZAR", "KRW", "CLP"];
  	        if (path == '/checkout.html' && ($.inArray(old_currency, spCurrency) != -1 || $.inArray(currency, spCurrency) != -1)) {
  	            window.location.href = path;
  	        }
  	        /*var sign = eval('CurrencyCfg.' + currency + '[1]');
  	         //Price Range
  	         $('.sale_box .box td span').html(sign);
  	         var hasTr = $(".sale_box table tr.has");
  	         hasTr.find('td').eq(0).nextAll().remove();

  	         var signHtml = sign +' '+ currency + '<i></i>';
  	         var singObj = $(this).parents(".currency").find("strong");
  	         if(signHtml == singObj.html()) return;
  	         singObj.html(signHtml);
  	         $(".price,.price_old").each(function(){
  	         $.setCurrency.autoChangePrice($(this), currency, true);
  	         });
  	         $(".price_number").each(function(){
  	         $.setCurrency.autoChangePrice($(this), currency);
  	         });
  	         //设置Cookies币种
  	         $.setCurrency.setCookieCurrency(currency);*/
  	        if ($("#range").length > 0) {
  	            var change_obj = CurrencyCfg[$(this).attr("sel")];
  	            var change_min = parseInt(($('#minPrice').val() * change_obj[0]).toFixed(change_obj[3]));
  	            var change_max = Math.ceil(($('#maxPrice').val() * change_obj[0]).toFixed(change_obj[3]));
  	            var change_pre = change_obj[1];
  	            var change_form = parseInt(($('#pfrom').val() * change_obj[0]).toFixed(change_obj[3]));
  	            var change_to = Math.ceil(($('#pto').val() * change_obj[0]).toFixed(change_obj[3]));
  	            if (change_form == 0) {
  	                ionRange.update({
  	                    min: change_min,
  	                    max: change_max,
  	                    from: change_min,
  	                    to: change_max,
  	                    prefix: change_pre,
  	                });

  	            } else {
  	                ionRange.update({
  	                    min: change_min,
  	                    max: change_max,
  	                    prefix: change_pre,
  	                    from: change_form,
  	                    to: change_to,
  	                    prefix: change_pre,
  	                });
  	            }
  	        }

  	    });
  	})


  	//主导航栏hover延时处理
  	$(function channelHover(time) {
  	    $(".channel li").HoverDelay({
  	        hoverDuring: time,
  	        outDuring: time,
  	        hoverEvent: function(obj) {
  	            return function() {
  	                $obj = $(obj);
  	                if ($obj.index() == $(".channel li:last").index()) {
  	                    $obj.children('div').addClass('last_spe');
  	                }
  	                var index = $obj.index(),
  	                    $div = $obj.children('div'),
  	                    divWidth = $div.width();
  	                marginLeft = parseInt(divWidth / 2),
  	                    objWidth = $obj.css('text-align') === 'left' ? $('a:first', obj).width() : $obj.outerWidth(),
  	                    /*cssData = {
  	                    	width: $(window).width(),
  	                    	marginLeft: marginLeft * -1,
  	                    	left: objWidth / 2
  	                    },*/
  	                    cssData = {
  	                        width: $(window).width(),
  	                        left: -$obj.offset().left
  	                    },
  	                    $ul = $obj.closest('ul'),
  	                    wrapRight = $ul.width() + $ul.offset().left;
  	                var objRight;
  	                // if(index > 1 && index < 6 && $('.banner_menu a', obj).length > 1){
  	                // 	cssData.marginLeft = -200;
  	                // }
  	                // 下拉菜单居右的位置 = 下拉菜单的宽带 / 2 + 导航菜单的左边距 + 导航菜单的宽度 / 2
  	                objRight = divWidth + cssData.marginLeft + $obj.offset().left + objWidth / 2;
  	                if (objRight > wrapRight) { // 如果下拉菜单的右边距超出页面范围，则设置为页面内容右边对齐
  	                    cssData.marginLeft -= (objRight - wrapRight);
  	                }
  	                if (objRight - divWidth < $ul.offset().left) { // 如果，下拉菜单的左边距超出了页面范围，则设置为左对齐
  	                    cssData.marginLeft = $ul.offset().left - $obj.offset().left - objWidth / 2;
  	                }
  	                $div.css(cssData).show();
  	                $obj.find('i').css({
  	                    left: objWidth / 2,
  	                    marginLeft: '-4px'
  	                }).show();
  	                $('.banner_menu img', $obj).each(function() {
  	                    if ($(this).data('original')) {
  	                        this.src = $(this).data('original');
  	                        delete $(this).data('original');
  	                    }
  	                });
  	            }
  	        },
  	        outEvent: function(obj) {
  	            return function() {
  	                obj = $(obj);
  	                obj.children("div").hide();
  	                obj.find("i").hide();
  	            }
  	        }
  	    });
  	})

  	//给标签随机加颜色
  	function rankTags(obj) {
  	    obj = $(obj);
  	    var before_rand = '';
  	    obj.each(function() {
  	        var x = 9;
  	        var y = 0;
  	        var rand = parseInt(Math.random() * (x - y + 1) + y);
  	        if (rand == before_rand) {
  	            rand = rand + 1;
  	        }
  	        $(this).addClass("ranktags" + rand);
  	        before_rand = rand;
  	    });
  	}




  	function history_func() {
  	    $('.histroy_del').click(function() {
  	        var location_url = window.location.protocol + '//' + window.location.host + '/' + 'index.php';
  	        var histroy_name = $(this).attr('data');

  	        $.ajax({
  	            url: location_url,
  	            timeout: 10000,
  	            type: 'get',
  	            dataType: 'json',
  	            data: 'com=ajax&t=delSearchHistory&keywords=' + histroy_name,
  	            success: function(obj) {},
  	            complete: function(XMLHttpRequest, status) {
  	                if (status == 'timeout') {
  	                    ajaxTimeoutTest.abort();
  	                }
  	            }
  	        });
  	        $(this).parent().remove();
  	    });

  	    $('.clear_all_history').click(function() {
  	        var location_url = window.location.protocol + '//' + window.location.host + '/' + 'index.php';
  	        $.ajax({
  	            url: location_url,
  	            timeout: 10000,
  	            type: 'get',
  	            dataType: 'json',
  	            data: 'com=ajax&t=delAllSearchHistory',
  	            success: function(obj) {},
  	            complete: function(XMLHttpRequest, status) {
  	                if (status == 'timeout') {
  	                    ajaxTimeoutTest.abort();
  	                }
  	            }
  	        });
  	        $sList.html('');
  	    });
  	}

  	/*
  		$(document).on("click",".search_result_list .quick_tips li",function(){
  			var url = $(this).attr('url');
  			$(".search_result_list .quick_tips").hide();
  			var keywords = $(this).html().replace(/<u>(.*)<\/u>/ig, '');
  			keywords = $(this).html().replace(/<u (.*)>(.*)<\/u>/ig, '');
  			keywords = keywords.replace(/(<[a-z0-9\/]+>)+/ig, '');
  			$(".serach_keyword").val(keywords);
  			window.location.href=url;
  		});
  		
  		$(document).on("click",".search_result_list .quick_tips li u",function(event){
  			event.stopPropagation();
  		});*/




  	$(document).ready(function() {
  	    $('.category_content_goods .img img').hover(
  	        function() {
  	            var newImg = $(this).attr('cover');
  	            if (newImg) {
  	                $(this).attr('src', newImg);
  	            }
  	        },
  	        function() {
  	            var oriImg = $(this).attr('ori');
  	            if (oriImg) {
  	                $(this).attr('src', oriImg);
  	            }
  	        }
  	    );

  	    if ($(".category_content").length > 0) {
  	        if (window.screen.width < 768) {
  	            $(".category_content").addClass('ph_style');
  	        }
  	    }
  	});




  	/* add 2015-09-29 xzh start*/
  	$(document).on('click', '.quantity_select .quantity_box span', function() {
  	    change_qty_val($(this));
  	    changeQty($(this));
  	}).on("keypress", ".box #qty", function(event) {
  	    if (event.keyCode == "13") {
  	        inputQty($(this));
  	    }
  	}).on("blur", ".box #headQty", function() {
  	    inputQty($(this));
  	}).on("focus", ".box #headQty", function() {
  	    if (!this.oldValue) {
  	        this.oldValue = this.value;
  	    }
  	});

  	/* add 2016-06-07 hmh start*/
  	$(document).on('click', '.discount_item_wrap .quantity_box span', function() {
  	    change_package_qty_val($(this));
  	    changePackageQty($(this));
  	}).on("keypress", ".box #qty", function(event) {
  	    if (event.keyCode == "13") {
  	        inputPackageQty($(this));
  	    }
  	}).on("blur", ".box .headQty", function() {
  	    inputPackageQty($(this));
  	});

  	function change_package_qty_val(o) {
  	    var qty_val = o.siblings("input[type=text]");
  	    var num = parseInt(qty_val.val());


  	    if (o.hasClass("next")) {
  	        num++;
  	    } else if (o.hasClass("prev")) {
  	        if (num > 1) {
  	            num--;
  	        }
  	    }
  	    qty_val.val(num);
  	}

  	function change_qty_val(o) {
  	    var qty_val = o.siblings("input[type=text]");
  	    var num = parseInt(qty_val.val());
  	    var is_clear = parseInt(qty_val.attr("clearstock")) == 1 ? true : false;
  	    if (!qty_val[0].oldValue) {
  	        qty_val[0].oldValue = num;
  	    }

  	    if (o.hasClass("next")) {
  	        //判断是否是清仓，同时也是fd产品？
  	        if (is_clear) {
  	            var maximum = parseInt(qty_val.attr("maximum"));
  	            if (qty_val.hasClass('_hasflash')) {
  	                var buylimit = parseInt(qty_val.attr('buylimit'));
  	                buylimit = buylimit > maximum ? maximum : buylimit;
  	                if (num >= buylimit) {
  	                    qty_val.attr('value', buylimit);
  	                    o.addClass("gray");
  	                    o.parent('.quantity_box').parent('p').siblings(".maximum").css("display", "block");
  	                    return false;
  	                } else {
  	                    num++;
  	                    o.removeClass("gray");
  	                    o.parent('.quantity_box').parent('p').siblings(".maximum").css("display", "none");
  	                }
  	            }
  	        }

  	        //是否有flash deals产品并进行限购,同时不是清仓产品
  	        if (qty_val.hasClass('_hasflash') && !is_clear) {
  	            var buylimit = parseInt(qty_val.attr('buylimit'));
  	            if (num >= buylimit) {
  	                qty_val.attr('value', buylimit);
  	                o.addClass("gray");
  	                o.parent('.quantity_box').parent('p').siblings(".maximum").css("display", "block");
  	                return false;
  	            } else {
  	                num++;
  	                o.removeClass("gray");
  	                o.parent('.quantity_box').parent('p').siblings(".maximum").css("display", "none");
  	            }
  	        }
  	        if ((!is_clear || (is_clear && num < parseInt(qty_val.attr("maximum")))) && !qty_val.hasClass('_hasflash')) {
  	            num++;
  	        }
  	    } else if (o.hasClass("prev")) {
  	        if (ajaxisWsPro_fn('car_lst', {
  	                qty: num,
  	                dome: qty_val
  	            }) && num > 1) {
  	            num--;
  	        }
  	    }
  	    qty_val.val(num);
  	    check_btn_status(o.parent());
  	}

  	/*function check_btn_package_status(o){
  		var qty_val=o.children("input[type=text]");
  		var num=parseInt(qty_val.val());		

  		_this.children(".next").removeClass("gray");
  		
  		if(num==1){
  			o.children(".prev").addClass("gray");
  		}else{
  			o.children(".prev").removeClass("gray");
  		}
  		
  	}*/


  	function check_btn_status(o) {
  	    var qty_val = o.children("input[type=text]");
  	    var num = parseInt(qty_val.val());
  	    var is_clear = parseInt(qty_val.attr("clearstock")) == 1 ? true : false;
  	    if (parseInt(qty_val.attr("maximum")) > 1) {
  	        if (is_clear && num >= parseInt(qty_val.attr("maximum"))) {
  	            o.children(".next").addClass("gray");
  	            o.siblings("b.maximum").addClass("active");
  	        } else {
  	            o.children(".next").removeClass("gray");
  	            o.siblings("b.maximum").removeClass("active");
  	        }

  	        if (num == 1) {
  	            o.children(".prev").addClass("gray");
  	        } else {
  	            o.children(".prev").removeClass("gray");
  	        }
  	    } else {
  	        o.children("span").addClass("gray");
  	    }
  	}

  	var bagTime

  	function changeQty(o) {
  	    clearTimeout(bagTime);
  	    bagTime = setTimeout(
  	        function() {
  	            var warehouse = o.siblings("input[type=text]").attr('warehouse');
  	            var cart_id = o.siblings("input[type=text]").attr('cart_id');
  	            var qty = parseInt(o.siblings("input[type=text]").val());
  	            changeTopBagQty(warehouse, cart_id, qty);
  	        },
  	        500);
  	}

  	function changePackageQty(o) {
  	    clearTimeout(bagTime);
  	    bagTime = setTimeout(
  	        function() {
  	            var cart_id = o.siblings("input[type=text]").attr('package_id');
  	            var qty = parseInt(o.siblings("input[type=text]").val());
  	            changeTopBagPackageQty(cart_id, qty);
  	        },
  	        500);
  	}

  	function inputQty(o) {
  	    var warehouse = o.attr('warehouse');
  	    var cart_id = o.attr('cart_id');
  	    var qty = parseInt(o.val());
  	    var oldQty = parseInt(o.attr('oldQty'));
  	    var maxN = parseInt(o.attr('maximum'));
  	    var is_clear = parseInt(o.attr("clearstock")) == 1 ? true : false;
  	    var is_wsUser = parseInt(o.attr("clearstock")) == 1 ? true : false;
  	    var buylimit = parseInt(o.attr("buylimit"));
  	    if (qty < 1 || isNaN(qty) || (is_clear && qty > maxN)) {
  	        ZSAlert('Please input a valid number.', '', 'Ok');
  	        o.val(oldQty);
  	        return;
  	    } else if (is_clear && o.hasClass("_hasflash")) { //判断是清仓产品 同时也是fd产品
  	        buylimit = buylimit > maxN ? maxN : buylimit;
  	        qty = qty > buylimit ? buylimit : qty;
  	        o.attr('oldQty', qty);
  	    } else if (!is_clear && o.hasClass("_hasflash")) { //仅仅是fd产品
  	        qty = qty > buylimit ? buylimit : qty;
  	        o.attr('oldQty', qty);
  	        // } else if (is_wsUser && o.hasClass("_hasflash")) { // 如果是ws客户，并眀是fd产品
  	        // 	qty = qty>buylimit ? buylimit : qty;
  	        // 	o.attr('oldQty',qty);
  	    } else {
  	        o.attr('oldQty', qty);
  	    }
  	    o.val(qty);
  	    check_btn_status(o.parent());
  	    changeTopBagQty(warehouse, cart_id, qty);
  	}

  	function inputPackageQty(o) {

  	    var cart_id = o.attr('package_id');
  	    var qty = parseInt(o.val());
  	    var oldQty = parseInt(o.attr('oldQty'));

  	    if (qty < 1 || isNaN(qty)) {
  	        ZSAlert('Please input a valid number.', '', 'Ok');
  	        o.val(oldQty);
  	        return;
  	    } else {
  	        o.attr('oldQty', qty);
  	    }
  	    changeTopBagPackageQty(cart_id, qty);
  	}

  	function changeTopBagPackageQty(cart_id, qty) {
  	    if (cart_id.length > 0 && qty >= 1) {
  	        var data = 'com=shopcart&t=changeHeaderPackageQty';
  	        data += '&cart_id=' + cart_id;
  	        data += '&qty=' + qty;
  	        $.ajax({
  	            url: '/index.php',
  	            type: 'get',
  	            data: data,
  	            dataType: 'json',
  	            success: function(result) {
  	                $('.submit .subtotal .total_price').attr('oriPrice', result.oriProductTotal);
  	                $('.submit .subtotal .total_price').html(result.productTotal);
  	                $('#head_cart_num').html(result.shopcart_num);
  	                if (typeof(page_reFlash) != 'undefined' && page_reFlash == 1) {
  	                    location.reload(true);
  	                }
  	            }
  	        });
  	    }
  	}

  	function changeTopBagQty(warehouse, cart_id, qty) {
  	    var save = function() {
  	        if (ajaxisWsPro_fn('slide_car', {
  	                qty: qty,
  	                dome: $('[cart_id="' + cart_id + '"]')
  	            })) {
  	            qty = $('[cart_id="' + cart_id + '"]').attr('wsbuymin');
  	        }
  	        if (cart_id.length > 0 && qty >= 1) {
  	            var data = 'com=shopcart&t=changeHeaderQty';
  	            data += '&warehouse=' + warehouse;
  	            data += '&cart_id=' + cart_id;
  	            data += '&qty=' + qty;
  	            $.ajax({
  	                url: '/index.php',
  	                type: 'get',
  	                data: data,
  	                dataType: 'json',
  	                success: function(result) {
  	                    //var currency = $.setCurrency.getCookieCurrency();
  	                    /*$(".quantity_select .ids").each(function(){
  	                    	if($(this).attr("data-id") == result.id){
  	                    		var str = '';
  	                    		if(typeof(result.SpecialProduct.special) && result.SpecialProduct.special==1){
  	                    			str =special;
  	                    		}
  	                    		$(this).siblings(".special").html(str);
  	                    		
  	                    		
  	                    		//var nowFinalPrice = $.setCurrency.getPriceByCurrency(result.final_price, currency, true);
  	                    		$(this).html(result.format_final_price);
  	                    		$(this).attr("oriprice",result.final_price);
  	                    		
  	                    		if(result.SpecialProduct){
  	                    			$(this).parent("p").siblings("div.tip_save").html(result.SpecialProduct.specialMessage);
  	                    		}
  	                    	}
  	                    	
  	                    });
  	                    $('.submit .subtotal .total_price').attr('oriPrice', result.oriProductTotal);
  	                    $('.submit .subtotal .total_price').html(result.productTotal);					
  	                    $('#head_cart_num').html("("+result.shopcart_num+")");
  	                    if(result.ori_flack){
  	                    	$(".full-reduction #flack").attr("oriprice", result.ori_flack);
  	                    	$(".full-reduction #flack").text(result.flack);
  	                    	$(".full-reduction #fprice").attr("oriprice", result.ori_fprice);
  	                    	$(".full-reduction #fprice").text(result.fprice);
  	                    	$(".full-reduction #fsave").attr("oriprice", result.ori_fsave);
  	                    	$(".full-reduction #fsave").text(result.fsave);
  	                    	$(".full-reduction").show();
  	                    }else{
  	                    	$(".full-reduction").hide();
  	                    }*/
  	                    $("#head_cart_num").html("(" + result.count + ")");
  	                    $(".bag .box").html(result.bagHtml);
  	                    ajaxisWsPro_fn('fun_gray');

  	                    if (typeof(page_reFlash) != 'undefined' && page_reFlash == 1) {
  	                        location.reload(true);
  	                    }
  	                }
  	            });
  	        }
  	    };

  	    var $input = $('input[cart_id="' + cart_id + '"]');
  	    if ($input.hasClass('_hasflash')) {

  	        $.ajax({
  	            url: '/ajaxload/shopcart-canChangeQty.html?qty=' + qty + '&cart_id=' + cart_id + '&warehouse=' + warehouse + '&prenum=' + $input[0].oldValue,
  	            dataType: 'json',
  	            beforeSend: function() {
  	                ZSLoad('', '');
  	            },
  	            complete: function() {
  	                $.ZSmsgBox._hide();
  	            },
  	            success: function(res) {
  	                if (res.code == 0) {
  	                    $.alert(res.msg);
  	                    $input.val($input[0].oldValue);
  	                } else {
  	                    save();
  	                }
  	            }

  	        });
  	    } else {
  	        save();
  	    }

  	}

  	$(window).scroll(function() {
  	    var scrollTop = $(window).scrollTop(),
  	        $top_ad = $('.top_ad'),
  	        $top = $('.top'),
  	        $cate_nav = $('.cate_nav');
  	    if (!$top.length) {
  	        return;
  	    }
  	    if (scrollTop > 0) {
  	        $top_ad.hide();
  	    } else {
  	        $top_ad.show();
  	    }
  	    /*	if ($top.length) {
  	    		if (scrollTop > $top.offset().top + $top.outerHeight() - $('.head').height()) {
  	    			$cate_nav.addClass('cate_nav_fixed');
  	    					 
  	    		} else {
  	    			$cate_nav.removeClass('cate_nav_fixed');
  	    		}
  	    	}*/

  	    if ($('.act_nav_wrap').length > 0) {
  	        $(".wrap .topic_goods h4 span").each(function() {
  	            if ($(this).offset().top - scrollTop < 100) {
  	                $(".nav_in ul li a[href=#" + $(this).attr("id") + "]").parent().addClass("active").siblings("li").removeClass("active");
  	            };
  	        });
  	    }

  	});

  	/* add 2015-09-29 xzh end*/

  	/*$(document).ready(function(){
  		if($.cookie('_ISCN')===undefined){
  			$.ajax({
  				type: 'POST',
  				data: 'com=ajax&t=isCn',
  				url: '/index.php',
  				success: function(){}
  			});
  			var isCN = $.cookie('_ISCN');
  			if(isCN=='n'){$('#isNotCN').show();}else{$('#s_beian').show();}
  		}else{
  			var isCN = $.cookie('_ISCN');
  			if(isCN=='n'){$('#isNotCN').show();}else{$('#s_beian').show();}
  		}
  	});*/

  	//var stopmax = true;
  	//var stopmin = true;
  	/* next and prev start */
  	/*$(document).on("click",".quantity_select .next",function(){	
  		var obj = $(this);
  		var maxN = parseInt(obj.prev(":text").attr("maximum"));		
  		var num = parseInt(obj.prev(":text").val());
  		if(!(/(^[0-9]\d*$)/.test(num)) || !num  || num == 0){
  			num = 1;
  		}
  		num += 1;
  		if(num > 1)	obj.siblings(".prev").removeClass('gray');
  		
  		if(num >= maxN){
  			obj.addClass('gray');
  			obj.parents(".quantity_box").siblings(".maximum").addClass("active");			
  		} 	
  		if(num> maxN){
  			stopmax = false;
  			return false;
  		}
  		obj.prev(":text").val(num);
  		obj.prev(":text").attr('oldQty', num);
  	});
	
  	$(document).on('click','.quantity_box span',function(){
  		qty=$(this).siblings("input[type=text]");
  		var max_num=parseInt(qty.attr("maximum"));		
  		var num=1;
  		if(num<max_num&&num>0){
  			if($(this).hasClass("prev")){
  				num--;
  			}else{
  				num++;
  			}
  		}
  		qty.val(num);
  	});


  	$(document).on("click",".quantity_select .prev",function(){	

  		var obj=$(this);

  		if(!obj.hasClass("gray")){		
  			var maxN = parseInt(obj.next(":text").attr("maximum"));
  			var num = parseInt(obj.next(":text").val());
  			if(!(/(^[0-9]\d*$)/.test(num)) || !num  || num == 0){
  				num = 1;
  			}
  			
  			num -= 1;
  			if(num<maxN) obj.siblings(".next").removeClass("gray");			
  			if(num == 0){
  				obj.addClass('gray');
  				stopmin = false;
  				return false;
  			}
  			if(num == 0)num=1;
  			obj.next(":text").val(num);
  			obj.next(":text").attr('oldQty', num);
  			obj.prev("b").removeClass("active");
  			
  		}else{
  			return false;
  		}
  	});*/



  	//改变购物袋数量  +
  	/*$(document).on('click', '.box .quantity_select .next', function(){
  		if(stopmax == true){
  			clearTimeout(bagTime);
  			var $this = $(this);
  			bagTime = setTimeout(
  				function(){
  					var warehouse = $this.prev(":text").attr('warehouse');
  					var cart_id = $this.prev(":text").attr('cart_id');
  					var qty = parseInt($this.prev(":text").val());
  					changeTopBagQty(warehouse, cart_id, qty);
  				},
  			500);
  		}
  	});*/

  	//改变购物袋数量  -
  	/*$(document).on('click', '.box .quantity_select .prev', function(){
  		if(stopmin == true){
  			clearTimeout(bagTime);
  			var $this = $(this);
  			bagTime = setTimeout(
  				function(){
  					var warehouse = $this.next(":text").attr('warehouse');
  					var cart_id = $this.next(":text").attr('cart_id');
  					var qty = parseInt($this.next(":text").val());
  					changeTopBagQty(warehouse, cart_id, qty);
  				},
  			500);
  		}
  	});*/

  	//手写输入改变数量




  	/*$(document).on("keypress",".box #qty",function(event){
  		if(event.keyCode == "13")
  		{
  			var warehouse = $(this).attr('warehouse');
  			var cart_id = $(this).attr('cart_id');
  			var qty = parseInt($(this).val());
  			var oldQty = parseInt($(this).attr('oldQty'));
  			var maxN = parseInt($(this).attr('maximum'));
  			if(qty < 1 || isNaN(qty) || qty > maxN){
  				ZSAlert('Please input a valid number.','','Ok');
  				$("#maximum_"+cart_id).addClass("active");
  				$(this).val(oldQty);
  				return;
  			}else{
  				$(this).attr('oldQty', qty);
  			}
  			check_btn_status($(this).parent());
  			changeTopBagQty(warehouse, cart_id, qty);	
  		}
  	});
	
  	$(document).on("blur",".box #qty",function(event){
  		var warehouse = $(this).attr('warehouse');
  		var cart_id = $(this).attr('cart_id');
  		var qty = parseInt($(this).val());
  		var oldQty = parseInt($(this).attr('oldQty'));
  		var maxN = parseInt($(this).attr('maximum'));
  		if(qty < 1 || isNaN(qty) || pty > maxN){
  			$("#maximum_"+cart_id).addClass("active");
  			ZSAlert('Please input a valid number.','','Ok');
  			$(this).val(oldQty);
  			return;
  		}else{
  			$(this).attr('oldQty', qty);
  		}
  		check_btn_status($(this).parent());
  		changeTopBagQty(warehouse, cart_id, qty);
  	});
  	*/

  	/* 改变头部购物车数量 */
  	/*function changeTopBagQty(warehouse, cart_id, qty){
  		if(cart_id.length > 0 && qty >= 1){
  			var data = 'com=shopcart&t=changeHeaderQty';
  			data += '&warehouse='+warehouse;
  			data += '&cart_id='+cart_id;
  			data += '&qty='+qty;
  			$.ajax({
  				url:'/index.php',
  				type : 'get',
  				data :data,
  				dataType:'json',
  				success:function(result){
  					$('.submit .subtotal .total_price').attr('oriPrice', result.oriProductTotal);
  					$('.submit .subtotal .total_price').html(result.productTotal);
  					//$("#price_"+cart_id).html(result.itemTotalPrice);
  					//$("#price_"+cart_id).attr("oriprice", total_price);
  					$('#head_cart_num').html(result.shopcart_num);
  					if(parseInt($(".qty_"+cart_id).val()) > 1){
  						$(".qty_"+cart_id).prev(".prev").removeClass("gray");
  						$(".qty_"+cart_id).next(".next").removeClass("gray");
  					}else{
  						$(".qty_"+cart_id).prev(".prev").addClass("gray");
  					}
  					$("#maximum_"+cart_id).removeClass("active");	
  				} 
  			});
  		}
  	}*/


  	// ZSdialog
  	!(function() {
  	    var _count = 0,
  	        _expando = new Date() * 1,
  	        _isIE6 = !('minWidth' in $('html')[0].style),
  	        _isFixed = !_isIE6;

  	    var dialog_config = {
  	        autofocus: true,
  	        backdropBackground: '#000',
  	        backdropOpacity: 0.55,
  	        content: '<span class="dialog-loading">Loading...</span>',
  	        title: '',
  	        statusbar: '',
  	        button: null,
  	        ok: null,
  	        cancel: null,
  	        okValue: 'ok',
  	        cancelValue: 'cancel',
  	        cancelDisplay: true,
  	        width: '',
  	        height: '',
  	        padding: '',
  	        skin: '',
  	        fixed: false,
  	        align: 'bottom',
  	        quickClose: false,
  	        cssUri: '',
  	        className: 'ZSdialog',
  	        autoClose: false,
  	        innerHTML: '<div i="dialog" class="zs-dialog">' +
  	            '<div class="zs-dialog-arrow-a"></div>' +
  	            '<div class="zs-dialog-arrow-b"></div>' +
  	            '<table class="zs-dialog-grid">' +
  	            '<tr>' +
  	            '<td i="header" class="zs-dialog-header">' +
  	            '<button i="close" class="zs-dialog-close">&#215;</button>' +
  	            '<div i="title" class="zs-dialog-title"></div>' +
  	            '</td>' +
  	            '</tr>' +
  	            '<tr>' +
  	            '<td i="body" class="zs-dialog-body">' +
  	            '<div i="content" class="zs-dialog-content"></div>' +
  	            '</td>' +
  	            '</tr>' +
  	            '<tr>' +
  	            '<td i="footer" class="zs-dialog-footer">' +
  	            '<div i="statusbar" class="zs-dialog-statusbar"></div>' +
  	            '<div i="button" class="zs-dialog-button"></div>' +
  	            '</td>' +
  	            '</tr>' +
  	            '</table>' +
  	            '</div>'
  	    };

  	    function dialog(options, ok, cancel) {
  	        options = $.extend(true, {}, dialog.defaults, options);
  	        var id = options.id = options.id || _expando + '-' + _count,
  	            api = dialog.get(id);

  	        // 如果存在同名的对话框，直接返回
  	        if (api) {
  	            return api.focus();
  	        }

  	        // 主流移动设备支付fixed不友好，禁用此特性
  	        if (!_isFixed) {
  	            options.fixed = false;
  	        }

  	        // 按钮组
  	        if (!$.isArray(options.button)) {
  	            options.button = [];
  	        }

  	        // 确定按钮
  	        if (ok !== undefined) {
  	            options.ok = ok;
  	        }
  	        if (options.ok) {
  	            options.button.push({
  	                id: 'ok',
  	                value: options.okValue,
  	                callback: options.ok,
  	                autofocus: true
  	            });
  	        }

  	        // 取消按钮
  	        if (cancel !== undefined) {
  	            options.cancel = cancel;
  	        }
  	        if (options.cancel) {
  	            options.button.push({
  	                id: 'cancel',
  	                value: options.cancelValue,
  	                callback: options.cancel,
  	                display: options.cancelDisplay
  	            });
  	        }



  	        return dialog.current = dialog.list[id] = new dialog.create(options);
  	    }
  	    dialog.create = function(options) {
  	        var me = this;

  	        // 更新 zIndex 全局配置
  	        if (options.zIndex) {
  	            dialog.zIndex = options.zIndex;
  	        }

  	        // 弹窗内容

  	        this.node = this._node = $('<div />')
  	            .css({
  	                display: 'none',
  	                outline: 0,
  	                zIndex: dialog.zIndex
  	            })
  	            .attr('tabindex', '-1')
  	            .html(options.innerHTML)
  	            .appendTo('body');



  	        // 遮罩层
  	        this.__backdrop = $('<div />')
  	            .css({
  	                opacity: options.backdropOpacity,
  	                background: options.backdropBackground
  	            });

  	        if (options.quickClose) {
  	            this.modal = true;
  	            this.__backdrop.css('opacity', 0);
  	        }

  	        this.options = options;

  	        $.each(options, function(name, value) {
  	            if (typeof me[name] === 'function') {
  	                me[name](value);
  	            } else {
  	                me[name] = value;
  	            }
  	        });
  	        // 点击任意空白处关闭对话框
  	        if (options.quickClose) {
  	            this.__backdrop
  	                .on(
  	                    'onmousedown' in document ? 'mousedown' : 'click',
  	                    function() {
  	                        me._trigger('cancel');
  	                        return false; // 阻止抢夺焦点
  	                    });
  	        }

  	        // ESC 快捷键关闭对话框
  	        this._esc = function(event) {
  	            var target = event.target;
  	            var nodeName = target.nodeName;
  	            var rinput = /^input|textarea$/i;
  	            var isTop = dialog.current === me;
  	            var keyCode = event.keyCode;

  	            // 避免输入状态中 ESC 误操作关闭
  	            if (!isTop || rinput.test(nodeName) && target.type !== 'button') {
  	                return;
  	            }

  	            if (keyCode === 27) {
  	                me._trigger('cancel');
  	            }
  	        };
  	        $(document).on('keydown', this._esc);


  	        // 关闭按钮
  	        this._$('close')
  	            .css('display', this.cancel === false ? 'none' : '')
  	            .attr('title', this.cancelValue)
  	            .on('click', function(event) {
  	                me._trigger('cancel');
  	                event.preventDefault();
  	            });

  	        // 添加视觉参数
  	        options.skin && this._$('dialog').addClass(options.skin);
  	        options.padding && this._$('body').css('padding', options.padding);

  	        _count++;

  	        return this;
  	    };
  	    dialog.create.prototype = dialog.prototype;

  	    $.extend(dialog.prototype, {
  	        destroyed: false,
  	        _$: function(i) {
  	            return this._node.find('[i=' + i + ']');
  	        },
  	        show: function(anchor) {
  	            if (this.destroyed) {
  	                return this;
  	            }
  	            var me = this,
  	                _node = this._node,
  	                options = this.options;

  	            this.__activeElement = this.__getActive();

  	            this.open = true;
  	            this.follow = anchor || this.follow;

  	            // 初始化 show 方法
  	            if (!this.__ready) {
  	                if (this.modal) {
  	                    var backdropCss = {
  	                        position: 'fixed',
  	                        left: 0,
  	                        top: 0,
  	                        width: '100%',
  	                        height: '100%',
  	                        overflow: 'hidden',
  	                        userSelect: 'none',
  	                        zIndex: this.zIndex || dialog.zIndex
  	                    };
  	                    this.node.addClass(this.className + '-modal');

  	                    if (!_isFixed) {
  	                        $.extend(backdropCss, {
  	                            position: 'absolute',
  	                            width: $(window).width(),
  	                            height: $(document).height()
  	                        });
  	                    }

  	                    this.__backdrop
  	                        .css(backdropCss)
  	                        .addClass(this.className + '-backdrop')
  	                        .insertBefore(this.node);

  	                }
  	                if (!_isIE6) {
  	                    $(window).on('resize', $.proxy(this.reset, this));
  	                }
  	                this._node
  	                    .addClass(this.className)
  	                    .css('position', this.fixed ? 'fixed' : 'absolute');
  	                this.__ready = true;
  	            }

  	            this._node

  	                .show()
  	                .addClass(this.className + '-show');

  	            this.__backdrop.show();

  	            this.__dispatchEvent('show');

  	            this.reset().focus();

  	            if (options.autoClose) {
  	                setTimeout(function() {
  	                    me._node && me.remove();
  	                }, options.autoClose * 1000);
  	            }
  	            return this;
  	        },
  	        showModal: function(anchor) {
  	            this.modal = true;
  	            return this.show.apply(this, arguments);
  	        },
  	        close: function() {
  	            if (!this.destroyed && this.open) {
  	                this._node.hide()
  	                    .removeClass(this.className + '-show');
  	                this.__backdrop.hide();
  	                this.open = false;
  	                this.__dispatchEvent('close');
  	            }

  	            return this;

  	        },
  	        remove: function() {
  	            if (this.destroyed) {
  	                return this;
  	            }

  	            this._node.remove();
  	            this.__backdrop.remove();
  	            this.destroyed = true;

  	            delete dialog.list[this.id];

  	            if (dialog.current === this) {
  	                dialog.current = null;
  	            }

  	            if (!_isIE6) {
  	                $(window).off('resize', this.reset);
  	            }

  	            this.__dispatchEvent('remove');

  	            for (var i in this) {
  	                delete this[i];
  	            }

  	            return this;
  	        },
  	        reset: function() {
  	            var elm = this.follow;
  	            if (elm) {
  	                this.__follow(elm);
  	            } else {
  	                this.__center();
  	            }
  	            this.__dispatchEvent('reset');
  	            return this;
  	        },

  	        // 赋值
  	        // 标题
  	        title: function(text) {
  	            this._$('title').html(text);
  	            this._$('header')[text ? 'show' : 'hide']();
  	            return this;
  	        },

  	        // 内容
  	        content: function(html) {
  	            this._$('content').html(html);
  	            return this;
  	        },

  	        // 宽度
  	        width: function(value) {
  	            this._$('content').width(value);
  	            return this.reset();
  	        },

  	        // 高度
  	        height: function(value) {
  	            this._$('content').height(value);
  	            return this.reset();
  	        },

  	        // 按钮
  	        /**
  	         * 设置按钮组
  	         * @param   {Array, String}
  	         * Options: value, callback, autofocus, disabled 
  	         */
  	        button: function(args) {
  	            args = args || [];
  	            var me = this,
  	                html = '',
  	                number = 0;
  	            this.callbacks = {};
  	            if (typeof args === 'string') {
  	                html = args;
  	                number++;
  	            } else {
  	                $.each(args, function(i, val) {
  	                    var id = val.id = val.id || val.value,
  	                        style = '';
  	                    me.callbacks[id] = val.callback;

  	                    if (val.display === false) {
  	                        style = ' style="display:none"';
  	                    } else {
  	                        number++;
  	                    }
  	                    html +=
  	                        '<button type="button" ' +
  	                        '	i-id="' + id + '"' +
  	                        style +
  	                        (val.disabled ? ' disabled' : '') +
  	                        (val.autofocus ? ' autofocus class="zs-dialog-autofocus"' : '') +
  	                        '>' +
  	                        val.value +
  	                        '</button>';
  	                    me._$('button')
  	                        .on('click', '[i-id="' + id + '"]', function(event) {
  	                            var $this = $(this);
  	                            if (!$this.attr('disabled')) {
  	                                me._trigger(id);
  	                            }
  	                            event.preventDefault();
  	                        });
  	                });
  	            }

  	            this._$('button').html(html);
  	            this._$('footer')[number ? 'show' : 'hide']();
  	            return this;
  	        },

  	        // 让浮层获得焦点
  	        focus: function() {
  	            var node = this.node,
  	                current = dialog.current,
  	                index = this.zIndex = dialog.zIndex++;

  	            if (current && current !== this) {
  	                current.blur(false);
  	            }

  	            // 检查焦点是否在浮层里面
  	            if (!$.contains(node, this.__getActive())) {
  	                var autofocus = node.find('[autofocus]')[0];

  	                if (!this._autofocus && autofocus) {
  	                    this._autofocus = true;
  	                } else {
  	                    autofocus = node;
  	                }

  	                this.__focus(autofocus);
  	            }

  	            // 设置叠加高度
  	            node.css('zIndex', index)
  	                .addClass(this.className + '-focus');

  	            dialog.current = this;
  	            this.__dispatchEvent('focus');

  	            return this;

  	        },

  	        /** 让浮层失去焦点。将焦点退还给之前的元素，照顾视力障碍用户 */
  	        blur: function() {

  	            var activeElement = this.__activeElement,
  	                isBlur = arguments[0];


  	            if (isBlur !== false) {
  	                this.__focus(activeElement);
  	            }

  	            this._autofocus = false;
  	            this._node.removeClass(this.className + '-focus');
  	            this.__dispatchEvent('blur');

  	            return this;
  	        },

  	        // 派发事件
  	        __dispatchEvent: function(type) {
  	            if (this['on' + type]) {
  	                this['on' + type]();
  	            }
  	        },

  	        // 触发按钮回调事件
  	        _trigger: function(id) {
  	            var fn = this.callbacks[id];

  	            return typeof fn !== 'function' || fn.call(this) !== false ? this.close().remove() : this;
  	        },

  	        // 指定位置
  	        __follow: function(anchor) {
  	            var $elm = anchor.parentNode && $(anchor),
  	                node = this._node;
  	            if (this.__followSkin) {
  	                node.removeClass(this.__followSkin);
  	            }

  	            // 隐藏元素不可用
  	            if ($elm) {
  	                var o = $elm.offset();
  	                if (o.left * o.top < 0) {
  	                    return this.__center();
  	                }
  	            }

  	            var me = this,
  	                fixed = this.fixed,

  	                $win = $(window),
  	                $doc = $(document),
  	                winWidth = $win.width(),
  	                winHeight = $win.height(),
  	                docLeft = $doc.scrollLeft(),
  	                docTop = $doc.scrollTop(),

  	                nodeWidth = node.width(),
  	                nodeHeight = node.height(),
  	                width = $elm ? $elm.outerWidth() : 0,
  	                height = $elm ? $elm.outerHeight() : 0,
  	                offset = this.__offset(anchor),
  	                x = offset.left,
  	                y = offset.top,
  	                left = fixed ? x - docLeft : x,
  	                top = fixed ? y - docTop : y,

  	                minLeft = fixed ? 0 : docLeft,
  	                minTop = fixed ? 0 : docTop,
  	                maxLeft = minLeft + winWidth - nodeWidth,
  	                maxTop = minTop + winHeight - nodeHeight,

  	                css = {},
  	                align = this.align.split(' '),
  	                className = this.className + '-',
  	                reverse = {
  	                    top: 'bottom',
  	                    bottom: 'top',
  	                    left: 'right',
  	                    right: 'left'
  	                },
  	                name = {
  	                    top: 'top',
  	                    bottom: 'top',
  	                    left: 'left',
  	                    right: 'left'
  	                },

  	                temp = [{
  	                    top: top - nodeHeight,
  	                    bottom: top + height,
  	                    left: left - nodeWidth,
  	                    right: left + width
  	                }, {
  	                    top: top,
  	                    bottom: top - nodeHeight + height,
  	                    left: left,
  	                    right: left - nodeWidth + width
  	                }],

  	                center = {
  	                    left: left + width / 2 - nodeWidth / 2,
  	                    top: top + height / 2 - nodeHeight / 2
  	                },

  	                range = {
  	                    left: [minLeft, maxLeft],
  	                    top: [minTop, maxTop]
  	                };

  	            // 超出可视区域重新适应位置
  	            $.each(align, function(i, val) {

  	                // 超出右或下边界：使用左或者上边对齐
  	                if (temp[i][val] > range[name[val]][1]) {
  	                    val = align[i] = reverse[val];
  	                }

  	                // 超出左或右边界：使用右或者下边对齐
  	                if (temp[i][val] < range[name[val]][0]) {
  	                    align[i] = reverse[val];
  	                }

  	            });


  	            // 一个参数的情况
  	            if (!align[1]) {
  	                name[align[1]] = name[align[0]] === 'left' ? 'top' : 'left';
  	                temp[1][align[1]] = center[name[align[1]]];
  	            }


  	            //添加follow的css, 为了给css使用
  	            className += align.join('-') + ' ' + this.className + '-follow';

  	            me.__followSkin = className;


  	            if ($elm) {
  	                node.addClass(className);
  	            }


  	            css[name[align[0]]] = parseInt(temp[0][align[0]]);
  	            css[name[align[1]]] = parseInt(temp[1][align[1]]);
  	            node.css(css);
  	        },

  	        // 居中
  	        __center: function() {
  	            var _node = this._node,
  	                $win = $(window),
  	                $doc = $(document),
  	                fixed = this.fixed,
  	                width = _node.width(),
  	                height = _node.height(),
  	                winWidth = $win.width(),
  	                winHeight = $win.height(),
  	                docLeft = fixed ? 0 : $doc.scrollLeft(),
  	                docTop = fixed ? 0 : $doc.scrollTop(),
  	                cssObj = {
  	                    left: (winWidth - width) / 2 + docLeft,
  	                    top: (winHeight - height) * 382 / 1000 + docTop // 黄金比例
  	                };
  	            _node.css(cssObj);

  	        },

  	        // 获取元素相当于页面上的位置
  	        __offset: function(anchor) {
  	            var isNode = anchor.parentNode,
  	                offset = isNode ? $(anchor).offset() : {
  	                    left: anchor.pageX,
  	                    top: anchor.pageY
  	                };
  	            return offset;
  	        },

  	        // 对元素安全聚焦
  	        __focus: function(elem) {
  	            // 防止 iframe 跨域无权限报错
  	            // 防止 IE 不可见元素报错
  	            try {
  	                // ie11 bug: iframe 页面点击会跳到顶部
  	                if (this.options.autofocus && !/^iframe$/i.test(elem.nodeName)) {
  	                    elem.focus();
  	                }
  	            } catch (e) {}
  	        },


  	        // 获取当前焦点的元素
  	        __getActive: function() {
  	            try { // try: ie8~9, iframe #26
  	                var activeElement = document.activeElement;
  	                var contentDocument = activeElement.contentDocument;
  	                var elem = contentDocument && contentDocument.activeElement || activeElement;
  	                return elem;
  	            } catch (e) {}
  	        }
  	    });
  	    dialog.get = function(id) {
  	        return dialog.list[id];
  	    };
  	    dialog.getCurrent = function(id) {
  	        return dialog.current;
  	    };
  	    dialog.defaults = $.extend({}, dialog.config || {}, dialog_config);
  	    dialog.list = {};
  	    dialog.current = null;
  	    dialog.zIndex = 1024;

  	    window.ZSdialog = dialog;

  	})();

  	$.renderTimeCountDown = function(data) {
  	    var format = function(time) {
  	        return ('0' + time).slice(-2);
  	    };
  	    // 购物车,购物车列表，产品详情
  	    $('.time_left', '.head .bag_list, .cart_deals, .clock, .save_for_later').html('<i></i> <span class="cl_d">' + data.day + '</span> : <span class="cl_h">' + data.hour + '</span> : <span class="cl_m">' + data.minute + '</span> : <span class="cl_s">' + data.second + '</span>');
  	    // deal页面
  	    $('.time_left', '.deal-item-list').html('<i></i> <span class="cl_d">' + data.day + '</span> : <span class="cl_h">' + data.hour + '</span> : <span class="cl_m">' + data.minute + '</span> : <span class="cl_s">' + data.second + '</span> ' + $('.time_left:first', '.deal-item-list').data('end'));
  	    $('#todayTitle strong').html('<span class="cl_d">' + data.day + 'd</span>: <span class="cl_h">' + data.hour + 'h</span>: <span class="cl_m">' + data.minute + 'm</span>: <span class="cl_s">' + data.second + 's</span>');
  	    $('#index-deal-timer').html('<span>' + format(data.day) + '</span><span>' + format(data.hour) + '</span><span>' + format(data.minute) + '</span><span>' + format(data.second) + '</span>');
  	    $('.time-left-landing-page .timer-flash-deal').text(format(data.day) + 'D:' + format(data.hour) + 'H:' + format(data.minute) + 'M:' + format(data.second) + 'S');
  	    $('.time-left', '.cart_box').text(format(data.day) + ':' + format(data.hour) + ':' + format(data.minute) + ':' + format(data.second));
  	    $('#category_page_timer').html('<span class="d use_time">' + format(data.day) + '</span><span class="str">:</span><span class="h use_time">' + format(data.hour) + '</span><span class="str">:</span><span class="m use_time">' + format(data.minute) + '</span><span class="str">:</span><span class="s use_time">' + format(data.second) + '</span>');
  	    $('.brand-deals-container .time_left, .brand-deals-sider .time_left').html('<span>' + format(data.day) + '</span><span>' + format(data.hour) + '</span><span>' + format(data.minute) + '</span><span>' + format(data.second) + '</span>');
  	};
  	// 时间倒计时 参数:一个时分秒的集合
  	function timeCountDown(num) {
  	    var day = Math.floor(num / (60 * 60 * 24)),
  	        hour = Math.floor(num / (60 * 60) - day * 24),
  	        minute = Math.floor(num / 60 - day * 24 * 60 - hour * 60),
  	        second = Math.floor(num - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60);
  	    return {
  	        day: day,
  	        hour: ('0' + hour).slice(-2),
  	        minute: ('0' + minute).slice(-2),
  	        second: ('0' + second).slice(-2)
  	    };
  	}
  	// 获取 flash deals 产品 时间倒计时
  	function getDealsCountDown(options) {
  	    if (window.dealsCountDown) { // 如果已经调用这个了，就不再调用了。后面的渲染的html直接赋值就是了
  	        return;
  	    } else {
  	        window.dealsCountDown = true;
  	    }
  	    options = $.extend({
  	        // productId: '', //产品id 换换新接口，不要id了 。原来的先不做动作
  	        //selector: '.flash-deals-prodcts', // 通过此标记判断是否有flash deals信息 ,并存放id
  	        container: '.time_left', // 倒计时存放位置。与默认render参数一起用
  	        render: null, // 如何渲染数据 function

  	        callback: function() {
  	            $('.time_left, .fla_icon, .time-left-landing-page').remove();
  	            window.location.reload();
  	        } // 倒计时结束后回调
  	    }, options);
  	    var productId = options.productId;
  	    // if (!productId) {
  	    // 	return;
  	    // }
  	    !options.render && (options.render = function(data) {
  	        $.renderTimeCountDown(data);
  	    });

  	    $.ajax({
  	        url: '/ajaxload/deals-getCurrentTime.html?zmkm=1',
  	        // url: '/index.php?com=product&t=isFlashDealsProducts&products_id=' + productId,
  	        dataType: 'json',
  	        success: function(result) {
  	            if (result.code === 1 /* && result.data.is_deals==1 */ ) {
  	                var timeCount = result.data.activity_time,
  	                    timer = setInterval(function() {
  	                        options.render(timeCountDown(timeCount));
  	                        if (timeCount === 0) {
  	                            clearInterval(timer);
  	                            options.callback && options.callback();
  	                        }
  	                        timeCount--;
  	                    }, 1000);

  	                //$(".deals_cc").addClass("fla_icon");
  	                // $(".clock").css("display","block");
  	                if ($(".addcart").hasClass("dealsguy")) {
  	                    $(".addcart").attr("limitbuy", result.data.limitbuy);
  	                }
  	            }

  	        }
  	    });
  	};
  	$.timeCountDown = timeCountDown;
  	$.getDealsCountDown = getDealsCountDown;

  	function addressCountryCityLinkage(options) {
  	    $.page = $.page || {};
  	    var options = $.extend({ // 值改变后的callback
  	        countryCallback: $.noop,
  	        zoneCallback: $.noop,
  	        cityCallback: $.noop
  	    }, options);
  	    $.extend({
  	        utils: {
  	            getOptsHtml: function(dataList) {
  	                var optsHtml = '<option value=""></option>';
  	                dataList.forEach(function(item) {
  	                    optsHtml += '<option value="' + item.value + '">' + item.key + '</option>';
  	                });
  	                return optsHtml;
  	            }
  	        },
  	        loadCountryState: function(country_id, zone_id, callback) {
  	            if (!country_id) {
  	                $.msg('No national information, please contact customer service', 5);
  	                return;
  	            }

  	            $('input[name="postcode"]').each(function() {
  	                this.placeholder = $('select[name="country_select"] option:selected').data('posttip') || this.placeholder || '';
  	            });

  	            var formatStateData = function(html) {
  	                var $ul = $('<ul></ul>'),
  	                    dataList = [];
  	                $ul.append(html).children().each(function() {
  	                    dataList.push({
  	                        key: $(this).text(),
  	                        value: $(this).attr('sid')
  	                    });
  	                });
  	                if (dataList.length === 0) {
  	                    $.msg('No state information, please contact customer service', 5);
  	                }
  	                return dataList;
  	            };

  	            var getStateData = function() {
  	                $.page.stateData = $.page.stateData || {};
  	                var $select = $('select[name="entry_zone_select"]').siblings('.select-container').loading();
  	                if ($.page.stateData[country_id]) {
  	                    $select.loading(false);
  	                    return;
  	                }
  	                var dtd = $.Deferred();
  	                var data = 'country_id=' + country_id;

  	                $.ajax({
  	                    type: 'get',
  	                    dataType: 'html',
  	                    url: '/ajaxload/ajax-getZonesLi.html?country_id=' + parseInt(country_id),
  	                    success: function(res) {
  	                        if (res === '') {
  	                            $.msg('Request timeout. Please refresh the page and try again', 5);
  	                            dtd.reject();
  	                        } else {
  	                            $.page.stateData[country_id] = formatStateData(res);
  	                            dtd.resolve();
  	                        }

  	                    },
  	                    complete: function() {
  	                        // $stateContainer.loading(false).css('position', 'initial');
  	                        $select.loading(false);
  	                    },
  	                    error: function() {
  	                        $.msg('Request timeout. Please refresh the page and try again', 5);
  	                        dtd.reject();
  	                    }
  	                });
  	                return dtd.promise();
  	            };
  	            $('#entry_city_select').length && $('#entry_city_select').html('').select();
  	            $.when(getStateData())
  	                .then(function() {
  	                    var $select = $('select[name="entry_zone_select"]');

  	                    if (country_id == $('select[name="country_select"]').val()) {
  	                        $select.html($.utils.getOptsHtml($.page.stateData[country_id]));

  	                        zone_id && $select.val(zone_id);

  	                        setTimeout(function() {
  	                            $select.select();
  	                            callback && callback();
  	                        }, 200);
  	                    }
  	                });
  	        },
  	        stateSelect: function() {
  	            $('select[name="entry_zone_select"]').select({
  	                onchange: function() {
  	                    var countryId = $('select[name="country_select"]').val();
  	                    if ($.inArray(Number(countryId), [184, 221, 17, 161, 114]) !== -1) {
  	                        this.data.value && $.citySelect(this.data.value);
  	                    }
  	                    $('#zone_name').val(this.data.text);
  	                    $('#zone_id').val(this.data.value);
  	                },
  	                onclear: function() {
  	                    $('#zone_name').val('');
  	                    $('#zone_id').val('');
  	                }
  	            });
  	        },

  	        citySelect: function(stateId, city_id, callback) {
  	            if (!stateId) return;
  	            var formatCityData = function(html) {
  	                var $ul = $('<ul></ul>'),
  	                    dataList = [];
  	                $ul.append(html).children().each(function() {
  	                    dataList.push({
  	                        key: $(this).text(),
  	                        value: $(this).data('id')
  	                    });
  	                });
  	                return dataList;
  	            };

  	            var getCityData = function() {
  	                $.page.cityData = $.page.cityData || {};
  	                var $select = $('select[name="entry_city_select"]').siblings('.select-container').loading();
  	                if ($.page.cityData[stateId]) {
  	                    $select.loading(false);
  	                    return;
  	                }
  	                var dtd = $.Deferred();
  	                $.ajax({
  	                    type: 'get',
  	                    dataType: 'html',
  	                    url: '/ajaxload/ajax-getCities.html?zone_id=' + parseInt(stateId),
  	                    success: function(res) {
  	                        if (res === '') {
  	                            $.msg('Request timeout. Please refresh the page and try again', 5);
  	                            dtd.reject();
  	                        } else {
  	                            $.page.cityData[stateId] = formatCityData(res);
  	                            dtd.resolve();
  	                        }
  	                    },
  	                    complete: function() {
  	                        $select.loading(false);
  	                    },
  	                    error: function() {
  	                        $.msg('Request timeout. Please refresh the page and try again', 5);
  	                        dtd.reject();
  	                    }
  	                });
  	                return dtd.promise();
  	            };
  	            $.when(getCityData())
  	                .then(function() {
  	                    var $select = $('select[name="entry_city_select"]')
  	                    if (stateId == $('select[name="entry_zone_select"]').val()) {
  	                        $select.html($.utils.getOptsHtml($.page.cityData[stateId]));
  	                        city_id = city_id || $('#entry_city_select').data('default');
  	                        city_id && $select.val(city_id);
  	                        $select.select();
  	                        $('#entry_city_select').removeData('default');
  	                        callback && callback();
  	                    }
  	                });

  	        },
  	        initSelect: function() {
  	            $('select[name="country_select"]').select({
  	                onchange: function() {
  	                    this.data = this.data || {};
  	                    this.data.value && $.loadCountryState(this.data.value);
  	                    $('#entry_city_id').val('');
  	                    if ($.inArray(Number(this.data.value), [184, 221, 17, 161, 114]) !== -1) {
  	                        $('.select-city-wrap').show();
  	                        $('.input-city-wrap').hide();
  	                        $('#entry_city').val('');
  	                    } else {
  	                        $('.select-city-wrap').hide();
  	                        $('.input-city-wrap').show();

  	                    }
  	                    $('#country_box').val(this.data.text);
  	                    $('#country_id').val(this.data.value);
  	                    if ($('#country_id').closest('form')[0].hasValid) {
  	                        $.validator && $('#country_id').valid();
  	                    }
  	                    options.countryCallback && options.countryCallback.call(this);
  	                },
  	                onclear: function() {
  	                    $('select[name="entry_zone_select"], select[name="entry_city_select"]').html('').select();
  	                    $('#country_box, #country_id').val('');
  	                }
  	            });
  	            $('select[name="entry_zone_select"]').select({
  	                onchange: function() {
  	                    this.data = this.data || {};
  	                    var countryId = $('select[name="country_select"]').val();
  	                    if ($.inArray(Number(countryId), [184, 221, 17, 161, 114]) !== -1) {
  	                        this.data.value && $.citySelect(this.data.value);
  	                    }
  	                    $('#zone_name').val(this.data.text);
  	                    $('#state_id').val(this.data.value);
  	                    if ($('#state_id').closest('form')[0].hasValid) {
  	                        $.validator && $('#state_id').valid();
  	                    }
  	                    options.zoneCallback && options.zoneCallback.call(this);
  	                },
  	                onclear: function() {
  	                    $('select[name="entry_city_select"]').html('').select();
  	                    $('#zone_name, #state_id').val('');
  	                }
  	            });
  	            $('select[name="entry_city_select"]').select({
  	                onchange: function() {
  	                    if (this.data) {
  	                        $('#entry_city').val(this.data.text);
  	                        $('#entry_city_id').val(this.data.value);
  	                        if ($('#entry_city').closest('form')[0].hasValid) {
  	                            $.validator && $('#entry_city').valid();
  	                        }
  	                    }
  	                    options.cityCallback && options.cityCallback.call(this);
  	                },
  	                onclear: function() {
  	                    $('#entry_city,#state_id').val('');
  	                }
  	            });
  	        }
  	    });
  	}
  	
  	//批发客户逻辑
  	function ajaxisWsPro_fn(condition, josn) {
  	    var org_qtys = $('.goods_main_quantity .quantity_box #qty[name="qty"]');
  	    var is_wh_user = org_qtys.hasClass('ajaxisWsPro');
  	    switch (true) {
  	        case condition == 'create': //default/js/product.js  ajaxisWsPro_fn('create',result.ajaxisWsPro);
  	            if (josn.availableWsProduct === 1 && josn.buyMinNums) {
  	                var gd_m_lst = $('.pro-buy-container .goods_main_list');
  	                $('.goods_main_price', gd_m_lst).after(josn.ws_view_1);
  	                $('.price_other', gd_m_lst).css('width', $('.price_other_sale', gd_m_lst).width());
  	                $('.price_other', gd_m_lst).after(josn.ws_view);
  	                $('.goods_main_buy .buy_btn').before(josn.ws_view_2);
  	                $('.goods_main .goods_main_buy .buy_btn').addClass('wh_user_buy');
  	                $('.goods_main .goods_main_buy .buy_btn .wh_addcart').fadeIn();

  	                var gd_min_num = parseInt($('.wholesale_min_desc', gd_m_lst).text());
  	                var gm_qu_pa = $('.goods_main_quantity .quantity_box');
  	                var gm_qu_text = $('input[type="text"]', gm_qu_pa).val(josn.buyMinNums).addClass('ajaxisWsPro').attr({
  	                    'availableWsProduct': josn.availableWsProduct,
  	                    'buyMinNums': josn.buyMinNums
  	                });
  	                $('.prev', gm_qu_pa).click(function() {
  	                    if (gm_qu_text.val() <= gd_min_num) {
  	                        $(this).addClass('gray');
  	                    }
  	                })
  	                gm_qu_text.blur(function() {
  	                    if (gm_qu_text.val() <= gd_min_num) {
  	                        $(this).val(gd_min_num).siblings('.prev').addClass('gray');
  	                    }
  	                })
  	                is_wh_user = org_qtys.hasClass('ajaxisWsPro');
  	            }
  	            break;
  	        case condition == 'ajaxisWsPro': //product.js //ajaxisWsPro_fn('ajaxisWsPro'); 选属性
  	            if (is_wh_user && org_qtys.attr('buyMinNums')) {
  	                org_qtys.val(org_qtys.attr('buyMinNums'));
  	            }
  	            break;
  	        case condition == 'num': //ajaxisWsPro_fn('num',{'deom':$o,'num':num})  ZScommon.js
  	            if (josn.deom.siblings('input[availablewsproduct="1"]').length && josn.num <= parseInt(org_qtys.attr('buyMinNums')) && org_qtys.attr('buyMinNums')) {
  	                return true;
  	            } else {
  	                return false;
  	            }
  	            break;
  	        case condition == 'slide_car':
  	            //ajaxisWsPro_fn('slide_car',{qty:qty,dome:$('[cart_id="'+cart_id+'"]')})
  	            if (josn.dome.attr('wsbuymin') && parseInt(josn.dome.attr('wsbuymin')) > 1 && josn.qty <= parseInt(josn.dome.attr('wsbuymin'))) {
  	                var slide_car_wsbuymin = josn.dome.attr('wsbuymin');
  	                josn.dome.val(slide_car_wsbuymin);
  	                return true;
  	            } else {
  	                return false;
  	            }
  	            break;
  	        case condition == 'car_lst':
  	            //ajaxisWsPro_fn('car_lst',{qty:num,dome:qty_val})  default/js/ZScommon.js
  	            if (josn.dome.attr('wsbuymin') && parseInt(josn.dome.attr('wsbuymin')) > 1 && josn.qty <= parseInt(josn.dome.attr('wsbuymin'))) {
  	                var slide_car_wsbuymin = josn.dome.attr('wsbuymin');
  	                josn.dome.val(slide_car_wsbuymin);
  	                josn.dome.siblings('.prev').addClass('gray');
  	                return false;
  	            } else {
  	                return true;
  	            }
  	            break;
  	        case condition == 'fun_gray':
  	            //ajaxisWsPro_fn('fun_gray')  default/js/ZScommon.js

  	            //ajaxisWsPro_fn('fun_gray')  default/shopcart.html     default/js/cart/cart.js
  	            $('.head .bag .box input[wsbuymin],.cart_main .quantity_box input[wsbuymin]').each(function() {
  	                if (parseInt($(this).attr('wsbuymin')) > 1 && parseInt($(this).val()) <= parseInt($(this).attr('wsbuymin'))) {
  	                    $(this).siblings('.prev').addClass('gray');
  	                }
  	            })
  	            break;
  	            //shopping_cart.php 页面的限购直接写页面了 --- qty <= parseInt($o.attr('wsbuymin')) && $o.attr('wsbuymin')
  	    }

  	}

  	function getQueryString(name) {
  	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  	    var r = window.location.search.substr(1).match(reg);
  	    if (r != null) return unescape(r[2]);
  	    return null;
  	};
  	(function($) {
  	    $.page_html = function(url) {
  	        var page_reg = /([^\/]*)[0-9]*(\.html)([^\/?]*)/g;
  	        return url.match(page_reg);
  	    }
  	    $.get_cat = function(url) {
  	        var domain = document.domain,
  	            cat_reg = new RegExp(domain + '/([a-zA-z]{2}/)?([a-zA-z-]+\\-c\\-\\d+|clearance)/', 'i');
  	        return url.match(cat_reg);
  	    }
  	    $.regQuery = function(name) {
  	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  	        var r = window.location.search.substr(1).match(reg);
  	        if (r != null) return unescape(r[2]);
  	        return null;
  	    }
  	    $.regParams = function(url) {
  	        if (!location.search) {
  	            return false;
  	        }
  	        var obj = {};
  	        var reg = /([^?&=]*)=([^?&=]*)/g;
  	        url.replace(reg, function(src, $1, $2) {
  	            obj[$1] = $2;
  	        })
  	        return obj
  	    }
  	    $.regInt = function(val) {
  	        var reg = /^[1-9]\d*$/;
  	        if (reg.test($.trim(val))) {
  	            return true;
  	        } else {
  	            return false;
  	        }
  	    }
  	    $.sum_currency = function(val, ceil) {
  	        var ass_sumit_obj = CurrencyCfg[$.cookie('currency')]; //货币对象
  	        if (ceil) {
  	            return Math.ceil((val / ass_sumit_obj[0]).toFixed(ass_sumit_obj[3]));
  	        }
  	        return parseInt((val / ass_sumit_obj[0]).toFixed(ass_sumit_obj[3]));
  	    }
  	    $.changed_currency = function(val) {
  	        var ass_sumit_obj = CurrencyCfg[$.cookie('currency')]; //货币对象
  	        return parseInt((val * ass_sumit_obj[0]).toFixed(ass_sumit_obj[3]));
  	    }
  	    $.price_link = function() {
  	        var price_reg = /(\/price\-)[0-9]+\-[0-9]+\//gi;
  	        if (price_reg.test(location.pathname)) {
  	            return true;
  	        } else {
  	            return false;
  	        }
  	    }
  	    $(function() {
  	        if ($('.selectFiltersed').length) {
  	            var ass_filters = $('.wrap > .assisted_filters'); //节点父级；
  	            var selectFiltersed = $('.selectFiltersed'); //input隐藏域
  	            var from_input = $('.enter_num input[type="text"]', ass_filters).eq(0);
  	            var to_input = $('.enter_num input[type="text"]', ass_filters).eq(1);
  	            var search_obj = $.regParams(location.search); //是否带参
  	            var ass_reg = /(\/price\-)[0-9]+\-[0-9]+\//gi;
  	            var link_href = location.href;
  	            $('.nav_filters_selected').mouseenter(function() {
  	                if ($('ul', $(this)).length) {
  	                    var filters_ul = $('ul', $(this)).show();
  	                    if ($('li', filters_ul).length > 10) {
  	                        filters_ul.css('width', (filters_ul.width() + 17) + 'px');
  	                    }
  	                    $('h1', $(this)).css('border-bottom', '1px solid transparent');
  	                }
  	            }).mouseleave(function() {
  	                if ($('ul', $(this)).length) {
  	                    $('ul', $(this)).hide().removeAttr('style');
  	                    $('h1', $(this)).removeAttr('style');
  	                }
  	            })
  	            $('.free_icon_all', ".ass_filters").click(function() {
  	                $('i', this).toggleClass('active');
  	            })
  	            $('.enter_num input[type="text"]', ass_filters).blur(function() {
  	                var reg_nums = parseInt($.trim($(this).val()));
  	                if (!$.regInt(reg_nums)) {
  	                    $(this).val('');
  	                } else {
  	                    $(this).val(parseInt($(this).val()));
  	                    var oriprice_data = $.sum_currency(parseInt($(this).val()));
  	                    if (oriprice_data > 0) {
  	                        $(this).attr('oriprice', oriprice_data);
  	                    } else {
  	                        $(this).removeAttr('oriprice');
  	                    }
  	                }
  	            }).attr('placeholder', CurrencyCfg[$.cookie('currency')][1]);
  	            $('.price_sumt', ass_filters).click(function() {
  	                if (!$.trim(from_input.val())) {
  	                    from_input.val($.changed_currency(selectFiltersed.attr('data-min-price')));
  	                }
  	                if (!$.trim(to_input.val())) {
  	                    to_input.val($.changed_currency(selectFiltersed.attr('data-max-price')));
  	                }
  	                var from_doller = parseInt(from_input.val());
  	                var to_doller = parseInt(to_input.val());
  	                if (from_doller > to_doller) {
  	                    from_doller = parseInt(to_input.val());
  	                    to_doller = parseInt(from_input.val());
  	                }
  	                var new_ass_href = '';
  	                var from_ret = $.sum_currency(from_doller) > 0 ? $.sum_currency(from_doller) : 1;
  	                var to_ret = $.sum_currency(to_doller) > 0 ? $.sum_currency(to_doller) : selectFiltersed.attr('data-max-price');
  	                if (location.href.indexOf('/new-arrivals/') < 0) { //通用列表页
  	                    if ($.price_link()) {
  	                        new_ass_href = link_href.replace(ass_reg, '/price-' + from_ret + '-' + to_ret + '/');
  	                    } else {
  	                        if ($.page_html(location.pathname)) {
  	                            new_ass_href = location.href.replace($.page_html(location.pathname)[0], 'price-' + from_ret + '-' + to_ret + '/' + $.page_html(location.pathname)[0])
  	                        } else {
  	                            new_ass_href = link_href.replace(location.pathname, location.pathname + 'price-' + from_ret + '-' + to_ret + '/');
  	                        }
  	                    }
  	                    /* $.cookie('to_doller',to_doller,{path:'/'});
  	                     $.cookie('from_doller',from_doller,{path:'/'});
  	                     $.cookie('now_cat',$.get_cat(location.href),{path:'/'});//当前分类*/
  	                } else if (location.href.indexOf('/new-arrivals/') >= 0) { //新品页
  	                    var link_josn = $.regParams(location.search);
  	                    if (link_josn) {
  	                        link_josn.pfrom = from_ret;
  	                        link_josn.pto = to_ret;
  	                        link_josn.from_currency = from_doller;
  	                        link_josn.to_currency = to_doller;
  	                        new_ass_href = location.href.replace(location.search, '?' + $.param(link_josn));
  	                    } else {
  	                        var link_josn = {};
  	                        link_josn.pfrom = from_ret;
  	                        link_josn.pto = to_ret;
  	                        link_josn.from_currency = from_doller;
  	                        link_josn.to_currency = to_doller;
  	                        new_ass_href = location.href + '?' + $.param(link_josn);
  	                    }
  	                }
  	                location.href = new_ass_href;
  	            })
  	            $(document).on("click", ".head .currency .box li, .goods_main_tabs .currency .box li", function() {
  	                setTimeout(function() {
  	                    var ass_sumit_obj = CurrencyCfg[$.cookie('currency')];
  	                    $('.enter_num input[type="text"]', ass_filters).each(function() {
  	                        if ($(this).attr('oriprice')) {
  	                            $(this).val($.changed_currency($(this).attr('oriprice')) > 0 ? $.changed_currency($(this).attr('oriprice')) : '');
  	                        } else {
  	                            $(this).val('');
  	                        }
  	                    }).attr('placeholder', CurrencyCfg[$.cookie('currency')][1]);

  	                }, 0)
  	            });
  	            $('.free_icon_all', ".assisted_filters").click(function() {
  	                $('i', this).toggleClass('active');
  	            })


  	            //页面加载初始化
  	            if ($.price_link() && location.href.indexOf('/new-arrivals/') < 0) {

  	                var price_reg = /(\/price\-)[0-9]+\-[0-9]+\//gi;
  	                var price_arr = location.pathname.match(price_reg)[0].split('-');
  	                if ($.cookie('from_doller') && location.href.indexOf($.cookie('now_cat')) >= 0 && location.href.indexOf('new-arrivals') < 0) {
  	                    from_input.val($.cookie('from_doller')).attr('oriprice', price_arr[1])
  	                } else {
  	                    from_input.val($.changed_currency(parseInt(price_arr[1])) > 0 ? $.changed_currency(parseInt(price_arr[1])) : '').attr('oriprice', price_arr[1]);
  	                }
  	                if ($.cookie('to_doller') && location.href.indexOf($.cookie('now_cat')) >= 0 && location.href.indexOf('new-arrivals') < 0) {
  	                    to_input.val($.cookie('to_doller')).attr('oriprice', price_arr[2].replace('/', ''));
  	                } else {
  	                    to_input.val($.changed_currency(parseInt(price_arr[2].replace('/', ''))) > 0 ? $.changed_currency(parseInt(price_arr[2].replace('/', ''))) : '').attr('oriprice', price_arr[2].replace('/', ''));
  	                }

  	                $.cookie('from_doller', '', {
  	                    expires: -1,
  	                    path: '/'
  	                });
  	                $.cookie('to_doller', '', {
  	                    expires: -1,
  	                    path: '/'
  	                });
  	                $.cookie('now_cat', '', {
  	                    expires: -1,
  	                    path: '/'
  	                });

  	            } else if ($.regQuery('pfrom') && location.href.indexOf('/new-arrivals/') >= 0) {
  	                var html_json = $.regParams(location.search);
  	                for (hr in html_json) {
  	                    if (hr == 'pfrom') {
  	                        from_input.attr('oriprice', html_json[hr]);
  	                    } else if (hr == 'from_currency') {
  	                        from_input.val(html_json[hr]);
  	                        $('.nav_filters_selected ul a , .free_icon_all', ass_filters).each(function() {
  	                            if ($(this).attr('href').search) {
  	                                $(this).attr('href', $(this).attr('href') + '&from_currency=' + html_json[hr]);
  	                            } else {
  	                                $(this).attr('href', $(this).attr('href') + '?from_currency=' + html_json[hr]);
  	                            }
  	                        })
  	                    } else if (hr == 'pto') {
  	                        to_input.attr('oriprice', html_json[hr]);
  	                    } else if (hr == 'to_currency') {
  	                        to_input.val(html_json[hr]);
  	                        $('.nav_filters_selected ul a , .free_icon_all', ass_filters).each(function() {
  	                            if ($(this).attr('href').search) {
  	                                $(this).attr('href', $(this).attr('href') + '&to_currency=' + html_json[hr]);
  	                            } else {
  	                                $(this).attr('href', $(this).attr('href') + '?to_currency=' + html_json[hr]);
  	                            }

  	                        })
  	                    }
  	                }
  	            }
  	            window.onbeforeunload = function() {
  	                if ($.get_cat(location.href)) {
  	                    $.cookie('now_cat', $.get_cat(location.href)[0], {
  	                        path: '/'
  	                    });
  	                    $.cookie('to_doller', to_input.val(), {
  	                        path: '/'
  	                    });
  	                    $.cookie('from_doller', from_input.val(), {
  	                        path: '/'
  	                    });
  	                }

  	            };
  	        }
  	    })
  	})(jQuery);
  	$(document).ready(function() {
  	    $('.nav_filters_selected > ul').disableScroll();
  	})
  	// 给姓名中的关键词添加下划线
  	$.fn.formatHighLight = function(options) {
  	    if (!$.trim(window.sensitive_word)) {
  	        return;
  	    }
  	    var keyword = (window.sensitive_word || '').split(',');
  	    return this.each(function() {
  	        var options = $.extend({
  	            $text: $('.text', this),
  	            $input: $('input:text', this)
  	        }, options);
  	        var $text = options.$text,
  	            $input = options.$input,
  	            disInput = function() {
  	                var val = $input.val(),
  	                    $p = $('<p></p>');
  	                var regKey = '';
  	                keyword.forEach(function(key, i) {
  	                    keyword[i] = '\\b' + $.trim(key) + '\\b';
  	                });

  	                val = val.replace(new RegExp(keyword.join('|'), 'ig'), function($1) {
  	                    return '<span class="highlight">' + $1 + '</span>';
  	                });
  	                $p.html(val);
  	                if ($p.find('span').length) {
  	                    $text.html($p.html()).css('opacity', 1);
  	                    $input.css('opacity', 0);
  	                }
  	            };
  	        this.onmouseover = function() {
  	            $input.css('opacity', 1);
  	            $text.css('opacity', 0);
  	        };
  	        $(this).mouseenter(function() {
  	            $input.css('opacity', 1);
  	            $text.css('opacity', 0);
  	        }).mouseleave(function() {
  	            if (document.activeElement !== $input[0]) {
  	                disInput();
  	            }
  	        });
  	        $input.blur(function() {
  	            disInput();
  	        });

  	    });
  	};


  	/* ===========================================================
  	GTM
  	* =========================================================== */
  	;
  	(function() {
  	    $.setGTM = {
  	        getGTMParams: function(obj) {
  	            var parents = $(obj).parents(),
  	                domTree = [],
  	                nextUrl = null;
  	            // 去除html、body节点
  	            for (var i = parents.length - 3; i >= 0; i--) {
  	                var $parent = $(parents[i]),
  	                    index = $parent.index(),
  	                    tagName = $parent.context.localName,
  	                    tagClass = $parent.attr('class') || '',
  	                    tagStr = tagClass ? index + tagName + '<' + tagClass + '>' : index + tagName;
  	                if (tagName == 'a') {
  	                    nextUrl = $parent.attr('href');
  	                }
  	                domTree.push(tagStr);
  	            }
  	            var curTagClass = $(obj).attr('class') || '',
  	                curStr = curTagClass ? $(obj).index() + $(obj).context.localName + '<' + curTagClass + '>' : $(obj).index() + $(obj).context.localName;
  	            domTree.push(curStr);
  	            if ($(obj).context.localName == 'a') {
  	                nextUrl = $(obj).attr('href');
  	            }
  	            var domTreeStr = domTree.join('-');
  	            return {
  	                gtm_tag: domTreeStr,
  	                next_url: nextUrl
  	            };
  	        },
  	        pushData: function(params) {
  	            var _params = $.extend({
  	                gtm_tag: '',
  	                next_url: null
  	            }, params);
  	            _params.gtm_tag && window.dataLayer && window.dataLayer.push(_params);
  	        },
  	        trigger: function(obj) {
  	            var params = this.getGTMParams(obj)
  	            this.pushData(params);
  	        }
  	    }
  	})(jQuery);

  	$(document).on('mousedown', 'body', function(event) {
  	    event = event ? event : window.event;
  	    var obj = event.srcElement ? event.srcElement : event.target;
  	    $.setGTM.trigger($(obj));
  	});


  	//订单物流信息
  	$(function() {
  	    $(document).on('mouseenter', '.orders_track_all', function() {
  	        var _that = $(this);
  	        var loading_obj = $('.orderTrackinged');
  	        $('.orders_trackinged', _that).show().closest('.content_box ').addClass('orders_track_cont');
  	        if (parseInt($(this).attr('data-tracking_more')) === 1) {
  	            loading_obj.loading(true);
  	            $(this).attr('data-tracking_more', 0);
  	            $.ajax({
  	                url: '/ajaxload/ajax-getTrackingInfo.html?order_id=' + _that.attr('data-order_id') + '&is_last_html_items=1',
  	                dataType: 'json',
  	                success: function(res) {
  	                    if (res.data && res.data.html) {
  	                        _that.find('.orderTrackinged').html(res.data.html);
  	                    }
  	                    loading_obj.loading(false);
  	                },
  	                complete: function() {
  	                    loading_obj.loading(false);
  	                }
  	            });
  	        }
  	    }).on('mouseleave', '.orders_track_all', function() {
  	        $('.orders_trackinged', this).hide().closest('.content_box ').removeClass('orders_track_cont');
  	    })
  	});
  	// 改页面为原窗口打开
  	//  **对于外链，则不改变它的打开方式
  	//  **如果站内链接欲设置打开方式，则设置 data-target="_blank/_self/_top" 即可
  	$(document).on('mouseenter', 'a', function(e) {
  	    e.preventDefault();
  	    var href = this.href,
  	        flag = $(this).data('target'), //新窗口打开属性
  	        domain = document.domain;
  	    if (flag) {
  	        this.target = flag;
  	        return;
  	    }
  	    if (/javascript/i.test(href) || !new RegExp(domain).test(href)) {

  	    } else {
  	        this.target = '_self';
  	    }

  	});

  	$.extend($.fn, {
  	    getCode: function(code) {
  	        return this.each(function() {
  	            ZSdialog({
  	                title: 'Link Code',
  	                content: '<div class="code-wrap"></div><p class="text-center"><button type="button" class="btn-get-code btn btn-black">Copy Code</button></p>',
  	                skin: 'dialog-affiliate-code',
  	                width: 400,
  	                onshow: function() {
  	                    $('.code-wrap', this.node).text(code);
  	                    $('.btn-get-code', this.node).zclip({
  	                        path: '/templates/default/images/copy-btn/ZeroClipboard.swf',
  	                        copy: function() {
  	                            return code;
  	                        },
  	                        afterCopy: function() {
  	                            $.msg('Copy Successfully!');
  	                        }
  	                    });
  	                }
  	            }).showModal();

  	        });
  	    }
  	});

  	// ga增强型电子商务代码
  	function sendGa(options) {
  	    options = $.extend({
  	        beforeSend: $.noop,
  	        gacallback: $.noop,
  	        callback: $.noop
  	    }, options);
  	    var sendGa = function(arr) {
  	        arr.forEach(function(item) {
  	            window.ga && ga('ec:addProduct', item);
  	            options.gacallback && options.gacallback();
  	        });
  	        options.callback && options.callback();
  	    };
  	    if (window.gaDataLayer) {
  	        try {
  	            if ($.type(window.gaDataLayer) === 'string') {
  	                window.gaDataLayer = (new Function('return ' + window.gaDataLayer))();
  	            }
  	        } catch (e) {
  	            window.gaDataLayer = [];
  	        }
  	        options.beforeSend && options.beforeSend();
  	        sendGa($.type(gaDataLayer) === 'array' ? gaDataLayer : [gaDataLayer]);
  	    }
  	};