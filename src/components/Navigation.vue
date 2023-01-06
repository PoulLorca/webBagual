<template>
    <nav>
    <router-link to="/">Login</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/home">Home</router-link>|
    <router-link to="/register">Register</router-link>|
    <router-link to="/address">Address</router-link>|
  </nav>
  </template>
  
  <script>
  export default {
    name: "Navigation"
  };
  </script>
  
  <style scoped>
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    display: inline-block;
    padding: 1em 0.5em;
  }
  </style>