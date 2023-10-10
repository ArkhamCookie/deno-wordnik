import { Wordnik } from '../mod.js'

/**
 * Examples
 * @param {string} word
 * @param {*} _parms
 * @returns {json} response
 */
export async function examples(word, _parms = {}) {
	if (!word) throw new Error('word is required')
	const wordnik = new Wordnik('word.json/' + word + '/examples')
	let endpoint =
		wordnik.base + wordnik.version + wordnik.target

	endpoint = endpoint + '&' + wordnik.key
	const response = await fetch(endpoint)

	return await response.json()
}
