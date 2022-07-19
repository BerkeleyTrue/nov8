import { isString } from 'remeda';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: "0.0.0.0",
    port: isString(process.env.FE_PORT)
      ? parseInt(process.env.FE_PORT, 10)
      : 3000,
  },
  build: {
    target: 'esnext',
  },
});
