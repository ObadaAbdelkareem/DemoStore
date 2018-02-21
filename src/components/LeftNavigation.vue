<template>
  <div class="navigation_left">
						<dl>
            <dt>Customer Care</dt>
        <dd>
                        
        <router-link v-on:click.native="activate" to="/helpCenter/returnAndRefund">Return &amp; Refund</router-link>
        <router-link v-on:click.native="activate" to="/helpCenter/shippingFAQ">Shipping FAQ</router-link>
        <router-link v-on:click.native="activate" to="/helpCenter/orderFAQ">Order FAQ</router-link>
        <router-link v-on:click.native="activate" to="/helpCenter/shippingMethods">Shipping Methods</router-link>
        <router-link v-on:click.native="activate" to="/helpCenter/paymentMethods">Payment Methods</router-link>
                    </dd>
            <dt>About Newchic</dt>
        <dd>
                 
        <router-link v-on:click.native="activate" id="aboutUs" to="/helpCenter">About Us</router-link>
                         
        <router-link v-on:click.native="activate" to="/helpCenter/privacyPolicy">Privacy Policy</router-link>
        <router-link v-on:click.native="activate" to="/helpCenter/termsAndConditions">Terms And Conditions</router-link>
                         
                    </dd>
                    <dt>Cooperation</dt>
                    <dd>
                              <router-link v-on:click.native="activate" id="aboutUs" to="/helpCenter/wholesaleProgram">Wholesale Program</router-link>
                    </dd>
            </dl>
  </div>
</template>

<script>
export default {
  name: "leftNavigation",
  mounted: function () {
    // `this` points to the vm instance
       if(!(event.target.id == "aboutUs" && window.location.href.endsWith("aboutUs")))
        {
           document.getElementById("aboutUs").classList.remove('router-link-exact-active');
           document.getElementById("aboutUs").classList.remove('router-link-active');
        }
    document.getElementById("aboutUs").classList.add('router-link-exact-active');
    document.getElementById("aboutUs").classList.add('router-link-active');

  },
  methods : {
    activate: function(event)
    {
  
        if(!(event.target.id == "aboutUs" && window.location.href.endsWith("aboutUs")))
        {
           document.getElementById("aboutUs").classList.remove('router-link-exact-active');
           document.getElementById("aboutUs").classList.remove('router-link-active');
        }
         
       
    }
  }
};
</script>
<style>
.router-link-exact-active.router-link-active{
    color: #e33057;
    font-weight: bold; 
}
</style>

