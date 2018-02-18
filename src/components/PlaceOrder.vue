<template>

<div class="wrap">
	<div class="payment_flow">
		<ul class="clear_1">
			<li class="step_li_1 active">
				<span class="step_icon step_1"></span>
				<span data-language-id="LS_WEB_SHOPCART_VOCABULARY">Shopping Bag</span>
			</li>
			<li class="active">
				<span class="step_arr">&gt;&gt;</span>
			</li>
			<li class="step_li_2 active">
				<span class="step_icon step_2"></span>
				<span data-language-id="LS_WEB_SHOPCART_VOCABULARY3">Place Order</span>
			</li>
			<li class="active">
				<span class="step_arr">&gt;&gt;</span>
			</li>
			<li class="step_li_3">
				<span class="step_icon step_3"></span>
				<span data-language-id="LS_WEB_SHOPCART_VOCABULARY4">Pay</span>
			</li>
			<li>
				<span class="step_arr">&gt;&gt;</span>
			</li>
			<li class="step_li_4">
				<span class="step_icon step_4"></span>
				<span data-language-id="LS_WEB_SHOPCART_VOCABULARY5">Order Complete</span>
			</li>
		</ul>
	</div>
	<div class="checkout-container" style="min-height: 369px;">
		<div></div>
		<div class="cart_title order-left">
						
			<h4>Please confirm your shipping address</h4>
		</div>
		
		<div class="order-left">
			<div class="address_edit_bg"></div>
			<div class="checkout_address_add cart_address_box"><script type="jsv#1_"></script>
<h3 class="address_add_title">
	<span>Your shipping address:</span>
	<i></i>
