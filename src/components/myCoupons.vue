<template>
<div>
    <ul class="good_link nav nav-tabs">
        <li data-id="0" v-on:click="set_my_coupons_ga" class="isactive active">Unredeemed coupons
            <p></p>
        </li>
        <li data-id="1" v-on:click="set_my_coupons_ga" class="isactive">Redeemed coupons</li>
        <li data-id="2" v-on:click="set_my_coupons_ga" class="isactive">Expired</li>
        <li data-id="3" v-on:click="set_my_coupons_ga" class="isactive">Hot coupons </li>
        <li data-id="4" v-on:click="set_my_coupons_ga" class="isactive">Points Redeem Coupon</li>

    </ul>
    <div class="good-tab-content">
        <div class="good-tab-pane co-tap-0 active-tab" >
            <div class="tab_pane_all ggg">
                <div class="coupon-list clearfix">
                    <div class="coupon-wrap coupon-pink received">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <h3 class="ellipsis" title="20% off first order for app">20% OFF
                                    <span></span>
                                </h3>

                                <div class="describe" title="20% off for All Non-promotion Products">
                                    <p>20% off for All Non-promotion Products</p>
                                </div>
                                <p class="expires">


                                    Expires on: 2018-12-29 23:59:59 CST

                                    <img class="app_only" src="//static.newchic.com/default/edt_need/app_coupon/app_onlys_03.png" alt="">
                                </p>

                                <!-- <p class="pull-left">Code: </p>  -->
                            </div>

                            <p class="code clearfix">
                                <a class="copycode" href="javascript:void(0);" id="send_applinks">Use it</a>
                            </p>

                        </div>
                    </div>
                    <div class="coupon-wrap coupon-pink received">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="/new-arrivals/?filterProduct=1" target="_self">
                                    <h3 class="ellipsis" title="15% off for new customer">15% OFF
                                        <span></span>
                                    </h3>

                                    <div class="describe" title="15% off for new customer">
                                        <p>15% off for new customer</p>
                                    </div>
                                    <p class="expires">


                                        Expires on: 2018-12-30 23:59:59 CST

                                    </p>

                                    <!-- <p class="pull-left">Code: </p>  -->
                                </a>
                            </div>

                            <p class="code clearfix">
                                <a class="copycode" href="/new-arrivals/?filterProduct=1" target="_blank">Use it</a>
                            </p>

                        </div>
                    </div>

                </div>






            </div>

        </div>
        <div class="good-tab-pane co-tap-1" >
            <div class="tab_pane_all">
                <div class="no_information">
                    <img class="none_cuopon" src="//static.newchic.com/default/edt_need/app_coupon/icon-sad-60-60.png">You have no coupons yet</div>




            </div>
        </div>
        <div class="good-tab-pane co-tap-2" >
            <div class="tab_pane_all">
                <div class="no_information">
                    <img class="none_cuopon" src="//static.newchic.com/default/edt_need/app_coupon/icon-sad-60-60.png">You have no coupons yet</div>




            </div>
        </div>
        <div class="good-tab-pane hot-coupons-container co-tap-3" >
            <div class="tab_pane_all">
                <div class="clearfix margin-bottom-20">
                    <ul class="list-inline pull-left">
                        <li>Sort by :</li>
                        <li>
                            <select name="order-by" style="display: none;">
                                <option value="popular">POPULAR</option>
                                <option value="new">NEW</option>
                                <option value="time">EXPIRING SOON</option>
                            </select>
                            <div class="select-container select-container-default" id="select-container-151940643640255941"
                                style="min-width: 131px;">
                                <div class="selection">
                                    <div class="select-selection select-selection-single">
                                        <span class="select-selection-rendered" id="select-151940643640255941-container" title="">POPULAR</span>
                                        <span class="select-selection-arrow select-selection-arrow-line">
                                            <b></b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <select name="type" style="display: none;">
                                <option value="0">All TYPES</option>
                                <option value="3578">WOMEN </option>
                                <option value="3581">MEN</option>
                                <option value="3579">BAGS</option>
                                <option value="3580">SHOES</option>
                                <option value="3990">BEAUTY</option>
                                <option value="4040">JEWELRY</option>
                                <option value="4494">HOME &amp; GARDEN</option>
                                <option value="4565">KIDS</option>
                                <option value="3973">ACCESSORIES</option>
                                <option value="product">PRODUCT</option>
                                <option value="page">PAGE</option>
                                <option value="category">CATEGORY</option>
                            </select>
                            <div class="select-container select-container-default select-container-above" id="select-container-1519406436416284"
                                style="min-width: 137px;">
                                <div class="selection">
                                    <div class="select-selection select-selection-single">
                                        <span class="select-selection-rendered" id="select-1519406436416284-container" title="">All TYPES</span>
                                        <span class="select-selection-arrow select-selection-arrow-line">
                                            <b></b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="pull-right">
                    </div>
                </div>
                <div class="coupon-list clearfix">
                    <div class="coupon-wrap coupon-purple">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="https://www.newchic.com/underwear-c-4290/?filterProduct=1&amp;ht=1" class="hrefbox" target="_self">
                                    <h3 class="ellipsis" title="10% off for mens underwear">10% OFF
                                        <span></span>
                                    </h3>
                                    <div class="describe" title="10% off for mens underwear">
                                        <p>10% off for mens underwear</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-03-18 23:59:59 CST</p>
                                </a>
                            </div>
                            <p class="code clearfix">
                                <a class="copycode" data-copytext="NCMU10" data-coupon-url="https://www.newchic.com/underwear-c-4290/?filterProduct=1" href="javascript:;">Get coupon</a>
                            </p>
                        </div>
                    </div>
                    <div class="coupon-wrap coupon-purple">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="https://www.newchic.com/mens-shoes-c-3593/?filterProduct=1" class="hrefbox" target="_blank">
                                    <h3 class="ellipsis" title="10%off for men shoes">10% OFF
                                        <span></span>
                                    </h3>
                                    <div class="describe" title="10%off for men shoes">
                                        <p>10%off for men shoes</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-03-19 23:59:59 CST</p>
                                </a>
                            </div>
                            <p class="code clearfix">
                                <a class="copycode" data-copytext="Mshoes10" data-coupon-url="https://www.newchic.com/mens-shoes-c-3593/?filterProduct=1"
                                    href="javascript:;">Get coupon</a>
                            </p>
                        </div>
                    </div>
                    <div class="coupon-wrap coupon-blue">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="/fashion-collection-183.html" class="hrefbox" target="_blank">
                                    <h3 class="ellipsis" title="10% off mens underwear">10% OFF
                                        <span></span>
                                    </h3>
                                    <div class="describe" title="10% off mens underwear">
                                        <p>10% off mens underwear</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-03-30 23:59:59 CST</p>
                                </a>
                            </div>
                            <p class="code clearfix">
                                <a class="copycode" data-copytext="MUC10" data-coupon-url="/fashion-collection-183.html" href="javascript:;">Get coupon</a>
                            </p>
                        </div>
                    </div>
                    <div class="coupon-wrap coupon-purple">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="https://www.newchic.com/storage-bags-c-4915/?filterProduct=1" class="hrefbox" target="_blank">
                                    <h3 class="ellipsis" title="$5 OFF">$5 OFF
                                        <span>order over $30</span>
                                    </h3>
                                    <div class="describe" title="Get $5 off $30 of Storage Bags items.">
                                        <p>Get $5 off $30 of Storage Bags items.</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-03-28 23:59:59 CST</p>
                                </a>
                            </div>
                            <p class="code clearfix">
                                <a class="copycode" data-copytext="2f8afa" data-coupon-url="https://www.newchic.com/storage-bags-c-4915/?filterProduct=1"
                                    href="javascript:;">Get coupon</a>
                            </p>
                        </div>
                    </div>
                    <div class="coupon-wrap coupon-purple">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="https://www.newchic.com/-4611/?filterProduct=1" class="hrefbox" target="_blank">
                                    <h3 class="ellipsis" title="10% OFF">10% OFF
                                        <span></span>
                                    </h3>
                                    <div class="describe" title="10% Off for all Girls Clothing,Boys Clothing,Baby Clothing,Accessories items.">
                                        <p>10% Off for all Girls Clothing,Boys Clothing,Baby Clothing,Accessories items.</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-03-18 23:59:59 CST</p>
                                </a>
                            </div>
                            <p class="code clearfix">
                                <a class="copycode" data-copytext="4352f2" data-coupon-url="https://www.newchic.com/-4611/?filterProduct=1" href="javascript:;">Get coupon</a>
                            </p>
                        </div>
                    </div>
                    <div class="coupon-wrap coupon-blue">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="https://www.newchic.com/en/underwear-c-4290/?ht=1" class="hrefbox" target="_blank">
                                    <h3 class="ellipsis" title="10% OFF">10% OFF
                                        <span></span>
                                    </h3>
                                    <div class="describe" title="10% Off for all Underwear items.">
                                        <p>10% Off for all Underwear items.</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-04-24 23:59:59 CST</p>
                                </a>
                            </div>
                            <p class="code clearfix">
                                <a class="copycode" data-copytext="MUC10%" data-coupon-url="https://www.newchic.com/en/underwear-c-4290/?ht=1" href="javascript:;">Get coupon</a>
                            </p>
                        </div>
                    </div>
                    <div class="coupon-wrap coupon-purple">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="https://www.newchic.com/clock-c-4621/?filterProduct=1" class="hrefbox" target="_blank">
                                    <h3 class="ellipsis" title="10% OFF">10% OFF
                                        <span>order over $30</span>
                                    </h3>
                                    <div class="describe" title="Save 10% for orders over $30 of Clock items.">
                                        <p>Save 10% for orders over $30 of Clock items.</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-03-18 23:59:59 CST</p>
                                </a>
                            </div>
                            <p class="code clearfix">
                                <a class="copycode" data-copytext="905f23" data-coupon-url="https://www.newchic.com/clock-c-4621/?filterProduct=1" href="javascript:;">Get coupon</a>
                            </p>
                        </div>
                    </div>
                    <div class="coupon-wrap coupon-purple">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="https://www.newchic.com/personal-care-c-5559/?filterProduct=1" class="hrefbox" target="_blank">
                                    <h3 class="ellipsis" title="10% OFF">10% OFF
                                        <span>order over $60</span>
                                    </h3>
                                    <div class="describe" title="Save 10% for orders over $60 of Personal Care items.">
                                        <p>Save 10% for orders over $60 of Personal Care items.</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-02-27 23:59:59 CST</p>
                                </a>
                            </div>
                            <p class="code clearfix">
                                <a class="copycode" data-copytext="460119" data-coupon-url="https://www.newchic.com/personal-care-c-5559/?filterProduct=1"
                                    href="javascript:;">Get coupon</a>
                            </p>
                        </div>
                    </div>
                    <div class="coupon-wrap coupon-purple">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="https://www.newchic.com/makeup-c-4000/?filterProduct=1" class="hrefbox" target="_blank">
                                    <h3 class="ellipsis" title="$10 OFF">$10 OFF
                                        <span>order over $69</span>
                                    </h3>
                                    <div class="describe" title="Get $10 off $69 of Makeup items.">
                                        <p>Get $10 off $69 of Makeup items.</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-02-27 23:59:59 CST</p>
                                </a>
                            </div>
                            <p class="code clearfix">
                                <a class="copycode" data-copytext="de6b43" data-coupon-url="https://www.newchic.com/makeup-c-4000/?filterProduct=1" href="javascript:;">Get coupon</a>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="clearfix">
                    <div class="pull-right">




                    </div>
                </div>




            </div>
        </div>
        <div class="good-tab-pane point-coupons-container co-tap-4" >
            <div class="tab_pane_all">
                <h1 class="tab_pane_tips">My Points:
                    <span class="theme">0</span>
                </h1>
                <div class="coupon-list clearfix">
                    <div class="coupon-wrap coupon-pink">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="/" target="_self">
                                    <h3 class="ellipsis" title="$1 off $27">$1 OFF
                                        <span>order over $27</span>
                                    </h3>

                                    <div class="describe" title="$1 off $27* coupon with 47 points">
                                        <!--<p>$1 off $27* coupon with 47 points</p>-->
                                        <p class="pointos">:
                                            <span class="">47</span> points</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-11-30 23:59:59 CST</p>
                                    <!-- <p class="pull-left">Code: </p>  -->
                                </a>
                            </div>

                            <div class="code clearfix">
                                <a href="javascript:void(0);" class="copycode big_code" data-id="7717be">
                                    Not enough now </a>
                                <p class="not_points "></p>
                            </div>

                        </div>
                    </div>
                    <div class="coupon-wrap coupon-pink">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="/" target="_blank">
                                    <h3 class="ellipsis" title="$2 off $37">$2 OFF
                                        <span>order over $37</span>
                                    </h3>

                                    <div class="describe" title="$2 off $37* coupon with 97 points">
                                        <!--<p>$2 off $37* coupon with 97 points</p>-->
                                        <p class="pointos">:
                                            <span class="">97</span> points</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-12-01 23:59:59 CST</p>
                                    <!-- <p class="pull-left">Code: </p>  -->
                                </a>
                            </div>

                            <div class="code clearfix">
                                <a href="javascript:void(0);" class="copycode big_code" data-id="a77877">
                                    Not enough now </a>
                                <p class="not_points "></p>
                            </div>

                        </div>
                    </div>
                    <div class="coupon-wrap coupon-pink">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="/" target="_self">
                                    <h3 class="ellipsis" title="$4 off $47">$4 OFF
                                        <span>order over $47</span>
                                    </h3>

                                    <div class="describe" title="$4 off $47* coupon with 157 points">
                                        <!--<p>$4 off $47* coupon with 157 points</p>-->
                                        <p class="pointos">:
                                            <span class="">157</span> points</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-12-01 23:59:59 CST</p>
                                    <!-- <p class="pull-left">Code: </p>  -->
                                </a>
                            </div>

                            <div class="code clearfix">
                                <a href="javascript:void(0);" class="copycode big_code" data-id="785709">
                                    Not enough now </a>
                                <p class="not_points "></p>
                            </div>

                        </div>
                    </div>
                    <div class="coupon-wrap coupon-pink">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="/" target="_blank">
                                    <h3 class="ellipsis" title="$10 off $67">$10 OFF
                                        <span>order over $67</span>
                                    </h3>

                                    <div class="describe" title="$10 off $67* coupon with 207 points">
                                        <!--<p>$10 off $67* coupon with 207 points</p>-->
                                        <p class="pointos">:
                                            <span class="">207</span> points</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-12-01 23:59:59 CST</p>
                                    <!-- <p class="pull-left">Code: </p>  -->
                                </a>
                            </div>

                            <div class="code clearfix">
                                <a href="javascript:void(0);" class="copycode big_code" data-id="c94887">
                                    Not enough now </a>
                                <p class="not_points "></p>
                            </div>

                        </div>
                    </div>
                    <div class="coupon-wrap coupon-pink">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="/" target="_blank">
                                    <h3 class="ellipsis" title="$12 off $77">$12 OFF
                                        <span>order over $77</span>
                                    </h3>

                                    <div class="describe" title="$12 off $77* coupon with 257 points">
                                        <!--<p>$12 off $77* coupon with 257 points</p>-->
                                        <p class="pointos">:
                                            <span class="">257</span> points</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-12-01 23:59:59 CST</p>
                                    <!-- <p class="pull-left">Code: </p>  -->
                                </a>
                            </div>

                            <div class="code clearfix">
                                <a href="javascript:void(0);" class="copycode big_code" data-id="e26d9b">
                                    Not enough now </a>
                                <p class="not_points "></p>
                            </div>

                        </div>
                    </div>
                    <div class="coupon-wrap coupon-pink">
                        <div class="coupon-content">
                            <div class="coupon-content-in">
                                <a href="/" target="_blank">
                                    <h3 class="ellipsis" title="$16 off $97">$16 OFF
                                        <span>order over $97</span>
                                    </h3>

                                    <div class="describe" title="$16 off $97* coupon with 297 points">
                                        <!--<p>$16 off $97* coupon with 297 points</p>-->
                                        <p class="pointos">:
                                            <span class="">297</span> points</p>
                                    </div>
                                    <p class="expires">Expires on: 2018-12-01 23:59:59 CST</p>
                                    <!-- <p class="pull-left">Code: </p>  -->
                                </a>
                            </div>

                            <div class="code clearfix">
                                <a href="javascript:void(0);" class="copycode big_code" data-id="2fa736">
                                    Not enough now </a>
                                <p class="not_points "></p>
                            </div>

                        </div>
                    </div>

                </div>




            </div>

            <div class="coupon_notes" style="margin-bottom: 30px;">
                <!--<h4>Coupon notes</h4>-->
                <!--<div class="my_points">My points:<span></span></div>-->
                <div class="coupon_notes_info">
                    Choose the coupon you would like to exchange and you will get a "Coupon Code" after each successful transaction. Use your
                    coupons at the checkout, the coupon will be deducted from your total purchase. Coupons you exchange can
                    only be used by your Newchic account.
                    <br>
                    <b>Please note:</b>These Coupons is Valid for Regular Price Item, Exclude Sale Item
                </div>
                <!--<table width="100%" border="0" cellspacing="0" cellpadding="0" class="points_zone">
                                            </table>-->
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
name: 'myCoupons',
mounted(){
     $(function () {
            if (window.goToPage) {
                $(".pagination a:not(.page_docs)").click(function () {
                    goToPage($(this).data('page'), this);
                });
            }
        });
},
methods:{
    set_my_coupons_ga:function(event)
    {
        Array.from(document.getElementsByClassName('isactive')).forEach(element => {
            element.classList.remove('active');
        });
		event.target.classList.add('active');
		Array.from(document.getElementsByClassName('good-tab-pane')).forEach(element => {
			element.classList.remove('active-tab');
			element.classList.remove('inactive-tab');
			element.classList.add('inactive-tab');
		});
		$(".co-tap-"+event.target.dataset.id).removeClass("inactive-tab");
	     $(".co-tap-"+event.target.dataset.id).addClass("active-tab");
    }
}
}
</script>

