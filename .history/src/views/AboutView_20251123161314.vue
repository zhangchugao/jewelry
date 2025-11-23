<template>
  <div class="about">
    <!-- 实验室图片 -->
    <div class="lab-image-container">
      <!-- 使用内联SVG作为背景图片，确保高质量显示 -->
      <div class="lab-image-overlay">
        <div class="lab-image-text">
          <h2 class="lab-title">GRA Gemological Laboratory</h2>
        </div>
      </div>
    </div>
    
    <!-- 装饰性标题 -->
    <div class="about-title-container">
      <div class="title-decoration"></div>
      <h1 class="about-title">About</h1>
      <div class="title-decoration"></div>
    </div>
    
    <!-- 详细介绍内容 -->
    <div class="about-content">
      <p>The Global Gemological Research Association Institute is the standard of excellence in gemstones services worldwide since 1975. GRA reports have proven to be the internationally recognized passport for gemstones. Diamonds trade preferences throughout the world turn to GRA. Their expertise, consistency, reliability in gemstones identification grading GRA's school of gemstones has been attended by leading gemstones manufacturers, fine jewelry artisans, the public at large over ninety countries throughout the world.</p>
      <p>The methodology employed by GRA's highly trained, experienced team of hundreds of scientific technicians, gemologists, has allowed the evaluation of the perfect formula regarding gemstone procedures, equipment, testing, grading & every security filing. GRA's state-of-the-art laboratories are located in the heart of the gem & jewelry districts throughout the world. GRA - The Standard of Excellence in gemstones. Fine Jewelry Evaluation Worldwide.</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  position: relative;
}

/* 实验室图片样式 */
.lab-image-container {
  width: 100%;
  height: 40vh;
  position: relative;
  overflow: hidden;
  margin: 0;
  touch-action: pan-y;
  /* 使用实验室相关的内联SVG作为背景 */
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2ltYWdlKSI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzJhMjAzNiIgZmlsbC1vcGFjaXR5PSIwLjg1Ii8+CiAgPHJlY3QgeD0iMjUiIHk9IjIwIiB3aWR0aD0iNTAlIiBoZWlnaHQ9IjYwJSIgZmlsbD0icmdiYSgzNCwgNDQsIDY5LCAwLjIpIi8+CiAgPHJlY3QgeD0iMzAiIHk9IjIwIiB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSIvPgogIDxwYXRoIGQ9Ik0zNSAzNWgyMHYxMGgtMjB6bTAgMTVoMjB2MTBoLTIweiIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIi8+CiAgPHJlY3QgeD0iNDAiIHk9IjIwIiB3aWR0aD0iMjAlIiBoZWlnaHQ9IjEwJSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgiLz4KICA8cGF0aCBkPSJNMzAgNzBtNSAwbDEwLTEwbDEwIDEwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+Cjwvc3ZnPg==');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.lab-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 1.5s ease-in-out;
}

.lab-image-text {
  text-align: center;
}

.lab-title {
  color: #fff;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  padding: 0 2rem;
  animation: slideIn 1s ease-out;
}

.lab-title::before,
.lab-title::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 80px;
  height: 1px;
  background-color: #fff;
}

.lab-title::before {
  left: 0;
}

.lab-title::after {
  right: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .lab-image-container {
    height: 35vh;
  }
  
  .lab-title {
    font-size: 1.6rem;
    padding: 0 1.5rem;
  }
  
  .lab-title::before,
  .lab-title::after {
    width: 50px;
  }
}

@media (max-width: 480px) {
  .lab-image-container {
    height: 30vh;
  }
  
  .lab-title {
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 0 1rem;
  }
  
  .lab-title::before,
  .lab-title::after {
    width: 30px;
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