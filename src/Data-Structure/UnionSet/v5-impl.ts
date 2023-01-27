import IUnionSet from './Interface';
import UnionSetV4 from './v4-impl';

// Quick Union optimize  基于路径压缩的优化
export default class UnionSet extends UnionSetV4 implements IUnionSet<number> {
  /** 路径压缩优化 _find过程 */
  protected override _find(p: number): number {
    if (p < 0 || p > this.parent.length) {
      throw new Error('p is out of bound.');
    }

    while (p != this.parent[p]) {
      // 增加这个过程
      this.parent[p] = this.parent[this.parent[p]];
      p = this.parent[p];
    }

    return p;
  }
}
