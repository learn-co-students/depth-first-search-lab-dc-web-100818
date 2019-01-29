function depthFirstSearch(rootNode, vertices, edges){
  let stack = [rootNode]
  let order = [rootNode]

  while(stack.length !== 0){
    let current = stack.pop()
    if(!current.discovered){
      current.discovered = true
    }
    let adjacents = findAdjacent(current.name, vertices, edges)
    stack = stack.concat(adjacents)
    order = order.concat(adjacents)
  }
  return order
}

function findAdjacent(node, vertices, edges){
  let adjEdges = edges.filter( edge => edge.includes(node) ).flat()
  let adjVertices = adjEdges.filter( edge => edge !== node )
  let adjacent = vertices.filter( vertex => {
    return adjVertices.includes(vertex.name)
  })
  return adjacent.filter( vertex => {
    return !vertex.discovered
  })
}
