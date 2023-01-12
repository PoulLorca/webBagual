<template>
<nav>
      <router-link to="/home">Home</router-link> 
  </nav>    
<div class="infoShop">
    <img class="imgProduct" v-bind:src= product.url_image >    
    <h2>Nombre: {{ product.title_product }}</h2>
    <h4>Detalle del producto: {{ product.description_product }}</h4>
    <br>
    <hr>

    <h2>Fecha: {{ info.date_created_shop }}</h2>
    <h2>Cantidad: {{ info.ammount_shop }}</h2>
    <h2></h2>
    <h3>Precio unitario: ${{ info.price_product }}</h3>
    <h2>Total compra: ${{ info.ammount_shop * info.price_product }}</h2>
    <h4>Dirección de envio: {{ info.detail_direction }}</h4>
    <br>
    <hr>
    <h2>Estado: {{ info.name_state }} </h2>    
    <h3>Código de la compra: #{{ info.id_shop }}</h3>
</div>
</template>
<script>
import shopsservice from '@/logic/shopsservice';
import productsservice from '@/logic/productsservice';
import moment from 'moment';

export default {
    name:"detailShop",
    data: () => ({
    info : null,
    product: null
  }),
  async created(){        
    await this.getData()
    .then (async()=>{
        await this.getProduct();
    })
    
  },  
  methods: {
    async getData() {
      try {
        let id = this.$route.params.id;
        const response = await shopsservice.getShop(id);                
        const data=response.data.results[0]
        
        this.info=data;        
        console.log(this.info);
      } catch (error) {
        console.log(error)
      }
    },           
    async getProduct(){
        try{
            let id = this.info.id_product
            
            const response = await productsservice.getProduct(id);
            const data = response.data.results[0]

            this.product = data;
            console.log(this.product);
        }catch(error){
            console.log(error);
        }
    }          
  },
  filters: {
    formatDate: function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
}
  }  
};
</script>
<style lang="css" scoped>
</style>