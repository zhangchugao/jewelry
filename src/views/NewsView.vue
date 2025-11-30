<template>
  <div class="news">
    <!-- 钻石图片横幅 -->
    <div class="news-banner">
      <div class="banner-image">
        <img :src="bannerImage" alt="Diamonds" class="banner-img">
      </div>
    </div>

    <!-- 主要内容容器 -->
    <div class="news-container">
      <!-- 面包屑导航 -->
      <div class="breadcrumb">
        <span>Your current location:</span>
        <router-link to="/" class="breadcrumb-link">HOME</router-link>
        <span class="breadcrumb-separator">></span>
        <span class="breadcrumb-current">News</span>
        <span class="breadcrumb-separator">></span>
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <p>Loading news...</p>
      </div>

      <!-- 错误状态 -->
      <div v-else-if="error" class="error-container">
        <p class="error-message">{{ error }}</p>
        <button class="retry-button" @click="fetchNews">Retry</button>
      </div>

      <!-- 新闻列表 -->
      <div v-else class="news-list">
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
            <div class="news-source">{{ news.source }}</div>
            <div class="news-divider"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getRandomBannerImage } from '../utils/common';
import { get } from '../api/http';

const router = useRouter();

// News页面固定使用第五张图片
const bannerImage = getRandomBannerImage('news');

// 新闻数据
const newsItems = ref<any[]>([]);
const loading = ref(false);
const error = ref('');

// 格式化日期为所需格式
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return { year, month: `${month}.${day}` };
};

// 从免费新闻API获取数据
const fetchNews = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    // 使用NewsAPI.org的免费API (需要自行注册获取API key)
    // 注意：这里使用的是一个模拟的API地址，实际使用时需要替换为真实的API
    
    // 方法1：使用本地模拟数据 (确保应用可以正常运行)
    // 如果API调用失败，使用模拟数据作为备选
    simulateNewsApi();
    
    // 方法2：实际API调用（注释掉的代码，实际使用时取消注释并配置API key）
    /*
    const apiKey = 'your_api_key_here'; // 替换为实际的API key
    const response = await get(`https://newsapi.org/v2/everything?q=jewelry+gemstones&sortBy=publishedAt&apiKey=${apiKey}`);
    
    // 转换API返回的数据格式以匹配我们的组件需求
    newsItems.value = response.articles.map((article: any, index: number) => {
      const { year, month } = formatDate(article.publishedAt);
      return {
        id: index + 1,
        year,
        month,
        title: article.title,
        description: article.description || 'Read more about this news...',
        source: article.source.name,
        url: article.url
      };
    });
    */
  } catch (err) {
    console.error('Failed to fetch news:', err);
    error.value = 'Failed to load news. Please try again later.';
    // 出错时使用模拟数据确保页面可以正常显示
    simulateNewsApi();
  } finally {
    loading.value = false;
  }
};

