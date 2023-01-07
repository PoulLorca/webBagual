<template>
    <h1>Direcciones</h1>        

    <nav>
      <router-link to="/home">Atrás</router-link> | 
    <router-link to="/newaddress">Nueva Direccion</router-link>
  </nav>

    <br>
    <br>

<div v-if="info">
        <table style="width:100%">
            <tr>
                <th>Id</th>
                <th>Region</th>
                <th>Ciudad</th>
                <th>Comuna</th>
                <th>Detalle</th>
                <th>Acciones</th>
            </tr>
        <tr
        v-for="direccion, index in info"
        class="direccion">            
                <td>{{ index + 1 }}</td>
                <td>{{ direccion.name_region }}</td>
                <td>{{ direccion.name_city }}</td>
                <td>{{ direccion.name_commune }}</td>    
                <td>{{ direccion.detail_direction }}</td>
                <td>
                    <a class="editButton" v-on:click="edit(direccion.id_direction)">Editar</a> |
                    <a class="deleteButton" v-on:click="erase(direccion.id_direction)">Eliminar</a>
                </td>
        </tr>        
    </table>
</div>
</template>

<script>
import addresssrvice from '@/logic/addresssrvice';
import Swal from 'sweetalert2';

export default {
  data: () => ({
    info : null
  }),
  created(){        
    this.getData();
    
  },  
  methods: {
    async getData() {
      try {
        const response = await addresssrvice.get();                
        const data=response.data

        this.info=data.results;

      } catch (error) {
        console.log(error)
      }
    }, 
    edit: async function(id){
      this.$router.push(`/editaddress/${id}`);      
    } ,         
    erase: async function(id){        
      try {
        //Execute delete
        const response = await addresssrvice.delete(id);                
        const data=response.data.status                

        if(data == 200){
          Swal.fire('Eliminado con éxito!')

          //Reload page
          //location.reload();
          this.$router.push('/address');    
        }else{
          Swal.fire('Error al borrar!')
        }        
      } catch (error) {
        console.log(error)
      }
    }
  }  
};
</script>

<style lang="css" scoped>
table, th, td {
  border:1px solid black;
}

.editButton:hover{
    cursor:pointer;
} 

.deleteButton:hover{
    cursor:pointer;
} 
</style>