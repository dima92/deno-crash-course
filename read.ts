// @ts-ignore
const file = await Deno.open('data.json')
// @ts-ignore
await Deno.copy(file, Deno.stdout)
file.close()
