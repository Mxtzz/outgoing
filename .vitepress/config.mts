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
          { text: 'My', link: '/marks/my' },
          { text: 'Ym', link: '/marks/ym' },
          { text: 'Whx', link: '/marks/whx' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Marks',
        link: '/marks',
        collapsed: false,
        items: [
          { text: 'Me', link: '/marks/my' },
          { text: 'Ym', link: '/marks/ym' },
          { text: 'Whx', link: '/marks/whx' }
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
