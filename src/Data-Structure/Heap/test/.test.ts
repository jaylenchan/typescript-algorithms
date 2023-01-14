// import { assert } from 'chai';
import { assert } from 'chai';
import MaxHeap from '../MaxHeap-impl';

describe('MaxHeap', () => {
  it('arr[i] < arr[i-1] is true', () => {
    const n = 10000;

    const maxHeap = new MaxHeap<number>();

    for (let i = 0; i < n; i++) {
      maxHeap.add(Math.floor(Math.random() * n + 1));
    }

    const arr = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      arr[i] = maxHeap.extractMax();
    }

    for (let i = 1; i < n; i++) {
      assert.equal(arr[i - 1] >= arr[i], true);
    }
  });
});
