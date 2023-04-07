# Typescript-Algorithms

基于 Typescript 实现常见算法、数据结构以及 leetcode 经典题目

## 算法

|                           算法                            | 相关结构 |
| :-------------------------------------------------------: | :------: |
|      [插入排序](algorithms/sort/insertion-sort)       |   数组   |
|      [选择排序](algorithms/sort/selection-sort)       |   数组   |
|        [归并排序](algorithms/sort/merge-sort)         |   数组   |
|        [快速排序](algorithms/sort/quick-sort)         |   数组   |
|      [二分搜索](algorithms/search/binary-search)      |   数组   |
| [广度优先遍历](algorithms/graph/breadth-first-search) |    图    |
|  [深度优先遍历](algorithms/graph/depth-first-search)  |    图    |
|     [拓扑排序](algorithms/graph/topological-sort)     |    图    |
|      [Manacher 算法](algorithms/string/manacher)      |  字符串  |

## 数据结构

|            [数组](structures/array)             |        [栈](structures/stack)         |    [队列](structures/queue)     |  [链表](structures/linked-list)   |
| :-----------------------------------------------------: | :-------------------------------------------: | :-------------------------------------: | :---------------------------------------: |
|   [二分搜索树](structures/binary-search-tree)   |        [集合](structures/set)         |     [映射](structures/map)      |       [堆](structures/heap)       |
|            [前缀树](structures/trie)            |        [图](structures/graph)         | [并查集](structures/union-find) | [线段树](structures/segment-tree) |
| [窗口最大值更新结构](structures/sliding-window) | [优先队列](structures/priority-queue) |                                         |                                           |

## Leetcode 经典题

说明：标识 🟢 为简单题，标识 🟠 为中等题，标识 🔴 为困难题

### 数据结构

