<template>
  <div class="news">
    <!-- 钻石图片横幅 -->
    <div class="news-banner">
      <div class="banner-image">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2ltYWdlKSI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE4MTgwMSIgZmlsbC1vcGFjaXR5PSIwLjc1Ii8+CiAgPHJlY3QgeD0iMjUiIHk9IjIwIiB3aWR0aD0iNTAlIiBoZWlnaHQ9IjcwJSIgZmlsbD0icmdiYSgxODAsIDE2MCwgMTQwLCAwLjIpIi8+CiAgPGNpcmNsZSBjeD0iNTAlIiBjeT0iNTAlIiByPSIzMCUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPgo8L3N2Zz4=" alt="Diamonds" class="banner-img">
      </div>
    </div>

    <!-- 主要内容容器 -->
    <div class="news-container">
      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <router-link to="/" class="breadcrumb-link">HOME</router-link>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">News</span>
      </div>

      <!-- 新闻列表 -->
      <div class="news-list">
        <!-- 使用v-for渲染新闻列表 -->
        <div 
          v-for="(news, index) in newsItems" 
          :key="index" 
          class="news-item"
          @click="navigateToNewsDetail(news.id)"
        >
          <div class="news-date">
            <div class="news-year">{{ news.year }}</div>
            <div class="news-month">{{ news.month }}</div>
          </div>
          <div class="news-content">
            <h3 class="news-title">{{ news.title }}</h3>
            <p class="news-description">{{ news.description }}</p>
            <div class="news-divider"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// 导入但暂时注释掉，需要时可以启用
// import { useRouter } from 'vue-router';

// 暂时注释掉，需要时可以启用
// const router = useRouter();

// 新闻数据
const newsItems = ref([
  {
    id: 1,
    year: '2020',
    month: '04.02',
    title: 'Kunzite is the best-known',
    description: 'Aquamarine\'s name comes from the Latin seawater. It was said to calm waves and protect sailors from storms at sea. Today, it is still associated with courage, clarity, and communication.'
  },
  {
    id: 2,
    year: '2020',
    month: '03.15',
    title: 'The history of Pearls',
    description: 'Pearls have been treasured for centuries as symbols of purity and wisdom. Unlike other gemstones, pearls are formed inside living creatures - oysters and mollusks - making them unique in the gem world.'
  },
  {
    id: 3,
    year: '2020',
    month: '02.10',
    title: 'Ruby: The King of Gemstones',
    description: 'Rubies have been considered the king of gemstones for millennia. Their vivid red color symbolizes passion, love, and power. The finest rubies come from Myanmar, though they are also found in Thailand, Sri Lanka, and Madagascar.'
  },
  {
    id: 4,
    year: '2020',
    month: '01.22',
    title: 'Sapphire: Beyond Blue',
    description: 'While sapphires are most famous for their blue varieties, they actually come in nearly every color of the rainbow. The only exception is red, which would make them rubies. Sapphires symbolize wisdom, truth, and faithfulness.'
  }
]);

// 导航到新闻详情页
const navigateToNewsDetail = (id: number) => {
  // 这里可以实现跳转到新闻详情页的逻辑
  // 目前只是添加点击效果，实际项目中可能需要路由到详情页
  // router.push(`/news/${id}`);
  console.log(`Navigate to news detail: ${id}`);
};
</script>

<style scoped>
.news {
  width: 100%;
  overflow-x: hidden;
  animation: fadeIn 0.8s ease-in-out;
}

/* 全局动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

/* 主要内容容器 */
.news-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 面包屑导航 */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  font-size: 0.9rem;
  animation: slideIn 0.6s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.breadcrumb-link {
  color: #000; /* 修改为黑色 */
  text-decoration: none;
  font-weight: 400;
}

.breadcrumb-separator {
  color: #000;
  font-size: 1rem;
}

.breadcrumb-current {
  color: #000;
  font-weight: 400;
}

/* 新闻列表 */
.news-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.news-item {
  display: flex;
  gap: 2rem;
  padding-bottom: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.news-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 0;
  background-color: var(--primary-color);
  transition: height 0.3s ease;
}

.news-item:hover::before {
  height: 100%;
}

.news-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

/* 日期样式 */
.news-date {
  min-width: 100px;
  padding: 1rem;
  background-color: #4a4a4a; /* 修改为深灰色背景 */
  text-align: center;
  border-radius: 0; /* 移除圆角 */
  border: none;
}

.news-year {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.5rem;
}

.news-month {
  font-size: 1rem;
  color: #fff;
}

/* 新闻内容 */
.news-content {
  flex: 1;
  position: relative;
}

.news-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.news-title:hover {
  color: var(--primary-color);
  transform: translateX(5px);
}

.news-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.news-item:hover .news-description {
  color: #444;
}

.news-divider {
  height: 1px;
  background: linear-gradient(to right, var(--primary-color), transparent);
  margin-top: 1rem;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.news-item:hover .news-divider {
  opacity: 1;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .news-container {
    padding: 1.5rem;
  }
  
  .news-banner {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .news-banner {
    height: 200px;
  }
  
  .news-container {
    padding: 1rem;
  }
  
  .news-item {
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1.5rem;
  }
  
  .news-date {
    width: 100%;
    max-width: 120px;
    align-self: flex-start;
  }
  
  .breadcrumb {
    margin-bottom: 2rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .news-banner {
    height: 150px;
  }
  
  .news-title {
    font-size: 1.1rem;
  }
  
  .news-description {
    font-size: 0.9rem;
  }
  
  .news-date {
    max-width: 100px;
    padding: 0.8rem;
  }
  
  .news-year {
    font-size: 1.2rem;
  }
  
  .news-month {
    font-size: 0.9rem;
  }
}

/* H5设备优化 */
@media (max-width: 768px) {
  .news-item {
    touch-action: manipulation;
  }
}

/* 触摸优化 */
.news-item:active {
  transform: scale(0.98);
}
</style>