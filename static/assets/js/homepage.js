$(function () {
        $('.fix_slides li.fix_lst').hover(function () {
            $('.fix_slides dl').hide();
            $(this).find('dl').fadeIn().show();
        },function () {
            $('.fix_slides dl').hide();
        })
        if("http://"+window.location.host+"/" === window.location.href){
            $('.gift').removeClass('hidden');
        }

        $('.fix_slides .fix_question').click(function () {
            if($('#surveyUrl').length && $('#surveyUrl').val() != 'login.html'){
                location.href = $('#surveyUrl').val();
            }else{
                location.href = window.location.protocol+'//'+window.location.host+'/'+'login.html';
            }
        })
    });

	var $cate_nav = $('.cate_nav');
    if ($cate_nav.length) {
        var cssTop = $cate_nav.offset().top + 58;
        $('.single_enter').css('top', cssTop);
    }
    var winW = $(window).width(),
        _val = (winW - 1200)/2 - 176 - 20;
    if(winW > 1600) $('.single_enter').css('left', _val);

    $(document).on('click', '.single_enter', function(){

        $(this).find('.enter_handle').addClass('active');
        $(this).find('a').css('pointer-events', 'auto');

        if (winW > 1600) {
            $(this).animate({left: _val}, 300);
        }else {
            $(this).animate({left: 0}, 300);
        }
        set_activity_enter_ga('display_icon_171206');
    });

 $(document).on('click', '.single_enter .enter_handle', function(e){
        var flag = $(this).hasClass('active');
        if (flag) {
            e.stopPropagation();
            $(this).removeClass('active');
            $(this).next().css('pointer-events', 'none');
            $(this).parent().animate({left: '-87px'}, 300);
            set_activity_enter_ga('hidden_icon_171206');
        }
    });

    $(document).on('click', '.single_enter>a', function(e){
        e.stopPropagation();
        set_activity_enter_ga('enter_icon_171206');
    });
	
	$("img.bg_lazy").lazyload({
        placeholder :  "static/assets/images/grey.gif",
        effect      : "fadeIn"
    });
  /*获取来源参数*/
    var source_result = getCookie('__bgqueue');
    var source = source_result.split("|");
    var source_result = new Object();
    source_result.utm_source   = source[1];
    source_result.utm_medium   = source[2];
    source_result.utm_campaign = source[3];
    source_result.utm_content  = source[4];
    source_result.utm_design   = source[5];
    var appleUrl   = $('.app-apple').attr('href');
    var androidUrl = $('.app-android').attr('href');
    var param = urlEncode(source_result);

    $('.app-apple').attr('href',appleUrl+param);
    $('.app-android').attr('href',androidUrl+param);

    function getCookie(c_name)
    {
        if (document.cookie.length>0)
        {
            c_start=document.cookie.indexOf(c_name + "=");
            if (c_start!=-1)
            {
                c_start=c_start + c_name.length+1 ;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1) c_end=document.cookie.length;
                return unescape(document.cookie.substring(c_start,c_end));
            }
        }
        return "";
    }
    /**
     * param 将要转为URL参数字符串的对象
     * key URL参数字符串的前缀
     * encode true/false 是否进行URL编码,默认为true
     *
     * return URL参数字符串
     */
    function urlEncode(param, key, encode) {
        if(param==null) return '';
        var paramStr = '';
        var t = typeof (param);
        if (t == 'string' || t == 'number' || t == 'boolean') {
            paramStr +=  key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param)+'&' ;
        } else {
            for (var i in param) {
                var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
                paramStr += urlEncode(param[i], k, encode);
            }
        }
        return paramStr;
    };

    // A/B测试
    $(document).on('mouseenter', 'a', function () {
        var href = this.href,
            domain = document.domain,
            reg = new RegExp(domain+'/([a-zA-z]{2}/)?([a-zA-z-]+\\-c\\-\\d+)/', 'i');//|clearance|new-arrivals
        if (href.indexOf('javascript:void(0)') >= 0 ||!reg.test(href)) {
            return;
        }

        var sess_id = ($.cookie('rec_sid') || '').split('|')[0];
        var searchObj = $.queryToObject(this.search.substring(1));
        if ('ht' in searchObj) {
            delete searchObj.ht;
        }
        if (sess_id % 2 === 1) {
            searchObj.ht = 1;
            this.search = $.param(searchObj);
        }
    });
	
	 var proShotData = [{"image_id":"3763","image_group_id":"26209","img_url":"static\/assets\/images\/2018011619433056-0.jpg","large_image_url":"static\/assets\/images\/2018011619433056-0.jpg","width":"884","height":"1080"},{"image_id":"3501","image_group_id":"23772","img_url":"static\/assets\/images\/2017122420412579-0.jpg","large_image_url":"static\/assets\/images\/2017122420412579-0.jpg","width":"1080","height":"1080"},{"image_id":"3457","image_group_id":"23129","img_url":"static\/assets\/images\/2017121800433395-0.jpg","large_image_url":"static\/assets\/images\/2017121800433395-0.jpg","width":"1080","height":"1347"},{"image_id":"3448","image_group_id":"23046","img_url":"static\/assets\/images\/2017121601065175-0.jpg","large_image_url":"static\/assets\/images\/2017121601065175-0.jpg","width":"1080","height":"1350"},{"image_id":"3445","image_group_id":"23044","img_url":"static\/assets\/images\/2017121521464710-0.jpg","large_image_url":"static\/assets\/images\/2017121521464710-0.jpg","width":"1080","height":"1080"},{"image_id":"3439","image_group_id":"23037","img_url":"static\/assets\/images\/2017121521180037-0.jpg","large_image_url":"static\/assets\/images\/2017121521180037-0.jpg","width":"1080","height":"1350"},{"image_id":"3260","image_group_id":"20608","img_url":"static\/assets\/images\/2017112203093242-0.jpg","large_image_url":"static\/assets\/images\/2017112203093242-0.jpg","width":"520","height":"520"},{"image_id":"3256","image_group_id":"20605","img_url":"static\/assets\/images\/2017112203052737-0.jpg","large_image_url":"static\/assets\/images\/2017112203052737-0.jpg","width":"520","height":"520"},{"image_id":"3146","image_group_id":"19808","img_url":"static\/assets\/images\/2017111321081534-0.jpg","large_image_url":"static\/assets\/images\/2017111321081534-0.jpg","width":"520","height":"520"},{"image_id":"3122","image_group_id":"19558","img_url":"static\/assets\/images\/2017111003414619-0.jpg","large_image_url":"static\/assets\/images\/2017111003414619-0.jpg","width":"520","height":"520"},{"image_id":"3118","image_group_id":"19554","img_url":"static\/assets\/images\/2017111003392669-0.jpg","large_image_url":"static\/assets\/images\/2017111003392669-0.jpg","width":"520","height":"520"},{"image_id":"2988","image_group_id":"18358","img_url":"https:\/\/img.newchic.com\/share\/shots\/thumb\/2017103001292576-0.jpg","large_image_url":"https:\/\/img.newchic.com\/share\/shots\/large\/2017103001292576-0.jpg","width":"600","height":"600"},{"image_id":"2983","image_group_id":"18302","img_url":"https:\/\/img.newchic.com\/share\/shots\/thumb\/2017102922243496-0.jpg","large_image_url":"static\/assets\/images\/2017102922243496-0.jpg","width":"600","height":"600"},{"image_id":"2978","image_group_id":"18289","img_url":"static\/assets\/images\/2017102922132182-0.jpg","large_image_url":"static\/assets\/images\/2017102922132182-0.jpg","width":"600","height":"600"},{"image_id":"2977","image_group_id":"18197","img_url":"../static\/assets\/images\/2017102705330945-0.jpg","large_image_url":"static\/assets\/images\/2017102705330945-0.jpg","width":"600","height":"600"},{"image_id":"2975","image_group_id":"18195","img_url":"static\/assets\/images\/2017102705284618-0.jpg","large_image_url":"static\/assets\/images\/2017102705284618-0.jpg","width":"600","height":"600"},{"image_id":"2963","image_group_id":"17921","img_url":"./static\/assets\/images\/493_1517371296_792.jpg","large_image_url":"static\/assets\/images\/2017102503433521-0.jpg","width":"520","height":"520"},{"image_id":"2846","image_group_id":"17055","img_url":"static\/assets\/images\/2017101603491281-0.jpg","large_image_url":"static\/assets\/images\/2017101603491281-0.jpg","width":"1051","height":"1051"}] ;
        
    proShotData.forEach(function (item) {
      Object.getOwnPropertyNames(item).forEach(function(key) {
        item[key] = item[key].replace(/\\\//g, '/');
      });
    });
	
	var reg = new RegExp("(^|&)utm_source=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
      if (r!=null){
        if(r[2] == 'shareasale'){
         $.cookie('__source_sas',1,3600,'/');
        }
      }
  
    $(function () {
      $(' > .column-2 , > .column-3 ', '.full-index-container').each(function () {
        $('> :last-child', this).addClass('last-child');
      });
      (function () {
        var resize = function () {
          // 设置上下图片的margin-bottom
          var marBtm = $('.full-index-container').width() / 1800 * 30 ;
          $(' > .column-2, > .column-3', '.full-index-container').css({
            marginTop: marBtm
          });

          $('.index-banner-container').Swipe({auto:5000,continuous:true,disableScroll:false,startSlide:0,callback: function(pos){}});
        };
        resize();
      })();
    });
    // pro shots 图片居中拉伸
    function ProShots (data) {
      this.dataList = data;
      this.init();
    }

    $.extend (ProShots.prototype, {
      init: function () {
        this.preLoad();
        this.$columns = $('.pro-shots-container .column-5');
        this.showData = this.dataList.splice(0, 9); // 取前9个先渲染
        this.render();
      },
      render: function () {
        // 渲染列表
        var me = this,
          html = '';
          
        this.showData.forEach(function (item, index) {
          html += '<div class="text-center ' + (index === 5 ? 'last' : '') + '">' + 
             me.tmpl(item, index) +
             '</div>';
        });
        this.$columns.html(html).children().each(function (index) {
          this.imgWidth = me.showData[index].width;
          this.imgHeight = me.showData[index].height;
        });
        this.events();
      },
      preLoadImg: function (src, callback) {
        var img = new Image();
        img.src = src;
        if (img.complete) { // 兼容IE opera
          callback.call(img);
          return;
        }
        img.onload = function () {
          callback.call(img);
        };
      },
      preLoad: function () {
        var me = this;
        // 预加载图片。缩图和大图比例应该一致
        var callback = function (img, index) {

        };
        var list = this.dataList.slice(0);
        list.forEach(function (item, index) {
          me.preLoadImg(item.large_image_url, function () {
            callback(this, index);
          });
        });
      },
      imgDispose: function (elm, $img) {
        var containWidth = $(elm).width(),
          scale = containWidth / Math.min(elm.imgWidth, elm.imgHeight),
          width = elm.imgWidth * scale,
          height = elm.imgHeight * scale,
          marginLeft = (width - containWidth) / 2 * -1,
          marginTop = (height - containWidth) / 2 * -1;
        $img.css({
          width: 'auto',
          height: 'auto',
          margin: 0
        });
        this.preLoadImg($img.data('original'), function () {
          $img.attr('src', $img.data('original'));
          $img.css({
            width: width,
            height: height,
            marginLeft: Math.abs(marginLeft) > 10 ? marginLeft : 0,
            marginTop:  Math.abs(marginTop) > 10 ? marginTop : 0
          });
        });
      },
      imgReplace: function () {
        
        var me = this,
          index = Math.floor(Math.random() * me.showData.length),
          replaceIndex = Math.floor(Math.random() * me.dataList.length),
          data = me.dataList[replaceIndex],
          html = me.tmpl(data, index),
          $div = me.$columns.children().eq(index),
          div = $div[0],
          keyOld = me.showData[index],
          keyNew = me.dataList[replaceIndex],
          $img;
        
        me.showData.splice(index, 1, keyNew);
        me.dataList.splice(replaceIndex, 1, keyOld);
        $div.append(html);
        $div.children().eq(0).fadeOut(function () {
          $(this).remove();
        }).siblings().fadeIn();
        $img = $('img:last', $div);
        if (data.width) {
          div.imgWidth = data.width;
          div.imgHeight = data.height;
          me.imgDispose(div, $img);
        } else {
          me.preLoadImg(data.img_url, function () {
            div.imgWidth = this.width;
            div.imgHeight = this.height;
            me.imgDispose(div, $img);
          });
        }
      },
      events: function () {
        var me = this;
        var resize = function () {
          $('> *', me.$columns).each(function (index) {
            var _this = this,
              $this = $(this),
              fullWidth = Math.floor($('.full-index-container').width()),
              width = Math.floor(fullWidth / 5),
              height,
              $img = $('img:first', this),
              mImg = null,
              cssObj;
            if (index === 0 || index === 5) {
              width *= 2;
            }
            height = index === 0 ? width - 1 : width;
            cssObj = {
              width: width,
              height: Math.floor(height)
            };
            if (index === 5) {
              cssObj.marginRight = fullWidth - width / 2 * 5 + 1;
            }
            $this.css(cssObj);

            me.imgDispose(_this, $img);
          });
        };
        resize();

        $(window).resize(function () {
          // 窄屏不需要resize
          // resize();
        });


        if (this.dataList.length) {
          setInterval(function () {
            me.imgReplace();
          },5000);
        }
      },
      tmpl: function (data, index) {
        return  ' <a href="/lookbook.html?gid='+data.image_group_id+'" target="_blank">' +
            '   <span><img src="static/assets/images/loading-logo.gif" data-original="' + data.large_image_url + '" ></span>' + 
            ' </a>';
      }
    });

    // pro shots 图片居中拉伸
    
    $(document).scroll(function () {
      if (window.scrollShareShots) {
        return;
      }
      if ($('.share-container').position().top - (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop) < $(window).height() + 200) {
        window.scrollShareShots = true;
        new ProShots(proShotData);
      }
    });
    

    // flash deal  time count down
    $.getDealsCountDown();

    $("img.fall_lazy").lazyload({
      placeholder: 'static/assets/images/grey.gif',
      effect: "fadeIn", // 载入使用何种效果
      threshold: 100 // 提前开始加载
 
    });
	
	$(".banner_1200").Swipe({auto:5000,continuous:true,disableScroll:false,startSlide:0,callback: function(pos){}});
  $(".goodsbox_1200").Swipe({continuous:true,disableScroll:false,startSlide:0,callback: function(pos){}});
  $(".share_1200").Swipe({auto:5000,continuous:true,disableScroll:false,startSlide:0,callback: function(pos){}});
