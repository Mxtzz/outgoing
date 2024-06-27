import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MxtzzDocs",
  description: "A docs site",
  base: '/outgoing/',
  head: [['link', { rel: 'icon', href: '/outgoing/assets/logo.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Marks',
        items: [
          { text: 'bWF6aGFud2Vu', link: '/marks/my' },
          { text: 'eXVhbm1lbmc=', link: '/marks/eXVhbm1lbmc=' },
          { text: 'd2FuZ2hhb3hpbg==', link: '/marks/d2FuZ2hhb3hpbg==' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Marks',
        link: '/marks',
        collapsed: false,
        items: [
          { text: 'bWF6aGFud2Vu', link: '/marks/my' },
          { text: 'eXVhbm1lbmc=', link: '/marks/eXVhbm1lbmc=' },
          { text: 'd2FuZ2hhb3hpbg==', link: '/marks/d2FuZ2hhb3hpbg==' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mxtzz/outgoing' }
    ],

    editLink: {
      pattern: 'https://github.com/Mxtzz/outgoing/edit/main/:path'
    },
    search: {
      provider: 'local'
    }
  },
})
