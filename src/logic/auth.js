import axios from "axios";
import qs from "qs";
import Cookies from "js-cookie";

const NOCORS = "https://guarded-plateau-89958.herokuapp.com"
const ENDPOINT_PATH = "http://www.apibagual.codigobagual.cl";

export default {
  setUserLogged(userLoged){    
    Cookies.set("userLoged",JSON.stringify(userLoged));
  },
  getUserLogged(){
    return Cookies.get("userLoged");
  },
  register(email_user, password_user) {
    const data = qs.stringify(
        { email_user: `${email_user}`,
        password_user: `${password_user}`
     });     

    var config = {
        method: 'post',
        url: `${NOCORS}/${ENDPOINT_PATH}/users?register=true&suffix=user`,
        headers: {      
          'Access-Control-Allow-Origin': '*',     
          'apikey': 'M8kPAPvGZR2U9H35ZUxRW2S2xHD9J7', 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };

    return axios(config)    
  },

  login(email_user,password_user){
    var data = qs.stringify({
      'email_user': `${email_user}`,
      'password_user': `${password_user}` 
    });
    var config = {
      method: 'post',
      url: `${NOCORS}/${ENDPOINT_PATH}/users?login=true&suffix=user`,
      headers: { 
        'Authorization': 'M8kPAPvGZR2U9H35ZUxRW2S2xHD9J7', 
        'apikey': 'M8kPAPvGZR2U9H35ZUxRW2S2xHD9J7', 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };    
    
    return axios(config);    
  }
};