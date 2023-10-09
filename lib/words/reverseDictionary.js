import { Wordnik } from '../mod.js'

const wordnik = new Wordnik()

// IMPORTANT: `words.json/reverseDictionary` endpoint is deprecated until v5

/**
 * Reverse Dictionary Search
 * @param {string} query
 * @param {*} _options
 * @returns {json} response
 *
 * @example
 * ```js
 * const response = await reverseDictionary('hackable')
 * console.log(response.message)
 * ```
 */
export async function reverseDictionary(query, _options) {
	console.warn('`words.json/reverseDictionary` endpoint is deprecated until v5')

	if (!query) throw new Error('query required')

	const response = await fetch(
		wordnik.words('reverseDictionary', query)
	)

	return response.json()
}
