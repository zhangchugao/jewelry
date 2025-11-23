<template>
  <section class="certificate-section">
    <div class="certificate-container">
      <div class="certificate-header">
        <div class="certificate-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
        <h3 class="certificate-title">Certificate</h3>
        <div class="certificate-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </div>
      </div>
      
      <p class="certificate-description">
        Please enter the certificate number on the certificate
      </p>
      
      <form class="certificate-form" @submit.prevent="handleSubmit">
        <input
          type="text"
          v-model="certificateNumber"
          class="certificate-input"
          placeholder="Enter certificate number"
          required
        />
        <button type="submit" class="certificate-button">
          Certificate of the query
        </button>
      </form>
      
      <!-- 查询结果展示 (仅显示错误信息) -->
      <div v-if="showResult" class="query-result">
        <div class="result-error">
          <h4>Certificate Not Found</h4>
          <p>The certificate number you entered could not be found.</p>
        </div>
        <button class="close-button" @click="resetForm">Close</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const certificateNumber = ref('');
const showResult = ref(false);
const resultFound = ref(false);

const handleSubmit = () => {
  // 模拟查询操作
  // 在实际项目中，这里应该调用API进行证书验证
  
  // 简单模拟：如果输入不为空就认为找到了证书
  resultFound.value = certificateNumber.value.trim() !== '';
  
  if (resultFound.value) {
    // 查询成功，跳转到证书详情页
    router.push({
      name: 'certificateDetail',
      params: { certificateNumber: certificateNumber.value.trim() }
    });
  } else {
    // 查询失败，显示错误信息
    showResult.value = true;
  }
};

const resetForm = () => {
  certificateNumber.value = '';
  showResult.value = false;
  resultFound.value = false;
};
</script>

<style scoped>
.certificate-section {
  padding: 4rem 2rem;
  background-color: #f9f9f9;
}

.certificate-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.certificate-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
}

.certificate-icon {
  color: var(--primary-color);
  opacity: 0.7;
}

.certificate-title {
  font-size: 1.2rem;
  color: var(--secondary-color);
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.certificate-description {
  font-size: 1rem;
  color: var(--light-text);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.certificate-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  margin: 0 auto;
}

.certificate-input {
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 0;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background-color: #fff;
  position: relative;
  z-index: 1;
}

.certificate-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(139, 125, 107, 0.1);
  transform: translateY(-2px);
}

.certificate-button {
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.certificate-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: all 0.6s ease;
}

.certificate-button:hover::before {
  left: 100%;
}

.certificate-button:hover {
  background-color: #7a6c5a;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* 查询结果样式 */
.query-result {
  margin-top: 2rem;
  padding: 2rem;
  background-color: #fff;
  border: 1px solid var(--border-color);
}

.result-success {
  color: #4CAF50;
}

.result-error {
  color: #f44336;
}

.query-result h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.query-result p {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.close-button {
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  background-color: var(--secondary-color);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #555;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .certificate-section {
    padding: 3rem 1rem;
  }
  
  .certificate-form {
    max-width: 100%;
  }
  
  .certificate-header {
    gap: 0.5rem;
  }
  
  .certificate-title {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .certificate-section {
    padding: 2rem 1rem;
  }
  
  .certificate-description {
    font-size: 0.9rem;
  }
  
  .certificate-input,
  .certificate-button {
    padding: 0.8rem;
  }
}
</style>