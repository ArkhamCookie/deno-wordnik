import { Wordnik } from '../mod.js'

const wordnik = new Wordnik()

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
 * const response = await randomWord()
 * console.log(response.word) // prints a random word
 * ```
 */
export async function randomWord({
	hasDictionaryDef
}) {
	let endpoint =
		wordnik.base + wordnik.version + 'words.json/randomWord?'

	if (hasDictionaryDef) {
		if (!typeof hasDictionaryDef === Boolean) {
			endpoint = endpoint + 'hasDictionaryDef=' + hasDictionaryDef
		} else {
			throw new Error('"hasDictionaryDef" must be a boolean')
		}
	}

	endpoint = endpoint + '&' + wordnik.key

	const response = await fetch(endpoint)
	return await response.json()
}
