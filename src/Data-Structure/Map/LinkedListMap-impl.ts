import LinkedList from '../LinkedList/impl';
import IMap from './interface';

class LinkedListMap<K, V> implements IMap<K, V> {
  private list: LinkedList<K>;
  constructor() {
    this.list = new LinkedList<K>();
  }

  add(k: K, v: V): void {
    throw new Error('Method not implemented.');
  }
  remove(k: K): V {
    throw new Error('Method not implemented.');
  }
  contains(k: K): boolean {
    throw new Error('Method not implemented.');
  }
  get(k: K): V {
    throw new Error('Method not implemented.');
  }
  set(k: K, v: V): void {
    throw new Error('Method not implemented.');
  }
  getSize(): number {
    throw new Error('Method not implemented.');
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.');
  }
}

export default LinkedListMap;
