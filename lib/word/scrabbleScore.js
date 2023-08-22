import { Wordnik } from '../main.js'

const wordnik = new Wordnik()

/**
 * Get the Scrabble score for a word
 * @param {string} word
 * @returns {integer} - score for the word
 *
 * @example
 * ```js
 * console.log(await scrabbleScore('cookie')) // returns cookie's score (12)
 * ```
 */
export async function scrabbleScore(word) {
	let response
	if (word) {
		response = await fetch(wordnik.word(word, 'scrabbleScore'))
	} else {
		response = await fetch(wordnik.word('hackable', 'scrabbleScore'))
	}

	if (response.status !== 200) {
		console.error('Error! Status:', response.statusText)
		return
	}

	const json = JSON.stringify(await response.json())
	const data = JSON.parse(json)
	return data.value
}
