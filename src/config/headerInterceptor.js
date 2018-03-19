import axios from 'axios'

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //config.headers.authorization = 'Basic Y2tfNzI3NDcwMWRjODc2MjczNmU3ODY3NWNmOWU5MWZjZjVhMWY3MWM4Nzpjc18wOWFlMTZiMjRhNDc4NTlkZDQ3NTFmNWVmMDAxNGZmMTI4MTczMmIz'
    config.headers.authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd29vLmFsYXJhYmV4cHJlc3MuY29tIiwiaWF0IjoxNTIxMzUyMzU3LCJuYmYiOjE1MjEzNTIzNTcsImV4cCI6MTUyMTk1NzE1NywiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiNiJ9fX0.ckOysNL6xYVfAP8EcrgkqNSNJIcd-oqdyfRpxIBhOKo',
    config.headers['Content-Type'] =  "application/json"
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
axios.interceptors.response.use((response) => { // intercept the global error
    return response
  }, function (error) {
    if (error.status === 401) { 
      //todo(neirat): do auth.logout() and redirect to login page
    }
    if (error.status === 404) {
      //todo(neirat): show 404 error page
      return
    }
    // Do something with response error
    return Promise.reject(error)//todo(neirat): why we use  this
  })