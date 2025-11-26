<template>
  <div class="news-detail">
    <!-- 钻石图片横幅 -->
    <div class="news-banner">
      <div class="banner-image">
        <img :src="bannerImage" alt="Gemstone detail" class="banner-img">
      </div>
    </div>

    <!-- 主要内容容器 -->
    <div class="news-detail-container">
      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <span>Your current location:</span>
        <router-link to="/" class="breadcrumb-link">HOME</router-link>
        <span class="breadcrumb-separator">></span>
        <router-link to="/news" class="breadcrumb-link">News</router-link>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">{{ currentNews?.title || 'News Detail' }}</span>
      </div>

      <!-- 新闻详情内容 -->
      <div class="news-detail-content">
        <!-- 标题和日期区域 -->
        <div class="news-detail-header">
          <div class="news-detail-date">
            <div class="news-detail-year">{{ currentNews?.year || '' }}</div>
            <div class="news-detail-month">{{ currentNews?.month || '' }}</div>
            <div class="news-detail-time">02:48:01</div>
          </div>
          <h1 class="news-detail-title">{{ currentNews?.title || 'News Detail' }}</h1>
        </div>

        <!-- 分隔线 -->
        <div class="news-detail-divider"></div>

        <!-- 详情文本 -->
        <div class="news-detail-text">
          <p class="news-detail-paragraph">{{ currentNews?.description || '' }}</p>
          <p class="news-detail-paragraph">
            {{ currentNews?.fullContent || '' }}
          </p>
          <!-- 额外内容段落 -->
          <p class="news-detail-paragraph">
            {{ currentNews?.additionalContent || '' }}
          </p>
        </div>

        <!-- 返回按钮 -->
        <button class="back-button" @click="goBack">
          <span class="back-arrow">←</span> Back to News List
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getRandomBannerImage } from '../utils/common';

const route = useRoute();
const router = useRouter();

// NewsDetail页面固定使用第五张图片（与News页面相同）
const bannerImage = getRandomBannerImage('newsDetail');

// 模拟新闻详情数据
const newsDetails = ref([
  {
    id: 1,
    year: '2020',
    month: '04.02',
    title: 'Kunzite is the best-known',
    description: 'Aquamarine\'s name comes from the Latin seawater. It was said to calm waves and protect sailors from storms at sea. Today, it is still associated with courage, clarity, and communication.',
    fullContent: 'The gemstone forms in large crystals, making it suitable for various jewelry applications. Its most valuable color is a pure, intense blue to slightly greenish-blue hue. Aquamarine is relatively durable, with a hardness of 7.5-8 on the Mohs scale, making it suitable for everyday wear in rings, necklaces, and earrings.',
    additionalContent: 'Many cultures throughout history have attributed magical properties to aquamarine. It was believed to enhance intuition and foresight, and was often used by sailors as a protective talisman against the dangers of the sea. Today, it remains a popular choice for engagement rings and anniversary gifts.'
  },
  {
    id: 2,
    year: '2020',
    month: '03.15',
    title: 'The history of Pearls',
    description: 'Pearls have been treasured for centuries as symbols of purity and wisdom. Unlike other gemstones, pearls are formed inside living creatures - oysters and mollusks - making them unique in the gem world.',
    fullContent: 'Natural pearls are extremely rare and valuable, formed when an irritant accidentally enters an oyster or mollusk. Cultured pearls, developed in the late 19th century, involve the intentional insertion of a bead or piece of tissue to initiate the pearl-forming process.',
    additionalContent: 'Pearls have been worn by royalty and nobility throughout history. In ancient Rome, pearls were considered the ultimate symbol of wealth and social status. Today, pearls continue to be highly prized for their timeless beauty and are a staple in fine jewelry collections around the world.'
  },
  {
    id: 3,
    year: '2020',
    month: '02.10',
    title: 'Ruby: The King of Gemstones',
    description: 'Rubies have been considered the king of gemstones for millennia. Their vivid red color symbolizes passion, love, and power. The finest rubies come from Myanmar, though they are also found in Thailand, Sri Lanka, and Madagascar.',
    fullContent: 'The value of a ruby is primarily determined by its color, with the most prized being a pigeon blood red with a slight blue undertone. Rubies are composed of corundum, the same mineral as sapphires, with their red color coming from traces of chromium.',
    additionalContent: 'Throughout history, rubies have been associated with protection, prosperity, and passion. In ancient times, warriors wore rubies into battle, believing they provided invulnerability. Today, rubies remain among the most valuable gemstones, with exceptional specimens commanding prices higher than diamonds of comparable size.'
  },
  {
    id: 4,
    year: '2020',
    month: '01.22',
    title: 'Sapphire: Beyond Blue',
    description: 'While sapphires are most famous for their blue varieties, they actually come in nearly every color of the rainbow. The only exception is red, which would make them rubies. Sapphires symbolize wisdom, truth, and faithfulness.',
    fullContent: 'Blue sapphires range from light sky blue to deep royal blue, with the most valuable being a medium-deep violet-blue known as cornflower blue. Like rubies, sapphires are composed of corundum, with their color coming from traces of iron and titanium.',
    additionalContent: 'Sapphires have a long history of use in royal jewelry. The British Crown Jewels contain several famous sapphires, including the Stuart Sapphire. Sapphires are also the traditional birthstone for September and are often used in engagement rings as an alternative to diamonds.'
  }
]);

