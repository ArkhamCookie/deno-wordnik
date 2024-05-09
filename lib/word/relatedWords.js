import { Wordnik } from '../mod.js'

export async function relatedWords(word, {
	useCanonical,
	relationshipType,
	limitPerRelationshipType
}) {
	if (!word) throw new Error('word is required')
	const wordnik = new Wordnik('word.json/' + word + '/relatedWords')
	let endpoint =
		wordnik.base + wordnik.version + wordnik.target

	if (useCanonical) {
		if (!(typeof useCanonical === 'boolean')) {
			throw new Error('"useCanonical" must be a boolean')
		}
		endpoint = endpoint + '&' + 'useCanonical=' + useCanonical
	}

	if (relationshipType) {
		if (!(typeof relationshipType === 'string')) {
			throw new Error('"relationshipType" must be a string')
		}
		endpoint = endpoint + '&' + 'relationshipType=' + relationshipType
	}

	if (limitPerRelationshipType) {
		if (!(typeof limitPerRelationshipType === 'number')) {
			throw new Error('"limitPerRelationshipType" must be a number')
		}
		endpoint = endpoint + '&' + 'limitPerRelationshipType=' + limitPerRelationshipType
	}

	endpoint = endpoint + '&' + wordnik.key
	const response = await fetch(endpoint)

	return await response.json()
}
