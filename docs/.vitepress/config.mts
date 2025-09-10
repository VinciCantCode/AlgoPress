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
          { text: 'Introduction', link: '/welcome-to-my-leetcode/introduction.md' },
        ]
      },

      {
        text: 'Entry Level 20 Questions',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/entry-level-20-questions/introduction.md' },
          { text: '2235. Add Two Integers', link: '/entry-level-20-questions/2235.md' },
          { text: '2469. Convert the Temperature', link: '/entry-level-20-questions/2469.md' },
          { text: '2413. Smallest Even Multiple', link: '/entry-level-20-questions/2413.md' },
          { text: '2236. Root Equals Sum of Children', link: '/entry-level-20-questions/2236.md' },
          { text: '1486. XOR Operation in an Array', link: '/entry-level-20-questions/1486.md' },
          { text: '1512. Number of Good Pairs', link: '/entry-level-20-questions/1512.md' },
          { text: '1534. Count Good Triplets', link: '/entry-level-20-questions/1534.md' },
          { text: '584. Find Customer Referee', link: '/entry-level-20-questions/584.md' },
          { text: '1757. Recyclable and Low Fat Products', link: '/entry-level-20-questions/1757.md' },
          { text: '258. Add Digits', link: '/entry-level-20-questions/258.md' },
          { text: '1281. Subtract the Product and Sum of Digits of an Integer', link: '/entry-level-20-questions/1281.md' },
          { text: '231. Power of Two', link: '/entry-level-20-questions/231.md' },
          { text: '326. Power of Three', link: '/entry-level-20-questions/326.md' },
          { text: '264. Ugly Number', link: '/entry-level-20-questions/264.md' },
          { text: '1470. Shuffle the Array', link: '/entry-level-20-questions/1470.md' },
          { text: '867. Transpose Matrix', link: '/entry-level-20-questions/867.md' },
          { text: '1422. Maximum Score After Splitting a String', link: '/entry-level-20-questions/1422.md' },
          { text: '2586. Count the Number of Vowel Strings in Range', link: '/entry-level-20-questions/2586.md' },
        ]
      },

      {
        text: 'Two Pointers',
        collapsed: true,
        items: [
          { text: '167. Two Sum II - Input Array Is Sorted', link: '/two-pointers/167.md' },
          { text: '15. 3Sum', link: '/two-pointers/15.md' },
          { text: '11. Container With Most Water', link: '/two-pointers/11.md' },
          { text: '42. Trapping Rain Water', link: '/two-pointers/42.md' },
          { text: '125. Valid Palindrome', link: '/two-pointers/125.md' },
          { text: '1616. Split Two Strings to Make Palindrome', link: '/two-pointers/1616.md' },
          { text: '2105. Watering Plants II', link: '/two-pointers/2105.md' },
          { text: '2079. Watering Plants', link: '/two-pointers/2079.md' },
          { text: '611. Valid Triangle Number', link: '/two-pointers/611.md' },
          { text: '16. 3Sum Closest', link: '/two-pointers/16.md' },
        ]
      },

      {
        text: 'Sliding Window',
        collapsed: true,
        items: [
          { text: '209. Minimum Size Subarray Sum', link: '/sliding-window/209.md' },
          { text: '713. Subarray Product Less Than K', link: '/sliding-window/713.md' },
          { text: '3. Longest Substring Without Repeating Characters', link: '/sliding-window/3.md' },
          { text: '28. Find the Index of the First Occurrence in a String', link: '/sliding-window/28.md' },
        ]
      },

      {
        text: 'Binary Search',
        collapsed: true,
        items: [
          { text: '852. Peak Index in a Mountain Array', link: '/binary-search/852.md' },
          { text: '34. Find First and Last Position of Element in Sorted Array', link: '/binary-search/34.md' },
          { text: '162. Find Peak Element', link: '/binary-search/162.md' },
          { text: '153. Find Minimum in Rotated Sorted Array', link: '/binary-search/153.md' },
          { text: '33. Search in Rotated Sorted Array', link: '/binary-search/33.md' },
        ]
      },

      {
        text: 'Linked List',
        collapsed: true,
        items: [
          { text: '206. Reverse Linked List', link: '/linked-list/206.md' },
          { text: '24. Swap Nodes in Pairs', link: '/linked-list/24.md' },
          { text: '19. Remove Nth Node From End of List', link: '/linked-list/19.md' },
          { text: '83. Remove Duplicates from Sorted List', link: '/linked-list/83.md' },
          { text: '876. Middle of the Linked List', link: '/linked-list/876.md' },
          { text: '141. Linked List Cycle', link: '/linked-list/141.md' },
          { text: '142. Linked List Cycle II', link: '/linked-list/142.md' },
        ]
      },

      {
        text: 'Hash Table',
        collapsed: true,
        items: [
          { text: '242. Valid Anagram', link: '/hash-table/242.md' },
          { text: '349. Intersection of Two Arrays', link: '/hash-table/349.md' },
          { text: '18. 4Sum', link: '/hash-table/18.md' },
          { text: '819. Most Common Word', link: '/hash-table/819.md' },
          { text: '387. First Unique Character in a String', link: '/hash-table/387.md' },
          { text: '20. Valid Parentheses', link: '/hash-table/20.md' },
        ]
      },

      {
        text: 'Binary Tree',
        collapsed: true,
        items: [
          { text: '104. Maximum Depth of Binary Tree', link: '/binary-tree/104.md' },
          { text: '100. Same Tree', link: '/binary-tree/100.md' },
          { text: '110. Balanced Binary Tree', link: '/binary-tree/110.md' },
          { text: '199. Binary Tree Right Side View', link: '/binary-tree/199.md' },
          { text: '98. Validate Binary Search Tree', link: '/binary-tree/98.md' },
          { text: '236. Lowest Common Ancestor of a Binary Tree', link: '/binary-tree/236.md' },
          { text: '235. Lowest Common Ancestor of a Binary Search Tree', link: '/binary-tree/235.md' },
          { text: '102. Binary Tree Level Order Traversal', link: '/binary-tree/102.md' },
          { text: '103. Binary Tree Zigzag Level Order Traversal', link: '/binary-tree/103.md' },
          { text: '513. Find Bottom Left Tree Value', link: '/binary-tree/513.md' },
          { text: '144. Binary Tree Preorder Traversal', link: '/binary-tree/144.md' },
          { text: '145. Binary Tree Postorder Traversal', link: '/binary-tree/145.md' },
          { text: '94. Binary Tree Inorder Traversal', link: '/binary-tree/94.md' },
          { text: '226. Invert Binary Tree', link: '/binary-tree/226.md' },
          { text: '101. Symmetric Tree', link: '/binary-tree/101.md' },
          { text: '111. Minimum Depth of Binary Tree', link: '/binary-tree/111.md' },
          { text: '222. Count Complete Tree Nodes', link: '/binary-tree/222.md' },
          { text: '257. Binary Tree Paths', link: '/binary-tree/257.md' },
          { text: '404. Sum of Left Leaves', link: '/binary-tree/404.md' },
          { text: '112. Path Sum', link: '/binary-tree/112.md' },
          { text: '106. Construct Binary Tree from Inorder and Postorder Traversal', link: '/binary-tree/106.md' },
          { text: '654. Maximum Binary Tree', link: '/binary-tree/654.md' },
          { text: '617. Merge Two Binary Trees', link: '/binary-tree/617.md' },
          { text: '700. Search in a Binary Search Tree', link: '/binary-tree/700.md' },
          { text: '701. Insert into a Binary Search Tree', link: '/binary-tree/701.md' },
        ]
      },

      {
        text: 'Backtracking',
        collapsed: true,
        items: [
          { text: '77. Combinations', link: '/backtracking/77.md' },
          { text: '216. Combination Sum III', link: '/backtracking/216.md' },
          { text: '17. Letter Combinations of a Phone Number', link: '/backtracking/17.md' },
          { text: '78. Subsets', link: '/backtracking/78.md' },
          { text: '131. Palindrome Partitioning', link: '/backtracking/131.md' },
          { text: '22. Generate Parentheses', link: '/backtracking/22.md' },
          { text: '46. Permutations', link: '/backtracking/46.md' },
          { text: '47. Permutations II', link: '/backtracking/47.md' },
          { text: '51. N-Queens', link: '/backtracking/51.md' },
          { text: '491. Non-decreasing Subsequences', link: '/backtracking/491.md' },
          { text: '90. Subsets II', link: '/backtracking/90.md' },
          { text: '39. Combination Sum', link: '/backtracking/39.md' },
        ]
      },

      {
        text: 'Dynamic Programming',
        collapsed: true,
        items: [
          { text: '198. House Robber', link: '/dynamic-programming/198.md' },
          { text: '213. House Robber II', link: '/dynamic-programming/213.md' },
          { text: '70. Climbing Stairs', link: '/dynamic-programming/70.md' },
          { text: '746. Min Cost Climbing Stairs', link: '/dynamic-programming/746.md' },
          { text: '740. Delete and Earn', link: '/dynamic-programming/740.md' },
          { text: '2366. Count Ways To Build Good Strings', link: '/dynamic-programming/2366.md' },
          { text: '494. Target Sum', link: '/dynamic-programming/494.md' },
          { text: '322. Coin Change', link: '/dynamic-programming/322.md' },
          { text: '1143. Longest Common Subsequence', link: '/dynamic-programming/1143.md' },
          { text: '72. Edit Distance', link: '/dynamic-programming/72.md' },
          { text: '300. Longest Increasing Subsequence', link: '/dynamic-programming/300.md' },
          { text: '122. Best Time to Buy and Sell Stock II', link: '/dynamic-programming/122.md' },
          { text: '309. Best Time to Buy and Sell Stock with Cooldown', link: '/dynamic-programming/309.md' },
          { text: '188. Best Time to Buy and Sell Stock IV', link: '/dynamic-programming/188.md' },
          { text: '516. Longest Palindromic Subsequence', link: '/dynamic-programming/516.md' },
          { text: '1039. Minimum Score Triangulation of Polygon', link: '/dynamic-programming/1039.md' },
          { text: '543. Diameter of Binary Tree', link: '/dynamic-programming/543.md' },
        ]
      },

      {
        text: 'Design Data Structure',
        collapsed: true,
        items: [
          { text: '211. Design Add and Search Words Data Structure', link: '/design-data-structure/211.md' },
          { text: '155. Min Stack', link: '/design-data-structure/155.md' },
          { text: '146. LRU Cache', link: '/design-data-structure/146.md' },
          { text: '460. LFU Cache', link: '/design-data-structure/460.md' },
        ]
      },

      {
        text: 'Array and String',
        collapsed: true,
        items: [
          { text: '238. Product of Array Except Self', link: '/array-and-string/238.md' },
          { text: '268. Missing Number', link: '/array-and-string/268.md' },
          { text: '48. Rotate Image', link: '/array-and-string/48.md' },
          { text: '165. Compare Version Numbers', link: '/array-and-string/165.md' },
          { text: '151. Reverse Words in a String', link: '/array-and-string/151.md' },
          { text: '186. Reverse Words in a String II', link: '/array-and-string/186.md' },
        ]
      },

      {
        text: 'Top-100',
        collapsed: true,
        items: [
          {
            text: 'Hashing',
            collapsed: true,
            items: [
              { text: '1. Two Sum', link: '/top-100/hashing/1.md' },
              { text: '49. Group Anagrams', link: '/top-100/hashing/49.md' },
              { text: '128. Longest Consecutive Sequence', link: '/top-100/hashing/128.md' },
              { text: '560. Subarray Sum Equals K', link: '/top-100/hashing/560.md' },
            ]
          },
          {
            text: 'Two Pointers',
            collapsed: true,
            items: [
              { text: '283. Move Zeroes', link: '/top-100/two-pointers/283.md' },
              { text: '11. Container With Most Water', link: '/top-100/two-pointers/11.md' },
              { text: '15. 3Sum', link: '/top-100/two-pointers/15.md' },
              { text: '42. Trapping Rain Water', link: '/top-100/two-pointers/42.md' },
            ]
          },
          {
            text: 'Sliding Window',
            collapsed: true,
            items: [
              { text: '3. Longest Substring Without Repeating Characters', link: '/top-100/sliding-window/3.md' },
              { text: '438. Find All Anagrams in a String', link: '/top-100/sliding-window/438.md' },
              { text: '76. Minimum Window Substring', link: '/top-100/sliding-window/76.md' },
              { text: '239. Sliding Window Maximum', link: '/top-100/sliding-window/239.md' },
            ]
          },
          {
            text: 'Greedy',
            collapsed: true,
            items: [
              { text: '55. Jump Game', link: '/top-100/greedy/55.md' },
              { text: '121. Best Time to Buy and Sell Stock', link: '/top-100/greedy/121.md' },
              { text: '763. Partition Labels', link: '/top-100/greedy/763.md' },
              { text: '45. Jump Game II', link: '/top-100/greedy/45.md' },
            ]
          },
          {
            text: 'Heap',
            collapsed: true,
            items: [
              { text: '215. Kth Largest Element in an Array', link: '/top-100/heap/215.md' },
            ]
          }
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
