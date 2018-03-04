<template>
  <div class="order_form_right dropship-container">
        	<ul class="good_link nav nav-tabs">
				<li v-on:click="activateTab" class="isactive active" id="introduce">
					Drop-ship introduction
				</li>
				<li v-on:click="activateTab" class="isactive" id="join">
					Join our drop-ship program
				</li>
        	</ul>
        	<div class="tab-content">
        		<div class="tab-pane tab-introduce active" id="tab-introduce">
        			
					
					<div class="banner">
						<h3 class="title text-center">Join our drop-ship program</h3>
						<h5 class="subtitle text-center">Your product sourcing partner, no drop-ship fees</h5>
						<ul class="clearfix">
							<li>
								<p class="title text-center">20, 000+</p>
								<p class="tag"><i class="tag-organization"></i>Products</p>
							</li>
							<li>
								<p class="title text-center">200+</p>
								<p class="tag"><i class="tag-list"></i>Categories</p>
							</li>
							<li>
								<p class="title text-center">Hundreds of</p>
								<p class="tag"><i class="tag-square"></i>Brands</p>
							</li>
							<li>
								<p class="title text-center">One to one</p>
								<p class="tag"><i class="tag-card"></i>VIP customer service</p>
							</li>
						</ul>
						<div class="join pull-right">
							<a href="javascript:;" class="btn-join-dropship">Join today! ―→</a>
						</div>
					</div>
					<dl class="benefits">
						<dt>The benefits of drop-shipping?</dt>
						<dd>Want to start a new business? Looking for a part-time job? Join our Newchic drop-ship program for free!</dd>
					</dl>
					<ul class="clearfix acting-flow">
						<li class="text-center">
							<div class="tag tag-you-sell"></div>
							<div class="title">You sell</div>
							<div class="discribe">Collect money directly from your clients</div>
						</li>
						<li class="text-center">
							<div class="tag tag-logistics"></div>
							<div class="title">We process</div>
							<div class="discribe">We ship directly to your customers</div>
						</li>
						<li class="text-center">
							<div class="tag tag-currency"></div>
							<div class="title">You can profit from</div>
							<div class="discribe">You keep the difference between the prices on our website and the ones you selected</div>
						</li>
					</ul>
					<div class="discount-container">
						<p>What is a drop-ship discount??</p>
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>Drop-ship level</th>
									<th>Consumption amount</th>
									<th>Drop-ship discount</th>
									<th>You sell</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>D VIP1</td>
									<td>0-3,999USD</td>
									<td>10%</td>
									<td>No Minimum</td>
								</tr>
								<tr>
									<td>D VIP2</td>
									<td>4,000-9,999USD</td>
									<td>20%</td>
									<td>100(USD/Month)</td>
								</tr>
								<tr>
									<td>D VIP3</td>
									<td>10,000-19,000USD</td>
									<td>25%</td>
									<td>300(USD/Month)</td>
								</tr>
								<tr>
									<td>D VIP4</td>
									<td>20,000+USD</td>
									<td>30%</td>
									<td>500(USD/Month)</td>
								</tr>
							</tbody>
						</table>
					</div>
					<dl>
						<dt>More information</dt>
						<dd>If you are interested or want to receive further information, please contact <a href="" class="mail">dropship@newchic.com</a></dd>
					</dl>
        		</div>
        		
        		<div class="tab-pane tab-join none active" id="tab-join">
					<div class="acc_item">
		                <div class="myorder">
		                    <div class="dropship_program">
			                     
								<p class="margin-top-20 margin-bottom-20 red font-bigger">
									<b>NOTE: please kindly inform us in time to update your information if you change the selling plaftorm or open a new store in the future</b>
								</p>
								<!--<form action="/index.php?com=account&t=applySubmit" method="post" id="joinDropshipForm"> -->
			                    <form id="joinDropshipForm">
			                    	<dl>
										<dt>Full name <span class="red">*</span>:</dt>
										<dd>
											<input type="text" name="full_name" value="" msg="Please enter your full name" datatype="Name" class="validate" require="true" autocomplete="off">
										</dd>

										<dt>Phone <span class="red">*</span>:</dt>
										<dd>
											<input type="text" name="phone" value="" msg="Please enter a valid phone number" datatype="Number" class="validate" require="true" autocomplete="off">
										</dd>

										<dt>Shop URL <span class="red">*</span>:</dt>
										<dd>
											<input type="text" name="shop_url" value="" msg="Please enter a valid URL with HTTP://" datatype="Number" class="validate" require="true" autocomplete="off">
											<div class="tips">Or the URL showing on your store ID if you sell on other platforms (eBay, Amazon)</div>
										</dd>

										<dt>PayPal account <span class="red">*</span>:</dt>
										<dd>
											<input type="text" name="paypal_address" value="" msg="Please enter your PayPal account ID" datatype="Number" class="validate" require="true" autocomplete="off">
										</dd>

										<dd>Country <span class="red">*</span>:</dd>
										<dd class="selectbox">
											<input type="text" name="Options_7" msg="请选择一个选项" datatype="Require" require="true" autocomplete="off" readonly="true" value="United States">
											<i></i>
											<input type="hidden" name="country_id" id="country_id" value="223">
											<ul class="select" style="min-width: 620px;">
																							<li value="223">United States</li>
																							<li value="222">United Kingdom</li>
																							<li value="38">Canada</li>
																							<li value="195">Spain</li>
																							<li value="13">Australia</li>
																							<li value="176">Russian Federation</li>
																							<li value="73">France</li>
																							<li value="30">Brazil</li>
																							<li value="105">Italy</li>
																							<li value="81">Germany</li>
																							<li value="150">Netherlands</li>
																							<li value="220">Ukraine</li>
																							<li value="10">Argentina</li>
																							<li value="99">India</li>
																							<li value="103">Ireland</li>
																							<li value="1">Afghanistan</li>
																							<li value="2">Albania</li>
																							<li value="3">Algeria</li>
																							<li value="4">American Samoa</li>
																							<li value="5">Andorra</li>
																							<li value="6">Angola</li>
																							<li value="7">Anguilla</li>
																							<li value="8">Antarctica</li>
																							<li value="9">Antigua and Barbuda</li>
																							<li value="11">Armenia</li>
																							<li value="12">Aruba</li>
																							<li value="14">Austria</li>
																							<li value="15">Azerbaijan</li>
																							<li value="16">Bahamas</li>
																							<li value="17">Bahrain</li>
																							<li value="18">Bangladesh</li>
																							<li value="19">Barbados</li>
																							<li value="20">Belarus</li>
																							<li value="21">Belgium</li>
																							<li value="22">Belize</li>
																							<li value="23">Benin</li>
																							<li value="24">Bermuda</li>
																							<li value="25">Bhutan</li>
																							<li value="26">Bolivia</li>
																							<li value="28">Botswana</li>
																							<li value="29">Bouvet Island</li>
																							<li value="31">British Indian Ocean Territory</li>
																							<li value="32">Brunei Darussalam</li>
																							<li value="33">Bulgaria</li>
																							<li value="34">Burkina Faso</li>
																							<li value="35">Burundi</li>
																							<li value="36">Cambodia</li>
																							<li value="37">Cameroon</li>
																							<li value="39">Cape Verde</li>
																							<li value="40">Cayman Islands</li>
																							<li value="41">Central African Republic</li>
																							<li value="42">Chad</li>
																							<li value="43">Chile</li>
																							<li value="46">Cocos (Keeling) Islands</li>
																							<li value="47">Colombia</li>
																							<li value="48">Comoros</li>
																							<li value="50">Cook Islands</li>
																							<li value="51">Costa Rica</li>
																							<li value="52">Cote D'Ivoire</li>
																							<li value="245">Croatia</li>
																							<li value="54">Cuba</li>
																							<li value="55">Cyprus</li>
																							<li value="56">Czech Republic</li>
																							<li value="237">Democratic Republic of the Congo</li>
																							<li value="57">Denmark</li>
																							<li value="58">Djibouti</li>
																							<li value="59">Dominica</li>
																							<li value="60">Dominican Republic</li>
																							<li value="61">East Timor</li>
																							<li value="62">Ecuador</li>
																							<li value="63">Egypt</li>
																							<li value="64">El Salvador</li>
																							<li value="65">Equatorial Guinea</li>
																							<li value="66">Eritrea</li>
																							<li value="67">Estonia</li>
																							<li value="68">Ethiopia</li>
																							<li value="69">Falkland Islands (Malvinas)</li>
																							<li value="70">Faroe Islands</li>
																							<li value="27">Federation of Bosnia and Herzegovina</li>
																							<li value="71">Fiji</li>
																							<li value="72">Finland</li>
																							<li value="75">French Guiana</li>
																							<li value="76">French Polynesia</li>
																							<li value="77">French Southern Territories</li>
																							<li value="78">Gabon</li>
																							<li value="79">Gambia</li>
																							<li value="80">Georgia</li>
																							<li value="82">Ghana</li>
																							<li value="83">Gibraltar</li>
																							<li value="84">Greece</li>
																							<li value="85">Greenland</li>
																							<li value="86">Grenada</li>
																							<li value="87">Guadeloupe</li>
																							<li value="88">Guam</li>
																							<li value="89">Guatemala</li>
																							<li value="250">Guernsey</li>
																							<li value="90">Guinea</li>
																							<li value="91">Guinea-bissau</li>
																							<li value="92">Guyana</li>
																							<li value="93">Haiti</li>
																							<li value="94">Heard and Mc Donald Islands</li>
																							<li value="95">Honduras</li>
																							<li value="96">Hong Kong</li>
																							<li value="97">Hungary</li>
																							<li value="98">Iceland</li>
																							<li value="100">Indonesia</li>
																							<li value="101">Iran (Islamic Republic of)</li>
																							<li value="102">Iraq</li>
																							<li value="104">Israel</li>
																							<li value="106">Jamaica</li>
																							<li value="107">Japan</li>
																							<li value="253">Jersey Island</li>
																							<li value="108">Jordan</li>
																							<li value="109">Kazakhstan</li>
																							<li value="110">Kenya</li>
																							<li value="111">Kiribati</li>
																							<li value="112">Korea, Democratic People's Republic of</li>
																							<li value="113">Korea, Republic of</li>
																							<li value="114">Kuwait</li>
																							<li value="115">Kyrgyzstan</li>
																							<li value="116">Lao People's Democratic Republic</li>
																							<li value="117">Latvia</li>
																							<li value="118">Lebanon</li>
																							<li value="119">Lesotho</li>
																							<li value="120">Liberia</li>
																							<li value="121">Libyan Arab Jamahiriya</li>
																							<li value="122">Liechtenstein</li>
																							<li value="123">Lithuania</li>
																							<li value="124">Luxembourg</li>
																							<li value="125">Macau</li>
																							<li value="241">Macedonia</li>
																							<li value="127">Madagascar</li>
																							<li value="128">Malawi</li>
																							<li value="129">Malaysia</li>
																							<li value="130">Maldives</li>
																							<li value="131">Mali</li>
																							<li value="132">Malta</li>
																							<li value="133">Marshall Islands</li>
																							<li value="134">Martinique</li>
																							<li value="135">Mauritania</li>
																							<li value="136">Mauritius</li>
																							<li value="137">Mayotte</li>
																							<li value="138">Mexico</li>
																							<li value="139">Micronesia, Federated States of</li>
																							<li value="140">Moldova, Republic of</li>
																							<li value="141">Monaco</li>
																							<li value="142">Mongolia</li>
																							<li value="243">Montenegro</li>
																							<li value="143">Montserrat</li>
																							<li value="144">Morocco</li>
																							<li value="145">Mozambique</li>
																							<li value="146">Myanmar</li>
																							<li value="147">Namibia</li>
																							<li value="148">Nauru</li>
																							<li value="149">Nepal</li>
																							<li value="151">Netherlands Antilles</li>
																							<li value="152">New Caledonia</li>
																							<li value="153">New Zealand</li>
																							<li value="154">Nicaragua</li>
																							<li value="155">Niger</li>
																							<li value="156">Nigeria</li>
																							<li value="157">Niue</li>
																							<li value="158">Norfolk Island</li>
																							<li value="159">Northern Mariana Islands</li>
																							<li value="160">Norway</li>
																							<li value="161">Oman</li>
																							<li value="162">Pakistan</li>
																							<li value="255">Palau</li>
																							<li value="164">Panama</li>
																							<li value="165">Papua New Guinea</li>
																							<li value="166">Paraguay</li>
																							<li value="167">Peru</li>
																							<li value="168">Philippines</li>
																							<li value="169">Pitcairn</li>
																							<li value="170">Poland</li>
																							<li value="171">Portugal</li>
																							<li value="172">Puerto Rico</li>
																							<li value="173">Qatar</li>
																							<li value="49">Republic of the Congo</li>
																							<li value="174">Reunion</li>
																							<li value="175">Romania</li>
																							<li value="177">Rwanda</li>
																							<li value="178">Saint Kitts and Nevis</li>
																							<li value="179">Saint Lucia</li>
																							<li value="254">Saint Pierre and Miquelon</li>
																							<li value="180">Saint Vincent and the Grenadines</li>
																							<li value="181">Samoa</li>
																							<li value="182">San Marino</li>
																							<li value="183">Sao Tome and Principe</li>
																							<li value="184">Saudi Arabia</li>
																							<li value="185">Senegal</li>
																							<li value="240">Serbia</li>
																							<li value="186">Seychelles</li>
																							<li value="187">Sierra Leone</li>
																							<li value="188">Singapore</li>
																							<li value="189">Slovakia (Slovak Republic)</li>
																							<li value="190">Slovenia</li>
																							<li value="191">Solomon Islands</li>
																							<li value="192">Somalia</li>
																							<li value="193">South Africa</li>
																							<li value="194">South Georgia and the South Sandwich Islands</li>
																							<li value="196">Sri Lanka</li>
																							<li value="197">St. Helena</li>
																							<li value="198">St. Pierre and Miquelon</li>
																							<li value="199">Sudan</li>
																							<li value="200">Suriname</li>
																							<li value="201">Svalbard and Jan Mayen Islands</li>
																							<li value="202">Swaziland</li>
																							<li value="203">Sweden</li>
																							<li value="204">Switzerland</li>
																							<li value="205">Syrian Arab Republic</li>
																							<li value="206">Taiwan</li>
																							<li value="207">Tajikistan</li>
																							<li value="208">Tanzania, United Republic of</li>
																							<li value="209">Thailand</li>
																							<li value="210">Togo</li>
																							<li value="211">Tokelau</li>
																							<li value="212">Tonga</li>
																							<li value="213">Trinidad and Tobago</li>
																							<li value="214">Tunisia</li>
																							<li value="215">Turkey</li>
																							<li value="216">Turkmenistan</li>
																							<li value="217">Turks and Caicos Islands</li>
																							<li value="218">Tuvalu</li>
																							<li value="219">Uganda</li>
																							<li value="221">United Arab Emirates</li>
																							<li value="224">United States Minor Outlying Islands</li>
																							<li value="225">Uruguay</li>
																							<li value="226">Uzbekistan</li>
																							<li value="227">Vanuatu</li>
																							<li value="228">Vatican City State (Holy See)</li>
																							<li value="229">Venezuela</li>
																							<li value="230">Viet Nam</li>
																							<li value="231">Virgin Islands (British)</li>
																							<li value="232">Virgin Islands (U.S.)</li>
																							<li value="233">Wallis and Futuna Islands</li>
																							<li value="234">Western Sahara</li>
																							<li value="238">Zambia</li>
																							<li value="239">Zimbabwe</li>
																						</ul>
										</dd>

										<dt>My Skype ID:</dt>
										<dd>
											<input type="text" name="skype" value="" msg="text" datatype="Number" require="true" autocomplete="off">
										</dd>

										<dt>Note:</dt>
										<dd>
											<textarea require="true" datatype="LimitB" max="200" min="3" msg="输入的内容必须在[3,200]个字节之内" style="width:650px" rows="5" name="note" autocomplete="off" value=""></textarea>
										</dd>

										<dd class="clearfix preferred-cate-container">
											<div class="pull-left title">Preferred categories</div>
											<div class="pull-left cate-container">
												<ul class="clearfix">
														
													<li>
														<label>
															<div class="checker"><span><input type="checkbox" name="cateId[]" value="3578"></span></div>	
															Women
														</label>
													</li>
														
													<li>
														<label>
															<div class="checker"><span><input type="checkbox" name="cateId[]" value="3581"></span></div>	
															Men
														</label>
													</li>
														
													<li>
														<label>
															<div class="checker"><span><input type="checkbox" name="cateId[]" value="3579"></span></div>	
															Bags
														</label>
													</li>
														
													<li>
														<label>
															<div class="checker"><span><input type="checkbox" name="cateId[]" value="3580"></span></div>	
															Shoes
														</label>
													</li>
														
													<li>
														<label>
															<div class="checker"><span><input type="checkbox" name="cateId[]" value="3990"></span></div>	
															Beauty
														</label>
													</li>
														
													<li>
														<label>
															<div class="checker"><span><input type="checkbox" name="cateId[]" value="4040"></span></div>	
															Jewelry &amp; Watch
														</label>
													</li>
														
													<li>
														<label>
															<div class="checker"><span><input type="checkbox" name="cateId[]" value="3973"></span></div>	
															Accessories
														</label>
													</li>
														
													<li>
														<label>
															<div class="checker"><span><input type="checkbox" name="cateId[]" value="4494"></span></div>	
															Home &amp; Garden
														</label>
													</li>
														
													<li>
														<label>
															<div class="checker"><span><input type="checkbox" name="cateId[]" value="4565"></span></div>	
															Kids
														</label>
													</li>
														
												</ul>
												<div class="tips">You can choose maximum 3 categories</div>
											</div>
										</dd>
										<dd class="agree">
											<label>
												<div class="checker"><span><input type="checkbox" name="agree" msg="Please agree the agreement."></span></div>	
												<span class="term-use">I agree to Newchic.com <a href="javascript:;">Terms of Use</a>.</span>
											</label>
											<div class="margin-top-20 text-center">
												<button type="button" class="submit btn btn-default">Submit</button>
											</div>

										</dd>
			                    	</dl>
			                        
								</form>
								 
		                    </div>
		                </div>
		            </div>
        		</div>
        		        	</div>
        	        </div>
</template>

<script>
export default {
	
 
   methods:{
	   activateTab: function(event)
	   {
			 $("#introduce").removeClass('active');
			 $("#join").removeClass('active');
			 event.target.classList.add('active');
			 var flip = event.target.id == 'join';
			 if(flip)
			 {
			  $("#tab-introduce").removeClass('active');
			  $("#tab-introduce").css('display','none');
			  $("#tab-join").addClass('active');
			  $("#tab-join").css('display','block');
			 }else{
              $("#tab-introduce").addClass('active');
			  $("#tab-join").removeClass('active');
			  $("#tab-introduce").css('display','block');
$("#tab-join").css('display','none');
			 }
	   }
   }
}
</script>

<style>

</style>
