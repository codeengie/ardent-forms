import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';

/**
 * Review "Configuring Vite" page if you need to add conditional
 * changes to configuration.
 * @link https://vitejs.dev/config/
 */
export default defineConfig({
  server: {
    host: 'ardentforms.com',
    open: 'browser',
    port: 443
  },
  plugins: [react(), basicSsl()],
})
