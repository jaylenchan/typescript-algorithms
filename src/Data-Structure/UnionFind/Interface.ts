export default interface IUnionFind {
  getSize(): number;
  /** 查看元素p和元素q是否所属同一个集合 */
  isConnected(p: number, q: number): boolean;
  /** 合并元素p和元素q到一个集合中 */
  union(p: number, q: number): void;
}
