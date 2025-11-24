<template>
  <div class="featured-detail">
    <!-- 钻石背景横幅 -->
    <!-- <div class="diamond-banner">
      <img 
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMCIgd2lkdGg9IjEwMDAiIGhlaWdodD0iMTAwIj4KICA8cmVjdCB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiLz4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjEpIi8+CiAgPHJlY3QgeD0iMjUwIiB5PSI0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjIpIi8+CiAgPHJlY3QgeD0iMTUwIiB5PSIzMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjMpIi8+CiAgPHJlY3QgeD0iMTAwIiB5PSI1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjQpIi8+CiAgPHJlY3QgeD0iMjAwIiB5PSIyMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjUpIi8+CiAgPHJlY3QgeD0iMzAwIiB5PSI0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjYpIi8+CiAgPHJlY3QgeD0iNDAwIiB5PSIyMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjcpIi8+CiAgPHJlY3QgeD0iNDUwIiB5PSI1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjgpIi8+CiAgPHJlY3QgeD0iMzUwIiB5PSI3MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjlpIi8+CiAgPHJlY3QgeD0iNTAwIiB5PSI0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjEwKSIvPgogIDxyZWN0IHg9IjU1MCIgeT0iNjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0idXJsKCNmaWx0ZXIxMSkiLz4KICA8cmVjdCB4PSI2MDAiIHk9IjMwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjUiIGZpbGw9InVybCgjZmlsdGVyMTIpIi8+CiAgPHJlY3QgeD0iNjUwIiB5PSI1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjEzKSIvPgogIDxyZWN0IHg9IjUwMCIgeT0iMjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0idXJsKCNmaWx0ZXIxNCkiLz4KICA8cmVjdCB4PSI3MDAiIHk9IjQwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjUiIGZpbGw9InVybCgjZmlsdGVyMTUpIi8+CiAgPHJlY3QgeD0iNzUwIiB5PSI2MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjE2KSIvPgogIDxyZWN0IHg9Ijg1MCIgeT0iMzAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0idXJsKCNmaWx0ZXIxNykiLz4KICA8cmVjdCB4PSI4MDAiIHk9IjUwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjUiIGZpbGw9InVybCgjZmlsdGVyMTgpIi8+CiAgPHJlY3QgeD0iOTAwIiB5PSI0MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1IiBmaWxsPSJ1cmwoI2ZpbHRlcjE5KSIvPgogIDxyZWN0IHg9Ijc1MCIgeT0iMjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iNSIgZmlsbD0idXJsKCNmaWx0ZXIyMCkiLz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXIxIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjIiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxKSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGwtb3BhY2l0eT0iMC4xNSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9IiNmZmYiLz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXIzIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBvcGFjaXR5PSIwLjEiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjZmZmIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXI0KSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGwtb3BhY2l0eT0iMC4xMyIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9IiNmZmYiLz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXI1IiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBvcGFjaXR5PSIwLjAyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXI2KSIgb3BhY2l0eT0iMC4wOCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXI3IiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBvcGFjaXR5PSIwLjA5IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXI4KSIgb3BhY2l0eT0iMC4xMiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8ZmlsdGVyIGlkPSJmaWx0ZXI5aSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbHRlcj0idXJsKCNmaWx0ZXI5aSkiIG9wYWNpdHk9IjAuMDciIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjZmZmIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxMCkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjA1IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXIxMSkiIG9wYWNpdHk9IjAuMDciIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxMikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjA2IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXIxMykiIG9wYWNpdHk9IjAuMDUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxNikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjA0IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXIxNSkiIG9wYWNpdHk9IjAuMDMiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxNikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjA2IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXIxNikiIG9wYWNpdHk9IjAuMDUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxOikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjA0IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXIxOikiIG9wYWNpdHk9IjAuMDMiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIxMikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjA0IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgogIDxmZXR1cmUgY29sb3I9IiNmZmYiIGZpbHRlcj0idXJsKCNmaWx0ZXIxOikiIG9wYWNpdHk9IjAuMDMiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPGZpbHRlcj0idXJsKCNmaWx0ZXIyMikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjAyIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=
        " 
        alt="Diamonds Background" 
        class="diamond-bg"
      >
    </div> -->

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
import { getGemById } from '@/utils/common';

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
.diamond-banner {
  width: 100%;
  height: 120px;
  overflow: hidden;
  margin-bottom: 2rem;
  border-radius: 8px;
}

.diamond-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
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