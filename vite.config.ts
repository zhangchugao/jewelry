import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd())
  
  return {
    plugins: [vue()],
    // 使用相对路径，确保在任何环境下都能正确加载资源
    base: './',
    build: {
      // 跳过TypeScript检查以快速构建
      skipTypeCheck: true
    },
    server: {
      // 设置为0.0.0.0允许通过IP访问
      host: '0.0.0.0',
      proxy: {
        // 将/api路径代理到后端接口
        '/api': {
          target: env.VITE_API_BASE_URL || 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    resolve: {
      alias: {
        // 设置@别名指向src目录
        '@': resolve(__dirname, 'src')
      }
    }
  }
})
