import { Wordnik } from '../main.js'

const wordnik = new Wordnik()

export async function scrabbleScore(word) {
	// const wordnik = new Wordnik
	let response
	if (word) {
		response = await fetch(wordnik.word(word, 'scrabbleScore'))
	} else {
		response = await fetch(wordnik.word('hackable', 'scrabbleScore'))
	}

	console.log(response)
}

scrabbleScore('cookie')
