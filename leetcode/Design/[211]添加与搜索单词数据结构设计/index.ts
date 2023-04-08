/*
 * @lc app=leetcode.cn id=211 lang=typescript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/** 根据ascii码返回相对a的偏移索引 */
function ascToIndex(ch: string): number {
  return ch.charCodeAt(0) - 'a'.charCodeAt(0)
}

class TrieNode {

  public pass: number
  public end: number
  public nexts: TrieNode[]

  constructor() {
    this.pass = 0
    this.end = 0
    this.nexts = []
  }

}

class WordDictionary {

  private _root: TrieNode

  constructor() {
    this._root = new TrieNode()
  }

  public addWord(word: string): void {
    let node = this._root
    node.pass++

    for (const char of word) {
      const index = ascToIndex(char)

      if (!node.nexts[index]) {
        node.nexts[index] = new TrieNode()
      }

      node.nexts[index].pass++
      node = node.nexts[index]
    }

    node.end++
  }

  public search(word: string): boolean {
    let node = this._root

    for (let i = 0; i < word.length; i++) {
      const char = word[i]

      if (char == '.') return this._fuzzySearch(word, i, node)

      const index = ascToIndex(char)

      if (!node.nexts[index]) {
        return false
      }

      node = node.nexts[index]
    }

    return node.end > 0
  }

  private _fuzzySearch(word: string, cur: number, node: TrieNode): boolean {
    if (cur == word.length) return node.end > 0

    // acdb -> ..ab
    // 如果当前字符不为.，跟正常的trie搜索一样
    while (word[cur] != '.') {
      const index = ascToIndex(word[cur])

      if (!node.nexts[index]) {
        return false
      }

      node = node.nexts[index]

      if (++cur == word.length) return node.end > 0
    }

    // a.b.c
    // 否则此时直接遍历所有当前node的next，跟通配符.进行匹配，任意一个字符都匹配，然后进入下一轮fuzzySearch接下来的字符
    for (let i = 0; i < node.nexts.length; i++) {
      if (node.nexts[i] && this._fuzzySearch(word, cur + 1, node.nexts[i]))
        return true
    }

    return false
  }

}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

export default WordDictionary

/**
 * #思路#
 * 1. 题目要求实现一个可以单词加入和模糊搜索的词典，首先进行模式匹配，可以立马想到Trie可以实现单词加入和精准搜索。
 * 2. 于是我们的基础骨架选择实现Trie，然后再在Trie的基础上做改动，将精准搜索功能改成模糊搜索功能。
 * 3. 单词加入：单词加入功能就是Trie原始功能，按照Trie的add去设计就行
 * 4. 模糊搜索：由于Trie原本实现的是精准搜索，题目改成了具有通配符的搜索方式，所以我们需要进行搜索功能的改动：
 *    - 我们依旧按照trie的精准搜索作为默认搜索方式，当匹配字符匹配到.的时候，我们就进入fuzzySearch模糊搜索剩下的字符
 *    - 由于我们的搜索方式是匹配到单词中的第一个.的时候旧进入模糊搜索状态，所以很可能我们在模糊搜索状态当中还是有具体的字符的
 *    - 情况1 - 模糊搜索中碰到具体的字符：搜索方式跟trie的搜索方式完全一样，我们判断node是否有到char的路，有的话node跳char节点，当前cur位置++。
 *             但我们在cur++之后，需要预判一下，是否已经来到了搜索单词的末尾，如果来到末尾，我们直接返回搜索末尾的node.end > 0的情况。因为如果
 *             不进行判断，加入node之后还有路，会一直走下去，这种情况出现在一些单词可能会以当前搜索的word（包含通配符匹配的word）为前缀，然后深搜
 *             的时候发现还有路，没有及时停止搜索，结果搜索到最后node错了，返回的node.end > 0 也是错误的。
 *    - 情况2 - 模糊搜索中碰到通配符：这个时候才是真的模糊搜索逻辑，我们只需要遍历当前来到的node的nexts数组，找到有到某节点的路，然后接着往下进行后边字符
 *             的fuzzySearch即可。这里在进行后边字符搜索的时候，需要提前判断node.nexts[i]是否存在。因为我们是用的对照26个小写字母的ascii相对a偏移的
 *             方式进行数组构建的，所以假如数组只有a和z的路，就是node.nexts[0]和node.nexts[25]有节点，中间全是空。因此我们做判断就是为了排除掉到空节点
 *             没路的情况。然后再加上继续判断后边字符的模糊搜索的情况，最终两者结合才是模糊搜索的正确结果。
 *             因为模糊搜索是回溯的实现，当然也有递归的base case，base case就是当我们往下搜的时候，发现cur已经是来到了跟word的大小一样大的时候，我们停止
 *             搜索，返回此时node.end > 0的情况。接着递归才会一层层往回走传递给上层最终结果。
 * 5. 在进行for遍历模糊搜索，我们不能直接return node.nexts[i] && this._fuzzySearch(word, cur + 1, node.nexts[i])，而是应该先判断node.nexts[i] && this._fuzzySearch(word, cur + 1, node.nexts[i])
 *    然后只要有一个搜索的分支存在正确答案，直接返回即可，我们并不需要等到所有分支搜索完成才返回是否能找到word。（本质上就是回溯那一套，多叉树的遍历）
 */
