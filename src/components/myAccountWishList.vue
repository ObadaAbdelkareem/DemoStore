<template>
<div>
  <div class="order_form_title">
            	<h3>My wishlist</h3>
            </div>
            <div class="wish_item">
                <div class="member_mod">
                    <div class="member_mod_content">
                                                <div class="wi_wish">
                            <div class="wish_head">
                                <div class="wish_head_l">
                                    <li class="drops_items">
                                        <i class="wi_icon"></i> <span>Items With Price Drops</span>
                                    </li>
                                    <li class="cat_lst">
                                        <span class="cat"></span>
                                        <select name="categories" id="categories" style="width: 150px;" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                                            <option value="">All categories</option>
                                                                                        <option value="1457178"> Men</option>
                                                                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" style="width: 150px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-categories-container"><span class="select2-selection__rendered" id="select2-categories-container" title="All categories">All categories</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                    </li>
                                </div>
                                <ul class="wish_head_r">
                                    <li>
                                        <input type="text" name="product" placeholder="Product Name">
                                        <i class="product_sumt wi_icon"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="wish_cont">
                                <table id="wish_tab" data-tab="wish">
                                    <tbody>
                                                                        <tr id="1029010">
                                        <td class="wi_piclst sim_lst_pic">
                                            <a target="_self" href="">
                                                <img src="https://img.newchic.com/thumb/list_grid/oaupload/newchic/images/2A/92/0bc1aef3-477a-3e7b-79cb-907b3a18bad5.jpg" alt="">
                                            </a>
                                                                                        <div class="similar-wrap wish-similar-wrap">

                                            </div>
                                        </td>
                                        <td width="400">
                                            <ul class="wi_art">
                                                <li class="good_tip "><a target="_blank" href="" class="wi_goods">Men's Lightweight Loose Yoga Pants Morning Practice Cozy Sports Pants</a></li>
                                                <li>
                                                    <p class="wi_icon red_start"><i class="wi_icon start_bg" style="width: 97%;"></i></p>
                                                    <span class="re_number">(4.85)</span>
                                                </li>
                                                <li class="price_all">
                                                    <span class="price real_price" oriprice="10.4"> US$10.40</span>
                                                                                                                                                        </li>
                                                <li class="smiry get_similar" data-id="1029010">
                                                    <span> Similar Products <i class="smiry_icon"></i></span>
                                                </li>
                                            </ul>
                                        </td>
                                        <td class="text-center">
                                            <span class="wi_btn dele_wish"><i class="wi_del wi_icon"></i>Remove</span>
                                        </td>
                                        <td class="text-center">
                                                                                        <a target="_blank" class="wi_btn" href=""><i class="wi_add wi_icon"></i>ADD TO BAG</a>
                                                                                    </td>
                                    </tr>
                                                                        </tbody>
                                </table>
                            </div>
                        </div>
                                                                    </div>
                </div>
                     


   
                       </div>
                       </div>
</template>

<script>
export default {

}
</script>

