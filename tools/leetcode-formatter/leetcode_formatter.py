#!/usr/bin/env python3
"""
LeetCode题目格式化脚本
基于560.md格式模板，自动生成标准格式的markdown文档
"""

import re
import sys
from typing import Dict, List, Tuple

class LeetCodeFormatter:
    def __init__(self):
        self.difficulty_map = {
            'easy': '<Badge type="tip" text="Easy" />',
            'medium': '<Badge type="warning" text="Medium" />',
            'hard': '<Badge type="danger" text="Hard" />'
        }
    
    def extract_problem_info(self, raw_text: str) -> Dict:
        """从原始文本中提取题目信息"""
        lines = raw_text.strip().split('\n')
        
        # 提取题目编号和标题
        title_line = lines[0].strip()
        title_match = re.match(r'(\d+)\.\s*(.+)', title_line)
        if title_match:
            problem_number = title_match.group(1)
            problem_title = title_match.group(2)
        else:
            problem_number = "XXX"
            problem_title = title_line
        
        # 检测难度
        difficulty = self.detect_difficulty(raw_text)
        
        # 查找题目描述
        description_start = 1
        description_lines = []
        example_start = -1
        
        for i, line in enumerate(lines[1:], 1):
            if line.strip().lower().startswith('example'):
                example_start = i
                break
            if line.strip() and not line.strip().lower().startswith('constraints'):
                # 跳过难度相关的行
                if not re.match(r'^\s*(Easy|Medium|Hard|Solved|Topics|Companies|conpanies|icon)\s*$', line.strip(), re.IGNORECASE):
                    description_lines.append(line.strip())
        
        description = ' '.join(description_lines)
        
        # 提取示例
        examples = self.extract_examples(lines, example_start)
        
        # 提取约束条件
        constraints = self.extract_constraints(lines)
        
        return {
            'number': problem_number,
            'title': problem_title,
            'description': description,
            'examples': examples,
            'constraints': constraints,
            'difficulty': difficulty
        }
    
    def extract_examples(self, lines: List[str], start_idx: int) -> List[Dict]:
        """提取示例"""
        if start_idx == -1:
            return []
        
        examples = []
        current_example = {}
        
        for line in lines[start_idx:]:
            line = line.strip()
            
            if line.lower().startswith('example'):
                if current_example:
                    examples.append(current_example)
                current_example = {'number': len(examples) + 1}
            
            elif line.lower().startswith('input'):
                input_match = re.search(r'input:\s*(.+)', line, re.IGNORECASE)
                if input_match:
                    current_example['input'] = input_match.group(1).strip()
            
            elif line.lower().startswith('output'):
                output_match = re.search(r'output:\s*(.+)', line, re.IGNORECASE)
                if output_match:
                    current_example['output'] = output_match.group(1).strip()
            
            elif line.lower().startswith('explanation'):
                explanation_match = re.search(r'explanation:\s*(.+)', line, re.IGNORECASE)
                if explanation_match:
                    current_example['explanation'] = explanation_match.group(1).strip()
            
            elif line.lower().startswith('constraints'):
                break
        
        if current_example:
            examples.append(current_example)
        
        return examples
    
    def extract_constraints(self, lines: List[str]) -> List[str]:
        """提取约束条件"""
        constraints = []
        in_constraints = False
        
        for line in lines:
            line = line.strip()
            
            if line.lower().startswith('constraints'):
                in_constraints = True
                continue
            
            if in_constraints:
                if line and not line.lower().startswith('follow up'):
                    # 清理约束条件格式
                    constraint = self.format_constraint(line)
                    if constraint:
                        constraints.append(constraint)
        
        return constraints
    
    def format_constraint(self, constraint: str) -> str:
        """格式化单个约束条件"""
        # 移除开头的符号
        constraint = re.sub(r'^[-•*]\s*', '', constraint)
        
        # 智能识别并修复幂次方表示法
        constraint = self.fix_exponents(constraint)
        
        # 用反引号包围整个约束条件（更简洁的格式）
        constraint = f'`{constraint}`'
        
        return f'- {constraint}'
    
    def fix_exponents(self, text: str) -> str:
        """修复幂次方表示法"""
        # 常见的幂次方模式修复
        exponent_patterns = {
            r'\b10(\d)\b': r'10^\1',  # 101 -> 10^1, 104 -> 10^4
            r'\b2(\d)\b': r'2^\1',    # 231 -> 2^31 (常见于整数范围)
        }
        
        # 特殊情况：常见的数值修复
        special_cases = {
            '104': '10^4',
            '105': '10^5',
            '109': '10^9',
            '231': '2^31',
            '232': '2^32',
        }
        
        # 首先处理特殊情况
        for old, new in special_cases.items():
            # 只在数值边界处替换，避免误替换
            text = re.sub(rf'\b{old}\b', new, text)
        
        # 然后处理通用模式
        for pattern, replacement in exponent_patterns.items():
            text = re.sub(pattern, replacement, text)
        
        return text
    
    def format_variables_in_text(self, text: str) -> str:
        """在文本中用反引号包围变量和数字"""
        # 首先清理文本，移除多余的词汇
        text = re.sub(r'\b(Solved|Hard|Medium|Easy|Topics|Companies|conpanies|icon)\b', '', text)
        text = re.sub(r'\s+', ' ', text).strip()
        
        # 修复幂次方表示法
        text = self.fix_exponents(text)
        
        # 简化方法：按优先级顺序处理，避免重复包围
        
        # 1. 包围数组（作为整体）
        text = re.sub(r'(\[[^\]]*\])', r'`\1`', text)
        
        # 2. 包围数学表达式（nums[i] + nums[j] + nums[k] == 0）
        text = re.sub(r'([a-zA-Z_]\w*\[[^\]]*\](?:\s*[+\-*/]\s*[a-zA-Z_]\w*\[[^\]]*\])*\s*[=!<>]+\s*\d+)', r'`\1`', text)
        
        # 3. 包围条件表达式（i != j）
        text = re.sub(r'([a-zA-Z_]\w*\s*[!<>=]+\s*[a-zA-Z_]\w*)', r'`\1`', text)
        
        # 4. 包围变量名（但不包围已经在反引号内的）
        common_vars = ['nums', 'height', 'target', 'k', 'n', 'i', 'j', 'left', 'right', 'strs']
        for var in common_vars:
            # 只替换不在反引号内的变量
            parts = text.split('`')
            for i in range(0, len(parts), 2):  # 只处理偶数索引（不在反引号内的部分）
                parts[i] = re.sub(rf'\b({var})\b', r'`\1`', parts[i])
            text = '`'.join(parts)
        
        # 5. 包围单独的数字（但不包围已经在反引号内的）
        parts = text.split('`')
        for i in range(0, len(parts), 2):  # 只处理偶数索引（不在反引号内的部分）
            parts[i] = re.sub(r'\b(\d+(?:\^\d+)?)\b', r'`\1`', parts[i])
        text = '`'.join(parts)
        
        # 6. 清理重复的反引号和空的反引号对
        text = re.sub(r'`{2,}', '`', text)  # 多个连续反引号变为一个
        text = re.sub(r'``', '`', text)     # 两个反引号变为一个
        text = re.sub(r'`\s*`', '', text)   # 空的反引号对删除
        
        return text
    
    def detect_difficulty(self, raw_text: str) -> str:
        """检测题目难度"""
        if re.search(r'\bHard\b', raw_text, re.IGNORECASE):
            return 'hard'
        elif re.search(r'\bEasy\b', raw_text, re.IGNORECASE):
            return 'easy'
        elif re.search(r'\bMedium\b', raw_text, re.IGNORECASE):
            return 'medium'
        return 'medium'  # 默认为Medium
    
    def get_difficulty_badge(self, difficulty: str = 'medium') -> str:
        """获取难度徽章"""
        return self.difficulty_map.get(difficulty, self.difficulty_map['medium'])
    
    def generate_leetcode_url(self, title: str) -> str:
        """生成LeetCode URL"""
        # 将标题转换为URL格式
        url_title = title.lower()
        url_title = re.sub(r'[^a-z0-9\s]', '', url_title)
        url_title = re.sub(r'\s+', '-', url_title)
        return f'https://leetcode.com/problems/{url_title}/'
    
    def generate_markdown(self, problem_info: Dict) -> str:
        """生成标准格式的markdown文档"""
        md_lines = []
        
        # 标题和徽章
        md_lines.append(f"# {problem_info['number']}. {problem_info['title']}")
        difficulty_badge = self.get_difficulty_badge(problem_info.get('difficulty', 'medium'))
        leetcode_url = self.generate_leetcode_url(problem_info['title'])
        md_lines.append(f'{difficulty_badge}[<Badge type="info" text="LeetCode" />]({leetcode_url})')
        md_lines.append('')
        
        # 题目描述
        description = self.format_variables_in_text(problem_info['description'])
        md_lines.append(description)
        md_lines.append('')
        md_lines.append(' ')
        md_lines.append('')
        
        # 示例
        for example in problem_info['examples']:
            md_lines.append(f"Example {example['number']}")
            
            if 'input' in example:
                input_text = self.format_variables_in_text(example['input'])
                md_lines.append(f"> Input: {input_text}")
            
            if 'output' in example:
                output_text = self.format_variables_in_text(example['output'])
                md_lines.append(f"> Output: {output_text}")
            
            if 'explanation' in example:
                explanation_text = self.format_variables_in_text(example['explanation'])
                md_lines.append(f"> Explanation: {explanation_text}")
            
            md_lines.append('')
        
        md_lines.append(' ')
        md_lines.append('')
        
        # 约束条件
        md_lines.append('Constraints')
        for constraint in problem_info['constraints']:
            md_lines.append(constraint)
        md_lines.append('')
        md_lines.append('')
        
        # 解决方案模板
        md_lines.append('## How to solve the problem')
        md_lines.append('')
        md_lines.append('- Brute Force')
        md_lines.append('')
        md_lines.append('```python')
        md_lines.append('class Solution:')
        md_lines.append('    def methodName(self, param: List[int]) -> int:')
        md_lines.append('        # TODO: Implement brute force solution')
        md_lines.append('        pass')
        md_lines.append('```')
        md_lines.append('- Optimized Solution')
        md_lines.append('')
        md_lines.append('```python')
        md_lines.append('class Solution:')
        md_lines.append('    def methodName(self, param: List[int]) -> int:')
        md_lines.append('        # TODO: Implement optimized solution')
        md_lines.append('        pass')
        md_lines.append('```')
        md_lines.append('## Complexity')
        md_lines.append('- **Brute Force**: Time complexity: O(?), Space complexity: O(?)')
        md_lines.append('- **Optimized**: Time complexity: O(?), Space complexity: O(?)')
        md_lines.append('  - TODO: Add complexity analysis')
        
        return '\n'.join(md_lines)

