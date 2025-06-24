import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import CommentSection from '../../components/CommentSection.vue'
import UserList from '../../components/UserList.vue'

if (typeof window !== 'undefined') {
  inject()
  injectSpeedInsights()
}

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Global Component Registration
    app.component('CommentSection', CommentSection)
    app.component('UserList', UserList)
  }
} 