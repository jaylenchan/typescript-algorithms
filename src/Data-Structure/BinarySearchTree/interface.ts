export default interface BinarySearchTree<E> {
  getSize(): number;
  isEmpty(): boolean;
  add(e: E): void;
  contains(e: E): boolean;
  remove(e: E): void;
  preOrder(): void;
  inOrder(): void;
  postOrder(): void;
}
