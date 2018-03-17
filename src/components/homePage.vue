<template> 
<div>
    
    <imagesliderHomePage></imagesliderHomePage>
    <categoryHomePage></categoryHomePage>
  </div>
</template>

<script> 
import homeHeader from '@/components/homeHeader.vue'
import imagesliderHomePage from '@/components/imagesliderHomePage.vue'
import categoryHomePage from '@/components/categoryHomePage.vue'
import homefooter from '@/components/homefooter.vue'
import homePageService from '@/api/homePageService.js'

export default {
  name: 'homePage',
  components: {

      imagesliderHomePage,
      categoryHomePage,
      homefooter
      
    },
  data () {
    return {
    }
  },
  created: function(){
    // console.log(this.Test)
    // homePageService.getUsers().then(function(response){
    //   console.log(response.data)
    //   console.log(this)
    //   console.log(this.Test)
    // })
  }
}
</script> 

<style> 
</style>