- **数组**

  |                         题号                          |                           题名                            | 难度 |
  | :---------------------------------------------------: | :-------------------------------------------------------: | :--: |
  | [31](https://leetcode.cn/problems/next-permutation/)  | [下一个排列](leetcode/array/[31]下一个排列/index.ts)  |  🟠  |
  |   [48](https://leetcode.cn/problems/rotate-image/)    |   [旋转图像](leetcode/array/[48]旋转图像/index.ts)    |  🟠  |
  |   [54](https://leetcode.cn/problems/spiral-matrix/)   |   [螺旋矩阵](leetcode/array/[54]螺旋矩阵/index.ts)    |  🟠  |
  | [73](https://leetcode.cn/problems/set-matrix-zeroes/) |   [矩阵置零](leetcode/array/[73]矩阵置零/index.ts)    |  🟠  |
  |   [189](https://leetcode.cn/problems/rotate-array/)   |   [轮转数组](leetcode/array/[189]轮转数组/index.ts)   |  🟠  |
  |   [289](https://leetcode.cn/problems/game-of-life/)   |   [生命游戏](leetcode/array/[289]生命游戏/index.ts)   |  🟠  |
  |  [221](https://leetcode.cn/problems/maximal-square/)  | [最大正方形](leetcode/array/[221]最大正方形/index.ts) |  🟠  |
  |  [912](https://leetcode.cn/problems/sort-an-array/)   |   [排序数组](leetcode/array/[912]排序数组/index.ts)   |  🟠  |

- **链表**

  |                                   题号                                    |                                              题名                                               | 难度 |
  | :-----------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: | :--: |
  |        [21](https://leetcode.cn/problems/merge-two-sorted-lists/)         |           [合并两个有序链表](leetcode/linked-list/[21]合并两个有序链表/index.ts)            |  🟢  |
  |          [141](https://leetcode.cn/problems/linked-list-cycle/)           |                   [环形链表](leetcode/linked-list/[141]环形链表/index.ts)                   |  🟢  |
  |         [206](https://leetcode.cn/problems/reverse-linked-list/)          |                   [反转链表](leetcode/linked-list/[206]反转链表/index.ts)                   |  🟢  |
  |      [876](https://leetcode.cn/problems/middle-of-the-linked-list/)       |             [链表的中间结点](leetcode/linked-list/[876]链表的中间结点/index.ts)             |  🟢  |
  |  [83](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)   |   [删除排序链表中的重复元素](leetcode/linked-list/[83]删除排序链表中的重复元素/index.ts)    |  🟠  |
  |            [86](https://leetcode.cn/problems/partition-list/)             |                   [分隔链表](leetcode/linked-list/[86]分隔链表/index.ts)                    |  🟠  |
  |         [142](https://leetcode.cn/problems/linked-list-cycle-ii/)         |                [环形链表 II](leetcode/linked-list/[142]环形链表II/index.ts)                 |  🟠  |
  |              [148](https://leetcode.cn/problems/sort-list/)               |                   [排序链表](leetcode/linked-list/[148]排序链表/index.ts)                   |  🟠  |
  |     [237](https://leetcode.cn/problems/delete-node-in-a-linked-list/)     |           [删除链表中的节点](leetcode/linked-list/[237]删除链表中的节点/index.ts)           |  🟠  |
  |    [138](https://leetcode.cn/problems/copy-list-with-random-pointer/)     |       [复制带随机指针的链表](leetcode/linked-list/[138]复制带随机指针的链表/index.ts)       |  🟠  |
  |        [92](https://leetcode.cn/problems/reverse-linked-list-ii/)         |                 [反转链表 II](leetcode/linked-list/[92]反转链表II/index.ts)                 |  🟠  |
  |             [143](https://leetcode.cn/problems/reorder-list/)             |                   [重排链表](leetcode/linked-list/[143]重排链表/index.ts)                   |  🟠  |
  |          [24](https://leetcode.cn/problems/swap-nodes-in-pairs/)          |       [两两交换链表中的节点](leetcode/linked-list/[24]两两交换链表中的节点/index.ts)        |  🟠  |
  | [82](https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/) | [删除排序链表中的重复元素 II](leetcode/linked-list/[82]删除排序链表中的重复元素II/index.ts) |  🟠  |
  |         [328](https://leetcode.cn/problems/odd-even-linked-list/)         |                   [奇偶链表](leetcode/linked-list/[328]奇偶链表/index.ts)                   |  🟠  |
  |              [61](https://leetcode.cn/problems/rotate-list/)              |                   [旋转链表](leetcode/linked-list/[61]旋转链表/index.ts)                    |  🟠  |
  |       [25](https://leetcode.cn/problems/reverse-nodes-in-k-group/)        |            [K 个一组翻转链表](leetcode/linked-list/[25]K个一组翻转链表/index.ts)            |  🔴  |

- **栈**

  |                                    题号                                    |                                   题名                                    | 难度 |
  | :------------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :--: |
  |           [20](https://leetcode.cn/problems/valid-parentheses/)            |         [有效的括号](leetcode/stack/[20]有效的括号/index.ts)          |  🟢  |
  |        [234](https://leetcode.cn/problems/palindrome-linked-list/)         |           [回文链表](leetcode/stack/[234]回文链表/index.ts)           |  🟢  |
  |             [394](https://leetcode.cn/problems/decode-string/)             |         [字符串解码](leetcode/stack/[394]字符串解码/index.ts)         |  🟠  |
  | [581](https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/) | [最短无序连续子数组](leetcode/stack/[581]最短无序连续子数组/index.ts) |  🟠  |
  |          [739](https://leetcode.cn/problems/daily-temperatures/)           |           [每日温度](leetcode/stack/[739]每日温度/index.ts)           |  🟠  |
  |   [150](https://leetcode.cn/problems/evaluate-reverse-polish-notation/)    |   [逆波兰表达式求值](leetcode/stack/[150]逆波兰表达式求值/index.ts)   |  🟠  |
  |          [227](https://leetcode.cn/problems/basic-calculator-ii/)          |      [基本计算器 II](leetcode/stack/[227]基本计算器II/index.ts)       |  🟠  |

- **哈希表**

  |                                  题号                                   |                                            题名                                            | 难度 |
  | :---------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :--: |
  |          [13](https://leetcode.cn/problems/roman-to-integer/)           |           [罗马数字转整数](leetcode/hash-table/[13]罗马数字转整数/index.ts)            |  🟢  |
  |            [202](https://leetcode.cn/problems/happy-number/)            |                   [快乐数](leetcode/hash-table/[202]快乐数/index.ts)                   |  🟢  |
  |           [242](https://leetcode.cn/problems/valid-anagram/)            |         [有效的字母异位词](leetcode/hash-table/[242]有效的字母异位词/index.ts)         |  🟢  |
  |           [268](https://leetcode.cn/problems/missing-number/)           |               [丢失的数字](leetcode/hash-table/[268]丢失的数字/index.ts)               |  🟢  |
  |     [349](https://leetcode.cn/problems/intersection-of-two-arrays/)     |           [两个数组的交集](leetcode/hash-table/[349]两个数组的交集/index.ts)           |  🟢  |
  | [387](https://leetcode.cn/problems/first-unique-character-in-a-string/) | [字符串中的第一个唯一字符](leetcode/hash-table/[387]字符串中的第一个唯一字符/index.ts) |  🟢  |
  |      [804](https://leetcode.cn/problems/unique-morse-code-words/)       |         [唯一摩尔斯密码词](leetcode/hash-table/[804]唯一摩尔斯密码词/index.ts)         |  🟢  |
  |            [36](https://leetcode.cn/problems/valid-sudoku/)             |               [有效的数独](leetcode/hash-table/[36]有效的数独/index.ts)                |  🟠  |
  |           [49](https://leetcode.cn/problems/group-anagrams/)            |           [字母异位词分组](leetcode/hash-table/[49]字母异位词分组/index.ts)            |  🟠  |
  |      [347](https://leetcode.cn/problems/top-k-frequent-elements/)       |           [前 K 个高频元素](leetcode/hash-table/[347]前K个高频元素/index.ts)           |  🟠  |
  |              [454](https://leetcode.cn/problems/4sum-ii/)               |              [四数相加 II](leetcode/hash-table/[454]四数相加II/index.ts)               |  🟠  |

- **字符串**

  |                              题号                              |                                    题名                                    | 难度 |
  | :------------------------------------------------------------: | :------------------------------------------------------------------------: | :--: |
  |   [14](https://leetcode.cn/problems/longest-common-prefix/)    |       [最长公共前缀](leetcode/string/[14]最长公共前缀/index.ts)        |  🟢  |
  | [171](https://leetcode.cn/problems/excel-sheet-column-number/) |     [Excel 表列序号](leetcode/string/[171]Excel表列序号/index.ts)      |  🟢  |
  |     [191](https://leetcode.cn/problems/number-of-1-bits/)      |         [位 1 的个数](leetcode/string/[191]位1的个数/index.ts)         |  🟢  |
  |      [179](https://leetcode.cn/problems/largest-number/)       |             [最大数](leetcode/string/[179]最大数/index.ts)             |  🟠  |
  | [151](https://leetcode.cn/problems/reverse-words-in-a-string/) | [反转字符串中的单词](leetcode/string/[151]反转字符串中的单词/index.ts) |  🟠  |
  |   [8](https://leetcode.cn/problems/string-to-integer-atoi/)    | [字符串转换整数 Atoi](leetcode/string/[8]字符串转换整数Atoi/index.ts)  |  🟠  |
  |       [38](https://leetcode.cn/problems/count-and-say/)        |           [外观数列](leetcode/string/[38]外观数列/index.ts)            |  🟠  |

- **树**

  |                                              题号                                              |                                               题名                                               | 难度 |
  | :--------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: | :--: |
  |               [94](https://leetcode.cn/problems/binary-tree-inorder-traversal/)                |               [二叉树的中序遍历](leetcode/tree/[94]二叉树的中序遍历/index.ts)                |  🟢  |
  |                         [100](https://leetcode.cn/problems/same-tree/)                         |                       [相同的树](leetcode/tree/[100]相同的树/index.ts)                       |  🟢  |
  |                      [101](https://leetcode.cn/problems/symmetric-tree/)                       |                     [对称二叉树](leetcode/tree/[101]对称二叉树/index.ts)                     |  🟢  |
  |        [108](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)         |     [将有序数组转换为二叉搜索树](leetcode/tree/[108]将有序数组转换为二叉搜索树/index.ts)     |  🟢  |
  |                   [110](https://leetcode.cn/problems/balanced-binary-tree/)                    |                     [平衡二叉树](leetcode/tree/[110]平衡二叉树/index.ts)                     |  🟢  |
  |                         [112](https://leetcode.cn/problems/path-sum/)                          |                       [路径总和](leetcode/tree/[112]路径总和/index.ts)                       |  🟢  |
  |              [144](https://leetcode.cn/problems/binary-tree-preorder-traversal/)               |               [二叉树的前序遍历](leetcode/tree/[144]二叉树的前序遍历/index.ts)               |  🟢  |
  |              [145](https://leetcode.cn/problems/binary-tree-postorder-traversal/)              |               [二叉树的后序遍历](leetcode/tree/[145]二叉树的后序遍历/index.ts)               |  🟢  |
  |                    [226](https://leetcode.cn/problems/invert-binary-tree/)                     |                     [翻转二叉树](leetcode/tree/[226]翻转二叉树/index.ts)                     |  🟢  |
  |                  [543](https://leetcode.cn/problems/diameter-of-binary-tree/)                  |                   [二叉树的直径](leetcode/tree/[543]二叉树的直径/index.ts)                   |  🟢  |
  |               [662](https://leetcode.cn/problems/maximum-width-of-binary-tree/)                |                 [二叉树最大宽度](leetcode/tree/[662]二叉树最大宽度/index.ts)                 |  🟠  |
  |               [230](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)               |       [二叉搜索树中第 k 小的元素](leetcode/tree/[230]二叉搜索树中第k小的元素/index.ts)       |  🟠  |
  |                [98](https://leetcode.cn/problems/validate-binary-search-tree/)                 |                 [验证二叉搜索树](leetcode/tree/[98]验证二叉搜索树/index.ts)                  |  🟠  |
  |         [103](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/)          |         [二叉树的锯齿形层序遍历](leetcode/tree/[103]二叉树的锯齿形层序遍历/index.ts)         |  🟠  |
  | [105](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | [从前序与中序遍历序列构造二叉树](leetcode/tree/[105]从前序与中序遍历序列构造二叉树/index.ts) |  🟠  |
  |            [114](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)             |               [二叉树展开为链表](leetcode/tree/[114]二叉树展开为链表/index.ts)               |  🟠  |
  |                 [129](https://leetcode.cn/problems/sum-root-to-leaf-numbers/)                  |       [求根节点到叶节点数字之和](leetcode/tree/[129]求根节点到叶节点数字之和/index.ts)       |  🟠  |
  |                [199](https://leetcode.cn/problems/binary-tree-right-side-view/)                |                 [二叉树的右视图](leetcode/tree/[199]二叉树的右视图/index.ts)                 |  🟠  |
  |                 [222](https://leetcode.cn/problems/count-complete-tree-nodes/)                 |           [完全二叉树的节点个数](leetcode/tree/[222]完全二叉树的节点个数/index.ts)           |  🟠  |
  |             [429](https://leetcode.cn/problems/n-ary-tree-level-order-traversal/)              |               [N 叉树的层序遍历](leetcode/tree/[429]N叉树的层序遍历/index.ts)                |  🟠  |
  |                       [437](https://leetcode.cn/problems/path-sum-iii/)                        |                   [路径总和 III](leetcode/tree/[437]路径总和III/index.ts)                    |  🟠  |

- **堆**

  |                                     题号                                     |                                       题名                                       | 难度 |
  | :--------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | :--: |
  | [378](https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/) | [有序矩阵中第 K 小的元素](leetcode/heap/[378]有序矩阵中第K小的元素/index.ts) |  🟠  |
  |         [347](https://leetcode.cn/problems/top-k-frequent-elements/)         |         [前 K 个高频元素](leetcode/heap/[347]前K个高频元素/index.ts)         |  🟠  |
  |     [215](https://leetcode.cn/problems/kth-largest-element-in-an-array/)     | [数组中的第 k 个最大元素](leetcode/heap/[215]数组中的第k个最大元素/index.ts) |  🟠  |
  |              [912](https://leetcode.cn/problems/sort-an-array/)              |               [排序数组](leetcode/heap/[912]排序数组/index.ts)               |  🟠  |
  |           [23](https://leetcode.cn/problems/merge-k-sorted-lists/)           |       [合并 k 个升序链表](leetcode/heap/[23]合并k个升序链表/index.ts)        |  🔴  |

- **图**

  |                          题号                           |                               题名                                | 难度 |
  | :-----------------------------------------------------: | :---------------------------------------------------------------: | :--: |
  |  [207](https://leetcode.cn/problems/course-schedule/)   |         [课程表](leetcode/graph/[207]课程表/index.ts)         |  🟠  |
  | [210](https://leetcode.cn/problems/course-schedule-ii/) |      [课程表 II](leetcode/graph/[210]课程表II/index.ts)       |  🟠  |
  | [695](https://leetcode.cn/problems/max-area-of-island/) | [岛屿的最大面积](leetcode/graph/[695]岛屿的最大面积/index.ts) |  🟠  |

- **并查集**

  |                               题号                                |                                题名                                | 难度 |
  | :---------------------------------------------------------------: | :----------------------------------------------------------------: | :--: |
  | [128](https://leetcode.cn/problems/longest-consecutive-sequence/) | [最长连续序列](leetcode/union-find/[128]最长连续序列/index.ts) |  🟠  |
  |      [130](https://leetcode.cn/problems/surrounded-regions/)      | [被围绕的区域](leetcode/union-find/[130]被围绕的区域/index.ts) |  🟠  |
  |     [547](https://leetcode.cn/problems/number-of-provinces/)      |     [省份数量](leetcode/union-find/[547]省份数量/index.ts)     |  🟠  |
  |      [200](https://leetcode.cn/problems/number-of-islands/)       |     [岛屿数量](leetcode/union-find/[200]岛屿数量/index.ts)     |  🟠  |

### 算法

- **二分查找**

  |                                            题号                                             |                                                               题名                                                               | 难度 |
  | :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :--: |
  |                     [704](https://leetcode.cn/problems/binary-search/)                      |                                  [二分查找](leetcode/binary-search/[704]二分查找/index.ts)                                   |  🟢  |
  |                          [69](https://leetcode.cn/problems/sqrtx/)                          |                                 [X 的平方根](leetcode/binary-search/[69]X的平方根/index.ts)                                  |  🟢  |
  |             [33](https://leetcode.cn/problems/search-in-rotated-sorted-array/)              |                           [搜索旋转排序数组](leetcode/binary-search/[33]搜索旋转排序数组/index.ts)                           |  🟠  |
  | [34](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/) | [在排序数组中查找元素的第一个和最后一个位置](leetcode/binary-search/[34]在排序数组中查找元素的第一个和最后一个位置/index.ts) |  🟠  |
  |                   [162](https://leetcode.cn/problems/find-peak-element/)                    |                                  [寻找峰值](leetcode/binary-search/[162]寻找峰值/index.ts)                                   |  🟠  |
  |                 [240](https://leetcode.cn/problems/search-a-2d-matrix-ii/)                  |                            [搜索二维矩阵 II](leetcode/binary-search/[240]搜索二维矩阵II/index.ts)                            |  🟠  |

- **回溯**

  |                                   题号                                    |                                      题名                                       | 难度 |
  | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :--: |
  | [17](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/) | [电话号码的字母组合](leetcode/backtracking/[17]电话号码的字母组合/index.ts) |  🟠  |
  |            [39](https://leetcode.cn/problems/combination-sum/)            |           [组合总和](leetcode/backtracking/[39]组合总和/index.ts)           |  🟠  |
  |          [40](https://leetcode.cn/problems/combination-sum-ii/)           |        [组合总和 II](leetcode/backtracking/[40]组合总和II/index.ts)         |  🟠  |
  |             [46](https://leetcode.cn/problems/permutations/)              |             [全排列](leetcode/backtracking/[46]全排列/index.ts)             |  🟠  |
  |            [47](https://leetcode.cn/problems/permutations-ii/)            |          [全排列 II](leetcode/backtracking/[47]全排列II/index.ts)           |  🟠  |
  |             [77](https://leetcode.cn/problems/combinations/)              |               [组合](leetcode/backtracking/[77]组合/index.ts)               |  🟠  |
  |                [78](https://leetcode.cn/problems/subsets/)                |               [子集](leetcode/backtracking/[78]子集/index.ts)               |  🟠  |
  |              [90](https://leetcode.cn/problems/subsets-ii/)               |            [子集 II](leetcode/backtracking/[90]子集II/index.ts)             |  🟠  |
  |              [79](https://leetcode.cn/problems/word-search/)              |           [单词搜索](leetcode/backtracking/[79]单词搜索/index.ts)           |  🟠  |
  |       [131](https://leetcode.cn/problems/palindrome-partitioning/)        |        [分割回文串](leetcode/backtracking/[131]分割回文串/index.ts)         |  🟠  |
  |              [494](https://leetcode.cn/problems/target-sum/)              |            [目标和](leetcode/backtracking/[494]目标和/index.ts)             |  🟠  |
  |         [93](https://leetcode.cn/problems/restore-ip-addresses/)          |        [复原 Ip 地址](leetcode/backtracking/[93]复原Ip地址/index.ts)        |  🟠  |

- **动态规划**

  |                                      题号                                      |                                             题名                                             | 难度 |
  | :----------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :--: |
  |              [70](https://leetcode.cn/problems/climbing-stairs/)               |                [爬楼梯](leetcode/dynamic-programming/[70]爬楼梯/index.ts)                |  🟢  |
  |             [118](https://leetcode.cn/problems/pascals-triangle/)              |             [杨辉三角](leetcode/dynamic-programming/[118]杨辉三角/index.ts)              |  🟢  |
  |      [121](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)      |   [买卖股票的最佳时机](leetcode/dynamic-programming/[121]买卖股票的最佳时机/index.ts)    |  🟢  |
  |               [338](https://leetcode.cn/problems/counting-bits/)               |           [比特位计数](leetcode/dynamic-programming/[338]比特位计数/index.ts)            |  🟢  |
  | [674](https://leetcode.cn/problems/longest-continuous-increasing-subsequence/) |     [最长连续递增序列](leetcode/dynamic-programming/[674]最长连续递增序列/index.ts)      |  🟢  |
  |        [5](https://leetcode.cn/problems/longest-palindromic-substring/)        |          [最长回文子串](leetcode/dynamic-programming/[5]最长回文子串/index.ts)           |  🟠  |
  |              [53](https://leetcode.cn/problems/maximum-subarray/)              |          [最大子数组和](leetcode/dynamic-programming/[53]最大子数组和/index.ts)          |  🟠  |
  |                 [55](https://leetcode.cn/problems/jump-game/)                  |              [跳跃游戏](leetcode/dynamic-programming/[55]跳跃游戏/index.ts)              |  🟠  |
  |                [62](https://leetcode.cn/problems/unique-paths/)                |              [不同路径](leetcode/dynamic-programming/[62]不同路径/index.ts)              |  🟠  |
  |              [63](https://leetcode.cn/problems/unique-paths-ii/)               |           [不同路径 II](leetcode/dynamic-programming/[63]不同路径Ii/index.ts)            |  🟠  |
  |              [64](https://leetcode.cn/problems/minimum-path-sum/)              |            [最小路径和](leetcode/dynamic-programming/[64]最小路径和/index.ts)            |  🟠  |
  |                [91](https://leetcode.cn/problems/decode-ways/)                 |              [解码方法](leetcode/dynamic-programming/[91]解码方法/index.ts)              |  🟠  |
  |    [122](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)     | [买卖股票的最佳时机 II](leetcode/dynamic-programming/[122]买卖股票的最佳时机II/index.ts) |  🟠  |
  |                [139](https://leetcode.cn/problems/word-break/)                 |             [单词拆分](leetcode/dynamic-programming/[139]单词拆分/index.ts)              |  🟠  |
  |      [300](https://leetcode.cn/problems/longest-increasing-subsequence/)       |       [最长递增子序列](leetcode/dynamic-programming/[300]最长递增子序列/index.ts)        |  🟠  |
  |                [322](https://leetcode.cn/problems/coin-change/)                |             [零钱兑换](leetcode/dynamic-programming/[322]零钱兑换/index.ts)              |  🟠  |
  |        [416](https://leetcode.cn/problems/partition-equal-subset-sum/)         |         [分割等和子集](leetcode/dynamic-programming/[416]分割等和子集/index.ts)          |  🟠  |
  |          [647](https://leetcode.cn/problems/palindromic-substrings/)           |             [回文子串](leetcode/dynamic-programming/[647]回文子串/index.ts)              |  🟠  |
  |        [1143](https://leetcode.cn/problems/longest-common-subsequence/)        |       [最长公共子序列](leetcode/dynamic-programming/[1143]最长公共子序列/index.ts)       |  🟠  |
  |         [96](https://leetcode.cn/problems/unique-binary-search-trees/)         |      [不同的二叉搜索树](leetcode/dynamic-programming/[96]不同的二叉搜索树/index.ts)      |  🟠  |

- 贪心

  |                        题号                        |                        题名                        | 难度 |
  | :------------------------------------------------: | :------------------------------------------------: | :--: |
  | [252](https://leetcode.cn/problems/meeting-rooms/) | [会议室](leetcode/greedy/[252]会议室/index.ts) |  🟢  |

- **数学**

  |                              题号                              |                           题名                           | 难度 |
  | :------------------------------------------------------------: | :------------------------------------------------------: | :--: |
  |      [326](https://leetcode.cn/problems/power-of-three/)       |     [3 的幂](leetcode/math/[326]3的幂/index.ts)      |  🟢  |
  |         [412](https://leetcode.cn/problems/fizz-buzz/)         |   [FizzBuzz](leetcode/math/[412]FizzBuzz/index.ts)   |  🟢  |
  |           [50](https://leetcode.cn/problems/powx-n/)           |  [Pow(x,n)](<leetcode/math/[50]Pow(x,n)/index.ts>)   |  🟠  |
  | [172](https://leetcode.cn/problems/factorial-trailing-zeroes/) | [阶乘后的零](leetcode/math/[172]阶乘后的零/index.ts) |  🟠  |

### 技巧

- **前缀和**

  |                                 题号                                  |                                            题名                                            | 难度 |
  | :-------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :--: |
  |    [303](https://leetcode.cn/problems/range-sum-query-immutable/)     |     [区域和检索数组不可变](leetcode/prefix-sum/[303]区域和检索数组不可变/index.ts)     |  🟢  |
  | [1588](https://leetcode.cn/problems/sum-of-all-odd-length-subarrays/) |  [所有奇数长度子数组的和](leetcode/prefix-sum/[1588]所有奇数长度子数组的和/index.ts)   |  🟢  |
  |     [1480](https://leetcode.cn/problems/running-sum-of-1d-array/)     |        [一维数组的动态和](leetcode/prefix-sum/[1480]一维数组的动态和/index.ts)         |  🟢  |
  |   [304](https://leetcode.cn/problems/range-sum-query-2d-immutable/)   | [二维区域和检索矩阵不可变](leetcode/prefix-sum/[304]二维区域和检索矩阵不可变/index.ts) |  🟠  |
  |      [560](https://leetcode.cn/problems/subarray-sum-equals-k/)       |           [和为 K 的子数组](leetcode/prefix-sum/[560]和为K的子数组/index.ts)           |  🟠  |

- **双指针**

  |                              题号                               |                                      题名                                       | 难度 |
  | :-------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :--: |
  |     [88](https://leetcode.cn/problems/merge-sorted-array/)      |   [合并两个有序数组](leetcode/two-pointers/[88]合并两个有序数组/index.ts)   |  🟢  |
  |        [415](https://leetcode.cn/problems/add-strings/)         |        [字符串相加](leetcode/two-pointers/[415]字符串相加/index.ts)         |  🟢  |
  | [643](https://leetcode.cn/problems/maximum-average-subarray-i/) | [子数组最大平均数 I](leetcode/two-pointers/[643]子数组最大平均数I/index.ts) |  🟢  |
  |           [1](https://leetcode.cn/problems/two-sum/)            |           [两数之和](leetcode/two-pointers/[1]两数之和/index.ts)            |  🟢  |
  |         [75](https://leetcode.cn/problems/sort-colors/)         |           [颜色分类](leetcode/two-pointers/[75]颜色分类/index.ts)           |  🟠  |
  |  [165](https://leetcode.cn/problems/compare-version-numbers/)   |        [比较版本号](leetcode/two-pointers/[165]比较版本号/index.ts)         |  🟠  |
  | [287](https://leetcode.cn/problems/find-the-duplicate-number/)  |        [寻找重复数](leetcode/two-pointers/[287]寻找重复数/index.ts)         |  🟠  |
  |            [15](https://leetcode.cn/problems/3sum/)             |           [三数之和](leetcode/two-pointers/[15]三数之和/index.ts)           |  🟠  |
  |            [18](https://leetcode.cn/problems/4sum/)             |           [四数之和](leetcode/two-pointers/[18]四数之和/index.ts)           |  🟠  |
  |        [16](https://leetcode.cn/problems/3sum-closest/)         |   [最接近的三数之和](leetcode/two-pointers/[16]最接近的三数之和/index.ts)   |  🟠  |

- **滑动窗口**

  |                                       题号                                        |                                                题名                                                | 难度 |
  | :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: | :--: |
  | [3](https://leetcode.cn/problems/longest-substring-without-repeating-characters/) |        [无重复字符的最长子串](leetcode/sliding-window/[3]无重复字符的最长子串/index.ts)        |  🟠  |
  |          [209](https://leetcode.cn/problems/minimum-size-subarray-sum/)           |           [长度最小的子数组](leetcode/sliding-window/[209]长度最小的子数组/index.ts)           |  🟠  |
  |        [438](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)         | [找到字符串中所有字母异位词](leetcode/sliding-window/[438]找到字符串中所有字母异位词/index.ts) |  🟠  |
  |           [76](https://leetcode.cn/problems/minimum-window-substring/)            |               [最小覆盖子串](leetcode/sliding-window/[76]最小覆盖子串/index.ts)                |  🔴  |
  |            [239](https://leetcode.cn/problems/sliding-window-maximum/)            |             [滑动窗口最大值](leetcode/sliding-window/[239]滑动窗口最大值/index.ts)             |  🔴  |

- **位运算**

  |                           题号                           |                                          题名                                           | 难度 |
  | :------------------------------------------------------: | :-------------------------------------------------------------------------------------: | :--: |
  |    [190](https://leetcode.cn/problems/reverse-bits/)     |        [颠倒二进制位](leetcode/bit-manipulation/[190]颠倒二进制位/index.ts)         |  🟢  |
  | [29](https://leetcode.cn/problems/divide-two-integers/)  |             [两数相除](leetcode/bit-manipulation/[29]两数相除/index.ts)             |  🟠  |
  |  [260](https://leetcode.cn/problems/single-number-iii/)  | [只出现一次的数字 III](leetcode/bit-manipulation/[260]只出现一次的数字III/index.ts) |  🟠  |
  | [371](https://leetcode.cn/problems/sum-of-two-integers/) |          [两整数之和](leetcode/bit-manipulation/[371]两整数之和/index.ts)           |  🟠  |

### 结构设计

|                                      题号                                       |                                                题名                                                 | 难度 |
| :-----------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :--: |
|      [703](https://leetcode.cn/problems/kth-largest-element-in-a-stream/)       |           [数据流中的第 K 大元素](leetcode/design/[703]数据流中的第K大元素/index.ts)            |  🟢  |
|                 [146](https://leetcode.cn/problems/lru-cache/)                  |                        [LRU 缓存](leetcode/design/[146]LRU缓存/index.ts)                        |  🟠  |
|        [173](https://leetcode.cn/problems/binary-search-tree-iterator/)         |               [二叉搜索树迭代器](leetcode/design/[173]二叉搜索树迭代器/index.ts)                |  🟠  |
|         [208](https://leetcode.cn/problems/implement-trie-prefix-tree/)         |                [实现 Trie 前缀树](leetcode/design/[208]实现Trie前缀树/index.ts)                 |  🟠  |
| [211](https://leetcode.cn/problems/design-add-and-search-words-data-structure/) |     [添加与搜索单词数据结构设计](leetcode/design/[211]添加与搜索单词数据结构设计/index.ts)      |  🟠  |
|        [341](https://leetcode.cn/problems/flatten-nested-list-iterator/)        |           [扁平化嵌套列表迭代器](leetcode/design/[341]扁平化嵌套列表迭代器/index.ts)            |  🟠  |
|         [380](https://leetcode.cn/problems/insert-delete-getrandom-o1/)         | [O1 时间插入、删除和获取随机元素](leetcode/design/[380]O1时间插入、删除和获取随机元素/index.ts) |  🟠  |
|              [384](https://leetcode.cn/problems/shuffle-an-array/)              |                       [打乱数组](leetcode/design/[384]打乱数组/index.ts)                        |  🟠  |
|           [622](https://leetcode.cn/problems/design-circular-queue/)            |                   [设计循环队列](leetcode/design/[622]设计循环队列/index.ts)                    |  🟠  |
|             [707](https://leetcode.cn/problems/design-linked-list/)             |                       [设计链表](leetcode/design/[707]设计链表/index.ts)                        |  🟠  |
|   [297](https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/)    |       [二叉树的序列化与反序列化](leetcode/design/[297]二叉树的序列化与反序列化/index.ts)        |  🔴  |

## 如何测试算法正确性？

`yarn test:算法名`可以测试相关算法，比如`yarn test:quick-sort`就可以测试快排的正确性。这里我将测试的结果重定向到了`stdout.log`跟`stderr.log`中，具体测试结果可以在这两个文件中进行查看和排查问题。
