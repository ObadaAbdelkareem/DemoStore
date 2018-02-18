(function($) {

    // array.forEach / map / some / every / reduce / indexOf
    if (!Array.prototype.indexOf) {
        var chkFn = function(fn, callback) {
            if (Object.prototype.toString.call(fn) === '[object Function]') {
                return callback();
            } else {
                throw new Error('argument[0] is not a function');
            }
        };
        $.extend(Array.prototype, {
            forEach: function(fn, context) {
                var that = this;
                return chkFn(fn, function() {
                    var i = 0,
                        len = that.length;
                    for (; i < len; i++) {
                        fn.call(context, that[i], i, that);
                    }
                });
            },
            map: function(fn, context) {
                var that = this;
                return chkFn(fn, function() {
                    var i = 0,
                        len = that.length,
                        newArr = [];
                    for (; i < len; i++) {
                        newArr.push(fn.call(context, that[i], i, that));
                    }
                    return newArr;
                });
            },
            some: function(fn, context) {
                var that = this;
                return chkFn(fn, function() {
                    var i = 0,
                        len = that.length,
                        output = false;
                    for (; i < len; i++) {
                        if (fn.call(context, that[i], i, that)) {
                            output = true;
                            break;
                        }
                    }
                    return output;
                });
            },
            every: function(fn, context) {
                var that = this;
                return chkFn(fn, function() {
                    var i = 0,
                        len = that.length,
                        output = true;
                    for (; i < len; i++) {
                        if (!fn.call(context, that[i], i, that)) {
                            output = false;
                            break;
                        }
                    }
                    return output;
                });
            },
            reduce: function(fn, init) {
                var that = this,
                    arrArguments = arguments;
                return chkFn(fn, function() {
                    var i = 0,
                        len = that.length,
                        sum;
                    switch (true) {
                        case len === 0:
                            if (arrArguments.length > 1) {
                                sum = init;
                            } else {
                                throw new TypeError('Reduce of empty array with no initial value');
                            }
                            break;
                        case len === 1:
                            if (arrArguments.length > 1) {
                                sum = fn.call(window, init, that[i], i, that);
                            } else {
                                sum = that[0];
                            }
                            break;
                        default:
                            for (; i < len; i++) {
                                if (i === 0) {
                                    if (arrArguments.length > 1) {
                                        sum = init;
                                    } else {
                                        sum = that[i++];
                                    }
                                }
                                sum = fn.call(window, sum, that[i], i, that);
                            }

                    }
                    return sum;
                });
            },
            indexOf: function(elt /*, from*/ ) {
                var len = this.length;

                var from = Number(arguments[1]) || 0;
                from = (from < 0) ? Math.ceil(from) : Math.floor(from);
                if (from < 0) {
                    from += len;
                }

                for (; from < len; from++) {
                    if (from in this && this[from] === elt)
                        return from;
                }
                return -1;
            }
        });

        // Object.getOwnPropertyNames
        $.extend(Object.prototype, {
            getOwnPropertyNames: function(obj) {
                var keys = [];
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        keys.push(key);
                    }
                }
                return keys;
            }
        });
    }

    // JSON.parse / stringify
    if (!window.JSON) {
        window.JSON = {
            parse: function(data) {
                var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                var requireNonComma,
                    depth = null,
                    str = $.trim(data + "");
                return str && !$.trim(str.replace(rvalidtokens, function(token, comma, open, close) {
                        if (requireNonComma && comma) {
                            depth = 0;
                        }
                        if (depth === 0) {
                            return token;
                        }
                        requireNonComma = open || comma;
                        depth += !close - !open;
                        return "";
                    })) ?
                    (Function("return " + str))() :
                    jQuery.error("Invalid JSON: " + data);
            },
            stringify: function(obj) {
                var jsonToStr = function(obj) {
                    var str = '';
                    $.each(obj, function(key, value) {
                        if (str) str += ',';
                        if ($.type(obj) === 'object') str += '"' + key + '":';
                        switch ($.type(value)) {
                            case 'function': //fn过滤
                                break;
                            case 'boolean':
                            case 'number':
                            case 'string':
                                str += value.toString();
                                break;
                            case 'date':
                                str += value.toISOString();
                                break;
                            case 'array':
                                str += '[' + jsonToStr(value) + ']';
                                break;
                            case 'object':
                                str += '{' + jsonToStr(value) + '}';
                                break;
                        }
                    });
                    return str;
                };
                switch ($.type(obj)) {
                    case 'function':
                        return undefined;
                    case 'date':
                        return obj.toISOString();
                    case 'boolean':
                    case 'number':
                        return obj.toString();
                    case 'string':
                        return '"' + obj + '"';
                    case 'array':
                        return '[' + jsonToStr(obj) + ']';
                    case 'object':
                        return '{' + jsonToStr(obj) + '}';
                }

            }
        };
    };

    Date.prototype.Format = function(formatStr) {
        var str = formatStr;
        var week = ['日', '一', '二', '三', '四', '五', '六'];
        str = str.replace(/yyyy|YYYY/, this.getFullYear());
        str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));
        str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
        str = str.replace(/M/g, (this.getMonth() + 1));
        str = str.replace(/w|W/g, week[this.getDay()]);
        str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
        str = str.replace(/d|D/g, this.getDate());
        str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
        str = str.replace(/h|H/g, this.getHours());
        str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
        str = str.replace(/m/g, this.getMinutes());
        str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
        str = str.replace(/s|S/g, this.getSeconds());
        return str;
    };
    $(function() {

        // tooltip 
        $(document).on('mouseenter', '[data-toggle="tooltip"]', function() {
                var tooltipId = $(this).attr('aria-describedby');
                if (tooltipId && $('#' + tooltipId).length) {
                    return;
                }
                var data = $(this).data(),
                    title = this.title || data.title || data.originalTitle,
                    placement = data.placement || 'top',
                    tooltipId = 'tooltip' + new Date() * 1,
                    $tooltip = $('<div class="tooltip ' + data.skin + ' ' + placement + '" role="tooltip" id="' + tooltipId + '"><div class="tooltip-arrow"><i></i></div><div class="tooltip-inner">' + title + '</div></div>').appendTo('body'),
                    tooltipWidth = $tooltip.outerWidth(),
                    tooltipHeight = $tooltip.outerHeight(),
                    offset = $(this).offset(),
                    width = $(this).outerWidth(),
                    height = $(this).outerHeight(),
                    cssData = {},
                    leftRightPosT = offset.top + (height - tooltipHeight) / 2,
                    topBottomPosL = offset.left + (width - tooltipWidth) / 2,
                    $alignTo = $(data.alignTo), // 如果有对齐参照物则以参照物的边沿对齐(只限左右)
                    alignOffset = $alignTo.offset();

                switch (placement) {
                    case 'top':
                    case 'top-left':
                    case 'top-right':
                        cssData = {
                            left: topBottomPosL,
                            top: offset.top - tooltipHeight
                        };
                        break;
                    case 'right':
                        cssData = {
                            left: offset.left + width,
                            top: leftRightPosT
                        };
                        break;
                    case 'bottom':
                    case 'bottom-left':
                    case 'bottom-right':
                        cssData = {
                            left: topBottomPosL,
                            top: offset.top + height
                        };
                        break;
                    case 'left':
                        cssData = {
                            left: offset.left - tooltipWidth,
                            top: leftRightPosT
                        };
                        break;
                }
                switch (placement) {
                    case 'top-left':
                    case 'bottom-left':
                        delete cssData.left;
                        cssData.right = $alignTo.length ?
                            $(window).width() - alignOffset.left - $alignTo.outerWidth() :
                            $(window).width() - offset.left - width;
                        break;
                    case 'top-right':
                    case 'bottom-right':
                        cssData.left = ($alignTo.length ? alignOffset.left : offset.left);
                        break;
                }
                if ($alignTo.length) {
                    $tooltip.find('.tooltip-arrow').css({
                        left: /left/.test(placement) ? 'auto' : offset.left + width / 2 - alignOffset.left,
                        right: /right/.test(placement) ? 'auto' : alignOffset.left + $alignTo.outerWidth() - offset.left - width / 2 - 5
                    });
                }
                $tooltip.css(cssData).fadeIn(200);
                this.title && (this.title = '');
                $(this).attr('aria-describedby', tooltipId);

            }).on('mouseleave', '[data-toggle="tooltip"]', function() {
                var tooltipId = $(this).attr('aria-describedby');
                tooltipId && $('#' + tooltipId).remove();
            })
            // checkbox uniform class
            .on('click', '.checker input[type="checkbox"]', function() {
                var checked = this.checked,
                    disabled = this.disabled,
                    $checker = $(this).closest('.checker');
                $checker[disabled ? 'addClass' : 'removeClass']('disabled');
                $checker.children('span')[checked ? 'addClass' : 'removeClass']('checked');
            })
            // radio uniform class
            .on('click', '.radio input[type="radio"]', function() {
                var checked = this.checked,
                    disabled = this.disabled,
                    $this = $(this),
                    $radio = $this.closest('.radio'),
                    radioName = this.name,
                    $form = $this.closest('form'),
                    $radioList = null;

                if (disabled) {
                    return;
                } else {
                    if (radioName === '') {
                        $radioList = $('');
                    } else if ($form.length) {
                        $radioList = $('input[type="radio"][name="' + radioName + '"]', $form);
                    } else {
                        $radioList = $('input[type="radio"][name="' + radioName + '"]').filter(function() {
                            return $(this).closest('form').length === 0;
                        });
                    }

                    $radioList.closest('.radio').find('span').removeClass('checked');
                    $radio.children('span').addClass('checked');
                }

            });
    });

    $.extend($.fn, {
        // 标签页切换
        tabs: function() {
            return this.each(function() {
                var data = $(this).data(),
                    href = $(this).attr('href');
                $(this).closest('li').addClass('active')
                    .siblings().removeClass('active');
                if (href.slice(0, 1) === '#' || data.toggle === 'tab') {
                    $(href).fadeIn()
                        .removeClass('none')
                        .addClass('in active')
                        .siblings()
                        .removeClass('in active')
                        .hide();
                    return false;
                }

            });
        },
        // 进度条
        progress: function() {
            return this.each(function() {
                var $curr = $('.progress-marks .active', this),
                    $bar = $('.progress-bar', this),
                    barWidth = 0;
                if ($curr.length) {
                    barWidth = $curr.position().left + ($curr.width() / 2);
                    !$curr.next().length && (barWidth = '100%');
                }

                $bar.stop().animate({
                    width: barWidth
                }, 300);
            });
        },
        // 一个使图片居中的圆形的，不拉变形的，超出要隐藏的代码 (少用。如量大，请规范上传图片尺寸)
        // 若要自定图片尺寸，后面可自行扩展参数
        uniformScale: function(options) {
            return this.each(function() {
                options = $.extend({
                    $container: $(this), // 图片容器。需要截取尺寸。默认为调用该方法的对象
                    $img: $('img:first', this) // 要调整大小的图片
                }, options);
                var $img = options.$img,
                    imgPath = $img.attr('src'),
                    img = new Image();
                img.src = imgPath;
                img.onload = function() {
                    var width = img.width,
                        height = img.height,
                        conWidth = options.$container.width(),
                        _width, _height,
                        cssData;
                    if (width > height) {
                        _height = conWidth;
                        _width = width * _height / height;
                    } else {
                        _width = conWidth;
                        _height = height * _width / width;
                    }
                    cssData = {
                        width: _width,
                        height: _height,
                        transition: 'all 0.5s'
                    };
                    cssData[_width > _height ? 'margin-left' : 'margin-top'] = -1 * Math.abs(_width - _height) / 2;
                    $img.css(cssData).attr('src', imgPath);
                };
            });
        },
        // 格式化单选复选按钮样式 
        uniform: function() {
            return this.each(function() {
                var $selectBox = $('input[type="checkbox"],input[type="radio"]', this);
                if (this.tagName === 'INPUT' && (this.type === 'checkbox' || this.type === 'radio')) {
                    $selectBox = $(this);
                }
                $selectBox.each(function() {
                    var checked = this.checked,
                        disabled = this.disabled,
                        wrapClass = this.type === 'checkbox' ? 'checker' : 'radio',
                        $checker = $(this).closest('.' + wrapClass);
                    if (!$checker.length) {
                        $(this).wrap('<div class="' + wrapClass + '"><span></span></div>');
                        $checker = $(this).closest('.' + wrapClass);
                    }
                    $checker[disabled ? 'addClass' : 'removeClass']('disabled');
                    $checker.children('span')[checked ? 'addClass' : 'removeClass']('checked');
                });
            });
        },
        // canvas 压缩图片 
        // 此处不做图片类型判断，不做上传判断
        compressImg: function(options) {
            return this.each(function() {
                $(this).change(function() {
                    if (this.value === '') {
                        return;
                    }
                    $.compressImg(options, this);
                });
            });
        },

        load_size: function(options) {
            options = $.extend({
                callback: $.noop
            }, options);
            return this.each(function() {
                var _this = this,
                    $this = $(this),
                    id = $(this).data('productId');

                $this.on('mouseenter', function() {
                    if (this.loaded) {
                        return;
                    }

                    $.ajax({
                        url: '/index.php',
                        type: "post",
                        data: 'com=ajax&t=loadSizeLabel&pid=' + id,
                        dataType: 'html',
                        success: function(res) {
                            _this.loaded = true;
                            options.callback && options.callback.call(_this, res);
                        }
                    });
                });
            });
        },
        // 在某容器上禁止外部scroll
        disableScroll: function() {
            var scroll = function(e) {
                e = e || window.event;
                var k = e.wheelDelta ? e.wheelDelta : -e.detail * 10;
                this.scrollTop = this.scrollTop - k;
                e.returnValue = false;
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    return false; // 给可爱的IE8用的
                }
            };
            return this.each(function() {
                if (window.addEventListener) {
                    this.addEventListener('DOMMouseScroll', scroll, false); // 给forefox用的
                }
                this.onmousewheel = scroll;
            });
        },
        // 固定表头
        fixedThead: function(options) {
            options = $.extend({
                scroll: '', // 带滚动条的容器元素
                tableClassName: 'table table-bordered'
            }, options);
            return this.each(function() {
                var $table = $(this),
                    $thead = $('>thead', $table),
                    $thList = $('>tr>th', $thead),
                    $scroll = $(options.scroll),
                    $fixThead = $('table.table-fixed-thead', $scroll),
                    fixed = function(posTop, posLeft) {
                        if (posTop < 0) {
                            if (!$fixThead.length) {
                                $fixThead = $('<table class="' + options.tableClassName + ' table-fixed-thead"></table>');
                                $fixThead.append($thead.clone());
                                $('>thead>tr>th', $fixThead).each(function(index) {
                                    $(this).css('width', $thList.eq(index).outerWidth());
                                });
                            }
                            $fixThead.css({
                                position: 'absolute',
                                left: $scroll.scrollLeft() + posLeft,
                                top: $scroll.scrollTop()
                            }).appendTo($scroll).show();
                        } else {
                            $fixThead.hide();
                        }
                    };
                if (!$scroll.length) {
                    $scroll = $table.parent();
                }
                if ($scroll.css('position') === 'static') {
                    $scroll.css('position', 'relative');
                }
                $scroll.scroll(function() {
                    var posTop = $table.position().top,
                        posLeft = $table.position().left;
                    fixed(posTop, posLeft);
                });


            });
        }
    });

    $.compressImg = function(options, elm) {
        options = $.extend({
            $thumb: false, // 显示缩略图的元素，无就设置为空或false
            scale: 0.92, // 图片压缩比例
            limitSize: 2048, // 限止图片大小（KB），如果图片过大，会比例减小scale值，来确保图片大小符合要求
            imgWidth: 900, // 图片尺寸 为false值则表示自动等比缩放
            imgHeight: 0, // 图片尺寸
            lowBrowser: $.noop, // 低版本浏览器方案（IE9及以下）
            callback: $.noop, // 回调函数，参数：压缩后的图片路径
        }, options);

        var file,
            fd,
            canvasHtml = '<canvas id="_canvas-drawImg" style="display:none"></canvas>';

        var draw = function(options) {
            $('#_canvas-drawImg').remove();
            $(canvasHtml).appendTo('body');
            var img = new Image();
            img.src = options.imgUrl;
            img.onload = function() {
                var canvas = document.getElementById('_canvas-drawImg'),
                    ctx,
                    imgSize,
                    imgUrl,
                    canvasSize = {};
                // 计算画布尺寸
                options.imgWidth && (canvasSize.width = this.width < options.imgWidth ? this.width : options.imgWidth);
                options.imgHeight && (canvasSize.height = this.height < options.imgHeight ? this.height : options.imgHeight);
                !canvasSize.width && (canvasSize.width = canvasSize.height * this.width / this.height);
                !canvasSize.height && (canvasSize.height = canvasSize.width * this.height / this.width);

                canvas.width = canvasSize.width || this.width;
                canvas.height = canvasSize.height || this.height;

                ctx = canvas.getContext('2d');
                ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

                imgUrl = canvas.toDataURL('image/jpeg', options.scale);

                // 计算压缩后图片的大致尺寸 (0.6-0.8之间)
                imgSize = imgUrl.length / 1024 * 0.8;

                // 通过压缩后图片大小调整canvas压缩比例(0-1之间) 参数不合法时，默认值为0.92
                if (options.limitSize) {
                    options.limitSize = options.limitSize;
                    if (imgSize > options.limitSize) {
                        options.scale = options.limitSize / imgSize * options.scale;
                        imgUrl = canvas.toDataURL('image/jpeg', options.scale);
                    }
                }
                options.$thumb && options.$thumb.attr('src', imgUrl);
                options.callback && options.callback(imgUrl);
            };
        };

        if (window.FileReader) {
            file = elm.files[0];
            options.fileSize = file.size;
            fd = new FileReader();
            fd.readAsDataURL(file);
            fd.onload = function(e) {
                options.imgUrl = this.result;
                draw(options);
            };
        } else {
            options.lowBrowser && options.lowBrowser(options);
        }
    };

    //建立一個可存取到該file的url
    $.getObjectURL = function(file) {
        try {
            var url = null;
            if (window.createObjectURL != undefined) { // basic
                url = window.createObjectURL(file);
            } else if (window.URL != undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL != undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        } catch (e) {
            return '';
        }
    };

    /*清除数组中的重复项，返回新数组
     * 参数:array，待清除数组
     */
    $.getUniqueArray = function(array) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            newArray.indexOf(array[i]) === -1 && newArray.push(array[i]);
        }

        return newArray;
    };
    // $.loading(status)
    // stauts: Boolean. open or cloas the loading
    // 	 	true||undefined: open; 
    // 	 	false: close;
    (function() {
        var count = 0;
        var loading = function() {
            return function(status) {
                if (status === undefined || status) {
                    count++;
                } else {
                    count--;
                }
                if (count < 0) {
                    count = 0;
                }
                var $loading = $('#loading');
                if (count > 0) {
                    if (!$loading.length) {
                        $('<div id="loading"><div class="loading-con"></div></div>').appendTo('body');
                    }
                } else {
                    $loading.remove();
                }

            };
        };
        $.loading = loading();
    })();

    // $.fn.loading(onoff, cls)
    // onoff: Boolean. open or class the loading
    // 		true || undefined: open
    // 		false: close 
    // cls: String. the class of the loading
    // 		'big': the big loading pic
    // 		'mini': the small pic
    // 		'nobackdrop' : no backdrop
    $.fn.loading = function(onoff /*true|flase :open or close the loading*/ , cls /*big,mini,nobackdrop :the class of the loading.default: mini*/ ) {
        return this.each(function() {
            var $loading = $(this).find('.loading'),
                pos = $(this).css('position'),
                borderRadius = $(this).css('border-radius'),
                loadingCss = {
                    width: $(this).outerWidth(),
                    height: $(this).outerHeight(),
                    marginLeft: '-' + $(this).css('border-left-width'),
                    marginTop: '-' + $(this).css('border-top-width')
                };
            cls = cls || '';
            if (cls.split(' ').indexOf('nobackdrop') !== -1) {
                loadingCss.width = loadingCss.width > 60 ? 60 : loadingCss.width;
                loadingCss.height = loadingCss.height > 60 ? 60 : loadingCss.height;
                borderRadius = 3;
                loadingCss.marginLeft = loadingCss.width / -2;
                loadingCss.marginTop = loadingCss.height / -2;
            }
            onoff = typeof onoff === 'undefined' ? true : onoff;

            if (borderRadius) {
                loadingCss['border-radius'] = borderRadius;
            }
            if (onoff) {
                if (!$loading.length) {
                    $('<div class="loading"></div>')
                        .addClass(cls)
                        .css(loadingCss)
                        .bind('click', function() {
                            return false;
                        })
                        .appendTo(this);
                    // 因为FF中 button 内元素不给绑定事件呀
                    this.tagName === 'BUTTON' && (this.disabled = true);
                }
            } else {
                this.tagName === 'BUTTON' && (this.disabled = false);
                $loading.remove();
            }
            $(this)[onoff ? 'addClass' : 'removeClass']('lock-scroll');
            if (!{
                    fixed: true,
                    absolute: true,
                    relative: true
                }[pos]) {
                $(this).css('position', 'relative');
            }
        });
    };

    // get Scrollbar Width
    $.getScrollbarWidth = function() {
        var oP = document.createElement('p'),
            styles = {
                width: '100px',
                height: '100px',
                overflowY: 'scroll'
            },
            i,
            scrollbarWidth;
        for (i in styles) oP.style[i] = styles[i];
        document.body.appendChild(oP);
        scrollbarWidth = oP.offsetWidth - oP.clientWidth;
        oP.remove();
        return scrollbarWidth;
    };

    // alert
    $.alert = function(options) {
        var showType;
        if ($.type(options) !== 'object') {
            options = {
                content: options || 'Prompt information lossed'
            };
        }

        options = $.extend({
            showModal: true, // 显示为模态对话框
            title: 'Note',
            okValue: 'Done',
            skin: 'dialog-alert',
            width: 300,
            ok: function() {
                return true;
            }
        }, options);

        showType = options.showModal ? 'showModal' : 'show';
        delete options.showModal;
        return ZSdialog(options)[showType]();
    };
    // show msg
    // options:
    // 		msg: String
    // 		type: Number 
    // 			value: success, error, warning,  Default: success
    // 		closeTime: Number
    // 			uint: Second, 
    // 			value: Default: 2
    $.msg = function(msg, type, closeTime) {
        var iconHtml = !type ? '' : '<div><i class="icon icon-' + type + '"></i></div>';
        var options = null;
        if (typeof msg === 'object') {
            options = $.extend({
                autoClose: Number(closeTime) || 2
            }, msg);
            options.content = iconHtml + '<div>' + msg.content + '</div>';
            if (!options.skin || options.skin.split(/\s*/).indexOf('dialog-msg') === -1) {
                options.skin += ' dialog-msg';
            }

        } else {
            options = {
                content: iconHtml + '<div>' + msg + '</div>',
                skin: 'dialog-msg',
                autoClose: Number(closeTime) || 2
            };
        }
        return ZSdialog(options).showModal();
    };
    // $.formatQueryArray (key, value)
    $.formatQueryArray = function(key /*string*/ , arr) {
        return key + '[]=' + arr.join('&' + key + '[]=');
    };

    $.getMsg = function(elmName /* elmName || elm || $elm */ , type /* valudate type*/ ) {
        type = type || 'required';
        var $input = typeof elmName === 'string' ? $(':input[name="' + elmName + '"]') : $(elmName);
        return $input.data('msg-' + type) || $.validator.messages[type] || '';
    };

    // 复制代码
    $.fn.copyText = function(options) {
        return this.each(function() {
            var me = this;
            $(this).zclip({
                path: '/templates/default/images/copy-btn/ZeroClipboard.swf',
                copy: function() {
                    return $(me).data('copytext');
                },
                afterCopy: function() {
                    var d = $.alert({
                        content: 'The code has been copied!',
                        title: '',
                        ok: false
                    });
                    setTimeout(function() {
                        d.remove();
                    }, 2000);
                }
            });
        });
    };

    // $.fn.select
    ;
    (function() {
        function Select(options) {
            this.options = options;
            this.$select = $(this.options.elm);
            this.main();
        }

        $.extend(Select.prototype, {
            main: function() {
                var $select = this.$select;
                this.id = new Date() * 1 + '' + Math.ceil(Math.random() * 100000);
                this.renderNode();
                $select.after(this.node)
                    .hide();
                this.setValue();

                this.bindEvent();

                this.dispatchEvent('rendered');

                this.autoPosition();
            },
            dispatchEvent: function(type) {
                if (this.options['on' + type]) {
                    this.options['on' + type].call(this);
                }
            },
            bindEvent: function() {
                var me = this;
                this.node.on('click', function(event) {
                    var $container = $('#select-container-' + me.id);
                    if (me.open) {
                        me.close();
                    } else {
                        me.optsNode && me.optsNode.remove();
                        me.open = true;
                        me.showOptions().reset();
                        me.optsNode.find('.select-search-field').focus();
                    }
                    me.node[me.open ? 'addClass' : 'removeClass']('select-container-open');
                    event.stopPropagation();
                }).on('click', '.select-selection-clear', function(e) {
                    me.clear();
                    var e = window.event || e;
                    return false;
                });

                $(document).on('click', function() {
                    me.close();
                });
            },
            filterOption: function(key) {
                var me = this,
                    data = me.options.data,
                    newData = [];
                // type: 'option',
                // text: this.text,
                // value: this.value === undefined ? this.text : this.value,
                // isSelected: this.selected
                var list = {
                        begin: [],
                        contain: []
                    },
                    obj = {},
                    groupList = [];
                key = key.toLowerCase();
                if (key === undefined || key === '') {
                    return data;
                }
                data.forEach(function(item) {
                    var text,
                        value,
                        groupData = {
                            begin: [],
                            contain: []
                        },
                        pushData = function(item, data) {
                            var text = item.text.toLowerCase(),
                                value = item.value.toLowerCase();
                            if (text.indexOf(key) === 0) {
                                data.begin.push(text);
                            } else if (text.indexOf(key) !== -1 || value.indexOf(key) !== -1) {
                                data.contain.push(text);
                            }
                            obj[text] = item;
                        };
                    var groupObj;
                    if (item.type === 'option') {
                        pushData(item, list);
                    } else {
                        item.children.forEach(function(mitem) {
                            pushData(mitem, groupData);
                        });
                        if (groupData.begin.length || groupData.contain.length) {
                            groupObj = {
                                type: item.type,
                                text: item.text,
                                children: []
                            };
                            groupData.begin.sort().concat(groupData.contain.sort()).forEach(function(_key) {
                                groupObj.children.push(obj[_key]);
                            });
                            groupList.push(groupObj);
                        }
                    }
                });

                list.begin.sort().concat(list.contain.sort()).forEach(function(_key) {
                    newData.push(obj[_key]);
                });
                return newData.concat(groupList);
            },
            bindOptsEvent: function() {
                var me = this;
                this.optsNode.on('click', function(event) {
                    event.stopPropagation();
                }).on('keyup', '.select-search-field', function() {
                    var value = $.trim(this.value);
                    var data = me.filterOption(value);
                    me.renderOptions(data);
                    // $('.select-results .select-results-option[role="treeitem"]', me.optsNode).each(function () {
                    // 	var val = 'value' in $(this).data() ? $(this).data('value').toString().toLowerCase() : '',
                    // 		text = $(this).text().toLowerCase(),
                    // 		$ul = $(this).parent();
                    // 	if (val.indexOf(value) === -1 && text.indexOf(value) === -1) {
                    // 		$(this).hide();
                    // 		if ($ul.children(':visible').length === 0 && $ul.hasClass('select-results-options-nested')) {

                    // 				$ul.parent().hide();
                    // 		}
                    // 	} else {
                    // 		$(this).show();
                    // 		$ul.show();
                    // 		if ($ul.hasClass('select-results-options-nested')) {
                    // 				$ul.parent().show();
                    // 			}
                    // 	}
                    // });
                    me.showMsg();
                    me.reset();
                }).on('click', '.select-results-option[role="treeitem"]', function() {
                    var value = $(this).data('value'),
                        oldValue = me.$select.val();
                    me.$select.val(value);
                    me.setValue();
                    if (value != oldValue) {
                        me.dispatchEvent('change');
                    }
                    me.close();
                }).on('mouseenter', '.select-results-option[role="treeitem"]', function() {
                    $('.select-results .select-options-result-highlighted', me.optsNode).not(this).removeClass('select-options-result-highlighted');
                    $(this).addClass('select-options-result-highlighted');
                });
            },
            placeholder: function() {
                if (this.options.placeholder) {
                    $('.select-selection-rendered', this.node).html('<span class="select-selection-placeholder">' + this.options.placeholder + '</span>');
                }
            },
            setValue: function() {
                var me = this,
                    value = this.$select.val(),
                    $option = this.$select.find('option:selected'),
                    text = this.$select.find('option:selected').text();
                if (this.data && this.data.value === value) {
                    return me;
                }
                if (!this.data && value === '') {
                    this.placeholder();
                    return me;
                }
                this.data = {
                    text: text,
                    value: value
                };

                if (value) {
                    me.options.optionIcon && $option.data('icon') && (text = '<img src="' + $option.data('icon') + '"> ' + text);
                    // me.options.optionLink && $option.data('link') && (text = '<a href="' + $option.data('link') + '" target="' + me.options.optionLinkTarget + '">' + text + '</a>'); 
                    $('#select-' + me.id + '-container').html(text);
                    this.allowClear();
                } else {
                    this.placeholder();
                }
                return me;
            },
            clear: function() {

                this.$select.val('');
                this.setValue();
                this.dispatchEvent('clear');
                this.dispatchEvent('change');
            },
            allowClear: function() {
                if (this.options.allowClear) {
                    $('.select-selection-rendered', this.node).append('<span class="select-selection-clear">×</span>');
                }
            },
            autoPosition: function() {
                var me = this;
                $(window).scroll(function() {
                    me.reset();
                }).resize(function() {
                    me.reset();
                });
            },
            showMsg: function() {
                var $ul = $('#select-' + this.id + '-results');
                $ul.children('.select-results-message').remove();

                if (!$('[role="treeitem"]:visible', $ul).length) {
                    $('<li role="treeitem"class="select-results-option select-results-message">' + this.options.notFound + '</li>').appendTo($ul);
                }
            },
            getIconClass: function() {
                var iconObj = {
                    0: 'select-selection-arrow-triangle',
                    1: 'select-selection-arrow-line'
                };
                return iconObj[this.options.icon] || iconObj[0];
            },
            renderOptions: function(data) {
                var me = this,
                    optsHtml = '';
                data = data || this.options.data;
                $.each(data, function() {
                    var optHtml = '',
                        getOptHtml = function() {
                            var text = (this.icon ? '<img src="' + this.icon + '">' : '') + this.text;
                            if (this.link) {
                                text = '<a href="' + this.link + '" target="' + me.options.optionLinkTarget + '">' + text + '</a>';
                            }
                            return '<li class="select-results-option" role="treeitem" data-value="' + this.value + '">' + text + '</li>';
                        };
                    if (this.type === 'optgroup') {
                        optHtml += '<li class="select-results-option" role="group">';
                        optHtml += '	<strong class="select-results-group">' + this.text + '</strong>';
                        optHtml += '	<ul class="select-results-options select-results-options-nested">';
                        $.each(this.children, function() {
                            optHtml += getOptHtml.call(this);
                        });
                        optHtml += '	</ul>';
                        optHtml += '</li>';
                    } else {
                        optHtml = getOptHtml.call(this);
                    }
                    optsHtml += optHtml;
                });
                this.optsNode.find('.select-results-options').html(optsHtml);

            },

            renderNode: function() {
                var nodeHtml =
                    '<div class="select-container select-container-default">' +
                    '	<div class="selection">' +
                    '		<div class="select-selection select-selection-single">' +
                    '			<span class="select-selection-rendered" id="select-' + this.id + '-container" title=""></span>' +
                    '			<span class="select-selection-arrow">' +
                    '				<b></b>' +
                    '			</span>' +
                    '		</div>' +
                    '	</div>' +
                    '</div>';
                this.node = $(nodeHtml).attr('id', 'select-container-' + this.id).addClass(this.options.skin).css({
                    minWidth: this.options.width || (this.$select.outerWidth() + 10)
                });

                if (this.options.width) {
                    this.node.css('width', this.options.width);
                }
                this.node.find('.select-selection-arrow').addClass(this.getIconClass());
                return this;
            },

            showOptions: function() {
                var me = this,
                    value = this.$select.val();

                if (!this.optsNode) {
                    this.optsNode = $(this.tmpl).addClass(this.options.skin);
                    if (this.options.allowSearch) {
                        this.optsNode.find('.select-dropdown').prepend('<div class="select-search">' +
                            '			<input type="text" class="select-search-field" autocomplete="off">' +
                            '		</div>');
                    }
                    this.optsNode.find('.select-results-options').attr('id', 'select-' + this.id + '-results');
                    if (this.options.optionLink) {
                        this.optsNode.addClass('select-container-link');
                    }
                    this.renderOptions();
                    this.bindOptsEvent();
                }
                $('[data-value="' + value + '"]', this.optsNode).addClass('active select-options-result-highlighted');
                this.optsNode.css({
                    zIndex: me.options.zIndex || 1024
                }).appendTo('body');


                return me;
            },
            reset: function() {
                if (!this.optsNode) {
                    return;
                }
                var width = this.node.outerWidth(),
                    height = this.node.outerHeight(),
                    offset = this.node.offset(),
                    winHeight = $(window).height(),
                    scrollTop = $('body').scrollTop(),
                    optsHeight = this.optsNode.children().outerHeight(),
                    left = offset.left,
                    top = offset.top + height,
                    className = 'below';
                if (winHeight + scrollTop - height - offset.top < optsHeight && offset.top - scrollTop > optsHeight) {
                    top = offset.top - optsHeight;
                    className = 'above';
                }
                this.optsNode.css({
                        left: left,
                        top: top,
                        position: 'absolute',
                        width: this.options.selectionWidth || width
                    }).find('.select-dropdown')
                    .removeClass('select-dropdown-above select-dropdown-below')
                    .addClass('select-dropdown-' + className);
                this.node
                    .removeClass('select-container-above select-container-below')
                    .addClass('select-container-' + className);
                return this;
            },
            close: function() {
                if (this.optsNode) {
                    this.optsNode.hide();
                    this.optsNode = null;
                    this.open = false;
                    this.node.removeClass('select-container-open');
                }
            },

            changeData: function(data) {
                this.options.data = data;
                var value = this.$select.val();
                var html = '';
                if (this.options.placeholder) {
                    html += '<option></option>';
                }
                this.options.data = data;
                $.each(data, function(i, item) {
                    if (item.type === 'optgroup') {
                        html += '<optgroup label="' + item.text + '">';
                        $.each(item.children, function(n, _item) {
                            html += '<option value="' + _item.value + '" ' + (_item.icon ? 'data-icon="' + _item.icon + '"' : '') + (_item.link ? 'data-link="' + _item.link + '"' : '') + '>' + _item.text + '</option>';
                        });
                        html += '</optgroup>';
                    } else {
                        html += '<option value="' + item.value + '">' + item.text + '</option>';
                    }
                });
                this.$select.html(html).val(value);
                this.setValue();
                this.dispatchEvent('change');
                this.open && this.renderOptions();
            },
            tmpl: '<div class="select-container select-container-open">' +
                '	<div class="select-dropdown">' +

                '		<div class="select-results">' +
                '			<ul class="select-results-options" role="tree" id="">' +

                '			</ul>' +
                '		</div>' +
                '	</div>' +
                '</div>'
        });

        $.fn.select = function(options) {
            _options = $.extend({
                placeholder: '', // 为空时显示默认值
                allowSearch: true, // 显示搜索文本框
                allowClear: false, // 显示删除按钮
                icon: 0, // 右侧小图标按钮 0:▲,1:∧
                notFound: 'No results found', // 搜索无果时显示
                width: '', // 下拉框宽度。为空或false值时。默认为100%, 待使用栅格时，此值无甚大用
                selectionWidth: '', // 下拉列表宽度 
                skin: '', // 样式啊。
                optionIcon: false, // 图片选项
                optionLink: false, // 做为链接列表
                optionLinkTarget: '_self', // 链接打开方式
                onrendered: $.noop, // 渲染后事件
                onchange: $.noop, // 值发生改变后事件，当值为空时，触发onclear事件，不会触发此事件
                onclear: $.noop // 清空值后事件
            }, options);
            return this.each(function() {
                var data = [];
                var options = $.extend({}, _options, $(this).data());
                $(this).children().each(function() {

                    var item = {},
                        getOptData = function() {
                            var data = {
                                type: 'option',
                                text: this.text,
                                value: this.value === undefined ? this.text : this.value,
                                isSelected: this.selected
                            };
                            options.optionIcon && $(this).data('icon') && (data.icon = $(this).data('icon'));
                            options.optionLink && $(this).data('link') && (data.link = $(this).data('link'));

                            return data.value ? data : {};
                        };
                    if (this.tagName === 'OPTGROUP') {
                        item.type = 'optgroup';
                        item.text = this.label;
                        item.children = [];
                        $(this).children().each(function() {
                            !$.isEmptyObject(item) && item.children.push(getOptData.call(this));
                        });
                    } else {
                        item = getOptData.call(this);
                    }!$.isEmptyObject(item) && data.push(item);
                });

                if (this.select) {
                    this.select.changeData(data);
                } else {
                    this.select = new Select($.extend({}, options, {
                        data: data,
                        elm: this
                    }));
                }

            });
        };
    })();



    // $.hash
    //获取：hash()  hash('get',key)
    //设置：hash(obj|string)  hash(set,obj)  hash(set,key,value)
    //与queryToObject同时使用
    $.hash = function() {
        var action = {
            set: function() {
                var hashObj = $.queryToObject($.hash());
                if (arguments.length === 1) {
                    var myObj = arguments[0];
                    typeof myObj === 'object' && $.extend(hashObj, myObj);
                } else {
                    hashObj[arguments[0]] = arguments[1];
                }
                $.hash(hashObj);
            },
            get: function(key) {
                return $.queryToObject($.hash())[key];
            },
            remove: function(key) {
                var hashObj = $.queryToObject($.hash());
                delete hashObj[key];
                $.hash(hashObj);
            }
        };
        switch (arguments.length) {
            case 0:
                return window.location.hash.replace(/^[^#]*#?(.*)$/, '$1');
            case 1:
                var hash = arguments[0];
                if (typeof hash === 'string') {
                    window.location.hash = (hash[0] === '#' ? '' : '#') + hash;
                }
                if (typeof hash === 'object') {
                    window.location.hash = '#' + $.param(hash);
                }
                break;
            case 2:
                return action[arguments[0]](arguments[1]);
            case 3:
                return action[arguments[0]](arguments[1], arguments[2]);
        }
    };

    // queryToObject
    // 将字符串a=1&b=2&c=3转化为对象{a:1,b:2,c:3}
    $.queryToObject = function( /*String*/ str) {
        var dec = decodeURIComponent,
            qp = str.split('&'), //query parameters
            ret = {}, // return
            name,
            val;
        qp.forEach(function(item) {
            if (!item.length) return;
            var s = item.indexOf('=');
            if (s === -1) {
                name = dec(item);
                val = '';
            } else {
                name = dec(item.slice(0, s));
                val = dec(item.slice(s + 1));
            }
            if (typeof ret[name] === 'string') {
                ret[name] = [ret[name]];
            }
            Array.isArray(ret[name]) ? ret[name].push(val) : (ret[name] = val);
        });
        return ret;
    };

    // 千位分割符
    $.thousandBitSeparator = function(num) {
        return num && (num
            .toString().indexOf('.') != -1 ? num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
                return $1 + ",";
            }) : num.toString().replace(/(?=(?!\b)(\d{3})+$)/g, ','));
    };

    // calendar defaults
    $.fn.calendar && $.extend($.fn.calendar.defaults, {
        width: 251,
        height: 200,
        zIndex: 999,
        format: 'yyyy-mm-dd'
    });


    // 收藏产品
    // options {
    // 		productId // 产品id
    // 		callback: // 收藏成功后的回调函数
    // 		loadingElm: $selector // 在哪个元素上显示loading
    // }
    $.addToWish = function(options) {
        if (!options || !/^[1-9]+\d*$/.test(options.productId)) {
            return;
        }

        options.loadingElm && options.loadingElm.loading(true);
        $.ajax({
            url: '/ajaxload/account-addWishlist.html',
            type: 'post',
            dataType: 'json',
            data: {
                products_id: options.productId
            },
            success: function(result) {
                if (result.status) {
                    options.callback && options.callback();
                    $.alert({
                        title: result.label,
                        content: result.message,
                        ok: false,
                        autoClose: 2
                    });
                } else if (result.noLogin) {
                    $.alert({
                        title: result.label,
                        content: result.message,
                        okValue: result.btn,
                        ok: function() {
                            window.location.href = result.url;
                        }
                    });
                } else {
                    $.alert({
                        title: result.label,
                        content: result.message,
                        okValue: result.btn,
                        autoClose: 3
                    });
                }
            },
            complete: function() {
                options.loadingElm && options.loadingElm.loading(false);
            }
        });
    };

    // 分享
    $.share = {
        getScript: function(url, id) {
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = url;
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', id));
        },
        tumblr: function(elm) {
            elm.href = '//www.tumblr.com/widgets/share/tool?canonicalUrl=' + window.location.href;
        },
        twitter: function(elm) {
            var text = document.title + '---' + window.location.href;
            elm.href = '//twitter.com/intent/tweet?text=' + text;
        },
        facebook: function(options) {
            options = options || {};
            window.fbAsyncInit = function() {
                FB.init({
                    appId: '1543133879317815',
                    xfbml: true,
                    version: 'v2.4',
                    status: true,
                    cookie: true
                });
            };
            $.share.getScript('//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5', 'facebook-jssdk');
            /* 点击执行分享，登记用户分享的数据 */
            $.shareFacebook = function(shareCode) {
                // $('.share_feedback').hide();
                var image = options.img || $('meta[property="og:img"]').attr("content");
                var title = options.title || $('meta[property="og:title"]').attr("content");
                var url = options.url || $('meta[property="og:url"]').attr("content");
                var product_desctiption = options.description || $('meta[property="og:description"]').attr("content");
                var message = options.message || $('meta[property="og:message"]').attr("content");
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
                    if (response != undefined) {
                        message && ZSAlert(message, '', 'OK');
                        options.callback && options.callback();
                    } else {

                    }
                });
            };
        },
        polyvore: function() {
            $.share.getScript('//akwww.polyvorecdn.com/rsrc/add_to_polyvore.js', 'polyvore-jssdk');
        },
        pin: function() {
            $.share.getScript('//assets.pinterest.com/js/pinit.js', 'pin-jssdk');
        }
    };


})(jQuery);

