<template>
<navigation></navigation>      
      <br>
<products></products>          
</template>
<script>
import { defineAsyncComponent } from "vue";    

const Navigation = defineAsyncComponent(  
() => import("../components/Navigation"),
);

const Products = defineAsyncComponent(
() => import("../components/Products"),  
);

export default{
    name: "Category",
    components: {
      Navigation,
      Products
    },

}
</script>