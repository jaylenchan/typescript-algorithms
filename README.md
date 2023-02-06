# Typescript-Algorithms

基于Typescript实现常见算法、数据结构以及leetcode经典题目

## 算法

|                           算法                            | 相关结构 |
| :-------------------------------------------------------: | :------: |
|      [插入排序](src/algorithms/sort/insertion-sort)       |   数组   |
|      [选择排序](src/algorithms/sort/selection-sort)       |   数组   |
|        [归并排序](src/algorithms/sort/merge-sort)         |   数组   |
|        [快速排序](src/algorithms/sort/quick-sort)         |   数组   |
|      [二分搜索](src/algorithms/search/binary-search)      |   数组   |
| [广度优先遍历](src/algorithms/graph/breadth-first-search) |    图    |
|  [深度优先遍历](src/algorithms/graph/depth-first-search)  |    图    |
|     [拓扑排序](src/algorithms/graph/topological-sort)     |    图    |
|      [Manacher算法](src/algorithms/string/manacher)       |  字符串  |

## 数据结构

|            [数组](src/data-structure/array)             |        [栈](src/data-structure/stack)         |    [队列](src/data-structure/queue)     |  [链表](src/data-structure/linked-list)   |
| :-----------------------------------------------------: | :-------------------------------------------: | :-------------------------------------: | :---------------------------------------: |
|   [二分搜索树](src/data-structure/binary-search-tree)   |        [集合](src/data-structure/set)         |     [映射](src/data-structure/map)      |       [堆](src/data-structure/heap)       |
|            [前缀树](src/data-structure/trie)            |        [图](src/data-structure/graph)         | [并查集](src/data-structure/union-find) | [线段树](src/data-structure/segment-tree) |
| [窗口最大值更新结构](src/data-structure/sliding-window) | [优先队列](src/data-structure/priority-queue) |                                         |                                           |

## Leetcode经典题

说明：标识🟢为简单题，标识🟠为中等题，标识🔴为困难题

### 数据结构

