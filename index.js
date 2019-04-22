// let edges = [
//     ['14th&6th', '23rd&6th'],
//     ['23rd&6th', '34th&6th'],
//     ['34th&6th', '28th&Bwy'],
//     ['28th&Bwy', '23rd&Bwy'],
//     ['23rd&Bwy', '14th&Lex'],
//     ['14th&Lex', '23rd&Lex']
// ]
//
// let vertices = [
//   {name: '34th&6th', discovered: null},
//   {name: '23rd&6th', discovered: null},
//   {name: '14th&6th', discovered: null},
//   {name: '28th&Bwy', discovered: null},
//     {name: '23rd&Bwy', discovered: null},
//   {name: '14th&Lex', discovered: null},
//     {name: '23rd&Lex', discovered: null}
// ]
//
// let rootNode = vertices[0]

function depthFirstSearch(rootNode, vertices, edges){
  let stack = []
  stack.push(rootNode)
  let visited = [rootNode]

  while (stack.length !== 0){
    let v = stack.pop()
    if (!v.discovered){
      v.discovered = true

      //helper method
      findAdjacent(v.name, vertices, edges).forEach(node => {
        visited.push(node)
        stack.push(node)
      })
    }
  }
  return visited;
}

function findAdjacent(nodeName, vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(nodeName)
  }).map(function(edge){
    return edge.filter(function(node){
      return (node != nodeName)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(node){
		return !node.discovered
	})
}

function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName
  })
}

// function findAdjacent(nodeName, vertices, edges){
//   return edges.filter(edge => edge.includes(nodeName)).reduce((acc, val) => acc.concat(val), []).filter(vertex => vertex !== nodeName)
// }
// // findAdjacent = ['23rd&6th', '28th&Bwy']
//
// function findVertices(nodeName, vertices, edges){
//   let adjacents = findAdjacent(nodeName, vertices, edges)
//   return vertices.filter(vertex => {
//     adjacents.includes(vertex.name && vertex.discovered === null)
//   })
// }
// findVertices = [{name: '23rd&6th', discovered: null}, {name: '28th&Bwy', discovered: null}]

// depthFirstSearch(rootNode, vertices, edges);
