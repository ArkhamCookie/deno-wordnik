import { Wordnik } from '../mod.js'

/**
 * Examples
 * @param {string} word
 * @param {boolean} [includeDuplicates=false] - Show duplicate examples from different sources
 * @param {boolean} [useCanonical=false] - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 * @param {number} [skip] - Results to skip
 * @param {number} [limit] - Maximum number of results
 * @returns {json} response
 */
export async function examples(word, {
	includeDuplicates,
	useCanonical,
	skip,
	limit
}) {
	if (!word) throw new Error('word is required')
	const wordnik = new Wordnik('word.json/' + word + '/examples')
	let endpoint =
		wordnik.base + wordnik.version + wordnik.target

	if (includeDuplicates) {
		if (!(typeof includeDuplicates === 'boolean')) {
			throw new Error('"includeDuplicates" must be a boolean')
		}
		endpoint = endpoint + 'includeDuplicates=' + includeDuplicates
	}

	endpoint = endpoint + '&' + wordnik.key
	const response = await fetch(endpoint)

	return await response.json()
}
