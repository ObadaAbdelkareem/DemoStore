$(window).load(function () {
    var thum_pics =function (option) {
            this.opt={
            $turnBOx:null,
            $turnUl:null,
            $turnNext:null,
            $turnPrev:null,
            $turnTab:null,
            turnWit:null,
            index:0,
        };
        this.opt=$.extend(this.opt,option);
        this.init();
        /**/
    }
    thum_pics.prototype.init=function () {
        var me=this;
        if(me.opt.$turnUl.find('li').length > 1){
            me.appendDocs(me.opt);
        }
        me.initUl(me.opt);
        me.opt.$turnNext.bind({
            'click':function (e) {
                me.nextShow(me.opt);
                e.stopPropagation();
            },
            'mouseleave':function (e) {
                e.stopPropagation();
            }
        })
        me.opt.$turnPrev.bind({
            'click':function (e) {
                me.pretShow(me.opt);
                e.stopPropagation();
            },
            'mouseleave':function (e) {
                e.stopPropagation();
            }
        })
        me.changeSrc(me.opt);
    }
    thum_pics.prototype.appendDocs=function (obj) {
        var me=obj;
        for (var b = 0; b < me.$turnUl.find('li').length; b++) {
            me.$turnTab.append('<li><i></i></li>');
        }
        me.$turnTab.find('li:first').addClass('active');
    }
    thum_pics.prototype.initUl=function (obj) {
        var me=obj;
        me.$turnUl.css({'position':'absolute','width':me.turnWit*me.$turnUl.find('li').length+'px',});
    }
    thum_pics.prototype.nextShow=function (obj) {
        var me=obj;
        me.index++;
        me.index= me.index > me.$turnUl.find('li').length -1 ? me.$turnUl.find('li').length -1 : me.index;
        var big_img=me.$turnUl.closest('.alert_wom_lst ').find('.wom_lst_pic img');

        var imgPath =me.$turnUl.children('li').eq(me.index).find('img').attr('data-big-img');
        var img = new Image();
        img.src = imgPath;
        if(img.complete||img.width) {
            big_img.attr('src', imgPath);
        }else{
            //me.$turnUl.closest('.alert_wom_lst').find('.wom_lst_pic').append("<img class='pic_load_gif' src='/templates/default/images/loading_3.gif'/>")
            big_img.attr('src','/templates/default/images/loading-logo.gif');
            $(img).load(function () {
                big_img.attr('src', imgPath);
                //me.$turnUl.closest('.alert_wom_lst').find('.pic_load_gif').remove();
            })
        }

        if(me.index >= 0){
            me.$turnUl.children('li').eq(me.index).addClass('active').siblings('li').removeClass('active');
        }
        me.$turnPrev.removeClass('disabled');

        me.$turnUl.animate({left:(-me.index*me.turnWit)+'px'});
        me.$turnTab.find('li').eq(me.index).addClass('active').siblings('li').removeClass('active');
         //console.log(me.$turnUl.find('li').eq(me.index).nextAll('li').length)
        if(me.index+1 > me.$turnUl.find('li').length -1){
            //me.$turnNext.hide();
            me.$turnNext.addClass('disabled');
            me.index=me.$turnUl.find('li').length -1;
            return false;
        }
    }
    thum_pics.prototype.pretShow=function (obj) {
        var me=obj;
        me.index--;
        me.index=me.index < 0 ? 0 : me.index;

        var big_img=me.$turnUl.closest('.alert_wom_lst ').find('.wom_lst_pic img');

        var imgPath =me.$turnUl.children('li').eq(me.index).find('img').attr('data-big-img');
        var img = new Image();
        img.src = imgPath;
        if(img.complete||img.width) {
            big_img.attr('src', imgPath);
        }else{
            //me.$turnUl.closest('.alert_wom_lst').find('.wom_lst_pic').append("<img class='pic_load_gif' src='/templates/default/images/loading_3.gif'/>")
            big_img.attr('src','/templates/default/images/loading-logo.gif');
            $(img).load(function () {
                big_img.attr('src', imgPath);
                //me.$turnUl.closest('.alert_wom_lst').find('.pic_load_gif').remove();
            })
        }

        if(me.index >=0){
            me.$turnUl.children('li').eq(me.index).addClass('active').siblings('li').removeClass('active');
        }
        me.$turnNext.removeClass('disabled');

        me.$turnUl.animate({left:(-me.index*me.turnWit)+'px'});
        me.$turnTab.find('li').eq(me.index).addClass('active').siblings('li').removeClass('active');
        if(me.index-1 < 0){
            me.$turnPrev.addClass('disabled');
            me.index=0;
            return false;
        }
    }
    thum_pics.prototype.changeSrc=function (obj) {
        var me=obj;
        me.$turnUl.children('li').mouseenter(function () {
            var _this=$(this);
            wom_timer=setTimeout(function () {
                me.index= _this.index();
                if(me.index > 0 && me.index < me.$turnUl.find('li').length -1){
                    _this.closest('.alert_wom_lst ').find('.chang').removeClass('disabled');
                }else if(me.index == 0 ){
                    _this.closest('.alert_wom_lst ').find('.prev').addClass('disabled');
                }else if(me.index == me.$turnUl.find('li').length -1){
                    _this.closest('.alert_wom_lst ').find('.next').addClass('disabled');
                }
                var big_img=me.$turnUl.closest('.alert_wom_lst ').find('.wom_lst_pic img');
                
                var imgPath =me.$turnUl.children('li').eq(me.index).find('img').attr('data-big-img');
                var img = new Image();
                img.src = imgPath;
                if(img.complete||img.width) {
                    big_img.attr('src', imgPath);
                }else{
                    //me.$turnUl.closest('.alert_wom_lst').find('.wom_lst_pic').append("<img class='pic_load_gif' src='/templates/default/images/loading_3.gif'/>")
                    big_img.attr('src','/templates/default/images/loading-logo.gif');
                    $(img).load(function () {
                        big_img.attr('src', imgPath);
                        //me.$turnUl.closest('.alert_wom_lst').find('.pic_load_gif').remove();
                    })
                }

                _this.addClass('active').siblings('li').removeClass('active');
            },200);
        }).mouseleave(function () {
            clearTimeout(wom_timer);
        })
    }
    window.Thum_Pics=function (opt) {
        return new thum_pics(opt);
    }


    //alert("load");

    $('.use_wom_lst .wom_lst_pic').mouseenter(function () {
        var wom_parent=$(this).closest('.wom_lst_detail');
        $('.alert_wom_lst').hide();
        wom_parent.find('.alert_wom_lst').show();
        if($('.wom_pic_all > ul li',wom_parent).length <= 5){
            $('.chang',wom_parent).hide();
            $('.wom_pic_all',wom_parent).css('margin',0)
        }
        if(!wom_parent.hasClass('active') && wom_parent.find('.alert_wom_lst').length){
            $('.wom_pic_li img',wom_parent).each(function () {
                $(this).attr('src',$(this).attr('data-original'));
            })
            Thum_Pics({
                $turnBOx:$('.wom_pic_detail',wom_parent),
                $turnUl:$('.wom_pic_detail .wom_pic_all > ul',wom_parent),
                $turnNext:$('.wom_pic_detail .next',wom_parent),
                $turnPrev:$('.wom_pic_detail .prev',wom_parent),
                $turnTab:$('#change_pro_pics .carouse_tab'),
                turnWit:$('.wom_pic_detail .wom_pic_all > ul > li',wom_parent).outerWidth(true),
            })
            wom_parent.addClass('active');
        }

    });
    $('.alert_wom_lst').on('mouseleave',function (e) {
        $(this).hide();
    })
    var wom_pos=($(window).width()-1200)/2+1200;
    $('.wom_Lclothes_nav .wom_Lclothes_navlst').mouseenter(function () {
        if($('.wom_Lclothes_alter',$(this)).length == 0) return false;
        $('.wom_Lclothes_alter',$(this)).show();
        var wom_wid=0;
        $('.wom_Lclothes_alter .wom_Lclothes_rit',$(this)).each(function () {
            wom_wid+=$(this).outerWidth(true);
        })
        $('.wom_Lclothes_alter .wom_Lclothes_btm',$(this)).css('width',wom_wid+'px');
        var sef_post=$('.wom_Lclothes_alter',$(this)).offset();
        if(sef_post.left+$('.wom_Lclothes_alter',$(this)).outerWidth() > wom_pos){
            $('.wom_Lclothes_alter',$(this)).css({'left':'auto','right':0})
        }
    }).mouseleave(function () {
        $('.wom_Lclothes_alter',$(this)).hide();
    })

    $('.like_a').click(function(){
        if($(this).children('i').hasClass('active')) return false;
        var url = homeUrl +'/ajaxload/account-addWishlist.html';
        var products_id = $(this).attr('data-productsid');
        var _this = $(this);
        products_id = parseInt(products_id);
        if(products_id<=0) return false;
        _this.parent().loading();
        $.ajax({
            type:'POST',
            dataType:'JSON',
            url:url,
            data:{'products_id':products_id},
            success:function(result){
                // $('.like_a').children("i").addClass("active");
                if(result.status){
                    $('.like_a > i',_this.closest('.wom_lst_detail')).addClass("active");
                    ZSConfirm(result.message, result.label, result.view, result.close, function(r){
                        if(r){window.location.href = homeUrl+'index.php?com=account&t=my_wishs';}
                    });

                    /*头尾部改版
                    * */
                    $('.index_wish .wish_nums','.home_index_head').text(result.wishlistNum)
                }else if(result.noLogin){
                    ZSAlert(result.message,result.label,result.btn,'',function(res){
                        if(res && result.url){window.location.href = result.url;}
                    });
                }else{
                    ZSAlert(result.message,result.label,result.btn,'');
                }
            },
            complete: function () {
                _this.parent().loading(false);
            }
        });
    });
    $("img.lazy").lazyload({
        effect: "fadeIn",
        threshold: 300
    });
    $('.like_a').click(function(){
        //8、加入收藏夹 ：add to wishlists
        var gasource = $('#gasource').attr("data-gasource");
        ga('send', 'event', gasource, 'Add To Wishlists', 'Add To Wishlists', 1);
    });

    thum_pics.prototype.init();
});