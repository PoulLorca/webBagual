import axios from "axios";
import qs from "qs";
import Cookies from "js-cookie";
import moment from 'moment';
import { environment } from "@/enviroments/enviroments";

export default {
  setUserLogged(userLoged){    
    Cookies.set("userLoged",JSON.stringify(userLoged));
  },
  getUserLogged(){
    return Cookies.get("userLoged");
  },
  register(name_user,email_user, password_user) {
    let date_created_user = moment(new Date()).format("YYYY-MM-DD");

    const data = qs.stringify(
        { name_user:`${name_user}`,
          email_user: `${email_user}`,
          password_user: `${password_user}`,
          date_created_user: `${date_created_user}`
        });     

    var config = {
        method: 'post',
        url: `${environment.API_URL}/users?register=true&suffix=user`,
        headers: {      
          'Access-Control-Allow-Origin': '*',     
          'apikey': `${environment.API_KEY}`, 
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
      url: `${environment.API_URL}/users?login=true&suffix=user`,
      headers: {         
        'apikey': `${environment.API_KEY}`, 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };    
    
    return axios(config);    
  }
};