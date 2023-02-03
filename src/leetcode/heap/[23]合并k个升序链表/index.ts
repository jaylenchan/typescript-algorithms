/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// function createList(arr: number[]): ListNode {
//   const head = new ListNode(arr[0]);
//   let tail = head;

//   for (let i = 1; i < arr.length; i++) {
//     const node = new ListNode(arr[i]);
//     tail.next = node;
//     tail = node;
//   }

//   return head;
// }

// function createNodeArr(arrs: number[][]): ListNode[] {
//   const ans = [];
//   for (const arr of arrs) {
//     ans.push(createList(arr));
//   }

//   return ans;
// }

class MinListHeap {
  private data: ListNode[];
  private size: number;

  constructor() {
    this.data = [];
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size == 0;
  }

  peek(): ListNode | null {
    const min = this.data[0];

    if (!min) return null;

    return min;
  }

  insert(item: ListNode): void {
    this.data[this.size++] = item;
    this.swim(this.size - 1);
  }

  delMin(): ListNode {
    const min = this.data[0];

    this.swap(0, this.size - 1);
    this.data.pop();
    this.size--;
    this.sink(0);

    return min;
  }

  private swim(index: number): void {
    while (this.data[this.parent(index)].val > this.data[index].val) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private sink(index: number): void {
    while (this.left(index) < this.size) {
      let minIndex = this.left(index);
      const right = this.right(index);

      if (right < this.size) {
        minIndex =
          this.data[minIndex].val < this.data[right].val ? minIndex : right;
      }

      if (this.data[minIndex].val > this.data[index].val) {
        break;
      }

      this.swap(index, minIndex);
      index = minIndex;
    }
  }

  private parent(index: number): number {
    if (index == 0) return 0;
    return Math.floor((index - 1) / 2);
  }

  private left(index: number): number {
    return 2 * index + 1;
  }

  private right(index: number): number {
    return 2 * index + 2;
  }

  private swap(i: number, j: number): void {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length == 0) return null;

  const heap = new MinListHeap();

  for (const node of lists) {
    if (node) {
      heap.insert(node);
    }
  }

  const dummy = new ListNode(-1);
  let tail = dummy;

  while (!heap.isEmpty()) {
    const min = heap.delMin();
    tail.next = min;
    tail = min;
    if (min.next) {
      heap.insert(min.next);
    }
  }

  return dummy.next;
}

/**
 * 思路
 * 1. 由于k个链表升序，我们可以想到建立小根堆，然后利用delMax，每次都把最小的链表的节点取出来
 * 2. 小根堆需要建立的节点就是链表的个数，我们相当于每次k个当前节点的比较
 * 3. 当小根堆不为空的时候，我们就delMax，拿出当前最小，然后组装起新链表
 * 4. 当节点加入新链表后，我们判断链表的下一个节点是否为空节点，如果不为空节点，我们就加入小根堆进行排序操作
 * 5. 重复以上的过程，直到小根堆为空，整个链表组装完毕，返回
 */
// @lc code=end