</h3>
<form id="addressForm" novalidate="novalidate">
	<div class="inputbox_group">
		<s>Your name: </s>
		<div class="inputbox input-text-box">
			<div class="text" hidefocus="true" style="opacity: 0;"></div>
			<input type="text" name="last_name" msg="Please enter your full name" msg2="Last name must contain at least 2 characters" id="last_name" data-link="last_name" placeholder="Last name" style="opacity: 1;">
		</div>
		<div class="inputbox input-text-box">
			<div class="text" hidefocus="true"></div>
			<input name="first_name" msg="Please enter your full name" msg2="Last name must contain at least 2 characters" autocomplete="off" id="first_name" data-link="first_name" placeholder="First name">
		</div>
		<b>*</b>
		<span class="error" id="username">Please enter your full name</span>
	</div>
	<div class="inputbox" style="z-index:3">
		<s>Country/region: </s>
		<div class="inline-block select-container-wrap">

			<select class="select-uniform" name="country_select" id="country_select" data-placeholder="Select Country/Region" data-allow-clear="true" data-skin="address-select" data-option-icon="true" data-width="378" data-link="country_id" style="display: none;"><option value=""></option><option value="223" data-icon="https://img.newchic.com/images/country/small/US.png" data-posttip="Example:12345-6789">United States</option><option value="222" data-icon="https://img.newchic.com/images/country/small/GB.png" data-posttip="ZIP/Post Code">United Kingdom</option><option value="38" data-icon="https://img.newchic.com/images/country/small/CA.png" data-posttip="Example:A1B 2C3">Canada</option><option value="195" data-icon="https://img.newchic.com/images/country/small/ES.png" data-posttip="ZIP/Post Code">Spain</option><option value="13" data-icon="https://img.newchic.com/images/country/small/AU.png" data-posttip="ZIP/Post Code">Australia</option><option value="176" data-icon="https://img.newchic.com/images/country/small/RU.png" data-posttip="ZIP/Post Code">Russian Federation</option><option value="73" data-icon="https://img.newchic.com/images/country/small/FR.png" data-posttip="ZIP/Post Code">France</option><option value="30" data-icon="https://img.newchic.com/images/country/small/BR.png" data-posttip="ZIP/Post Code">Brazil</option><option value="105" data-icon="https://img.newchic.com/images/country/small/IT.png" data-posttip="ZIP/Post Code">Italy</option><option value="81" data-icon="https://img.newchic.com/images/country/small/DE.png" data-posttip="ZIP/Post Code">Germany</option><option value="150" data-icon="https://img.newchic.com/images/country/small/NL.png" data-posttip="ZIP/Post Code">Netherlands</option><option value="220" data-icon="https://img.newchic.com/images/country/small/UA.png" data-posttip="ZIP/Post Code">Ukraine</option><option value="10" data-icon="https://img.newchic.com/images/country/small/AR.png" data-posttip="ZIP/Post Code">Argentina</option><option value="99" data-icon="https://img.newchic.com/images/country/small/IN.png" data-posttip="ZIP/Post Code">India</option><option value="103" data-icon="https://img.newchic.com/images/country/small/IE.png" data-posttip="ZIP/Post Code">Ireland</option><option value="1" data-icon="https://img.newchic.com/images/country/small/AF.png" data-posttip="ZIP/Post Code">Afghanistan</option><option value="2" data-icon="https://img.newchic.com/images/country/small/AL.png" data-posttip="ZIP/Post Code">Albania</option><option value="3" data-icon="https://img.newchic.com/images/country/small/DZ.png" data-posttip="ZIP/Post Code">Algeria</option><option value="4" data-icon="https://img.newchic.com/images/country/small/AS.png" data-posttip="ZIP/Post Code">American Samoa</option><option value="5" data-icon="https://img.newchic.com/images/country/small/AD.png" data-posttip="ZIP/Post Code">Andorra</option><option value="6" data-icon="https://img.newchic.com/images/country/small/AO.png" data-posttip="ZIP/Post Code">Angola</option><option value="7" data-icon="https://img.newchic.com/images/country/small/AI.png" data-posttip="ZIP/Post Code">Anguilla</option><option value="8" data-icon="https://img.newchic.com/images/country/small/AQ.png" data-posttip="ZIP/Post Code">Antarctica</option><option value="9" data-icon="https://img.newchic.com/images/country/small/AG.png" data-posttip="ZIP/Post Code">Antigua and Barbuda</option><option value="11" data-icon="https://img.newchic.com/images/country/small/AM.png" data-posttip="ZIP/Post Code">Armenia</option><option value="12" data-icon="https://img.newchic.com/images/country/small/AW.png" data-posttip="ZIP/Post Code">Aruba</option><option value="14" data-icon="https://img.newchic.com/images/country/small/AT.png" data-posttip="ZIP/Post Code">Austria</option><option value="15" data-icon="https://img.newchic.com/images/country/small/AZ.png" data-posttip="ZIP/Post Code">Azerbaijan</option><option value="16" data-icon="https://img.newchic.com/images/country/small/BS.png" data-posttip="ZIP/Post Code">Bahamas</option><option value="17" data-icon="https://img.newchic.com/images/country/small/BH.png" data-posttip="ZIP/Post Code">Bahrain</option><option value="18" data-icon="https://img.newchic.com/images/country/small/BD.png" data-posttip="ZIP/Post Code">Bangladesh</option><option value="19" data-icon="https://img.newchic.com/images/country/small/BB.png" data-posttip="ZIP/Post Code">Barbados</option><option value="20" data-icon="https://img.newchic.com/images/country/small/BY.png" data-posttip="ZIP/Post Code">Belarus</option><option value="21" data-icon="https://img.newchic.com/images/country/small/BE.png" data-posttip="ZIP/Post Code">Belgium</option><option value="22" data-icon="https://img.newchic.com/images/country/small/BZ.png" data-posttip="ZIP/Post Code">Belize</option><option value="23" data-icon="https://img.newchic.com/images/country/small/BJ.png" data-posttip="ZIP/Post Code">Benin</option><option value="24" data-icon="https://img.newchic.com/images/country/small/BM.png" data-posttip="ZIP/Post Code">Bermuda</option><option value="25" data-icon="https://img.newchic.com/images/country/small/BT.png" data-posttip="ZIP/Post Code">Bhutan</option><option value="26" data-icon="https://img.newchic.com/images/country/small/BO.png" data-posttip="ZIP/Post Code">Bolivia</option><option value="28" data-icon="https://img.newchic.com/images/country/small/BW.png" data-posttip="ZIP/Post Code">Botswana</option><option value="29" data-icon="https://img.newchic.com/images/country/small/BV.png" data-posttip="ZIP/Post Code">Bouvet Island</option><option value="31" data-icon="https://img.newchic.com/images/country/small/IO.png" data-posttip="ZIP/Post Code">British Indian Ocean Territory</option><option value="32" data-icon="https://img.newchic.com/images/country/small/BN.png" data-posttip="ZIP/Post Code">Brunei Darussalam</option><option value="33" data-icon="https://img.newchic.com/images/country/small/BG.png" data-posttip="ZIP/Post Code">Bulgaria</option><option value="34" data-icon="https://img.newchic.com/images/country/small/BF.png" data-posttip="ZIP/Post Code">Burkina Faso</option><option value="35" data-icon="https://img.newchic.com/images/country/small/BI.png" data-posttip="ZIP/Post Code">Burundi</option><option value="36" data-icon="https://img.newchic.com/images/country/small/KH.png" data-posttip="ZIP/Post Code">Cambodia</option><option value="37" data-icon="https://img.newchic.com/images/country/small/CM.png" data-posttip="ZIP/Post Code">Cameroon</option><option value="39" data-icon="https://img.newchic.com/images/country/small/CV.png" data-posttip="ZIP/Post Code">Cape Verde</option><option value="40" data-icon="https://img.newchic.com/images/country/small/KY.png" data-posttip="ZIP/Post Code">Cayman Islands</option><option value="41" data-icon="https://img.newchic.com/images/country/small/CF.png" data-posttip="ZIP/Post Code">Central African Republic</option><option value="42" data-icon="https://img.newchic.com/images/country/small/TD.png" data-posttip="ZIP/Post Code">Chad</option><option value="43" data-icon="https://img.newchic.com/images/country/small/CL.png" data-posttip="ZIP/Post Code">Chile</option><option value="46" data-icon="https://img.newchic.com/images/country/small/CC.png" data-posttip="ZIP/Post Code">Cocos (Keeling) Islands</option><option value="47" data-icon="https://img.newchic.com/images/country/small/CO.png" data-posttip="ZIP/Post Code">Colombia</option><option value="48" data-icon="https://img.newchic.com/images/country/small/KM.png" data-posttip="ZIP/Post Code">Comoros</option><option value="49" data-icon="https://img.newchic.com/images/country/small/CG.png" data-posttip="ZIP/Post Code">Congo</option><option value="50" data-icon="https://img.newchic.com/images/country/small/CK.png" data-posttip="ZIP/Post Code">Cook Islands</option><option value="51" data-icon="https://img.newchic.com/images/country/small/CR.png" data-posttip="ZIP/Post Code">Costa Rica</option><option value="52" data-icon="https://img.newchic.com/images/country/small/CI.png" data-posttip="ZIP/Post Code">Cote D'Ivoire</option><option value="245" data-icon="https://img.newchic.com/images/country/small/HR.png" data-posttip="ZIP/Post Code">Croatia</option><option value="54" data-icon="https://img.newchic.com/images/country/small/CU.png" data-posttip="ZIP/Post Code">Cuba</option><option value="55" data-icon="https://img.newchic.com/images/country/small/CY.png" data-posttip="ZIP/Post Code">Cyprus</option><option value="56" data-icon="https://img.newchic.com/images/country/small/CZ.png" data-posttip="ZIP/Post Code">Czech Republic</option><option value="57" data-icon="https://img.newchic.com/images/country/small/DK.png" data-posttip="ZIP/Post Code">Denmark</option><option value="58" data-icon="https://img.newchic.com/images/country/small/DJ.png" data-posttip="ZIP/Post Code">Djibouti</option><option value="59" data-icon="https://img.newchic.com/images/country/small/DM.png" data-posttip="ZIP/Post Code">Dominica</option><option value="60" data-icon="https://img.newchic.com/images/country/small/DO.png" data-posttip="ZIP/Post Code">Dominican Republic</option><option value="61" data-icon="https://img.newchic.com/images/country/small/TP.png" data-posttip="ZIP/Post Code">East Timor</option><option value="62" data-icon="https://img.newchic.com/images/country/small/EC.png" data-posttip="ZIP/Post Code">Ecuador</option><option value="63" data-icon="https://img.newchic.com/images/country/small/EG.png" data-posttip="ZIP/Post Code">Egypt</option><option value="64" data-icon="https://img.newchic.com/images/country/small/SV.png" data-posttip="ZIP/Post Code">El Salvador</option><option value="65" data-icon="https://img.newchic.com/images/country/small/GQ.png" data-posttip="ZIP/Post Code">Equatorial Guinea</option><option value="66" data-icon="https://img.newchic.com/images/country/small/ER.png" data-posttip="ZIP/Post Code">Eritrea</option><option value="67" data-icon="https://img.newchic.com/images/country/small/EE.png" data-posttip="ZIP/Post Code">Estonia</option><option value="68" data-icon="https://img.newchic.com/images/country/small/ET.png" data-posttip="ZIP/Post Code">Ethiopia</option><option value="69" data-icon="https://img.newchic.com/images/country/small/FK.png" data-posttip="ZIP/Post Code">Falkland Islands (Malvinas)</option><option value="70" data-icon="https://img.newchic.com/images/country/small/FO.png" data-posttip="ZIP/Post Code">Faroe Islands</option><option value="27" data-icon="https://img.newchic.com/images/country/small/BA.png" data-posttip="ZIP/Post Code">Federation of Bosnia and Herzegovina</option><option value="71" data-icon="https://img.newchic.com/images/country/small/FJ.png" data-posttip="ZIP/Post Code">Fiji</option><option value="72" data-icon="https://img.newchic.com/images/country/small/FI.png" data-posttip="ZIP/Post Code">Finland</option><option value="75" data-icon="https://img.newchic.com/images/country/small/GF.png" data-posttip="ZIP/Post Code">French Guiana</option><option value="76" data-icon="https://img.newchic.com/images/country/small/PF.png" data-posttip="ZIP/Post Code">French Polynesia</option><option value="77" data-icon="https://img.newchic.com/images/country/small/TF.png" data-posttip="ZIP/Post Code">French Southern Territories</option><option value="78" data-icon="https://img.newchic.com/images/country/small/GA.png" data-posttip="ZIP/Post Code">Gabon</option><option value="79" data-icon="https://img.newchic.com/images/country/small/GM.png" data-posttip="ZIP/Post Code">Gambia</option><option value="80" data-icon="https://img.newchic.com/images/country/small/GE.png" data-posttip="ZIP/Post Code">Georgia</option><option value="82" data-icon="https://img.newchic.com/images/country/small/GH.png" data-posttip="ZIP/Post Code">Ghana</option><option value="83" data-icon="https://img.newchic.com/images/country/small/GI.png" data-posttip="ZIP/Post Code">Gibraltar</option><option value="84" data-icon="https://img.newchic.com/images/country/small/GR.png" data-posttip="ZIP/Post Code">Greece</option><option value="85" data-icon="https://img.newchic.com/images/country/small/GL.png" data-posttip="ZIP/Post Code">Greenland</option><option value="86" data-icon="https://img.newchic.com/images/country/small/GD.png" data-posttip="ZIP/Post Code">Grenada</option><option value="87" data-icon="https://img.newchic.com/images/country/small/GP.png" data-posttip="ZIP/Post Code">Guadeloupe</option><option value="88" data-icon="https://img.newchic.com/images/country/small/GU.png" data-posttip="ZIP/Post Code">Guam</option><option value="89" data-icon="https://img.newchic.com/images/country/small/GT.png" data-posttip="ZIP/Post Code">Guatemala</option><option value="250" data-icon="https://img.newchic.com/images/country/small/GG.png" data-posttip="ZIP/Post Code">Guernsey</option><option value="90" data-icon="https://img.newchic.com/images/country/small/GN.png" data-posttip="ZIP/Post Code">Guinea</option><option value="91" data-icon="https://img.newchic.com/images/country/small/GW.png" data-posttip="ZIP/Post Code">Guinea-bissau</option><option value="92" data-icon="https://img.newchic.com/images/country/small/GY.png" data-posttip="ZIP/Post Code">Guyana</option><option value="93" data-icon="https://img.newchic.com/images/country/small/HT.png" data-posttip="ZIP/Post Code">Haiti</option><option value="94" data-icon="https://img.newchic.com/images/country/small/HM.png" data-posttip="ZIP/Post Code">Heard and Mc Donald Islands</option><option value="95" data-icon="https://img.newchic.com/images/country/small/HN.png" data-posttip="ZIP/Post Code">Honduras</option><option value="96" data-icon="https://img.newchic.com/images/country/small/HK.png" data-posttip="ZIP/Post Code">Hong Kong</option><option value="97" data-icon="https://img.newchic.com/images/country/small/HU.png" data-posttip="ZIP/Post Code">Hungary</option><option value="98" data-icon="https://img.newchic.com/images/country/small/IS.png" data-posttip="ZIP/Post Code">Iceland</option><option value="100" data-icon="https://img.newchic.com/images/country/small/ID.png" data-posttip="ZIP/Post Code">Indonesia</option><option value="101" data-icon="https://img.newchic.com/images/country/small/IR.png" data-posttip="ZIP/Post Code">Iran (Islamic Republic of)</option><option value="102" data-icon="https://img.newchic.com/images/country/small/IQ.png" data-posttip="ZIP/Post Code">Iraq</option><option value="104" data-icon="https://img.newchic.com/images/country/small/IL.png" data-posttip="ZIP/Post Code">Israel</option><option value="106" data-icon="https://img.newchic.com/images/country/small/JM.png" data-posttip="ZIP/Post Code">Jamaica</option><option value="107" data-icon="https://img.newchic.com/images/country/small/JP.png" data-posttip="ZIP/Post Code">Japan</option><option value="253" data-icon="https://img.newchic.com/images/country/small/JE.png" data-posttip="ZIP/Post Code">Jersey Island</option><option value="108" data-icon="https://img.newchic.com/images/country/small/JO.png" data-posttip="ZIP/Post Code">Jordan</option><option value="109" data-icon="https://img.newchic.com/images/country/small/KZ.png" data-posttip="ZIP/Post Code">Kazakhstan</option><option value="110" data-icon="https://img.newchic.com/images/country/small/KE.png" data-posttip="ZIP/Post Code">Kenya</option><option value="111" data-icon="https://img.newchic.com/images/country/small/KI.png" data-posttip="ZIP/Post Code">Kiribati</option><option value="112" data-icon="https://img.newchic.com/images/country/small/KP.png" data-posttip="ZIP/Post Code">Korea, Democratic People's Republic of</option><option value="113" data-icon="https://img.newchic.com/images/country/small/KR.png" data-posttip="ZIP/Post Code">Korea, Republic of</option><option value="114" data-icon="https://img.newchic.com/images/country/small/KW.png" data-posttip="ZIP/Post Code">Kuwait</option><option value="115" data-icon="https://img.newchic.com/images/country/small/KG.png" data-posttip="ZIP/Post Code">Kyrgyzstan</option><option value="116" data-icon="https://img.newchic.com/images/country/small/LA.png" data-posttip="ZIP/Post Code">Lao People's Democratic Republic</option><option value="117" data-icon="https://img.newchic.com/images/country/small/LV.png" data-posttip="ZIP/Post Code">Latvia</option><option value="118" data-icon="https://img.newchic.com/images/country/small/LB.png" data-posttip="ZIP/Post Code">Lebanon</option><option value="119" data-icon="https://img.newchic.com/images/country/small/LS.png" data-posttip="ZIP/Post Code">Lesotho</option><option value="120" data-icon="https://img.newchic.com/images/country/small/LR.png" data-posttip="ZIP/Post Code">Liberia</option><option value="121" data-icon="https://img.newchic.com/images/country/small/LY.png" data-posttip="ZIP/Post Code">Libyan Arab Jamahiriya</option><option value="122" data-icon="https://img.newchic.com/images/country/small/LI.png" data-posttip="ZIP/Post Code">Liechtenstein</option><option value="123" data-icon="https://img.newchic.com/images/country/small/LT.png" data-posttip="ZIP/Post Code">Lithuania</option><option value="124" data-icon="https://img.newchic.com/images/country/small/LU.png" data-posttip="ZIP/Post Code">Luxembourg</option><option value="125" data-icon="https://img.newchic.com/images/country/small/MO.png" data-posttip="ZIP/Post Code">Macau</option><option value="241" data-icon="https://img.newchic.com/images/country/small/MK.png" data-posttip="ZIP/Post Code">Macedonia</option><option value="127" data-icon="https://img.newchic.com/images/country/small/MG.png" data-posttip="ZIP/Post Code">Madagascar</option><option value="128" data-icon="https://img.newchic.com/images/country/small/MW.png" data-posttip="ZIP/Post Code">Malawi</option><option value="129" data-icon="https://img.newchic.com/images/country/small/MY.png" data-posttip="ZIP/Post Code">Malaysia</option><option value="130" data-icon="https://img.newchic.com/images/country/small/MV.png" data-posttip="ZIP/Post Code">Maldives</option><option value="131" data-icon="https://img.newchic.com/images/country/small/ML.png" data-posttip="ZIP/Post Code">Mali</option><option value="132" data-icon="https://img.newchic.com/images/country/small/MT.png" data-posttip="ZIP/Post Code">Malta</option><option value="133" data-icon="https://img.newchic.com/images/country/small/MH.png" data-posttip="ZIP/Post Code">Marshall Islands</option><option value="134" data-icon="https://img.newchic.com/images/country/small/MQ.png" data-posttip="ZIP/Post Code">Martinique</option><option value="135" data-icon="https://img.newchic.com/images/country/small/MR.png" data-posttip="ZIP/Post Code">Mauritania</option><option value="136" data-icon="https://img.newchic.com/images/country/small/MU.png" data-posttip="ZIP/Post Code">Mauritius</option><option value="137" data-icon="https://img.newchic.com/images/country/small/YT.png" data-posttip="ZIP/Post Code">Mayotte</option><option value="138" data-icon="https://img.newchic.com/images/country/small/MX.png" data-posttip="ZIP/Post Code">Mexico</option><option value="139" data-icon="https://img.newchic.com/images/country/small/FM.png" data-posttip="ZIP/Post Code">Micronesia, Federated States of</option><option value="140" data-icon="https://img.newchic.com/images/country/small/MD.png" data-posttip="ZIP/Post Code">Moldova, Republic of</option><option value="141" data-icon="https://img.newchic.com/images/country/small/MC.png" data-posttip="ZIP/Post Code">Monaco</option><option value="142" data-icon="https://img.newchic.com/images/country/small/MN.png" data-posttip="ZIP/Post Code">Mongolia</option><option value="243" data-icon="https://img.newchic.com/images/country/small/ME.png" data-posttip="ZIP/Post Code">Montenegro</option><option value="143" data-icon="https://img.newchic.com/images/country/small/MS.png" data-posttip="ZIP/Post Code">Montserrat</option><option value="144" data-icon="https://img.newchic.com/images/country/small/MA.png" data-posttip="ZIP/Post Code">Morocco</option><option value="145" data-icon="https://img.newchic.com/images/country/small/MZ.png" data-posttip="ZIP/Post Code">Mozambique</option><option value="146" data-icon="https://img.newchic.com/images/country/small/MM.png" data-posttip="ZIP/Post Code">Myanmar</option><option value="147" data-icon="https://img.newchic.com/images/country/small/NA.png" data-posttip="ZIP/Post Code">Namibia</option><option value="148" data-icon="https://img.newchic.com/images/country/small/NR.png" data-posttip="ZIP/Post Code">Nauru</option><option value="149" data-icon="https://img.newchic.com/images/country/small/NP.png" data-posttip="ZIP/Post Code">Nepal</option><option value="151" data-icon="https://img.newchic.com/images/country/small/AN.png" data-posttip="ZIP/Post Code">Netherlands Antilles</option><option value="152" data-icon="https://img.newchic.com/images/country/small/NC.png" data-posttip="ZIP/Post Code">New Caledonia</option><option value="153" data-icon="https://img.newchic.com/images/country/small/NZ.png" data-posttip="ZIP/Post Code">New Zealand</option><option value="154" data-icon="https://img.newchic.com/images/country/small/NI.png" data-posttip="ZIP/Post Code">Nicaragua</option><option value="155" data-icon="https://img.newchic.com/images/country/small/NE.png" data-posttip="ZIP/Post Code">Niger</option><option value="156" data-icon="https://img.newchic.com/images/country/small/NG.png" data-posttip="ZIP/Post Code">Nigeria</option><option value="157" data-icon="https://img.newchic.com/images/country/small/NU.png" data-posttip="ZIP/Post Code">Niue</option><option value="158" data-icon="https://img.newchic.com/images/country/small/NF.png" data-posttip="ZIP/Post Code">Norfolk Island</option><option value="159" data-icon="https://img.newchic.com/images/country/small/MP.png" data-posttip="ZIP/Post Code">Northern Mariana Islands</option><option value="160" data-icon="https://img.newchic.com/images/country/small/NO.png" data-posttip="ZIP/Post Code">Norway</option><option value="161" data-icon="https://img.newchic.com/images/country/small/OM.png" data-posttip="ZIP/Post Code">Oman</option><option value="162" data-icon="https://img.newchic.com/images/country/small/PK.png" data-posttip="ZIP/Post Code">Pakistan</option><option value="255" data-icon="https://img.newchic.com/images/country/small/PW.png" data-posttip="ZIP/Post Code">Palau</option><option value="164" data-icon="https://img.newchic.com/images/country/small/PA.png" data-posttip="ZIP/Post Code">Panama</option><option value="165" data-icon="https://img.newchic.com/images/country/small/PG.png" data-posttip="ZIP/Post Code">Papua New Guinea</option><option value="166" data-icon="https://img.newchic.com/images/country/small/PY.png" data-posttip="ZIP/Post Code">Paraguay</option><option value="167" data-icon="https://img.newchic.com/images/country/small/PE.png" data-posttip="ZIP/Post Code">Peru</option><option value="168" data-icon="https://img.newchic.com/images/country/small/PH.png" data-posttip="ZIP/Post Code">Philippines</option><option value="169" data-icon="https://img.newchic.com/images/country/small/PN.png" data-posttip="ZIP/Post Code">Pitcairn</option><option value="170" data-icon="https://img.newchic.com/images/country/small/PL.png" data-posttip="ZIP/Post Code">Poland</option><option value="171" data-icon="https://img.newchic.com/images/country/small/PT.png" data-posttip="ZIP/Post Code">Portugal</option><option value="172" data-icon="https://img.newchic.com/images/country/small/PR.png" data-posttip="ZIP/Post Code">Puerto Rico</option><option value="173" data-icon="https://img.newchic.com/images/country/small/QA.png" data-posttip="ZIP/Post Code">Qatar</option><option value="174" data-icon="https://img.newchic.com/images/country/small/RE.png" data-posttip="ZIP/Post Code">Reunion</option><option value="175" data-icon="https://img.newchic.com/images/country/small/RO.png" data-posttip="ZIP/Post Code">Romania</option><option value="177" data-icon="https://img.newchic.com/images/country/small/RW.png" data-posttip="ZIP/Post Code">Rwanda</option><option value="178" data-icon="https://img.newchic.com/images/country/small/KN.png" data-posttip="ZIP/Post Code">Saint Kitts and Nevis</option><option value="179" data-icon="https://img.newchic.com/images/country/small/LC.png" data-posttip="ZIP/Post Code">Saint Lucia</option><option value="254" data-icon="https://img.newchic.com/images/country/small/PM.png" data-posttip="ZIP/Post Code">Saint Pierre and Miquelon</option><option value="180" data-icon="https://img.newchic.com/images/country/small/VC.png" data-posttip="ZIP/Post Code">Saint Vincent and the Grenadines</option><option value="181" data-icon="https://img.newchic.com/images/country/small/WS.png" data-posttip="ZIP/Post Code">Samoa</option><option value="182" data-icon="https://img.newchic.com/images/country/small/SM.png" data-posttip="ZIP/Post Code">San Marino</option><option value="183" data-icon="https://img.newchic.com/images/country/small/ST.png" data-posttip="ZIP/Post Code">Sao Tome and Principe</option><option value="184" data-icon="https://img.newchic.com/images/country/small/SA.png" data-posttip="ZIP/Post Code">Saudi Arabia</option><option value="185" data-icon="https://img.newchic.com/images/country/small/SN.png" data-posttip="ZIP/Post Code">Senegal</option><option value="240" data-icon="https://img.newchic.com/images/country/small/RS.png" data-posttip="ZIP/Post Code">Serbia</option><option value="186" data-icon="https://img.newchic.com/images/country/small/SC.png" data-posttip="ZIP/Post Code">Seychelles</option><option value="187" data-icon="https://img.newchic.com/images/country/small/SL.png" data-posttip="ZIP/Post Code">Sierra Leone</option><option value="188" data-icon="https://img.newchic.com/images/country/small/SG.png" data-posttip="ZIP/Post Code">Singapore</option><option value="189" data-icon="https://img.newchic.com/images/country/small/SK.png" data-posttip="ZIP/Post Code">Slovakia (Slovak Republic)</option><option value="190" data-icon="https://img.newchic.com/images/country/small/SI.png" data-posttip="ZIP/Post Code">Slovenia</option><option value="191" data-icon="https://img.newchic.com/images/country/small/SB.png" data-posttip="ZIP/Post Code">Solomon Islands</option><option value="192" data-icon="https://img.newchic.com/images/country/small/SO.png" data-posttip="ZIP/Post Code">Somalia</option><option value="193" data-icon="https://img.newchic.com/images/country/small/ZA.png" data-posttip="ZIP/Post Code">South Africa</option><option value="194" data-icon="https://img.newchic.com/images/country/small/GS.png" data-posttip="ZIP/Post Code">South Georgia and the South Sandwich Islands</option><option value="196" data-icon="https://img.newchic.com/images/country/small/LK.png" data-posttip="ZIP/Post Code">Sri Lanka</option><option value="197" data-icon="https://img.newchic.com/images/country/small/SH.png" data-posttip="ZIP/Post Code">St. Helena</option><option value="198" data-icon="https://img.newchic.com/images/country/small/PM.png" data-posttip="ZIP/Post Code">St. Pierre and Miquelon</option><option value="199" data-icon="https://img.newchic.com/images/country/small/SD.png" data-posttip="ZIP/Post Code">Sudan</option><option value="200" data-icon="https://img.newchic.com/images/country/small/SR.png" data-posttip="ZIP/Post Code">Suriname</option><option value="201" data-icon="https://img.newchic.com/images/country/small/SJ.png" data-posttip="ZIP/Post Code">Svalbard and Jan Mayen Islands</option><option value="202" data-icon="https://img.newchic.com/images/country/small/SZ.png" data-posttip="ZIP/Post Code">Swaziland</option><option value="203" data-icon="https://img.newchic.com/images/country/small/SE.png" data-posttip="ZIP/Post Code">Sweden</option><option value="204" data-icon="https://img.newchic.com/images/country/small/CH.png" data-posttip="ZIP/Post Code">Switzerland</option><option value="205" data-icon="https://img.newchic.com/images/country/small/SY.png" data-posttip="ZIP/Post Code">Syrian Arab Republic</option><option value="206" data-icon="https://img.newchic.com/images/country/small/TW.png" data-posttip="ZIP/Post Code">Taiwan</option><option value="207" data-icon="https://img.newchic.com/images/country/small/TJ.png" data-posttip="ZIP/Post Code">Tajikistan</option><option value="208" data-icon="https://img.newchic.com/images/country/small/TZ.png" data-posttip="ZIP/Post Code">Tanzania, United Republic of</option><option value="209" data-icon="https://img.newchic.com/images/country/small/TH.png" data-posttip="ZIP/Post Code">Thailand</option><option value="210" data-icon="https://img.newchic.com/images/country/small/TG.png" data-posttip="ZIP/Post Code">Togo</option><option value="211" data-icon="https://img.newchic.com/images/country/small/TK.png" data-posttip="ZIP/Post Code">Tokelau</option><option value="212" data-icon="https://img.newchic.com/images/country/small/TO.png" data-posttip="ZIP/Post Code">Tonga</option><option value="213" data-icon="https://img.newchic.com/images/country/small/TT.png" data-posttip="ZIP/Post Code">Trinidad and Tobago</option><option value="214" data-icon="https://img.newchic.com/images/country/small/TN.png" data-posttip="ZIP/Post Code">Tunisia</option><option value="215" data-icon="https://img.newchic.com/images/country/small/TR.png" data-posttip="ZIP/Post Code">Turkey</option><option value="216" data-icon="https://img.newchic.com/images/country/small/TM.png" data-posttip="ZIP/Post Code">Turkmenistan</option><option value="217" data-icon="https://img.newchic.com/images/country/small/TC.png" data-posttip="ZIP/Post Code">Turks and Caicos Islands</option><option value="218" data-icon="https://img.newchic.com/images/country/small/TV.png" data-posttip="ZIP/Post Code">Tuvalu</option><option value="219" data-icon="https://img.newchic.com/images/country/small/UG.png" data-posttip="ZIP/Post Code">Uganda</option><option value="221" data-icon="https://img.newchic.com/images/country/small/AE.png" data-posttip="ZIP/Post Code">United Arab Emirates</option><option value="224" data-icon="https://img.newchic.com/images/country/small/UM.png" data-posttip="ZIP/Post Code">United States Minor Outlying Islands</option><option value="225" data-icon="https://img.newchic.com/images/country/small/UY.png" data-posttip="ZIP/Post Code">Uruguay</option><option value="226" data-icon="https://img.newchic.com/images/country/small/UZ.png" data-posttip="ZIP/Post Code">Uzbekistan</option><option value="227" data-icon="https://img.newchic.com/images/country/small/VU.png" data-posttip="ZIP/Post Code">Vanuatu</option><option value="228" data-icon="https://img.newchic.com/images/country/small/VA.png" data-posttip="ZIP/Post Code">Vatican City State (Holy See)</option><option value="229" data-icon="https://img.newchic.com/images/country/small/VE.png" data-posttip="ZIP/Post Code">Venezuela</option><option value="230" data-icon="https://img.newchic.com/images/country/small/VN.png" data-posttip="ZIP/Post Code">Viet Nam</option><option value="231" data-icon="https://img.newchic.com/images/country/small/VG.png" data-posttip="ZIP/Post Code">Virgin Islands (British)</option><option value="232" data-icon="https://img.newchic.com/images/country/small/VI.png" data-posttip="ZIP/Post Code">Virgin Islands (U.S.)</option><option value="233" data-icon="https://img.newchic.com/images/country/small/WF.png" data-posttip="ZIP/Post Code">Wallis and Futuna Islands</option><option value="234" data-icon="https://img.newchic.com/images/country/small/EH.png" data-posttip="ZIP/Post Code">Western Sahara</option><option value="237" data-icon="https://img.newchic.com/images/country/small/CD.png" data-posttip="ZIP/Post Code">Zaire</option><option value="238" data-icon="https://img.newchic.com/images/country/small/ZM.png" data-posttip="ZIP/Post Code">Zambia</option><option value="239" data-icon="https://img.newchic.com/images/country/small/ZW.png" data-posttip="ZIP/Post Code">Zimbabwe</option></select><div class="select-container select-container-default address-select" id="select-container-15179397771403556" style="min-width: 378px; width: 378px;">	<div class="selection">		<div class="select-selection select-selection-single">			<span class="select-selection-rendered" id="select-15179397771403556-container" title=""><span class="select-selection-placeholder">Select Country/Region</span></span>			<span class="select-selection-arrow select-selection-arrow-triangle">				<b></b>			</span>		</div>	</div></div>
			<input id="country_box" type="hidden" data-msg-required="Please Select Country/Region" data-link="country_name" value="">
			<input name="country_id" type="hidden" data-msg-required="Please Select Country/Region" data-link="country_id" id="country_id" value="">

			<!-- <span class="tips">Select Country/Region</span>
			<input name="Options_7" readonly="true" id="country_box" autocomplete="off" readonly="true"/>
			<i></i>
			<input name="country_id" type="hidden" value="" dataType="Require" require="true" id="country_id" msg="Please Select Country/Region"/>
			<b>*</b>
			<div class="select-container">
				<div class="search">
					<i class="icon icon-search"></i>
					<input type="text">
				</div>
				<ul id="country_ul"><li cid="223">United States</li><li cid="222">United Kingdom</li><li cid="38">Canada</li><li cid="195">Spain</li><li cid="13">Australia</li><li cid="176">Russian Federation</li><li cid="73">France</li><li cid="30">Brazil</li><li cid="105">Italy</li><li cid="81">Germany</li><li cid="150">Netherlands</li><li cid="220">Ukraine</li><li cid="10">Argentina</li><li cid="99">India</li><li cid="103">Ireland</li><li cid="1">Afghanistan</li><li cid="2">Albania</li><li cid="3">Algeria</li><li cid="4">American Samoa</li><li cid="5">Andorra</li><li cid="6">Angola</li><li cid="7">Anguilla</li><li cid="8">Antarctica</li><li cid="9">Antigua and Barbuda</li><li cid="11">Armenia</li><li cid="12">Aruba</li><li cid="14">Austria</li><li cid="15">Azerbaijan</li><li cid="16">Bahamas</li><li cid="17">Bahrain</li><li cid="18">Bangladesh</li><li cid="19">Barbados</li><li cid="20">Belarus</li><li cid="21">Belgium</li><li cid="22">Belize</li><li cid="23">Benin</li><li cid="24">Bermuda</li><li cid="25">Bhutan</li><li cid="26">Bolivia</li><li cid="28">Botswana</li><li cid="29">Bouvet Island</li><li cid="31">British Indian Ocean Territory</li><li cid="32">Brunei Darussalam</li><li cid="33">Bulgaria</li><li cid="34">Burkina Faso</li><li cid="35">Burundi</li><li cid="36">Cambodia</li><li cid="37">Cameroon</li><li cid="39">Cape Verde</li><li cid="40">Cayman Islands</li><li cid="41">Central African Republic</li><li cid="42">Chad</li><li cid="43">Chile</li><li cid="46">Cocos (Keeling) Islands</li><li cid="47">Colombia</li><li cid="48">Comoros</li><li cid="49">Congo</li><li cid="50">Cook Islands</li><li cid="51">Costa Rica</li><li cid="52">Cote D'Ivoire</li><li cid="245">Croatia</li><li cid="54">Cuba</li><li cid="55">Cyprus</li><li cid="56">Czech Republic</li><li cid="57">Denmark</li><li cid="58">Djibouti</li><li cid="59">Dominica</li><li cid="60">Dominican Republic</li><li cid="61">East Timor</li><li cid="62">Ecuador</li><li cid="63">Egypt</li><li cid="64">El Salvador</li><li cid="65">Equatorial Guinea</li><li cid="66">Eritrea</li><li cid="67">Estonia</li><li cid="68">Ethiopia</li><li cid="69">Falkland Islands (Malvinas)</li><li cid="70">Faroe Islands</li><li cid="27">Federation of Bosnia and Herzegovina</li><li cid="71">Fiji</li><li cid="72">Finland</li><li cid="75">French Guiana</li><li cid="76">French Polynesia</li><li cid="77">French Southern Territories</li><li cid="78">Gabon</li><li cid="79">Gambia</li><li cid="80">Georgia</li><li cid="82">Ghana</li><li cid="83">Gibraltar</li><li cid="84">Greece</li><li cid="85">Greenland</li><li cid="86">Grenada</li><li cid="87">Guadeloupe</li><li cid="88">Guam</li><li cid="89">Guatemala</li><li cid="250">Guernsey</li><li cid="90">Guinea</li><li cid="91">Guinea-bissau</li><li cid="92">Guyana</li><li cid="93">Haiti</li><li cid="94">Heard and Mc Donald Islands</li><li cid="95">Honduras</li><li cid="96">Hong Kong</li><li cid="97">Hungary</li><li cid="98">Iceland</li><li cid="100">Indonesia</li><li cid="101">Iran (Islamic Republic of)</li><li cid="102">Iraq</li><li cid="104">Israel</li><li cid="106">Jamaica</li><li cid="107">Japan</li><li cid="253">Jersey Island</li><li cid="108">Jordan</li><li cid="109">Kazakhstan</li><li cid="110">Kenya</li><li cid="111">Kiribati</li><li cid="112">Korea, Democratic People's Republic of</li><li cid="113">Korea, Republic of</li><li cid="114">Kuwait</li><li cid="115">Kyrgyzstan</li><li cid="116">Lao People's Democratic Republic</li><li cid="117">Latvia</li><li cid="118">Lebanon</li><li cid="119">Lesotho</li><li cid="120">Liberia</li><li cid="121">Libyan Arab Jamahiriya</li><li cid="122">Liechtenstein</li><li cid="123">Lithuania</li><li cid="124">Luxembourg</li><li cid="125">Macau</li><li cid="241">Macedonia</li><li cid="127">Madagascar</li><li cid="128">Malawi</li><li cid="129">Malaysia</li><li cid="130">Maldives</li><li cid="131">Mali</li><li cid="132">Malta</li><li cid="133">Marshall Islands</li><li cid="134">Martinique</li><li cid="135">Mauritania</li><li cid="136">Mauritius</li><li cid="137">Mayotte</li><li cid="138">Mexico</li><li cid="139">Micronesia, Federated States of</li><li cid="140">Moldova, Republic of</li><li cid="141">Monaco</li><li cid="142">Mongolia</li><li cid="243">Montenegro</li><li cid="143">Montserrat</li><li cid="144">Morocco</li><li cid="145">Mozambique</li><li cid="146">Myanmar</li><li cid="147">Namibia</li><li cid="148">Nauru</li><li cid="149">Nepal</li><li cid="151">Netherlands Antilles</li><li cid="152">New Caledonia</li><li cid="153">New Zealand</li><li cid="154">Nicaragua</li><li cid="155">Niger</li><li cid="156">Nigeria</li><li cid="157">Niue</li><li cid="158">Norfolk Island</li><li cid="159">Northern Mariana Islands</li><li cid="160">Norway</li><li cid="161">Oman</li><li cid="162">Pakistan</li><li cid="255">Palau</li><li cid="164">Panama</li><li cid="165">Papua New Guinea</li><li cid="166">Paraguay</li><li cid="167">Peru</li><li cid="168">Philippines</li><li cid="169">Pitcairn</li><li cid="170">Poland</li><li cid="171">Portugal</li><li cid="172">Puerto Rico</li><li cid="173">Qatar</li><li cid="174">Reunion</li><li cid="175">Romania</li><li cid="177">Rwanda</li><li cid="178">Saint Kitts and Nevis</li><li cid="179">Saint Lucia</li><li cid="254">Saint Pierre and Miquelon</li><li cid="180">Saint Vincent and the Grenadines</li><li cid="181">Samoa</li><li cid="182">San Marino</li><li cid="183">Sao Tome and Principe</li><li cid="184">Saudi Arabia</li><li cid="185">Senegal</li><li cid="240">Serbia</li><li cid="186">Seychelles</li><li cid="187">Sierra Leone</li><li cid="188">Singapore</li><li cid="189">Slovakia (Slovak Republic)</li><li cid="190">Slovenia</li><li cid="191">Solomon Islands</li><li cid="192">Somalia</li><li cid="193">South Africa</li><li cid="194">South Georgia and the South Sandwich Islands</li><li cid="196">Sri Lanka</li><li cid="197">St. Helena</li><li cid="198">St. Pierre and Miquelon</li><li cid="199">Sudan</li><li cid="200">Suriname</li><li cid="201">Svalbard and Jan Mayen Islands</li><li cid="202">Swaziland</li><li cid="203">Sweden</li><li cid="204">Switzerland</li><li cid="205">Syrian Arab Republic</li><li cid="206">Taiwan</li><li cid="207">Tajikistan</li><li cid="208">Tanzania, United Republic of</li><li cid="209">Thailand</li><li cid="210">Togo</li><li cid="211">Tokelau</li><li cid="212">Tonga</li><li cid="213">Trinidad and Tobago</li><li cid="214">Tunisia</li><li cid="215">Turkey</li><li cid="216">Turkmenistan</li><li cid="217">Turks and Caicos Islands</li><li cid="218">Tuvalu</li><li cid="219">Uganda</li><li cid="221">United Arab Emirates</li><li cid="224">United States Minor Outlying Islands</li><li cid="225">Uruguay</li><li cid="226">Uzbekistan</li><li cid="227">Vanuatu</li><li cid="228">Vatican City State (Holy See)</li><li cid="229">Venezuela</li><li cid="230">Viet Nam</li><li cid="231">Virgin Islands (British)</li><li cid="232">Virgin Islands (U.S.)</li><li cid="233">Wallis and Futuna Islands</li><li cid="234">Western Sahara</li><li cid="237">Zaire</li><li cid="238">Zambia</li><li cid="239">Zimbabwe</li></ul><script type="jsv@"></script>
			</div>	 -->
		</div>
		<b>*</b>
	</div>

	<div class="inputbox" style="z-index:3">
		<s>State/province/region: </s>
		<div class="inline-block state-select-container-wrap">
			<select class="select-uniform" name="entry_zone_select" id="entry_zone_select" data-placeholder="Select your state" data-allow-clear="true" data-default="" data-skin="address-select" data-width="378" style="display: none;"><option value=""></option></select><div class="select-container select-container-default address-select" id="select-container-151793977715257836" style="min-width: 378px; width: 378px;">	<div class="selection">		<div class="select-selection select-selection-single">			<span class="select-selection-rendered" id="select-151793977715257836-container" title=""><span class="select-selection-placeholder">Select your state</span></span>			<span class="select-selection-arrow select-selection-arrow-triangle">				<b></b>			</span>		</div>	</div></div>
			<input name="zone_id" type="hidden" data-msg-required="Please select your state" data-link="zone_id" id="state_id" value="">
			<input name="zone_name" type="hidden" data-link="zone_name" id="zone_name" value="">

			<!-- <span class="tips">Select your state</span>
			<input name="Options_7" readonly="true" id="state_box"/>
			<i></i>
			<input name="state_id" type="hidden" value="" dataType="Require" require="true" msg="Please select your state"  id="state_id"/>
			<b>*</b>
			<div class="select-container">
				<div class="search">
					<i class="icon icon-search"></i>
					<input type="text">
				</div>
				<ul id="state_ul" style="min-width:376px;"></ul><script type="jsv@"></script>
			</div> -->
		</div>
		<b>*</b>
	</div>

	<div class="inputbox" style="z-index:1">
		<s>City: </s>
		<div class="inline-block">
			<div data-link="class[:country_id == 184 || country_id == 221 || country_id == 17 || country_id == 161 || country_id == 114 ? 'select-city-wrap' : 'select-city-wrap none']" class="select-city-wrap none">
				<select class="select-uniform" name="entry_city_select" id="entry_city_select" data-placeholder="City" data-allow-clear="true" data-default="" data-skin="address-select" data-width="378" style="display: none;"><option value=""></option></select><div class="select-container select-container-default address-select" id="select-container-151793977715597344" style="min-width: 378px; width: 378px;">	<div class="selection">		<div class="select-selection select-selection-single">			<span class="select-selection-rendered" id="select-151793977715597344-container" title=""><span class="select-selection-placeholder">City</span></span>			<span class="select-selection-arrow select-selection-arrow-triangle">				<b></b>			</span>		</div>	</div></div>
			</div>
			<div data-link="class[:country_id == 184 || country_id == 221 || country_id == 17 || country_id == 161 || country_id == 114 ? 'input-city-wrap none' : 'input-city-wrap']" class="input-city-wrap">
				<input name="city" id="entry_city" data-link="city" data-msg-required="Please enter your city name" datatype="text" require="true" autocomplete="off" placeholder="City">
			</div>
			<input type="hidden" name="city_id" id="entry_city_id" data-link="city_id" value="">
		</div>
		<b>*</b>
		<!-- <div class="inline-block city-select-container-wrap">
			<div class="input-text-wrap">
				<span class="tips">City</span>
				<input name="Options_7" msg="Please enter your city name" dataType="Require" require="true" autocomplete="off" id="city_box"/>
				<i></i>
			</div>
			<div class="input-select-wrap">
				<input name="state_id" type="hidden" value="" dataType="Require" require="true" msg="Please enter your city name"  id="city_id"/>
				<b>*</b>
				<div class="select-container">
					<div class="search">
						<i class="icon icon-search"></i>
						<input type="text">
					</div>
					<ul id="city_ul" style="min-width:376px;"></ul><script type="jsv@"></script>
				</div>
			</div>
		</div> -->

	</div>
	<!--<div class="inputbox">
		<s>City: </s>
		<span class="tips">City</span>
		<input name="Options_7" msg="Please enter your city name" dataType="Require" require="true" autocomplete="off" id="address_city"/>
		<b>*</b>
		<div class="hit_msg error" id="city_error"></div>
	</div>-->
	<div class="inputbox">
		<s>Address: </s>
		<input name="address_one" data-msg-required="Please enter your shipping address" placeholder="Address" autocomplete="off" id="address_one" data-link="address">
		<b>*</b>
	</div>
	<div class="inputbox">
		<s>Address 2: </s>
		<input name="address_two" msg="text" autocomplete="off" id="address_two" data-link="adddress2" placeholder="Address 2">
		<span class="error"></span>
	</div>
	<div class="inputbox">
		<s>ZIP/postal code: </s>
		<input name="postcode" data-msg-required="Please enter your ZIP/postal code" data-msg-length="You can write a maximum of 10 characters." autocomplete="off" id="postcode" data-link="postcode" placeholder="ZIP/postal code">
		<b>*</b>
	</div>
	<div class="checkbox">
		<span class="check_on" id="setDefault"></span>
		<b>Set this as your default shipping address</b>
	</div>
	<div class="btn">
	<input type="hidden" name="addressKey" id="addressKey" data-link="addressKey" value="">
	<input type="hidden" name="address_id" id="address_id" data-link="address_id" value="">
		<span class="submit">Save</span>
		<span class="cancel">Cancel</span>
	</div>
