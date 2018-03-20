<template>
<div ><!--class="product-info-wrap"-->
<!--<homeHeader></homeHeader>-->
<!---<div class="inhere">
	   <ul itemscope="" itemtype="http://schema.org/BreadcrumbList">
												<li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a itemprop="item" href="https://www.newchic.com/" data-ga-tag="top_Home_link_180122" data-ga-ac="click"><span itemprop="name">Home</span></a><meta itemprop="position" content="1"></li>
					<li>»</li>
																<li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a itemprop="item" href="https://www.newchic.com/mens-clothing-c-3581/" data-ga-tag="top_Category_link_180122" data-ga-ac="click"><span itemprop="name">Men</span></a><meta itemprop="position" content="2"></li>
					<li>»</li>
																<li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a itemprop="item" href="https://www.newchic.com/athleisure-c-4427/" data-ga-tag="top_Category_link_180122" data-ga-ac="click"><span itemprop="name">Athleisure </span></a><meta itemprop="position" content="3"></li>
					<li>»</li>
																<li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><b><a itemprop="item" href="https://www.newchic.com/bottoms-c-4429/" data-ga-tag="top_Category_link_180122" data-ga-ac="click" target="_self"><span itemprop="name">Bottoms</span></a><meta itemprop="position" content="4"></b></li>
								   </ul>
	</div>-->
      <div class="wrap pro-detail-container  prod-square-container" id="maindet">
        <div class="goods_view clearfix">
          <div class="pro-buy-container">
            <div class="goods_main">
              <div itemprop="name" class="goods_title">
                <h1 class="title">
                  {{productData.name}}
                </h1>
              </div>
              <ul class="list-inline sub-desc">
                <li>
                  <a href="">
                    <div class="star-wrap">
                      <span class="star">
                      <i style="width:0%;"></i>
                      </span>
                    </div>
                    <span>0.0 </span>
                  </a>
                </li>
                <li class="text-muted">SKU{{productData.sku}}</li>
              </ul>
              <div style="display: none; visibility: hidden;">
                <ul class="info  clearfix margin-bottom-10">
                  <li class="review">
                    <a href="" rel="nofollow">
                    <i>
                    <i style="width:0%"></i>
                    </i>  
                    <span class="num" onclick="set_product_detail_ga('Review Look')">0.0</span>
                    </a>
                  </li>
                  <li class="write">
                    <span>|</span>
                    <a href="" onclick="set_product_detail_ga('Write a Review Top')" rel="nofollow"><i></i>Write a review</a>
                  </li>
                  <li class="write">
                  </li>
                  <li class="sku" id="showSku">
                    <span class="text-muted">SKU{{productData.sku}}</span> 
                  </li>
                  <!--<script>$(function(){
                    if($.cookie('showSku')){$('#showSku').show();}
                    $('.pre_order_titles a').mouseover(function () {
                        $('.pre_ask_tips').show();
                    }).mouseout(function () {
                      $('.pre_ask_tips').hide();
                    })
                    });
                  </script>
                  <script>$(function(){if($.cookie('showSku')){$('#showSku').show();}});</script>-->
                </ul>
                <div class="status"></div>
                <div id="stockMsgCache" style="display:none;"></div>
              </div>
              <div class="goods_main_tabs">
                <div class="content">
                  <div class="child">
                    <div class="child_list shopping_content">
                      <div class="goods_main_list" style="margin-left:0;">
                        <!-- <span class="title">Price</span> -->
                        <div class="block-wrap price-info-wrap" v-html="productData.price_html">
                          <!-- <div class="price-wrap">
                            <span class="currency"><strong>US$</strong></span><span class="price_number" oriprice="26.25" ori_min_price="" ori_max_price="" now_price_max="" now_price_min="">26.25</span>
                            <span class="price-old price_old" oriprice="51.03">US$51.03</span>
                            <span class="coupon">-49%</span>
                          </div>
                          <div class="discount-wrap">
                            <ul>
                            </ul>
                          </div> -->
                        </div>
                        <!--<script>
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
                          
                        </script>-->
                        <!-- <div class="none">
                          <div class="goods_main_price clearfix">
                            <div class="price_number" oriprice="26.25" ori_min_price="" ori_max_price="" now_price_max="" now_price_min="">26.25</div>
                            <div class="price_other">
                              <div class="price_other_sale">
                                <span class="price_old" oriprice="51.03"> US$51.03</span>
                                <span class="price_off">49% OFF</span>
                              </div>
                            </div>
                          </div>
                        </div> -->
                      </div>
                      <!--special product start-->
                      <div class="none">
                        <span class="price" id="specialProduct" style="display:none;" pre_categoriy_id="3592" message="buy more and save more" special="Special" message2="More deals"></span>
                      </div>
                      <!--end-->
                      <!--产品详情页选择属性提示框-->
                      <div class="info_title_nc" flg="0">
                        <div class="title_h1" style="display:none;">
                          <h1>Please&nbsp;select&nbsp;attributes</h1>
                          <i class="nc-icon nc-icon-close"></i>
                        </div>
                        <!-- <div class="goods_main_list">
                          <span class="title ">Color:</span>
                          <div class="goods_main_attr clearfix" option_id="379" attr_data="0">
                            <ul class="color clearfix">
                              <li value_id="16979" class="bag " data-ga-tag="top_color-clearfix1_image_180122" data-ga-ac="click">
                                <div><img src="https://img2.newchic.com/thumb/other_items/oaupload/newchic/images/4B/D6/69937a4b-4f18-4c6c-bd31-587cbf87b0b0.jpg" title="Black1" alt="Breathable Sneakers Knitted Strech Fabric Lace Up Sport Shoes" viewimage="https://img2.newchic.com/thumb/view/oaupload/newchic/images/4B/D6/69937a4b-4f18-4c6c-bd31-587cbf87b0b0.jpg" largeimage="https://img2.newchic.com/thumb/large/oaupload/newchic/images/4B/D6/69937a4b-4f18-4c6c-bd31-587cbf87b0b0.jpg"></div>
                              </li>
                              <li value_id="16974" class="bag " data-ga-tag="top_color-clearfix1_image_180122" data-ga-ac="click">
                                <div><img src="https://img1.newchic.com/thumb/other_items/oaupload/newchic/images/8C/D0/0b70b810-0cf8-4a0d-9471-2ac06c8b041e.jpg" title="Grey1" alt="Breathable Sneakers Knitted Strech Fabric Lace Up Sport Shoes" viewimage="https://img.newchic.com/thumb/view/oaupload/newchic/images/8C/D0/0b70b810-0cf8-4a0d-9471-2ac06c8b041e.jpg" largeimage="https://img1.newchic.com/thumb/large/oaupload/newchic/images/8C/D0/0b70b810-0cf8-4a0d-9471-2ac06c8b041e.jpg"></div>
                              </li>
                              <li value_id="26390" class="bag " data-ga-tag="top_color-clearfix1_image_180122" data-ga-ac="click">
                                <div><img src="https://img2.newchic.com/thumb/other_items/oaupload/newchic/images/A1/48/ca9ea25e-82ae-4d63-837f-11539e2b431e.jpg" title="Rose 1" alt="Breathable Sneakers Knitted Strech Fabric Lace Up Sport Shoes" viewimage="https://img1.newchic.com/thumb/view/oaupload/newchic/images/A1/48/ca9ea25e-82ae-4d63-837f-11539e2b431e.jpg" largeimage="https://img2.newchic.com/thumb/large/oaupload/newchic/images/A1/48/ca9ea25e-82ae-4d63-837f-11539e2b431e.jpg"></div>
                              </li>
                              <li value_id="16901" class="bag " data-ga-tag="top_color-clearfix1_image_180122" data-ga-ac="click">
                                <div><img src="https://img2.newchic.com/thumb/other_items/oaupload/newchic/images/74/52/881c110a-ad63-40b0-ab46-500782068e39.jpg" title="Black 2" alt="Breathable Sneakers Knitted Strech Fabric Lace Up Sport Shoes" viewimage="https://img2.newchic.com/thumb/view/oaupload/newchic/images/74/52/881c110a-ad63-40b0-ab46-500782068e39.jpg" largeimage="https://img2.newchic.com/thumb/large/oaupload/newchic/images/74/52/881c110a-ad63-40b0-ab46-500782068e39.jpg"></div>
                              </li>
                              <li value_id="16975" class="bag " data-ga-tag="top_color-clearfix1_image_180122" data-ga-ac="click">
                                <rn 54 NC Points rn 54 NC Points div><img src="https://img1.newchic.com/thumb/other_items/oaupload/newchic/images/E9/B8/a081e30e-ba8d-46b1-89fe-2070f0e4d38c.jpg" title="Grey2" alt="Breathable Sneakers Knitted Strech Fabric Lace Up Sport Shoes" viewimage="https://img.newchic.com/thumb/view/oaupload/newchic/images/E9/B8/a081e30e-ba8d-46b1-89fe-2070f0e4d38c.jpg" largeimage="https://img.newchic.com/thumb/large/oaupload/newchic/images/E9/B8/a081e30e-ba8d-46b1-89fe-2070f0e4d38c.jpg"></rn>
                              </li>
                              <li value_id="26391" class="bag " data-ga-tag="top_color-clearfix1_image_180122" data-ga-ac="click">
                                <div><img src="https://img.newchic.com/thumb/other_items/oaupload/newchic/images/9C/D0/7fe47f3b-b551-4228-9278-9cfdd7cba98b.jpg" title="Rose 2" alt="Breathable Sneakers Knitted Strech Fabric Lace Up Sport Shoes" viewimage="https://img1.newchic.com/thumb/view/oaupload/newchic/images/9C/D0/7fe47f3b-b551-4228-9278-9cfdd7cba98b.jpg" largeimage="https://img2.newchic.com/thumb/large/oaupload/newchic/images/9C/D0/7fe47f3b-b551-4228-9278-9cfdd7cba98b.jpg"></div>
                              </li>
                              <li value_id="16221" class="bag " data-ga-tag="top_color-clearfix1_image_180122" data-ga-ac="click">
                                <div><img src="https://img.newchic.com/thumb/other_items/oaupload/newchic/images/3F/AA/2ed68026-e167-4a2a-b203-b2f47133e9f8.jpg" title="White" alt="Breathable Sneakers Knitted Strech Fabric Lace Up Sport Shoes" viewimage="https://img2.newchic.com/thumb/view/oaupload/newchic/images/3F/AA/2ed68026-e167-4a2a-b203-b2f47133e9f8.jpg" largeimage="https://img2.newchic.com/thumb/large/oaupload/newchic/images/3F/AA/2ed68026-e167-4a2a-b203-b2f47133e9f8.jpg"></div>
                              </li>
                            </ul>
                          </div>
                        </div> -->
                        <div class="goods_main_list" v-for="(att, attIndex) in productData.attributes" v-if="showAttributes">
                          <span class="title size_list_box"><!-- todo(neirat): what about points -->
                            <ul class="cy_list" data-ga-tag="top_cy_title-active_datalist_180122" data-ga-ac="mouseenter">
                              <li class="cy_title active"><a href="javascript:void(0);" size="US" id="sizeText">{{att.name}}</a>  </li><!--<i class="nc-icon nc-icon-down"></i>-->
                            </ul>
                            <!-- <div class="list" style="display: none;">
                              <ul>
                                <li class="active"><a href="javascript:void(0);" size="US">Size(US)</a></li>
                                 <li><a size="UK" href="javascript:void(0);">Size(UK)</a></li>
                                <li><a size="AU" href="javascript:void(0);">Size(AU)</a></li>
                                <li><a size="EU" href="javascript:void(0);">Size(EU)</a></li>
                                <li><a size="CA" href="javascript:void(0);">Size(CA)</a></li>
                                <li><a size="FR" href="javascript:void(0);">Size(FR)</a></li>
                                <li><a size="IT" href="javascript:void(0);">Size(IT)</a></li>
                                <li><a size="RU" href="javascript:void(0);">Size(RU)</a></li>
                                <li><a size="JA" href="javascript:void(0);">Size(JA)</a></li>
                                <li><a size="BR" href="javascript:void(0);">Size(BR)</a></li>
                              </ul>
                            </div> -->
                          </span>
                          <div class="goods_main_attr clearfix" option_id="380" attr_data="0">
                            <ul class="size clearfix">
                              <li v-for="option in att.options" v-if="showOption(option, attIndex)" :value_id="option" :value_name="option"  v-on:click="selectAttrOption(att.name, option)" v-bind:class="{ active: (selectedAttrs[att.name] == option) }">
                                {{option}}</li>
                            </ul>
                          </div>
                        </div>
                        <input type="hidden" id="table_type" value="_shoesType">
                      </div>
                      <div class="goods_main_list shipping-time-wrap ">
                        <span class="title">Shipping:</span>

                        <div class="shipping-time-msg" data-default-msg="Expected dispatched in 3 bussiness days.">Expected dispatched in 3 bussiness days.</div>
                      </div>
                      <div class="goods_main_list qty-wrap">
                        <span class="title">Qty <s id="maximum" str="Maximum" style="display:none;" data-default="26">Maximum: 26</s> <s id="dropshipPro" style="display:none;" str="Maximum"></s></span>
                        <form id="detailCartForm">
                          <input type="hidden" id="isCheckStock" value="">
                          <input type="hidden" name="sku" id="sku" value="SKU715138">
                          <input type="hidden" name="products_id" id="products_id" value="1178309">
                          <div class="goods_main_quantity relative">
                            <div class="quantity_box">
                              <div style="float:left; position:relative;">
                                <span class="prev gray" v-on:click="ZSquantityPrev" data-ga-tag="top_quantity_box_button_180122" data-ga-ac="click"><i class="nc-icon nc-icon-minus"></i></span>
                                <input type="text"  v-model="qty" name="qty" id="qty" maximum="26" autocomplete="off" clearstock="0" limitproduct="" buylimit="" wsbuymin="" maxlength="5" data-ga-tag="top_quantity_box_text_180122" data-ga-ac="focus">
                                <span class="next" v-on:click="ZSquantityNext" data-ga-tag="top_quantity_box_button_180122" data-ga-ac="click"><i class="nc-icon nc-icon-plus"></i></span>
                              </div>
                            </div>
                            <div class="pro-detail-ds-download hidden" data-sku="SKU715138" data-category="0" data-price-code="" data-country="223">
                              <i class="icon icon-download"></i> <span class="text-underline">Description Export</span>             
                            </div>
                            <div class="my-inventory hidden" data-id="1178309" data-poa="SKU715138">
                              <!--href="/?com=account&t=dropshipPayment" target="_blank"-->
                              <a class="add_inven btn-set-alarm" data-href="" href="javascript:void(0);" data-toggle="tooltip" data-skin="tooltip-pro-inventory" data-placement="bottom" data-already-title="this item is already in &quot;my inventory&quot;" data-original-title="Check the stock at My Inventory" data-pid="1178309" data-sku="SKU715138">+ Add To inventory</a>
                            </div>
                            <div class="each" style="display:none;"><em class="price" oriprice=""></em> Each</div>
                          </div>
                        </form>
                      </div>
                      <div class="pre_order_detail" style="display: none">
                        <h1 class="pre_order_titles">
                          : <span id="shippedTime">Sep 23,2016</span>
                          <a href="javascript:void(0);">
                            <i class="pre_ask"></i>
                            <dl class="pre_ask_tips" style="display: none;">
                              <dt>
                                <span class="tle"></span>
                                <span class="art_tle">1. The Presale period will be lasting for 7 days .Your order will be shipped in 5 days after the Presale period has come to an end, you'll receive a confirmation email which includes a tracking number after that.</span>
                                <span class="art_tle">2. </span>
                                <span class="art_tle">3. </span>
                                <span class="art_tle">4. </span>
                              </dt>
                              <dd></dd>
                            </dl>
                          </a>
                        </h1>
                        <div class="is_squire" style="display: none">
                          <ul class="clearfix">
                            <li class="clearfix">
                              <span class=" pull-left pre_zeros">0</span>
                              <span class="pull-right"></span>
                            </li>
                            <li></li>
                            <li></li>
                          </ul>
                          <div class="pre_order_load">
                            <p class="pre_order_prog">&nbsp;</p>
                          </div>
                          <ol class="clearfix">
                            <li class="pre_on price" oriprice=""></li>
                            <li class="price"></li>
                            <li class="price"></li>
                          </ol>
                        </div>
                      </div>
                      <div class="goods_main_buy normall_buy">
                        <div class="buy_btn clearfixes" style="height:auto">
                          <span class="addcart  " v-on:click="addToCart" msg="%d item(s) added to bag" mtitle="Add to bag" mbtn="View bag" mbtn1="Close" product_sku="SKU715138" stitle="Sold out" data-ga-tag="top_addcart_button_180122" data-ga-ac="click"><b><i></i>Add to bag</b></span>
                          <span class="addwish " onclick="$.addToWish();" data-ga-tag="top_addwish_button_180122" data-ga-ac="click"><b id="uy"><i id="gh" data="Adds" data-num="220" class="nc-icon nc-icon-heart-linear"></i> (<b class="count">220</b>)</b></span><span id="xiangou_tip" style="display:none;">You have already bought this product. </span>
                        </div>
                      </div>
                      <div class="order-earn-points-tips" data-language-id="LP_ORDER_THIS_EARN/LP_NEWCHIC_POINTS">
                        Order &amp; Earn <span>27</span> NC Points
                      </div>
                      <div class="shipping-method-wrap block-wrap">
                        <dl>
                          <dt class="clearfix">
                            <h3 class="pull-left">Delivery &amp; Return</h3>
                            <span class="pull-right margin-right-20 btn-shipping-method"><b><i class="nc-icon font-12 nc-icon-plus" data-ga-tag="top_nc-icon font-12 nc-icon-plus_button_180122" data-ga-ac="click"></i></b></span>
                          </dt>
                          <dd class="shipping-rule none" style="display: none; height: 255px; padding-top: 0px; margin-top: 0px; padding-bottom: 15px; margin-bottom: 0px;">
                            <ul>
                              <li>
                                <p><b>1. Return Policy:</b></p>
                                <p>Every order from Newchic has a 14-day return or refund guarantee.</p>
                                <p>Request:</p>
                                <ol>
                                  <li>Within 14 days from the date you received the item.</li>
                                  <li>Items received unused, undamaged and in original package.</li>
                                  <li>Return shipping fee is paid by buyer.</li>
                                </ol>
                                <p>
                                  <a href="/returnAndRefund">Learn More</a>
                                </p>
                              </li>
                              <li>
                                <p><b>2. Delivery:</b></p>
                                <p>We will offer you a gift for the order's tracking code on orders over US$30.</p>
                                <p>Total delivery time = Processing time + Shipping time .</p>
                                <p><a href="/shippingMethods">Learn More</a></p>
                              </li>
                            </ul>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             <!-- <script type="text/x-jsrender" id="set-inventory-tmpl">
                <p>Please enter your inventory alert number,you will receive an email notice when the inventory is less than the one you set.</p>
                <div class="text-center margin-top-10">
                  <input type="text" name="qty" class="margin-right-20" data-msg-required="please input you alarm Number.">
                  <button class="btn btn-save btn-pink">Submit</button>
                </div>
              </script>-->
              <!--<style>
                .buy_btn .addcart,.buy_btn .addwish{
                margin-bottom: 10px;
                }
                .text-center .zs-dialog-body{
                text-align: center;
                }
              </style>-->
              <!--<script>
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
              </script>-->
            </div>
          </div>
          <div class="pro-img-container" style="position: relative; top: 62px;">
            <div class="clearfix bag  square">
              <div class="img-list-container pull-left">
                <span class="prev" data-ga-tag="top_prev_button_180122" data-ga-ac="click"><i class="nc-icon nc-icon-up"></i></span>
                <span class="next" data-ga-tag="top_next_button_180122" data-ga-ac="click"><i class="nc-icon nc-icon-down"></i></span>
                <div class="img-box">
                  <ul class="img-list" data-ga-tag="top_img-list_image_180122" data-ga-ac="mouseenter" style="margin-top: -79px;">
                    <li class="item" v-for="image in productData.images">
                      <div class="img" style="position: relative;">
                        <img :data-big-img="image.src" :data-original="image.src" :src="image.src" :alt="image.name" class="reals" style="display: inline;">
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="pull-left" style="position: relative;margin-top: 0px">
                <div class="img-big-container" style="margin-top: 0">
                  <div class="img">
                    <img itemprop="image" id="defaultPicZoom" src="" data-original="" class="big reals" alt="loading" style="display: inline;">
                  </div>
                </div>
              </div>
            </div>
            <div class="share-wrap">
              <ul class="list-inline">
                <li class="share_fb share-facebook">
                  <a href="javascript:void(0);" onclick="shareFacebook();" class="middle_shareFb_button_171116" data-point-id="17319014048" data-ga-tag="middle_nc-icon nc-icon-facebook_button_180122" data-ga-ac="click">
                  <i class="nc-icon nc-icon-facebook"></i><span>Get 8% coupon</span>
                  </a>
                </li>
                <li class="share_pin share-pin">
                  <a href="javascript:void(0);" onclick="pin(1178309);" class="cando middle_sharePin_button_171116" data-point-id="17319014047" data-ga-tag="middle_nc-icon nc-icon-pin_button_180122" data-ga-ac="click">
                  <i class="nc-icon nc-icon-pin"></i><span>Get 8% coupon</span>
                  </a>
                </li>
                <li class="share_tumblr">
                  <a href="javascript:;" onclick="shareTumblr(this);" target="_blank" class="cando middle_shareTumblr_button_171116" data-point-id="17319014049" data-target="_blank" data-ga-tag="middle_nc-icon nc-icon-tumblr_button_180122" data-ga-ac="click"><i class="nc-icon nc-icon-tumblr"></i></a>
                </li>
                <li class="share_polyvore">
                  <!--<script type="text/javascript" src="//static.newchic.com/default/js/add_to_polyvore.js"></script>-->
                  <a href="" name="addToPolyvore" id="addToPolyvore" data-product-url="https://www.newchic.com/athletic-and-casual-shoes-3596/p-1178309.html?utm_source=share_polyvore" data-image-url="https://img1.newchic.com/thumb/view/oaupload/newchic/images/A1/48/ca9ea25e-82ae-4d63-837f-11539e2b431e.jpg" data-name="Breathable Sneakers Knitted Strech Fabric Lace Up Sport Shoes" data-price="" class="cando middle_sharePolyvore_button_171116" data-point-id="17319014051" data-ga-tag="middle_nc-icon nc-icon-polyvore_button_180122" data-ga-ac="click"><i class="nc-icon nc-icon-polyvore"></i></a>
                </li>
                <li class="share_twitter">
                  <a href="javascript:;" onclick="shareTwitter(this);" target="_blank" class="cando middle_shareTwitter_button_171116" data-point-id="17319014050" data-target="_blank" data-ga-tag="middle_nc-icon nc-icon-twitter_button_180122" data-ga-ac="click"><i class="nc-icon nc-icon-twitter"></i></a>
                </li>
              </ul>
            </div>
            <!--end-->    
          </div>
        </div>
        <div class="clearfix clear"></div>
      </div>
      <div class="wrap pro-detail-container" style="padding-bottom: 50px;">
        <div class="prod-desc-wrap">
          <div class="block-title">Description</div>
          <div class="desc-content expand" style="max-height: 10000px;">
            <div style="display: inline-block; padding-right: 20px;">
              <span v-html="productData.description"></span>
            </div>
            <!-- <img alt="casual shoes" src="https://other.newchic.com/images/oaupload/newchic/images/C2/4E/e72ef90f-9a4c-44dd-870f-4cae16010128.jpg" style="font-size: 16.3636px; width: 400px; height: 400px;"><br> -->
            <br>
            <div>
              &nbsp;
            </div>
            <!-- <div>
              <span style="font-size:16px;"><strong><span style="color:#ff3366;">Please Note:</span></strong><br>
              1.</span><span style="font-size: 16px;">Please see the Size Reference to find the correct size.</span>
            </div>
            <div>
              <span style="color: rgb(51, 51, 51); font-family: Arial, Helvetica, sans-serif; font-size: 16px; line-height: 25.6px;">2.The size of these shoes are smaller than ordinary, we suggest buying a bigger one size.</span>
            </div> -->
            <div id="specification">{ "id" : "Specification", "title" : [], "data" : []}</div>
            <div id="specification_end"></div>
            <!--补加某些分类的描述-->
            <!--补加某些分类的描述EDN-->
          </div>
          <!-- <div class="view-more">
            <a href="javascript:;" class="btn-view-more" data-show="View more" data-hide="Hide" data-ga-tag="middle_nc-icon font-12 nc-icon-down-double_button_180122" data-ga-ac="click"><span>Hide</span> <i class="nc-icon font-12 nc-icon-up-double"></i></a>
          </div> -->
        </div>
        <div class="also-like-wrap">
          <div class="block-title">You might also like</div><!-- todo(neirat): crossed link-->
          <div class="list-wrap">
            <span class="btn-slide prev prevStop" data-ga-tag="middle_btn-slide prev prevStop_button_180122" data-ga-ac="click"><i class="nc-icon nc-icon-left"></i></span>
            <span class="btn-slide next" data-ga-tag="middle_btn-slide next_button_180122" data-ga-ac="click"><i class="nc-icon nc-icon-right"></i></span>
            <div class="list-box">
              <div class="tempWrap" style="overflow:hidden; position:relative; width:1220px">
                
                <ul class="list clearfix" style="width: 2440px; left: 0px; position: relative; overflow: hidden; padding: 0px; margin: 0px;">
                  <li class="item" style="float: left; width: 224px;" v-for="product in productCrossedSell">
                    <div class="img">
                      <a href="" :data-ga-tag="product.name" data-ga-ac="click">
                      
                      <img :src="product.images[0].src" alt="">
                      </a>
                    </div>
                    <p class="text-center">
                      <span class="price" :oriprice="product.price"> {{product.price}}</span>
                    </p>
                  </li> <!--  todo ali  --> 
                
                </ul>
                
              </div>
            </div>
          </div>
        </div>
        <span id="customer-reviews-wrap"></span>
        <div class="customer-reviews-wrap pro-review-container haven_data">
          <div class="block-title">customers reviews ( 0 )</div>
          <ul class="reviews-grade-wrap">
            <li class="grade-wrap">
              <ul class="list-inline">
                <li>Average rating</li>
                <li>
                  <div class="star-wrap">
                    <span class="star">
                    <i style="width: 0%;"></i>
                    </span>
                    <span class="grade">
                    0.0<span> / 5.0</span>
                    </span> 
                  </div>
                </li>
              </ul>
            </li>
            <li class="write-wrap">
              <div class="text-right">
                <a href="" class="btn btn-large" data-ga-tag="down_text-right_button_180122" data-ga-ac="click" target="_self">WRITE A REVIEW</a>
                <p class="text-muted">The first 3 reviews will receive double points</p>
              </div>
            </li>
          </ul>
          <div id="reviews_content" class="" style="position: relative;"></div>
        </div>
        <div class="question-answer-wrap">
          <div class="block-title">QUESTION &amp; ANSWER</div>
          <div class="ask-wrap clearfix">
            <div class="pull-left font-14">For any pre-sale questions, please contact our customer service and receive a response within 24 hours</div>
            <div class="pull-right">
              <a href="" onclick="set_product_detail_ga('Ask a question')" class="btn btn-roseo" data-ga-tag="down_btn btn-roseo_button_180122" data-ga-ac="click">Ask a question</a>
            </div>
          </div>
          <div class="qa-list-wrap haven_data" style="position: relative;">
            <ul class="qa-list">
              <li class="item">
                <ul class="list-inline user-wrap text-muted">
                  <li class="margin-right-10">***87884364</li>
                  <li>Sep-16/2017 13:23:35</li>
                </ul>
                <p class="question">
                  <span class="tag-question">Q</span>
                  Do the open heeled styles have lights in the heel or are they just an extra type cushion style?
                </p>
                <div class="answer">
                  <span class="tag-answer">A</span>
                  Dear friend, thank you for your question. no, they are just a a type of cushion style. best wish
                </div>
              </li>
            </ul>
           <!-- <script type="text/javascript">
              $(function () {
                  if (window.goToPage) {
                      $(".pagination a:not(.page_docs)").click(function () {
                          goToPage($(this).data('page'), this);
                      });
                  }
              });
            </script>-->
          </div>
        </div>
      </div>
      <div class="size-charts-wrap none">
        <i class="nc-icon nc-icon-close pointer btn-close" i="close"></i>
        <div class="chart-wrap">
          <div class="shoes_chart">
            <h3 data-language-id="LC_SIZE_WOMEN_SHOES">Women's Shoes</h3>
            <table style="width:100%;">
              <tbody>
                <tr>
                  <th rowspan="2" data-language-id="LC_SIZE_OUR_SIZE">Tag Size</th>
                  <th rowspan="2">US/CA</th>
                  <th rowspan="2">UK</th>
                  <th rowspan="2">AU</th>
                  <th rowspan="2">JA</th>
                  <th rowspan="2">RU</th>
                  <th rowspan="2">EU</th>
                  <th rowspan="2">FR</th>
                  <th rowspan="2">IT</th>
                  <th rowspan="2">BR</th>
                  <th colspan="2">Feet Length</th>
                  <th colspan="2">Feet Width</th>
                </tr>
                <tr>
                  <th>Inches</th>
                  <th>Cm</th>
                  <th>Inches</th>
                  <th>Cm</th>
                </tr>
                <tr>
                  <td>36</td>
                  <td>5</td>
                  <td>2.5</td>
                  <td>3.5</td>
                  <td>23</td>
                  <td>36</td>
                  <td>36</td>
                  <td>36</td>
                  <td>36</td>
                  <td>33</td>
                  <td>9</td>
                  <td>22.86</td>
                  <td>3.35</td>
                  <td>8.51</td>
                </tr>
                <tr>
                  <td>37</td>
                  <td>6</td>
                  <td>3.5</td>
                  <td>4.5</td>
                  <td>23.5</td>
                  <td>37</td>
                  <td>37</td>
                  <td>37</td>
                  <td>37</td>
                  <td>34</td>
                  <td>9.2</td>
                  <td>23.37</td>
                  <td>3.47</td>
                  <td>8.81</td>
                </tr>
                <tr>
                  <td>38</td>
                  <td>7</td>
                  <td>4.5</td>
                  <td>5.5</td>
                  <td>24</td>
                  <td>38</td>
                  <td>38</td>
                  <td>38</td>
                  <td>38</td>
                  <td>35</td>
                  <td>9.4</td>
                  <td>23.88</td>
                  <td>3.54</td>
                  <td>8.99</td>
                </tr>
                <tr>
                  <td>39</td>
                  <td>8</td>
                  <td>5.5</td>
                  <td>6.5</td>
                  <td>24.5</td>
                  <td>39</td>
                  <td>39</td>
                  <td>39</td>
                  <td>39</td>
                  <td>36</td>
                  <td>9.6</td>
                  <td>26.38</td>
                  <td>3.62</td>
                  <td>9.19</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>9</td>
                  <td>6.5</td>
                  <td>7.5</td>
                  <td>25</td>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                  <td>40</td>
                  <td>36.5</td>
                  <td>9.8</td>
                  <td>24.89</td>
                  <td>3.69</td>
                  <td>9.37</td>
                </tr>
                <tr>
                  <td>41</td>
                  <td>10</td>
                  <td>7.5</td>
                  <td>8.5</td>
                  <td>25.5</td>
                  <td>41</td>
                  <td>41</td>
                  <td>41</td>
                  <td>41</td>
                  <td>37</td>
                  <td>10</td>
                  <td>25.40</td>
                  <td>3.76</td>
                  <td>9.55</td>
                </tr>
                <tr>
                  <td>42</td>
                  <td>11</td>
                  <td>8.5</td>
                  <td>9.5</td>
                  <td>26</td>
                  <td>42</td>
                  <td>42</td>
                  <td>42</td>
                  <td>42</td>
                  <td>38.5</td>
                  <td>10.2</td>
                  <td>25.91</td>
                  <td>3.84</td>
                  <td>9.75</td>
                </tr>
                <tr>
                  <td>43</td>
                  <td>12</td>
                  <td>9.5</td>
                  <td>10.5</td>
                  <td>26.5</td>
                  <td>43</td>
                  <td>43</td>
                  <td>43</td>
                  <td>43</td>
                  <td>40.5</td>
                  <td>10.4</td>
                  <td>26.42</td>
                  <td>3.91</td>
                  <td>9.93</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>13</td>
                  <td>10.5</td>
                  <td>11.5</td>
                  <td>27</td>
                  <td>44</td>
                  <td>44</td>
                  <td>44</td>
                  <td>44</td>
                  <td>41</td>
                  <td>10.6</td>
                  <td>26.92</td>
                  <td>4</td>
                  <td>10.16</td>
                </tr>
                <tr>
                  <td>45</td>
                  <td>14</td>
                  <td>11.5</td>
                  <td>12.5</td>
                  <td>28</td>
                  <td>45</td>
                  <td>45</td>
                  <td>45</td>
                  <td>45</td>
                  <td>41.5</td>
                  <td>10.8</td>
                  <td>27.43</td>
                  <td>4.09</td>
                  <td>10.39</td>
                </tr>
                <tr>
                  <td>46</td>
                  <td>15</td>
                  <td>12.5</td>
                  <td>13.5</td>
                  <td>29</td>
                  <td>46</td>
                  <td>46</td>
                  <td>46</td>
                  <td>46</td>
                  <td>42</td>
                  <td>11</td>
                  <td>27.94</td>
                  <td>4.18</td>
                  <td>10.62</td>
                </tr>
                <tr>
                  <td>47</td>
                  <td>16</td>
                  <td>13.5</td>
                  <td>14.5</td>
                  <td>30</td>
                  <td>47</td>
                  <td>47</td>
                  <td>47</td>
                  <td>47</td>
                  <td>42.5</td>
                  <td>11.2</td>
                  <td>28.45</td>
                  <td>4.27</td>
                  <td>10.85</td>
                </tr>
              </tbody>
            </table>
            <div class="note"><b data-language-id="LP_PLEASE_NOTE,LC_NEW_SHOES_NOTICE1,LC_NEW_SHOES_NOTICE3">PLEASE NOTE</b><br>
              1. Select a suitable size depending on your foot length<br>
              2. Some tags’ UK/US size number may be different from our tag’ size/ EUR size, please take our size chart as the standard reference.
            </div>
          </div>
        </div>
      </div>

      <!--<script type="text/javascript" src="js/ion.rangeSlider.min.js"></script>
      <script type="text/javascript" src="js/ZSfoot.js"></script>
      <script type="text/javascript" src="js/jq.lazyload.js"></script>

      <script src="//static.newchic.com/default/js/plugins/jquery.SuperSlide.2.1.1.js"></script>
      <script type="text/javascript" src="//static.newchic.com/default/edt_need/common/js/detail_review.js?v=279.0.3"></script>
      <script type="text/javascript" src="//static.newchic.com/default/js/media.js?v=279.0.3"></script>
      <script type="text/javascript" src="//static.newchic.com/default/js/detail.js?v=279.0.3"></script>
      <script language="javascript" src="//static.newchic.com/default/js/pinit.js?v=279.0.3"></script>
      <script type="text/javascript" src="//static.newchic.com/default/js/share.js?v=279.0.3"></script>
      <script language="javascript" src="js/product.js"></script>
      <script type="text/javascript" src="//static.newchic.com/default/js/activity.js?v=279.0.3"></script>
