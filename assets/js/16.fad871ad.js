(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{404:function(n,e,s){"use strict";s.r(e);var t=s(2),p=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。")]),n._v(" "),e("p"),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("示例:\n\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.min();   --\x3e 返回 -3.\nminStack.pop();\nminStack.top();      --\x3e 返回 0.\nminStack.min();   --\x3e 返回 -2.\n")])])]),e("p",[n._v("解题思路：\n普通栈的 push() 和 pop() 函数的复杂度为 O(1)O(1) ；而获取栈最小值 min() 函数需要遍历整个栈，复杂度为 O(N)O(N) 。")]),n._v(" "),e("p",[n._v("本题难点： 将 min() 函数复杂度降为 O(1)O(1) 。可借助辅助栈实现：")]),n._v(" "),e("p",[n._v("数据栈 A ： 栈 A 用于存储所有元素，保证入栈 push() 函数、出栈 pop() 函数、获取栈顶 top() 函数的正常逻辑。\n辅助栈 B ： 栈 B 中存储栈 A 中所有 非严格降序 元素的子序列，则栈 A 中的最小元素始终对应栈 B 的栈顶元素。此时， min() 函数只需返回栈 B 的栈顶元素即可。\n因此，只需设法维护好 栈 B 的元素，使其保持是栈 A 的非严格降序元素的子序列，即可实现 min() 函数的 O(1)O(1) 复杂度。")]),n._v(" "),e("p",[n._v("函数设计：\npush(x) 函数： 重点为保持栈 B 的元素是 非严格降序 的；")]),n._v(" "),e("p",[n._v("执行「元素 x 压入栈 A」 ；\n若「栈 B 为空」或「x ≤ 栈 B 的栈顶元素」，则执行「元素 x 压入栈 B」 ；\npop() 函数： 重点为保持栈 A , B 的 元素一致性 ；")]),n._v(" "),e("p",[n._v("执行「栈 A 元素出栈」，将出栈元素记为 y ；\n若 「y 等于栈 B 的栈顶元素」，则执行「栈 B 元素出栈」；\ntop() 函数： 直接返回栈 A 的栈顶元素，即返回 A.peek() ；")]),n._v(" "),e("p",[n._v("min() 函数： 直接返回栈 B 的栈顶元素，即返回 B.peek() ；")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("class MinStack:\n    def __init__(self):\n        self.A, self.B = [], []\n\n    def push(self, x: int) -> None:\n        self.A.append(x)\n        if not self.B or self.B[-1] >= x:\n            self.B.append(x)\n\n    def pop(self) -> None:\n        if self.A.pop() == self.B[-1]:\n            self.B.pop()\n\n    def top(self) -> int:\n        return self.A[-1]\n\n    def min(self) -> int:\n        return self.B[-1]\n")])])])])}),[],!1,null,null,null);e.default=p.exports}}]);