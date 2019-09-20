function node() {
  return {
    value,
    children: []
  }
}

const breadthFirst = (startNode, callBackFunc) => {
  if (!startNode) return 0;
  let queue = [startNode];
  while (queue.length) {
    const node = queue.shift();
    callBackFunc(node.value);
    queue.push(...node.children);
  }
}

const depthFirstPreOrder = (startNode, callBackFunc) => {
  callBackFunc(startNode.value);
  startNode.children.forEach((child) => {
    depthFirstPreOrder(child, callBackFunc);
  });
}

const depthFirstPostOrder =(startNode, callBackFunc) => {
  startNode.children.forEach((child) => {
    depthFirstPostOrder(child, callBackFunc);
  });
  callBackFunc(startNode.value);
}

// O(n) for both
