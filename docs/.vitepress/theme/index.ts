import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { inject } from '@vercel/analytics'

if (typeof window !== 'undefined') {
  inject()
}

export default {
  ...DefaultTheme
} 