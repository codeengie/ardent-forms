import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { createHtmlPlugin } from 'vite-plugin-html';

/**
 * Review "Configuring Vite" page if you need to add conditional
 * changes to configuration.
 * @link https://vitejs.dev/config/
 * @link https://vitejs.dev/guide/env-and-mode.html
 * @todo Create a custom config for prod
 */
export default defineConfig({
  server: {
    host: 'ardentforms.com',
    open: 'browser',
    port: 443
  },
  plugins: [
    react(),
    basicSsl(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          bots: `<meta name="robots" content="noindex,nofollow">`,
        }
      }
    })
  ],
})
