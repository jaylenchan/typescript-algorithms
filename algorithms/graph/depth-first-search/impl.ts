import { GNode } from 'data-structure/graph/impl';

function depthFirstSearch(node: GNode): number[] {
  let ans: number[] = []
  if (node == null) return ans;


  const stack: GNode[] = [];
  const visited = new Set<GNode>();

  stack.push(node);
  visited.add(node);
  // 深度优先处理节点时机：当节点进栈后就处理节点
  ans.push(node.value)

  while (stack.length > 0) {
    const curNode = stack.pop()!;
    // 枚举当前弹出节点的直接邻居
    for (const nextNode of curNode.nexts) {
      if (!visited.has(nextNode)) {
        stack.push(curNode)
        stack.push(nextNode)
        visited.add(nextNode)
        // 深度优先处理节点时机：当节点进栈后就处理节点
        ans.push(curNode.value)
        console.log('cur path is :', ans.join('->'))
        break; // 每次只做一次入栈操作，还有多的这次先不做，之后再做
      }
    }
  }

  return ans
}

export default depthFirstSearch
