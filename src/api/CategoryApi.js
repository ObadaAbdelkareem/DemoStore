import appConfig from '@/config'
import axios from 'axios'


export default {
   
    getAll () {
            return axios.get(appConfig.apiUrl + '/products/categories?parent=0')
    },

    getByCode (code) {
        return axios.get(appConfig.apiUrl + '/products/categories/'+code)
    },

    getSubCategory() 
    {
        return axios.get(appConfig.apiUrl + '/products/categories?per_page=100') 
    }
}   
