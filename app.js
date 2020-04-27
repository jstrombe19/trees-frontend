console.log('app.js smoke test')

fetch('http://localhost:3000/trees')
.then(response => response.json())
.then(trees => displayTreeData(trees))

function displayTreeData(trees) {
  trees.forEach(tree => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `<a href="show.html?id=${tree.id}" >${tree.name}</a>`
    document.body.append(h2)
  })
}