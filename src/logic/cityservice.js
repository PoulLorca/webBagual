import axios from "axios";
import { environment } from "@/enviroments/enviroments";


export default {
    //Get cities
get(){        
var config = {
  method: 'get',
  url: `${environment.API_URL}/cities?select=id_city,name_city&orderMode=ASC&orderBy=name_city`,
  headers: {     
    'apikey': `${environment.API_KEY}`
  }
};

return axios(config)

    } 
}