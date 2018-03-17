import appConfig from '@/config'
import axios from 'axios'


export default {
   
    getAll () {
            return axios.get(appConfig.apiUrl + '/products/categories')
    },

    getByCode (code) {
        return axios.get(appConfig.apiUrl + '/products/categories/'+code)
    }
}   
