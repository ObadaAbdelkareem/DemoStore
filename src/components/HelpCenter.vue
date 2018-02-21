<template>
<div class="wrap edts_form_contactus help_center_all">
    <div class="content_box clearfix">
        <leftNavigation></leftNavigation>
        <router-view></router-view>
    </div>
</div>
</template>


<script>
import leftNavigation from '@/components/leftNavigation'
export default {
  name: 'helpCenter',
  components:
  {
    leftNavigation

  }
  
  };

</script>
<style>
.help_center_all{
   margin-top: 36px;
}

</style>
