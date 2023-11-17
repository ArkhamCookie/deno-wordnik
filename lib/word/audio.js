import { Wordnik } from '../mod.js'

/**
 * Fetches audio metadata for a word
 * @param {string} word - word to get audio for
 * @param {boolean} useCanonical - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 * @param {number} limit - Maximum number of results to return
 * @returns {JSON} response
 */

export async function audio(word, {
	useCanonical,
	limit
}) {
	if (!word) throw new Error('word is required')
	const wordnik = new Wordnik('word.json/' + word + '/audio')
	let endpoint =
		wordnik.base + wordnik.version + wordnik.target

	if (useCanonical) {
		if (!(typeof useCanonical === 'boolean')) {
			throw new Error('"useCanonical" must be a boolean')
		}
		endpoint = endpoint + 'useCanonical=' + useCanonical
	}

	if (limit) {
		if (!(typeof limit === 'number')) {
			throw new Error('"limit" must be a number')
		}
		endpoint = endpoint + 'limit=' + limit
	}

	endpoint = endpoint + '&' + wordnik.key
	const response = await fetch(endpoint)

	return await response.json()
}
