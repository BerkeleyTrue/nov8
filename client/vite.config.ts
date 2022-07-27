import { isString } from 'remeda';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

const apiUrl = `http://${process.env.API_HOST}:${process.env.GOAPI_PORT}`;

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: '0.0.0.0',
    port: isString(process.env.FE_PORT)
      ? parseInt(process.env.FE_PORT, 10)
      : 3000,
    proxy: {
      '/api': {
        target: apiUrl,
        changeOrigin: true,
      },
      '/wasm': {
        target: apiUrl,
        changeOrigin: true,
      }
    },
  },
  build: {
    target: 'esnext',
  },
});
