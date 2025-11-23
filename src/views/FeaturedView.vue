<template>
  <div class="featured">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <span>Your current location:</span>
      <router-link to="/" class="breadcrumb-link">HOME</router-link>
      <span class="breadcrumb-separator">></span>
      <span class="breadcrumb-current">Featured</span>
      <span class="breadcrumb-separator">></span>
    </div>

    <!-- 宝石展示网格 -->
    <div class="gem-grid">
      <!-- 第一行宝石 -->
      <div class="gem-item" @click="navigateToGemDetail('1')">
        <div class="gem-image">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iI2VjYTllNCIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=" alt="Kunzite" class="gem-img">
        </div>
        <h3 class="gem-name">Kunzite</h3>
        <p class="gem-description">Kunzite is the best-known variety of the mineral spodumene. It's named after...</p>
      </div>

      <div class="gem-item" @click="navigateToGemDetail('2')">
        <div class="gem-image">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iIzM3YjZhZSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=" alt="Aquamarine" class="gem-img">
        </div>
        <h3 class="gem-name">AQUAMARINE</h3>
        <p class="gem-description">Aquamarine's name comes from the Latin seawater. It was said to calm waves...</p>
      </div>

      <div class="gem-item" @click="navigateToGemDetail('3')">
        <div class="gem-image">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iIzE5NzQwMCIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=" alt="Emerald" class="gem-img">
        </div>
        <h3 class="gem-name">EMERALD</h3>
        <p class="gem-description">Gem experts differ on the degree of green that makes one stone an emerald anoth...</p>
      </div>

      <div class="gem-item" @click="navigateToGemDetail('4')">
        <div class="gem-image">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iI2Y0ODAzMiIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=" alt="Citrine" class="gem-img">
        </div>
        <h3 class="gem-name">Citrine</h3>
        <p class="gem-description">Citrine is rare in nature. In the days before modern gemology, its tawny col cause...</p>
      </div>

      <!-- 第二行宝石 -->
      <div class="gem-item" @click="navigateToGemDetail('5')">
        <div class="gem-image">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iIzM0NDRmOSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=" alt="Blue Sapphire" class="gem-img">
        </div>
        <h3 class="gem-name">Blue Sapphire</h3>
        <p class="gem-description">Blue sapphires are perhaps the most sought-after of all sapphire varieties, known...</p>
      </div>

      <div class="gem-item" @click="navigateToGemDetail('6')">
        <div class="gem-image">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iI2RkNTlkYSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=" alt="Pink Sapphire" class="gem-img">
        </div>
        <h3 class="gem-name">Pink Sapphire</h3>
        <p class="gem-description">Pink sapphires range from delicate pastel to vivid hot pink, with the most valuable...</p>
      </div>

      <div class="gem-item" @click="navigateToGemDetail('7')">
        <div class="gem-image">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iIzM2MjMxYSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=" alt="Green Garnet" class="gem-img">
        </div>
        <h3 class="gem-name">Green Garnet</h3>
        <p class="gem-description">Green garnets come in several varieties, with tsavorite being the most famous and...</p>
      </div>

      <div class="gem-item" @click="navigateToGemDetail('8')">
        <div class="gem-image">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwLDAgTDIwMCwxMDAgTDEwMCwyMDAgTDAxMDAgWiIgZmlsbD0iIzVlMWJhYSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4=" alt="Spessartite" class="gem-img">
        </div>
        <h3 class="gem-name">Spessartite</h3>
        <p class="gem-description">Spessartite is a rare orange to reddish-orange garnet that gets its name from the...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

// 跳转到宝石详情页
const navigateToGemDetail = (id: string) => {
  router.push(`/featured/${id}`);
};
</script>

<style scoped>
.featured {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 面包屑导航 */
.breadcrumb {
  margin-bottom: 3rem;
  font-size: 0.9rem;
  color: #000;
}

.breadcrumb-link {
  color: #000;
  text-decoration: none;
  font-weight: 400;
}

.breadcrumb-separator {
  color: #000;
  margin: 0 0.5rem;
  font-size: 1rem;
}

.breadcrumb-current {
  color: #000;
  font-weight: 400;
}

/* 宝石网格布局 */
.gem-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.gem-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gem-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.gem-image {
  margin-bottom: 1.5rem;
}

.gem-img {
  width: 160px;
  height: 160px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.gem-img:hover {
  transform: scale(1.05);
}

.gem-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.gem-description {
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;
  max-width: 200px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .gem-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .gem-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
  
  .gem-img {
    width: 140px;
    height: 140px;
  }
  
  .breadcrumb {
    margin-bottom: 2rem;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .gem-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .gem-img {
    width: 180px;
    height: 180px;
  }
  
  .featured {
    padding: 1rem;
  }
  
  .breadcrumb {
    font-size: 0.75rem;
  }
}
</style>