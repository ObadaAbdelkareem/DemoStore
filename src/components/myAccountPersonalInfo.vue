<template>
  <div>
        	        	<div class="order_form_title">
            	<h3>Personal Info <em>| Complete your profile for a more customized shopping experience </em></h3>   
            </div><!--todo ali  -->
            <div class="personal-container clearfix">
				<div class="pull-left thumbnal-container">
					<div class="thumbnal">
						<img src="https://www.newchic.com/templates/default/images/touxiang.png" id="myavatar" style="width: 120px; height: 120px; transition: all 0.5s; margin-top: 0px;">						<input type="file" id="avatar" name="upload_avatars" msg="You can only upload pictures" imsg="File size not allowed" style="display:none;">
					</div>
					<p><b><!--{{me.myAccountPersonalInfo.username}}--></b>, Welcome to my account</p>
					<p><b>Tips</b>:</p>
					<p class="margin-top-20 text-center">
						<button class="btn btn-default" id="editAvatar">Upload avatar</button>
					</p>
				</div>
				<div class="pull-right user-info-container">
					<form id="personalForm" novalidate="novalidate">
					<dl class="dl-horizontal">
						<dt>E-mail:</dt>
						<dd>
							<p class="form-control-static">
								example@gmail.com
																<a href="" class="edt_email news_edts">Change Email</a>
																<!--<a href="" class="write_email">Your E-mail,please</a>-->
							</p>
						</dd>
						                        <dd class="edt_menages"><a href="" class="verify_email">Verify your Email</a></dd>
                        						<dt>Username:</dt>
						<dd>					
							<input type="text" v-model="username" name="nickname" data-msg-required="Invalid username"  maxlength="50"> <span class="red">*</span>
						</dd>

						<dt>Phone:</dt>
						<dd>
							<input v-model="phone" type="text" name="telephone" value="">
						</dd>

						<dt></dt>
						<dd>
							<button id="submit" type="button" v-on:click="confirmEdit()" class="btn btn-pink btn-radius margin-right-10">Confirm edit</button>
													</dd>
					</dl>
					</form>	
				</div>
            </div>
   	      	<!-- <div class="personal_information">
				<div class="form_item">
					
						<div class="inputbox">
							<s>E-mail: </s>
							<p>example@gmail.com</p>
						</div>				
						<div class="inputbox firstname">
							<s>Your name: </s>
							<span class="tips">First name</span>							<input class="name" name="firstname" id="firstname" msg="First name must contain at least 2 characters" dataType="Name" require="true" autocomplete="off" value="" dvalue="First name"/>
						</div>
						<div class="inputbox lastname">
							<span class="tips">Last name</span>							<input class="name" name="lastname" id="lastname" msg="Last name must contain at least 2 characters" msg2="Please enter your name" dataType="Name" require="true" autocomplete="off" value="" dvalue="Last name"/>
							<b>*</b>
						</div>
						<div class="inputbox nickname">
							<s>Username: </s>
							<input name="nickname" id="nickname" msg="Invalid username" err="Username must be at least 5 but no more than 20 characters in length" dataType="Name" require="true" autocomplete="off" value="NC142428835"/>
							<b>*</b>
						</div>
						<div class="radiobox">
							<s>Gender: </s>
							<span class="label">
								<label><input type="radio" name="gender" value="f" />Ms</label>
								<label><input type="radio" name="gender" value="m" />Mr</label>
							</span>
						</div>
						<div class="inputbox">
							<s>Phone: </s>
							<input name="telephone" id="telphone" msg="Phone number must be valid and 3-25 characters in length" dataType="Name" require="true" autocomplete="off" value=""/>
						</div>
						<div class="btn">
							<span class="form_submit">
								<input name="" type="buttom" id="submit"/>Confirm edit
							</span>
							<span class="form_submit">
								<input name="" type="buttom" id="changepassword"/>Change Password
							</span>
						</div>
				</div>
        	</div> -->

        		    		    	    	</div>
</template>

<script>
import myAccountApi from '@/api/myAccountApi.js'
export default {
name:'myAccountPersonalInfo',
data(){
	return {
		 myAccountPersonalInfo
		 }
},
created(){
	  var me = this
	  myAccountApi.getPersonalDetails().then(function(response){
		  	me.myAccountPersonalInfo = response.data;
			  username = response.data.username;
			  phone =response.data.phone;
			  console.log(me.myAccountPersonalInfo)
			
				})
},
methods: {
	confirmEdit(){
		//todo: post to server new data
		console.log(me.myAccountPersonalInfo.nickname)
		me.myAccountPersonalInfo.phone = phone
	}
}
}
</script>

<style>

</style>