// 根据路由参数获取当前新闻
const currentNews = computed(() => {
  const id = parseInt(route.params.id as string);
  const news = newsDetails.value.find(news => news.id === id);
  // 确保返回有效的新闻数据
  return news || newsDetails.value[0];
});

// 钻石图片数据（备用）
const detailImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2ltYWdlKSI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE4MTgwMSIgZmlsbC1vcGFjaXR5PSIwLjc1Ii8+CiAgPHJlY3QgeD0iMjUiIHk9IjIwIiB3aWR0aD0iNTAlIiBoZWlnaHQ9IjcwJSIgZmlsbD0icmdiYSgxODAsIDE2MCwgMTQwLCAwLjIpIi8+CiAgPGNpcmNsZSBjeD0iNTAlIiBjeT0iNTAlIiByPSIzMCUiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPgo8L3N2Zz4=';

// 返回上一页
const goBack = () => {
  router.push('/news');
};
</script>

<style scoped>
.news-detail {
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

/* 新闻详情横幅 */
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

/* 主要内容容器 */
.news-detail-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

/* 面包屑导航 */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  font-size: 0.9rem;
  animation: slideIn 0.6s ease-out;
  color: #000;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
}

.breadcrumb span {
  min-height: auto;
  min-width: auto;
  display: inline-block;
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
  color: #000;
  text-decoration: none;
  font-weight: 400;
  min-height: auto;
  min-width: auto;
  display: inline-block;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: var(--primary-color);
}

.breadcrumb-separator {
  color: #000;
  font-size: 1rem;
  min-height: auto;
  min-width: auto;
  display: inline-block;
}

.breadcrumb-current {
  color: #000;
  font-weight: 400;
  min-height: auto;
  min-width: auto;
  display: inline-block;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 新闻详情内容 */
.news-detail-content {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 标题和日期区域 */
.news-detail-header {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.news-detail-date {
  min-width: 120px;
  padding: 1.5rem;
  background-color: #4a4a4a;
  text-align: center;
  border-radius: 0;
  border: none;
}

.news-detail-year {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.5rem;
}

.news-detail-month {
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.news-detail-time {
  font-size: 0.9rem;
  color: #e0e0e0;
}

.news-detail-title {
  font-size: 2rem;
  font-weight: 500;
  color: var(--secondary-color);
  margin: 0;
  line-height: 1.3;
}

/* 分隔线 */
.news-detail-divider {
  height: 2px;
  background: linear-gradient(to right, var(--primary-color), transparent);
  margin: 2rem 0 3rem 0;
  opacity: 0.7;
}

/* 详情文本 */
.news-detail-text {
  line-height: 1.8;
  color: #333;
  margin-bottom: 3rem;
}

.news-detail-paragraph {
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
  color: #444;
}

/* 返回按钮 */
.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: #f8f8f8;
  border: 1px solid #e0e0e0;
  color: #333;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.back-button:hover {
  background-color: var(--primary-color);
  color: #fff;
  border-color: var(--primary-color);
  transform: translateX(-3px);
}

.back-arrow {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.back-button:hover .back-arrow {
  transform: translateX(-3px);
}

/* 响应式设计 */
@media (max-width: 992px) {
  .news-detail-container {
    padding: 2.5rem 1.5rem;
  }
  
  .news-detail-banner {
    height: 350px;
  }
  
  .news-detail-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .news-detail-banner {
    height: 250px;
  }
  
  .news-detail-container {
    padding: 2rem 1rem;
  }
  
  .news-detail-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .news-detail-date {
    width: 100%;
    max-width: 150px;
    align-self: flex-start;
  }
  
  .news-detail-title {
    font-size: 1.6rem;
  }
  
  .breadcrumb {
    margin-bottom: 2rem;
    font-size: 0.85rem;
  }
  
  .breadcrumb-current {
    max-width: 150px;
  }
}

@media (max-width: 480px) {
  .news-detail-banner {
    height: 200px;
  }
  
  .news-detail-title {
    font-size: 1.4rem;
  }
  
  .news-detail-text {
    line-height: 1.7;
  }
  
  .news-detail-paragraph {
    font-size: 0.95rem;
  }
  
  .back-button {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
    width: 100%;
    justify-content: center;
  }
  
  .breadcrumb {
    font-size: 0.8rem;
  }
  
  .breadcrumb-current {
    max-width: 100px;
  }
}

/* H5设备优化 */
@media (max-width: 768px) {
  .back-button {
    touch-action: manipulation;
  }
}

/* 触摸优化 */
.back-button:active {
  transform: scale(0.98);
}
</style>