-->
      </div>

</template>

<script>
import homeHeader from '@/components/homeHeader.vue'
import productApi from '@/api/ProductApi.js'

export default {
  name: 'ProductPage',
  components : {
  homeHeader
  },
  

  data () {
    return {
      qty: 1,
      productId: 0,
      productData: {},
      selectedAttrs: {},
      parsedVariations: {},
      allVariations: [],
      isOptionShown:{},
      showAttributes: false,
      selectedVariation: null,
      productCrossedSell:[],   
    }
  },
  beforeMount () {
   

  },
  created(){
    var me = this;
    this.productId = this.$route.params.productId
    productApi.getProductById(this.$route.params.productId).then(function(response){
      me.productData = response.data
      $('#defaultPicZoom').attr('src',me.productData.images[0].src);
      $('#defaultPicZoom').attr('data-original',me.productData.images[0].src);
      
      setTimeout(function(){    //
         //Slide.prototype.init();
         init_zoom_img();
      }, 100);

      //**get scross sell me.productData.cross_sell_ids	*/
      //* todo ali*/
      for(var i = 0 ; i < me.productData.cross_sell_ids.length ; i++){
        productApi.getProductById(me.productData.cross_sell_ids[i]).then(function(prodRes){
          me.productCrossedSell.push(prodRes.data);
          console.log(me.productCrossedSell);

        })
      }
    }, function(err){
      console.log(err);
    })

    productApi.getProductVariationsById(this.$route.params.productId).then(function(response){
      for(var i = 0 ; i < response.data.length ; i++){
        var varName = "";
        for(var j = 0 ; j < response.data[i].attributes.length ; j++){
          varName += response.data[i].attributes[j].option;
          
        }
        me.parsedVariations[varName] = {
          id: response.data[i].id,
          image: response.data[i].image,
          attributes: response.data[i].attributes,
          stock_quantity: response.data[i].stock_quantity
        }
      }
      me.allVariations = response.data;
      me.showAttributes = true;

    })
    //debugger;
    //  const header = {
    //     //'Accept': 'application/json',
    //     'Authorization': 'Bearer MDUwMWQ1NTI4N2U4NzgxYWJlZDg2N2Y2ODNhZWU1MDQwOGVjZDE5MTY1YTRkZjhkZjFlNmE4ODgwYWJjMDVmZg',
    //     //'referer': 'fnd.alarabexpress.com'
    //     'Content-Type': 'application/json'
    //   }
    //       this.$http.get('http://bknd.alarabexpress.com/api/v1/products/'+this.$route.query.productId,{headers: header}).then(response => {
       
    //         console.log("product", response.data);
    //  });
  },
  methods: {
    addToCart()
    {
      console.log("adding to cart");
      const header = {
        //'Accept': 'application/json',
        'Authorization': 'Bearer MDUwMWQ1NTI4N2U4NzgxYWJlZDg2N2Y2ODNhZWU1MDQwOGVjZDE5MTY1YTRkZjhkZjFlNmE4ODgwYWJjMDVmZg',
        //'referer': 'fnd.alarabexpress.com'
        'Content-Type': 'application/json'
      }
         const item =  {
             variant: this.$route.query.product,
             quantity: this.qty
          }
          console.log("item", item);
          this.$http.post('http://bknd.alarabexpress.com/api/v1/carts/122/items/',item,{headers: header}).then(response => {
       
            console.log("post response",response);
     });
    },
    ZSquantityPrev()
    {
      this.qty--;
    },
    ZSquantityNext()
    {
      this.qty++;
    },
    selectAttrOption(att, op){
      this.selectedAttrs[att] = op
      this.selectedAttrs = JSON.parse(JSON.stringify(this.selectedAttrs))

      if(Object.keys(this.selectedAttrs).length == this.productData.attributes.length){
        console.log("all selected")
        for (var vrt in this.parsedVariations) {
          if (this.parsedVariations.hasOwnProperty(vrt)) {
              var isShow = true;
              for(var selectedAtt in this.selectedAttrs){
                if (this.selectedAttrs.hasOwnProperty(selectedAtt)){
                  if(!(vrt.indexOf(this.selectedAttrs[selectedAtt])>=0)){
                    isShow = false;
                    break;
                  }
                }
              }
              if(isShow){
                this.selectedVariation = this.parsedVariations[vrt]
                console.log(this.selectedVariation.id)
                break;
              }
          }
        }
      }

    },
    showOption(optValue, indx){
      if(indx ==0){
        return true;
      }
      for (var vrt in this.parsedVariations) {
        if (this.parsedVariations.hasOwnProperty(vrt)) {
          if(this.parsedVariations[vrt].stock_quantity<1){
            continue;
          }
          if(vrt.indexOf(optValue)>=0){
            var isShow = true;
            for(var selectedAtt in this.selectedAttrs){
              if (this.selectedAttrs.hasOwnProperty(selectedAtt)){
                if(!(vrt.indexOf(this.selectedAttrs[selectedAtt])>=0)){
                  isShow = false;
                  break;
                }
              }
            }
            if(isShow){
              return true
            }
          }
        }
      }
      return false;
    }
  },
  
}
</script>

<style>
.buy_btn .addcart,.buy_btn .addwish{
                margin-bottom: 10px;
                }
                .text-center .zs-dialog-body{
                text-align: center;
                }
</style>