def main():
    """主函数 - 剪贴板版本"""
    print("🚀 LeetCode剪贴板格式化工具")
    print("=" * 40)
    
    try:
        import pyperclip
        
        # 从剪贴板读取内容
        print("📋 正在读取剪贴板内容...")
        raw_text = pyperclip.paste().strip()
        
        if not raw_text:
            print("❌ 剪贴板为空，请先复制LeetCode题目内容")
            return
        
        print(f"✅ 已读取 {len(raw_text)} 个字符")
        
        # 格式化内容
        print("🔄 正在格式化...")
        formatter = LeetCodeFormatter()
        problem_info = formatter.extract_problem_info(raw_text)
        markdown_content = formatter.generate_markdown(problem_info)
        
        # 保存到文件
        filename = f"{problem_info['number']}.md"
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(markdown_content)
        
        # 复制到剪贴板
        pyperclip.copy(markdown_content)
        
        print("✅ 格式化完成！")
        print(f"📁 已保存到: {filename}")
        print(f"📋 已复制到剪贴板")
        print(f"📝 题目: {problem_info['number']}. {problem_info['title']}")
        print(f"🏷️  难度: {problem_info['difficulty'].title()}")
        
    except ImportError:
        print("❌ 需要安装 pyperclip 库")
        print("请运行: pip3 install pyperclip")
    except Exception as e:
        print(f"❌ 错误: {str(e)}")

if __name__ == "__main__":
    main()
