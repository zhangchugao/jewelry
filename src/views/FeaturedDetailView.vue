<template>
  <div class="featured-detail">
    <!-- 钻石背景横幅 -->
    <div class="news-banner">
      <div class="banner-image">
        <img 
          :src="bannerImage" 
          alt="Jewelry Background" 
          class="banner-img"
        >
      </div>
    </div>

    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <span>Your current location:</span>
      <router-link to="/" class="breadcrumb-link">HOME</router-link>
      <span class="breadcrumb-separator">></span>
      <router-link to="/featured" class="breadcrumb-link">Featured</router-link>
      <span class="breadcrumb-separator">></span>
      <span class="breadcrumb-current">{{ currentGem?.name }}</span>
    </div>

    <!-- 宝石详情内容 -->
    <div class="gem-detail-content">
      <h1 class="gem-title">{{ currentGem?.name }}</h1>
      
      <!-- 宝石信息和图片区域 -->
      <div class="gem-info-section">
        <div class="gem-main-image">
          <img :src="currentGem?.imageUrl" :alt="currentGem?.name" class="gem-img">
        </div>
        
        <div class="gem-meta">
          <p class="gem-time">Time: {{ currentGem?.time }}</p>
        </div>
      </div>

      <!-- 宝石描述内容 -->
      <div class="gem-description-section">
        <div class="gem-description-text">
          <p>{{ currentGem?.description }}</p>
          <p v-if="currentGem?.fullContent">{{ currentGem?.fullContent }}</p>
        </div>
      </div>
    </div>

    <!-- 返回按钮 -->
    <div class="back-button-container">
      <button @click="goBack" class="back-button">
        ← Back to Featured List
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getGemById, getRandomBannerImage } from '@/utils/common';

// FeaturedDetail页面固定使用第三张图片
const bannerImage = getRandomBannerImage('featuredDetail');

const route = useRoute();
const router = useRouter();

// 根据路由参数获取当前宝石数据
const currentGem = computed(() => {
  const id = route.params.id as string;
  return getGemById(id);
});

// 返回上一页
const goBack = () => {
  router.push('/featured');
};
</script>

<style scoped>
.featured-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  animation: fadeIn 0.5s ease-in;
}

/* 钻石背景横幅 */
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

/* 响应式设计 */
@media (max-width: 768px) {
  .news-banner {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .news-banner {
    height: 150px;
  }
}

/* 面包屑导航 */
.breadcrumb {
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #000;
}

.breadcrumb-link {
  color: #000;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #666;
}

.breadcrumb-separator {
  color: #000;
  margin: 0 0.5rem;
  font-size: 1rem;
}

.breadcrumb-current {
  color: #000;
  font-weight: bold;
}

/* 宝石详情内容 */
.gem-detail-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: slideIn 0.6s ease-out;
}

.gem-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

/* 宝石信息和图片区域 */
.gem-info-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.gem-main-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.gem-img {
  width: 280px;
  height: 280px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.gem-img:hover {
  transform: scale(1.05);
}

.gem-meta {
  text-align: center;
}

.gem-time {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

/* 宝石描述内容 */
.gem-description-section {
  background-color: #f9f9f9;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.gem-description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.gem-description-text p {
  margin-bottom: 1.5rem;
}

.gem-description-text p:last-child {
  margin-bottom: 0;
}

/* 返回按钮 */
.back-button-container {
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
}

.back-button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #666;
  background-color: #f8f8f8;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.back-button:hover {
  background-color: #e0e0e0;
  color: #333;
  transform: translateX(-3px);
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 992px) {
  .featured-detail {
    padding: 1.5rem;
  }
  
  .gem-title {
    font-size: 2rem;
  }
  
  .gem-img {
    width: 240px;
    height: 240px;
  }
  
  .gem-description-section {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .featured-detail {
    padding: 1.2rem;
  }
  
  .diamond-banner {
    height: 100px;
  }
  
  .gem-title {
    font-size: 1.8rem;
  }
  
  .gem-img {
    width: 200px;
    height: 200px;
  }
  
  .gem-description-text {
    font-size: 1rem;
  }
  
  .breadcrumb {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .featured-detail {
    padding: 1rem;
  }
  
  .diamond-banner {
    height: 80px;
    margin-bottom: 1.5rem;
  }
  
  .gem-title {
    font-size: 1.5rem;
  }
  
  .gem-main-image {
    padding: 1.5rem;
  }
  
  .gem-img {
    width: 180px;
    height: 180px;
  }
  
  .gem-description-section {
    padding: 1.5rem;
  }
  
  .breadcrumb {
    font-size: 0.75rem;
    margin-bottom: 1.5rem;
  }
  
  .breadcrumb-separator {
    margin: 0 0.3rem;
  }
  
  .back-button {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
    width: 100%;
  }
}
</style>