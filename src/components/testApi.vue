<template>
  <div >
  <h1>Obada {{TestArray}}</h1>
</div>
</template>

<script>
  import Category from '@/api/CategoryApi.js'

  import appConfig from '@/config'

  export default 
  {
      data () {
     return {
         TestArray: ''
    }
  },
      created: function () {
        var me = this 
         Category.getByCode(41).then(function(response){
          me.TestArray=response.data
          console.log(response.data)
        })
        
      }
      // async created(){
      //   var data = {
      //   client_id: 'demo_client', //'3rj21qm124u80k8ss408s0sw4g8w48o0884wk88o0ws008ko0o',
      //   client_secret: 'secret_demo_client',// '3cbaxbya9e04k80gwog8gogo0cckkk0444800gk884w8g0kwsk', /* 3rfGlYVTbbuNdej0AR7eFPy927x0R4Aga7OJoJml */
      //   grant_type: 'password',
      //   username: 'api@example.com' ,//'obada@admin.com', // 'api@example.com',
      //   password: 'sylius-api' //'1234' //  password: 'sylius-api'
  
      // } 
      // var dataTest = {
      //   client_id: 'wv5y9rubtasso8sccc4kkgk0cooows408sk4sksc8g08wokso', //'3rj21qm124u80k8ss408s0sw4g8w48o0884wk88o0ws008ko0o',
      //   client_secret: '503532a0ag008cgkk4gk8wwo8gk4wgc00s8owkg8gwso44cs00',// '3cbaxbya9e04k80gwog8gogo0cckkk0444800gk884w8g0kwsk', /* 3rfGlYVTbbuNdej0AR7eFPy927x0R4Aga7OJoJml */
      //   grant_type: 'password',
      //   username: 'obada@admin.com' ,//'obada@admin.com', // 'api@example.com',
      //   password: '1234' //'1234' //  password: 'sylius-api'
  
      // } 
      // const header = {
      //   //'Accept': 'application/json',
      //   'Authorization': 'Bearer MDUwMWQ1NTI4N2U4NzgxYWJlZDg2N2Y2ODNhZWU1MDQwOGVjZDE5MTY1YTRkZjhkZjFlNmE4ODgwYWJjMDVmZg',
      //   //'referer': 'fnd.alarabexpress.com'
      //   'Content-Type': 'application/json'
      // }  
     // var proxy = 'https://cors-anywhere.herokuapp.com/';
      // this.$http.get('http://bknd.alarabexpress.com/api/oauth/v2/token',{params: {client_id:'demo_client',client_secret:'secret_demo_client',grant_type:'password',username:'api@example.com',password: 'sylius-api'}}).then(response =>{
      //        this.TestArray = response.body 
      //    })
      // var myUrl ='http://bknd.alarabexpress.com/api/oauth/v2/token' ;
      // var finalURL = proxy + myUrl;
        // this.$http.post('http://bknd.alarabexpress.com/api/oauth/v2/token',dataTest,{headers: header}).then(response =>{
        //     //this.TestArray = response.body 
        //     console.log(response.body )
        // })
      //  var url = 'http://bknd.alarabexpress.com/api/v1/products/' ; 
      //   var myUrl = proxy + url ; 
      //   this.$http.get(url,{headers: header}).then(response =>{
      //       this.TestArray = response.body 
      //   })
        // const response =  Category.getAll()
       //Category.getAll().then(response => {
      // JSON responses are automatically parsed.
      // this.TestArray = response.data
      // console.log(response)

      // const [cat] =  Promise.all([
      //                   Category.getAll()
      //               ])
      //     console.log(cat.data)
               


      //  const category = await Category.getAll()
        // this.TestArray = category.data  


        // const catBycode = await Category.getByCode(41) 
        // this.TestArray=catBycode.data
          // try {
                  
          //           let response = await Category.getAll()
          //           this.TestArray = response.data 
          //       } catch (error) {
          //           this.error = error.toString()
          //       }

      //this.posts = response.data
   // })
       
      //  .then(response =>{
      //       this.TestArray = response.body 
      //   })

/*
          const header = {
        'authorization': 'Basic Y2tfNzI3NDcwMWRjODc2MjczNmU3ODY3NWNmOWU5MWZjZjVhMWY3MWM4Nzpjc18wOWFlMTZiMjRhNDc4NTlkZDQ3NTFmNWVmMDAxNGZmMTI4MTczMmIz'
        //'consumer_key': 'ck_7274701dc8762736e78675cf9e91fcf5a1f71c87',
        //'consumer_secret': 'cs_09ae16b24a47859dd4751f5ef0014ff1281732b3'
      }  
       // var url = 'https://woo.alarabexpress.com/wp-json/wc/v2/products/categories' ; 
        this.$http.get(appConfig.apiUrl+'/products/categories',{headers: appConfig.apiUrl.getheader()}).then(response =>{
            this.TestArray = response.body 
        })
*/

    //     const agent = new this.$http.Agent({  
    // rejectUnauthorized: false
    // });
    // axios.get('https://woo.alarabexpress.com/wp-json/wc/v2/products/categories',{headers: header}); //, { httpsAgent: agent }

  //}
  }
</script>

<style scoped>

  
</style>