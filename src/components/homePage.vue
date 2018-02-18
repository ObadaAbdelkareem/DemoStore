<template> 
<div>
    <homeHeader></homeHeader>
    <imagesliderHomePage></imagesliderHomePage>
    <categoryHomePage></categoryHomePage>
  </div>
</template>

<script> 
import homeHeader from '@/components/homeHeader.vue'
import imagesliderHomePage from '@/components/imagesliderHomePage.vue'
import categoryHomePage from '@/components/categoryHomePage.vue'
import homefooter from '@/components/homefooter.vue'

export default {
  name: 'homePage',
  components: {
      homeHeader,
      imagesliderHomePage,
      categoryHomePage,
      homefooter
      
    },
  data () {
    return {

    }
  }
}
</script> 

<style> 
</style>