// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    router.onBeforeRouteChange = (to: string) => {
      const token = typeof window !== 'undefined' ? sessionStorage.getItem('token') : '';
      if (!token && !to.includes('/login')) {
        router.go('/outgoing/login')
        return false
      }
      return true
    }
  }
} satisfies Theme
