import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ['VITE_', 'RENDER_']);

  return {
    plugins: [react()],
    define: {
      'process.env': {
        VITE_STRIPE_PUBLIC_KEY: JSON.stringify(
            mode === 'production'
                ? process.env.VITE_STRIPE_PUBLIC_KEY
                : env.VITE_STRIPE_PUBLIC_KEY
        )
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    // Render.com settings
    server: {
      host: true,
      port: process.env.PORT ? parseInt(process.env.PORT) : 5173
    }
  };
});