// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Login from '../components/Login.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Login', Login)
    router.onBeforeRouteChange = (to: string) => {
      if ( typeof window === 'undefined') {
        return true
      }
      const token = sessionStorage.getItem('token');
      if (!token && !to.includes('/login')) {
        router.go('/outgoing/login')
        return false
      }
      return true
    }
  }
} satisfies Theme