;
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
})(jQuery);

$(function(){
  // 默认配置
    var _option = {
        align: "left", // 当前展示图片的位置，则放大的图片在其相对的位置
        source_image_width: 1440, // 放大图片的宽
        source_image_height: 1920, // 放大图片的高
        zoom_area_width: 480, // 放大图片的展示区域的宽
        zoom_area_height: "justify", // 放大图片的展示区域的高
        scale_height: 400,
        scale_width:300,
        thumb_image_height:600,
        thumb_image_width: 600,
        speed: 600,
        keyboard: true,
        right_to_left: false
    };


    var $div = $('.img-big-container');
    console.log($div);
    var $img = $('img.big', $div);
    var scxy = _option.scale_width / _option.scale_height;
    _option.zoom_area_height = _option.zoom_area_width / scxy;
    _option.source_image_width = _option.zoom_area_width / (_option.scale_width / _option.thumb_image_width);
    _option.source_image_height = _option.zoom_area_height / (_option.scale_height / _option.thumb_image_height);

    var $etalage_magnifier, $etalage_magnifier_img, $etalage_zoom_area, $etalage_zoom_img;

    // 遮罩显示的区域
    if (!$(".etalage_magnifier").length) {
        $etalage_magnifier = $('<div class="etalage_magnifier"><img src="" /></div>');
        $etalage_magnifier_img = $etalage_magnifier.find('img');
        console.log($etalage_magnifier_img);
        $div.append($etalage_magnifier);

        $etalage_magnifier.css({
            top: top,
            left: left
        });
        $etalage_magnifier_img.attr('src', $img.data('original')).css({
            width: _option.thumb_image_width,
            height: _option.thumb_image_height
        });
        $etalage_magnifier.css({
            width: _option.scale_width,
            height: _option.scale_height
        });
    }

    // 大图
    if (!$('.etalage_zoom_area').length) {
        $etalage_zoom_area = $('<div class="etalage_zoom_area"><img class="etalage_zoom_img" /></div>');
        $etalage_zoom_img = $etalage_zoom_area.find('.etalage_zoom_img');
        var top = 0,
            left = 0;

        $div.append($etalage_zoom_area);

        if (_option.align == "left") {
            top = 0;
            left = 0 + _option.thumb_image_width + _option.zoom_area_distance;
        }

        $etalage_zoom_area.css({
            top: top,
            left: left
        });
        $etalage_zoom_img.css({
            width: _option.source_image_width,
            height: _option.source_image_height
        });
    }


    $etalage_zoom_area.css({
        width: _option.zoom_area_width,
        height: _option.zoom_area_height
    });

    $div.add($etalage_magnifier).mousemove(function(event) {
        var xpos = event.pageX - $div.offset().left,
            ypos = event.pageY - $div.offset().top,
            magwidth = _option.scale_width,
            magheight = _option.scale_height,
            magx = 0,
            magy = 0,
            bigposx = 0,
            bigposy = 0;

        if (xpos < _option.thumb_image_width / 2) {
            magx = xpos > magwidth / 2 ? xpos - magwidth / 2 : 0;
        } else {
            magx = xpos + magwidth / 2 > _option.thumb_image_width ? _option.thumb_image_width - magwidth : xpos - magwidth / 2;
        }
        if (ypos < _option.thumb_image_height / 2) {
            magy = ypos > magheight / 2 ? ypos - magheight / 2 : 0;
        } else {
            magy = ypos + magheight / 2 > _option.thumb_image_height ? _option.thumb_image_height - magheight : ypos - magheight / 2;
        }
        var scalex = magx / _option.thumb_image_width;
        var scaley = magy / _option.thumb_image_height;
        bigposx = _option.source_image_width * scalex;
        bigposy = _option.source_image_height * scaley;

        $etalage_magnifier.css({
            'left': magx,
            'top': magy
        });
        $etalage_magnifier_img.css({
            'left': -magx,
            'top': -magy
        });

        $etalage_zoom_img.css({
            'left': -bigposx,
            'top': -bigposy
        });
        if (!$etalage_magnifier_img.is(':visible')) {
            $(this).trigger('mouseenter');
        }
    }).mouseenter(function(event) {
        // $img = $('img.big', $div);
        $etalage_zoom_img.attr("src", $img.data('original'));
        $etalage_magnifier_img.attr('src', $img.data('original'));
        $etalage_zoom_area.css({
            "background-image": "none"
        }).stop(true, true).fadeIn(400);
        $etalage_magnifier.stop(true, true).animate({
            'opacity': 0.6
        }, _option.speed * 0.7).show();


    }).mouseleave(function(event) {
        $etalage_zoom_area.stop(true, true).fadeOut(400);
        $etalage_magnifier.stop(true, true).animate({
            'opacity': 0
        }, _option.speed * 0.7, function() {
            $(this).hide();
        });

    });
});