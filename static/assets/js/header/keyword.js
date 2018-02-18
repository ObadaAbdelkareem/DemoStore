$(function() {
    var $search_form = $('.search_form_db');
    var $search_result_list = $('.search_result_list', $search_form);
    var keyword_Input;
    var rand_keyword = false;

    $(".search_list .sel_flg").click(function() {
        if ($(".nav_category_list").is(":hidden")) {
            $(".nav_category_list").show();
        } else {
            $(".nav_category_list").hide();
        }
        $('.search_result_list').hide();
    });

    $(".nav_category_list dd").click(function() {
        $(this).addClass("on").siblings().removeClass("on");
        $(".search_list input[name='cat_id']").val($(this).attr("cid"));
        $(".search_list span").html($(this).html());
        $(".nav_category_list").hide();
    });

    $(document).on("click", '.hots_search a[href="javascript:void(0);"]', function() {
        $("#keywords").focus().val($(this).text());
        $('#search_form').submit();
    });

    $('input[name="keywords"]', $search_form).focus(function() {
        if ($.trim($(this).val()) == rand_keyword) {
            $(this).val('').removeClass('colors_gray');
        }
        $('.nav_category_list', $search_form).hide();
    }).click(function(event) {
        event.stopPropagation();
    });
    $('.search_list').click(function(event) {
        event.stopPropagation();
    });
    $(document).delegate(".ajax_search_lst  li", "click", function(event) {
        $('input[name="keywords"]', $search_form).val($('span', $(this)).text());
        // window.open($(this).attr('url'));
        location.href = $(this).attr('url');
        event.stopPropagation();
    });
    $('#submit_btn', $search_form).click(function() {
        if ($('#keywords').attr('url') && rand_keyword == $.trim($('#keywords').val())) {
            window.open($('#keywords').attr('url'));
            return false;
        }
        $(this).closest('form').submit();
    });
    $('body').click(function() {
        $('.search_result_list,.nav_category_list').hide();
    })
});


$(function() {
    if ($('.head_new').is(':hidden')) {
        $('.head .bag .title i').removeClass('nc-icon nc-icon-bag');
    }
    var $parentIndex = $('.home_index_head'),
        $search = $('#index_search_btn', $parentIndex),
        $searchCont = $('.top_search_container', $parentIndex);
    $.searchWid = function() {
        var outWid = $searchCont.outerWidth();
        $searchCont.css('marginLeft', '-' + (outWid / 2) + 'px')
    }
    $search.click(function(e) {
        $(this).hide();
        $searchCont.toggle();
        if (!$searchCont.is(':hidden')) {
            $('.serach_keyword', $parentIndex).focus();
            $.searchWid();
        }
        e.stopPropagation();
    })
    $('.serach_keyword', $parentIndex).click(function(e) {
        e.stopPropagation();
    })
    $(document).on('click', 'body', function() {
        $searchCont.hide();
        if ($searchCont.is(':hidden')) {
            $search.show();
        }
    })
    var $home = $('.home_index_head').css('height', $('.index_head_cont', $home).outerHeight());
    $(window).scroll(function() {
        var $indexfix = $('.index_head_cont', $home)
        $('.cate_nav', $home).removeClass('cate_nav_fixed');
        if ($(window).scrollTop() > 0) {
            $indexfix.addClass('head_cont_fix');
        } else {
            $indexfix.removeClass('head_cont_fix');
        }
    });

    $('.cate_nav .channel ul > li').mouseenter(function() {
        var $lib_all = $(this).siblings('li');
        $('b > a', $lib_all).css('color', '#999');
    }).mouseleave(function() {
        var $lib_all = $(this).siblings('li');
        $('b > a', $lib_all).removeAttr('style');
    });
    $('.head_lst.head .help').mouseenter(function() {
        $('.box', this).css('marginLeft', '-' + $('.box', this).outerWidth() / 2 + 'px')
    });

    var domeleft = $('#head_cart_num').closest('span').offset().left + $('#head_cart_num').closest('span').outerWidth();
    var windleft = $(window).width()
    if (domeleft > windleft && domeleft > 1200) {
        var pd = domeleft - 1200;
        console.log(domeleft + '-' + windleft + '=' + pd);
        $('#head_cart_num').closest('.head_right').css('paddingRight', pd)
    }
    $('.live-chat').mouseenter(function() {
        setTimeout(function() {
            if ($('.chat-tips-container').offset().left < 0) {
                $('.chat-tips-container').addClass('change')
            }
        }, 0)
    })
});