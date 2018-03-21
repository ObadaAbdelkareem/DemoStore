<template>
<div>
<div class="order_form_title">
            	<h3>My Orders</h3> 
                <ul>
                	                	<li><a href=""><i class="lottery_room_icon"></i> Lottery Activities <span class="red">(0)</span></a></li>                   
                                        <li><a href="javascript:;" class="open-live-chat"><i class="edt_icon_live_chat"></i> Live chat</a></li>
                    <li><a href=""><i class="rec_bins icon"></i>Recycle Bins</a></li>
                </ul>
            </div>
  <router-view :key="$route.fullPath"></router-view>
  <div class="pagination" pagenum="0" prev="Prev" next="Next"><span class="prev">Prev</span><span class="active">1</span><span class="next">Next</span><span class="goto"><input name="goto" value="" type="text"><i>Go to page</i></span></div>
</div>
</template>

<script>
export default {
    name: 'myOrders',
   
}
</script>

<style>

</style>
