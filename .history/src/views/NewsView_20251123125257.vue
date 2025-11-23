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
        <!-- 新闻项1 -->
        <div class="news-item">
          <div class="news-date">
            <div class="news-year">2020</div>
            <div class="news-month">04.02</div>
          </div>
          <div class="news-content">
            <h3 class="news-title">Kunzite is the best-known</h3>
            <p class="news-description">Aquamarine's name comes from the Latin seawater. It was said to calm waves ...</p>
            <div class="news-divider"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 可以在这里添加更多的新闻数据和方法
</script>

<style scoped>
.news {
  width: 100%;
  overflow-x: hidden;
}

/* 横幅样式 */
.news-banner {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
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
  color: #666;
}

.breadcrumb-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: var(--primary-color);
}

.breadcrumb-separator {
  color: #ccc;
}

.breadcrumb-current {
  color: var(--primary-color);
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
}

.news-item:hover {
  transform: translateY(-5px);
}

/* 日期样式 */
.news-date {
  min-width: 100px;
  padding: 1rem;
  background-color: #f9f9f9;
  text-align: center;
  border-left: 3px solid var(--primary-color);
}

.news-year {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.news-month {
  font-size: 1rem;
  color: #666;
}

/* 新闻内容 */
.news-content {
  flex: 1;
}

.news-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.news-title:hover {
  color: var(--primary-color);
}

.news-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.news-divider {
  height: 1px;
  background-color: #e0e0e0;
  margin-top: 1rem;
}

/* 响应式设计 */
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
  }
  
  .news-date {
    width: 100%;
  }
}
</style>