import axios from "axios";
import qs from "qs";
import { environment } from "@/enviroments/enviroments";
import Cookies from "js-cookie";
import moment from 'moment';
import auth from "./auth";

export default {
    //Get categories
    get(){        
        var config = {
          method: 'get',
          url: `${environment.API_URL}/categories`,
          headers: {     
            'apikey': `${environment.API_KEY}`
          }
        };
        
        return axios(config)
        
            },
}