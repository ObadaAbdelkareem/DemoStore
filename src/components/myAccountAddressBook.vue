<template>
  <div>
      <div class="order_form_title">
				<h3>Address Book</h3>
			</div>
            <div class="checkout_address">
					<ul class="title">
						<li><a href="javascript:void(0);" class="link" id="add">Add a new shipping address</a></li>
					</ul>
										<div class="no_address" style="display: none;">
						You currently have no default shipping addresses. Please click here to add a new one
					</div>
										<div class="checkout_address_add" style="">
						<i class="close"></i>
						<form id="addressForm">
							
				<div class="inputbox_group">
					<s>Your name: </s>	
					<div class="inputbox input-text-box">
						<div class="text" hidefocus="true" style="opacity: 0;"></div>
						<input name="last_name" id="entry_lastname" value="" msg="Last name must be at least 2 characters" datatype="Name" require="true" autocomplete="off" placeholder="Last name" style="opacity: 1;">
					</div>
					<div class="inputbox input-text-box">
						<div class="text" hidefocus="true"></div>
						<input name="first_name" id="entry_firstname" value="" msg="Please enter your name" datatype="Name" require="true" autocomplete="off" placeholder="First name">
						<b>*</b>
					</div>
				</div>
				<div class="inputbox selectbox country-wrap" style="z-index:2">
					<s>Country/region: </s>
					<div class="inline-block select-container-wrap">
						<select class="select-uniform" name="country_select" id="country_select" data-placeholder="Select Country/Region" data-allow-clear="true" data-msg="Please Select Country/Region" data-skin="address-select" data-option-icon="true" data-width="378" style="display: none;"> 
							<option value=""></option>
															<option value="223" data-icon="https://img.newchic.com/images/country/small/US.png" data-posttip="Example:12345-6789">United States</option>			
															<option value="222" data-icon="https://img.newchic.com/images/country/small/GB.png" data-posttip="ZIP/Post Code">United Kingdom</option>			
															<option value="38" data-icon="https://img.newchic.com/images/country/small/CA.png" data-posttip="Example:A1B 2C3">Canada</option>			
															<option value="195" data-icon="https://img.newchic.com/images/country/small/ES.png" data-posttip="ZIP/Post Code">Spain</option>			
															<option value="13" data-icon="https://img.newchic.com/images/country/small/AU.png" data-posttip="ZIP/Post Code">Australia</option>			
															<option value="176" data-icon="https://img.newchic.com/images/country/small/RU.png" data-posttip="ZIP/Post Code">Russian Federation</option>			
															<option value="73" data-icon="https://img.newchic.com/images/country/small/FR.png" data-posttip="ZIP/Post Code">France</option>			
															<option value="30" data-icon="https://img.newchic.com/images/country/small/BR.png" data-posttip="ZIP/Post Code">Brazil</option>			
															<option value="105" data-icon="https://img.newchic.com/images/country/small/IT.png" data-posttip="ZIP/Post Code">Italy</option>			
															<option value="81" data-icon="https://img.newchic.com/images/country/small/DE.png" data-posttip="ZIP/Post Code">Germany</option>			
															<option value="150" data-icon="https://img.newchic.com/images/country/small/NL.png" data-posttip="ZIP/Post Code">Netherlands</option>			
															<option value="220" data-icon="https://img.newchic.com/images/country/small/UA.png" data-posttip="ZIP/Post Code">Ukraine</option>			
															<option value="10" data-icon="https://img.newchic.com/images/country/small/AR.png" data-posttip="ZIP/Post Code">Argentina</option>			
															<option value="99" data-icon="https://img.newchic.com/images/country/small/IN.png" data-posttip="ZIP/Post Code">India</option>			
															<option value="103" data-icon="https://img.newchic.com/images/country/small/IE.png" data-posttip="ZIP/Post Code">Ireland</option>			
															<option value="1" data-icon="https://img.newchic.com/images/country/small/AF.png" data-posttip="ZIP/Post Code">Afghanistan</option>			
															<option value="2" data-icon="https://img.newchic.com/images/country/small/AL.png" data-posttip="ZIP/Post Code">Albania</option>			
															<option value="3" data-icon="https://img.newchic.com/images/country/small/DZ.png" data-posttip="ZIP/Post Code">Algeria</option>			
															<option value="4" data-icon="https://img.newchic.com/images/country/small/AS.png" data-posttip="ZIP/Post Code">American Samoa</option>			
															<option value="5" data-icon="https://img.newchic.com/images/country/small/AD.png" data-posttip="ZIP/Post Code">Andorra</option>			
															<option value="6" data-icon="https://img.newchic.com/images/country/small/AO.png" data-posttip="ZIP/Post Code">Angola</option>			
															<option value="7" data-icon="https://img.newchic.com/images/country/small/AI.png" data-posttip="ZIP/Post Code">Anguilla</option>			
															<option value="8" data-icon="https://img.newchic.com/images/country/small/AQ.png" data-posttip="ZIP/Post Code">Antarctica</option>			
															<option value="9" data-icon="https://img.newchic.com/images/country/small/AG.png" data-posttip="ZIP/Post Code">Antigua and Barbuda</option>			
															<option value="11" data-icon="https://img.newchic.com/images/country/small/AM.png" data-posttip="ZIP/Post Code">Armenia</option>			
															<option value="12" data-icon="https://img.newchic.com/images/country/small/AW.png" data-posttip="ZIP/Post Code">Aruba</option>			
															<option value="14" data-icon="https://img.newchic.com/images/country/small/AT.png" data-posttip="ZIP/Post Code">Austria</option>			
															<option value="15" data-icon="https://img.newchic.com/images/country/small/AZ.png" data-posttip="ZIP/Post Code">Azerbaijan</option>			
															<option value="16" data-icon="https://img.newchic.com/images/country/small/BS.png" data-posttip="ZIP/Post Code">Bahamas</option>			
															<option value="17" data-icon="https://img.newchic.com/images/country/small/BH.png" data-posttip="ZIP/Post Code">Bahrain</option>			
															<option value="18" data-icon="https://img.newchic.com/images/country/small/BD.png" data-posttip="ZIP/Post Code">Bangladesh</option>			
															<option value="19" data-icon="https://img.newchic.com/images/country/small/BB.png" data-posttip="ZIP/Post Code">Barbados</option>			
															<option value="20" data-icon="https://img.newchic.com/images/country/small/BY.png" data-posttip="ZIP/Post Code">Belarus</option>			
															<option value="21" data-icon="https://img.newchic.com/images/country/small/BE.png" data-posttip="ZIP/Post Code">Belgium</option>			
															<option value="22" data-icon="https://img.newchic.com/images/country/small/BZ.png" data-posttip="ZIP/Post Code">Belize</option>			
															<option value="23" data-icon="https://img.newchic.com/images/country/small/BJ.png" data-posttip="ZIP/Post Code">Benin</option>			
															<option value="24" data-icon="https://img.newchic.com/images/country/small/BM.png" data-posttip="ZIP/Post Code">Bermuda</option>			
															<option value="25" data-icon="https://img.newchic.com/images/country/small/BT.png" data-posttip="ZIP/Post Code">Bhutan</option>			
															<option value="26" data-icon="https://img.newchic.com/images/country/small/BO.png" data-posttip="ZIP/Post Code">Bolivia</option>			
															<option value="28" data-icon="https://img.newchic.com/images/country/small/BW.png" data-posttip="ZIP/Post Code">Botswana</option>			
															<option value="29" data-icon="https://img.newchic.com/images/country/small/BV.png" data-posttip="ZIP/Post Code">Bouvet Island</option>			
															<option value="31" data-icon="https://img.newchic.com/images/country/small/IO.png" data-posttip="ZIP/Post Code">British Indian Ocean Territory</option>			
															<option value="32" data-icon="https://img.newchic.com/images/country/small/BN.png" data-posttip="ZIP/Post Code">Brunei Darussalam</option>			
															<option value="33" data-icon="https://img.newchic.com/images/country/small/BG.png" data-posttip="ZIP/Post Code">Bulgaria</option>			
															<option value="34" data-icon="https://img.newchic.com/images/country/small/BF.png" data-posttip="ZIP/Post Code">Burkina Faso</option>			
															<option value="35" data-icon="https://img.newchic.com/images/country/small/BI.png" data-posttip="ZIP/Post Code">Burundi</option>			
															<option value="36" data-icon="https://img.newchic.com/images/country/small/KH.png" data-posttip="ZIP/Post Code">Cambodia</option>			
															<option value="37" data-icon="https://img.newchic.com/images/country/small/CM.png" data-posttip="ZIP/Post Code">Cameroon</option>			
															<option value="39" data-icon="https://img.newchic.com/images/country/small/CV.png" data-posttip="ZIP/Post Code">Cape Verde</option>			
															<option value="40" data-icon="https://img.newchic.com/images/country/small/KY.png" data-posttip="ZIP/Post Code">Cayman Islands</option>			
															<option value="41" data-icon="https://img.newchic.com/images/country/small/CF.png" data-posttip="ZIP/Post Code">Central African Republic</option>			
															<option value="42" data-icon="https://img.newchic.com/images/country/small/TD.png" data-posttip="ZIP/Post Code">Chad</option>			
															<option value="43" data-icon="https://img.newchic.com/images/country/small/CL.png" data-posttip="ZIP/Post Code">Chile</option>			
															<option value="46" data-icon="https://img.newchic.com/images/country/small/CC.png" data-posttip="ZIP/Post Code">Cocos (Keeling) Islands</option>			
															<option value="47" data-icon="https://img.newchic.com/images/country/small/CO.png" data-posttip="ZIP/Post Code">Colombia</option>			
															<option value="48" data-icon="https://img.newchic.com/images/country/small/KM.png" data-posttip="ZIP/Post Code">Comoros</option>			
															<option value="50" data-icon="https://img.newchic.com/images/country/small/CK.png" data-posttip="ZIP/Post Code">Cook Islands</option>			
															<option value="51" data-icon="https://img.newchic.com/images/country/small/CR.png" data-posttip="ZIP/Post Code">Costa Rica</option>			
															<option value="52" data-icon="https://img.newchic.com/images/country/small/CI.png" data-posttip="ZIP/Post Code">Cote D'Ivoire</option>			
															<option value="245" data-icon="https://img.newchic.com/images/country/small/HR.png" data-posttip="ZIP/Post Code">Croatia</option>			
															<option value="54" data-icon="https://img.newchic.com/images/country/small/CU.png" data-posttip="ZIP/Post Code">Cuba</option>			
															<option value="55" data-icon="https://img.newchic.com/images/country/small/CY.png" data-posttip="ZIP/Post Code">Cyprus</option>			
															<option value="56" data-icon="https://img.newchic.com/images/country/small/CZ.png" data-posttip="ZIP/Post Code">Czech Republic</option>			
															<option value="237" data-icon="https://img.newchic.com/images/country/small/CD.png" data-posttip="ZIP/Post Code">Democratic Republic of the Congo</option>			
															<option value="57" data-icon="https://img.newchic.com/images/country/small/DK.png" data-posttip="ZIP/Post Code">Denmark</option>			
															<option value="58" data-icon="https://img.newchic.com/images/country/small/DJ.png" data-posttip="ZIP/Post Code">Djibouti</option>			
															<option value="59" data-icon="https://img.newchic.com/images/country/small/DM.png" data-posttip="ZIP/Post Code">Dominica</option>			
															<option value="60" data-icon="https://img.newchic.com/images/country/small/DO.png" data-posttip="ZIP/Post Code">Dominican Republic</option>			
															<option value="61" data-icon="https://img.newchic.com/images/country/small/TP.png" data-posttip="ZIP/Post Code">East Timor</option>			
															<option value="62" data-icon="https://img.newchic.com/images/country/small/EC.png" data-posttip="ZIP/Post Code">Ecuador</option>			
															<option value="63" data-icon="https://img.newchic.com/images/country/small/EG.png" data-posttip="ZIP/Post Code">Egypt</option>			
															<option value="64" data-icon="https://img.newchic.com/images/country/small/SV.png" data-posttip="ZIP/Post Code">El Salvador</option>			
															<option value="65" data-icon="https://img.newchic.com/images/country/small/GQ.png" data-posttip="ZIP/Post Code">Equatorial Guinea</option>			
															<option value="66" data-icon="https://img.newchic.com/images/country/small/ER.png" data-posttip="ZIP/Post Code">Eritrea</option>			
															<option value="67" data-icon="https://img.newchic.com/images/country/small/EE.png" data-posttip="ZIP/Post Code">Estonia</option>			
															<option value="68" data-icon="https://img.newchic.com/images/country/small/ET.png" data-posttip="ZIP/Post Code">Ethiopia</option>			
															<option value="69" data-icon="https://img.newchic.com/images/country/small/FK.png" data-posttip="ZIP/Post Code">Falkland Islands (Malvinas)</option>			
															<option value="70" data-icon="https://img.newchic.com/images/country/small/FO.png" data-posttip="ZIP/Post Code">Faroe Islands</option>			
															<option value="27" data-icon="https://img.newchic.com/images/country/small/BA.png" data-posttip="ZIP/Post Code">Federation of Bosnia and Herzegovina</option>			
															<option value="71" data-icon="https://img.newchic.com/images/country/small/FJ.png" data-posttip="ZIP/Post Code">Fiji</option>			
															<option value="72" data-icon="https://img.newchic.com/images/country/small/FI.png" data-posttip="ZIP/Post Code">Finland</option>			
															<option value="75" data-icon="https://img.newchic.com/images/country/small/GF.png" data-posttip="ZIP/Post Code">French Guiana</option>			
															<option value="76" data-icon="https://img.newchic.com/images/country/small/PF.png" data-posttip="ZIP/Post Code">French Polynesia</option>			
															<option value="77" data-icon="https://img.newchic.com/images/country/small/TF.png" data-posttip="ZIP/Post Code">French Southern Territories</option>			
															<option value="78" data-icon="https://img.newchic.com/images/country/small/GA.png" data-posttip="ZIP/Post Code">Gabon</option>			
															<option value="79" data-icon="https://img.newchic.com/images/country/small/GM.png" data-posttip="ZIP/Post Code">Gambia</option>			
															<option value="80" data-icon="https://img.newchic.com/images/country/small/GE.png" data-posttip="ZIP/Post Code">Georgia</option>			
															<option value="82" data-icon="https://img.newchic.com/images/country/small/GH.png" data-posttip="ZIP/Post Code">Ghana</option>			
															<option value="83" data-icon="https://img.newchic.com/images/country/small/GI.png" data-posttip="ZIP/Post Code">Gibraltar</option>			
															<option value="84" data-icon="https://img.newchic.com/images/country/small/GR.png" data-posttip="ZIP/Post Code">Greece</option>			
															<option value="85" data-icon="https://img.newchic.com/images/country/small/GL.png" data-posttip="ZIP/Post Code">Greenland</option>			
															<option value="86" data-icon="https://img.newchic.com/images/country/small/GD.png" data-posttip="ZIP/Post Code">Grenada</option>			
															<option value="87" data-icon="https://img.newchic.com/images/country/small/GP.png" data-posttip="ZIP/Post Code">Guadeloupe</option>			
															<option value="88" data-icon="https://img.newchic.com/images/country/small/GU.png" data-posttip="ZIP/Post Code">Guam</option>			
															<option value="89" data-icon="https://img.newchic.com/images/country/small/GT.png" data-posttip="ZIP/Post Code">Guatemala</option>			
															<option value="250" data-icon="https://img.newchic.com/images/country/small/GG.png" data-posttip="ZIP/Post Code">Guernsey</option>			
															<option value="90" data-icon="https://img.newchic.com/images/country/small/GN.png" data-posttip="ZIP/Post Code">Guinea</option>			
															<option value="91" data-icon="https://img.newchic.com/images/country/small/GW.png" data-posttip="ZIP/Post Code">Guinea-bissau</option>			
															<option value="92" data-icon="https://img.newchic.com/images/country/small/GY.png" data-posttip="ZIP/Post Code">Guyana</option>			
															<option value="93" data-icon="https://img.newchic.com/images/country/small/HT.png" data-posttip="ZIP/Post Code">Haiti</option>			
															<option value="94" data-icon="https://img.newchic.com/images/country/small/HM.png" data-posttip="ZIP/Post Code">Heard and Mc Donald Islands</option>			
															<option value="95" data-icon="https://img.newchic.com/images/country/small/HN.png" data-posttip="ZIP/Post Code">Honduras</option>			
															<option value="96" data-icon="https://img.newchic.com/images/country/small/HK.png" data-posttip="ZIP/Post Code">Hong Kong</option>			
															<option value="97" data-icon="https://img.newchic.com/images/country/small/HU.png" data-posttip="ZIP/Post Code">Hungary</option>			
															<option value="98" data-icon="https://img.newchic.com/images/country/small/IS.png" data-posttip="ZIP/Post Code">Iceland</option>			
															<option value="100" data-icon="https://img.newchic.com/images/country/small/ID.png" data-posttip="ZIP/Post Code">Indonesia</option>			
															<option value="101" data-icon="https://img.newchic.com/images/country/small/IR.png" data-posttip="ZIP/Post Code">Iran (Islamic Republic of)</option>			
															<option value="102" data-icon="https://img.newchic.com/images/country/small/IQ.png" data-posttip="ZIP/Post Code">Iraq</option>			
															<option value="104" data-icon="https://img.newchic.com/images/country/small/IL.png" data-posttip="ZIP/Post Code">Israel</option>			
															<option value="106" data-icon="https://img.newchic.com/images/country/small/JM.png" data-posttip="ZIP/Post Code">Jamaica</option>			
															<option value="107" data-icon="https://img.newchic.com/images/country/small/JP.png" data-posttip="ZIP/Post Code">Japan</option>			
															<option value="253" data-icon="https://img.newchic.com/images/country/small/JE.png" data-posttip="ZIP/Post Code">Jersey Island</option>			
															<option value="108" data-icon="https://img.newchic.com/images/country/small/JO.png" data-posttip="ZIP/Post Code">Jordan</option>			
															<option value="109" data-icon="https://img.newchic.com/images/country/small/KZ.png" data-posttip="ZIP/Post Code">Kazakhstan</option>			
															<option value="110" data-icon="https://img.newchic.com/images/country/small/KE.png" data-posttip="ZIP/Post Code">Kenya</option>			
															<option value="111" data-icon="https://img.newchic.com/images/country/small/KI.png" data-posttip="ZIP/Post Code">Kiribati</option>			
															<option value="112" data-icon="https://img.newchic.com/images/country/small/KP.png" data-posttip="ZIP/Post Code">Korea, Democratic People's Republic of</option>			
															<option value="113" data-icon="https://img.newchic.com/images/country/small/KR.png" data-posttip="ZIP/Post Code">Korea, Republic of</option>			
															<option value="114" data-icon="https://img.newchic.com/images/country/small/KW.png" data-posttip="ZIP/Post Code">Kuwait</option>			
															<option value="115" data-icon="https://img.newchic.com/images/country/small/KG.png" data-posttip="ZIP/Post Code">Kyrgyzstan</option>			
															<option value="116" data-icon="https://img.newchic.com/images/country/small/LA.png" data-posttip="ZIP/Post Code">Lao People's Democratic Republic</option>			
															<option value="117" data-icon="https://img.newchic.com/images/country/small/LV.png" data-posttip="ZIP/Post Code">Latvia</option>			
															<option value="118" data-icon="https://img.newchic.com/images/country/small/LB.png" data-posttip="ZIP/Post Code">Lebanon</option>			
															<option value="119" data-icon="https://img.newchic.com/images/country/small/LS.png" data-posttip="ZIP/Post Code">Lesotho</option>			
															<option value="120" data-icon="https://img.newchic.com/images/country/small/LR.png" data-posttip="ZIP/Post Code">Liberia</option>			
															<option value="121" data-icon="https://img.newchic.com/images/country/small/LY.png" data-posttip="ZIP/Post Code">Libyan Arab Jamahiriya</option>			
															<option value="122" data-icon="https://img.newchic.com/images/country/small/LI.png" data-posttip="ZIP/Post Code">Liechtenstein</option>			
															<option value="123" data-icon="https://img.newchic.com/images/country/small/LT.png" data-posttip="ZIP/Post Code">Lithuania</option>			
															<option value="124" data-icon="https://img.newchic.com/images/country/small/LU.png" data-posttip="ZIP/Post Code">Luxembourg</option>			
															<option value="125" data-icon="https://img.newchic.com/images/country/small/MO.png" data-posttip="ZIP/Post Code">Macau</option>			
															<option value="241" data-icon="https://img.newchic.com/images/country/small/MK.png" data-posttip="ZIP/Post Code">Macedonia</option>			
															<option value="127" data-icon="https://img.newchic.com/images/country/small/MG.png" data-posttip="ZIP/Post Code">Madagascar</option>			
															<option value="128" data-icon="https://img.newchic.com/images/country/small/MW.png" data-posttip="ZIP/Post Code">Malawi</option>			
															<option value="129" data-icon="https://img.newchic.com/images/country/small/MY.png" data-posttip="ZIP/Post Code">Malaysia</option>			
															<option value="130" data-icon="https://img.newchic.com/images/country/small/MV.png" data-posttip="ZIP/Post Code">Maldives</option>			
															<option value="131" data-icon="https://img.newchic.com/images/country/small/ML.png" data-posttip="ZIP/Post Code">Mali</option>			
															<option value="132" data-icon="https://img.newchic.com/images/country/small/MT.png" data-posttip="ZIP/Post Code">Malta</option>			
															<option value="133" data-icon="https://img.newchic.com/images/country/small/MH.png" data-posttip="ZIP/Post Code">Marshall Islands</option>			
															<option value="134" data-icon="https://img.newchic.com/images/country/small/MQ.png" data-posttip="ZIP/Post Code">Martinique</option>			
															<option value="135" data-icon="https://img.newchic.com/images/country/small/MR.png" data-posttip="ZIP/Post Code">Mauritania</option>			
															<option value="136" data-icon="https://img.newchic.com/images/country/small/MU.png" data-posttip="ZIP/Post Code">Mauritius</option>			
															<option value="137" data-icon="https://img.newchic.com/images/country/small/YT.png" data-posttip="ZIP/Post Code">Mayotte</option>			
															<option value="138" data-icon="https://img.newchic.com/images/country/small/MX.png" data-posttip="ZIP/Post Code">Mexico</option>			
															<option value="139" data-icon="https://img.newchic.com/images/country/small/FM.png" data-posttip="ZIP/Post Code">Micronesia, Federated States of</option>			
															<option value="140" data-icon="https://img.newchic.com/images/country/small/MD.png" data-posttip="ZIP/Post Code">Moldova, Republic of</option>			
															<option value="141" data-icon="https://img.newchic.com/images/country/small/MC.png" data-posttip="ZIP/Post Code">Monaco</option>			
															<option value="142" data-icon="https://img.newchic.com/images/country/small/MN.png" data-posttip="ZIP/Post Code">Mongolia</option>			
															<option value="243" data-icon="https://img.newchic.com/images/country/small/ME.png" data-posttip="ZIP/Post Code">Montenegro</option>			
															<option value="143" data-icon="https://img.newchic.com/images/country/small/MS.png" data-posttip="ZIP/Post Code">Montserrat</option>			
															<option value="144" data-icon="https://img.newchic.com/images/country/small/MA.png" data-posttip="ZIP/Post Code">Morocco</option>			
															<option value="145" data-icon="https://img.newchic.com/images/country/small/MZ.png" data-posttip="ZIP/Post Code">Mozambique</option>			
															<option value="146" data-icon="https://img.newchic.com/images/country/small/MM.png" data-posttip="ZIP/Post Code">Myanmar</option>			
															<option value="147" data-icon="https://img.newchic.com/images/country/small/NA.png" data-posttip="ZIP/Post Code">Namibia</option>			
															<option value="148" data-icon="https://img.newchic.com/images/country/small/NR.png" data-posttip="ZIP/Post Code">Nauru</option>			
															<option value="149" data-icon="https://img.newchic.com/images/country/small/NP.png" data-posttip="ZIP/Post Code">Nepal</option>			
															<option value="151" data-icon="https://img.newchic.com/images/country/small/AN.png" data-posttip="ZIP/Post Code">Netherlands Antilles</option>			
															<option value="152" data-icon="https://img.newchic.com/images/country/small/NC.png" data-posttip="ZIP/Post Code">New Caledonia</option>			
															<option value="153" data-icon="https://img.newchic.com/images/country/small/NZ.png" data-posttip="ZIP/Post Code">New Zealand</option>			
															<option value="154" data-icon="https://img.newchic.com/images/country/small/NI.png" data-posttip="ZIP/Post Code">Nicaragua</option>			
															<option value="155" data-icon="https://img.newchic.com/images/country/small/NE.png" data-posttip="ZIP/Post Code">Niger</option>			
															<option value="156" data-icon="https://img.newchic.com/images/country/small/NG.png" data-posttip="ZIP/Post Code">Nigeria</option>			
															<option value="157" data-icon="https://img.newchic.com/images/country/small/NU.png" data-posttip="ZIP/Post Code">Niue</option>			
															<option value="158" data-icon="https://img.newchic.com/images/country/small/NF.png" data-posttip="ZIP/Post Code">Norfolk Island</option>			
															<option value="159" data-icon="https://img.newchic.com/images/country/small/MP.png" data-posttip="ZIP/Post Code">Northern Mariana Islands</option>			
															<option value="160" data-icon="https://img.newchic.com/images/country/small/NO.png" data-posttip="ZIP/Post Code">Norway</option>			
															<option value="161" data-icon="https://img.newchic.com/images/country/small/OM.png" data-posttip="ZIP/Post Code">Oman</option>			
															<option value="162" data-icon="https://img.newchic.com/images/country/small/PK.png" data-posttip="ZIP/Post Code">Pakistan</option>			
															<option value="255" data-icon="https://img.newchic.com/images/country/small/PW.png" data-posttip="ZIP/Post Code">Palau</option>			
															<option value="164" data-icon="https://img.newchic.com/images/country/small/PA.png" data-posttip="ZIP/Post Code">Panama</option>			
															<option value="165" data-icon="https://img.newchic.com/images/country/small/PG.png" data-posttip="ZIP/Post Code">Papua New Guinea</option>			
															<option value="166" data-icon="https://img.newchic.com/images/country/small/PY.png" data-posttip="ZIP/Post Code">Paraguay</option>			
															<option value="167" data-icon="https://img.newchic.com/images/country/small/PE.png" data-posttip="ZIP/Post Code">Peru</option>			
															<option value="168" data-icon="https://img.newchic.com/images/country/small/PH.png" data-posttip="ZIP/Post Code">Philippines</option>			
															<option value="169" data-icon="https://img.newchic.com/images/country/small/PN.png" data-posttip="ZIP/Post Code">Pitcairn</option>			
															<option value="170" data-icon="https://img.newchic.com/images/country/small/PL.png" data-posttip="ZIP/Post Code">Poland</option>			
															<option value="171" data-icon="https://img.newchic.com/images/country/small/PT.png" data-posttip="ZIP/Post Code">Portugal</option>			
															<option value="172" data-icon="https://img.newchic.com/images/country/small/PR.png" data-posttip="ZIP/Post Code">Puerto Rico</option>			
															<option value="173" data-icon="https://img.newchic.com/images/country/small/QA.png" data-posttip="ZIP/Post Code">Qatar</option>			
															<option value="49" data-icon="https://img.newchic.com/images/country/small/CG.png" data-posttip="ZIP/Post Code">Republic of the Congo</option>			
															<option value="174" data-icon="https://img.newchic.com/images/country/small/RE.png" data-posttip="ZIP/Post Code">Reunion</option>			
															<option value="175" data-icon="https://img.newchic.com/images/country/small/RO.png" data-posttip="ZIP/Post Code">Romania</option>			
															<option value="177" data-icon="https://img.newchic.com/images/country/small/RW.png" data-posttip="ZIP/Post Code">Rwanda</option>			
															<option value="178" data-icon="https://img.newchic.com/images/country/small/KN.png" data-posttip="ZIP/Post Code">Saint Kitts and Nevis</option>			
															<option value="179" data-icon="https://img.newchic.com/images/country/small/LC.png" data-posttip="ZIP/Post Code">Saint Lucia</option>			
															<option value="254" data-icon="https://img.newchic.com/images/country/small/PM.png" data-posttip="ZIP/Post Code">Saint Pierre and Miquelon</option>			
															<option value="180" data-icon="https://img.newchic.com/images/country/small/VC.png" data-posttip="ZIP/Post Code">Saint Vincent and the Grenadines</option>			
															<option value="181" data-icon="https://img.newchic.com/images/country/small/WS.png" data-posttip="ZIP/Post Code">Samoa</option>			
															<option value="182" data-icon="https://img.newchic.com/images/country/small/SM.png" data-posttip="ZIP/Post Code">San Marino</option>			
															<option value="183" data-icon="https://img.newchic.com/images/country/small/ST.png" data-posttip="ZIP/Post Code">Sao Tome and Principe</option>			
															<option value="184" data-icon="https://img.newchic.com/images/country/small/SA.png" data-posttip="ZIP/Post Code">Saudi Arabia</option>			
															<option value="185" data-icon="https://img.newchic.com/images/country/small/SN.png" data-posttip="ZIP/Post Code">Senegal</option>			
															<option value="240" data-icon="https://img.newchic.com/images/country/small/RS.png" data-posttip="ZIP/Post Code">Serbia</option>			
															<option value="186" data-icon="https://img.newchic.com/images/country/small/SC.png" data-posttip="ZIP/Post Code">Seychelles</option>			
															<option value="187" data-icon="https://img.newchic.com/images/country/small/SL.png" data-posttip="ZIP/Post Code">Sierra Leone</option>			
															<option value="188" data-icon="https://img.newchic.com/images/country/small/SG.png" data-posttip="ZIP/Post Code">Singapore</option>			
															<option value="189" data-icon="https://img.newchic.com/images/country/small/SK.png" data-posttip="ZIP/Post Code">Slovakia (Slovak Republic)</option>			
															<option value="190" data-icon="https://img.newchic.com/images/country/small/SI.png" data-posttip="ZIP/Post Code">Slovenia</option>			
															<option value="191" data-icon="https://img.newchic.com/images/country/small/SB.png" data-posttip="ZIP/Post Code">Solomon Islands</option>			
															<option value="192" data-icon="https://img.newchic.com/images/country/small/SO.png" data-posttip="ZIP/Post Code">Somalia</option>			
															<option value="193" data-icon="https://img.newchic.com/images/country/small/ZA.png" data-posttip="ZIP/Post Code">South Africa</option>			
															<option value="194" data-icon="https://img.newchic.com/images/country/small/GS.png" data-posttip="ZIP/Post Code">South Georgia and the South Sandwich Islands</option>			
															<option value="196" data-icon="https://img.newchic.com/images/country/small/LK.png" data-posttip="ZIP/Post Code">Sri Lanka</option>			
															<option value="197" data-icon="https://img.newchic.com/images/country/small/SH.png" data-posttip="ZIP/Post Code">St. Helena</option>			
															<option value="198" data-icon="https://img.newchic.com/images/country/small/PM.png" data-posttip="ZIP/Post Code">St. Pierre and Miquelon</option>			
															<option value="199" data-icon="https://img.newchic.com/images/country/small/SD.png" data-posttip="ZIP/Post Code">Sudan</option>			
															<option value="200" data-icon="https://img.newchic.com/images/country/small/SR.png" data-posttip="ZIP/Post Code">Suriname</option>			
															<option value="201" data-icon="https://img.newchic.com/images/country/small/SJ.png" data-posttip="ZIP/Post Code">Svalbard and Jan Mayen Islands</option>			
															<option value="202" data-icon="https://img.newchic.com/images/country/small/SZ.png" data-posttip="ZIP/Post Code">Swaziland</option>			
															<option value="203" data-icon="https://img.newchic.com/images/country/small/SE.png" data-posttip="ZIP/Post Code">Sweden</option>			
															<option value="204" data-icon="https://img.newchic.com/images/country/small/CH.png" data-posttip="ZIP/Post Code">Switzerland</option>			
															<option value="205" data-icon="https://img.newchic.com/images/country/small/SY.png" data-posttip="ZIP/Post Code">Syrian Arab Republic</option>			
															<option value="206" data-icon="https://img.newchic.com/images/country/small/TW.png" data-posttip="ZIP/Post Code">Taiwan</option>			
															<option value="207" data-icon="https://img.newchic.com/images/country/small/TJ.png" data-posttip="ZIP/Post Code">Tajikistan</option>			
															<option value="208" data-icon="https://img.newchic.com/images/country/small/TZ.png" data-posttip="ZIP/Post Code">Tanzania, United Republic of</option>			
															<option value="209" data-icon="https://img.newchic.com/images/country/small/TH.png" data-posttip="ZIP/Post Code">Thailand</option>			
															<option value="210" data-icon="https://img.newchic.com/images/country/small/TG.png" data-posttip="ZIP/Post Code">Togo</option>			
															<option value="211" data-icon="https://img.newchic.com/images/country/small/TK.png" data-posttip="ZIP/Post Code">Tokelau</option>			
															<option value="212" data-icon="https://img.newchic.com/images/country/small/TO.png" data-posttip="ZIP/Post Code">Tonga</option>			
															<option value="213" data-icon="https://img.newchic.com/images/country/small/TT.png" data-posttip="ZIP/Post Code">Trinidad and Tobago</option>			
															<option value="214" data-icon="https://img.newchic.com/images/country/small/TN.png" data-posttip="ZIP/Post Code">Tunisia</option>			
															<option value="215" data-icon="https://img.newchic.com/images/country/small/TR.png" data-posttip="ZIP/Post Code">Turkey</option>			
															<option value="216" data-icon="https://img.newchic.com/images/country/small/TM.png" data-posttip="ZIP/Post Code">Turkmenistan</option>			
															<option value="217" data-icon="https://img.newchic.com/images/country/small/TC.png" data-posttip="ZIP/Post Code">Turks and Caicos Islands</option>			
															<option value="218" data-icon="https://img.newchic.com/images/country/small/TV.png" data-posttip="ZIP/Post Code">Tuvalu</option>			
															<option value="219" data-icon="https://img.newchic.com/images/country/small/UG.png" data-posttip="ZIP/Post Code">Uganda</option>			
															<option value="221" data-icon="https://img.newchic.com/images/country/small/AE.png" data-posttip="ZIP/Post Code">United Arab Emirates</option>			
															<option value="224" data-icon="https://img.newchic.com/images/country/small/UM.png" data-posttip="ZIP/Post Code">United States Minor Outlying Islands</option>			
															<option value="225" data-icon="https://img.newchic.com/images/country/small/UY.png" data-posttip="ZIP/Post Code">Uruguay</option>			
															<option value="226" data-icon="https://img.newchic.com/images/country/small/UZ.png" data-posttip="ZIP/Post Code">Uzbekistan</option>			
															<option value="227" data-icon="https://img.newchic.com/images/country/small/VU.png" data-posttip="ZIP/Post Code">Vanuatu</option>			
															<option value="228" data-icon="https://img.newchic.com/images/country/small/VA.png" data-posttip="ZIP/Post Code">Vatican City State (Holy See)</option>			
															<option value="229" data-icon="https://img.newchic.com/images/country/small/VE.png" data-posttip="ZIP/Post Code">Venezuela</option>			
															<option value="230" data-icon="https://img.newchic.com/images/country/small/VN.png" data-posttip="ZIP/Post Code">Viet Nam</option>			
															<option value="231" data-icon="https://img.newchic.com/images/country/small/VG.png" data-posttip="ZIP/Post Code">Virgin Islands (British)</option>			
															<option value="232" data-icon="https://img.newchic.com/images/country/small/VI.png" data-posttip="ZIP/Post Code">Virgin Islands (U.S.)</option>			
															<option value="233" data-icon="https://img.newchic.com/images/country/small/WF.png" data-posttip="ZIP/Post Code">Wallis and Futuna Islands</option>			
															<option value="234" data-icon="https://img.newchic.com/images/country/small/EH.png" data-posttip="ZIP/Post Code">Western Sahara</option>			
															<option value="238" data-icon="https://img.newchic.com/images/country/small/ZM.png" data-posttip="ZIP/Post Code">Zambia</option>			
															<option value="239" data-icon="https://img.newchic.com/images/country/small/ZW.png" data-posttip="ZIP/Post Code">Zimbabwe</option>			
													</select><div class="select-container select-container-default address-select" id="select-container-151941052758426611" style="min-width: 378px; width: 378px;">	<div class="selection">		<div class="select-selection select-selection-single">			<span class="select-selection-rendered" id="select-151941052758426611-container" title=""><span class="select-selection-placeholder">Select Country/Region</span></span>			<span class="select-selection-arrow select-selection-arrow-triangle">				<b></b>			</span>		</div>	</div></div>
						<input id="country_box" type="hidden" value="">
						<input name="country_id" type="hidden" value="" id="country_id">

						<!-- <span class="tips "   id="country_tip">Select Country/Region</span>
						<input id="country_box" value="" autocomplete="off" readonly="true" />
						<i></i>
						<input name="country_id" type="hidden" value="" dataType="Require" require="true" id="country_id" msg="Please Select Country/Region"/>
						<b id="countyrTip">*</b>
						<div class="select-container">
							<div class="search">
								<i class="icon icon-search"></i>
								<input type="text">
							</div>
							<ul id="country_ul">
																	<li cid="223">United States</li>				
																	<li cid="222">United Kingdom</li>				
																	<li cid="38">Canada</li>				
																	<li cid="195">Spain</li>				
																	<li cid="13">Australia</li>				
																	<li cid="176">Russian Federation</li>				
																	<li cid="73">France</li>				
																	<li cid="30">Brazil</li>				
																	<li cid="105">Italy</li>				
																	<li cid="81">Germany</li>				
																	<li cid="150">Netherlands</li>				
																	<li cid="220">Ukraine</li>				
																	<li cid="10">Argentina</li>				
																	<li cid="99">India</li>				
																	<li cid="103">Ireland</li>				
																	<li cid="1">Afghanistan</li>				
																	<li cid="2">Albania</li>				
																	<li cid="3">Algeria</li>				
																	<li cid="4">American Samoa</li>				
																	<li cid="5">Andorra</li>				
																	<li cid="6">Angola</li>				
																	<li cid="7">Anguilla</li>				
																	<li cid="8">Antarctica</li>				
																	<li cid="9">Antigua and Barbuda</li>				
																	<li cid="11">Armenia</li>				
																	<li cid="12">Aruba</li>				
																	<li cid="14">Austria</li>				
																	<li cid="15">Azerbaijan</li>				
																	<li cid="16">Bahamas</li>				
																	<li cid="17">Bahrain</li>				
																	<li cid="18">Bangladesh</li>				
																	<li cid="19">Barbados</li>				
																	<li cid="20">Belarus</li>				
																	<li cid="21">Belgium</li>				
																	<li cid="22">Belize</li>				
																	<li cid="23">Benin</li>				
																	<li cid="24">Bermuda</li>				
																	<li cid="25">Bhutan</li>				
																	<li cid="26">Bolivia</li>				
																	<li cid="28">Botswana</li>				
																	<li cid="29">Bouvet Island</li>				
																	<li cid="31">British Indian Ocean Territory</li>				
																	<li cid="32">Brunei Darussalam</li>				
																	<li cid="33">Bulgaria</li>				
																	<li cid="34">Burkina Faso</li>				
																	<li cid="35">Burundi</li>				
																	<li cid="36">Cambodia</li>				
																	<li cid="37">Cameroon</li>				
																	<li cid="39">Cape Verde</li>				
																	<li cid="40">Cayman Islands</li>				
																	<li cid="41">Central African Republic</li>				
																	<li cid="42">Chad</li>				
																	<li cid="43">Chile</li>				
																	<li cid="46">Cocos (Keeling) Islands</li>				
																	<li cid="47">Colombia</li>				
																	<li cid="48">Comoros</li>				
																	<li cid="50">Cook Islands</li>				
																	<li cid="51">Costa Rica</li>				
																	<li cid="52">Cote D'Ivoire</li>				
																	<li cid="245">Croatia</li>				
																	<li cid="54">Cuba</li>				
																	<li cid="55">Cyprus</li>				
																	<li cid="56">Czech Republic</li>				
																	<li cid="237">Democratic Republic of the Congo</li>				
																	<li cid="57">Denmark</li>				
																	<li cid="58">Djibouti</li>				
																	<li cid="59">Dominica</li>				
																	<li cid="60">Dominican Republic</li>				
																	<li cid="61">East Timor</li>				
																	<li cid="62">Ecuador</li>				
																	<li cid="63">Egypt</li>				
																	<li cid="64">El Salvador</li>				
																	<li cid="65">Equatorial Guinea</li>				
																	<li cid="66">Eritrea</li>				
																	<li cid="67">Estonia</li>				
																	<li cid="68">Ethiopia</li>				
																	<li cid="69">Falkland Islands (Malvinas)</li>				
																	<li cid="70">Faroe Islands</li>				
																	<li cid="27">Federation of Bosnia and Herzegovina</li>				
																	<li cid="71">Fiji</li>				
																	<li cid="72">Finland</li>				
																	<li cid="75">French Guiana</li>				
																	<li cid="76">French Polynesia</li>				
																	<li cid="77">French Southern Territories</li>				
																	<li cid="78">Gabon</li>				
																	<li cid="79">Gambia</li>				
																	<li cid="80">Georgia</li>				
																	<li cid="82">Ghana</li>				
																	<li cid="83">Gibraltar</li>				
																	<li cid="84">Greece</li>				
																	<li cid="85">Greenland</li>				
																	<li cid="86">Grenada</li>				
																	<li cid="87">Guadeloupe</li>				
																	<li cid="88">Guam</li>				
																	<li cid="89">Guatemala</li>				
																	<li cid="250">Guernsey</li>				
																	<li cid="90">Guinea</li>				
																	<li cid="91">Guinea-bissau</li>				
																	<li cid="92">Guyana</li>				
																	<li cid="93">Haiti</li>				
																	<li cid="94">Heard and Mc Donald Islands</li>				
																	<li cid="95">Honduras</li>				
																	<li cid="96">Hong Kong</li>				
																	<li cid="97">Hungary</li>				
																	<li cid="98">Iceland</li>				
																	<li cid="100">Indonesia</li>				
																	<li cid="101">Iran (Islamic Republic of)</li>				
																	<li cid="102">Iraq</li>				
																	<li cid="104">Israel</li>				
																	<li cid="106">Jamaica</li>				
																	<li cid="107">Japan</li>				
																	<li cid="253">Jersey Island</li>				
																	<li cid="108">Jordan</li>				
																	<li cid="109">Kazakhstan</li>				
																	<li cid="110">Kenya</li>				
																	<li cid="111">Kiribati</li>				
																	<li cid="112">Korea, Democratic People's Republic of</li>				
																	<li cid="113">Korea, Republic of</li>				
																	<li cid="114">Kuwait</li>				
																	<li cid="115">Kyrgyzstan</li>				
																	<li cid="116">Lao People's Democratic Republic</li>				
																	<li cid="117">Latvia</li>				
																	<li cid="118">Lebanon</li>				
																	<li cid="119">Lesotho</li>				
																	<li cid="120">Liberia</li>				
																	<li cid="121">Libyan Arab Jamahiriya</li>				
																	<li cid="122">Liechtenstein</li>				
																	<li cid="123">Lithuania</li>				
																	<li cid="124">Luxembourg</li>				
																	<li cid="125">Macau</li>				
																	<li cid="241">Macedonia</li>				
																	<li cid="127">Madagascar</li>				
																	<li cid="128">Malawi</li>				
																	<li cid="129">Malaysia</li>				
																	<li cid="130">Maldives</li>				
																	<li cid="131">Mali</li>				
																	<li cid="132">Malta</li>				
																	<li cid="133">Marshall Islands</li>				
																	<li cid="134">Martinique</li>				
																	<li cid="135">Mauritania</li>				
																	<li cid="136">Mauritius</li>				
																	<li cid="137">Mayotte</li>				
																	<li cid="138">Mexico</li>				
																	<li cid="139">Micronesia, Federated States of</li>				
																	<li cid="140">Moldova, Republic of</li>				
																	<li cid="141">Monaco</li>				
																	<li cid="142">Mongolia</li>				
																	<li cid="243">Montenegro</li>				
																	<li cid="143">Montserrat</li>				
																	<li cid="144">Morocco</li>				
																	<li cid="145">Mozambique</li>				
																	<li cid="146">Myanmar</li>				
																	<li cid="147">Namibia</li>				
																	<li cid="148">Nauru</li>				
																	<li cid="149">Nepal</li>				
																	<li cid="151">Netherlands Antilles</li>				
																	<li cid="152">New Caledonia</li>				
																	<li cid="153">New Zealand</li>				
																	<li cid="154">Nicaragua</li>				
																	<li cid="155">Niger</li>				
																	<li cid="156">Nigeria</li>				
																	<li cid="157">Niue</li>				
																	<li cid="158">Norfolk Island</li>				
																	<li cid="159">Northern Mariana Islands</li>				
																	<li cid="160">Norway</li>				
																	<li cid="161">Oman</li>				
																	<li cid="162">Pakistan</li>				
																	<li cid="255">Palau</li>				
																	<li cid="164">Panama</li>				
																	<li cid="165">Papua New Guinea</li>				
																	<li cid="166">Paraguay</li>				
																	<li cid="167">Peru</li>				
																	<li cid="168">Philippines</li>				
																	<li cid="169">Pitcairn</li>				
																	<li cid="170">Poland</li>				
																	<li cid="171">Portugal</li>				
																	<li cid="172">Puerto Rico</li>				
																	<li cid="173">Qatar</li>				
																	<li cid="49">Republic of the Congo</li>				
																	<li cid="174">Reunion</li>				
																	<li cid="175">Romania</li>				
																	<li cid="177">Rwanda</li>				
																	<li cid="178">Saint Kitts and Nevis</li>				
																	<li cid="179">Saint Lucia</li>				
																	<li cid="254">Saint Pierre and Miquelon</li>				
																	<li cid="180">Saint Vincent and the Grenadines</li>				
																	<li cid="181">Samoa</li>				
																	<li cid="182">San Marino</li>				
																	<li cid="183">Sao Tome and Principe</li>				
																	<li cid="184">Saudi Arabia</li>				
																	<li cid="185">Senegal</li>				
																	<li cid="240">Serbia</li>				
																	<li cid="186">Seychelles</li>				
																	<li cid="187">Sierra Leone</li>				
																	<li cid="188">Singapore</li>				
																	<li cid="189">Slovakia (Slovak Republic)</li>				
																	<li cid="190">Slovenia</li>				
																	<li cid="191">Solomon Islands</li>				
																	<li cid="192">Somalia</li>				
																	<li cid="193">South Africa</li>				
																	<li cid="194">South Georgia and the South Sandwich Islands</li>				
																	<li cid="196">Sri Lanka</li>				
																	<li cid="197">St. Helena</li>				
																	<li cid="198">St. Pierre and Miquelon</li>				
																	<li cid="199">Sudan</li>				
																	<li cid="200">Suriname</li>				
																	<li cid="201">Svalbard and Jan Mayen Islands</li>				
																	<li cid="202">Swaziland</li>				
																	<li cid="203">Sweden</li>				
																	<li cid="204">Switzerland</li>				
																	<li cid="205">Syrian Arab Republic</li>				
																	<li cid="206">Taiwan</li>				
																	<li cid="207">Tajikistan</li>				
																	<li cid="208">Tanzania, United Republic of</li>				
																	<li cid="209">Thailand</li>				
																	<li cid="210">Togo</li>				
																	<li cid="211">Tokelau</li>				
																	<li cid="212">Tonga</li>				
																	<li cid="213">Trinidad and Tobago</li>				
																	<li cid="214">Tunisia</li>				
																	<li cid="215">Turkey</li>				
																	<li cid="216">Turkmenistan</li>				
																	<li cid="217">Turks and Caicos Islands</li>				
																	<li cid="218">Tuvalu</li>				
																	<li cid="219">Uganda</li>				
																	<li cid="221">United Arab Emirates</li>				
																	<li cid="224">United States Minor Outlying Islands</li>				
																	<li cid="225">Uruguay</li>				
																	<li cid="226">Uzbekistan</li>				
																	<li cid="227">Vanuatu</li>				
																	<li cid="228">Vatican City State (Holy See)</li>				
																	<li cid="229">Venezuela</li>				
																	<li cid="230">Viet Nam</li>				
																	<li cid="231">Virgin Islands (British)</li>				
																	<li cid="232">Virgin Islands (U.S.)</li>				
																	<li cid="233">Wallis and Futuna Islands</li>				
																	<li cid="234">Western Sahara</li>				
																	<li cid="238">Zambia</li>				
																	<li cid="239">Zimbabwe</li>				
															</ul>
						</div>	 -->
					</div>
					<b>*</b>			
					
				</div>
				<div class="inputbox selectbox" style="z-index:1">
					<s>State/province/region: </s>
					<div class="inline-block state-select-container-wrap">
						<select class="select-uniform" name="entry_zone_select" id="entry_zone_select" data-placeholder="Select your state" data-allow-clear="true" data-msg="Please select your state" data-default="" data-skin="address-select" data-width="378" style="display: none;"></select><div class="select-container select-container-default address-select" id="select-container-151941052759119481" style="min-width: 378px; width: 378px;">	<div class="selection">		<div class="select-selection select-selection-single">			<span class="select-selection-rendered" id="select-151941052759119481-container" title=""><span class="select-selection-placeholder">Select your state</span></span>			<span class="select-selection-arrow select-selection-arrow-triangle">				<b></b>			</span>		</div>	</div></div>
						<input name="zone_id" type="hidden" value="" id="state_id">
						<input name="zone_name" type="hidden" value="" id="zone_name">

						<!-- <span class="tips"   id="spanstate" data-placeholder="Select your state">Select your state</span>
						<input id="state_name" value=""  dataType="Require" require="true" autocomplete="off" readonly="true" />
						<i></i>
						<input name="zone_id" type="hidden" value="" dataType="Require" require="true" msg="Please select your state"  id="state_id"/>
						<input name="zone_name" type="hidden" value="" dataType="Require" require="true" id="zone_name"/>
						
						<div class="select-container">
							<div class="search">
								<i class="icon icon-search"></i>
								<input type="text">
							</div>
							<ul id="state_ul">
								
							</ul>
						</div> -->
						
					</div>
					<b>*</b>
				</div>
				<div class="inputbox">
					<s>City: </s>
					<div class="inline-block">
						<div class="select-city-wrap none">
							<select class="select-uniform" name="entry_city_select" id="entry_city_select" data-placeholder="City" data-allow-clear="true" data-msg="Please select your state" data-default="" data-skin="address-select" data-width="378" style="display: none;"></select><div class="select-container select-container-default address-select" id="select-container-151941052759327335" style="min-width: 378px; width: 378px;">	<div class="selection">		<div class="select-selection select-selection-single">			<span class="select-selection-rendered" id="select-151941052759327335-container" title=""><span class="select-selection-placeholder">City</span></span>			<span class="select-selection-arrow select-selection-arrow-triangle">				<b></b>			</span>		</div>	</div></div>
						</div>
						<div class="input-city-wrap ">
							<input name="city" id="entry_city" value="" msg="Please enter your city name" datatype="text" require="true" autocomplete="off" placeholder="City">
						</div>
						<input type="hidden" name="city_id" id="entry_city_id" value="">
					</div>
					<b>*</b>
				</div>
				<div class="inputbox">
					<s>Shipping Address: </s>
					<input name="address" id="entry_address" value="" msg="Please enter your shipping address" datatype="text" require="true" autocomplete="off" placeholder="Address">
					<b>*</b>
				</div>
				<div class="inputbox">
					<s>Shipping Address2: </s>
					<input name="address2" id="entry_address2" value="" datatype="text" require="true" autocomplete="off" placeholder="Address 2">
				</div>
				<div class="inputbox">
					<s>ZIP/postal code: </s>
					<input name="postcode" id="entry_postcode" msg="Please enter your postal code" max-msg="You can write a maximum of 10 characters." value="" datatype="text" require="true" autocomplete="off" placeholder="ZIP/postal code" data-placeholder="ZIP/postal code">
					<b>*</b>
				</div>
				<div class="checkbox">
					<span id="check_on"></span>
					<b>Set this as your default shipping address</b>
					<input id="checkbox_default" type="hidden" value="0" name="default">
				</div>
				<input type="hidden" name="addr_id" id="address_book_id" value="0">
								
				
										</form>
						<div class="btn">
							<span class="submit" id="saveAddress">Save</span>
							<span class="cancel">Cancel</span>
						</div>
					</div>
					<div class="address_list" id="address_list">
										</div>
								</div>
  </div>
</template>

<script>
export default {
mounted()
{
    $(".checkbox").on("click",function(){
					if($(".checkbox").find("#check_on").hasClass("check_on")){
						$(".checkbox").find("#check_on").removeClass("check_on");
						$("#checkbox_default").val(0);
					}else{
						$(".checkbox").find("#check_on").addClass("check_on");
						$("#checkbox_default").val(1);
					}
				});
}
}
</script>

<style>

</style>
