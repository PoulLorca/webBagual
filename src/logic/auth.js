/*import axios from "axios";
import qs from "qs";

const ENDPOINT_PATH = "http://www.apibagual.codigobagual.cl";

export default {
  register(email_user, password_user) {
    const data = qs.stringify(
        { email_user: `${email_user}`,
        password_user: `${password_user}`
     });

    var config = {
        method: 'post',
        url: `${ENDPOINT_PATH}/users?register=true&suffix=user`,
        headers: {      
          'Access-Control-Allow-Origin': '*',     
          'apikey': 'M8kPAPvGZR2U9H35ZUxRW2S2xHD9J7', 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };

    axios(config)
    .then(function (response) {
      return(JSON.stringify(response.data));
    })
    .catch(function (error) {
      return(error);
    });
  }
    };*/

export default{
  register(){
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      'email_user': 'test@test.com',
      'password_user': 'test' 
    });
    var config = {
      method: 'post',
      url: 'http://www.apibagual.codigobagual.cl/users?register=true&suffix=user',
      headers: { 
        'Access-Control-Allow-Origin' : '*',        
        'apikey': 'M8kPAPvGZR2U9H35ZUxRW2S2xHD9J7', 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
}
}