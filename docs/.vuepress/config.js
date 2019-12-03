const path = require('path')
module.exports = {
  base: '/',
  title: 'vuepress-theme-vook',
  description: 'Write your book by vuepress',
  head: [
    ['meta', {
      name: 'viewport',
      content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    }],
    ['meta', {name: 'X-UA-Compatible', content: 'ie=edge'}],
    ['meta', {name: 'keywords', content: 'cnguu,vook'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'icon', href: 'https://pic.gleehub.com/20171231/favicon.ico'}],
  ],
  locales: {
    '/': {
      lang: 'en-US',
    },
  },
  evergreen: true,
  theme: path.resolve(__dirname, '../../src'),
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config Page',
        link: '/config',
      },
    ],
  },
  host: 'localhost',
  port: 2234,
  dest: 'public',
  extraWatchFiles: [
    '/docs/.vuepress/config.js',
  ],
}
