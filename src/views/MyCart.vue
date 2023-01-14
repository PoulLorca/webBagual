<template>

<router-link to="/home">Atrás</router-link>
<br>
<h1>My Cart</h1>
<hr>
<div class="div product-details">
    <img class="thumbnail" :src="info.url_image" :alt="info.title_product" height="200" />
    <div class="product-description">
        <h2><p>{{ info.title_product }}</p></h2>
        <p>{{ info.description_product}}</p>

        <h3>Tu pedido será enviado a {{ direction }}</h3>
        <button class="snipcart-add-item" :data-item-name="info.title_product" :data-item-id="info.id_product"  @click="buy()" :data-item-price="info.price_product">Buy it for {{ info.price_product }}$</button>
        
        <br>
        <button class="deleteButton" @click="del()">Delete from my cart</button>
    </div>    
</div>
</template>

<script>
import cart from '@/logic/cart';
import Swal from 'sweetalert2';
import auth from '@/logic/auth';
import addresssrvice from '@/logic/addresssrvice';
import shopsservice from '@/logic/shopsservice';

export default {
    name: 'MyCart',
    data: () => ({
        info:null,
        profile:null,
        direction: null
    }),
    async created(){
        this.checkCart(); 
        await this.getUser();
        await this.getDirection();
    },
    methods:{
        getUser: async function(){
            const response = await auth.getUserLogged()
            this.profile = JSON.parse(response);            
        },
        getDirection: async function(){
        try{
            const response = await addresssrvice.getDirection(this.profile.id_rol_user);
            const data = response.data.results[0];

            this.direction = data.detail_direction;                   
        }catch(error){
            console.log(error);
        }                
    },
      checkCart: function(){
        const inCart = JSON.parse(cart.getCart());            
        this.info = inCart;
    },
    del: function(){
        cart.cleanCart();
        this.$router
        .push(`/home`)        
    },
    buy: async function(){        
    try {        
      const response = await shopsservice.register(this.profile.id_user, this.info.id_product, 1, this.direction, 1);            
      const data = response.data.status;

      if(data == 200){
        Swal.fire('In test mode you are already buying, see your shops')
        this.del();
      }else{
        Swal.fire('Error al guardar!')
      }      

      } catch (error) {
        console.log(error);
      }        
    }
    }
}
</script>

<style lang="css" scoped>
.snipcart-add-item{
    box-shadow:inset 0px 0px 0px 0px #54a3f7;
	background:linear-gradient(to bottom, #007dc1 5%, #0061a7 100%);
	background-color:#007dc1;
	border-radius:3px;
	border:1px solid #124d77;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Trebuchet MS;
	font-size:28px;
	padding:32px 76px;
	text-decoration:none;
	text-shadow:0px 0px 0px #154682;
}

.snipcart-add-item:hover{
    background:linear-gradient(to bottom, #0061a7 5%, #007dc1 100%);
	background-color:#0061a7;
}

.snipcart-add-item:active{
    position:relative;
	top:1px;
}

.deleteButton {
    margin-top: 5%;
	box-shadow:inset 0px 39px 0px -24px #e67a73;
	background-color:#e4685d;
	border-radius:4px;
	border:1px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:6px 15px;
	text-decoration:none;
	text-shadow:0px 1px 0px #b23e35;
}
.deleteButton:hover {
	background-color:#eb675e;
}
.deleteButton:active {
	position:relative;
	top:1px;
}
</style>