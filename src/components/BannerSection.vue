<template>
  <div class="banner">
    <div class="banner-container">
      <div 
        v-for="(image, index) in bannerImages" 
        :key="index"
        class="banner-image"
        :class="{ active: currentIndex === index }"
      >
        <img :src="image" alt="Jewelry Banner" class="banner-img">
      </div>
      
      <!-- 左右切换按钮 -->
    <button class="banner-btn prev-btn" @click="prevSlide" aria-label="Previous slide">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
    <button class="banner-btn next-btn" @click="nextSlide" aria-label="Next slide">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
    </div>
    <!-- 轮播指示器 -->
    <div class="banner-indicators">
      <div 
        v-for="(image, index) in bannerImages" 
        :key="index"
        class="indicator"
        :class="{ active: currentIndex === index }"
        @click="currentIndex = index"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { getBannerImages } from '../utils/common';

// 获取所有轮播图片
const bannerImages = getBannerImages();
// 当前显示的图片索引
const currentIndex = ref(0);
// 轮播定时器
let timer: number | null = null;

// 自动轮播函数
const startCarousel = () => {
  timer = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % bannerImages.length;
  }, 10000); // 每10秒切换一次
};

// 上一张幻灯片
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + bannerImages.length) % bannerImages.length;
};

// 下一张幻灯片
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % bannerImages.length;
};

// 组件挂载时启动轮播
onMounted(() => {
  startCarousel();
});

// 组件卸载时清除定时器
onUnmounted(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<style scoped>
.banner {
  width: 100%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  /* height: 600px; 设置轮播图高度 */
}

.banner-container {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner-container {
    height: 250px;
  }
}

@media (max-width: 480px) {
  .banner-container {
    height: 150px;
  }
}

.banner-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.banner-image.active {
  opacity: 1;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 轮播指示器样式 */
.banner-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: rgba(255, 255, 255, 0.9);
  transform: scale(1.2);
}

/* 轮播切换按钮 */
.banner-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.banner-btn:hover {
  background-color: rgba(212, 175, 55, 0.9);
  color: white;
  border-color: rgba(212, 175, 55, 0.9);
  transform: translateY(-50%) scale(1.15);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.3);
}

.banner-btn:active {
  transform: translateY(-50%) scale(1.05);
}

.prev-btn {
  left: 30px;
}

.next-btn {
  right: 30px;
}

/* 优化SVG图标显示 */
.banner-btn svg {
  transition: all 0.3s ease;
}

.banner-btn:hover svg {
  transform: scale(1.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner-btn {
    width: 40px;
    height: 40px;
  }
  
  .prev-btn {
    left: 15px;
  }
  
  .next-btn {
    right: 15px;
  }
  
  .banner-btn svg {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .banner-btn {
    width: 35px;
    height: 35px;
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  .prev-btn {
    left: 10px;
  }
  
  .next-btn {
    right: 10px;
  }
  
  .banner-btn svg {
    width: 16px;
    height: 16px;
  }
}
</style>