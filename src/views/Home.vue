<template>
    <div class="home">
      <navigation></navigation>      
      <br>
      <products></products>      
    </div>
  </template>
  
  <script>  
  import { defineAsyncComponent } from "vue";    

  const Navigation = defineAsyncComponent(  
  () => import("../components/Navigation"),
);

const Products = defineAsyncComponent(
  () => import("../components/Products"),  
);

  export default {
    name: "Home",
    components: {
      Navigation,
      Products
    },
    computed: {      
    }
  };
  </script>
  
  <style>
      </style>