<template>
    <div class="page-product">
        <router-link to="/home">Atrás</router-link>
    <div class="detail" v-if="product">
      <div class="gallery">        
            <img :src="product.url_image" alt="img" />          
      </div>
      <div>
        <h1>{{ product?.title_product }}</h1>
        <h2>$ {{ product?.price_product  }}</h2>
        <p>{{ product?.description_product }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import productsservice from '@/logic/productsservice';

export default {
    name:"Product",
    data:()=>({
        product: null
    }),
    async created(){
        await this.getProduct();
    },
    methods:{
        async getProduct(){
        try{
            let id = this.$route.params.id;            
            const response = await productsservice.getProduct(id);
            const data = response.data.results[0]

            this.product = data;            
        }catch(error){
            console.log(error);
        }
    }          
    }
}
</script>

<style lang="css" scoped>
.page-product {
    padding: 0 3em;
}
.page-product .detail {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}
.page-product .detail .gallery {
    overflow: hidden;
    width: 100%;
}
.page-product .detail h2, .page-product .detail h1 {
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 2em;
}
.page-product .detail h2 {
    font-size: 1.5em;
}
</style>