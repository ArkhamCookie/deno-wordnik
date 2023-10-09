import { Wordnik } from '../mod.js'

/**
 * Random Word - Return a single random word/WordObject
 * @param {boolean} [hasDictionaryDef] - Only return words dictionary definitions
 * @param {string} [includePartOfSpeech] - CSV part-of-speech values in include
 * @param {string} [excludePartOfSpeech] - CSV part-of-speech values in exclude
 * @param {integer} [minCorpusCount] - Minimum corpus frequency for terms
 * @param {integer} [maxCorpusCount] - Maximum corpus frequency for terms
 * @param {integer} [minDictionaryCount] - Minimum dictionary count
 * @param {integer} [maxDictionaryCount] - Maximum dictionary count
 * @param {integer} [minLength] - Minimum word length
 * @param {integer} [maxLength] - Maximum word length
 *
 * @example
 * ```js
 * const response = await randomWord({})
 * console.log(response.word) // prints a random word
 * ```
 */
export async function randomWord({
	hasDictionaryDef,
	includePartOfSpeech,
	excludePartOfSpeech
}) {
	const wordnik = new Wordnik('words.json/randomWord?')
	let endpoint =
		wordnik.base + wordnik.version + wordnik.target

	if (hasDictionaryDef) {
		if (!(typeof hasDictionaryDef === 'boolean')) {
			throw new Error('"hasDictionaryDef" must be a boolean')
		}
		endpoint = endpoint + 'hasDictionaryDef=' + hasDictionaryDef
	}

	if (includePartOfSpeech) {
		endpoint = endpoint + 'includePartOfSpeech=' + includePartOfSpeech
	}

	if (excludePartOfSpeech) {
		endpoint = endpoint + 'excludePartOfSpeech=' + excludePartOfSpeech
	}

	endpoint = endpoint + '&' + wordnik.key

	const response = await fetch(endpoint)
	return await response.json()
}
