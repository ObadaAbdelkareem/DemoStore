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
    getProductCategory (CategoryID) {

        //?parent=0   
        
///https://woo.alarabexpress.com/wp-json/wc/v2/products/categories?parent=<Category ID>
            return axios.get(appConfig.apiUrl + '/products?category='+CategoryID,{headers: this.getheader()})
        
    },

    getByCode (code) {
        return axios.get(appConfig.apiUrl + '/products/categories/'+code,{headers: this.getheader()})
    }
}   
