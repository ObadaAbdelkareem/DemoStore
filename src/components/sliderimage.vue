<template>

<div class="container">
<h1>just test slider image</h1>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="../../static/img12.jpg" alt="Los Angeles" style="width:100%;">
      </div>

      <div class="item">
        <img src="../../static/img6.jpg" alt="Chicago" style="width:100%;">
      </div>
    
      <div class="item">
        <img src="../../static/img9.jpg" alt="New york" style="width:100%;">
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

</template>
<script>

export default {
  name: 'home',
  data () {
    // return {
    //   products: {}
    // }
  },
  beforeMount () {
    // MoltinService.getHomepageProducts().then((response) => {
    //   this.products = response
    //   console.log(response)
    // })
  },
  methods: {
  }
}
</script>
<style>
</style>
