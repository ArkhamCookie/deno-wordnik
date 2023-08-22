import { Wordnik } from '../main.js'

const wordnik = new Wordnik()

export async function scrabbleScore(word) {
	let response
	if (word) {
		response = await fetch(wordnik.word(word, 'scrabbleScore'))
	} else {
		response = await fetch(wordnik.word('hackable', 'scrabbleScore'))
	}

	const json = JSON.stringify(await response.json())
	const data = JSON.parse(json)
	return data.value
}
