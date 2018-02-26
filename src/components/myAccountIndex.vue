<template>
  <div>
            <div class="member-container clearfix">
			    <div class="pull-left clearfix member-info-container">
			        <div class="member-icon pull-left">
			            <a href="/account/personalInformation.html" target="_self"><img src="https://www.newchic.com/templates/default/images/touxiang.png" style="width: 120px; height: 120px; transition: all 0.5s; margin-top: 0px;"></a>
			        </div>
			        <div class="pull-left member-info">
			            <div class="clearfix">
			                <div class="pull-left user-container" style="max-width:180px;">
			                    <div class="info-msg">Welcome back!</div>
			                    <div class="info">
			                        <span class="username ellipsis" style="max-width: 175px; vertical-align: middle">NC142428835</span>

			                    </div>
			                </div>

							<div class="pull-left">
																																</div>

							<div class="email" style="clear: both;">
								example@gmail.com
				            </div>
			            </div>
			            			            <div class="progress">
			                <div class="progress-text">0/200</div>
			                <div class="progress-bar" style="width: 0%;"></div>
			            </div>
			              
			            

			            <ul class="list-inline margin-top-10">
							<li>
								<a target="_blank" href="/account/personalInformation.html">
									<i class="icon icon-config"></i> Setting</a></li><a target="_blank" href="/account/personalInformation.html">
								</a>
							<li>
																<a target="_blank" href="/account/sendConfirmEmail.html" data-placement="bottom" data-original-title="Confirm your e-mail address to receive points" data-toggle="tooltip"><i class="icon icon-email-unverify"></i> Get <span class="red">50</span> Points Now</a>
																
							</li>
			            </ul>
			            
			        </div>
			    </div>
			    <div class="pull-right clearfix member-statistics">
			        <ul class="list-inline">
			            <li>
			            	<router-link  to="/myAccount/myOrders/ordersList">
				                <span class="meta-title ellipsis">Orders</span>
				                <span class="count ellipsis">0</span>
			            	</router-link>
			            </li>
			            <li>
			            	<router-link  to="/myAccount/wishList">
				                <span class="meta-title ellipsis">Wish lists</span>
				                <span class="count ellipsis">0</span>
			            	</router-link>
			            </li>
			            <li>
			            	<router-link  to="/myAccount/myAccountPoints">
				                <span class="meta-title ellipsis">Points</span>
				                <span class="count ellipsis">0</span>
			            	</router-link>
			            </li>
			            <li>
			            	<router-link  to="/myAccount/myCoupons">
				                <span class="meta-title ellipsis">Coupons</span>
				                <span class="count ellipsis">2</span>
			            	</router-link>
			            </li>
			        </ul>   
			    </div>
			</div>  


			<div class="order_form_title">
			    <h3>My Orders</h3> 
			    <ul>
			        			        					<li><a target="_blank" href="/lottery/flip_to_win.html"><i class="lottery_room_icon"></i> Lottery Activities <span class="red">(0)</span></a></li>
								        <li><a href="javascript:;" class="open-live-chat"><i class="edt_icon_live_chat"></i> Live chat</a></li>
			        <li><a target="_blank" href="/account/orderlist.html">View all orders</a></li>
			    </ul>
			</div>
			
            <div class="member_mod" style="border: none;">
                <div class="member_mod_content">

                	<div class="order-list-container">
													<div class="order_none">You have not yet made any purchases. To continue shopping, <a target="_blank" href="/">click here.</a></div>
												</div>
                </div>
            </div>
         </div>
</template>

<script>
export default {
    name: 'myAccountIndex'
}
</script>

<style>

</style>
