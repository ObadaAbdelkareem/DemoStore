import appConfig from '@/config'
import axios from 'axios'


export default {
   
    getAll () {

       
            return axios.get(appConfig.apiUrl + '/cart/totals')
    },

    addItemsToCart (product_id, variation_id,quantity) {

        return axios.post(appConfig.apiUrl + '/cart/add',{
            product_id,
            variation_id,
            quantity
        })
    }
}   
