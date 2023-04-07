export class Node<V> {
  static readonly None = new Node<any>(undefined)

  public value: V;
  public next: Node<V>

  constructor(value: V) {
    this.value = value
    this.next = Node.None
  }
}

export class LinkedList<V> {
  private _size: number = 0
  public first: Node<V> = Node.None

  public get size(): number {
    return this._size;
  }

  public isEmpty(): boolean {
    return this.first == Node.None
  }

  insert(index: number, value: V): void {
    if (index < 0 || index > this._size) {
      // 异常情况特判
      throw new Error("invalid index!")
    } else {
      const node = new Node(value)

      if (this.isEmpty()) {
        this.first = node
        this.first.next = Node.None
      } else {
        let cur = 0;
        let curNode = this.first

        while (cur != index) {
          curNode = curNode.next
        }

        const oldNext = curNode.next;

        curNode.next = node
        node.next = oldNext
      }

      this._size++
    }
  }

  get(index: number): V {
    if (index < 0 || index > this._size - 1) {
      throw new Error("invalid index!")
    } else {
      let cur = 0
      let curNode = this.first

      while (cur != index) {
        curNode = curNode.next
        cur++
      }

      return curNode.value
    }
  }

  contains(value: V): boolean {
    if (this.isEmpty()) {
      throw new Error("list is empty!")
    } else {
      let curNode = this.first

      while (curNode != Node.None) {
        if (curNode.value == value) {
          return true
        }

        curNode = curNode.next
      }

      return false;
    }
  }

  set(index: number, value: V): void {
    if (index < 0 || index > this.size - 1) {
      throw new Error("invalid index!")
    } else {
      let cur = 0
      let curNode = this.first

      while (cur != index) {
        curNode = curNode.next
        cur++
      }

      curNode.value = value
    }
  }

  remove(index: number) {
    if (index < 0 || index > this.size - 1) {
      throw new Error("invalid index!")
    } else {
      let cur = 0
      let curNode = this.first

      while (cur != index - 1) {
        curNode = curNode.next
        cur++
      }

      let deleteNode = curNode.next
      const newNextNode = deleteNode.next

      curNode.next = newNextNode
      deleteNode = Node.None
    }
  }

}
