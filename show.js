// console.log('show page hit')
// console.log(window.location)

// jared = Teacher.new({})

const searchParams = new URLSearchParams(window.location.search)
console.log(searchParams)
const id = searchParams.get('id')
console.log(id)

fetch(`http://localhost:3000/trees/${id}`)
.then(response => response.json())
.then(tree => displayTree(tree))

function displayTree(tree) {
  console.log(tree)
  const h2 = document.createElement('h2')
  const h3 = document.createElement('h3')
  const height = document.createElement('h3')
  h2.innerText = 'Common Name: ' + tree.name
  h3.innerText = `Scientific Name: ${tree.scientific_name}`
  height.innerText = `Average Maximum Height: ${tree.height} feet`
  document.body.append(h2, h3, height)
}