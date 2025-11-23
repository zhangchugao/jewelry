<template>
  <div class="contact">
    <!-- 实验室图片横幅 -->
    <div class="banner">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjMwMCI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjhmOGY4Ii8+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI1MCIgZmlsbD0iI2ZmZiIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iMzAiIGZpbGw9IiNmZmYiLz4KICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIxMjAiIHI9IjQwIiBmaWxsPSIjZmZmIi8+CiAgPGNpcmNsZSBjeD0iNTAwIiBjeT0iMTUwIiByPSI2MCIgZmlsbD0iI2ZmZiIvPgogIDxjaXJjbGUgY3g9IjYwMCIgY3k9IjEwMCIgcj0iMjAiIGZpbGw9IiNmZmYiLz4KICA8Y2lyY2xlIGN4PSI3MDAiIGN5PSIxODAiIHI9IjQwIiBmaWxsPSIjZmZmIi8+CiAgPGNpcmNsZSBjeD0iODAwIiBjeT0iMTUwIiByPSI1MCIgZmlsbD0iI2ZmZiIvPgogIDxjaXJjbGUgY3g9IjkwMCIgY3k9IjEwMCIgcj0iMzAiIGZpbGw9IiNmZmYiLz4KICA8dGV4dCB4PSI1MDAiIHk9IjI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjIwIiBmaWxsPSIjMDAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5MYWJlbCBMYWJlbCBUb29sczwvdGV4dD4KPC9zdmc+" alt="Laboratory" class="banner-img">
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
            <!-- 二维码占位图 -->
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="white" stroke="black" stroke-width="1"/>
              <!-- 左上角方块 -->
              <rect x="30" y="30" width="40" height="40" fill="black"/>
              <rect x="40" y="40" width="20" height="20" fill="white"/>
              <!-- 右上角方块 -->
              <rect x="130" y="30" width="40" height="40" fill="black"/>
              <rect x="140" y="40" width="20" height="20" fill="white"/>
              <!-- 左下角方块 -->
              <rect x="30" y="130" width="40" height="40" fill="black"/>
              <rect x="40" y="140" width="20" height="20" fill="white"/>
              <!-- 中心图案 -->
              <rect x="100" y="100" width="20" height="20" fill="black"/>
              <rect x="60" y="80" width="20" height="20" fill="black"/>
              <rect x="120" y="80" width="20" height="20" fill="black"/>
              <rect x="60" y="120" width="20" height="20" fill="black"/>
              <rect x="120" y="120" width="20" height="20" fill="black"/>
              <rect x="80" y="60" width="20" height="20" fill="black"/>
              <rect x="120" y="60" width="20" height="20" fill="black"/>
              <rect x="80" y="140" width="20" height="20" fill="black"/>
              <rect x="100" y="60" width="20" height="20" fill="black"/>
              <rect x="100" y="140" width="20" height="20" fill="black"/>
              <rect x="60" y="100" width="20" height="20" fill="black"/>
              <rect x="140" y="100" width="20" height="20" fill="black"/>
              <!-- 中心徽标 -->
              <circle cx="100" cy="100" r="5" fill="gold"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Contact页面组件
</script>

<style scoped>
.contact {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

/* 实验室图片横幅 */
.banner {
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin-bottom: 3rem;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner {
    height: 200px;
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
  .banner {
    height: 180px;
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