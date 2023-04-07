import LinkedListNode from './LinkedListNode';

export class LinkedList<V> {
  private head: LinkedListNode<V> = LinkedListNode.None
  private tail: LinkedListNode<V> = LinkedListNode.None
  private size: number = 0

  // 在链表头部插入新结点
  public prepend(value: V): void {
    const newNode = new LinkedListNode(value)

    newNode.next = this.head
    this.size++
  }

  // 在链表尾部插入新结点
  public append(value: V): void {
    const newNode = new LinkedListNode(value)
    /**
     * 情况1： tail是none的情况
     *
     * 由于只要head不为none，tail一定是不为none的。因为在只有1个结点的情况下，head跟tail指向的一定是同一个结点，这种情况下tail不可能为none。
     * 而当且仅当head为none，整条链表为空的情况下，tail一定也为none。
     * 总结：tail跟head在两种情况始终相同：链表结点个数为0，链表结点个数为1的情况。tail为none表示链表为空
     */

    if (this.tail == LinkedListNode.None) {
      // 处理链表为空的情况
      this.head = newNode
      this.tail = newNode
      this.tail.next = LinkedListNode.None
    } else {
      // 处理链表不为空的情况
      const oldTail = this.tail

      oldTail.next = newNode
      newNode.next = LinkedListNode.None
    }

    this.size++

  }

  // 普遍的插入新结点
  public insert(value: V, index: number): void {
    if (index < 0 || index > this.size) {
      index = index < 0 ? 0 : this.size
    }

    switch (index) {
      case (0): {
        this.prepend(value)
        break;
      }

      case (this.size - 1): {
        this.append(value)
        break;
      }

      default: {
        // 除了在插进0号位，和插进结尾位，剩下的插入位置都可以通过找到它之前的位置，基于index之前的位置去做标准进行插入
        let cur = 0
        let curNode = this.head

        while (cur != index - 1) {
          cur++
          curNode = curNode.next
        }

        const newNode = new LinkedListNode(value)

        curNode.next = newNode

        if (this.tail == curNode) {
          this.tail = newNode
        }

      }
    }
  }

  // 删除节点
  public delete(value: V): LinkedListNode<V> | null {
    let curNode = this.head;

    if (curNode.next == LinkedListNode.None) {
      const deleteNode = curNode

      curNode = LinkedListNode.None
      this.tail = this.head

      return deleteNode
    } else {
      while (curNode != LinkedListNode.None) {
        let nextNode = curNode.next

        if (nextNode.value == value) {
          const deleteNode = nextNode

          curNode.next = deleteNode.next
          nextNode = LinkedListNode.None

          return deleteNode
        }

        curNode = curNode.next
      }
    }

    return null
  }

  // 删除头结点
  public deleteHead(): LinkedListNode<V> | null {
    if (this.head == LinkedListNode.None) {
      return null
    } else {
      let oldHead = this.head;
      const deleteNode = oldHead

      this.head = oldHead.next
      oldHead = LinkedListNode.None

      return deleteNode
    }
  }

  // 删除尾结点
  public deleteTail(): LinkedListNode<V> | null {
    if (this.tail == LinkedListNode.None) {
      return null
    } else {
      let curNode = this.head;

      while (curNode.next != this.tail) {
        curNode = curNode.next
      }

      let oldTail = curNode.next;
      const deleteNode = oldTail

      curNode.next = LinkedListNode.None
      oldTail.next = LinkedListNode.None

      return deleteNode
    }
  }

  public fromArray(values: V[]): void {
    for (let i = 0; i < values.length; i++) {
      const value = values[i]

      this.append(value)
    }
  }

  public toArray(): LinkedListNode<V>[] {
    const nodes: LinkedListNode<V>[] = []

    let curNode = this.head;

    while (curNode != LinkedListNode.None) {
      nodes.push(curNode)

      curNode = curNode.next
    }

    return nodes
  }

  public reverse(): void {
    let prevNode = LinkedListNode.None
    let curNode = this.head
    let nextNode = LinkedListNode.None

    while (curNode) {
      nextNode = curNode.next
      curNode.next = prevNode
      prevNode = curNode
      curNode = nextNode
    }

    this.head = prevNode
    this.tail = this.head
  }

  public toString(): string {
    return JSON.stringify(this.toArray().map((node) => {
      return node.toString()
    }))
  }
}


export default LinkedList
