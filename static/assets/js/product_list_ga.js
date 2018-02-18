//1、过滤项模块整块 ：fitter
//2、过滤项中的 ：category
function set_filter_ga(url,category_name){
	var gasource = $('#gasource').attr("data-gasource");
	ga('send', 'event', gasource, 'Fitter', category_name, 1);
	// if(category_name == 'Categories'){
	// 	ga('send', 'event', gasource, 'Categories', 'Categories', 1);
	// }
}
//5、排序选择：sort
function set_sort_ga(url,value){
	var gasource = $('#gasource').attr("data-gasource");
	// var sort_name = $(e).html();
	switch (value)
	{
		case 1:
	  		sort_name = 'Most Popular';
		  break;
		case 2:
	  		sort_name = 'New Arrival';
		  break;
		case 3:
	  		sort_name = 'Price High to Low';
		case 6:
	  		sort_name = 'Price Low to High';
		  break;
		case 7:
	  		sort_name = 'Recommend';
		  break;
		default:
		 	sort_name = 'Sort';
	}
	// alert(sort_name);
	ga('send', 'event', gasource, 'Sort', sort_name, 1);
	// window.location.href = url;
}
//6、显示个数：amount
function set_amount_ga(url){
	var gasource = $('#gasource').attr("data-gasource");
	ga('send', 'event', gasource, 'Amount', 'Amount', 1);
}
//7、顶部分类切换上、下一页：top next page
function set_top_next_page_ga(url){
	var gasource = $('#gasource').attr("data-gasource");
	ga('send', 'event', gasource, 'Top Next Page', 'Top Next Page', 1);
}
//8、加入收藏夹 ：add to wishlists
// function set_add_wishlists_ga(url,gasource){
// 	ga('send', 'event', gasource, 'Add To Wishlists', 'Add To Wishlists', 1);
// }
//9、底部分类切换上、下一页：bottom next page
function set_bottom_next_page_ga(url){
	var gasource = $('#gasource').attr("data-gasource");
	ga('send', 'event', gasource, 'Bottom Next Page', 'Bottom Next Page', 1);
}
//10、搜索词推荐模块：recommend word（这个模块是搜索页面才有的）
function set_recommend_word_ga(url){
	var gasource = $('#gasource').attr("data-gasource");
	ga('send', 'event', gasource, 'Recommend Word', 'Recommend Word', 1);
}

//Unused Coupons
function set_my_coupons_ga(name){
	ga('send', 'event', name, name, '', 1);
}

//首页 ga
function set_home_ga(name){
	ga('send', 'event', 'Newchic - HomePage', name, '', 1);
}

//Terms and Conditions ga
function set_terms_conditions_ga(name){
	ga('send', 'event', 'Conditions', name, '', 1);
}

//APP ga
function set_app_ga(name){
	ga('send', 'event', 'APP', name, '', 1);
}


function set_search_ga(name){
	// alert(name);
	ga('send', 'event', 'search', name, '', 1);
}

function set_like_page_ga(name){
	ga('send', 'event', 'likePage', name, '', 1);
}

function set_navigation_ga(name){
    ga('send', 'event', 'navigation', name, '', 1);
}

function set_womens_clothing_ga(name){
    ga('send', 'event', 'womens-clothing', name, '', 1);
}

function set_alabo_ga(name){
    ga('send', 'event', 'Middle East', name, '', 1);
}


function set_seckill_address_ga(name){//SnapUpDefaultAddressClick
    ga('send', 'event', 'seckill', name, '', 1);
}

function set_seckill_process_ga(name){//SnapUpProcessClick
    ga('send', 'event', 'seckill', name, '', 1);
}

function set_seckill_unstart_ga(name){//SnapUpUnStartCheckoutButtonClick 
    ga('send', 'event', 'seckill', name, '', 1);
}

function set_seckill_checkout_ga(name){//SnapUpCheckoutButtonClick 
    ga('send', 'event', 'seckill', name, '', 1);
}

function set_seckill_banner1_ga(name){//PayResultPageBanner1Click 
    ga('send', 'event', 'seckill', name, '', 1);
}

function set_seckill_banner2_ga(name){//PayResultPageBanner2Click 
    ga('send', 'event', 'seckill', name, '', 1);
}

// 活动入口
function set_activity_enter_ga(className){
	ga('send', 'event', 'activity_index_icon', 'click', className, 1);
}