function depthFirstSearch(rootNode, vertices, edges) {
  let stack = [rootNode]
  let order = []
  
  while (stack.length > 0) {
    // console.log('stack', stack)
    let currentNode = stack.pop()
    let adjacentNodes = adjacent(currentNode, vertices, edges)
    discovered(currentNode)
    console.log('adjacent', adjacentNodes)
    stack = stack.concat(adjacentNodes)
    order.push(currentNode)
  }
  return order
}

function adjacent(node, vertices, edges) {
  // console.log(node)
  return edges.filter(subArray => (
    subArray.includes(node.name)
  )).map(edge => (
    edge.find(element => element !== node.name)
  )).map(element => (
    vertices.find(vertex => (
      vertex.name === element
    ))
  )).filter(vertex => vertex.discovered === null)
}

function discovered(node) {
  node.discovered = true 
}
