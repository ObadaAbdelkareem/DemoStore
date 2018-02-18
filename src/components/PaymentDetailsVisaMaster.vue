<template>
<div class="container group">
            <!-- MOBILE VIEW -->
<div id="mobile">
    <ul class="totalamount">
        <li><h2>Total amount</h2></li>
        <p>$217.44</p>
    </ul>
    <div id="cancel-order-dialog" style="display: none" title="Cancel Order" role="alertdialog" aria-describedby="dialog_description">
  <span id="dialog_description">
    Are you sure you want to cancel your order?
  </span>
</div>
        <div id="change_payment_method_placeholder"></div>


</div>
          <!--  <script src="/assets/aria-b9b66ad769cab72c03aa26423151346c.js"></script>-->




<form novalidate="novalidate" autocomplete="off" role="form" action="/checkout_update" accept-charset="UTF-8" method="post" id="formId_0100111862499939821517941605703"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="7XAm1kaCh6ACJVlVLUTUdehTVjbDTcvBYdL7xpsPlM83j+U+beX2N5qSJEOzxPJ3+I6zkYYs42NE+04sTLpFSg==">
    <input type="hidden" name="session_uuid" id="session_uuid" value="fdf3e3a4a0e94af5ad5e19c7287a0ead">


    <div class="left_column" id="payment_details">
        <h1 class="single_secure">Payment Details</h1>

            <div id="required_field_explanation">
                <span id="required_field_char"> * </span> Required field
            </div>




        <div id="payment_type">
        <input type="hidden" name="payment_method" id="payment_method">
</div>
        <div id="payment_type_card" class="hide" style="display: block;">
    <fieldset>
        <legend><span>Payment Details</span></legend>
        <ol>
            <li>
                    <fieldset>
                        <legend><span>Card Type</span></legend>
                        <span class="input_label">Card Type *</span>
                        <ol id="card_type_selection" aria-required="true" class="group">
                                <li>
                                    <input type="radio" name="card_type" id="card_type_001" value="001">
                                    <label for="card_type_001">Visa</label>
                                </li>
                                <li>
                                    <input type="radio" name="card_type" id="card_type_002" value="002">
                                    <label for="card_type_002">Mastercard</label>
                                </li>
                        </ol>
                    </fieldset>
                
            </li>
            <li>
                <label for="card_number_masked">Card Number *</label>
                <input type="text" id="card_number_masked" name="card_number_masked" value="" class="" style="display: none;"><input type="tel" name="card_number" id="card_number" value="" class="" aria-required="true" x-autocompletetype="cc-number">
                
            </li>
            <li id="card_cvn_line">
                <label for="card_cvn_masked">CVN</label>
                <div class="legend">This code is a three or four digit number printed on the back or front of credit cards.</div>
                <input type="text" id="card_cvn_masked" name="card_cvn_masked" value="" class="" style="display: none;"><input type="tel" name="card_cvn" id="card_cvn" value="" maxlength="4" class="" aria-required="false">
                <img id="card_cvn_hint" alt="CVN" src="/assets/creditcards/cvn-3808726b7775e9b00babaa3728be3468.png">
                
            </li>
            <li>
                <label for="card_expiry_month">Expiration Date *</label>
                <span id="card_expiry_date">
                    <label id="lbl_card_expiry_month" class="hidden_label" tabindex="-1">Expiration Date *: Month</label>
                    <select name="card_expiry_month" id="card_expiry_month" aria-required="true" aria-labelledby="lbl_card_expiry_month" class="" tabindex="0"><option selected="selected" disabled="disabled" value=""></option>
<option value="01">01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="02">02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="03">03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="04">04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="05">05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="06">06&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="07">07&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="08">08&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="09">09&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="10">10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="11">11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="12">12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option></select>
                    <label id="lbl_card_expiry_year" class="hidden_label" tabindex="-1">Expiration Date *: Year</label>
                    <select name="card_expiry_year" id="card_expiry_year" aria-required="true" aria-labelledby="lbl_card_expiry_year" class="" tabindex="0"><option selected="selected" disabled="disabled" value=""></option>
<option value="2018">2018&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2019">2019&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2020">2020&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2021">2021&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2022">2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2023">2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2024">2024&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2025">2025&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2026">2026&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2027">2027&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2028">2028&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2029">2029&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2030">2030&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2031">2031&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2032">2032&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2033">2033&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2034">2034&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2035">2035&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2036">2036&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2037">2037&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2038">2038&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option>
<option value="2039">2039&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</option></select>
                </span>
                
            </li>
        </ol>
    </fieldset>
