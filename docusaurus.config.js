module.exports = {
  title: 'PUEBI Daring',
  tagline: 'Pedoman Umum Ejaan Bahasa Indonesia',
  baseUrl: '/',
  url: 'https://puebi.js.org',
  favicon: 'images/logo.png',
  onBrokenLinks: 'ignore',
  projectName: 'puebi',
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        swCustom: require.resolve('./src/utils/sw.js'),
        reloadPopup: require.resolve('./src/theme/PwaReloadPopup.js'),
        offlineModeActivationStrategies: ['always', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'images/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href:'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#111111',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'images/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'images/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'images/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000000',
          },
        ],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'PUEBI Daring',
      logo: {
        alt: 'Logo',
        src: 'images/logo.png',
        srcDark: 'images/logo.png',
      },
      items: [
        {
          to: 'huruf',
          label: 'Daftar Isi',
          position: 'left',
        },
        {
          href: 'https://github.com/gipsterya/puebi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'CC BY-SA 4.0',
        src: 'images/cc-by-sa.svg',
      },
      copyright: 'CC BY-SA 4.0 - Gigip Andreas',
    },
    colorMode: {
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '☀️',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          docItemComponent: require.resolve('./src/theme/DocItem.js'),
          sidebarPath: require.resolve('./src/components/Sidebar.js'),
        },
        theme: {
          customCss: require.resolve('./src/theme/main.css'),
        },
      },
    ],
  ],
}
