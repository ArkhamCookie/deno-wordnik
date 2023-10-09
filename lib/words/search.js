import { Wordnik } from '../mod.js'

const wordnik = new Wordnik()

// IMPORTANT: `words.json/search` endpoint is deprecated until v5

/**
 * Searches Words
 * @param {string} query
 * @param {*} _options
 * @returns {json} response
 *
 * @example
 * ```js
 * const response = await wordnikSearch('hackable')
 * console.log(response.message)
 * ```
 */
export async function wordnikSearch(query, _options) {
	console.warn('`words.json/reverseDictionary` endpoint is deprecated until v5')

	if (!query) throw new Error('query required')

	const response = await fetch(
		wordnik.words('reverseDictionary', query)
	)

	return response.json()
}