</div>



            <div class="purchases_mobile">
                <div class="hgroup">
  <h1>Your Order</h1>
</div>
<!-- HGROUP CLOSED -->
<div id="amounts" class="purchases">
    <ul class="totalamount">
        <li><h2>Total amount</h2></li>
        <p>$217.44</p>
    </ul>

    <div id="cancel-order-dialog" style="display: none" title="Cancel Order" role="alertdialog" aria-describedby="dialog_description">
  <span id="dialog_description">
    Are you sure you want to cancel your order?
  </span>
</div>

        <div id="change_payment_method_placeholder"></div>


</div> <!-- PURCHASES CLOSED -->

            </div>

                <input class="left cancelbutton" type="button" value="Cancel">

                <input type="submit" name="commit" value="Pay" class="right complete pay_button">
<input name="customer_utc_offset" type="hidden" value="-120">
<!--<script type="text/javascript">
    $('input[name="customer_utc_offset"]').val( new Date().getTimezoneOffset() );
</script>-->
    <!-- BEGIN: Threatmatrix Page Tag -->
<p style="background:url(https://tm.cybersource.com/fp/clear.png?org_id=k8vif92e&amp;session_id=fdf3e3a4a0e94af5ad5e19c7287a0ead8994D6AB-A9C8-43E7-8826-B6A8F68CFF53&amp;m=1)">
</p>

<img style="width:1px;height:1px" src="https://tm.cybersource.com/fp/clear.png?org_id=k8vif92e&amp;session_id=fdf3e3a4a0e94af5ad5e19c7287a0ead8994D6AB-A9C8-43E7-8826-B6A8F68CFF53&amp;m=2" alt="">
<!--
<script src="https://tm.cybersource.com/fp/check.js?org_id=k8vif92e&amp;session_id=fdf3e3a4a0e94af5ad5e19c7287a0ead8994D6AB-A9C8-43E7-8826-B6A8F68CFF53" type="text/javascript">
</script>
-->
<!--
<object type="application/x-shockwave-flash" data="https://tm.cybersource.com/fp/fp.swf?org_id=k8vif92e&amp;session_id=fdf3e3a4a0e94af5ad5e19c7287a0ead8994D6AB-A9C8-43E7-8826-B6A8F68CFF53" width="1" height="1" id="obj_id">
    <param name="movie" value="https://tm.cybersource.com/fp/fp.swf?org_id=k8vif92e&amp;session_id=fdf3e3a4a0e94af5ad5e19c7287a0ead8994D6AB-A9C8-43E7-8826-B6A8F68CFF53">
    <div></div>
</object>
<!-- END: Threatmatrix Page Tag -->

<!-- BEGIN: InAuth Page Tag -->
<!--
<script type="text/javascript">
    var _cc = _cc || [];
    _cc.push(['ci', {'sid': '535872f71c154612a93e92cbd74c9c08', 'tid': 'fdf3e3a4a0e94af5ad5e19c7287a0ead8994D6AB-A9C8-43E7-8826-B6A8F68CFF53'}]);
    _cc.push(['run', ('https:' == document.location.protocol ? 'https://' : 'http://') + "www.cdn-net.com"]);
    (function() {
        var c = document.createElement('script'); c.type = 'text/javascript'; c.async = true;
        c.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "www.cdn-net.com/cc.js";
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(c, s);
    })();
</script>

<noscript>
    &lt;img src="https://www.cdn-net.com/s1.gif?sid=535872f71c154612a93e92cbd74c9c08&amp;tid=fdf3e3a4a0e94af5ad5e19c7287a0ead8994D6AB-A9C8-43E7-8826-B6A8F68CFF53"/&gt;
</noscript>-->
<!-- END: InAuth Page Tag -->


    </div>
</form>
    <div class="right_column right_column_spc">
        <div class="hgroup">
  <h1>Your Order</h1>
</div>
<!-- HGROUP CLOSED -->
<div id="amounts" class="purchases">
    <ul class="totalamount">
        <li><h2>Total amount</h2></li>
        <p>$217.44</p>
    </ul>

    <div id="cancel-order-dialog" style="display: none" title="Cancel Order" role="alertdialog" aria-describedby="dialog_description">
  <span id="dialog_description">
    Are you sure you want to cancel your order?
  </span>
</div>

        <div id="change_payment_method_placeholder"></div>


</div> <!-- PURCHASES CLOSED -->

    </div>

        </div>
</template>

<script>

export default {
  name: 'PaymentDetailsVisaMaster',
  data () {
    return {

      }
    },
  beforeMount () {
   
  }
}
</script> 

<style> 

</style> 