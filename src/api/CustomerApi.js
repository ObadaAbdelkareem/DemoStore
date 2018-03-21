import appConfig from '@/config'
import axios from 'axios'


export default {
   
   getMyPoint(){
        return axios.get(appConfig.apiUrl+'/customers')
   }
}   
