//
var JGData = {
	//需要发送给服务器的参数集合
	C:{},
	
	//会话有效期24分钟
	tm24:1440000,
	//用户标示有效期1年
	ty1:31104000000,
	//上级url
	referer:document.referrer.replace(/\$/g,""),
	//当前url
	visit_page:document.location.href,
	//hostname
	site:document.location.host,
	//domain
	domain:document.domain.split(".")[1],
	//cookie写入函数，s：cookie名称，g：要写入的值，p：保存的域名，l：有效期
	setCookie:function(s,g,p,l){
		s=s+"="+g+"; path=/; ";
		l&&(s+="expires="+(new Date(new Date().getTime()+l)).toGMTString()+"; ");
		p&&(s+="domain="+p+";");
		document.cookie=s;
	},
	//cookie读取函数，y：cookie名称
	getCookie:function(y){
		for(var g=[],t=document.cookie.split(";"),l=RegExp("^\\s*"+y+"=\\s*(.*?)\\s*$"),s=0;s<t.length;s++){
			var p=t[s]["match"](l);
			p && g.push(p[1]);
		}
		return g.length ? g[0] : undefined;
	},
	//获取url上的query参数,l:参数名，p：url的search
	getQuery:function(l,p){
		var s=new RegExp(".*(?:^|&|[?]|[/])"+l+"=([^&]*).*$");
		var g=s.exec(p);
		return g?encodeURIComponent(g[1]):"";
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
	//获取地址栏URL的参数值,n: 标签名
	Gup:function(n){
		var s = new RegExp("(^|&)" + n + "=([^&]*)(&|$)");var g = window.location.search.substr(1).match(s);  
		if(g != null){return unescape(g[2])};
	},
	//获取产品页面的产品id，l：url,h:url的host
	Gpid:function(l,h){
		var s = new RegExp(".*/p-([0-9]*)\\.html");
		var g = s.exec(l);
		return g ? encodeURIComponent(g[1]) : 0;
	},
	//获取分类页的分类id，l：url,h:url的host
	Gcid:function(l,h){
		var s = new RegExp(".*/c-([0-9]*)[-.]");
		var g = s.exec(l);
		return g ? encodeURIComponent(g[1]) : 0;
	},
	
	//获取关键词，l：url,h:url的host
	Gkeyword:function(l,h){
		var s = new RegExp("\\/(search|nc)\\/([^/]*)[.\]");
		var g = s.exec(this.vp);
		return g ? encodeURIComponent(g[2]) : '';
	},
	//解析上级url
	parseRP:function(referer){
		var a = document.createElement("a");
		a.href = this.rp;
		$.extend(this.C, {
			r_cid: obj.c_id || '',
			r_pid: obj.p_id || '',
			r_bid: this.Gp('bid', a.search) || '',
			r_keywords: this.Gkeyword(a.pathname, a.hostname) || this.GUrlSearchObj(window.location.href).r_keywords || ''
		});
	},
	//解析当前url
	parseVP:function(w){
		$.extend(this.C, {
			categories_id: obj.c_id || '',
			products_id: obj.p_id|| '',
			banner_id: this.Gp('bid', this.vp.search)|| '',
			site_keywords: this.Gkeyword() || '',
			
		});
		this.C.ac = this.C.site_keywords ? this.type[1] : this.type[0];

		// var categories_id = this.Gcid(w.pathname,w.hostname);
		// var products_id = this.Gpid(w.pathname,w.hostname);
		// var brand_id = this.Gbrand(w.pathname,w.hostname);
		// var pStatus = this.C.visit_page.indexOf('.html')<0;
		// var keyfiter = 'banggood.com%2F';
		// var keyfiterlength = keyfiter.length;
		// var firstIndex = this.C.visit_page.indexOf('banggood.com%2F');
		// this.C.visit_group = '';
		// if(this.C.visit_page.substr(firstIndex+keyfiterlength,1)==''){
		// 	this.C.visit_group = this.type[0];
		// }
		// if(categories_id>0){
		// 	this.C.visit_group = this.type[1];
		// }
		// if(products_id>0){
		// 	this.C.visit_group = this.type[3];
		// }
		// if(brand_id>0){
		// 	this.C.visit_group = this.type[4];
		// }

		// for(var pi=0; pi<this.accountfiter.length;pi++){
		// 	if(pStatus && this.C.visit_page.indexOf(this.accountfiter[pi])>-1){
		// 		if(this.accountfiter[pi]=='t%3Dmsn' || this.accountfiter[pi]=='t%3DmyReview'){
		// 			this.C.visit_group = this.accounttype[12];
		// 		}else{
		// 			this.C.visit_group = this.accounttype[pi];
		// 		}
		// 	}
		// }

		// for(var i = 0;i<this.categoryfiter.length;i++){
		// 	if(this.C.visit_page.indexOf(this.categoryfiter[i])>-1){
		// 		this.C.visit_group = this.categoryfitertype[i];
		// 	}
		// }



		// this.C.log_id='';
		// this.C.point_id='';
		// this.C.order_id='';
		// this.C.label='';
		// this.C.action = '';
		// this.C.field1 = '';
		// this.C.number1 = '';
		// this.C.number2 = '';
		// this.C.number3 = '';
		// this.C.number4 = '';
		// this.C.number5 = '';
		// this.C.string1 = '';
		// this.C.string2 = '';
		// this.C.string3 = '';
		// this.C.text1 = '';
		// this.C.text2 = '';
		// this.C.text3 = '';
	},
	// 保存请求数据
	storageData: function (data) {
		if(window.localStorage) {
			var rdList = JSON.parse(localStorage.getItem('jgList') || '[]');
			rdList.push(JSON.stringify(data));
			localStorage.setItem('rdList', JSON.stringify(rdList));
		}
	},
	// 发送未完成的请求
	sendLocalData: function () {
		var me = this;
		if(window.localStorage) {
			var rdList = JSON.parse(localStorage.getItem('jgList') || '[]');
			rdList.forEach(function (item, i) {
				me.sendRec(JSON.parse(item), true);
			});
			localStorage.removeItem('jgList');
		}
	},
	// 删除所有请求
	removeLocalData: function () {
		if(window.localStorage) {
			localStorage.removeItem('jgList');
		}
	},
	init: function(){
		if(this.site.indexOf(this.domain) == -1){ return false; }
		var me = this;
		var userData = (this.getCookie('__bguser') || '').split('|');

		$.extend (this.C, {
			domain: this.domain,
			site: this.site,
			sess_id: userData[1],
			user_id: userData[2],
			visit_page: this.visit_page,
			referer: this.referer,
			customers_id: this.getCookie('dc_cid') || 0,
			info: {}
		});
		
		// 优先发送未完成的请求
        this.sendLocalData();

		$(document).on('mousedown', '[data-point-id]', function () {
			var data = $(this).data(),
				sendData = {
					point_id: data.pointId,
					info: {}
				};
			for(var key in data) {
				if (/^(text\d)|(string\d)$/.test(key)) {
					sendData.info[key] = data[key];
				}
			}
			me.sendRec(sendData);
		});

	},



	/**
	 * 数据发送接口
	 * unStorage 不保存请求。防止多次请求
	 */
	sendRec: function(extraParam, unStorage){
		var s='';
		var s='';
		var data = $.extend({},this.C, extraParam || {});
		data.info = JSON.stringify(data.info);
		for(var k in data){
			s +='&'+k+'='+data[k];
		}
		var g = document.location.protocol + "//dc.banggood.com/index.php?com=sess&t=record"+s+"&callback=?";
		// var g = document.location.protocol + "//dcbeta.banggood.com/index.php?com=sess&t=record"+s+"&callback=?";
		$.getJSON(g, this.callback);
		if (!unStorage) {
			this.storageData(data);
		}
	},
	//回调函数
	callback:function(ret){
		this.removeLocalData();
	}
};

JGData.init();
	