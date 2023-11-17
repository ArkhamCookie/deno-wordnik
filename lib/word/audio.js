import { Wordnik } from '../mod.js'

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
