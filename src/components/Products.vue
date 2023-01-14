<template>
<div class="products--grid">
    <div v-for="product in products">      
      <a v-on:click="detail(product.id_product)">        
        <img :src="product.url_image">        
      </a>
      <h2>${{product.price_product }}</h2>
      <p>{{product.title_product}}</p>
      <p class="category">{{product?.name_category}}</p>      
      <a v-on:click="productDetail(product.id_product)">See detail</a>      
      <button  @click="addone()">Add cart</button>
    </div>
</div>
</template>

<script>
import productsservice from '@/logic/productsservice';
import emmiter from '@/enviroments/emmiter';

export default {
  name:"Products",
  data: () => ({
    products: null,        
  }),
  async created(){
    await this.getProducts();
  },
  methods:{
    async getProducts(){
      try {  
        var response;      
      if(this.$route.params.id){
        let id = this.$route.params.id
        response = await productsservice.getAllProductsByCategory(id);                  
      }else{
        response = await productsservice.getAllProducts();                
      }

        const data=response.data
        
        this.products=data.results;                
      } catch (error) {
        console.log(error)
      }
    },
    productDetail: async function(id){
      this.$router.push(`/productdetail/${id}`);      
    },        
    addone: function(){      
      emmiter.emit("addonetocart", 1);      
    }
  }
}
</script>

<style lang="css" scoped>
.products--grid {
  display: flex;
  flex-direction: column;
  padding: 0 1em;
}
.product-detail {
  position: fixed;
  top: 0;
  left: 50%;
  bottom: 0;
  right: 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all ease-out 0.5s;
  transform: translateX(100%);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);
  padding: 1em 2em;
}
.product-detail.active {
  transform: translateX(0);
}
@media screen and (min-width: 40em) and (max-width: 63.9em) {
  .products--grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
 }
}
@media screen and (min-width: 64em) {
  .products--grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
 }
 /* Product styles */

 p, h2{
    margin: 0px;
}

.category{
    font-style: italic;
}

img{
    max-width: 100%;
}
}
</style>