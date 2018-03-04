<template>
  <div class="order_form_right my-colloca-container">
            
            <div class="order_form_title"> 
            	<h3>My Outfits</h3> 
                            </div> 

            <div class="collo-info clearfix">
                <div class="pull-left head-icon">
                    <img src="https://www.newchic.com/templates/default/images/touxiang.png" style="width: 110px; height: 110px; transition: all 0.5s; margin-top: 0px;">                </div>
                <div class="pull-left info-container">
                    <div class="info pull-left">
                        <p class="text">Hi! Write something about yourself, let us know more about you</p>
                        <textarea>Hi! Write something about yourself, let us know more about you</textarea>
                    </div>

                    <div class="edit pull-left">
                        <i class="icon icon-pencil pointer btn-edit"></i>
                    </div>
                    <div class="clearfix text-right btn-group">
                        <span class="text-muted margin-rigth-10"><span class="red">*</span> You can write 3-300 words only</span>
                        <span class="margin-rigth-10"><span class="count">0</span> / 300</span>
                        <button type="button" class="btn btn-pink btn-sm btn-save">Submit</button>
                        <button type="button" class="btn btn-grey-gallery btn-sm btn-cancel">Cancel</button>
                    </div>
                </div>
            </div>
            
            <ul class="nav-tab-collocation nav nav-tabs">
                <li class="active"><a href="javascript:;" data-tab="#my-creations-container" data-url="/ajaxload/account-ajaxGetCollocationList.html?isAjax=1">Creations</a></li>
                <li><a href="javascript:;" data-tab="#my-collections-container" data-url="/ajaxload/account-ajaxGetCollocationList.html?isAjax=1">Collections</a></li>
            </ul>
            <div class="tab-content">
                <div id="my-creations-container" class="pane none" style="display: block;">
                    <div class="my_colloc" style="position: relative;">
                        <p class="no-message none" style="display: block;">You haven't created any collocation yet. Match your own style now!</p>
                        <ul class="w1000"><div class="no_information"></div>
</ul>
                    </div><div>     


   
           </div>
                </div>
                <div id="my-collections-container" class="pane none" style="display: none;">
                    <div class="my_colloc ">
                        <p class="no-message none">You have not collected any collaction yet,<a href="" target="_blank" class="red text-undeliner">explore some</a></p>
                        <ul class="w1000">
                            
                        </ul>
                    </div>
                </div>
            </div>
            
            

            <div>
                <div class="creat_outfit creat-outfit ">
                    <i></i>
                    <p>CREATE MY OUTFIT</p>
                </div>
            </div>
            
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
