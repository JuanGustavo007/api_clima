<template>


  <Clima></Clima>

  
</template>

<script>
import Clima from './components/Clima.vue';




export default {
    name: "App",
    components: { Clima },

    
}
</script>

<style>
body{
        display: flex;
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: center;
}
</style>
