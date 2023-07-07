const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'gitlink',
  tagline:'gitlink帮助中心',
  url: 'https://boxyhq.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/icon.ico',
  organizationName: 'luffyZh', // Usually your GitHub org/user name.
  projectName: 'docusaurus-luffyzh-website', // Usually your repo name.
  scripts: [],
  // stylesheets: ['styles/dark-mode.css'],
  themeConfig: {
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      style:"dark",
      title: '',
      logo: {
        // width: '32px',
        // height: '32px',
        alt: 'gitlink',
        src: 'img/gitlink.png'
        // srcDark: 'img/logo-dark.png',
      },
      items: [
        { 
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '帮助中心'
        },
        // {
        //   href: 'https://github.com/boxyhq',
        //   position: 'right',
        //   className: 'header-github-link',
        // },
      ],
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
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // sidebarPath: require.resolve('./sidebars.js'),
          editUrl:'https://www.gitlink.org.cn/Gitlink/gitlink_help_center/tree/master/',
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    ['@cmfcmf/docusaurus-search-local', {
      language:['en','zh']
    }],
  ],
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
};
