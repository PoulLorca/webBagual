import axios from "axios";
import qs from "qs";

const ENDPOINT_PATH = "http://www.apibagual.codigobagual.cl";

export default {
  register(email_user, password_user) {
    const data = { email_user, password_user };

    var config = {
        method: 'post',
        url: `${ENDPOINT_PATH}/users?register=true&suffix=user`,
        headers: { 
          'Authorization': 'M8kPAPvGZR2U9H35ZUxRW2S2xHD9J7', 
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
    };