- **数组**

   |                         题号                          |                       题名                       | 难度 |
   | :---------------------------------------------------: | :----------------------------------------------: | :--: |
   | [31](https://leetcode.cn/problems/next-permutation/)  | [下一个排列](src/leetcode/array/[31]下一个排列)  |  🟠   |
   |   [48](https://leetcode.cn/problems/rotate-image/)    |   [旋转图像](src/leetcode/array/[48]旋转图像)    |  🟠   |
   |   [54](https://leetcode.cn/problems/spiral-matrix/)   |   [螺旋矩阵](src/leetcode/array/[54]螺旋矩阵)    |  🟠   |
   | [73](https://leetcode.cn/problems/set-matrix-zeroes/) |   [矩阵置零](src/leetcode/array/[73]矩阵置零)    |  🟠   |
   |   [189](https://leetcode.cn/problems/rotate-array/)   |   [轮转数组](src/leetcode/array/[189]轮转数组)   |  🟠   |
   |   [289](https://leetcode.cn/problems/game-of-life/)   |   [生命游戏](src/leetcode/array/[289]生命游戏)   |  🟠   |
   |  [221](https://leetcode.cn/problems/maximal-square/)  | [最大正方形](src/leetcode/array/[221]最大正方形) |  🟠   |
   |  [912](https://leetcode.cn/problems/sort-an-array/)   |   [排序数组](src/leetcode/array/[912]排序数组)   |  🟠   |

- **链表**

   |                             题号                             |                             题名                             | 难度 |
   | :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
   |  [21](https://leetcode.cn/problems/merge-two-sorted-lists/)  | [合并两个有序链表](src/leetcode/linked-list/[21]合并两个有序链表) |  🟢   |
   | [83](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/) | [删除排序链表中的重复元素](src/leetcode/linked-list/[83]删除排序链表中的重复元素) |  🟠   |
   |      [86](https://leetcode.cn/problems/partition-list/)      |      [分隔链表](src/leetcode/linked-list/[86]分隔链表)       |  🟠   |
   |    [141](https://leetcode.cn/problems/linked-list-cycle/)    |      [环形链表](src/leetcode/linked-list/[141]环形链表)      |  🟢   |
   |  [142](https://leetcode.cn/problems/linked-list-cycle-ii/)   |    [环形链表II](src/leetcode/linked-list/[142]环形链表II)    |  🟠   |
   |        [148](https://leetcode.cn/problems/sort-list/)        |      [排序链表](src/leetcode/linked-list/[148]排序链表)      |  🟠   |
   |   [206](https://leetcode.cn/problems/reverse-linked-list/)   |      [反转链表](src/leetcode/linked-list/[206]反转链表)      |  🟢   |
   | [237](https://leetcode.cn/problems/delete-node-in-a-linked-list/) | [删除链表中的节点](src/leetcode/linked-list/[237]删除链表中的节点) |  🟠   |
   | [876](https://leetcode.cn/problems/middle-of-the-linked-list/) | [链表的中间结点](src/leetcode/linked-list/[876]链表的中间结点) |  🟢   |

- **栈**

   |                             题号                             |                             题名                             | 难度 |
   | :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
   |    [20](https://leetcode.cn/problems/valid-parentheses/)     |       [有效的括号](src/leetcode/stack/[20]有效的括号)        |  🟢   |
   | [234](https://leetcode.cn/problems/palindrome-linked-list/)  |         [回文链表](src/leetcode/stack/[234]回文链表)         |  🟢   |
   |      [394](https://leetcode.cn/problems/decode-string/)      |       [字符串解码](src/leetcode/stack/[394]字符串解码)       |  🟠   |
   | [581](https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/) | [最短无序连续子数组](src/leetcode/stack/[581]最短无序连续子数组) |  🟠   |
   |   [739](https://leetcode.cn/problems/daily-temperatures/)    |         [每日温度](src/leetcode/stack/[739]每日温度)         |  🟠   |

- **哈希表**

   |                             题号                             |                             题名                             | 难度 |
   | :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
   |          [1](https://leetcode.cn/problems/two-sum/)          |       [两数之和](src/leetcode/hash-table/[1]两数之和)        |  🟢   |
   |     [13](https://leetcode.cn/problems/roman-to-integer/)     | [罗马数字转整数](src/leetcode/hash-table/[13]罗马数字转整数) |  🟢   |
   |       [36](https://leetcode.cn/problems/valid-sudoku/)       |     [有效的数独](src/leetcode/hash-table/[36]有效的数独)     |  🟠   |
   |      [49](https://leetcode.cn/problems/group-anagrams/)      | [字母异位词分组](src/leetcode/hash-table/[49]字母异位词分组) |  🟠   |
   |      [202](https://leetcode.cn/problems/happy-number/)       |        [快乐数](src/leetcode/hash-table/[202]快乐数)         |  🟢   |
   |      [242](https://leetcode.cn/problems/valid-anagram/)      | [有效的字母异位词](src/leetcode/hash-table/[242]有效的字母异位词) |  🟢   |
   |     [268](https://leetcode.cn/problems/missing-number/)      |    [丢失的数字](src/leetcode/hash-table/[268]丢失的数字)     |  🟢   |
   | [347](https://leetcode.cn/problems/top-k-frequent-elements/) | [前K个高频元素](src/leetcode/hash-table/[347]前K个高频元素)  |  🟠   |
   | [349](https://leetcode.cn/problems/intersection-of-two-arrays/) | [两个数组的交集](src/leetcode/hash-table/[349]两个数组的交集) |  🟢   |
   | [387](https://leetcode.cn/problems/first-unique-character-in-a-string/) | [字符串中的第一个唯一字符](src/leetcode/hash-table/[387]字符串中的第一个唯一字符) |  🟢   |
   | [804](https://leetcode.cn/problems/unique-morse-code-words/) | [唯一摩尔斯密码词](src/leetcode/hash-table/[804]唯一摩尔斯密码词) |  🟢   |

- **字符串**

   |                             题号                             |                          题名                           | 难度 |
   | :----------------------------------------------------------: | :-----------------------------------------------------: | :--: |
   |  [14](https://leetcode.cn/problems/longest-common-prefix/)   |  [最长公共前缀](src/leetcode/string/[14]最长公共前缀)   |  🟢   |
   |      [38](https://leetcode.cn/problems/count-and-say/)       |      [外观数列](src/leetcode/string/[38]外观数列)       |  🟠   |
   | [171](https://leetcode.cn/problems/excel-sheet-column-number/) | [Excel表列序号](src/leetcode/string/[171]Excel表列序号) |  🟢   |
   |    [191](https://leetcode.cn/problems/number-of-1-bits/)     |     [位1的个数](src/leetcode/string/[191]位1的个数)     |  🟢   |

- **树**

   |                             题号                             |                             题名                             | 难度 |
   | :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
   | [94](https://leetcode.cn/problems/binary-tree-inorder-traversal/) |  [二叉树的中序遍历](src/leetcode/tree/[94]二叉树的中序遍历)  |  🟢   |
   | [98](https://leetcode.cn/problems/validate-binary-search-tree/) |    [验证二叉搜索树](src/leetcode/tree/[98]验证二叉搜索树)    |  🟠   |
   |        [100](https://leetcode.cn/problems/same-tree/)        |         [相同的树](src/leetcode/tree/[100]相同的树)          |  🟢   |
   |     [101](https://leetcode.cn/problems/symmetric-tree/)      |       [对称二叉树](src/leetcode/tree/[101]对称二叉树)        |  🟢   |
   | [103](https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/) | [二叉树的锯齿形层序遍历](src/leetcode/tree/[103]二叉树的锯齿形层序遍历) |  🟠   |
   | [105](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | [从前序与中序遍历序列构造二叉树](src/leetcode/tree/[105]从前序与中序遍历序列构造二叉树) |  🟠   |
   | [108](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/) | [将有序数组转换为二叉搜索树](src/leetcode/tree/[108]将有序数组转换为二叉搜索树) |  🟢   |
   |  [110](https://leetcode.cn/problems/balanced-binary-tree/)   |       [平衡二叉树](src/leetcode/tree/[110]平衡二叉树)        |  🟢   |
   |        [112](https://leetcode.cn/problems/path-sum/)         |         [路径总和](src/leetcode/tree/[112]路径总和)          |  🟢   |
   | [114](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/) | [二叉树展开为链表](src/leetcode/tree/[114]二叉树展开为链表)  |  🟠   |
   | [129](https://leetcode.cn/problems/sum-root-to-leaf-numbers/) | [求根节点到叶节点数字之和](src/leetcode/tree/[129]求根节点到叶节点数字之和) |  🟠   |
   | [144](https://leetcode.cn/problems/binary-tree-preorder-traversal/) | [二叉树的前序遍历](src/leetcode/tree/[144]二叉树的前序遍历)  |  🟢   |
   | [145](https://leetcode.cn/problems/binary-tree-postorder-traversal/) | [二叉树的后序遍历](src/leetcode/tree/[145]二叉树的后序遍历)  |  🟢   |
   | [199](https://leetcode.cn/problems/binary-tree-right-side-view/) |   [二叉树的右视图](src/leetcode/tree/[199]二叉树的右视图)    |  🟠   |
   | [222](https://leetcode.cn/problems/count-complete-tree-nodes/) | [完全二叉树的节点个数](src/leetcode/tree/[222]完全二叉树的节点个数) |  🟠   |
   |   [226](https://leetcode.cn/problems/invert-binary-tree/)    |       [翻转二叉树](src/leetcode/tree/[226]翻转二叉树)        |  🟢   |
   | [429](https://leetcode.cn/problems/n-ary-tree-level-order-traversal/) |  [N叉树的层序遍历](src/leetcode/tree/[429]N叉树的层序遍历)   |  🟠   |
   |      [437](https://leetcode.cn/problems/path-sum-iii/)       |      [路径总和III](src/leetcode/tree/[437]路径总和III)       |  🟠   |
   | [543](https://leetcode.cn/problems/diameter-of-binary-tree/) |     [二叉树的直径](src/leetcode/tree/[543]二叉树的直径)      |  🟢   |
   | [662](https://leetcode.cn/problems/maximum-width-of-binary-tree/) |   [二叉树最大宽度](src/leetcode/tree/[662]二叉树最大宽度)    |  🟠   |

- **堆**

   |                             题号                             |                             题名                             | 难度 |
   | :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
   | [378](https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/) | [有序矩阵中第K小的元素](src/leetcode/heap/[378]有序矩阵中第K小的元素) |  🟠   |
   |   [23](https://leetcode.cn/problems/merge-k-sorted-lists/)   |   [合并k个升序链表](src/leetcode/heap/[23]合并k个升序链表)   |  🔴   |
   | [347](https://leetcode.cn/problems/top-k-frequent-elements/) |    [前K个高频元素](src/leetcode/heap/[347]前K个高频元素)     |  🟠   |
   | [215](https://leetcode.cn/problems/kth-largest-element-in-an-array/) | [数组中的第k个最大元素](src/leetcode/heap/[215]数组中的第k个最大元素) |  🟠   |

- **图**

   |                          题号                           |                           题名                           | 难度 |
   | :-----------------------------------------------------: | :------------------------------------------------------: | :--: |
   |  [207](https://leetcode.cn/problems/course-schedule/)   |         [课程表](src/leetcode/graph/[207]课程表)         |  🟠   |
   | [210](https://leetcode.cn/problems/course-schedule-ii/) |       [课程表II](src/leetcode/graph/[210]课程表II)       |  🟠   |
   | [695](https://leetcode.cn/problems/max-area-of-island/) | [岛屿的最大面积](src/leetcode/graph/[695]岛屿的最大面积) |  🟠   |

- **并查集**

   |                             题号                             |                           题名                            | 难度 |
   | :----------------------------------------------------------: | :-------------------------------------------------------: | :--: |
   | [128](https://leetcode.cn/problems/longest-consecutive-sequence/) | [最长连续序列](src/leetcode/union-find/[128]最长连续序列) |  🟠   |
   |   [130](https://leetcode.cn/problems/surrounded-regions/)    | [被围绕的区域](src/leetcode/union-find/[130]被围绕的区域) |  🟠   |
   |   [547](https://leetcode.cn/problems/number-of-provinces/)   |     [省份数量](src/leetcode/union-find/[547]省份数量)     |  🟠   |
   |    [200](https://leetcode.cn/problems/number-of-islands/)    |     [岛屿数量](src/leetcode/union-find/[200]岛屿数量)     |  🟠   |

### 算法

- **二分查找**

    |                             题号                             |                             题名                             | 难度 |
    | :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
    | [33](https://leetcode.cn/problems/search-in-rotated-sorted-array/) | [搜索旋转排序数组](src/leetcode/binary-search/[33]搜索旋转排序数组) |  🟠   |
    | [34](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/) | [在排序数组中查找元素的第一个和最后一个位置](src/leetcode/binary-search/[34]在排序数组中查找元素的第一个和最后一个位置) |  🟠   |
    |          [69](https://leetcode.cn/problems/sqrtx/)           |    [X的平方根](src/leetcode/binary-search/[69]X的平方根)     |  🟢   |
    |    [162](https://leetcode.cn/problems/find-peak-element/)    |     [寻找峰值](src/leetcode/binary-search/[162]寻找峰值)     |  🟠   |
    |      [704](https://leetcode.cn/problems/binary-search/)      |     [二分查找](src/leetcode/binary-search/[704]二分查找)     |  🟢   |
    |  [240](https://leetcode.cn/problems/search-a-2d-matrix-ii/)  | [搜索二维矩阵II](src/leetcode/binary-search/[240]搜索二维矩阵II) |  🟠   |

- **回溯**

    |                             题号                             |                             题名                             | 难度 |
    | :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
    | [17](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/) | [电话号码的字母组合](src/leetcode/backtracking/[17]电话号码的字母组合) |  🟠   |
    |     [39](https://leetcode.cn/problems/combination-sum/)      |      [组合总和](src/leetcode/backtracking/[39]组合总和)      |  🟠   |
    |       [46](https://leetcode.cn/problems/permutations/)       |        [全排列](src/leetcode/backtracking/[46]全排列)        |  🟠   |
    |       [77](https://leetcode.cn/problems/combinations/)       |          [组合](src/leetcode/backtracking/[77]组合)          |  🟠   |
    |         [78](https://leetcode.cn/problems/subsets/)          |          [子集](src/leetcode/backtracking/[78]子集)          |  🟠   |
    |       [79](https://leetcode.cn/problems/word-search/)        |      [单词搜索](src/leetcode/backtracking/[79]单词搜索)      |  🟠   |
    | [131](https://leetcode.cn/problems/palindrome-partitioning/) |   [分割回文串](src/leetcode/backtracking/[131]分割回文串)    |  🟠   |
    |       [494](https://leetcode.cn/problems/target-sum/)        |       [目标和](src/leetcode/backtracking/[494]目标和)        |  🟠   |
    |   [93](https://leetcode.cn/problems/restore-ip-addresses/)   |    [复原Ip地址](src/leetcode/backtracking/[93]复原Ip地址)    |  🟠   |

- **动态规划**

    |                             题号                             |                             题名                             | 难度 |
    | :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
    | [5](https://leetcode.cn/problems/longest-palindromic-substring/) | [最长回文子串](src/leetcode/dynamic-programming/[5]最长回文子串) |  🟠   |
    |     [53](https://leetcode.cn/problems/maximum-subarray/)     | [最大子数组和](src/leetcode/dynamic-programming/[53]最大子数组和) |  🟠   |
    |        [55](https://leetcode.cn/problems/jump-game/)         |  [跳跃游戏](src/leetcode/dynamic-programming/[55]跳跃游戏)   |  🟠   |
    |       [62](https://leetcode.cn/problems/unique-paths/)       |  [不同路径](src/leetcode/dynamic-programming/[62]不同路径)   |  🟠   |
    |     [63](https://leetcode.cn/problems/unique-paths-ii/)      | [不同路径II](src/leetcode/dynamic-programming/[63]不同路径Ii) |  🟠   |
    |     [64](https://leetcode.cn/problems/minimum-path-sum/)     | [最小路径和](src/leetcode/dynamic-programming/[64]最小路径和) |  🟠   |
    |     [70](https://leetcode.cn/problems/climbing-stairs/)      |    [爬楼梯](src/leetcode/dynamic-programming/[70]爬楼梯)     |  🟢   |
    |       [91](https://leetcode.cn/problems/decode-ways/)        |  [解码方法](src/leetcode/dynamic-programming/[91]解码方法)   |  🟠   |
    |    [118](https://leetcode.cn/problems/pascals-triangle/)     |  [杨辉三角](src/leetcode/dynamic-programming/[118]杨辉三角)  |  🟢   |
    | [121](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/) | [买卖股票的最佳时机](src/leetcode/dynamic-programming/[121]买卖股票的最佳时机) |  🟢   |
    | [122](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/) | [买卖股票的最佳时机II](src/leetcode/dynamic-programming/[122]买卖股票的最佳时机II) |  🟠   |
    |       [139](https://leetcode.cn/problems/word-break/)        |  [单词拆分](src/leetcode/dynamic-programming/[139]单词拆分)  |  🟠   |
    | [300](https://leetcode.cn/problems/longest-increasing-subsequence/) | [最长递增子序列](src/leetcode/dynamic-programming/[300]最长递增子序列) |  🟠   |
    |       [322](https://leetcode.cn/problems/coin-change/)       |  [零钱兑换](src/leetcode/dynamic-programming/[322]零钱兑换)  |  🟠   |
    |      [338](https://leetcode.cn/problems/counting-bits/)      | [比特位计数](src/leetcode/dynamic-programming/[338]比特位计数) |  🟢   |
    | [416](https://leetcode.cn/problems/partition-equal-subset-sum/) | [分割等和子集](src/leetcode/dynamic-programming/[416]分割等和子集) |  🟠   |
    | [647](https://leetcode.cn/problems/palindromic-substrings/)  |  [回文子串](src/leetcode/dynamic-programming/[647]回文子串)  |  🟠   |
    | [674](https://leetcode.cn/problems/longest-continuous-increasing-subsequence/) | [最长连续递增序列](src/leetcode/dynamic-programming/[674]最长连续递增序列) |  🟢   |
    | [1143](https://leetcode.cn/problems/longest-common-subsequence/) | [最长公共子序列](src/leetcode/dynamic-programming/[1143]最长公共子序列) |  🟠   |
    | [96](https://leetcode.cn/problems/unique-binary-search-trees/) | [不同的二叉搜索树](src/leetcode/dynamic-programming/[96]不同的二叉搜索树) |  🟠   |

- **数学**

    |                             题号                             |                      题名                       | 难度 |
    | :----------------------------------------------------------: | :---------------------------------------------: | :--: |
    |          [50](https://leetcode.cn/problems/powx-n/)          |   [Pow(x,n)](src/leetcode/math/[50]Pow(x,n))    |  🟠   |
    | [172](https://leetcode.cn/problems/factorial-trailing-zeroes/) | [阶乘后的零](src/leetcode/math/[172]阶乘后的零) |  🟠   |
    |     [326](https://leetcode.cn/problems/power-of-three/)      |      [3的幂](src/leetcode/math/[326]3的幂)      |  🟢   |
    |        [412](https://leetcode.cn/problems/fizz-buzz/)        |   [FizzBuzz](src/leetcode/math/[412]FizzBuzz)   |  🟢   |

### 技巧

- **前缀和**

   |                             题号                             |                             题名                             | 难度 |
   | :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
   | [303](https://leetcode.cn/problems/range-sum-query-immutable/) | [区域和检索数组不可变](src/leetcode/prefix-sum/[303]区域和检索数组不可变) |  🟢   |
   | [304](https://leetcode.cn/problems/range-sum-query-2d-immutable/) | [二维区域和检索矩阵不可变](src/leetcode/prefix-sum/[304]二维区域和检索矩阵不可变) |  🟠   |
   |  [560](https://leetcode.cn/problems/subarray-sum-equals-k/)  | [和为K的子数组](src/leetcode/prefix-sum/[560]和为K的子数组)  |  🟠   |
   | [1588](https://leetcode.cn/problems/sum-of-all-odd-length-subarrays/) | [所有奇数长度子数组的和](src/leetcode/prefix-sum/[1588]所有奇数长度子数组的和) |  🟢   |

- **双指针**

   |                             题号                             |                             题名                             | 难度 |
   | :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
   |           [15](https://leetcode.cn/problems/3sum/)           |      [三数之和](src/leetcode/two-pointers/[15]三数之和)      |  🟠   |
   |       [75](https://leetcode.cn/problems/sort-colors/)        |      [颜色分类](src/leetcode/two-pointers/[75]颜色分类)      |  🟠   |
   |    [88](https://leetcode.cn/problems/merge-sorted-array/)    | [合并两个有序数组](src/leetcode/two-pointers/[88]合并两个有序数组) |  🟢   |
   | [165](https://leetcode.cn/problems/compare-version-numbers/) |   [比较版本号](src/leetcode/two-pointers/[165]比较版本号)    |  🟠   |
   | [287](https://leetcode.cn/problems/find-the-duplicate-number/) |   [寻找重复数](src/leetcode/two-pointers/[287]寻找重复数)    |  🟠   |
   |       [415](https://leetcode.cn/problems/add-strings/)       |   [字符串相加](src/leetcode/two-pointers/[415]字符串相加)    |  🟢   |
   | [643](https://leetcode.cn/problems/maximum-average-subarray-i/) | [子数组最大平均数I](src/leetcode/two-pointers/[643]子数组最大平均数I) |  🟢   |

- **滑动窗口**

   |                             题号                             |                             题名                             | 难度 |
   | :----------------------------------------------------------: | :----------------------------------------------------------: | :--: |
   | [3](https://leetcode.cn/problems/longest-substring-without-repeating-characters/) | [无重复字符的最长子串](src/leetcode/sliding-window/[3]无重复字符的最长子串) |  🟠   |
   | [76](https://leetcode.cn/problems/minimum-window-substring/) | [最小覆盖子串](src/leetcode/sliding-window/[76]最小覆盖子串) |  🔴   |
   | [209](https://leetcode.cn/problems/minimum-size-subarray-sum/) | [长度最小的子数组](src/leetcode/sliding-window/[209]长度最小的子数组) |  🟠   |
   | [239](https://leetcode.cn/problems/sliding-window-maximum/)  | [滑动窗口最大值](src/leetcode/sliding-window/[239]滑动窗口最大值) |  🔴   |
   | [438](https://leetcode.cn/problems/find-all-anagrams-in-a-string/) | [找到字符串中所有字母异位词](src/leetcode/sliding-window/[438]找到字符串中所有字母异位词) |  🟠   |

- **位运算**

   |                           题号                           |                             题名                             | 难度 |
   | :------------------------------------------------------: | :----------------------------------------------------------: | :--: |
   | [29](https://leetcode.cn/problems/divide-two-integers/)  |    [两数相除](src/leetcode/bit-manipulation/[29]两数相除)    |  🟠   |
   |    [190](https://leetcode.cn/problems/reverse-bits/)     | [颠倒二进制位](src/leetcode/bit-manipulation/[190]颠倒二进制位) |  🟢   |
   |  [260](https://leetcode.cn/problems/single-number-iii/)  | [只出现一次的数字III](src/leetcode/bit-manipulation/[260]只出现一次的数字III) |  🟠   |
   | [371](https://leetcode.cn/problems/sum-of-two-integers/) | [两整数之和](src/leetcode/bit-manipulation/[371]两整数之和)  |  🟠   |

### 结构设计

|                             题号                             |                           题名                            | 难度 |
| :----------------------------------------------------------: | :-------------------------------------------------------: | :--: |
| [208](https://leetcode.cn/problems/implement-trie-prefix-tree/) | [实现Trie前缀树](src/leetcode/design/[208]实现Trie前缀树) |  🟠   |
|        [146](https://leetcode.cn/problems/lru-cache/)        |        [LRU缓存](src/leetcode/design/[146]LRU缓存)        |  🟠   |

## 如何测试算法正确性？

`yarn test:算法名`可以测试相关算法，比如`yarn test:quick-sort`就可以测试快排的正确性。这里我将测试的结果重定向到了`stdout.log`跟`stderr.log`中，具体测试结果可以在这两个文件中进行查看和排查问题。
