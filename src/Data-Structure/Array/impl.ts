import MArray from './interface';
class DArray<E> implements MArray<E> {
  private data: E[];
  private size: number;

  constructor(capacity?: number) {
    this.data = new Array(capacity || 10).fill(new Object() as E);
    this.size = 0;
  }

  getSize(): number {
    return this.size;
  }

  getCapacity(): number {
    return this.data.length;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  // 增
  add(index: number, e: E): void {
    if (index < 0 || index > this.size) {
      throw new Error('Add failed. Require index >= 0 and index <= size. ');
    }

    if (this.size === this.data.length) {
      // throw new Error('AddLast failed. Array is full. ');
      this.resize(2 * this.data.length);
    }

    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = e;
    this.size += 1;
  }

  // 增
  addLast(e: E): void {
    this.add(this.size, e);
  }

  // 增
  addFirst(e: E): void {
    this.add(0, e);
  }

  // 查
  contains(e: E): boolean {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] == e) {
        return true;
      }
    }
    return false;
  }

  // 查
  find(e: E): number {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] == e) {
        return i;
      }
    }
    return -1;
  }

  // 查
  get(index: number): E {
    if (index < 0 || index >= this.size) {
      throw new Error('Get failed. Index is illegal.');
    }
    return this.data[index];
  }

  // 查
  getFirst(): E {
    return this.get(0);
  }

  // 查
  getLast(): E {
    return this.get(this.size - 1);
  }

  // 改
  set(index: number, e: E): void {
    if (index < 0 || index >= this.size) {
      throw new Error('Set failed. Index is illegal.');
    }
    this.data[index] = e;
  }

  // 删
  remove(index: number): E {
    if (index < 0 || index >= this.size) {
      throw new Error('Get failed. Index is illegal.');
    }
    const result = this.data[index];

    for (let i = index + 1; i < this.size; i++) {
      this.data[i - 1] = this.data[i];
    }
    this.size -= 1;

    // this.data.length  == 1 的时候，数组只有一个元素，用除法得到就是0
    // 所以修改容量这里如果直接resize(0)会出bug，解决方式就是加个判断，如果只有1个容量，不需要修改容量变小
    if (this.size == this.data.length / 4 && this.data.length / 2 != 0) {
      this.resize(this.data.length / 2);
    }

    return result;
  }

  // 删
  removeFirst(): E {
    return this.remove(0);
  }

  // 删
  removeLast(): E {
    return this.remove(this.size - 1);
  }

  // 删
  removeElement(e: E): void {
    const index = this.find(e);
    if (index != -1) {
      this.remove(index);
    }
  }

  // 修改容量
  private resize(newCapacity: number) {
    const newData = new Array(newCapacity).fill(new Object() as E);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }
}

export default DArray;
