<template>
<h1>Profile</h1>
<div class="profilepic">
<img  src="../assets/svg/jedi_icon.svg" alt="jedi_icon">
</div>
<div class="infoText">
    <h2 v-if="profile.id_rol_user == 1">Rol: <span class="rol">Administrador </span></h2>
    <h2>Nombre: <span class="userName">{{ profile.name_user }} </span></h2>    
    <h2>Email: <span>{{ profile.email_user }} </span></h2>    

    <div class="directionText">
    <h2 v-if="direction">Mi direccion: <span>{{ direction.detail_direction }}</span></h2>
    <h2 v-else> <router-link to="/address">Agregar dirección</router-link></h2>
    </div>
</div>

<br>
<h2><router-link to="/shops">Mis compras</router-link></h2>

</template>

<script>
import auth from '@/logic/auth';
import addresssrvice from '@/logic/addresssrvice';

export default {
    name:'Profile',
    data: () => ({        
        profile: null,
        direction: null
  }),
    async created(){
        await this.getUser()
        await this.getDirection()
    },
    methods:{
        getUser: async function(){
      try{  
        const response = await JSON.parse(auth.getUserLogged());                                        
        this.profile = response;                          
      }catch(error){
        console.log(error);
      }
    },
    getDirection: async function(){
        try{
            const response = await addresssrvice.getDirection(this.profile.id_rol_user);
            const data = response.data.results[0];

            this.direction = data;
        }catch(error){
            console.log(error);
        }                
    }
}

}
</script>

<style lang="css" scoped>

.profilepic{    
    width: 100%;
    margin-top: 5%;
}
.profilepic img{    
    width: 25%;
}
.rol{
    text-transform: uppercase;
}
.userName{
    text-transform: capitalize;
}

</style>