import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: './.vite',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://api.gwangju.go.kr/json/lineInfo',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/bus': {
        target: 'http://api.gwangju.go.kr/json/stationInfo',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bus/, ''),
      },
    },
  },
});
