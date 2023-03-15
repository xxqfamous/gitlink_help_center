const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'gitlink',
  tagline: 'gitlink帮助中心',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.ico',
  url: 'https://luffyzh.github.io',
  baseUrl: '/',
  organizationName: 'luffyZh', // Usually your GitHub org/user name.
  projectName: 'docusaurus-luffyzh-website', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '25626fae796133dc1e734c6bcaaeac3c',
      indexName: 'docsearch',
    },
    navbar: {
      title: '',
      logo: {
        alt: 'gitlink',
        src: 'img/gitlink.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '帮助中心',
        },
        // {
        //   position: 'left',
        //   to: '/blog',
        //   label: '博客',
        // },
        // {
        //   href: 'https://github.com/luffyZh/docusaurus-luffyzh-website',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '文档',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '掘金',
              href: 'https://juejin.cn/user/96412752681079'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/luffzh/docusaurus-luffyzh-website',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 前端周同学～`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  // i18n: {
  //   defaultLocale: 'zh-cn',
  //   locales: ['en', 'zh-cn'],
  // },
};
