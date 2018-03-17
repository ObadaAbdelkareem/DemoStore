import appConfig from '@/config'
import axios from 'axios'


export default {
   
    getProductById (id) {
        return axios.get(appConfig.apiUrl + '/products/'+id)
    }
}   