</form>
<script type="jsv/1_"></script></div>
		</div>
		

				

		<div class="cart_box order_data_box order-left">
			<div class="cart_left">
					<div class="checkout_address">
						
						<div class="checkout_address_list" style="max-height: 190px; display: none;">
						   						</div>		
						
						
						<div class="show_add_btn" style="display:none;">
							<a href="javascript:" class="show_all_address" onclick="set_checkout_ga('all-shipping-addresses')">All Shipping Addresses <span></span></a>
							<a href="javascript:" class="hide_address" onclick="set_checkout_ga('hide')">Hide <span></span></a>
						</div>
						
					</div>
					<span class="add_address_txt" onclick="set_checkout_ga('add-new-address')">+Add New Address</span>
			</div>
			<form method="post" action="https://www.newchic.com/index.php?com=shopcart" id="submitProceedCheckout">
			<div class="cart_right">
				<div class="cart_right_box">
					<div class="cart_title">
						<i class="cart_icon payment_icon"></i>
						<h4>Payment Method:</h4>
					</div>
					<!--<ul class="payment_list">
						<li>
							<label>
								<input type="radio" name="payCode" value="paypal" class="paymentselect" checked="checked">
								<input type="hidden" name="t" value="checkoutSubmit">
								<input type="hidden" value="0" id="needPhone">
								<input type="hidden" value="" id="phone" name="phone">
								<input type="hidden" value="" id="shippingAddress" name="shippingAddress">
								<input type="hidden" value="0" id="is_query" name="is_query">
								<i></i>
							</label>
						</li>
					</ul>-->
					<div class="payment_list" style="margin-bottom: 50px;">
						
