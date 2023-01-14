import Cookies from "js-cookie";

export default {
    setCart(product){                                   
      Cookies.set("myCart",JSON.stringify(product));      
    },
    getCart(){            
      return Cookies.get("myCart");
      
    },
    cleanCart(){
        return Cookies.remove("myCart");
    }    
}