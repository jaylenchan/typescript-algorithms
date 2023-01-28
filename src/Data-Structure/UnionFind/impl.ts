import IUnionFind from './Interface';

// 终极版本：v2  + v6 impl 
export default class UnionFind implements IUnionFind<number> {
  // 连通分量个数
  private count: number;
  public parent: number[]; // parent[i]表示第i位置的元素指向了哪个位置的元素（parent数组实际上可以看做是一个map，它是一个元素到父亲的映射，数组索引就是key，数组的值就是value）

  constructor(size: number) {
    this.count = size;
    this.parent = new Array(size);

    for (let i = 0; i < this.parent.length; i++) {
      this.parent[i] = i;
    }
  }

  public getCount(): number {
    return this.count;
  }

  public isConnected(p: number, q: number): boolean {
    return this.find(p) == this.find(q);
  }

  // 有了v6的路径压缩终极优化，v3的通过size的优化就没啥必要了
  public union(p: number, q: number): void {
    if (this.isConnected(p, q)) return;

    const rootP = this.find(p); // p所在集合的代表元素rootP
    const rootQ = this.find(q); // q所在集合的代表元素rootQ

    this.parent[rootP] = rootQ; // 让p所在集合的代表元素rootP的父亲指向q所在集合的代表元素rootQ
    // 两个连通分量合并成一个连通分量
    this.count--;
  }

  /** 路径压缩终极优化 find过程: v6-impl */
  public find(p: number): number {
    if (p < 0 || p > this.parent.length) {
      throw new Error('p is not in sets.');
    }
    const path: number[] = []

    while (p != this.parent[p]) {
      // 增加这个过程
      path.push(p);
      p = this.parent[p];
    }

    while (path.length > 0) {
      this.parent[path.pop()!] = p;
    }

    return p;
  }
}