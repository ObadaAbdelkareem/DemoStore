<template>
<div class="wrap">
        <div class="carouse_swipe index-banner-container" style="min-height: 200px; visibility: visible;">
          <div class="carouse_swipe_box add_favorites">
            <ul style="width: 4800px; height: 480px; overflow: hidden;">
              <li data-index="0" style="width: 1200px; left: 0px; transition-duration: 0ms; transform: translate(1200px, 0px) translateZ(0px);"><router-link to="/Home/Slides/HomePageSlideOne"><img src="../../static/assets/images/493_1517371296_792.jpg" data-original="../../static/assets/images/493_1517371296_792.jpg" class="fall_lazy"></router-link></li>
              <li data-index="1" style="width: 1200px; left: -1200px; transition-duration: 300ms; transform: translate(-1200px, 0px) translateZ(0px);"><router-link to="/Home/Slides/HomePageSlideTwo"><img src="../../static/assets/images/493_1517385660_60.gif" data-original="../../static/assets/images/493_1517385660_60.gif" class="fall_lazy"></router-link></li>
              <li data-index="2" style="width: 1200px; left: -2400px; transition-duration: 300ms; transform: translate(-1200px, 0px) translateZ(0px);"><router-link to="/Home/Slides/HomePageSlideThree"><img src="../../static/assets/images/607_1517191426_8.jpg" data-original="../../static/assets/images/607_1517191426_8.jpg" class="fall_lazy"></router-link></li>
              <li data-index="3" style="width: 1200px; left: -3600px; transition-duration: 300ms; transform: translate(0px, 0px) translateZ(0px);"><router-link to="/Home/Slides/HomePageSlideFour"><img src="../../static/assets/images/226_1517195850_66.jpg" data-original="../../static/assets/images/226_1517195850_66.jpg" class="fall_lazy"></router-link></li>
            </ul>
          </div>
          <ul class="carouse_btn">
            <li class="prev onhover" onclick=""><i></i></li>
            <li class="next onhover" onclick=""><i></i></li>
          </ul>
          <ul class="carouse_tab">
            <li class=""><i></i></li>
            <li class=""><i></i></li>
            <li class=""><i></i></li>
            <li class="active"><i></i></li>
          </ul>
        </div>
       
        
           </div>
</template>

<script>
import MoltinService from '../services/moltin.js'

export default {
  name: 'imagesliderHomePage',
  created () 
  {

    
  },
  data () {
    return {
      products: {}
    }
  },
  beforeMount () {
    
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  </style>
