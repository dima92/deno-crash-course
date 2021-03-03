window.addEventListener('load', () => {
    console.log('load')
})

window.addEventListener('unload', () => {
    console.log('unload')
})

// @ts-ignore
const url = Deno.args[0]
console.log('Making request to url:', url)
const response = await fetch(url)
const data = await response.json()
// @ts-ignore
await Deno.writeFile('data.json', new TextEncoder().encode(JSON.stringify(data)))


// https://jsonplaceholder.typicode.com/todos/1