<style>
.order_form_right .member_mod {
  border: none;
}
.member_mod_content .order_wish {
  border-top: 0px #dedede solid;
}
.wi_wish .any_cont {
  display: inline-block;
  color: #666;
  padding: 0 4px;
}
.wi_wish .any_cont p {
  display: inline-block;
  color: #e30057;
}
.wi_wish .any_cont p .padd_line {
  margin: 0 2px;
}
.wi_wish .opacity_out {
  opacity: 0.5;
  cursor: default;
}
.wi_wish .opacity_out:hover {
  text-decoration: none;
  cursor: default !important;
}
.wi_wish .orange_out {
  color: #ff6600;
}
.wi_wish .orange_out .smiry_icon:before {
  border-color: #ff6600 transparent transparent !important;
}
.wi_wish .opacity_out:hover {
  text-decoration: none;
  cursor: default !important;
}
.wi_wish .wi_icon {
  background-image: url(../../static/assets/images/sprite_home.png);
  display: inline-block;
  vertical-align: middle;
}
.wi_wish .wish_head {
  background: #f5f5f5;
  height: 48px;
}
.wi_wish .wish_head .wish_head_l {
  float: left;
}
.wi_wish .wish_head .wish_head_l li {
  height: 48px;
  display: inline-block;
}
.wi_wish .wish_head .wish_head_l .drops_items,
.wi_wish .wish_head .wish_head_l .cat {
  line-height: 48px;
  vertical-align: middle;
}
.wi_wish .wish_head .wish_head_l .drops_items {
  margin-left: 16px;
  cursor: pointer;
}
.wi_wish .wish_head .wish_head_l .drops_items i {
  background-position: -130px -916px;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.wi_wish .wish_head .wish_head_l li.active i {
  background-position: -158px -916px;
}
.wi_wish .wish_head .wish_head_l .cat {
  padding-right: 10px;
}
.wi_wish .wish_head .wish_head_l .cat_lst {
  padding-left: 50px;
}
.wi_wish .wish_head .wish_head_r {
  float: right;
  padding-right: 10px;
}
.wi_wish .wish_head .wish_head_r > li {
  position: relative;
}
.wi_wish .wish_head .wish_head_r input[name="product"] {
  border: 1px solid #dedede;
  height: 28px;
  line-height: 28px;
  padding: 0 26px 0 16px;
  margin-top: 10px;
  width: 210px;
}
.wi_wish .wish_head .wish_head_r .product_sumt {
  display: inline-block;
  background-position: -6px -33px;
  background-repeat: no-repeat;
  width: 19px;
  height: 20px;
  position: absolute;
  right: 8px;
  top: 14px;
  cursor: pointer;
}
.wi_wish .wish_cont .wi_goods:hover {
  text-decoration: underline;
}
.wi_wish .wish_cont .real_price {
  font-size: 14px;
  font-weight: 600;
}
.wi_wish .wish_cont .drop_price_all {
  margin-left: 8px;
  color: #e33057;
  background: #fdeff2;
  padding-right: 4px;
  display: inline-block;
}
.wi_wish .wish_cont .drop_price_all > i {
  margin-right: 6px;
  vertical-align: text-top;
  margin-left: 4px;
}
.wi_wish .wish_cont .good_tip a {
  color: #333;
  line-height: 1.2;
}
.wi_wish .wish_cont .good_tip a:hover {
  color: #000;
}
.wi_wish .wish_cont .price {
  line-height: 16px;
  display: inline-block;
}
.wi_wish .wish_cont .drop_icon {
  /* background: url("../../static/assets/images/down_03.png") center center no-repeat; */
  display: inline-block;
  width: 6px;
  height: 13px;
}
.wi_wish .wish_cont .wi_btn {
  cursor: pointer;
}
.wi_wish .wish_cont > table {
  width: 100%;
  color: #666;
}
.wi_wish .wish_cont > table tr {
  border-bottom: 1px solid #eeeeee;
}
.wi_wish .wish_cont .wi_del {
  background: url("../../static/assets/images/wi_cons_del.png") center center no-repeat;
  width: 17px;
  height: 17px;
  margin-right: 5px;
}
.wi_wish .wish_cont .wi_btn.del_active .wi_del {
  /* background: url("../../static/assets/images/red_cons_del.png") center center no-repeat; */
}
.wi_wish .wish_cont .wi_add {
  background: url("../../static/assets/images/wi_cons_add.png") center center no-repeat;
  width: 15px;
  height: 17px;
  margin-right: 5px;
}
.wi_wish .wish_cont td {
  padding: 20px 10px;
}
.wi_wish .wish_cont td:last-child {
  padding-right: 20px;
}
.wi_wish .wish_cont td:first-child {
  padding-left: 20px;
  width: 120px;
}
.wi_wish .wish_cont .re_number {
  color: #999;
  vertical-align: middle;
}
.wi_wish .wish_cont .wi_piclst {
  position: relative;
}
.wi_wish .wish_cont .wi_piclst img.wi_pic {
  max-width: 120px;
}
.wi_wish .wish_cont .wi_piclst > a {
  line-height: 0;
}
.wi_wish .wish_cont .wi_piclst > a > img {
  max-width: 120px;
  max-height: 120px;
}
.wi_wish .wish_cont .wi_piclst .sel_cover {
  position: absolute;
  left: 20px;
  top: 50%;
  height: 120px;
  width: 120px;
  margin-top: -60px;
  background: rgba(255, 255, 255, 0.5);
}
.wi_wish .wish_cont .wi_piclst .sel_cover p {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  height: 120px;
  width: 120px;
}
.wi_wish .wish_cont .wi_piclst .sel_out {
  line-height: 28px;
  padding: 0 10px;
  border: 1px solid #333;
  color: #333;
  background: #fff;
  display: inline-block;
  text-transform: uppercase;
}
.wi_wish .wish_cont .wi_art li.price_all {
  padding-bottom: 10px;
}
.wi_wish .wish_cont .wi_art {
  display: inline-block;
  min-height: 120px;
}
.wi_wish .wish_cont .wi_art .start_bg {
  background-position: -94px -10px;
  background-repeat: no-repeat;
  width: 79px;
  height: 14px;
  position: absolute;
}
.wi_wish .wish_cont .wi_art > li {
  padding-bottom: 18px;
}
.wi_wish .wish_cont .wi_art .smiry {
  padding-bottom: 0;
  display: inline-block;
  cursor: pointer;
  line-height: 20px;
}
.wi_wish .wish_cont .wi_art .smiry_icon {
  vertical-align: middle;
  display: inline-block;
  height: 10px;
  width: 10px;
  position: relative;
}
.wi_wish .wish_cont .wi_art .smiry_icon:after,
.wi_wish .wish_cont .wi_art .smiry_icon:before {
  position: absolute;
  content: ' ';
  display: block;
  width: 0;
  height: 0;
  top: 2px;
  left: 0px;
}
.wi_wish .wish_cont .wi_art .smiry_icon:before {
  border: 5px solid;
  border-color: #818181 transparent transparent;
}
.wi_wish .wish_cont .wi_art .smiry_icon:after {
  margin-top: -2px;
  border: 5px solid;
  border-color: #fff transparent transparent;
}
.wi_wish .wish_cont .wi_art .red_start {
  position: relative;
  top: 0;
  left: 0;
  background-position: -94px -30px;
  background-repeat: no-repeat;
  width: 79px;
  height: 14px;
}
.select2-container--default .select2-selection--single {
  border: 1px solid #dddddd;
  border-radius: 0;
  height: 28px;
  line-height: 28px;
}
.select2-dropdown {
  border-radius: 0;
}
.select2-container--default .select2-search--dropdown .select2-search__field {
  border: 1px solid #dddddd;
}
.select2-dropdown {
  border-color: #ddd;
}
.select2-container--default .select2-selection--single .select2-selection__rendered {
  height: 28px;
  line-height: 28px;
}
.select2-container--default .select2-selection--single .select2-selection__arrow {
  /*top: 8px;*/
}
.select2-container--default .select2-results__option--highlighted[aria-selected] {
  background: #efeded;
  color: #333;
}
.select2-container--default .select2-selection--single .select2-selection__arrow b {
  display: none !important;
}
.smiry_icon:after,
.smiry_icon:before {
  position: absolute;
  content: ' ';
  display: block;
  width: 0;
  height: 0;
  top: 2px;
  left: 0px;
}
.select2-container--default .select2-selection--single .select2-selection__arrow:before {
  border: 5px solid;
  border-color: #333 transparent transparent;
}
.select2-container--default .select2-selection--single .select2-selection__arrow:after {
  margin-top: -2px;
  border: 5px solid;
  border-color: #fff transparent transparent;
}
.select2-container--default .select2-selection--single .select2-selection__arrow:after,
.select2-container--default .select2-selection--single .select2-selection__arrow:before {
  position: absolute;
  content: ' ';
  display: block;
  width: 0;
  height: 0;
  top: 12px;
  left: 50%;
  margin-left: -5px;
}
.select2-container--default .select2-selection--single .select2-selection__rendered {
  color: #333;
}
/*.select2-container--default .select2-results__option--highlighted[aria-selected]{
  background:#f5f5f5;
}*/
.member_mod_content .order_wish .checkbox {
  padding-left: 16px;
}
.select2-container .select2-selection--single .select2-selection__rendered {
    display: block;
    padding-left: 8px;
    padding-right: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.select2-container .select2-selection--single {
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    height: 28px;
    user-select: none;
    -webkit-user-select: none;
}
.select2-container {
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    position: relative;
    vertical-align: middle;
}
.select2-hidden-accessible {
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
}
</style>
