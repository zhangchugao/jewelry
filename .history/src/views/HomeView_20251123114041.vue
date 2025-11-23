<template>
  <div class="home">
    <!-- 横幅部分 -->
    <BannerSection />
    
    <!-- 证书查询部分 -->
    <CertificateSection />
  </div>
</template>

<script setup lang="ts">
import BannerSection from '../components/BannerSection.vue';
import CertificateSection from '../components/CertificateSection.vue';
</script>

<style scoped>
.home {
  width: 100%;
  overflow-x: hidden;
}
</style>