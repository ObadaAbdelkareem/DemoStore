<template>
  <div class="help_right margin-top-0">
	        	<div class="help_view">
	        							<div class="edt_wholesale">
						<div class="banner">
							<img src="../../static/assets/images/wholesale-banner.jpg" alt="">
						</div>
						<div class="whole_art">
							<h1 class="whole_title">Why Buy Wholesale From Us?</h1>
							<p>
								1.Small MOQ and safe payment. <br>
								2.Get wholesale discounts and one to one customer service. <br>
								3.The name or logo of our company will not be attached on the package,or on anywhere else.<br>
								<!--4.Buy speical wholesale products only for Wholesale Customers, please Click Here to view our wholesale products.<br>-->
							</p>
						</div>
						<div class="whole_art">
							<h1 class="whole_title">How to Become Our Certified Wholesale Customer?</h1>
							<p>
								Step 1: Register an account on our website, you can <a href="/LoginAndRegister" target="_blank">Click Here</a> to register.<br>
								Step 2: After registered, then <a href="">Click Here</a> to submit an application for Wholesale Account.<br>
								If any question or problem please contact us to get help, email: <a href="" class="link">wholesale@newchic.com</a><br>
							</p>
						</div>
						<div class="whole_art">
							<h1 class="whole_title">Our Wholesale Rules.</h1>
							<p>
								1.After you applied as our wholesale customer, you can get the discount based on your Order Amount , for detailed discount information please check the chart below.
							</p>
							<div class="table_all">
								<table>
									<thead>
									<tr>
										<td>Conditions</td>
										<td>Wholesale Discount</td>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>Join Wholesale, First Order, No Amount</td>
										<td>15%</td>
									</tr>
									<tr>
										<td>Order Amount 300 USD - 499 USD</td>
										<td>15%</td>
									</tr>
									<tr>
										<td>Order Amount 500 USD - 799 USD</td>
										<td>18%</td>
									</tr>
									<tr>
										<td>Order Amount 800 USD - 1199 USD</td>
										<td>20%</td>
									</tr>
									<tr>
										<td>Order Amount 1200 USD - 1799 USD</td>
										<td>  23%</td>
									</tr>
									<tr>
										<td>Order Amount 1800 USD - 2499 USD</td>
										<td>25%</td>
									</tr>
									<tr>
										<td>Order Amount 2500 USD - 2999 USD</td>
										<td>28%</td>
									</tr>
									<tr>
										<td> Order Amount 3000 USD - 3500 USD</td>
										<td>30%</td>
									</tr>
									</tbody>
								</table>
							</div>
							<p>
								2.Wholesale discounts do not apply to Promotional or Flash Deal items, and the Coupon cannot be used for wholesale orders.
							</p>
							<p>3.We reserve the right to explain the terms of the rules.</p>
						</div>
					</div>
				</div>
	        </div>
</template>

<script>
export default {
     name: 'wholesaleProgram'
}
</script>

<style>
.test_widt {
  width: 960px;
  margin: 0 auto;
}
.edt_wholesale .banner {
  margin-bottom: 20px;
}
.edt_wholesale .banner > img {
  width: 100%;
}
.edt_wholesale .whole_art {
  padding-bottom: 20px;
}
.edt_wholesale .whole_art .whole_title {
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 10px;
}
.edt_wholesale .whole_art > p {
  line-height: 24px;
  color: #666666;
}
.edt_wholesale .whole_art a,
.edt_wholesale .whole_art a:hover {
  color: #666666;
  text-decoration: underline;
}
.edt_wholesale .whole_art a.link,
.edt_wholesale .whole_art a.link:hover {
  color: #e30057;
  text-decoration: underline;
}
.edt_wholesale .table_all {
  padding: 15px 0 15px;
  text-align: center;
}
.edt_wholesale .table_all table {
  width: 668px;
}
.edt_wholesale .table_all td {
  border: 1px solid #cdcdcd;
}
.edt_wholesale .table_all thead td {
  background: #999999;
  color: #FFF;
  padding: 15px;
  font-size: 14px;
  font-weight: 600;
}
.edt_wholesale .table_all tbody td {
  padding: 12px;
}

</style>