// 模拟新闻API数据
const simulateNewsApi = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  
  // Using jewelry-related mock news data - with more article content
  newsItems.value = [
    {
      id: 1,
      year: currentYear,
      month: `${currentMonth}.${currentDate.getDate().toString().padStart(2, '0')}`,
      title: '2024 Jewelry Trends: Natural Elements and Sustainable Design',
      description: 'This year\'s jewelry design trends emphasize harmony with nature, utilizing organic shapes and eco-friendly materials extensively. Designers are reducing carbon footprint through innovative craftsmanship while maintaining luxury and artistic value. Natural gemstones like sapphires, emeralds, and pearls take center stage, symbolizing purity and eternity.',
      source: 'Jewelry Trends Magazine'
    },
    {
      id: 2,
      year: currentYear,
      month: `${currentMonth}.${(currentDate.getDate() - 1).toString().padStart(2, '0')}`,
      title: 'Ruby Legends: From Ancient Royalty to Modern Collections',
      description: 'Rubies have long been treasured for their vivid red color and rarity, historically favored by royalty and nobility. This article delves into ruby formation processes, major sources, and how to identify high-quality rubies. Additionally, it showcases several famous ruby jewelry pieces and the stories behind them.',
      source: 'Gemological Research'
    },
    {
      id: 3,
      year: currentYear,
      month: `${currentMonth}.${(currentDate.getDate() - 2).toString().padStart(2, '0')}`,
      title: 'Diamond Investment Guide: Choosing Diamonds with Appreciation Potential',
      description: 'Diamonds are not only beautiful adornments but also a valuable investment choice. This article provides professional diamond investment advice, including detailed explanations of the 4C standard (color, clarity, cut, and carat weight), as well as market performance analysis of different diamond types. Experts recommend focusing on rare colored diamonds for long-term investment value.',
      source: 'Wealth Jewelry Advisors'
    },
    {
      id: 4,
      year: currentYear,
      month: `${currentMonth}.${(currentDate.getDate() - 3).toString().padStart(2, '0')}`,
      title: 'Complete Pearl Care Guide: Keeping Your Pearl Jewelry Beautiful',
      description: 'As organic gemstones, pearls require special care to maintain their luster and beauty. This article provides detailed pearl cleaning, storage, and wearing recommendations, including avoiding chemical exposure, the importance of regular professional maintenance, and how to identify signs that your pearl jewelry needs repair. Proper care can make pearl jewelry last for generations.',
      source: 'Jewelry Care Experts'
    },
    {
      id: 5,
      year: currentYear,
      month: `${currentMonth}.${(currentDate.getDate() - 4).toString().padStart(2, '0')}`,
      title: 'Modern Women\'s Jewelry Collection: Creating a Unique and Meaningful Jewelry Box',
      description: 'Modern women\'s jewelry collections are more than just symbols of wealth—they reflect personal style and life stories. This article shares how to build a diverse jewelry collection based on personal style, occasion needs, and budget, including essential basics and heirloom-quality pieces. Experts recommend choosing versatile jewelry that adapts to different styles.',
      source: 'Fashion & Life'
    },
    {
      id: 6,
      year: currentYear,
      month: `${currentMonth}.${(currentDate.getDate() - 5).toString().padStart(2, '0')}`,
      title: 'Exploring Sapphires: Beyond Blue to Stunning Colors',
      description: 'While sapphires are famous for their deep blue, the sapphire family actually offers rich color variations, from pink and yellow to green, and even colorless. This article introduces the causes, source characteristics, and market value comparisons of different colored sapphires. It particularly recommends Padparadscha sapphires (pink-orange) as an emerging collection hotspot.',
      source: 'Colored Gem Appreciation'
    },
    {
      id: 7,
      year: currentYear,
      month: `${currentMonth}.${(currentDate.getDate() - 6).toString().padStart(2, '0')}`,
      title: 'The Allure of Custom Jewelry: A Unique Personalized Experience',
      description: 'Custom jewelry provides the opportunity to incorporate personal stories and emotions into accessories. This article describes the complete custom jewelry process, from creative concept and design sketches to material selection and production, as well as how to effectively communicate with designers to achieve the desired result. Custom jewelry is not just an ornament but a precious heirloom carrying special memories.',
      source: 'Private Custom Jewelry'  
    },
    {
      id: 8,
      year: currentYear,
      month: `${currentMonth}.${(currentDate.getDate() - 7).toString().padStart(2, '0')}`,
      title: 'Natural vs. Synthetic Gemstones: How to Distinguish and Choose Wisely',
      description: 'With advancing technology, synthetic and natural gemstones are becoming increasingly difficult to distinguish. This article provides professional identification methods, including visual characteristics and professional testing techniques. It also analyzes the value differences, advantages and disadvantages of natural versus synthetic gemstones, and how to make the most suitable choice based on personal needs and budget.',
      source: 'Gemstone Identification & Evaluation'
    }
  ];
};

