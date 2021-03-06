

/**
 *  LAST 2017-3-30 zhong
 */
//Recommend project start
var Rd={
	//需要发送给服务器的参数集合
	C:{},
	//行为标示
	type:['view','search'],
	//会话有效期24分钟
	tm24: 1440000,
	//用户标示有效期1年
	ty1: 31104000000,
	//上级url
	rp: document.referrer.replace(/\$/g,""),
	//当前url
	vp: document.location,
	//hostname 
	site: window.location.host,
	domain: 'newchic.com',
	eventObj: {
		search_click: ['#submit_btn', '.search_result_list .quick_tips li'],
		cart: ['.pro-buy-container .addcart', '.buy_btn .addcart'],
		wish: ['.pro-buy-container .addwish', '.buy_btn .addwish'],
		wish_btn: ['.like_a'],
		review: ['.submit_reviews'],
		share: ['.pro_share a'],
		ask: ['.ask_rang .form_submit :button'],
		paypal: ['#paypalForm'],
		checkout: ['.checkout_btn.proceedCheckout'],
		payCheckout: {
			selector: '.payment_btn_place.checkout_bnt', // 选择器 
			getKey: function(selector) { // 返回的key 
				if ($(selector).hasClass('quick_pay')) {
					return 'paypal_placeOrder';
				} else {
					return 'checkout_' + ($('.payment_list :radio:checked').attr('payment_method') || $('.payment_list :radio:checked').val());
				}
				
			}
		},
		paypal_placeOrder: ['#replyForm .btn_order_checkout']
	},
	
	//cookie写入函数，s：cookie名称，g：要写入的值，p：保存的域名，l：有效期
	setCookie: function(s,g,p,l){
		s=s+"="+g+"; path=/; ";
		l&&(s+="expires="+(new Date(new Date().getTime()+l)).toGMTString()+"; ");
		p&&(s+="domain="+p+";"); 
		document.cookie = s;
	},
	//cookie读取函数，y：cookie名称
	getCookie: function(y){
		for(var g=[],t=document.cookie.split(";"),l=RegExp("^\\s*"+y+"=\\s*(.*?)\\s*$"),s=0;s<t.length;s++){
			var p=t[s]["match"](l);p&&g.push(p[1])
		}
		return g
	},
	// 删除cookie，y：cookie名称
	delCooike: function (y) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval = this.getCookie(y)[0];
		if(cval != null) {
			document.cookie = y + "=" + cval + "; path=' + this.domain + '; expires="+exp.toGMTString();
		}
	},
	//获取url上的query参数,l:参数名，p：url的search
	Gp:function(l,p){
		var s=new RegExp(".*(?:^|&|[?]|[/])"+l+"=([^&]*).*$");
		var g=s.exec(p);
		var result = g?encodeURIComponent(g[1]):"";
		// if (l === 'rmmds') {
		// 	result = rmmds.replace(/-/g,'_');
		// }
		return result;
	},
	//获取地址栏URL的参数值,n: 标签名
	Gup:function(n){
		var s = new RegExp("(^|&)" + n + "=([^&]*)(&|$)");var g = window.location.search.substr(1).match(s);  
		if(g != null){return unescape(g[2])};
	},
	//获取产品页面的产品id，l：url,h:url的host
	Gpid:function(l, h){
		var s = new RegExp(".*/p-([0-9]*)\\.html");
		var g = s.exec(l);
		return g ? encodeURIComponent(g[1]) : 0
	},
	//获取分类页的分类id，l：url,h:url的host
	Gcid:function(l,h){
		var s = new RegExp(".*/c-([0-9]*)[-.]");
		var g = s.exec(l);
		return g ? encodeURIComponent(g[1]) : 0
	},
	//获取(搜索关键词)，l：url,h:url的host
	Gkeyword:function(){
		var s = new RegExp("\\/(search|nc)\\/([^/]*)[.\]");
		var g = s.exec(this.vp);
		return g ? encodeURIComponent(g[2]) : '';
	},
	// 获取URL上的参数
	GUrlSearchObj: function (url) {
		var a = document.createElement('a');
		a.href = url;
		return $.queryToObject(a.search.substring(1));
	},
	//解析上级url
	parseRP:function(obj){
		var a = document.createElement("a");
		a.href = this.rp;
		$.extend(this.C, {
			r_cid: obj.c_id || '',
			r_pid: obj.p_id || '',
			r_bid: this.Gp('bid', a.search) || '',
			r_keywords: this.Gkeyword(a.pathname, a.hostname) || this.GUrlSearchObj(window.location.href).r_keywords || ''
		});


		// var a = document.createElement("a");
		// a.href = rp;
		// // if(a.hostname.indexOf("yoins.com") == -1){return false;}

		// this.C.r_cid      = this.Gcid(a.pathname, a.hostname);
		// this.C.r_bid      = this.Gp('bid', a.search);
		// this.C.r_keywords = this.Gkeyword(a.pathname, a.hostname);
		// this.C.r_pid      = this.Gpid(a.pathname, a.hostname);
	},
	//解析当前url
	parseVP:function(obj){
		$.extend(this.C, {
			// r_position: this.Gp('rmmds', this.vp.search),
			categories_id: obj.c_id || '',
			products_id: obj.p_id|| '',
			banner_id: this.Gp('bid', this.vp.search)|| '',
			site_keywords: this.Gkeyword() || '',
			// ac: this.C.site_keywords ? this.type[1] : this.type[0]
			
		});
		this.C.ac = this.C.site_keywords ? this.type[1] : this.type[0];
		// this.C.r_position    = this.Gp('rmmds', this.vp.search);
		// this.C.banner_id     = this.Gp('bid', w.search);
		// this.C.categories_id = this.Gcid(w.pathname, w.hostname);
		// this.C.products_id   = this.Gpid(w.pathname, w.hostname);
		// this.C.site_keywords = this.Gkeyword(w.pathname, w.hostname);
		// this.C.ac = this.C.site_keywords ? this.type[1] : this.type[0];
	},
	getBasketId: function (proidArrs) {
		var basketIdArrs = [],
			sessId = this.getCookie('rec_sid')[0].split('|')[0],
   			basketData = JSON.parse(localStorage.getItem('basketData') || '{}');
		proidArrs.forEach(function (id) {
			var key = sessId+ '_' + id,
				basketId = key in basketData ? basketData[key].value : 0;
			 basketIdArrs.push(basketId);
		});
		return basketIdArrs;
	},
	// 获取购物车产品
	getCartProducts: function () {
		var idArrs = [],
			$checkboxs = $('#shopcartProduct').find('.cart_deals .cartItemCheckbox.check_on');
		$checkboxs.each(function () {
			idArrs.push($(this).attr('cart_id').split('_')[0]);
		});
		idArrs = $.getUniqueArray(idArrs);
		this.C.basket_id = this.getBasketId(idArrs).join();
		this.C.products_id = idArrs.join();
		if(localStorage) {
			localStorage.setItem('cardIds', this.C.products_id);
		}
	}, 
	// 获取支付页产品
	getPlaceOrderProducts: function () {
		var me = this,
			idArrs = [],
			$urls = $('.goods_list_box').find('.goods_list_item .g_img');
		$urls.each(function () {
			var pid = $(this).attr('href');
			if (!pid) {return;}
			idArrs.push(me.Gpid(pid));
		});
		idArrs = $.getUniqueArray(idArrs);
		this.C.basket_id = this.getBasketId(idArrs).join();
		this.C.products_id = idArrs.join();
	},
	// 判断search事件
	setSearchEventType: function () {
		var vp = window.location.href;
		this.setCookie('search_event', 'true', this.domain, 1000 * 60 * 5); // 5分钟过期
	},
	// 获取search事件的type
	getSearchEventType: function () {
		var vp = window.location.href;
		var regExp = new RegExp(this.domain + '/search/|' + this.domain + '/nc/', 'g');
		if (regExp.test(vp)) {
			if (this.getCookie('search_event').length) {
				this.C.ac = 'search';
			}
		}
	},
	/**
	 * 初始化入口
	 * @return {[type]} [description]
	 */
	init: function(){

		if(this.site.indexOf(this.domain) == -1){ return false; }
		var me = this;
		var rec_position = this.Gp('rmmds', this.vp.search);

		this.C.r_position = rec_position || '';
		this.C.customers_id = this.getCookie('dc_cid')[0] || 0;
		this.C.site = this.site;
		this.C.lang = this.getCookie('_bgLang')[0] || '';
		var u  = this.getCookie('rec_uid'), 
		    u1 = u.length > 0 ? u[0].split('|') : [],
			s  = this.getCookie('rec_sid'), 
			s1 = s.length > 0 ? s[0].split('|') : [];
		if(u1.length > 0){
			this.C.user_id = u1[0] || 0;
			this.C.ft      = u1[1] || 0;
		}
		this.C.sess_id = s1.length > 0 ? s1[0] : 0;
        
        this.C.page_status = window.isNotFountPage ? 404 : 200;
        // 解析来源
		if(this.rp){
			this.C.rp = encodeURIComponent(this.rp);
			// this.parseRP(this.rp);
		}
		this.C.vp = encodeURIComponent(this.vp);
		// this.parseVP(document.location);

		this.collectPagePoint();
        
        // 优先发送未完成的请求
        this.sendLocalData();
        // this.getSearchEventType();
        /**
         *  页面初始化
         *  发送基本信息数据
         */
		this.sendRec();

		if (window.isNotFountPage) {
			var _url = 'https://dc.banggood.com/index.php?com=record&t=collectErrorPage&url=' + this.vp + '&refer=' + this.rp;
			$.getJSON(_url);
		}

        // 点击事件
        // $(document).on("mousedown",this.sizeChart, $.proxy(Rd,"detailAutoClick",this.type[2],this.C.products_id));
        // $(document).on("mousedown",this.addToBag,  $.proxy(Rd,"detailAutoClick",this.type[3],this.C.products_id));
        // $(document).on("mousedown",this.addToWishlist,$.proxy(Rd,"detailAutoClick",this.type[4],this.C.products_id));
        // $(document).on("mousedown",this.addToPaypal,$.proxy(Rd,"detailAutoClick",this.type[5],this.C.products_id));
        // $(document).on("mousedown",this.addToCheckout,$.proxy(Rd,"detailAutoClick",this.type[5],this.C.products_id));
        // $(document).on("mousedown",this.proceedToCheckout,$.proxy(Rd,"detailAutoClick",this.type[6],this.C.products_id));
        // $(document).on("mousedown",this.addToSearch,$.proxy(Rd,"detailAutoClick",this.type[7],this.C.products_id));
        // 
        
        var clickFn = function (type, id) {
        	if (this.rdClicked) {
        		return;
        	} else {
        		this.rdClicked = true;
        	}
        	if (type === 'paypal' || type === 'checkout') {
        		me.getCartProducts();
        	}
			if ( /^checkout_/.test(type) || /^paypal_/.test(type)) {
	    		me.getPlaceOrderProducts();
	    	}
        	if (type === 'cart') {
        		me.C.r_position && me.setCookie('rec_position', me.C.r_position, me.domain, me.ty1);
    
        	}

        	Rd.detailAutoClick(type, id);
        };
        $(document).on('keypress', '#search_form #keywords', function (e) {
        	e = e || window.event;
        	if(e.keyCode === 13) {
        		clickFn.call(this, 'search_click');
        	}
		});
        $.each(this.eventObj, function (key,value) {
        	if(!value) return;
        	
        	switch ($.type(value)) {
        		case 'object':
        			$(document).on('mousedown', value.selector, function () {
        				 clickFn.call(this, value.getKey(this));
        			});
        			break;
        		case 'array':

        			value.forEach(function (item) {
        				var myKey = null;
        				myKey = key;
						$(document).on('mousedown', item, function () {
							var p_id = null;
							if (key === 'wish_btn') {
								myKey = 'wish';
								p_id= $(this).data('productsid'); 
							}
							// if (key === 'search') {
							// 	me.setSearchEventType();
							// } else {
								clickFn.call(this, myKey, p_id);
							// }
							
						});
        			});  
        			break;
        		default: 
        			$(document).on('mousedown', value, function () {
        				clickFn.call(this, key);
        			});
        			break;
        	}

        	
        });
       	
	},
   	/**
     * 收集加入购物车数据 callback
     */
   	storeCartData: function (str) {
   		if (!localStorage) {return;}
   		var sessId = this.getCookie('rec_sid')[0].split('|')[0],
   			data = JSON.parse(localStorage.getItem('basketData') || '{}');
   		if (!/^(\d+_\d+)+/.test(str)) {
   			return;
   		}
   		str.split('&').forEach(function (item) {
   			
   			var arr = item.split('_');
   			if (arr.length === 2 && !!Number(arr[0]) && !!Number(arr[1])) {
   				data[sessId + '_' + arr[1]] = {
   					value:  arr[0],
   					add_time: new Date()
   				};
   			}
   		});

   		// 防止用户只添不生成订单
   		var add_time;
   		for( var key in data) {
   			add_time = new Date(data[key].add_time);
   			if (add_time*1 + 1296000000 < new Date()*1) {
   				delete data[key];
   			}
   		}
   		localStorage.setItem('basketData', JSON.stringify(data));
   	},
    /**
     * 收集点击数据
     */
	detailAutoClick: function(type, id){
		this.clickOperateDate(type, id || this.C.products_id);
	},

	/**
	 * 点击行为数据处理
	 */
	clickOperateDate: function(type, pid){
		var ac = type;
		var r_position = this.C.r_position;
		var idInfo;
		var me = this;
		if ( type === 'paypal' || /^checkout/.test(type) || /^paypal_/.test(type)) {
    		r_position =  this.getCookie('rec_position') || this.C_position || '';
    		if(localStorage) {
				this.C.products_id = this.C.products_id || localStorage.getItem('cardIds') || '';
				idInfo = JSON.parse(localStorage.getItem('cartData'));
				if (idInfo && this.C.products_id) {
					this.C.idInfos = [];
					this.C.products_id.split(/[^\w]/).forEach(function (item) {
						if (item in idInfo) {
							me.C.idInfos.push(idInfo[item]);
							delete idInfo[item];
						}
					});
				}
				localStorage.setItem('cartData', JSON.stringify(idInfo));
			}
    	}

    	pid = pid || this.C.products_id;
		var u  = this.getCookie('rec_uid'), 
		    u1 = u.length > 0 ? u[0].split('|') : [],
			s  = this.getCookie('rec_sid'), 
			s1 = s.length > 0 ? s[0].split('|') : [];
		if(u1.length > 0){
			this.C.user_id = u1[0] || 0;
			this.C.ft      = u1[1] || 0;
		}
		this.C.sess_id = s1.length > 0 ? s1[0] : 0;	

		// this.C.r_position = position;
		// this.C.ac = position;
		this.sendRec({
			products_id: pid,
			ac: ac,
			r_position: r_position
		});
	},
	/**
	 * 采集当前页面数据
	 */
	collectPagePoint: function () {
		var pointData = $('#point-data-field').data() || {};
		var rp = this.getCookie(encodeURIComponent(this.rp)),                                       
			rpData = {};

		if (rp.length) {

			this.delCooike(this.rp);
			rpData = JSON.parse(rp[0]);
			
		}
		this.setCookie(encodeURIComponent(this.vp), JSON.stringify(pointData));
		this.parseVP(pointData || {});
		this.parseRP(rpData || {});
	},
	/**
	 * 数据发送接口
	 * unStorage 不保存请求。防止多次请求
	 */
	sendRec: function(extraParam, unStorage){
		var s='';
		this.C.site = this.site;
		var data = $.extend({},this.C, extraParam || {});
		for(var k in data){
			s +='&'+k+'='+data[k];
		}


		var url=("https:"==document.location.protocol?"https://rec":"http://rec")+".banggood.com/index.php?com=newchic&t=record"+s+"&callback=?";
		$.getJSON(url, this.callback);

		if (!unStorage) {
			this.storageData(data);
		}
		// var nDCclick = function () {
		if (['cart', 'wish'].indexOf(data.ac) !== -1 || /^checkout_|^paypal_/.test(data.ac)) {
			window.nDC && nDC.RecordClick && nDC.RecordClick(data.ac, data.products_id ? data.products_id.toString().split(',') : [], 'NC');
		}
		// };
		// if (document.domain === 'beta5.newchic.com') {
		// 	$.getScript('//dcbeta.banggood.com/js/dc/beta/ncdc.js', 
		// 		nDCclick);
		// } else {
		// 	nDCclick();
		// }
		
	},

	//回调函数
	callback: function(ret){
		var me = this;
		var _t = ret.split('.');
		if( _t.length > 1 ){
			var uid=_t[0]||0,sid=_t[1]||0,st=_t[2]||0,ft=this.C.ft||st;
			this.C.user_id=uid;this.C.sess_id=sid;
			this.setCookie('rec_uid',uid+'|'+ft,this.domain,this.ty1);
			this.setCookie('rec_sid',sid+'|'+st,this.domain,this.ty1);
		}
		this.removeLocalData();
		this.storeCartData(ret.split('.')[3]);
		return true;
	},
	// 保存请求数据
	storageData: function (data) {
		if(localStorage) {
			var rdList = JSON.parse(localStorage.getItem('rdList') || '[]');
			rdList.push(JSON.stringify(data));
			localStorage.setItem('rdList', JSON.stringify(rdList));
		}
	},
	// 发送未完成的请求
	sendLocalData: function () {
		var me = this;
		if(localStorage) {
			var rdList = JSON.parse(localStorage.getItem('rdList') || '[]');
			rdList.forEach(function (item, i) {
				me.sendRec(JSON.parse(item), true);
			});
			localStorage.removeItem('rdList');
		}
	},
	// 删除所有请求
	removeLocalData: function () {
		if(localStorage) {
			localStorage.removeItem('rdList');
		}
	}
};

$(function(){
	$(document).on('mousedown', 'a[data-rmmds]', function () {
		this.href = this.href + (this.search ? '&' : '?') + 'rmmds=' + $(this).data('rmmds');
		// $(this).removeAttr('data-rmmds').removeData('rmmds');
	});
	Rd.init();

	$('.newlst_box .wom_lst_pic a', '.search-result-wrap').click(function () {
		var a_url = $(this).attr('href'),
			regx = /p-(\d*)\.html/g,
			group = regx.exec(a_url),
			name = $('img', this).attr('alt'),
			pos = $(this).closest('.wom_lst_detail').index() + 1;

		var data = {
			pid: group[1],
			type: (window.report_search_data && window.report_search_data <= pos) ? 1 : 2,
			pos: pos,
			'name': name
		};
		sessionStorage.setItem('report_search_click_data', JSON.stringify(data));
	});
});