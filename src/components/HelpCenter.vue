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

  },
mounted: function()
  {
    
      Array.from(document.getElementsByClassName('title')).forEach(element => {
             
               element.addEventListener('click', function(){
                 if(element.parentElement.parentElement.classList.contains('active'))
                 {
                        
                        element.parentElement.parentElement.classList.remove('active');
                 }
                 else{
                   
                       element.parentElement.parentElement.classList.add('active');

                 }
                 
               });
             
      });
    
  },
 updated(){
  
   if(window.location.href.includes("helpCenter"))
   {
    
 Array.from(document.getElementsByClassName('title')).forEach(element => {
              
               element.addEventListener('click', function(){
                 if(element.parentElement.parentElement.classList.contains('active'))
                 {
                        
                        element.parentElement.parentElement.classList.remove('active');
                 }
                 else{
                   
                       element.parentElement.parentElement.classList.add('active');

                 }
                 
               });
             
      });
    
 }
   }
 
  };

</script>
<style>
.help_center_all{
   margin-top: 36px;
}

</style>
