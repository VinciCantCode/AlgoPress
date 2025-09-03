# LeetCode格式化工具

自动将LeetCode题目转换为标准格式的markdown文档。

## 使用方法

```bash
# 全局使用（推荐）
leetcode-format

# 或本地使用
python3 leetcode_formatter.py
```

## 使用步骤

1. 复制LeetCode题目到剪贴板
2. 运行命令
3. 自动生成格式化的markdown文件并复制到剪贴板

## 依赖

需要安装 `pyperclip`：
```bash
pip3 install pyperclip
```

## 输入格式示例

```
560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2

Constraints:
1 <= nums.length <= 2 * 10^4
-1000 <= nums[i] <= 1000
-10^7 <= k <= 10^7
```

## 输出格式

工具会生成符合以下格式的markdown文档：

- 标题和难度徽章
- LeetCode链接（自动生成）
- 题目描述（变量和数字用反引号包围）
- 格式化的示例（引用块格式）
- 约束条件（列表格式）
- 解决方案模板
- 复杂度分析模板

## 自动格式化功能

1. **变量和数字格式化**: 自动用反引号包围变量名、数字、数组等
2. **示例格式化**: 转换为引用块格式
3. **约束条件格式化**: 转换为列表格式
4. **URL生成**: 根据题目标题自动生成LeetCode链接
5. **模板生成**: 自动添加解决方案和复杂度分析的模板

## 注意事项

1. 确保输入的题目格式相对标准
2. 工具会自动处理大部分格式，但可能需要手动调整一些细节
3. 生成后建议检查链接是否正确
4. 需要手动填写实际的解决方案代码和复杂度分析

## 自定义

如需修改格式模板，可以编辑 `leetcode_formatter.py` 中的 `generate_markdown` 方法。

## 依赖

- Python 3.6+
- 无需额外安装包，使用Python标准库
