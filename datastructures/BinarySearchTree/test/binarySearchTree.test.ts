import BinarySearchTree from '../impl';

describe('BinarySearchTree', () => {
  it('', () => {
    const bst = new BinarySearchTree<number>();
    const nums = [5, 3, 6, 8, 4, 2];

    for (const num of nums) {
      bst.add(num);
    }

    bst.preOrder();
  });
});
