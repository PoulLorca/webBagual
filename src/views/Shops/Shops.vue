<template>
    <h1>Compras</h1>        

    <nav>
      <router-link to="/home">Home</router-link> 
  </nav>

    <br>
    <br>

<div v-if="info">
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Productos</th>
                <th>Cantidad</th>                
                <th>Dirección</th>
                <th>Estado</th>  
                <th>Total</th>              
                <th>Acciones</th>         
            </tr>
        <tr
        v-for="compra, index in info"
        class="compra">            
                <td>{{ index + 1 }}</td>
                <td>{{ compra.title_product }}</td>
                <td>{{ compra.ammount_shop }}</td>
                <td>{{ compra.detail_direction }}</td>    
                <td>{{ compra.name_state }}</td>
                <td>${{ compra.price_product * compra.ammount_shop }}</td>
                <td>
                    <a class="detailButton" v-on:click="detail(compra.id_shop)">Detalles</a>                     
                </td>
        </tr>        
    </table>
</div>
</template>

<script>
import shopsservice from '@/logic/shopsservice';

export default {
  data: () => ({
    info : null
  }),
  async created(){        
    await this.getData();
    
  },  
  methods: {
    async getData() {
      try {
        let id = this.$route.params.id;
        const response = await shopsservice.getShops(id);                
        const data=response.data
        
        this.info=data.results;                
      } catch (error) {
        console.log(error)
      }
    }, 
    detail: async function(id){      
      this.$router.push(`/detailshop/${id}`);      
    } ,             
  }  
};
</script>

<style lang="css" scoped>
table, th, td {
  border:1px solid black;
}

.detailButton:hover{
    cursor:pointer;
} 

</style>