<!--<style>
	.order_data_box .cart_right .payment_list .icon-idel{
		background: url(/templates/default/images/ideal-pc.jpg) no-repeat 20px center;
		display: block;
		height: 60px;
		line-height: 60px;
	}
	.order_data_box .cart_right .payment_list .icon-idel span{
		padding-left:52px;
	}
	.order_data_box .cart_right .payment_list .icon-idel .radio span{
		padding-left: 0;
	}
</style>
-->























<label id="globebill">
	<span class="ocean">
		<div class="radio"><span class="checked"><input type="radio" payment_method="collect_global" value="collect_global" name="payCode" class="payCode" checked="checked"></span></div>
	</span>
</label>





<!--土耳其不能使用pp-->
<label><span class="paypal">
<div class="radio"><span><input type="radio" name="payCode" value="paypal" payment_method="paypal" class="payCode" id="payCk" task="checkoutSubmit"></span></div>
<!-- <u class="pay_method_tips">?</u> -->
</span>
<input type="hidden" name="t" value="checkoutSubmit" id="task">
<!-- <input type="hidden" value="" id="shippingAddress" name="shippingAddress"> -->
<input type="hidden" value="0" id="is_query" name="is_query">
</label>


					</div>

				 	<div class="all_shipment_list">
					<div class="cart_title">
	<i class="cart_icon shipping_icon"></i>
	<h4>
		Shipping Methods:
		<a href="javascript:;" class="icon-tips" data-toggle="tooltip" data-placement="right" data-original-title="Note: When an order is placed, the products will be packaged before delivery. The average processing time is within 3 days, but it varies by product and the stock status. For some products, the processing time may be up to 5 business days. Once processed, the order is handed over to our partners for delivery."></a>
	</h4>
