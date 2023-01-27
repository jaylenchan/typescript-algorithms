import IDisjointSet from './Interface';
import DisjointSetV5 from './v5-impl';

// Quick Union optimize  基于路径压缩的优化
export default class DisjointSet
  extends DisjointSetV5
  implements IDisjointSet<number>
{
  /** 路径压缩优化 _find过程 */
  protected override _find(p: number): number {
    if (p < 0 || p > this.parent.length) {
      throw new Error('p is out of bound.');
    }

    if (p != this.parent[p]) {
      // 增加这个过程
      this.parent[p] = this._find(this.parent[p]);
      p = this.parent[p];
    }

    return this.parent[p];
  }
}
