<template>
  <div>
        	        	<div class="order_form_title">
            	<h3>Personal Info <em>| Complete your profile for a more customized shopping experience </em></h3>   
            </div>
            <div class="personal-container clearfix">
				<div class="pull-left thumbnal-container">
					<div class="thumbnal">
						<img src="https://www.newchic.com/templates/default/images/touxiang.png" id="myavatar" style="width: 120px; height: 120px; transition: all 0.5s; margin-top: 0px;">						<input type="file" id="avatar" name="upload_avatars" msg="You can only upload pictures" imsg="File size not allowed" style="display:none;">
					</div>
					<p><b>NC142428835</b>, Welcome to my account</p>
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
							<input type="text" name="nickname" data-msg-required="Invalid username" value="NC142428835" maxlength="50"> <span class="red">*</span>
						</dd>

						<dt>Gender:</dt>
						<dd>
							<div class="radio-list">
								<label class="radio-inline"><input type="radio" name="gender" value="f" id="gender-0">Female</label>
								<label class="radio-inline"><input type="radio" name="gender" value="m" id="gender-1">Male</label>
								<label class="radio-inline"><input type="radio" name="gender" value="s" id="gender-2" checked="">Undisclosed</label>
							</div>
						</dd>

						<dt>Birth date:</dt>
						<dd>
							<ul class="list-inline">
								<li>
         							<select data-placeholder="day" name="day" data-default="01" style="display: none;"><option></option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option></select><div class="select-container select-container-default input-select" id="select-container-151941012349756725" style="min-width: 64px;">	<div class="selection">		<div class="select-selection select-selection-single">			<span class="select-selection-rendered" id="select-151941012349756725-container" title="">01<span class="select-selection-clear">×</span></span>			<span class="select-selection-arrow select-selection-arrow-triangle">				<b></b>			</span>		</div>	</div></div>
								</li>
								<li>
         							<select data-placeholder="month" name="month" data-default="01" style="display: none;"><option></option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option></select><div class="select-container select-container-default input-select" id="select-container-151941012350221996" style="min-width: 64px;">	<div class="selection">		<div class="select-selection select-selection-single">			<span class="select-selection-rendered" id="select-151941012350221996-container" title="">01<span class="select-selection-clear">×</span></span>			<span class="select-selection-arrow select-selection-arrow-triangle">				<b></b>			</span>		</div>	</div></div>
								</li>
								<li>
         							<select data-placeholder="year" name="year" data-default="2016" style="display: none;"><option></option><option>1930</option><option>1931</option><option>1932</option><option>1933</option><option>1934</option><option>1935</option><option>1936</option><option>1937</option><option>1938</option><option>1939</option><option>1940</option><option>1941</option><option>1942</option><option>1943</option><option>1944</option><option>1945</option><option>1946</option><option>1947</option><option>1948</option><option>1949</option><option>1950</option><option>1951</option><option>1952</option><option>1953</option><option>1954</option><option>1955</option><option>1956</option><option>1957</option><option>1958</option><option>1959</option><option>1960</option><option>1961</option><option>1962</option><option>1963</option><option>1964</option><option>1965</option><option>1966</option><option>1967</option><option>1968</option><option>1969</option><option>1970</option><option>1971</option><option>1972</option><option>1973</option><option>1974</option><option>1975</option><option>1976</option><option>1977</option><option>1978</option><option>1979</option><option>1980</option><option>1981</option><option>1982</option><option>1983</option><option>1984</option><option>1985</option><option>1986</option><option>1987</option><option>1988</option><option>1989</option><option>1990</option><option>1991</option><option>1992</option><option>1993</option><option>1994</option><option>1995</option><option>1996</option><option>1997</option><option>1998</option><option>1999</option><option>2000</option><option>2001</option><option>2002</option><option>2003</option><option>2004</option><option>2005</option><option>2006</option><option>2007</option><option>2008</option><option>2009</option><option>2010</option><option>2011</option><option>2012</option><option>2013</option><option>2014</option><option>2015</option><option>2016</option><option>2017</option><option>2018</option></select><div class="select-container select-container-default input-select" id="select-container-151941012350787010" style="min-width: 77px;">	<div class="selection">		<div class="select-selection select-selection-single">			<span class="select-selection-rendered" id="select-151941012350787010-container" title="">2016<span class="select-selection-clear">×</span></span>			<span class="select-selection-arrow select-selection-arrow-triangle">				<b></b>			</span>		</div>	</div></div>
								</li>
							</ul>
						</dd>
						<dt>Phone:</dt>
						<dd>
							<input type="text" name="telephone" value="">
						</dd>

						<dt></dt>
						<dd>
							<button type="submit" class="btn btn-pink btn-radius margin-right-10">Confirm edit</button>
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
export default {

}
</script>

<style>

</style>
