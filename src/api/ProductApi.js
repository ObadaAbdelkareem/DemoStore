import appConfig from '@/config'
import axios from 'axios'


export default {
    
  
    getProductCategory (CategoryID) {

        //?parent=0   
        
///https://woo.alarabexpress.com/wp-json/wc/v2/products/categories?parent=<Category ID>
            return axios.get(appConfig.apiUrl + '/products?category='+CategoryID)
        
    },

    getByCode (code) {
        return axios.get(appConfig.apiUrl + '/products/categories/'+code)
    },

    getProductById (id) {
        return axios.get(appConfig.apiUrl + '/products/'+id)
    },

    getProductVariationsById (id) {
        return axios.get(appConfig.apiUrl + '/products/'+ id + '/variations')
    }
}   
