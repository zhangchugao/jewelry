<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import BackToTop from './components/BackToTop.vue';
</script>

<template>
  <div class="app">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <BackToTop />
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
