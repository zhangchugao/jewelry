<template>
  <div class="about">
    <!-- 实验室图片 -->
    <div class="lab-image-container">
      <img src="https://via.placeholder.com/1200x400?text=GRA+Gemological+Laboratory" alt="GRA Gemological Laboratory" class="lab-image" />
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
}

/* 实验室图片样式 */
.lab-image-container {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 0;
}

.lab-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* 装饰性标题样式 */
.about-title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
}

.title-decoration {
  flex: 1;
  height: 1px;
  background-color: #d4af37; /* Gold color */
  max-width: 150px;
}

.about-title {
  font-size: 1.8rem;
  color: #333;
  font-weight: 400;
  margin: 0 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* 内容样式 */
.about-content {
  max-width: 900px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
  line-height: 1.8;
  color: #555;
  text-align: justify;
}

.about-content p {
  margin-bottom: 1.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-title-container {
    margin: 2rem 0;
  }
  
  .title-decoration {
    max-width: 80px;
  }
  
  .about-title {
    font-size: 1.5rem;
    margin: 0 1rem;
  }
  
  .about-content {
    padding: 0 1rem;
    text-align: left;
  }
}
</style>