</div>
<dl class="shipping_way">
		 
					<dd>
																				<div class="radio"><span class="checked"><input type="radio" name="shipping_radio" code="hkairmail_hkairmail" onchange="$.selectShipment(this);" checked="" phone="0"></span></div>
				<strong><span class="shipping-name">Flat Shipping</span><span class="order_tooltip" data-language-id="LS_WEB_PAY_VOC6,LS_WEB_PAY_VOC7">Shipping Time: 7-25 business days</span></strong>
				<em class="price" oriprice1="71.88">₪257.04</em>
																			</dd>
			 
					<dd>
																								<div class="tracking">
					<div class="checker"><span class="checked"><input type="checkbox" class="xz" onchange="$.selectShipment(this);" value="airmail_airmail" code="airmail_airmail" checked="" id="reg_mail"></span></div>
					Tracking Number <span>+</span><span class="price" oriprice1="0">₪0.00</span>
				</div>
											</dd>
			 
					<dd>
																				<div class="radio"><span><input type="radio" name="shipping_radio" code="chinapost_chinapost" onchange="$.selectShipment(this);" phone="1"></span></div>
				<strong><span class="shipping-name">Express Mail Service</span><span class="order_tooltip" data-language-id="LS_WEB_PAY_VOC6,LS_WEB_PAY_VOC7">Shipping Time: 7-15 business days</span></strong>
				<em class="price" oriprice1="61.44">₪219.71</em>
																			</dd>
			 
					<dd>
																				<div class="radio"><span><input type="radio" name="shipping_radio" code="cndhl_cndhl" onchange="$.selectShipment(this);" phone="1"></span></div>
				<strong><span class="shipping-name">Expedited Shipping Service</span><span class="order_tooltip" data-language-id="LS_WEB_PAY_VOC6,LS_WEB_PAY_VOC7">Shipping Time: 5-8 business days</span></strong>
				<em class="price" oriprice1="71.02">₪253.97</em>
																			</dd>
					
	
