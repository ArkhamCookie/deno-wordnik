import { Wordnik } from '../mod.js'

/**
 * Top Example
 * @param {string} word - word to fetch examples for
 * @param {boolean} [useCanonical=false] - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 * @returns {JSON} response
 *
 * @example
 * ```js
 * const response = await topExample('cookie')
 *
 * console.log(response.text) // returns top response for 'cookie'
 * ```
 */

export async function topExample(word, useCanonical) {
	if (!word) { console.error('A word is required') }
	const wordnik = new Wordnik('word.json/' + word + '/topExample')
	let endpoint =
		wordnik.base + wordnik.version + wordnik.target

	if (useCanonical === true) {
		endpoint = endpoint + '&' + 'useCanonical=true' + '&'
	}

	endpoint = endpoint + '&' + wordnik.key

	const response = await fetch(endpoint)

	console.debug(endpoint)

	if (response.status !== 200) {
		console.error('Error! Status: ' + response.statusText)
		return
	}

	return await response.json()
}
