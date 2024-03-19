import { Wordnik } from '../mod'

/**
 * Etymologies
 * @param {string} word
 * @param {json} options
 * @param {boolean} [useCanonical=false]
 * @returns {json} response
 */
export async function etymologies(word, {
	useCanonical
}) {
	if (!word) throw new Error('word is required')
	const wordnik = new Wordnik('word.json/' + word + '/etymologies')
	let endpoint =
		wordnik.base + wordnik.version + wordnik.target

	if (useCanonical) {
		if (!(typeof useCanonical === 'boolean')) {
			throw new Error('"useCanonical" must be a boolean')
		}
		endpoint = endpoint + '&' + 'useCanonical=' + useCanonical
	}

	endpoint = endpoint + '&' + wordnik.key
	const response = await fetch(endpoint)

	return await response.json()
}
