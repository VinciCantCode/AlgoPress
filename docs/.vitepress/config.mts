import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LeetCode",
  description: "Record my algorithm learning process",
  base: '/LeetCode',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [

      {
        text: 'Welcome to My LeetCode',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/Welcome to My LeetCode/Introduction.md' },
        ]
      },

      {
        text: 'Entry Level 20 Questions',
        collapsed: false,
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Introduction', link: '/Entry Level 20 Questions/Introduction.md' },
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
          { text: '1281. Subtract the Product and Sum of Digits of an Integer', link: '/Entry Level 20 Questions/1281. Subtract the Product and Sum of Digits of an Integer.md' },
          { text: '231. Power of Two', link: '/Entry Level 20 Questions/231. Power of Two.md' },
          { text: '326. Power of Three', link: '/Entry Level 20 Questions/326. Power of Three.md' },
          { text: '264. Ugly Number', link: '/Entry Level 20 Questions/264. Ugly Number.md' },
          { text: '1470. Shuffle the Array', link: '/Entry Level 20 Questions/1470. Shuffle the Array.md' },
          { text: '867. Transpose Matrix', link: '/Entry Level 20 Questions/867. Transpose Matrix.md' },
          { text: '1422. Maximum Score After Splitting a String', link: '/Entry Level 20 Questions/1422. Maximum Score After Splitting a String.md' },
          { text: '2586. Count the Number of Vowel Strings in Range', link: '/Entry Level 20 Questions/2586. Count the Number of Vowel Strings in Range.md' },
        ]
      },

      {
        text: 'Two Pointers (from oppsite ends)',
        collapsed: false,
        items: [
          { text: '167. Two Sum II - Input Array Is Sorted', link: '/Two Pointers (from oppsite ends)/167. Two Sum II - Input Array Is Sorted.md' },
          { text: '15. 3Sum', link: '/Two Pointers (from oppsite ends)/15. 3Sum.md' },
          { text: '11. Container With Most Water', link: '/Two Pointers (from oppsite ends)/11. Container With Most Water.md' },
          { text: '42. Trapping Rain Water', link: '/Two Pointers (from oppsite ends)/42. Trapping Rain Water.md' },
        ]
      },

      {
        text: 'Binary Search',
        collapsed: false,
        items: [
          { text: '852. Peak Index in a Mountain Array', link: '/Binary Search/852. Peak Index in a Mountain Array.md' },
          { text: '34. Find First and Last Position of Element in Sorted Array', link: '/Binary Search/34. Find First and Last Position of Element in Sorted Array.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VinciCantCode/LeetCode.git' }
    ]
  }
})
