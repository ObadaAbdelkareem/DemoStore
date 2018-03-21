import appConfig from '@/config'
import axios from 'axios'


export default {
   
    getAllOrders(){
        return axios.get(appConfig.apiUrl + '/orders?customer=' + localStorage.userId + '&status=any')
    },
    getUnPaidOrder(){
        return axios.get(appConfig.apiUrl+'/orders?customer=' + localStorage.userId +'&status=processing')
    },
    getproccessingOrders(){
        return axios.get(appConfig.apiUrl+'/orders?customer=' + localStorage.userId +'&status=processing')
    },
    getshippedOrders(){
        return axios.get(appConfig.apiUrl+'orders?customer='+localStorage.userId+'&status=processing')
    },
    getPersonalDetails(){
        return axios.get(appConfig.apiUrl+'/orders?customer='+ localStorage.userId +'&status=any')
    }
}   
