import axios from "axios";
import { environment } from "@/enviroments/enviroments";


export default {
    //Get regions
get(){        
var config = {
  method: 'get',
  url: `${environment.API_URL}/regions?select=id_region,name_region&orderMode=ASC&orderBy=name_region`,
  headers: {     
    'apikey': `${environment.API_KEY}`
  }
};

return axios(config)

    } 
}