import { Wordnik } from '../mod.js'

/**
 * Get the Scrabble score for a word
 * @param {string} word
 * @returns {integer} score for the word
 *
 * @example
 * ```js
 * const response = await scrabbleScore('cookie')
 * console.log(response.value) // returns cookie's score (12)
 * ```
 */
export async function scrabbleScore(word) {
	if (!word) throw new Error('word is required')
	const wordnik = new Wordnik('word.json/' + word + '/scrabbleScore')
	const endpoint =
		wordnik.base + wordnik.version + wordnik.target +
		'&' + wordnik.key
	const response = await fetch(endpoint)

	if (response.status !== 200) {
		console.error('Error! Status:', response.statusText)
		return
	}

	return await response.json()
}
