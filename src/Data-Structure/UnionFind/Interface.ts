export default interface IUnionFind<V> {
  getSize(): number;
  /** 查看元素p和元素q是否所属同一个集合 */
  inSameSet(p: V, q: V): boolean;
  /** 合并元素p和元素q到一个集合中 */
  union(p: V, q: V): void;
}