</dl>
<span id="owpdwe" style="display:none;"></span>
<span id="sphone" status="0" style="display:none;"></span>

<!--<script>
$(function(){
	if($('#sphone').attr('status')==1){$('.telphone').show();}
	});
</script>-->
<!--<style type="text/css">
	.tooltip-inner {
		max-width: 600px;
		text-align: left;
	}
</style>-->

					</div>
					<input type="hidden" value="0" id="needPhone">
					<input type="hidden" value="" id="phone" name="iphone">
					
										<div class="freight-insurance-wrap ">
						<div class="cart_title">
							
							<h4>Shipping Insurance:</h4>
							<i class="icon icon-safety" style="display: inline-block; float:none;"></i>
						</div>
						<dl class="freight_insurance_list">
							<dd>
								<label>
									<div class="checker"><span><input type="checkbox" name="freight_insurance" class="proceed_insurance"></span></div>
									<strong>
										Add Shipping Insurance to your order
										<a href="javascript:;" class="icon icon-question" data-toggle="tooltip" data-placement="bottom" data-original-title="Shipping insurance offers premium protection and safety for your valuable items during international shipping. We’ll reship your parcel at no extra charge if it’s confirmed lost or damaged." data-skin="tooltip-freight_insurance"></a>
									</strong>
								</label>
								<em class="price" oriprice1="3.96">₪14.16</em>								
								<div class="freight-insurance-notice  none">
									<b>Notice:</b> Our processing time is not included in the shipping time. Once your order is placed, we gather the products and package them. The average processing time is 3 days, but it varies by product and the stock status. Once processed, the order is handed over to our partners for delivery.
								</div>
							</dd>
						</dl>	
					</div>

					
					
					<!--订单商品列表-->
					<div class="order_goods_list">
						<div class="goods_list_title">
							<h4>Order Review</h4>
						</div>
						<div class="goods_data_type">
							<ul>
								<li class="gt_item">SELECTED ITEM</li>
								<li class="gt_quantity">QUANTITY</li>
								<li class="gt_quantity">UNIT PRICE</li>
								<li class="gt_quantity">SUBTOTAL</li>
							</ul>
						</div>
						<div class="goods_list_box">
							<!--订单的商品列表项-->
															<div class="clear_1 goods_list_item">
									<div class="cell g_product">
										<a class="g_img" href="https://www.newchic.com/trench-coat-4970/p-1237082.html" title="Winter Fur Collar Wool Casual Trench Coat Single-breasted Slim Fit Jacket for Men">
											<img src="https://img2.newchic.com/thumb/view/oaupload/newchic/images/35/CA/5ad9c958-eff0-40ef-bfb7-117162c409fc.jpg" alt="Winter Fur Collar Wool Casual Trench Coat Single-breasted Slim Fit Jacket for Men">
										</a>
										<div class="g_title">
											<a href="https://www.newchic.com/trench-coat-4970/p-1237082.html">
												Winter Fur Collar Wool Casual Trench Coat Single-breasted Slim Fit Jacket for Men
											</a>
																						<div class="g_filter">
												<ul class="list-inline">
																											<li>Color: Black</li>
																											<li>Size: US L</li>
																									</ul>
												
											</div>
												
										</div>
									</div>
									<div class="cell g_quantity">2</div>
									<div class="cell g_quantity">
										<span class="new_price price" oriprice1="95.52">₪341.58</span>
										<span class="old_price price" oriprice1="180.2">₪644.40</span>
									</div>
									<div class="cell g_quantity g_total_price">
										<span class="price" oriprice1="191.04">₪683.16</span>
									</div>
								</div>
													</div>	
					</div>
					<!--留言区域-->
					<div class="order_leave_box" style="top: 0px;">
						<div class="cart_title order-left">
							<h4>Order Summary</h4>
						</div>
						<div class="clear_1 leave_area">
														
							<div class="order_price-container">
								
	<div class="order_price ">
		<div class="subtotal_num">
			<span class="total-th">Subtotal :</span> <span class="price" oriprice1="191.04" id="checkout_subtotal">₪683.16</span>
		</div>
		
		<div class="insurance">
	 								<span class="total-th"><b class="discountText" data-type="0" style="font-weight: normal;">Checkout Discount : </b></span><span class="discountTr price" oriprice1="10" id="discountPrice">-₪35.76</span>
						</div>
	
						<div class="price">
			<span class="total-th">Shipping fees</span><span class="price" oriprice1="71.88" id="checkout_shiptotal">₪257.04</span>
		</div>
				
				
		<div class="price" id="checkout_insurance" style="display:none;">
			<span class="total-th">Insurance:</span><span class="price" oriprice1="3.96">₪14.16</span>
		</div>

		<div class="grand">
			<span class="total-th">TOTAL</span><span class="price" oriprice1="252.92" id="checkout_grandtotal">₪904.44</span>
		</div>
		
	</div>
		<div class="payment_btn_place checkout_bnt">
		<a href="javascript:" class="paypal">Place Your Order</a>
	</div>
								</div>
							<div class="margin-top-20 user-terms-container ">
									<label>
										<div class="checker"><span class="checked"><input type="checkbox" name="" checked="" data-toggle="" data-placement="bottom-right" onclick="set_terms_conditions_ga('Checkbox')" data-original-title="You need to agree to Terms and Conditions before placing your order." data-skin="tooltip-freight_insurance"></span></div>
										 I accept the <a class="cond_lts_link" href="javascript:void(0);" onclick="set_terms_conditions_ga('Terms and Conditions')">Terms and Conditions
										<img src="//static.newchic.com/default/images/cond_tip_03.png" style="vertical-align: middle;"></a>									</label>
									<div class="cond_content_lst hidden">
										<h1><strong>Terms &amp; Conditions</strong></h1>
										<p>Welcome to Newchic.com! This site “Newchic.com” is owned by Newchic Company Limited(HK Entity). By using this website and/or placing an order, you agree to be bound by the terms and conditions set out below. No prior notice for amendment to the terms, the amendment will be applied to orders thereafter. Upon confirmation of your orders, we will not be able to make any changes.</p>
										<strong>Order Acceptance</strong>
										<p>Please note that there may be certain orders that we are unable to accept and must cancel. Both parties agree that, following order dispatch, transportation is the sole responsibility of the third-party logistics company. During this stage, full ownership of the product(s) belongs to the buyer; all associated liability and risks during transportation shall be borne by the buyer.</p>
										<strong>Shipping Methods and Delivery Time</strong>
										<p>
											Choose your preferred shipping method on the order confirmation page during the checkout process.
											<br>
											*Important Notes: Total Delivery Time = Processing Time + Shipping Time
											<br>
											Processing time 1-2 business days normally
											<br>
											Shipping time 2-25 business days
											<br>
											Newchic.com can ship from different warehouses. For orders with more than item, we may split your order into several packages according to stock levels at our own discretion.
										    
										</p>
										<strong>Return &amp; Refund</strong>
										<p>
											You can return the item(s) within 14 days after delivery and ask for a full refund. If you receive damaged item(s) or if their size /color does not match with what you ordered, we will issue a full refund or we will send you a new product for free. Please contact us to make a claim. After receiving your claim we will normally respond within 24 hours.
											<br>
											If you want to refund your order with reasonable reason and contact with us within 14 Days (After arrival), after auditing your order, we will refund according to your situation. The refund expected time is based on your payment method.
										</p>
										<strong>Pricing in Different Currencies</strong>
										<p>Pricing of products sold by newchic.com is based upon figures calculated in U.S. Dollars (US$). Prices displayed in other currencies are converted from U.S. Dollars according to the most up to date conversion rates.denominations of currency on the Site, other than on the individual product page, may not be the most current. Areas of the Site where non-U.S. denominations of currency might be inaccurate include, but are not limited to, promotional banners, promotional pages, and information on product category pages. The price displayed on an individual product page, regardless of currency denomination, is the current price you are liable to pay to newchic.com, excluding shipping.</p>
									    <strong>Reviews and Comments</strong>
										<p>
											Except otherwise provided elsewhere in this Agreement or on the site, anything that you submit or post to newchic.com, including, without limitation, ideas, know-how, techniques, questions, reviews, comments, and suggestions (collectively, "Submissions") will be treated as non-confidential and nonproprietary, and by submitting or posting, you agree to irrevocably license the entry and all IP rights related thereto (excluding the moral rights such as authorship right) to newchic.com without charge and newchic.com shall have the royalty-free.You shall not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead newchic.com or third parties as to the origin of any Submissions or Content. Newchic.com may, but shall not be obligated to remove or edit any Submissions (including comments or reviews) for any reason.
											<br>
											All text, graphics, photographs or other images, button icons, audio clips, logos, slogans, trade names or word software and other contents on the website of newchic.com (collectively, "Content"), belongs exclusively to newchic.com or its appropriate content suppliers. All rights not expressly granted are reserved by newchic.com. Violators will be prosecuted to the full extent of the law.
										</p>
										<strong>Links</strong>
										<p>This site may contain links to other sites on the Internet that are owned and operated by third parties. You acknowledge that newchic.com is not responsible for the operation of or content located on or through any such site.</p>
									</div>
								</div>
						</div>
					</div>
					
				</div>
			</div>
			</form>
			<input type="hidden" value="" id="hasUsedGift">
		</div>
	</div>
</div>
</template>

<script>
import MoltinService from '../services/moltin.js'

export default {
  name: 'PlaceOrder',
  created () {
        $(function(){
	if($('#sphone').attr('status')==1){$('.telphone').show();}
	});
  },
  data () {
    return {
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .order_data_box .cart_right .payment_list .icon-idel{
		background: url(/templates/default/images/ideal-pc.jpg) no-repeat 20px center;
		display: block;
		height: 60px;
		line-height: 60px;
	}
	.order_data_box .cart_right .payment_list .icon-idel span{
		padding-left:52px;
	}
	.order_data_box .cart_right .payment_list .icon-idel .radio span{
		padding-left: 0;
	}
    .tooltip-inner {
		max-width: 600px;
		text-align: left;
	}
</style>
