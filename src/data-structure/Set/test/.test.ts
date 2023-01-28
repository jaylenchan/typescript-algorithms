import { assert } from 'chai';
import BinarySearchTreeSet from '../BinarySearchTreeSet-impl';
import LinkedListSet from '../LinkedListSet-impl';

describe('BinarySearchTreeSet', () => {
  it('diffrence num size is 5', () => {
    const set = new BinarySearchTreeSet<number>();

    const nums = [1, 1, 2, 3, 3, 4, 5];

    for (let num of nums) {
      set.add(num);
    }

    assert.equal(set.getSize(), 5);
  });
});

describe('LinkedListSet', () => {
  it('diffrence num size is 4', () => {
    const set = new LinkedListSet<number>();

    const nums = [1, 1, 2, 3, 3, 4];

    for (let num of nums) {
      set.add(num);
    }

    assert.equal(set.getSize(), 4);
  });
});
