<template>
  <div>
    <!-- 钻石图片横幅 - 放在容器外部，使其横向填满整个屏幕 -->
    <div class="news-banner">
      <div class="banner-image">
        <img :src="bannerImage" alt="About" class="banner-img">
      </div>
    </div>
    
    <!-- 其他内容放在居中容器内 -->
    <div class="about">
      <!-- 装饰性标题 -->
      <div class="about-title-container">
        <div class="title-decoration"></div>
        <h1 class="about-title">About</h1>
        <div class="title-decoration"></div>
      </div>
      
      <!-- 详细介绍内容 -->
      <div class="about-content">
        <p>Since its establishment in 1993, the Global Gemological Research Association (GRA) has been recognized worldwide as the benchmark of excellence in gemstone authentication and grading services. GRA certification is regarded as the international credential for gemstone quality and provenance.</p>
        <p>For over three decades, industry professionals across the globe have trusted GRA for its authoritative expertise, unwavering consistency, and reliable standards in gem identification. The GRA School of Gemology has educated practitioners from more than ninety countries, including gem manufacturers, master jewelers, and interested individuals, fostering knowledge and integrity within the trade.</p>
        <p>Supported by a team of hundreds of trained gemologists and technical experts, GRA has developed a refined and systematic approach to gemstone analysis, secure documentation, and ethical handling. Its cutting-edge laboratories are strategically situated in major jewelry hubs around the world, ensuring accessibility and trust.</p>
        <p>GRA remains the global standard in gemstone evaluation and fine jewelry assessment—where science, security, and excellence converge.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 可以在这里添加关于页面的脚本逻辑
// 例如，导入数据或定义响应式变量等
import { getRandomBannerImage } from '../utils/common';

// About页面固定使用第四张图片
const bannerImage = getRandomBannerImage('about');
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  position: relative;
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

/* 装饰性标题样式 */
.about-title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.title-decoration {
  flex: 1;
  height: 1px;
  background-color: #d4af37; /* Gold color */
  max-width: 150px;
  position: relative;
}

.title-decoration::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #d4af37;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  right: -5px;
}

.title-decoration:last-child::after {
  right: auto;
  left: -5px;
}

.about-title {
  font-size: 1.8rem;
  color: #333;
  font-weight: 400;
  margin: 0 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: default;
  user-select: none;
}

/* 内容样式 */
.about-content {
  max-width: 900px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
  line-height: 1.8;
  color: #555;
  text-align: justify;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.6s;
  transition: all 0.3s ease;
}

.about-content p {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.8;
  letter-spacing: 0.5px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .about-content p {
    font-size: 0.95rem;
  }
  
  .about-title {
    font-size: 1.7rem;
  }
}

@media (max-width: 768px) {
  .about-title-container {
    margin: 2rem 1rem;
  }
  
  .title-decoration {
    max-width: 60px;
  }
  
  .about-title {
    font-size: 1.5rem;
    margin: 0 1rem;
    letter-spacing: 1.5px;
  }
  
  .about-content {
    padding: 0 1.5rem;
    text-align: left;
  }
  
  .about-content p {
    font-size: 0.9rem;
    line-height: 1.7;
  }
}

@media (max-width: 480px) {
  .about-title-container {
    margin: 1.5rem 1rem;
  }
  
  .title-decoration {
    max-width: 40px;
  }
  
  .about-title {
    font-size: 1.3rem;
    margin: 0 0.8rem;
  }
  
  .about-content {
    padding: 0 1.2rem;
    margin-bottom: 3rem;
  }
  
  .about-content p {
    font-size: 0.85rem;
    line-height: 1.6;
  }
  
  .lab-image {
    min-height: 180px;
  }
}

/* H5设备优化 */
@media (hover: none) and (pointer: coarse) {
  .lab-image:hover {
    transform: none;
  }
  
  .about-title {
    letter-spacing: 1px;
  }
  
  .about-content p {
    font-size: 0.95rem;
    line-height: 1.7;
  }
}
</style>