class TreeNode<V> {

  public value: V
  public left: TreeNode<V>
  public right: TreeNode<V>

  constructor(value: V, left?: TreeNode<V>, right?: TreeNode<V>) {
    this.value = value
    this.left = left ?? TreeNode.None()
    this.right = right ?? TreeNode.None()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static None = (): TreeNode<any> => new TreeNode<any>(null)

}

export default TreeNode
