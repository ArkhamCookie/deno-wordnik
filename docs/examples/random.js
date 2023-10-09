import { randomWord, randomWords } from '../../lib/mod.js'

/** Examples for randomWord() */

console.log(await randomWord({}))

const response = await randomWord({})
console.log(response.word) // prints a random word

console.log(await randomWord({
	hasDictionaryDef: true
}))

/** Examples for randomWords() */

let words

console.log(await randomWords({}))

words = await randomWords({})
console.log(words[0])

words = await randomWords({
	sortBy: 'alpha'
})
console.log(words)
