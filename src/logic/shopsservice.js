import axios from "axios";
import qs from "qs";
import { environment } from "@/enviroments/enviroments";
import auth from "./auth";
import moment from "moment";

export default {

    getShops(id){        
        var config = {
          method: 'get',
          url: `${environment.API_URL}/relations?rel=shops,products,directions,states&type=shop,product,direction,state&select=*&linkTo=id_user_shop&search=${id}`,                    
          headers: {     
            'apikey': `${environment.API_KEY}`
          }
        };              
        return axios(config)
        
    },
    getShop(id){        
      var config = {
        method: 'get',
        url: `${environment.API_URL}/relations?rel=shops,products,directions,states&type=shop,product,direction,state&select=*&linkTo=id_shop&equalTo=${id}`,          
        headers: {     
          'apikey': `${environment.API_KEY}`
        }
      };
      
      return axios(config)      
  },
  register(id_user_shop, id_product_shop, ammount_shop, id_direction_shop, id_state_shop) {       

    let user = JSON.parse(auth.getUserLogged());  
    let userToken = user.token_user  
  
    let date_created_shop = moment(new Date()).format("YYYY-MM-DD");
  
  
    const data = qs.stringify(
        { id_user_shop: `${id_user_shop}`,      
        id_product_shop: `${id_product_shop}`,
        ammount_shop: `${ammount_shop}`,
        id_direction_shop: `${id_direction_shop}`,
        id_state_shop: `${id_state_shop}`,
        date_created_shop: `${date_created_shop}`
     });        
  
    var config = {
        method: 'post',
        url: `${environment.API_URL}/shops?token=${userToken}&table=users&suffix=user&except`,
        headers: {      
          'Access-Control-Allow-Origin': '*',             
          'apikey': `${environment.API_KEY}`, 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };    
  
      return axios(config)        
  },
  
}