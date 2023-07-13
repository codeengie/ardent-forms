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

// Build config
let params = {
  filename: 'index.html',
  template: 'src/html/index.dev.html',
  inject: {
    data: {
      title: 'Ardent Forms',
      desc: 'Ardent Forms is where I display my past and present web development projects.'
    }
  }
};

// Vite config
let options = {
  server: {
    host: 'ardentforms.com',
    open: 'browser',
    port: 443
  },
  plugins: [
      react(),
      basicSsl(),
      createHtmlPlugin(params)
  ]
};

export default defineConfig(({ command, mode }) => {
  if (mode === 'production') {
    params.filename = 'dist/index.html';
    params.template = 'src/html/index.prod.html';
    params.minify = true;
    params.inject.data.bots = `<meta name="robots" content="noindex,nofollow">`;
    params.inject.data.gtag = `
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0GHPHTM29V"></script>
        <script>window.dataLayer = window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-0GHPHTM29V');</script>`;
  }

  console.log(params);

  return options;
});
