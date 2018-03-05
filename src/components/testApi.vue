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
      var dataTest = {
        client_id: 'wv5y9rubtasso8sccc4kkgk0cooows408sk4sksc8g08wokso', //'3rj21qm124u80k8ss408s0sw4g8w48o0884wk88o0ws008ko0o',
        client_secret: '503532a0ag008cgkk4gk8wwo8gk4wgc00s8owkg8gwso44cs00',// '3cbaxbya9e04k80gwog8gogo0cckkk0444800gk884w8g0kwsk', /* 3rfGlYVTbbuNdej0AR7eFPy927x0R4Aga7OJoJml */
        grant_type: 'password',
        username: 'obada@admin.com' ,//'obada@admin.com', // 'api@example.com',
        password: '1234' //'1234' //  password: 'sylius-api'
  
      } 
      const header = {
        //'Accept': 'application/json',
        'Authorization': 'Bearer MDUwMWQ1NTI4N2U4NzgxYWJlZDg2N2Y2ODNhZWU1MDQwOGVjZDE5MTY1YTRkZjhkZjFlNmE4ODgwYWJjMDVmZg',
        //'referer': 'fnd.alarabexpress.com'
        'Content-Type': 'application/json'
      }  
     // var proxy = 'https://cors-anywhere.herokuapp.com/';
      // this.$http.get('http://bknd.alarabexpress.com/api/oauth/v2/token',{params: {client_id:'demo_client',client_secret:'secret_demo_client',grant_type:'password',username:'api@example.com',password: 'sylius-api'}}).then(response =>{
      //        this.TestArray = response.body 
      //    })
      // var myUrl ='http://bknd.alarabexpress.com/api/oauth/v2/token' ;
      // var finalURL = proxy + myUrl;
        this.$http.post('http://bknd.alarabexpress.com/api/oauth/v2/token',dataTest,{headers: header}).then(response =>{
            //this.TestArray = response.body 
            console.log(response.body )
        })
        var url = 'http://bknd.alarabexpress.com/api/v1/products/' ; 
        //var myUrl = proxy + url ; 
        this.$http.get(url,{headers: header}).then(response =>{
            this.TestArray = response.body 
        })
  }
  }
</script>

<style scoped>

  
</style>