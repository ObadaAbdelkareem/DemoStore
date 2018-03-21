<template>
  <div class="member_mod" style="border: none;">
                <div class="member_mod_content">

                    <input type="hidden" name="page" id="orderPage" value="1">
                    <input type="hidden" name="orderStatus" id="orderStatus" value="0">
                    <input type="hidden" name="orderType" id="orderType" value="0">

                    <div class="member_grid_container">
                        <form class="form-order-list" method="post">

                            <div class="order-list-container">
                                <div class="order_none">You have not yet made any purchases. To continue shopping, <a target="_blank" href="">click here.</a></div>
								<table class="item table table-bordered" v-for="prOrder in ordersList">
									<thead>
										<tr>
											<th colspan="99">
												<ul class="list-inline pull-left">
												<li>
													<b>Date:</b> {{prOrder.date_created}}
												</li>
												<li>
													<b>Order:</b>NO.{{prOrder.number}}
												</li>
												<li>
													<b>Shipping fees:</b>US${{prOrder.shipping_total}}
												</li>
												<li>
													<b>Amount:</b>US${{prOrder.total}}
												</li>
												</ul>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<ul class="list-inline thumb-list">
												<li><a target="_self" href="https://www.newchic.com/formal-shoes-3617/p-1067362.html?rmmds=myorder"><img src="https://img.newchic.com/thumb/list_grid/oaupload/newchic/images/6D/92/e2dcfd33-be3d-4b86-a4fa-b81d3a91bd18.JPG"></a></li>
												</ul>
											</td>
											<td class="text-center" width="152" height="117">
												<p class="status">Refunded</p>
												<p>
												<a target="_self" href="/account/orderDetail.html?order_id=39107857" class="und_line">Order details</a>
												</p>
												<div class="orders_track_all" data-order_id="39107857" data-tracking_more="0">
												<p>
													<a href="/account/orderDetail.html?order_id=39107857&amp;current=tracking" class="und_line" target="_self">
													Shipping info         </a>
												</p>
												<div class="tooltip orders_trackinged bottom hidden" style="display: none;">
													<div class="tooltip-arrow"><i></i></div>
													<div class="tooltip-inner">
														<ul class="orderTrackinged">
															<li>Tracking Number: RU797465437CN</li>
															<li class="has_doc order_thems">
															<i class="r_doc"></i>2018-01-29 00:00 
															Jerusalem
															.
															Derech Ramallah,Delivered to addressee
															</li>
															<li class="has_doc">
															<i class="r_doc"></i>The above is the lastest tracking info.
															</li>
															<li class="view_all">
															<a href="/account/orderDetail.html?order_id=39107857&amp;current=tracking">View All &gt;&gt;</a>
															</li>
														</ul>
													</div>
												</div>
												</div>
											</td>
											<td class="text-center" width="152" height="117">
												-
											</td>
										</tr>
									</tbody>
								</table>
                            </div>
                        </form>
                        						
                        <!--ajax load code-->
<div class="confirm-delivery-container" style="display:none;">
	<span class="btn-close pointer">×</span>
	<dl class="confirm-delivery">
		<dt><strong class="red required">*</strong>1. Please confirm the delivery of your order</dt>
		<dd class="clearfix calendar-container">
			<div class="delivery-date-container pull-left">
				<p>Delivery date</p>
				<p class="text-danger delivery-date"></p>
			</div>
			<div class="delivery-calendar pull-right"></div>
		</dd>

		<dt><strong class="red required">*</strong>
			<div class="clearfix">
				<div class="pull-left">2. Shipping service</div>
				<div class="star-list pull-left">
					<ul class="clearfix">
						<li><i class="icon icon-star-empty"></i></li>
						<li><i class="icon icon-star-empty"></i></li>
						<li><i class="icon icon-star-empty"></i></li>
						<li><i class="icon icon-star-empty"></i></li>
						<li><i class="icon icon-star-empty"></i></li>
					</ul>
				</div>
			</div>
			<div class="text-danger server-msg errmsg none">
				Please rate this product from 1 to 5 stars
			</div>
		</dt>
		<dd class="discontent-reason none">

			<p class="alert alert-warning">
				Why are you not satisfied with our service?
			</p>
			<p class="text-danger">(Multiple choices)</p>
			<div class="checkbox-list">
				<label><div class="checker"><span><input type="checkbox" value="1"></span></div>A. The product arrived damaged</label>
				<label><div class="checker"><span><input type="checkbox" value="2"></span></div>B.The delivery was lower than expected</label>
				<label><div class="checker"><span><input type="checkbox" value="3"></span></div>C. I could not use my tracking number</label>
				<label><div class="checker"><span><input type="checkbox" value="4"></span></div>D.The tracking information were not updated</label>
				<label><div class="checker"><span><input type="checkbox" value="5"></span></div>E. The product was not adequately packed</label>
				<label><div class="checker"><span><input type="checkbox" value="6"></span></div>F. Others</label>
			</div>
		</dd>

		<dt>3. Leave a message</dt>
		<dd>
			<textarea name="msg" class="full-width" rows="5" placeholder="Rate the shipping service"></textarea>
		</dd>
		<dt></dt>
		<dd class="btn-group text-center">
			<button type="button" class="btn bg-grey-gallery btn-save">Save</button>
			<button type="button" class="btn bg-grey-silver btn-cancel">Cancel</button>
		</dd>
	</dl>
</div>                        
                   
                        
                    </div>
            	
				</div>
                			</div>
</template>

<script>
import myAccountApi from '@/api/myAccountApi.js'

export default {
  name: 'ordersList',
  
  data () {
    return {
      ordersList:[]
    }
  },
  created(){
	  var me = this
	  myAccountApi.getAllOrders().then(function(response){
		  	me.ordersList = response.data;
			  console.log(me.ordersList)
			// for(var i = 0 ; i < me.ordersList.cross_sell_ids[i]; i++){
			// 		productApi.getProductById(me.ordersList.cross_sell_ids[i]).then(function(AlLO){
			// 		me.ordersList.push(AlLO.data);
			// 		console.log(me.ordersList);
			// 		})
			// }
				})
	  
  },
  mounted(){
       if(getQueryString('orderlist_link_171216')){
        ga('send', 'event', '', 'checkOutSuccess', 'orderlist_link_171216');
    }
      $(".tracking_info").HoverDelay({
                            hoverEvent: function(obj){
                                return function(){
                                    $(obj).siblings(".info").slideDown(200);
                                };
                            }
                        });

                        $("td").not(".info").HoverDelay({
                            outEvent: function(obj){
                                return function(){
                                    $(obj).find(".info").slideUp(200); 
                                };
                            }
                        });
  }
}
</script>

<style>

</style>
