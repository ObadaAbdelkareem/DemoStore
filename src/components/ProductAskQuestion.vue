<template>
    <div>
        <div class="wrap">
            <div class="review_lay">
                <h4>Questions</h4>
                <div>
                    <div class="sidebar_text">
                        <dl>
                            <dt>Tips for writing questions</dt>
                            <dd>
                                2. Do not expose any personal information. Submissions with personal data may be rejected
                            </dd>
                            <dd>2. Ask a question related to this product, category or topic
                            </dd>
                            <dd>
                                3. If you want to receive more information about this product, please include as many details as possible
                            </dd>
                        </dl>
                    </div>
                    <div class="review_operal">
                        <h5>Ask a new question </h5>
                        <div class="review_pro">
                            <ul>
                                <li class="img"><a
                                        href="https://www.newchic.com/bra-and-bra-set-4183/p-1270265.html"><img
                                        src="https://img1.newchic.com/thumb/view/oaupload/newchic/images/BE/F5/ce028605-fb8f-45eb-ac13-dfc5402e942d.jpeg"
                                        width="100"></a></li>
                                <li class="name"><a href="https://www.newchic.com/bra-and-bra-set-4183/p-1270265.html"
                                                    target="_self">Adjustable Vice Breast Comfortable Gather Wireless Bras</a>
                                </li>
                                <li class="btns askbtns fb"><i class="tag_c"></i> Submit a question</li>
                            </ul>
                        </div>
                        <form id="questionForm">
                            <div class="review_form">
                                <i class="br_tri"></i>
                                <i class="bg_tri"></i>
                                <div class="ask_rang">
                                    <div class="inputbox">
                                        <s>Name</s>
                                        <input name="name" msg="text" value="NC*********" datatype="Name" require="true"
                                               autocomplete="off" id="username">
                                        <span class="error"></span>
                                        <b>*</b>
                                    </div>
                                    <div class="inputbox selectbox" style="z-index:1">
                                        <s>Pre-sale topic</s>
                                        <select name="topic" id="topic">
                                            <option value="Product information">Product information</option>
                                            <option value="Stock status">Stock status</option>
                                            <option value="Dropship">Dropship</option>
                                            <option value="Payment">Payment</option>
                                            <option value="About shipping">About shipping</option>
                                            <option value="Others">Others</option>
                                        </select>
                                        <span class="error"></span>
                                        <b>*</b>
                                    </div>
                                    <div class="inputbox">
                                        <s>Ask a question:</s>
                                        <textarea require="true" datatype="LimitB" max="200" min="3"
                                                  msg="The question cannot be less than 3 words and more than 200 words"
                                                  rows="6" name="question" id="question"
                                                  autocomplete="off"></textarea><b>*</b><br>
                                        <span class="error" id="question_tip"></span>
                                    </div>
                                    <div class="text_r">
							<span class="form_submit">
                                <input name="" type="button" onclick="feedback(this)">Submit
							</span>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" id="products_id" name="products_id" value="1270265">
                        </form>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>


<script>
    export default {}
</script>


<style>

</style>