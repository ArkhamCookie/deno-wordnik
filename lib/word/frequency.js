import { Wordnik } from '../mod.js'

export async function frequency(word, {
	useCanonical,
	startYear,
	endYear
}) {
	if (!word) throw new Error('word is required')
	const wordnik = new Wordnik('word.json/' + word + '/frequency')
	let endpoint =
		wordnik.base + wordnik.version + wordnik.target

	if (useCanonical) {
		if (!(typeof useCanonical === 'boolean')) {
			throw new Error('"useCanonical" must be a boolean')
		}
		endpoint = endpoint + '&' + 'useCanonical=' + useCanonical
	}

	if (startYear) {
		if (!(typeof startYear === 'number')) {
			throw new Error('"startYear" must be a number')
		}
		endpoint = endpoint + '&' + 'startYear=' + startYear
	}

	if (endYear) {
		if (!(typeof endYear === 'number')) {
			throw new Error('"startYear" must be a number')
		}
		endpoint = endpoint + '&' + 'endYear=' + endYear
	}

	endpoint = endpoint + '&' + wordnik.key
	console.log(endpoint)
	const response = await fetch(endpoint)

	return await response.json()
}
