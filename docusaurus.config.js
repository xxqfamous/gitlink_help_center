const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'gitlink',
  tagline: 'gitlink帮助中心',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.ico',
  url: 'https://luffyzh.github.io',
  baseUrl: '/',
  organizationName: 'luffyZh', // Usually your GitHub org/user name.
  projectName: 'docusaurus-luffyzh-website', // Usually your repo name.
  themeConfig: {
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
        src:"img/gitlink.png"
      },
      links: [
        {
          title: '社区',
          items: [
            {
              label: '网站首页',
              to: 'https://www.gitlink.org.cn',
            },
            {
              label: '关于我们',
              to: 'https://www.gitlink.org.cn/aboutus',
            },
            {
              label: '教学实践',
              to: 'https://www.gitlink.org.cn/educoder',
            },
            {
              label: '合作伙伴',
              to: 'https://forum.trustie.net/forums/5030/detail',
            },
          ],
        },
        {
          title: '支持与服务',
          items: [
            {
              label: 'API文档',
              to: 'https://forgeplus.trustie.net/docs/api',
            },
            {
              label: 'Git常用命令',
              to: 'https://git-scm.com',
            },
            {
              label: '引擎使用手册',
              to: 'https://forum.gitlink.org.cn/forums/7487/detail',
            },
            {
              label: '服务协议',
              to: 'https://forum.trustie.net/forums/5029/detail',
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
            {
              label:'QQ群',
              to:'https://www.gitlink.org.cn'
            },
            {
              label:'公众号',
              to:'https://www.gitlink.org.cn'
            }
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
          routeBasePath: "/",
        },
        //修饰的css文件格式
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), { // warning: Use '@cmfcmf/docusaurus-search-local' (without the require.resolve) if you use Docusaurus before v2.0.0-alpha.56
      indexBlog: true, // whether to index blog pages
      indexDocs: true, // whether to index docs pages
      indexPages: false, // whether to index static pages
      language: "en" // language of your documentation, see next section
    }]
  ],
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
};
