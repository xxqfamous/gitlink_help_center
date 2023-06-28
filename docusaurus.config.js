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
    aloglia:{
      contextualSearch:true,
      apiKey: '0f9f28b9ab9efae89810921a351753b5',
      search:true,
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
      ]
    },
    footer: {
      style: 'dark',
      logo:{
        src:"/static/img/gitlink.png"
      },
      links: [
        {
          title: '社区',
          items: [
            {
              label: '网站首页',
              to: '/docs/intro',
            },
            {
              label: '关于我们',
              to: '/docs/intro',
            },
            {
              label: '教学实践',
              to: '/docs/intro',
            },
            {
              label: '合作伙伴',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '支持与服务',
          items: [
            {
              label: 'API文档',
              to: '/blog',
            },
            {
              label: 'Git常用命令',
              to: '/blog',
            },
            {
              label: '引擎使用手册',
              to: '/blog',
            },
            {
              label: '服务协议',
              to: '/blog',
            },
          ],
        },
        {
          title: '加入我们',
          items: [
            {
              label: '官网邮箱：gitlink@ccf.org.cn',
              to:"https://www.gitlink.org.cn"
            },
          ],
        },
      ],
      copyright: `<p>©Copyright ${new Date().getFullYear()} CCF 开源发展委员会</p><p>Powered by Trustie& IntelliDE 京ICP备13000930号</p>`,
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
  plugins: [
    [require.resolve("@cmfcmf/docusaurus-search-local"),{
      indexDocs: true,
      indexBlog: true,
      language: ['zh'],
    }],
  ],
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
};
