import appConfig from '@/config'
import axios from 'axios'


export default {
    
    getheader() 
    {
        const header = {
                 'authorization': 'Basic Y2tfNzI3NDcwMWRjODc2MjczNmU3ODY3NWNmOWU5MWZjZjVhMWY3MWM4Nzpjc18wOWFlMTZiMjRhNDc4NTlkZDQ3NTFmNWVmMDAxNGZmMTI4MTczMmIz'
            }
        return header     
    },
    getAll () {
            const header = {
                 'authorization': 'Basic Y2tfNzI3NDcwMWRjODc2MjczNmU3ODY3NWNmOWU5MWZjZjVhMWY3MWM4Nzpjc18wOWFlMTZiMjRhNDc4NTlkZDQ3NTFmNWVmMDAxNGZmMTI4MTczMmIz'
            }

            return axios.get(appConfig.apiUrl + '/products/categories',{headers: header})
        //     .then(response =>{
        //    // this.TestArray = response.body 
        //    test = response.data
        //   //  console.log(response.data)
        // })
        // return test
    },

    getByCode (code) {
        return axios.get(appConfig.apiUrl + '/taxons/' + code + '?locale=' + appConfig.apiLocale)
    }
}   
