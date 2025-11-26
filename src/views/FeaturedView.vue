<template>
  <div>
    <!-- 钻石图片横幅 - 放在容器外部，使其横向填满整个屏幕 -->
    <div class="news-banner">
      <div class="banner-image">
        <img :src="bannerImage" alt="Diamonds" class="banner-img">
      </div>
    </div>
    
    <!-- 其他内容放在居中容器内 -->
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
        <div 
          v-for="gem in gems" 
          :key="gem.id" 
          class="gem-item" 
          @click="navigateToGemDetail(gem.id)"
        >
          <div class="gem-image">
            <img :src="gem.imageUrl" :alt="gem.name" class="gem-img">
          </div>
          <h3 class="gem-name">{{ gem.name }}</h3>
          <p class="gem-description">{{ gem.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { gems, getRandomBannerImage } from '@/utils/common';

const router = useRouter();

// 随机获取顶部背景图
const bannerImage = getRandomBannerImage('featured');

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

/* 横幅样式 */
.news-banner {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.banner-image {
  width: 100%;
  height: 100%;
  position: relative;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.banner-img:hover {
  transform: scale(1.02);
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
  /* 最多显示三行，超出部分省略号 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-word;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .gem-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .news-banner {
    height: 250px;
  }
  
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
  .news-banner {
    height: 150px;
  }
  
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