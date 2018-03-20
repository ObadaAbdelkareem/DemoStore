import appConfig from '@/config'
import axios from 'axios'


export default {
   
    getAll () {

        const header = {
           
        'Content-Type': 'application/json',
        'Cookie': 'woocommerce_items_in_cart=1; woocommerce_cart_hash=9ca3675b60fb5d1bad2653ea1e035592; wp_woocommerce_session_d341be95aeb3a9c29976f110a4dca95e=6||1521748196||1521744596||06c0618281f9f7483cd66b2fe301eed8%7C%7C1521737389%7C%7C1521733789%7C%7Ca872c0575ddb3ba7a28bd4bd59ddcca7; expires=Thu, 22-Mar-2018 16:49:49 GMT; Max-Age=172800; path=/'
      }  

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
