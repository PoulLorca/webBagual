import axios from "axios";
import qs from "qs";
import { environment } from "@/enviroments/enviroments";
import auth from "./auth";

export default {

    getShops(id){        
        var config = {
          method: 'get',
          url: `${environment.API_URL}/relations?rel=shops,products,directions,states&type=shop,product,direction,state&select=*&linkTo=id_user_shop&equalTo=${id}`,          
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
}