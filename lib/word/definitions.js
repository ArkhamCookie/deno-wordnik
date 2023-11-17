import { Wordnik } from '../mod.js'

/**
 *
 * @param {string} word - Word to return definitions for
 * @param {number} [limit] - Maximum number of results to return
 * @param {string} [partOfSpeech] - CSV list of part-of-speech types
 * @param {boolean} [includeRelated=false] - Return related words with definitions
 * @param {Array} [sourceDictionaries=all] -
 Source dictionary to return definitions from.
 If 'all' is received, results are returned from all sources.
 If multiple values are received (e.g. 'century,wiktionary'),
 results are returned from the first specified dictionary that has definitions.
 * @param {boolean} [useCanonical=false] - If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
 * @param {boolean} [includeTags=false] - Return a closed set of XML tags in response
 * @returns {JSON} response
 */

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
		if (!(typeof partOfSpeech === 'string')) {
			throw new Error('"partOfSpeech" must be a string')
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
