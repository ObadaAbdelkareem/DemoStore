import axios from 'axios'

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.authorization = 'Basic Y2tfNzI3NDcwMWRjODc2MjczNmU3ODY3NWNmOWU5MWZjZjVhMWY3MWM4Nzpjc18wOWFlMTZiMjRhNDc4NTlkZDQ3NTFmNWVmMDAxNGZmMTI4MTczMmIz'
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
axios.interceptors.response.use((response) => { // intercept the global error
    return response
  }, function (error) {
    if (error.response.status === 401) { 
      //todo(neirat): do auth.logout() and redirect to login page
    }
    if (error.response.status === 404) {
      //todo(neirat): show 404 error page
      return
    }
    // Do something with response error
    return Promise.reject(error)//todo(neirat): why we use  this
  })