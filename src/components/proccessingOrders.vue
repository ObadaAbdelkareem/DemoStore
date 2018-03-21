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

  name: 'proccessingOrders',
  data(){

	  return{
		  proccessingOrders:[]
	  }
  },
  created(){

	  var me =this
	 myAccountApi.getproccessingOrders().then(function(response){
		  me.ordersList = response.data;
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
