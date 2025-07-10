import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AlgoPress",
  description: "Record the algorithm learning process",
  base: '/AlgoPress',
  head: [
    ['link', { rel: 'icon', href: '/AlgoPress/favicon.png' }],
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },
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
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/Entry-Level-20-Questions/introduction.md' },
          { text: '2235. Add Two Integers', link: '/Entry-Level-20-Questions/2235.md' },
          { text: '2469. Convert the Temperature', link: '/Entry-Level-20-Questions/2469.md' },
          { text: '2413. Smallest Even Multiple', link: '/Entry-Level-20-Questions/2413.md' },
          { text: '2236. Root Equals Sum of Children', link: '/Entry-Level-20-Questions/2236.md' },
          { text: '1486. XOR Operation in an Array', link: '/Entry-Level-20-Questions/1486.md' },
          { text: '1512. Number of Good Pairs', link: '/Entry-Level-20-Questions/1512.md' },
          { text: '1534. Count Good Triplets', link: '/Entry-Level-20-Questions/1534.md' },
          { text: '584. Find Customer Referee', link: '/Entry-Level-20-Questions/584.md' },
          { text: '1757. Recyclable and Low Fat Products', link: '/Entry-Level-20-Questions/1757.md' },
          { text: '258. Add Digits', link: '/Entry-Level-20-Questions/258.md' },
          { text: '1281. Subtract the Product and Sum of Digits of an Integer', link: '/Entry-Level-20-Questions/1281.md' },
          { text: '231. Power of Two', link: '/Entry-Level-20-Questions/231.md' },
          { text: '326. Power of Three', link: '/Entry-Level-20-Questions/326.md' },
          { text: '264. Ugly Number', link: '/Entry-Level-20-Questions/264.md' },
          { text: '1470. Shuffle the Array', link: '/Entry-Level-20-Questions/1470.md' },
          { text: '867. Transpose Matrix', link: '/Entry-Level-20-Questions/867.md' },
          { text: '1422. Maximum Score After Splitting a String', link: '/Entry-Level-20-Questions/1422.md' },
          { text: '2586. Count the Number of Vowel Strings in Range', link: '/Entry-Level-20-Questions/2586.md' },
        ]
      },

      {
        text: 'Two Pointers',
        collapsed: true,
        items: [
          { text: '167. Two Sum II - Input Array Is Sorted', link: '/Two-Pointers/167.md' },
          { text: '15. 3Sum', link: '/Two-Pointers/15.md' },
          { text: '11. Container With Most Water', link: '/Two-Pointers/11.md' },
          { text: '42. Trapping Rain Water', link: '/Two-Pointers/42.md' },
        ]
      },

      {
        text: 'Sliding Window',
        collapsed: true,
        items: [
          { text: '209. Minimum Size Subarray Sum', link: '/Sliding-Window/209.md' },
          { text: '713. Subarray Product Less Than K', link: '/Sliding-Window/713.md' },
          { text: '3. Longest Substring Without Repeating Characters', link: '/Sliding-Window/3.md' },
        ]
      },

      {
        text: 'Binary Search',
        collapsed: true,
        items: [
          { text: '852. Peak Index in a Mountain Array', link: '/Binary-Search/852.md' },
          { text: '34. Find First and Last Position of Element in Sorted Array', link: '/Binary-Search/34.md' },
          { text: '162. Find Peak Element', link: '/Binary-Search/162.md' },
          { text: '153. Find Minimum in Rotated Sorted Array', link: '/Binary-Search/153.md' },
          { text: '33. Search in Rotated Sorted Array', link: '/Binary-Search/33.md' },
        ]
      },

      {
        text: 'Linked List',
        collapsed: true,
        items: [
          { text: '206. Reverse Linked List', link: '/Linked-List/206.md' },
          { text: '24. Swap Nodes in Pairs', link: '/Linked-List/24.md' },
          { text: '19. Remove Nth Node From End of List', link: '/Linked-List/19.md' },
          { text: '83. Remove Duplicates from Sorted List', link: '/Linked-List/83.md' },
          { text: '876. Middle of the Linked List', link: '/Linked-List/876.md' },
          { text: '141. Linked List Cycle', link: '/Linked-List/141.md' },
          { text: '142. Linked List Cycle II', link: '/Linked-List/142.md' },
        ]
      },

      {
        text: 'Hash Table',
        collapsed: true,
        items: [
          { text: '242. Valid Anagram', link: '/Hash-Table/242.md' },
          { text: '349. Intersection of Two Arrays', link: '/Hash-Table/349.md' },
          { text: '18. 4Sum', link: '/Hash-Table/18.md' },
        ]
      },

      {
        text: 'Binary Tree',
        collapsed: true,
        items: [
          { text: '104. Maximum Depth of Binary Tree', link: '/Binary-Tree/104.md' },
          { text: '100. Same Tree', link: '/Binary-Tree/100.md' },
          { text: '110. Balanced Binary Tree', link: '/Binary-Tree/110.md' },
          { text: '199. Binary Tree Right Side View', link: '/Binary-Tree/199.md' },
          { text: '98. Validate Binary Search Tree', link: '/Binary-Tree/98.md' },
          { text: '236. Lowest Common Ancestor of a Binary Tree', link: '/Binary-Tree/236.md' },
          { text: '235. Lowest Common Ancestor of a Binary Search Tree', link: '/Binary-Tree/235.md' },
          { text: '102. Binary Tree Level Order Traversal', link: '/Binary-Tree/102.md' },
          { text: '103. Binary Tree Zigzag Level Order Traversal', link: '/Binary-Tree/103.md' },
          { text: '513. Find Bottom Left Tree Value', link: '/Binary-Tree/513.md' },
          { text: '144. Binary Tree Preorder Traversal', link: '/Binary-Tree/144.md' },
          { text: '145. Binary Tree Postorder Traversal', link: '/Binary-Tree/145.md' },
          { text: '94. Binary Tree Inorder Traversal', link: '/Binary-Tree/94.md' },
          { text: '226. Invert Binary Tree', link: '/Binary-Tree/226.md' },
          { text: '101. Symmetric Tree', link: '/Binary-Tree/101.md' },
          { text: '111. Minimum Depth of Binary Tree', link: '/Binary-Tree/111.md' },
          { text: '222. Count Complete Tree Nodes', link: '/Binary-Tree/222.md' },
          { text: '257. Binary Tree Paths', link: '/Binary-Tree/257.md' },
          { text: '404. Sum of Left Leaves', link: '/Binary-Tree/404.md' },
          { text: '112. Path Sum', link: '/Binary-Tree/112.md' },
          { text: '106. Construct Binary Tree from Inorder and Postorder Traversal', link: '/Binary-Tree/106.md' },
          { text: '654. Maximum Binary Tree', link: '/Binary-Tree/654.md' },
          { text: '617. Merge Two Binary Trees', link: '/Binary-Tree/617.md' },
          { text: '700. Search in a Binary Search Tree', link: '/Binary-Tree/700.md' },
          { text: '701. Insert into a Binary Search Tree', link: '/Binary-Tree/701.md' },
        ]
      },

      {
        text: 'Backtracking',
        collapsed: true,
        items: [
          { text: '77. Combinations', link: '/Backtracking/77.md' },
          { text: '216. Combination Sum III', link: '/Backtracking/216.md' },
          { text: '17. Letter Combinations of a Phone Number', link: '/Backtracking/17.md' },
          { text: '78. Subsets', link: '/Backtracking/78.md' },
          { text: '131. Palindrome Partitioning', link: '/Backtracking/131.md' },
          { text: '22. Generate Parentheses', link: '/Backtracking/22.md' },
          { text: '46. Permutations', link: '/Backtracking/46.md' },
          { text: '47. Permutations II', link: '/Backtracking/47.md' },
          { text: '51. N-Queens', link: '/Backtracking/51.md' },
          { text: '491. Non-decreasing Subsequences', link: '/Backtracking/491.md' },
          { text: '90. Subsets II', link: '/Backtracking/90.md' },
          { text: '39. Combination Sum', link: '/Backtracking/39.md' },
        ]
      },

      {
        text: 'Dynamic Programming',
        collapsed: false,
        items: [
          { text: '198. House Robber', link: '/Dynamic-Programming/198.md' },
          { text: '213. House Robber II', link: '/Dynamic-Programming/213.md' },
          { text: '70. Climbing Stairs', link: '/Dynamic-Programming/70.md' },
          { text: '746. Min Cost Climbing Stairs', link: '/Dynamic-Programming/746.md' },
          { text: '740. Delete and Earn', link: '/Dynamic-Programming/740.md' },
          { text: '2366. Count Ways To Build Good Strings', link: '/Dynamic-Programming/2366.md' },
          { text: '494. Target Sum', link: '/Dynamic-Programming/494.md' },
          { text: '322. Coin Change', link: '/Dynamic-Programming/322.md' },
          { text: '1143. Longest Common Subsequence', link: '/Dynamic-Programming/1143.md' },
          { text: '72. Edit Distance', link: '/Dynamic-Programming/72.md' },
          { text: '300. Longest Increasing Subsequence', link: '/Dynamic-Programming/300.md' },
          { text: '122. Best Time to Buy and Sell Stock II', link: '/Dynamic-Programming/122.md' },
        ]
      },

      // {
      //   text: 'User List',
      //   collapsed: false,
      //   items: [
      //     { text: 'User List', link: '/test-users.md' },
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VinciCantCode/AlgoPress.git' }
    ]
  }
})
