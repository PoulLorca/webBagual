import axios from "axios";
import { environment } from "@/enviroments/enviroments";


export default {
    //Get communes
get(){        
var config = {
  method: 'get',
  url: `${environment.API_URL}/communes?select=id_commune,name_commune&orderMode=ASC&orderBy=name_commune`,
  headers: {     
    'apikey': `${environment.API_KEY}`
  }
};

return axios(config)

    } 
}