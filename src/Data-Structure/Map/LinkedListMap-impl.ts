import IMap from './interface';

class LNode<K, V> {
  public key: K | null;
  public value: V | null;
  public next: LNode<K, V> | null;

  constructor(
    key: K | null = null,
    value: V | null = null,
    next: LNode<K, V> | null = null
  ) {
    this.key = key;
    this.value = value;
    this.next = next;
  }

  toString(): string {
    return this.key!.toString() + ' : ' + this.value!.toString();
  }
}

class LinkedListMap<K, V> implements IMap<K, V> {
  private dummyNode: LNode<K, V>;
  private size: number;

  constructor() {
    this.dummyNode = new LNode<K, V>();
    this.size = 0;
  }

  private _getNode(key: K): LNode<K, V> | null {
    let cur = this.dummyNode.next;

    while (cur != null) {
      if (cur.key == key) {
        return cur;
      }

      cur = cur.next;
    }

    return null;
  }

  // 增
  add(key: K, value: V): void {
    const node = this._getNode(key);

    if (node == null) {
      this.dummyNode.next = new LNode(key, value, this.dummyNode.next);
      this.size += 1;
    } else {
      node.value = value;
    }
  }

  remove(key: K): V | null {
    let prev = this.dummyNode;

    while (prev.next != null) {
      if (prev.next.key == key) {
        break;
      }
      prev = prev.next;
    }

    if (prev.next != null) {
      const removeNode = prev.next;
      prev.next = removeNode.next;
      removeNode.next = null;

      return removeNode.value;
    }

    return null;
  }

  contains(key: K): boolean {
    return this._getNode(key) != null;
  }

  get(key: K): V | null {
    const node = this._getNode(key);

    return node == null ? null : node.value;
  }

  set(key: K, newValue: V): void {
    const node = this._getNode(key);

    if (node == null) {
      throw new Error(`${key} doesn't exist!`);
    } else {
      node.value = newValue;
    }
  }

  getSize(): number {
    return this.size;
  }

  isEmpty(): boolean {
    return this.size == 0;
  }
}

export default LinkedListMap;
