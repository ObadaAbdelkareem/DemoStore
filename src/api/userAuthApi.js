import appConfig from '@/config'
import axios from 'axios'

export default {
   
    login (userData) {
        return axios.post(appConfig.authUrl + '/token', userData)
    }
}   