<style>
.active-tab{
display: block; position: relative;
}
.inactive-tab{
display: none; position: relative;
}
.app_email_covers {
  background: #000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100% ;
  z-index: 1000;
}
.app_email_alert {
  /*width: 553px;
  height: 329px;*/
  height: 261px;
  padding: 68px 60px 0;
  width: 443px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -276.5px;
  margin-top: -164.5px;
  /* background: url("send_email_bg_03.jpg") no-repeat center; */
  z-index: 1001;
}
.app_email_alert .close_email_alert {
  height: 18px;
  width: 18px;
  position: absolute;
  right: 29px;
  top: 28px;
  /* background: url("app_adr_close_03.png") no-repeat center; */
  cursor: pointer;
}
.app_email_alert .app_email_title {
  font-size: 16px;
  line-height: 24px;
  font-style: italic;
}
.app_email_alert .send_email_form {
  margin: 20px 0 0px;
}
.app_email_alert .send_email_form p {
  padding-top: 6px;
  color: #e33057;
}
.app_email_alert .send_email_form ul {
  padding: 0 35px;
  margin-top: 28px;
}
.app_email_alert .send_email_form ul .li_btn {
  float: left;
}
.app_email_alert .send_email_form ul .li_submit {
  float: right;
}
.app_email_alert .send_email_form ul .li_submit input {
  background: #000;
  color: #FFF;
}
.app_email_alert .send_email_form ul input {
  border: 1px solid #000;
  width: 128px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  font-size: 14px;
  border-radius: 2px;
  cursor: pointer;
}
.app_email_alert .send_email_form .eamil_adr {
  border: 1px solid #f1e5ea;
  width: 409px;
  padding: 6px 16px;
  line-height: 36px;
}
.tab_pane_all .no_information {
  height: auto;
}
.tab_pane_all .none_cuopon {
  vertical-align: middle;
  padding-right: 10px;
}
.tab_pane_all .app_only {
  vertical-align: sub;
}
.user_center_open {
  z-index: 1001;
  width: 692px;
  height: 618px;
  border-radius: 3px 3px 3px 3px;
  background: #fffefa;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -340px;
  margin-top: -309px;
}
.user_center_open .pics {
  width: 692px;
  height: 177px;
  /* background: url("user_cnter_coupon_03.jpg"); */
  text-align: center;
}
.user_center_open .pics .art {
  margin-top: 50px;
  display: inline-block;
}
.user_center_open .pics .art dt {
  font-size: 64px;
  color: #f98189;
  text-shadow: -4px 1px 0 #ca858d;
  font-family: Helvetica;
}
.user_center_open .pics .art dt > span {
  text-shadow: 4px 1px 0 #ca858d;
}
.user_center_open .pics .art dd {
  background-color: #f98189;
  color: #FFF;
  font-size: 16px;
  line-height: 24px;
  display: inline-block;
  margin-top: 16px;
  padding: 0 8px;
}
.user_center_open .link_all {
  margin-top: 38px;
  padding-left: 50px;
  padding-right: 55px;
}
.user_center_open .link_all .pic {
  float: left;
  width: 220px;
  height: 220px;
  overflow: hidden;
}
.user_center_open .link_all dl {
  width: 260px;
  float: right;
}
.user_center_open .link_all dl dt {
  line-height: 18px;
}
.user_center_open .link_all dl dt a {
  text-decoration: underline;
}
.user_center_open .link_all .andord {
  margin-top: 20px;
  margin-bottom: 8px;
}
.user_center_open .open_btm {
  padding: 64px 50px 50px;
}
.user_center_open .open_btm .form_ul {
  margin-top: 20px;
}
.user_center_open .open_btm .form_ul * {
  box-sizing: border-box;
}
.user_center_open .open_btm .form_ul li {
  display: inline-block;
}
.user_center_open .open_btm .form_ul input {
  padding: 0;
  margin: 0;
  border-top: 1px solid #e0e0dd;
  padding: 0 20px;
  height: 48px;
  line-height: 48px;
  border-bottom: 1px solid #e0e0dd;
  border-left: 1px solid #e0e0dd;
  width: 417px;
  font-size: 14px;
}
.user_center_open .open_btm .form_ul .btm a {
  display: inline-block;
  height: 48px;
  line-height: 48px;
  color: #FFF;
  width: 160px;
  text-align: center;
  background: #333333;
  font-size: 20px;
}

</style>
