import IUnionFind from './Interface';

// Quick Find
export default class UnionFind implements IUnionFind<number> {
  private setIds: number[]; // 数组的每个元素代表这些元素所属于的集合的id

  constructor(size: number) {
    this.setIds = new Array(size);

    for (let i = 0; i < this.setIds.length; i++) {
      this.setIds[i] = i;
    }
  }

  public getSize(): number {
    return this.setIds.length;
  }

  public isConnected(p: number, q: number): boolean {
    return this.find(p) == this.find(q);
  }

  public union(p: number, q: number): void {
    if (this.isConnected(p, q)) return;

    const pID = this.find(p);
    const qID = this.find(q);

    for (let i = 0; i < this.setIds.length; i++) {
      if (this.setIds[i] == pID) {
        this.setIds[i] = qID;
      }
    }
  }

  /** 查看元素p所对应的集合的编号 */
  public find(p: number): number {
    if (p < 0 || p > this.setIds.length) {
      throw new Error('p is out of bound.');
    }

    return this.setIds[p];
  }
}
