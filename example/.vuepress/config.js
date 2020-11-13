const path = require('path')

module.exports = {
  title: "vuepress-theme-gungnir",
  description: "Renovamen's blog, also VuePress theme Gungnir.",
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg"}],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no"}]
  ],
  theme: path.resolve(__dirname, '../../packages/theme-gungnir'),
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: "$ grep ...",
    author: "Gungnir",
    authorAvatar: "/img/avatar.jpeg",
    smoothScroll: true,
    sidebarDepth: 5,
    repo: 'Renovamen/vuepress-theme-gungnir',
    docsDir: 'blog',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: "Last Updated",
    codeTheme: "gungnir-dark",
    hitokoto: true,  // Enable hitokoto (一言) or not?
    comment: true,  // Enable comment system or not?
    rss: true, // Enable RSS or not?
    nav: [
      {
        text: "Home",
        link: "/",
        icon: 'fab fa-fort-awesome'
      },
      {
        text: "Tags",
        link: '/tags/',
        icon: 'fas fa-tag'
      },
      {
        text: "Links",
        link: '/links/',
        icon: 'fas fa-satellite-dish'
      },
      {
        text: "Docs",
        icon: "fas fa-book",
        items: [
          {
            text: "Jekyll",
            icon: "fas fa-meteor",
            link: "/docs/jekyll-theme-gungnir/"
          },
          {
            text: "VuePress",
            icon: "fas fa-rocket",
            link: "/docs/vuepress-theme-gungnir/"
          }
        ]
      }
    ],
    sidebar: {
      "/docs/jekyll-theme-gungnir/": [
        {
          title: '基础',
          collapsable: false,
          children: [
            '',
            'basic/installation',
          ],
        }
      ],
      "/docs/vuepress-theme-gungnir/": [
        {
          title: '基础',
          collapsable: false,
          children: [
            '',
          ],
        }
      ]
    },
    SNS: {
      "github": "Renovamen",
      "linkedin": "xiaohan-zou-55bba0160",  
      "facebook": "renovamen.zou",
      "twitter": "renovamen_zxh",
      "zhihu": "chao-neng-gui-su",
      "email": "renovamenzxh@gmail.com",
    },
    tagline: "A blog theme for VuePress.",
    heroImage: "/hero.png",
    bgImage: [
      {
        "path": "/img/home-bg/1.jpg",
        "mask": "rgba(40, 57, 101, .4)"
      },
      {
        "path": "/img/home-bg/2.jpg",
        "mask": "rgba(31, 64, 87, .2)"
      },
      {
        "path": "/img/home-bg/3.jpg",
        "mask": "rgba(68, 74, 83, .1)"
      },
      {
        "path": "/img/home-bg/4.jpg",
        "mask": "rgba(19, 75, 50, .2)"
      }
    ],
    pageConfig: {
      tags: {
        title: 'Tags',
        subtitle: 'Black Sheep Wall',
        bgImage: {
          "path": "/img/pages/tags.jpg",
          "mask": "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        title: 'Links',
        subtitle: 'When you are looking at the stars, please put the brightest star shining night sky as my soul.',
        bgImage: {
          "path": "/img/pages/links.jpg",
          "mask": "rgba(236, 168, 78, 0.2)"
        }
      }
    },
    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2020
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },
  plugins: [
    [
      '@vssue/vuepress-plugin-vssue', {
        platform: 'github',
        owner: 'This-is-an-Apple',
        repo: 'gitalk-comments',
        clientId: 'd6247712dc288a5a60ca',
        clientSecret: 'ed1ec72417828343c79ed910a1b77d140fa715a7',
      }
    ],
    [
      '@vuepress/google-analytics', {
        'ga': 'UA-146858305-1'
      }
    ],
    [
      '@renovamen/vuepress-plugin-rss', {
        site_url: 'https://renovamen.ink',
        copyright: 'Renovamen 2018-2020',
        count: 20
      }
    ],
    '@renovamen/vuepress-plugin-katex'
  ],
  markdown: {
    // lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5' ]
  }
}