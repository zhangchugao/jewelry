<template>
  <div class="certificate-detail">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <span>Your current location:</span>
      <router-link to="/" class="breadcrumb-link">HOME</router-link>
      <span class="breadcrumb-separator">></span>
      <span class="breadcrumb-current">Certificate Details</span>
      <span class="breadcrumb-separator">></span>
    </div>
    
    <!-- 证书详情卡片 -->
    <div class="certificate-card">
      <!-- 顶部标题区域 -->
      <!-- <div class="certificate-header">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iNjAiPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZDRhZjM3Ii8+CjxwYXRoIGQ9Ik0xMCAzMGgyMHYxMGgtMjB6TTQgMTVoNnYyaC02ek0xMiAxNWg2djJoLTZ6TTIwIDE1aDZ2MmgtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPg==" alt="GRA Logo" class="gra-logo">
        <h1 class="certificate-title-main">GLOBAL GEMOLOGICAL RESEARCH ASSOCIATION</h1>
        <div class="certificate-badge">
          <span class="badge-text">OFFICIAL CERTIFICATE</span>
        </div>
      </div> -->
      
      <!-- 钻石图片 -->
      <!-- <div class="diamond-image-container">
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2ZiZmJmYiIvPgogIDxwYXRoIGQ9Ik0yMDAgMzBjLTIwIDAtMzAgMTAtMzAgMzBzMTAgMzAgMzAgMzAgMzAtMTAgMzAtMzAtMTAtMzAtMzAtMzB6IiBzdHJva2U9IiNmZjAiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KICA8cGF0aCBkPSJNMjAwIDMwdi0xNGMwLTEwLTggLTIwLTIwIC0yMHoiIHN0cm9rZT0iI2ZmMTAwMCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPHJlY3QgZmlsbD0iI2ZmZiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwMCIgeD0iMTkwIiB5PSI2MCIvPgogIDxwYXRoIGQ9Ik0xMjAgMTQwTDIwMCA2MCwyODAgMTQwTDIwMCAyMjAiIHN0cm9rZT0iIzg4ODg4OCIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==" alt="Diamond" class="diamond-image">
      </div> -->
      
      <!-- 查询编号 -->
      <div class="query-number">
        <h3>Certificate Number: {{ certificateNumber }}</h3>
      </div>
      
      <!-- 证书详情内容 -->
      <div class="certificate-content">
        <!-- 宝石信息 -->
        <div class="info-section">
          <h3 class="section-title">GEMSTONE PROFILE</h3>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">GRA Report Number:</span>
              <span class="info-value">{{ gemstoneInfo.reportNum }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">GRA Laboratory Area:</span>
              <span class="info-value">{{ gemstoneInfo.area }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Description:</span>
              <span class="info-value">{{ gemstoneInfo.description }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Shape and Cut:</span>
              <span class="info-value">{{ gemstoneInfo.shapeAndCut }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Weight:</span>
              <span class="info-value">{{ gemstoneInfo.weight }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Measurements:</span>
              <span class="info-value">{{ gemstoneInfo.measurements }}</span>
            </div>
          </div>
        </div>
        
        <!-- 评级结果 -->
        <div class="info-section">
          <h3 class="section-title">GRADING RESULTS</h3>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Color Grade:</span>
              <span class="info-value">{{ gemstoneInfo.colorGrade }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Clarity Grade:</span>
              <span class="info-value">{{ gemstoneInfo.clarityGrade }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Cut Grade:</span>
              <span class="info-value">{{ gemstoneInfo.cutGrade }}</span>
            </div>
          </div>
        </div>
        
        <!-- 比例信息 -->
        <div class="info-section">
          <h3 class="section-title">PROPORTIONS</h3>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Depth:</span>
              <span class="info-value">{{ gemstoneInfo.proportionsDepth }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Table:</span>
              <span class="info-value">{{ gemstoneInfo.proportionsTable }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Girdle:</span>
              <span class="info-value">{{ gemstoneInfo.proportionsGirdle }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Culet:</span>
              <span class="info-value">{{ gemstoneInfo.proportionsCulet }}</span>
            </div>
          </div>
        </div>
        
        <!-- 附加信息 -->
        <div class="info-section">
          <h3 class="section-title">ADDITIONAL GRADING INFORMATION</h3>
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Polish:</span>
              <span class="info-value">{{ gemstoneInfo.polish }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Symmetry:</span>
              <span class="info-value">{{ gemstoneInfo.symmetry }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Fluorescence:</span>
              <span class="info-value">{{ gemstoneInfo.fluorescence }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 底部验证信息 -->
      <div class="certificate-footer">
        <p>This certificate is issued by GRA Gemological Laboratory</p>
        <p>Date of Issue: {{ currentDate }}</p>
      </div>
      
      <!-- 返回按钮 -->
      <router-link to="/" class="back-button">← Return to Home</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { restApi } from '@/api/restApi';
import { GemstoneInfo } from '@/types/index';



const route = useRoute();
const certificateNumber = ref('');
const currentDate = ref('');

/** 珠宝信息 */
const gemstoneInfo = ref<GemstoneInfo>({} as GemstoneInfo);

onMounted(() => {
  // 从路由参数中获取证书编号
  certificateNumber.value = route.params.certificateNumber as string || '2023064466';
  getCertificateDetail()
  // 设置当前日期
  const today = new Date();
  currentDate.value = today.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
});

/** 获取证书详情*/
const getCertificateDetail = async () => {
  restApi.queryCertificate(certificateNumber.value).then((res: any) => {
    if (res && res.gemstoneInfo) {
      console.log(res.gemstoneInfo)
      gemstoneInfo.value = Array.isArray(res.gemstoneInfo) ? res.gemstoneInfo[0] : res.gemstoneInfo;
    }
  })
};
</script>

<style scoped>
.certificate-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 面包屑导航样式 */
.breadcrumb {
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #000;
}

.breadcrumb-link {
  color: #000;
  text-decoration: none;
  font-weight: 400;
  min-height: auto;
  min-width: auto;
  display: inline-block;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-separator {
  margin: 0 0.5rem;
  min-height: auto;
  min-width: auto;
  display: inline-block;
}

.breadcrumb-current {
  font-weight: 500;
  min-height: auto;
  min-width: auto;
  display: inline-block;
}

.breadcrumb span {
  min-height: auto;
  min-width: auto;
  display: inline-block;
}

/* 证书卡片样式 */
.certificate-card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 顶部标题区域 */
.certificate-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #d4af37;
}

.gra-logo {
  width: 120px;
  height: auto;
  margin-bottom: 1rem;
}

.certificate-title-main {
  font-size: 1.5rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.certificate-badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #d4af37;
  color: #fff;
  border-radius: 4px;
}

.badge-text {
  font-weight: 500;
  letter-spacing: 1px;
}

/* 钻石图片 */
.diamond-image-container {
  text-align: center;
  margin-bottom: 2rem;
}

.diamond-image {
  max-width: 100%;
  height: auto;
  max-height: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 查询编号 */
.query-number {
  text-align: center;
  margin-bottom: 2rem;
}

.query-number h3 {
  font-size: 1.3rem;
  color: #333;
  font-weight: 500;
}

/* 证书内容 */
.certificate-content {
  margin-bottom: 2rem;
}

.info-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.1rem;
  color: #333;
  background-color: #f5f5f5;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  border-left: 3px solid #d4af37;
}

.info-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0f0f0;
  flex-wrap: wrap;
}

.info-label {
  color: #666;
  font-weight: 500;
}

.info-value {
  color: #333;
  font-weight: 600;
}

/* 底部信息 */
.certificate-footer {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
  margin-bottom: 2rem;
  color: #666;
  font-size: 0.9rem;
}

.certificate-footer p {
  margin: 0.5rem 0;
}

/* 返回按钮 */
.back-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #f8f8f8;
  color: #666;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-button:hover {
  background-color: #e0e0e0;
  color: #333;
  transform: translateX(-3px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .certificate-detail {
    padding: 1rem;
  }
  
  .certificate-card {
    padding: 1.5rem;
  }
  
  .certificate-title-main {
    font-size: 1.3rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .gra-logo {
    width: 100px;
  }
}

@media (max-width: 480px) {
  .certificate-card {
    padding: 1rem;
  }
  
  .certificate-title-main {
    font-size: 1.1rem;
  }
  
  .section-title {
    font-size: 1rem;
  }
  
  .back-button {
    width: 100%;
  }
}
</style>