<script>
  import Navbar from '@/components/Navbar.vue'
  export default {
    components: {
      Navbar
    }
  }
</script>

<template>
  <div class="app">
    <router-view>

    </router-view>
  </div>
</template>

<style>
  *{
    box-sizing: border-box;
  }
  .app {
    margin: 0;
    padding: 0;

    font-family: 'Arial', sans-serif;
    color: white;

    background: rgb(48,43,64);
    background: linear-gradient(180deg, rgba(48,43,64,1) 0%, rgba(97,97,97,1) 100%);
  }
</style>