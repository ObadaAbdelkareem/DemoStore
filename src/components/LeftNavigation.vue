<template>
<!--English-->
<div class="navigation_left">
    <dl>
        <dt>Customer Care</dt>
        <dd>

            <router-link to="/helpCenter/returnAndRefund">Return &amp; Refund</router-link>
            <router-link to="/helpCenter/shippingFAQ">Shipping FAQ</router-link>
            <router-link to="/helpCenter/orderFAQ">Order FAQ</router-link>
            <router-link to="/helpCenter/shippingMethods">Shipping Methods</router-link>
            <router-link to="/helpCenter/paymentMethods">Payment Methods</router-link>
        </dd>
        <dt>About Newchic</dt>
        <dd>

            <router-link id="aboutUs" to="/helpCenter">About Us</router-link>

            <router-link to="/helpCenter/privacyPolicy">Privacy Policy</router-link>
            <router-link to="/helpCenter/termsAndConditions">Terms And Conditions</router-link>

        </dd>
        <dt>Cooperation</dt>
        <dd>
            <router-link id="aboutUs" to="/helpCenter/wholesaleProgram">Wholesale Program</router-link>
        </dd>
    </dl>
</div>
</template>

<script>
export default {
  name: "LeftNavigation",
  data:{
    en: false
  }
};
</script>
<style>
.router-link-exact-active.router-link-active{
    color: #e33057;
    font-weight: bold; 
}
</style>

