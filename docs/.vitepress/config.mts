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
          { text: 'Introduction', link: '/Welcome-to-My-LeetCode/introduction.md' },
        ]
      },

      {
        text: 'Entry Level 20 Questions',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/Entry-Level-20-Questions/introduction.md' },
          { text: '2235. Add Two Integers', link: '/Entry-Level-20-Questions/2235-add-two-integers.md' },
          { text: '2469. Convert the Temperature', link: '/Entry-Level-20-Questions/2469-convert-the-temperature.md' },
          { text: '2413. Smallest Even Multiple', link: '/Entry-Level-20-Questions/2413-smallest-even-multiple.md' },
          { text: '2236. Root Equals Sum of Children', link: '/Entry-Level-20-Questions/2236-root-equals-sum-of-children.md' },
          { text: '1486. XOR Operation in an Array', link: '/Entry-Level-20-Questions/1486-xor-operation-in-an-array.md' },
          { text: '1512. Number of Good Pairs', link: '/Entry-Level-20-Questions/1512-number-of-good-pairs.md' },
          { text: '1534. Count Good Triplets', link: '/Entry-Level-20-Questions/1534-count-good-triplets.md' },
          { text: '584. Find Customer Referee', link: '/Entry-Level-20-Questions/584-find-customer-referee.md' },
          { text: '1757. Recyclable and Low Fat Products', link: '/Entry-Level-20-Questions/1757-recyclable-and-low-fat-products.md' },
          { text: '258. Add Digits', link: '/Entry-Level-20-Questions/258-add-digits.md' },
          { text: '1281. Subtract the Product and Sum of Digits of an Integer', link: '/Entry-Level-20-Questions/1281-subtract-the-product-and-sum-of-digits-of-an-integer.md' },
          { text: '231. Power of Two', link: '/Entry-Level-20-Questions/231-power-of-two.md' },
          { text: '326. Power of Three', link: '/Entry-Level-20-Questions/326-power-of-three.md' },
          { text: '264. Ugly Number', link: '/Entry-Level-20-Questions/263-ugly-number.md' },
          { text: '1470. Shuffle the Array', link: '/Entry-Level-20-Questions/1470-shuffle-the-array.md' },
          { text: '867. Transpose Matrix', link: '/Entry-Level-20-Questions/867-transpose-matrix.md' },
          { text: '1422. Maximum Score After Splitting a String', link: '/Entry-Level-20-Questions/1422-maximum-score-after-splitting-a-string.md' },
          { text: '2586. Count the Number of Vowel Strings in Range', link: '/Entry-Level-20-Questions/2586-count-the-number-of-vowel-strings-in-range.md' },
        ]
      },

      {
        text: 'Two Pointers',
        collapsed: false,
        items: [
          { text: '167. Two Sum II - Input Array Is Sorted', link: '/Two-Pointers/167-two-sum-ii---input-array-is-sorted.md' },
          { text: '15. 3Sum', link: '/Two-Pointers/15-3sum.md' },
          { text: '11. Container With Most Water', link: '/Two-Pointers/11-container-with-most-water.md' },
          { text: '42. Trapping Rain Water', link: '/Two-Pointers/42-trapping-rain-water.md' },
        ]
      },

      {
        text: 'Binary Search',
        collapsed: false,
        items: [
          { text: '852. Peak Index in a Mountain Array', link: '/Binary-Search/852-peak-index-in-a-mountain-array.md' },
          { text: '34. Find First and Last Position of Element in Sorted Array', link: '/Binary-Search/34-find-first-and-last-position-of-element-in-sorted-array.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VinciCantCode/LeetCode.git' }
    ]
  }
})
