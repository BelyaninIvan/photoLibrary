<script>
  import Navbar from '@/components/Navbar.vue'
  export default {
    components: {
      Navbar
    }
  }
</script>

<template>
  <Navbar/>
  <div class="app">
    <router-view>

    </router-view>
  </div>
</template>

<style>
  
</style>