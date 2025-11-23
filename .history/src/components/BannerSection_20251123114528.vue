<template>
  <section class="banner">
    <div class="banner-image">
      <!-- 使用内联SVG作为背景图片，确保高质量显示 -->
      <div class="banner-overlay">
        <div class="banner-text">
          <h2 class="exclusive-text">
            <span class="text-accent">EXCLUSIVE</span> CUSTOM
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.banner {
  width: 100%;
  height: 60vh;
  position: relative;
  overflow: hidden;
  min-height: 400px;
}

.banner-image {
  width: 100%;
  height: 100%;
  /* 使用珠宝师检查钻石的图片作为背景 */
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2ltYWdlKSI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzE4MTgwMSIgZmlsbC1vcGFjaXR5PSIwLjc1Ii8+CiAgPHJlY3QgeD0iMjUiIHk9IjIwIiB3aWR0aD0iNTAlIiBoZWlnaHQ9IjcwJSIgZmlsbD0icmdiYSgxNzksIDExMCwgNjQsIDAuMikiLz4KICA8cGF0aCBkPSJNNTAgMzBjMC0xMS4wNS04Ljk1LTIwLTIwLTIwdjIwYzExLjA1IDAgMjAgOC45NSAyMCAyMHYtMjB6bTEwIDMwaDF2MWgtMXYtMXptMC0yaDF2MWgtMXYtMXptMC0yaDF2MWgtMXYtMXoiIHN0cm9rZT0iIzg4OGI5NSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4=');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-text {
  text-align: center;
}

.exclusive-text {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  padding: 0 2rem;
}

.exclusive-text::before,
.exclusive-text::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 100px;
  height: 1px;
  background-color: #fff;
}

.exclusive-text::before {
  left: 0;
}

.exclusive-text::after {
  right: 0;
}

.text-accent {
  font-weight: 600;
  color: #d4af37;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner {
    height: 50vh;
    min-height: 300px;
  }
  
  .exclusive-text {
    font-size: 1.8rem;
    padding: 0 1rem;
  }
  
  .exclusive-text::before,
  .exclusive-text::after {
    width: 50px;
  }
}

@media (max-width: 480px) {
  .banner {
    height: 40vh;
    min-height: 250px;
  }
  
  .exclusive-text {
    font-size: 1.4rem;
    letter-spacing: 1px;
    padding: 0 0.5rem;
  }
  
  .exclusive-text::before,
  .exclusive-text::after {
    width: 30px;
  }
}
</style>