// 导航到新闻详情页
const navigateToNewsDetail = (id: number) => {
  // 查找对应的新闻项
  const newsItem = newsItems.value.find(item => item.id === id);
  if (newsItem) {
    // 将新闻数据存储到sessionStorage中，供详情页使用
    sessionStorage.setItem('currentNewsItem', JSON.stringify({
      ...newsItem,
      // 为每篇新闻添加完整内容和附加内容
      fullContent: getNewsFullContent(id),
      additionalContent: getNewsAdditionalContent(id)
    }));
  }
  // 使用路由跳转到新闻详情页
  router.push(`/news/${id}`);
};

// 获取新闻完整内容
const getNewsFullContent = (id: number) => {
  const fullContents = {
    1: "As sustainable practices become increasingly important in the jewelry industry, designers are finding innovative ways to incorporate eco-friendly materials and ethical sourcing. Many are using recycled metals, lab-grown gemstones, and materials reclaimed from old jewelry pieces. This shift not only reduces environmental impact but also appeals to environmentally conscious consumers who want their purchases to align with their values.",
    2: "Rubies have a fascinating geological formation process that occurs under specific conditions of heat and pressure. The finest rubies typically come from Myanmar (Burma), with notable deposits also found in Thailand, Sri Lanka, and Madagascar. When evaluating rubies, experts look for color intensity, clarity, cut quality, and carat weight, with color being the most significant factor in determining value.",
    3: "When investing in diamonds, it's essential to understand the 4C's: Color, Clarity, Cut, and Carat weight. Colorless diamonds (D-F) are generally more valuable, though fancy colored diamonds can command premium prices. Clarity refers to the absence of inclusions or blemishes. Cut quality significantly impacts a diamond's brilliance and fire. Investment-grade diamonds typically have excellent cut grades and minimal inclusions visible under 10x magnification.",
    4: "Proper pearl care involves several key practices. Pearls should be stored separately from other jewelry to prevent scratching. They should be cleaned with a soft, damp cloth after each wear to remove oils and perspiration. Avoid exposing pearls to cosmetics, perfumes, and household chemicals. Professional cleaning and restringing every 1-2 years is recommended for pearl necklaces to prevent breakage and ensure they remain beautiful for generations.",
    5: "Building a meaningful jewelry collection requires thoughtful consideration of personal style, versatility, and quality. Essential pieces might include a classic pair of diamond studs, a simple pendant necklace, and a statement ring. Investment pieces should be chosen based on craftsmanship, materials, and design that transcends trends. Many collectors also seek pieces with historical significance or from renowned designers to add depth to their collections.",
    6: "Sapphires derive their various colors from trace elements present during their formation. Iron and titanium create blue sapphires, while chromium produces pink varieties. The rare Padparadscha sapphire gets its distinctive pink-orange color from a combination of iron and chromium. Sapphires are mined in several countries including Sri Lanka, Madagascar, Australia, and Montana in the United States, with each location producing stones with unique characteristics.",
    7: "The custom jewelry process begins with a consultation between client and designer to discuss vision, budget, and timeline. From there, the designer creates sketches and 3D renderings for approval before selecting materials. The fabrication process may involve traditional techniques like hand engraving or modern methods like CAD/CAM and 3D printing. Throughout this collaborative journey, clients can provide feedback and make adjustments, resulting in a truly personalized piece that tells their unique story.",
    8: "Distinguishing between natural and synthetic gemstones requires careful examination of several factors. Natural gems often contain inclusions that serve as identifying markers, while synthetic stones may show growth patterns characteristic of laboratory creation. Advanced testing using equipment like spectrometers and refractometers can provide definitive identification. While natural gems typically command higher prices, synthetic stones offer an ethical, affordable alternative with identical chemical and physical properties to their natural counterparts."
  };
  return fullContents[id as keyof typeof fullContents] || "Read more about this fascinating topic in the world of jewelry and gemstones.";
};

