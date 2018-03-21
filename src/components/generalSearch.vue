<template>

    <!--content begin-->
    <div class="wrap">
        <!-- <div class="wrap">
            <div class="nav_filters_cat">
                
            </div>
        </div> -->
        <!-- <div class="wrap">
            <div class="assisted_filters">
                <div class="filters_free in_block">
                    <a class="free_icon_all in_block" href="">
                        <i class="free_inpput filters_inpput in_block "></i>
                        <span>Free Shipping</span>
                    </a>
                </div>
                <div class="filters_ship in_block">
                    <a class="free_icon_all in_block" href="">
                        <i class="ship_inpput filters_inpput  in_block "></i>
                        <span>Ship in 24 hours</span>
                    </a>
                </div>
                <div class="filters_price in_block">
                    Price:
                    <p class="enter_num in_block">
                        <input type="text" placeholder="US$">
                        <span class="input_line">--</span>
                        <input class="filters_max" placeholder="US$" type="text">
                    </p>
                    <a class="price_sumt in_block" href="javascript:void(0);">OK</a>
                </div>
                <div class="nav_filters_selected assisted_selected in_block">
                    <h1>
                        <span>Most Popular</span>
                        <i class="slide_doc"></i>
                    </h1>
                    <ul class="hidden">
                        <li>
                            <a href="" onclick="set_sort_ga('',1)"
                                rel="nofollow">Most Popular</a>
                        </li>
                        <li>
                            <a href="" onclick="set_sort_ga('',2)"
                                rel="nofollow">New Arrival</a>
                        </li>
                        <li>
                            <a href="" onclick="set_sort_ga('',3)"
                                rel="nofollow">Price High to Low</a>
                        </li>
                        <li>
                            <a href="" onclick="set_sort_ga('',6)"
                                rel="nofollow">Price Low to High</a>
                        </li>
                        <li>
                            <a href="" onclick="set_sort_ga('',7)"
                                rel="nofollow">Recommend</a>
                        </li>
                    </ul>
                </div>
                <div class="filters_page">
                    <p class="in_block">
                        <span class="active">1</span>
                        <em>/</em>96</p>
                    <a href="" class="filters_page_next" onclick="set_top_next_page_ga('')">&gt;</a>
                </div>
            </div>
        </div> -->
        <div class="preOrder">
            <div class="preOrder_cont">
                <div class="tab_cont">
                  <ul class="clearfixes newlst_box" style="width: 1240px;">
    <li class="wom_lst_detail active" v-for="product of products" :key="product.name">
        <div class="wom_lst_all use_wom_lst">
            <div class="wom_lst_off">
                <p class="wom_lst_num">
                    <span>59</span>
                    <i>%</i>
                </p>
                <p class="off">OFF</p>
            </div>
            <div class="wom_lst_pic wom_lst_square">


                <!-- <router-link :to="`/ProductPage?product=`+product.code" target="_self">
                    <img :src="`http://bknd.alarabexpress.com/media/cache/sylius_shop_product_thumbnail/`+product.images[1].path" -->


                <router-link :to="{ path: '/ProductPage/'+product.id}" target="_self">
                    <img :src="product.images[0].src"

                        :alt="product.name" class="lazy reals" style="display: inline;">
                </router-link>

             <router-link :to="{ path: '/ProductPage/'+product.id}" target="_self">
                    <img :src="`http://bknd.alarabexpress.com/media/image/`+product.images[0].path"

                        :alt="product.name" class="lazy reals" style="display: inline;">
                </router-link>
                <!--"`http://bknd.alarabexpress.com/media/cache/sylius_shop_product_thumbnail/`+product.images[0].path"-->
            </div>
            <div class="wom_lst_btm">
                <h1 class="wom_lst_name ellipsis">
                    <i data-title="Slash Prices for Clearance Goods" data-skin="wom_lst_tips" data-placement="top" data-toggle="tooltip"
                        class="wom_lst_icon wom_icon_clearance"></i>
                    <router-link to="/ProductPage" :title="product.name"
                        target="_self">{{product.name}}</router-link>
                </h1>
                <p class="wom_price_lst">
                    <span class="price">{{product.price}} $</span>
                    <span class="like">
                        <!-- <a data-productsid="1201054" pid="1201054" data-title="Add to My Wishlist" data-skin="wom_lst_tips" data-placement="bottom"
                            data-toggle="tooltip" aria-describedby="tooltip1517865676497" class="like_a">
                            <i></i>
                        </a> -->
                    </span>
                </p>
            </div>
        </div>
        <!-- <div class="wom_lst_all alert_wom_lst hidden" style="display: none;">
            <div class="wom_lst_off">
                <p class="wom_lst_num">
                    <span>59</span>
                    <i>%</i>
                </p>
                <p class="off">OFF</p>
            </div>
            <div class="wom_lst_pic wom_lst_square">
                <a href="" target="_self">
                    <img src="https://img1.newchic.com/thumb/view/oaupload/banggood/images/92/CD/b9e9bd73-0f8c-4259-8ee7-293982fcde09.jpg"
                        data-original="https://img1.newchic.com/thumb/view/oaupload/banggood/images/30/AF/225d544d-6cd5-4075-8df1-a8d863f0c5bd.jpg"
                        alt="Women Nylon Waterproof Handbag " class="lazy reals" style="display: inline;">
                </a>
            </div>
            <div class="wom_pic_detail">
                <div class="prev chang disabled"></div>
                <div class="wom_pic_all">
                    <ul class="clearfix" style="position: absolute; width: 276px; left: 0px;">
                        <li class="wom_pic_li active">
                            <div>
                                <a href="" target="_blank">
                                    <img src="https://img2.newchic.com/thumb/list_grid/oaupload/banggood/images/92/CD/b9e9bd73-0f8c-4259-8ee7-293982fcde09.jpg"
                                        data-big-img="https://img1.newchic.com/thumb/view/oaupload/banggood/images/92/CD/b9e9bd73-0f8c-4259-8ee7-293982fcde09.jpg"
                                        alt="Women Nylon Waterproof Handbag " data-original="https://img2.newchic.com/thumb/list_grid/oaupload/banggood/images/92/CD/b9e9bd73-0f8c-4259-8ee7-293982fcde09.jpg">
                                </a>
                            </div>
                        </li>
                        <li class="wom_pic_li">
                            <div>
                                <a href="" target="_blank">
                                    <img src="https://img2.newchic.com/thumb/list_grid/oaupload/banggood/images/52/49/e0b3ddf8-a42d-4752-99ab-52cf6f804e1f.jpg"
                                        data-big-img="https://img.newchic.com/thumb/view/oaupload/banggood/images/52/49/e0b3ddf8-a42d-4752-99ab-52cf6f804e1f.jpg"
                                        alt="Women Nylon Waterproof Handbag " data-original="https://img2.newchic.com/thumb/list_grid/oaupload/banggood/images/52/49/e0b3ddf8-a42d-4752-99ab-52cf6f804e1f.jpg">
                                </a>
                            </div>
                        </li>
                        <li class="wom_pic_li">
                            <div>
                                <a href="" target="_blank">
                                    <img src="https://img2.newchic.com/thumb/list_grid/oaupload/banggood/images/5C/26/9106c45c-671b-4b59-aeb4-a720cbe3dab6.jpg"
                                        data-big-img="https://img.newchic.com/thumb/view/oaupload/banggood/images/5C/26/9106c45c-671b-4b59-aeb4-a720cbe3dab6.jpg"
                                        alt="Women Nylon Waterproof Handbag " data-original="https://img2.newchic.com/thumb/list_grid/oaupload/banggood/images/5C/26/9106c45c-671b-4b59-aeb4-a720cbe3dab6.jpg">
                                </a>
                            </div>
                        </li>
                        <li class="wom_pic_li">
                            <div>
                                <a href="" target="_self">
                                    <img src="https://img.newchic.com/thumb/list_grid/oaupload/banggood/images/30/AF/225d544d-6cd5-4075-8df1-a8d863f0c5bd.jpg"
                                        data-big-img="https://img1.newchic.com/thumb/view/oaupload/banggood/images/30/AF/225d544d-6cd5-4075-8df1-a8d863f0c5bd.jpg"
                                        alt="Women Nylon Waterproof Handbag " data-original="https://img.newchic.com/thumb/list_grid/oaupload/banggood/images/30/AF/225d544d-6cd5-4075-8df1-a8d863f0c5bd.jpg">
                                </a>
                            </div>
                        </li>
                        <li class="wom_pic_li">
                            <div>
                                <a href="" target="_self">
                                    <img src="https://img.newchic.com/thumb/list_grid/oaupload/banggood/images/F1/40/ff57aaba-9b8e-4680-9aa5-1b57a8a2784a.jpg"
                                        data-big-img="https://img.newchic.com/thumb/view/oaupload/banggood/images/F1/40/ff57aaba-9b8e-4680-9aa5-1b57a8a2784a.jpg"
                                        alt="Women Nylon Waterproof Handbag " data-original="https://img.newchic.com/thumb/list_grid/oaupload/banggood/images/F1/40/ff57aaba-9b8e-4680-9aa5-1b57a8a2784a.jpg">
                                </a>
                            </div>
                        </li>
                        <li class="wom_pic_li">
                            <div>
                                <a href="" target="_self">
                                    <img src="https://img1.newchic.com/thumb/list_grid/oaupload/banggood/images/03/5A/ac908b91-5810-485a-aa26-41fab82b948b.jpg"
                                        data-big-img="https://img.newchic.com/thumb/view/oaupload/banggood/images/03/5A/ac908b91-5810-485a-aa26-41fab82b948b.jpg"
                                        alt="Women Nylon Waterproof Handbag " data-original="https://img1.newchic.com/thumb/list_grid/oaupload/banggood/images/03/5A/ac908b91-5810-485a-aa26-41fab82b948b.jpg">
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="next chang"></div>
            </div>
            <div class="wom_lst_btm">
                <h1 class="wom_lst_name ellipsis">
                    <i data-title="Slash Prices for Clearance Goods" data-skin="wom_lst_tips" data-placement="top" data-toggle="tooltip"
                        class="wom_lst_icon wom_icon_clearance"></i>
                    <a href="" target="_self"
                        title="" women="" nylon="" waterproof="" handbag="">{{product.title}}</a>
                </h1>
                <p class="wom_price_lst">
                    <span oriprice="19.99" class="price">{{product.price}}</span>
                    <span class="like">
                        <a data-productsid="1201054" pid="1201054" data-title="Add to My Wishlist" data-skin="wom_lst_tips" data-placement="bottom"
                            data-toggle="tooltip" class="like_a">
                            <i></i>
                        </a>
                    </span>
                </p>
            </div>
        </div> -->
    </li>
</ul>
                </div>
            </div>
        </div>
        <div class="category_content clearfixes wrap_right" v-if="pages.length > 1" style="margin-top: 40px">
            <div class="page_num ">
                <router-link to="?page=1">1</router-link>
                <router-link :to="`?page=`+page" v-for="page of pages" :key="page">{{page}}</router-link>
               
                <router-link :to="`?page=`+currentPage" v-on:click.native="getTheNextPage">»</router-link>
            </div>
        </div>
    </div>
    <!--content end-->


</template>
<script>
  import Product from '@/api/ProductApi.js'

  import appConfig from '@/config'

export default {
  name: 'generalSearch',
  data () {
    return {
      products:[],
      pages: [],
      currentPage: 1,
    }
  },
  beforeMount () {
    
  },
  created(){
        var me = this 
         Product.searchProduct(this.$route.params.searchTerm).then(function(response){
          me.products=response.data
          console.log(response.data)
        })
       
  },
  methods: {
    getTheNextPage(){
         this.currentPage =  this.currentPage + 1 > this.pages.length + 1 ? this.currentPage : this.currentPage + 1;
    }
  },
    route: {
        canReuse: true,
    }
}
</script>

<style>
</style>
