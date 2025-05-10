import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LeetCode",
  description: "Record my algorithm learning process",
  base:'/LeetCode',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Entry Level 20 Questions',
        collapsed: false,
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '2235. Add Two Integers', link: '/Entry Level 20 Questions/2235. Add Two Integers.md' },
          { text: '2469. Convert the Temperature', link: '/Entry Level 20 Questions/2469. Convert the Temperature.md' },
          { text: '2413. Smallest Even Multiple', link: '/Entry Level 20 Questions/2413. Smallest Even Multiple.md' },
          { text: '2236. Root Equals Sum of Children', link: '/Entry Level 20 Questions/2236. Root Equals Sum of Children.md' },
          { text: '1486. XOR Operation in an Array', link: '/Entry Level 20 Questions/1486. XOR Operation in an Array.md' },
          { text: '1512. Number of Good Pairs', link: '/Entry Level 20 Questions/1512. Number of Good Pairs.md' },
          { text: '1534. Count Good Triplets', link: '/Entry Level 20 Questions/1534. Count Good Triplets.md' },
          { text: '584. Find Customer Referee', link: '/Entry Level 20 Questions/584. Find Customer Referee.md' },
          { text: '1757. Recyclable and Low Fat Products', link: '/Entry Level 20 Questions/1757. Recyclable and Low Fat Products.md' },
          { text: '258. Add Digits', link: '/Entry Level 20 Questions/258. Add Digits.md' },
          
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VinciCantCode/LeetCode.git' }
    ]
  }
})
