import { defineConfig } from 'vite';
import {fileURLToPath, URL} from 'node:url'
import api from './src/api/index.js';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middleware: api,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        logging: true,
      },
    },
  },
  resolve:{
    alias:{
      '@styles': fileURLToPath( new URL('./src/styles', import.meta.url)),//una forma
      '@components':fileURLToPath(new URL('/src/components', import.meta.url))
      //'@components':'./src/components' //otra forma
    }
  }
});
