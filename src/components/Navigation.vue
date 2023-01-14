<template>
    <div class="show-mobile">
  <div>
    <button v-on:click="toggleMenu()">
      <img src="../assets/svg/icon_menu.svg" alt="menu">
    </button>
    <a href="">
      <img src="../assets/svg/logo_yard_sale.svg" alt="logo">
    </a>
    <div class="cart">
      <a href="">
        <img src="../assets/svg/icon_shopping_cart.svg" alt="logo">
      </a>
      <span class="counter">{{ counter }}</span>
    </div>
  </div>
  <div class="side-menu" :class="{active: activeMenu}">
    <button v-on:click="toggleMenu()">Close</button>
    <ul>
      <li><router-link to="/home">All</router-link></li>
      
      <li v-for="item in categories">
        <a v-on:click="category(item.id_category)">{{ item.name_category }}</a>        
      </li>
    
    </ul>
  </div>
</div>
<div class="hide-mobile">
  <div>
    <nav>
      <a class="logo" href="">
        <img src="../assets/svg/logo_yard_sale.svg" alt="logo">
      </a>
      <ul>
        
        <li><router-link to="/home">All</router-link></li>
        <li v-for="item in categories">
          <a v-on:click="category(item.id_category)">{{ item.name_category }}</a>          
        </li>
        
      </ul>
    </nav>
    
    <div class="info">
        
      <div class="account">
        <button v-if="!profile" v-on:click="login()">Login</button>
        <template v-else>
          <a class="btnporfile" v-on:click="$router.push('/profile')">{{ profile?.name_user }}</a>
          <button v-on:click="logout()">Logout</button>
        </template> 
      </div>      
      <div class="cart">
        <a href="">
          <img src="../assets/svg/icon_shopping_cart.svg" alt="logo">
        </a>
        <span class="counter">{{ counter }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import categoriesservice from '../logic/categoriesservice'
import auth from '@/logic/auth';

import emmiter from '@/enviroments/emmiter';

export default {
    name:"Navagation",    
    data: () => ({
        activeMenu : false,
        counter : 0,        
        categories: null,
        profile: null,        
  }),
  async created(){
    await this.getCategories();
    await this.getUser();          
  },
  methods:{
    getCategories: async function(){
        try{
            const response = await categoriesservice.get();
            const data = response.data.results;

            this.categories = data;            
        }catch(error){
            console.log(error);
        }
    },
    getUser: async function(){
      try{  
        const response = await JSON.parse(auth.getUserLogged());        
        
        if(response != null){
          this.profile = response;          
        }
        
      }catch(error){
        console.log('No session loaded');
      }
    },
    toggleMenu: function(){
    this.activeMenu = !this.activeMenu;
    },
    category: function(id){        
        this.$router
        .push(`/category/${id}`)
        .then(()=>{this.$router.go()})                       
    },

    logout: async function(){      
      try{
        await auth.logout();

        this.profile = null;
        this.$router.push(['/home']);
      }catch(error){
        console.log(error);
      }            
    },
    login: function(){
      this.$router.push("/login")
    },        
  },
  mounted() {     
    emmiter.on('addonetocart', () => {      
      this.counter += 1;
    });
  }
      
}
</script>

<style lang="css" scoped>
:host {
  margin-bottom: 3em;
  display: block;
}
.cart {
  position: relative;
}
.cart .counter {
  width: 20px;
  height: 20px;
  line-height: 20px;
  background: #acd9b2;
  border-radius: 50%;
  display: block;
  color: white;
  text-align: center;
  position: absolute;
  top: -10px;
  right: -10px;
}
.show-mobile {
  display: block;
  box-shadow: 0px 2px 5px #000;
}

.btnporfile{
  cursor: pointer;
  transition: all 300ms;
}

.btnporfile:hover{  
  font-size: larger;
  color: blue;
}
.show-mobile > div {
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.show-mobile > div button {
  border: 0;
  background: transparent;
}
.show-mobile .side-menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: translateX(-100%);
  transition: all ease-out 0.5s;
}
.show-mobile .side-menu.active {
  transform: translateX(0);
}
.hide-mobile {
  display: none;
  box-shadow: 0px 2px 5px #000;
}
.hide-mobile > div {
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hide-mobile .logo {
  margin-right: 1em;
}
.hide-mobile nav {
  display: flex;
  align-items: center;
}
.hide-mobile nav ul {
  display: flex;
  list-style: none;
}
.hide-mobile nav ul a {
  margin: 0 0.2em;
  color: inherit;
  text-decoration: none;
  padding: 0.2em 0.8em;
  transition: all 200ms;
}

.hide-mobile nav ul a:hover{
  cursor: pointer;
  background-color: #acd9b2;
  border-radius: 10px;
}
.hide-mobile nav ul a.active {
  border: 1px solid #acd9b2;
  color: #acd9b2;
  border-radius: 5px;
}
.hide-mobile .info {
  display: flex;
  align-items: center;
}
.hide-mobile .info .account {
  margin-right: 0.5em;
}
/* Medium only */
@media screen and (min-width: 40em) and (max-width: 63.9375em) {
  .show-mobile {
    display: none;
 }
  .hide-mobile {
    display: block;
 }
}
/* Large and up */
@media screen and (min-width: 64em) {
  .show-mobile {
    display: none;
 }
  .hide-mobile {
    display: block;
 }
}
</style>