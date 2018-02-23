<template>
  <div class="order_form_left">
            <dl id="taskTag" tasktag="account" status="0">
	<dt><b>My Orders</b></dt>
			<dd><i></i> <router-link  to="/myAccount/myOrders/ordersList">ALL(0)</router-link></dd>
		<dd><i></i><router-link  to="/myAccount/myOrders/unPaidOrders">Unpaid(0)</router-link></dd>
		<dd><i></i> <router-link to="/myAccount/myOrders/proccessingOrders">Processing(0)</router-link></dd>
		<dd><i></i> <router-link to="/myAccount/myOrders/shippedOrders">Shipped(0)</router-link></dd>
	</dl>
<dl>
	<dt><b>My Account</b></dt>
	<dd><i></i> <router-link  to="/myAccount/myAccountPoints">My Points</router-link></dd>
	<dd><i></i> <router-link  to="/myAccount/myCoupons">My Coupons</router-link></dd>
	<dd><i></i> <router-link  to="/myAccount/wishList">My wishlist</router-link></dd>
	<dd><i></i> <router-link  to="/myAccount/outFits">My Outfits</router-link></dd>
	<dd><i></i> <router-link  to="/myAccount/reviews">My Reviews</router-link></dd>
	<dd><i></i> <router-link  to="/myAccount/questions">My Questions </router-link> </dd>
	<!-- <dd><i></i> <a tag="my_doubts" href="/?com=account&t=my_doubts">My doubts</a></dd> -->
		<dd><i></i> <router-link  to="/myAccount/personalInfo">Personal Info</router-link></dd>
	<dd><i></i> <router-link  to="/myAccount/changePassword">Change Password</router-link></dd>
	<!-- <dd><i></i> <a tag="editavatar" href="/account/editavatar.html">Change my avatar</a></dd> -->
	<dd><i></i> <router-link  to="/myAccount/addressBook">Address Book</router-link></dd>
</dl>
 
<dl>
	<dt><b>Wholesale program</b></dt>
	<dd><i></i> <router-link  to="/myAccount/programs/WholeSaleProgram">Wholesale center</router-link></dd>
</dl>
<dl>
	<dt><b>Affiliate Program</b></dt>
	<dd><i></i> <router-link  to="/account/AffProgram">Affiliate Points &amp; Referrals</router-link></dd>
	<dd><i></i> <router-link  to="/account/ReffProgram">Referral Code &amp; Reports</router-link></dd>
</dl>
<dl>
	<dt><b>Dropship Program</b></dt>
	<dd><i></i> <router-link  to="/myAccount/programs/DropShipProgram">Drop-ship info &amp; rules</router-link></dd>
</dl>




			
			
			
			
			
			        </div>
</template>

<script>
export default {
 name: 'myAccountLeftNavigation',
 mounted(){
     var taskTag = $('#taskTag').attr('taskTag');
     $('.order_form_left').find('a').each(function(){
	if($(this).attr('tag')==taskTag){
		if(taskTag == 'orderlist'){		
			if($(this).attr('status')==$('#taskTag').attr('status')){$(this).addClass("selected");}
		}else{
			$(this).addClass("selected");
		}
	}
});
 }
}
</script>

<style>

</style>
