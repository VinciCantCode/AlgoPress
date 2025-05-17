# 1512. Number of Good Pairs

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:
> Input: nums = [1,2,3,1,1,3]
>
> Output: 4
>
> Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
> Input: nums = [1,1,1,1]
>
> Output: 6
>
> Explanation: Each pair in the array are good.
 
Constraints:

1 <= nums.length <= 100

1 <= nums[i] <= 100

## How to solve the problem

Using nested for loop, the second loop range equals i + 1 to length of nums.

**Code**

```Python
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = 0
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] == nums[j]:
                    count += 1
        return count
```

## Complexity

Time complexity: O(n^2)

Nested loop is needed.

Space complexity: O(1)

No extra data structures are used.