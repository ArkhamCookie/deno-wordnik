import { randomWord } from '../../lib/mod.js'

const response = await randomWord()
console.log(response.word) // prints a random word
