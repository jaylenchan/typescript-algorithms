interface IComparator<V> {
  equal(a: V, b: V): boolean
  lessThan(a: V, b: V): boolean
  greaterThan(a: V, b: V): boolean
  lessThanOrEqual(a: V, b: V): boolean
  greaterThanOrEqual(a: V, b: V): boolean
}

export default IComparator
