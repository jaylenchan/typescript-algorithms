/*
 * @lc app=leetcode.cn id=547 lang=typescript
 *
 * [547] 省份数量
 */
export { findCircleNum };
// @lc code=start
class UnionFind {
  private parent: number[];
  private size: number[];
  public sets: number;

  constructor(size: number) {
    this.parent = [];
    this.size = [];
    this.sets = size;

    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }

  find(i: number): number {
    let hi = 0;
    const help = [];

    while (i != this.parent[i]) {
      help[hi++] = i;
      i = this.parent[i];
    }

    while (hi >= 0) {
      this.parent[help[--hi]] = i;
    }

    return i;
  }

  union(i: number, j: number): void {
    const rootI = this.find(i);
    const rootJ = this.find(j);

    if (rootI != rootJ) {
      const ISetSize = this.size[rootI];
      const JSetSize = this.size[rootJ];

      const big = ISetSize > JSetSize ? rootI : rootJ;
      const small = big == rootI ? rootJ : rootI;

      this.parent[small] = big;
      this.size[big] = ISetSize + JSetSize;
      this.sets--;
    }
  }
}

function findCircleNum(isConnected: number[][]): number {
  if (isConnected.length == 0) return 0;

  const size = isConnected.length;
  const uf = new UnionFind(size);

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (isConnected[i][j] == 1) {
        uf.union(i, j);
      }
    }
  }

  return uf.sets;
}

/**
 * 思路：并查集建立
 * 因为是相互连通，所以只要(0,1)是1，那么（1,0）一定是1。我们发现，实际上只有isConnected.length那么多个城市
 * 矩阵的形式只是说明这些城市连通的情况，真正的城市只有列数（或者行数）那么多。
 * 我们认为，如果1个城市只跟它自己是连通的，就属于1个省份（因为一开始建立并查集就是默认1个城市跟自己连通，所以我们遍历可以直接绕过对角线这个位置，所以是j=i+1，刚好把所有对角线位置绕过去了）
 * 剩下的情况只需要遍历矩阵右上方三角形就行了，如果相互连通，我们就使用并查集union一下
 * 最后返回并查集的集合个数就是省份数
 */
// @lc code=end
