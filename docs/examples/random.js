import { randomWord } from '../../lib/mod.js'

console.log(await randomWord({}))

const response = await randomWord({})
console.log(response.word) // prints a random word
