<template>
  <div class="contact">
    <!-- 钻石图片横幅 -->
    <div class="news-banner">
      <div class="banner-image">
        <img :src="bannerImage" alt="Diamonds" class="banner-img">
      </div>
    </div>

    <!-- 联系信息部分 -->
    <div class="contact-container">
      <!-- 标题和装饰 -->
      <div class="contact-header">
        <div class="decorative-line"></div>
        <h2 class="contact-title">Contact</h2>
        <div class="decorative-line"></div>
      </div>

      <!-- 联系信息卡片 -->
      <div class="contact-info">
        <div class="info-content">
          <h3 class="institution-name">GRA GLOBAL GEMOLOGICAL RESEARCH ACADEMY</h3>
          <p class="contact-detail">Email: <a href="mailto:igra@gra.hk" class="contact-link">igra@gra.hk</a></p>
          <p class="contact-detail">ADD: RM185 27/F HO KING COMM CTR 2-16 FAYUEN ST MONGKOK KL</p>
          <p class="contact-detail"><a href="https://www.gramoisanitie.net" class="contact-link">https://www.gramoisanitie.net</a></p>
        </div>

        <!-- 二维码 -->
        <div class="qrcode-container">
          <div class="qrcode">
            <!-- 使用qrcode包生成的二维码，扫描后跳转到网站首页 -->
            <img 
              v-if="qrCodeDataUrl" 
              :src="qrCodeDataUrl" 
              alt="网站首页二维码" 
              width="100%" 
              height="100%" 
              style="object-fit: contain;" 
            />
            <!-- 加载中状态 -->
            <div v-else class="qr-loading">生成中...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import QRCode from 'qrcode';
import { getRandomBannerImage } from '../utils/common';

// Contact页面固定使用第六张图片
const bannerImage = getRandomBannerImage('contact');

// 二维码数据URL
const qrCodeDataUrl = ref('');

// 生成二维码
onMounted(async () => {
  try {
    // 生成二维码数据URL，链接到网站首页
    qrCodeDataUrl.value = await QRCode.toDataURL(window.location.origin, {
      width: 200,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });
  } catch (error) {
    console.error('生成二维码失败:', error);
  }
});
</script>

<style scoped>
.contact {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

/* 横幅样式 */
.news-banner {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
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

/* 联系信息容器 */
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-bottom: 4rem;
}

/* 标题和装饰 */
.contact-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
}

.decorative-line {
  height: 1px;
  width: 100px;
  background-color: #000;
  margin: 0 1rem;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: normal;
  color: #000;
  text-align: center;
}

/* 联系信息卡片 */
.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 3rem;
}

.info-content {
  max-width: 600px;
}

.institution-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.contact-detail {
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.contact-link {
  color: #000;
  text-decoration: none;
  font-weight: 500;
}

.contact-link:hover {
  text-decoration: underline;
}

/* 二维码容器 */
.qrcode-container {
  display: flex;
  justify-content: center;
}

.qrcode {
    width: 200px;
    height: 200px;
    border: 1px solid #ddd;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .qr-loading {
    font-size: 14px;
    color: #666;
  }

/* 响应式设计 */
@media (max-width: 768px) {
  .news-banner {
    height: 250px;
    margin-bottom: 2rem;
  }
  
  .contact-container {
    padding: 0 1rem;
  }
  
  .decorative-line {
    width: 80px;
    margin: 0 0.5rem;
  }
  
  .contact-title {
    font-size: 1.3rem;
  }
  
  .institution-name {
    font-size: 1.1rem;
  }
  
  .contact-detail {
    font-size: 0.95rem;
  }
  
  .qrcode {
    width: 180px;
    height: 180px;
  }
}

@media (max-width: 480px) {
  .news-banner {
    height: 150px;
    margin-bottom: 1.5rem;
  }
  
  .contact-header {
    margin-bottom: 2rem;
  }
  
  .decorative-line {
    width: 50px;
    margin: 0 0.4rem;
  }
  
  .contact-title {
    font-size: 1.2rem;
  }
  
  .contact-info {
    gap: 2rem;
  }
  
  .institution-name {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .contact-detail {
    font-size: 0.9rem;
  }
  
  .qrcode {
    width: 160px;
    height: 160px;
  }
}
</style>