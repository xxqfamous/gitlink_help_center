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
      apiKey: '0f9f28b9ab9efae89810921a351753b5',
      indexName: 'github',
      contextualSearch: true,
      facetFilters: ['language:zh-CH'],
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
        }
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
      copyright: `<p>©Copyright 2023 CCF 开源发展委员会</p><p>Powered by Trustie& IntelliDE 京ICP备13000930号</p>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
       //此为docusaurus的默认界面风格
      '@docusaurus/preset-classic',
      {
        //此为docs的侧边栏修饰
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          //此为网页左下的Edit this page 链接地址
          editUrl:'https://www.gitlink.org.cn/Gitlink/gitlink_help_center/tree/master/',
        },
        //修饰的css文件格式
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
};
