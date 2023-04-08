import type IComparator from './interface'


type Compare<V> = (a: V, b: V) => number

class Comparator<V> implements IComparator<V> {

  private _compare: Compare<V>

  constructor(compare?: Compare<V>) {
    this._compare = compare ?? this._defaultCompare
  }

  public equal(a: V, b: V): boolean {
    return this._compare(a, b) == 0
  }

  public lessThan(a: V, b: V): boolean {
    return this._compare(a, b) == -1
  }

  public greaterThan(a: V, b: V): boolean {
    return this._compare(a, b) == 1
  }

  public lessThanOrEqual(a: V, b: V): boolean {
    return this.lessThan(a, b) || this.equal(a, b)
  }

  public greaterThanOrEqual(a: V, b: V): boolean {
    return this.greaterThan(a, b) || this.equal(a, b)
  }

  private _defaultCompare(a: V, b: V): number {
    if (a == b) {
      return 0
    } else if (a < b) {
      return -1
    } else {
      return 1
    }
  }

}

export default Comparator