// 获取新闻附加内容
const getNewsAdditionalContent = (id: number) => {
  const additionalContents = {
    1: "Leading jewelry brands are now implementing transparent supply chains and providing certification for ethically sourced materials. This transparency allows consumers to make informed choices and support sustainable practices in the industry. Many designers are also collaborating with environmental organizations, donating a percentage of proceeds to conservation efforts related to mining areas.",
    2: "Throughout history, rubies have been surrounded by mythology and legend. In ancient cultures, they were believed to protect against evil and bring good fortune. The British Crown Jewels contain several notable rubies, including the Black Prince's Ruby, which is actually a spinel but historically mistaken for a ruby. Today, rubies continue to be a popular choice for engagement rings and anniversary gifts, symbolizing passion and commitment.",
    3: "Beyond traditional white diamonds, colored diamonds have become increasingly popular investment options. Fancy vivid pink, blue, and green diamonds are among the rarest and most valuable. These diamonds derive their colors from specific trace elements or structural defects during formation. When investing, it's crucial to obtain certificates from reputable gemological laboratories like GIA to verify authenticity and quality characteristics.",
    4: "Pearls come in several varieties, including freshwater, Akoya, Tahitian, and South Sea pearls. Each type has unique characteristics in terms of size, color, and luster. Proper storage is essential - pearls should be kept in a soft pouch or lined jewelry box, and ideally worn regularly as the natural oils from the skin help maintain their luster. With proper care, pearls can last for generations and become treasured family heirlooms.",
    5: "Modern jewelry collections often reflect personal milestones and memories. Many collectors document the stories behind each piece, creating a narrative that adds sentimental value beyond monetary worth. When building a collection, experts recommend investing in quality over quantity, focusing on well-crafted pieces with superior materials that will stand the test of time and maintain their beauty and value for years to come.",
    6: "The value of sapphires varies significantly based on color, with certain varieties commanding premium prices. Padparadscha sapphires, named after the lotus flower for their distinctive color, are among the most valuable. Star sapphires, which exhibit a six-rayed star effect called asterism, are also highly prized. Like other precious gemstones, sapphires are evaluated using the 4Cs, though color typically plays a more significant role in determining their value.",
    7: "Custom jewelry offers several advantages over mass-produced pieces. It allows for personal expression and ensures that the final piece perfectly matches the wearer's style and specifications. Custom designs can incorporate sentimental elements like family heirlooms or specific motifs with personal meaning. Working directly with a designer also provides education about materials and craftsmanship, creating a deeper appreciation for the finished piece.",
    8: "The choice between natural and synthetic gemstones ultimately depends on personal preferences, values, and budget. Natural gems appeal to collectors and those who appreciate their geological formation over millions of years. Synthetic gems offer an affordable alternative without ethical concerns related to mining. Some consumers opt for a combination of both, choosing synthetic gems for everyday pieces and natural gems for special occasions or investment purposes."
  };
  return additionalContents[id as keyof typeof additionalContents] || "Discover more about the fascinating world of jewelry and gemstones through our expert guides and insights.";
};

// 组件挂载时获取新闻数据
onMounted(() => {
  fetchNews();
});
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
  color: #000;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
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
  color: #000; /* 修改为黑色 */
  text-decoration: none;
  font-weight: 400;
  min-height: auto;
  min-width: auto;
  display: inline-block;
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
  /* padding-bottom: 2rem; */
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
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.news-item:hover .news-description {
  color: #444;
}

.news-source {
  font-size: 0.85rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-style: italic;
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

/* 加载状态样式 */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  color: var(--secondary-color);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 错误状态样式 */
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  text-align: center;
}

.error-message {
  color: #e74c3c;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.retry-button {
  padding: 0.5rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.retry-button:hover {
  background-color: var(--primary-dark);
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