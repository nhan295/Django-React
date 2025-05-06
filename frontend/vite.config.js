import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Gửi các request bắt đầu bằng /api đến Django backend
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
    port: 5173, // FE vẫn chạy ở cổng riêng khi dev
  },
});
