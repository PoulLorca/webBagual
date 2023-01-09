import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Address from '../views/Address/Address.vue'
import newAddress from '../views/Address/newAddress.vue'
import editAddress from '../views/Address/editAddress.vue'
import Notfound from '../components/Notfound.vue'

const routes = [
  {
    path: '/',    
    component: Login
  },
  { 
    path: '/home',    
    component: Home
  },  
  {
    path: '/register',    
    component: Register
  },
  {
    path: '/address',
    component: Address
  },
  {
    path: '/newaddress',
    component: newAddress
  },
  {
    path:'/editaddress/:id',
    component: editAddress
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path:'/:pathMatch(.*)*',
    name: 'NotFound',
    component:Notfound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
