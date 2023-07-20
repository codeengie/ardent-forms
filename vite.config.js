/**
 * Modified the original build config to output different `index.html` files based on environment. Although,
 * I did manage to accomplish the task with `vite-plugin-html` it appears this plugin is no longer maintained
 * and does not rename the output template html file. Plus, it also includes the template directory into the
 * 'dist' folder. I worked around this by placing the prod version of `index.html` in the root, its Mickey Mouse
 * but it will do for now. @todo Find a suitable replacement for 'vite-plugin-html'
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { createHtmlPlugin } from 'vite-plugin-html';

/**
 * Review "Configuring Vite" page if you need to add conditional
 * changes to configuration.
 * @link https://vitejs.dev/config/
 * @link https://vitejs.dev/guide/env-and-mode.html
 */

// Build config
let params = {
  template: 'src/templates/index.dev.html',
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
    params.template = 'index.html';
    params.inject.data.bots = `<meta name="robots" content="index,follow">`;
    params.inject.data.gtag = `
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0GHPHTM29V"></script>
        <script>window.dataLayer = window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-0GHPHTM29V');</script>`;
  }

  return options;
});
