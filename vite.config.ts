import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3005, // Keep the same port as the Next.js dev server
  },
  define: {
    // For styled-components
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  envPrefix: ['VITE_'], // Enable VITE_ prefixed env variables
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      // Add any path aliases if needed
    },
  },
  esbuild: {
    // Enable JSX in .js files
    include: /\.(jsx?|tsx?)$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});