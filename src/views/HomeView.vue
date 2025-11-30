<template>
  <div class="home">
    <!-- 横幅部分 -->
    <BannerSection />
    
    <!-- 证书查询部分 -->
    <CertificateSection />
    
    <!-- 特色产品展示 -->
    <!-- <section class="featured-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Featured Collections</h2>
          <div class="divider"></div>
        </div>
        <div class="featured-grid">
          <div 
            v-for="gem in featuredGems" 
            :key="gem.id" 
            class="featured-item"
            @click="navigateToGemDetail(gem.id)"
          >
            <div class="featured-image">
              <img :src="gem.imageUrl" :alt="gem.name" class="gem-img">
              <div class="image-overlay">
                <button class="view-details-btn">View Details</button>
              </div>
            </div>
            <h3 class="gem-name">{{ gem.name }}</h3>
            <p class="gem-description">{{ gem.description }}</p>
          </div>
        </div>
        <div class="view-all-container">
          <router-link to="/featured" class="view-all-btn">View All Collections</router-link>
        </div>
      </div>
    </section> -->
    
    <!-- 品牌故事 -->
    <section class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>Our Brand Story</h2>
            <p>With decades of experience in the jewelry industry, we are committed to providing our customers with the highest quality gemstones and exquisite craftsmanship. Each piece is carefully selected and crafted to perfection, representing timeless beauty and elegance.</p>
            <p>Our mission is to create jewelry that becomes a part of your most precious memories, symbolizing love, commitment, and celebration.</p>
            <router-link to="/about" class="learn-more-btn">Learn More</router-link>
          </div>
          <div class="about-image">
            <div class="about-svg">
              <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="150" r="120" fill="rgba(139, 125, 107, 0.1)"/>
                <circle cx="200" cy="150" r="80" fill="rgba(139, 125, 107, 0.15)"/>
                <circle cx="200" cy="150" r="40" fill="rgba(139, 125, 107, 0.2)"/>
                <path d="M200 110 L230 190 L170 190 Z" fill="rgba(212, 175, 55, 0.3)"/>
                <path d="M200 130 L220 170 L180 170 Z" fill="rgba(212, 175, 55, 0.5)"/>
                <path d="M200 145 L210 160 L190 160 Z" fill="rgba(212, 175, 55, 0.7)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 联系我们 -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <h2>Get In Touch</h2>
          <p>Have questions about our collections or services? We're here to help.</p>
          <router-link to="/contact" class="contact-btn">Contact Us</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import BannerSection from '../components/BannerSection.vue';
import CertificateSection from '../components/CertificateSection.vue';
import { gems } from '../utils/common';

const router = useRouter();

// 精选宝石（取前4个）
const featuredGems = computed(() => gems.slice(0, 3));

// 跳转到宝石详情页
const navigateToGemDetail = (id: string) => {
  router.push(`/featured/${id}`);
};
</script>

<style scoped>
.home {
  width: 100%;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* 特色产品展示 */
.featured-section {
  padding: 6rem 0;
  background-color: #fff;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--secondary-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.divider {
  width: 80px;
  height: 2px;
  background-color: var(--primary-color);
  margin: 0 auto;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.featured-item {
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.featured-item:hover {
  transform: translateY(-10px);
}

.featured-image {
  position: relative;
  width: 100%;
  height: 300px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gem-img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.featured-item:hover .gem-img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-item:hover .image-overlay {
  opacity: 1;
}

.view-details-btn {
  padding: 0.8rem 1.5rem;
  background-color: #fff;
  color: var(--secondary-color);
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-details-btn:hover {
  background-color: var(--primary-color);
  color: #fff;
}

.gem-name {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--secondary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.gem-description {
  color: var(--light-text);
  line-height: 1.6;
  padding: 0 1rem;
}

.view-all-container {
  text-align: center;
  margin-top: 3rem;
}

.view-all-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.view-all-btn:hover {
  background-color: var(--primary-color);
  color: #fff;
}

/* 品牌故事 */
.about-section {
  padding: 6rem 0;
  background-color: #f9f9f9;
}

.about-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
}

.about-text {
  flex: 1;
}

.about-text h2 {
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--secondary-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
}

.about-text p {
  color: var(--light-text);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.learn-more-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #7a6c5a;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.about-image {
  flex: 1;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-svg {
  width: 100%;
  height: 100%;
}

/* 联系我们 */
.contact-section {
  padding: 6rem 0;
  background-color: var(--primary-color);
  color: #fff;
}

.contact-content {
  text-align: center;
}

.contact-content h2 {
  font-size: 2.5rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
}

.contact-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.contact-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: transparent;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background-color: #fff;
  color: var(--primary-color);
}

/* 响应式设计 */
@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
    gap: 3rem;
  }
  
  .about-text, .about-image {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 2rem;
  }
  
  .featured-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .featured-image {
    height: 250px;
  }
  
  .gem-img {
    width: 160px;
    height: 160px;
  }
  
  .about-text h2,
  .contact-content h2 {
    font-size: 2rem;
  }
  
  .about-text p {
    font-size: 1rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 480px) {
  .featured-section,
  .about-section,
  .contact-section {
    padding: 4rem 0;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .featured-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .featured-image {
    height: 220px;
  }
  
  .about-image {
    height: 300px;
  }
  
  .about-text h2,
  .contact-content h2 {
    font-size: 1.8rem;
  }
}
</style>