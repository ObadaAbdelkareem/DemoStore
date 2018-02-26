<template>
  <div>
        	<div class="order_form_title">
            	<h3>Change Password</h3>   
            </div>
   	        <div class="change_password">
            <form action="index.php?com=account&amp;t=updatepassword" method="post" id="resetPasswordForm">
                <div class="inputbox">
					<s><b>*</b>Existing password: </s>
					<input type="password" name="cur_pwd" id="cur_pwd" msg="Please enter your previous password" datatype="Name" require="true" autocomplete="off">
				</div>
				<div class="inputbox">
					<s><b>*</b>New password: </s>
					<input type="password" name="new_pwd" id="new_pwd" msg="Please enter your new password" datatype="Name" require="true" autocomplete="off">
				</div>
				<div class="inputbox">
					<s><b>*</b>Re-enter new password: </s>
					<input type="password" name="con_pwd" id="con_pwd" msg="Please confirm your new password" msg2="Password " datatype="Name" require="true" autocomplete="off">
				</div>
				<span class="form_submit"><input name="" type="buttom" id="resetPwd">Confirm</span>
            </form>
            </div>
		</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
