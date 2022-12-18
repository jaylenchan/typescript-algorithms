export default interface ILinkedList<E> {
  getSize(): number;
  isEmpty(): boolean;
  add(index: number, e: E): void;
  get(index: number): E;
  contains(e: E): boolean;
  set(index: number, e: E): void;
  remove(index: number): E;
  removeElement(e: E): void;
}
