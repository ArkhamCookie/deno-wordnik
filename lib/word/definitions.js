import { Wordnik } from '../mod.js'

export async function definitions(word, {
	limit,
	partOfSpeech,
	includeRelated,
	sourceDictionaries,
	useCanonical,
	includeTags
}) {
	if (!word) throw new Error('word is required')
	const wordnik = new Wordnik('word.json/' + word + '/definitions')
	let endpoint =
		wordnik.base + wordnik.version + wordnik.target + '&'

	if (limit) {
		if (!(typeof limit === 'number')) {
			throw new Error('"limit" must be a number')
		}
		endpoint = endpoint + 'limit=' + limit + '&'
	}

	if (partOfSpeech) {
		switch (partOfSpeech) {
		case (!(typeof partOfSpeech === 'string')):
			throw new Error('"partOfSpeech" must be a string')

		case 'noun':
		case 'adjective':
		case 'verb':
		case 'adverb':
		case 'interjection':
		case 'pronoun':
		case 'preposition':
		case 'abbreviation':
		case 'affix':
		case 'article':
		case 'auxiliary-verb':
		case 'conjunction':
		case 'definite-article':
		case 'family-name':
		case 'given-name':
		case 'idiom':
		case 'imperative':
		case 'noun-plural':
		case 'noun-posessive':
		case 'past-participle':
		case 'phrasal-prefix':
		case 'proper-noun':
		case 'proper-noun-plural':
		case 'proper-noun-posessive':
		case 'suffix':
		case 'verb-intransitive':
		case 'verb-transitive':
			endpoint = endpoint + 'partOfSpeech=' + partOfSpeech  + '&'

		default:
			throw new Error('"partOfSpeech" not recognized')
		}
	}

	if (includeRelated) {
		if (!(typeof includeRelated === 'boolean')) {
			throw new Error('"includeRelated" must be a boolean')
		}
		endpoint = endpoint + 'includeRelated=' + includeRelated + '&'
	}

	if (sourceDictionaries) {
		if (!(Array.isArray(sourceDictionaries))) {
			throw new Error('"sourceDictionaries" must be a string array (Array[string])')
		}

		if (!(typeof sourceDictionaries === 'string')) {
			throw new Error('"sourceDictionaries" must be a string array (Array[string])')
		}
		endpoint = endpoint + 'sourceDictionaries=' + sourceDictionaries + '&'
	}

	if (useCanonical) {
		if (!(typeof useCanonical === 'boolean')) {
			throw new Error('"useCanonical" must be a boolean')
		}
		endpoint = endpoint + 'useCanonical=' + useCanonical + '&'
	}

	if (includeTags) {
		if (!(typeof includeTags === 'boolean')) {
			throw new Error('"includeTags" must be a boolean')
		}
		endpoint = endpoint + 'includeTags=' + includeTags + '&'
	}

	endpoint = endpoint + '&' + wordnik.key
	const response = await fetch(endpoint)

	return await response.json()
}
