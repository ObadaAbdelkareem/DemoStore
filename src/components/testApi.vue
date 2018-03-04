<template>
  <div >
  <h1>Obada {{TestArray}}</h1>
</div>
</template>

<script>
  export default 
  {
      data () {
     return {
         TestArray: ''
    }
  },
       created(){
        var data = {
        client_id: 'demo_client', //'3rj21qm124u80k8ss408s0sw4g8w48o0884wk88o0ws008ko0o',
        client_secret: 'secret_demo_client',// '3cbaxbya9e04k80gwog8gogo0cckkk0444800gk884w8g0kwsk', /* 3rfGlYVTbbuNdej0AR7eFPy927x0R4Aga7OJoJml */
        grant_type: 'password',
        username: 'api@example.com' ,//'obada@admin.com', // 'api@example.com',
        password: 'sylius-api' //'1234' //  password: 'sylius-api'
  
      } 
      const header = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + ''
      }  
      var proxy = 'https://cors-anywhere.herokuapp.com/';
      this.$http.get('http://bknd.alarabexpress.com/api/oauth/v2/token',{params: {client_id:'demo_client',client_secret:'secret_demo_client',grant_type:'password',username:'api@example.com',password: 'sylius-api'}}).then(response =>{
             this.TestArray = response.body 
         })
      // var myUrl ='http://bknd.alarabexpress.com/api/oauth/v2/token' ;
      // var finalURL = proxy + myUrl;
      //   this.$http.get('http://bknd.alarabexpress.com/api/oauth/v2/token',data).then(response =>{
      //       this.TestArray = response.body 
      //   })
  }
  }
</script>

<style scoped>

  
</style>