<template>
    <img v-if="img"  v-bind:src="img">
    <img v-else v-bind:src="imageDefault">
</template>

<script>
    export default {
        name:'img',
        data:()=>({
            img:null
        })
    }
</script>

<style lang="css" scoped>
img{
    max-width: 100%;
}
</style>