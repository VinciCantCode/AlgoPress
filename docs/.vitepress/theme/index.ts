import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

if (typeof window !== 'undefined') {
  inject()
  injectSpeedInsights()
}

export default {
  ...DefaultTheme
} 