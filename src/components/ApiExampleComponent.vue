<template>
  <div class="api-example">
    <h2>API调用示例</h2>
    <button @click="fetchData" class="fetch-btn">获取数据</button>
    
    <div v-if="loading" class="loading">加载中...</div>
    
    <div v-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-if="data" class="data">
      <h3>获取到的数据:</h3>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { exampleApi } from '../api/example';

const loading = ref(false);
const error = ref('');
const data = ref<any>(null);

// 获取数据示例
const fetchData = async () => {
  loading.value = true;
  error.value = '';
  
  try {
    // 调用后端接口
    const result = await exampleApi.getExampleData();
    data.value = result;
  } catch (err) {
    error.value = '获取数据失败，请稍后重试';
    console.error('获取数据失败:', err);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.api-example {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.fetch-btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.fetch-btn:hover {
  background-color: #45a049;
}

.loading {
  margin-top: 20px;
  font-size: 16px;
  color: #666;
}

.error {
  margin-top: 20px;
  color: #f44336;
  padding: 10px;
  background-color: #ffebee;
  border-radius: 4px;
}

.data {
  margin-top: 20px;
}

.data pre {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}
</style>