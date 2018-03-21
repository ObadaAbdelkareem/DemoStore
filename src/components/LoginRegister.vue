<template>

<div class="wrap">
	<h4 class="registration_title">Welcome to <font>Alarabexpress</font>, stay with latest fashion trend.</h4>
		<!--start of facbook / login with google div need to check after-->
        <!--<div class="sign_other">
                <span class="log_facebook"><i></i>Log in with Facebook</span>
                <a href=""><span id="google_sign_in" class="log_google"><i></i>Log in with Google</span></a>
             </div>-->
             <!--end of facbook / login with google div-->
    <div class="registration_log">
        <div class="log_in">
        <form method="post" name="toLogin" id="sign_form">
        	<h5>Log in</h5> 
        		
            <div class="ipt_t">       
                <div class="inputtext_box add_my_emailbox"> <i></i>
                     <div class="l_input_title"> <strong>*</strong>E-mail address</div>
                     <i></i>
                    <input class="inputtext" name="email" id="log_email" type="text" onblur="checkEmail($(this));showerr();" autocomplete="off" v-model="userData.username">

                    <br>
                   
                    <span class="error" id="emailerr" msg1="E-mail field cannot be empty" msg2="Please enter a valid e-mail address">
                        
                    </span><ul class="add_email_tips"></ul>
                </div>
                <div class="inputtext_box"> 
                  <div class="l_input_title"> <strong>*</strong>Password</div>
					<em></em>
                	<input class="inputtext" name="pwd" type="password"  v-model="userData.password">
					<br>
                    <span class="error" id="pwderr" msg1="Password field can not be empty" msg2="Password must be longer than 6 characters">
                    </span>
                </div>
				<div class="inputtext_box" id="codestextarea" style="display:none">
					<input class="inputtext codes" name="image_code" type="text" onkeydown="globelQuery(event);">
					<img style="width:82px;" id="find_image" title="Click on the image to receive a new one" alt="Click on the image to receive a new one" src="/index.php?com=imagecode&amp;t=display" onclick="this.src='/index.php?com=imagecode&amp;t=display&amp;'+Math.random();">
					<br>
                    <span class="error" id="image_codeerr" msg1="Please enter the code" msg2="Please enter the code">
                    </span>
				</div> 
            
            </div>
            <div>{{errorMsg}}</div>
            <div class="ipt_b">
            	<span class="form_submit"><input id="signbtn" type="button" v-on:click="chkLogin()">Log in</span>
            </div>
            <input type="hidden" id="isback" value="0">
            <input type="hidden" id="orders_by_orders" name="orders_by_orders" value="">
            </form>
        	<p class="forgetPas"><a href="">Forgot your password?</a></p>
        </div>
        <div class="registration">
            <h5>Register</h5>
            <div class="operalForm">
            <form action="index.php?com=account&amp;t=registernew" method="post" name="toReg" onsubmit="return chkreg(toReg,'all')">
                <input type="hidden" name="regToken" value="797be54190ba279ba59d916b77ec4c26nc3rdc1.1517951094" id="regToken">
                <input type="hidden" name="url" value="">
                <input type="hidden" name="isBack" value="0">
                <input type="hidden" name="orders_by_orders" value="">
                <div class="ipt_t add_my_emailbox">
                    <div class="l_input_title"> <strong>*</strong>E-mail address</div>
					<i></i>
                    <input class="inputtext" name="email" id="reg_email" type="text" value="" onblur="chkEmail(this.value)" autocomplete="off">
                    <br>
                    <span class="error" id="emailerr2" msg1="E-mail field cannot be empty" msg2="Please enter a valid e-mail address">
                    
                    </span><ul class="add_email_tips"></ul>
                </div>
                <div class="ipt_t">
                    <div class="l_input_title"> <strong>*</strong>Password</div>
					<em></em>
                    <input class="inputtext" name="pwd" type="password">
                    <br>
                    <span class="error" id="pwderr2" msg1="Password field can not be empty" msg2="Password must be longer than 6 characters"></span>
                </div>
                <div class="ipt_t">
                    <div class="l_input_title"> <strong>*</strong>Re-enter new password</div>
					<em></em>
                    <input class="inputtext" name="repwd" type="password">
                    <br>
                    <span class="error" id="repwderr2" msg="Previous password and new password do not match"></span>
                </div>
                <p class="register_tips">
					<span class="checkbox"><input type="checkbox" class="check_on" id="agree" checked="checked" name="agree" value="1"></span>
					I agree to Newchic <a href="" target="_blank">Terms of Use</a>
				</p>
				
                <span class="error" style="display:block;clear:both;" id="agreetip" msg="By using our services, you are agreeing to Newchic Terms of Use"></span>
                <div class="ipt_b">
                    <span class="form_submit"><input type="submit">Register</span>
					<input type="hidden" id="backUrl" value="">
                </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import userAuthApi from '@/api/userAuthApi.js'
import EventBus from '@/services/eventBus.js'

export default {
  name: 'LoginRegister',
  data () {
    return {
        userData:{
            username: "",
            password: ""
        },
        errorMsg: ""
    }
  },
  methods:{
      chkLogin(){
          var me = this
          this.errorMsg = "";
          userAuthApi.login(this.userData).then(function(response){

                var decodedToken = me.parseJwt(response.data.token)
                localStorage.token = response.data.token;
                localStorage.userId = decodedToken.data.user.id;
                EventBus.eventBus.$emit('isUserLoggedIn', true);
                me.$router.push('/');
          }, function(err){
              me.errorMsg = "please validate username and password"
          })
      },
      parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return JSON.parse(window.atob(base64));
        }
  }
}

</script> 
<style>

</style>