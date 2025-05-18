# 2586. Count the Number of Vowel Strings in Range
<Badge type="tip" text="Easy" />[<Badge type="info" text="LeetCode" />](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/ "Let's go to leetcode")

AYou are given a 0-indexed array of string words and two integers left and right.

A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

Example 1:
> Input: words = ["are","amy","u"], left = 0, right = 2
>
> Output: 2
>
> Explanation: 
> - "are" is a vowel string because it starts with 'a' and ends with 'e'.
> - "amy" is not a vowel string because it does not end with a vowel.
> - "u" is a vowel string because it starts with 'u' and ends with 'u'.
> The number of vowel strings in the mentioned range is 2.

Example 2:
> Input: words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4
>
> Output: 3
>
> Explanation: 
> - "aeo" is a vowel string because it starts with 'a' and ends with 'o'.
> - "mu" is not a vowel string because it does not start with a vowel.
> - "ooo" is a vowel string because it starts with 'o' and ends with 'o'.
> - "artro" is a vowel string because it starts with 'a' and ends with 'o'.
> The number of vowel strings in the mentioned range is 3.

Constraints:
- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 10`
- `words[i]` consists of only lowercase English letters
- `0 <= left <= right < words.length`

## How to solve the problem

- Using `words[i][0]` and `words[i][-1]`to get the first and last character.

**Code**

```Python
class Solution:
    def vowelStrings(self, words: List[str], left: int, right: int) -> int:
        vowel = {'a', 'e', 'i', 'o', 'u'}
        counter = 0
        for i in range(left, right + 1):
            if words[i][0] in vowel and words[i][-1] in vowel:
                counter += 1
        return counter
```

## Complexity

Time complexity: O(n)

- One loop.

Space complexity: O(1)

- No extra space