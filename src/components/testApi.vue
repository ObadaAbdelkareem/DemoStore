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
        client_id: '3e258v1i3dusowk484c4c0kcogg8swow0g0wkgc8ccc0400k04',
        client_secret: '539764a6jw4c8c8ogggkco0c4cw4kok0g808gk4gcgksgwskkk', /* 3rfGlYVTbbuNdej0AR7eFPy927x0R4Aga7OJoJml */
        grant_type: 'password',
        username: 'obada@admin.com', // 'api@example.com',
        password: '1234' //  password: 'sylius-api'
  
      } 
      const header = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + ''
      }  
        this.$http.post('http://bknd.alarabexpress.com/api/oauth/v2/token',data).then(response =>{
            this.TestArray = response.body 
        })
  }
  }
</script>

<style scoped>

  
</style>