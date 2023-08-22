import { Wordnik } from './../mod.js'

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
 */
export async function randomWord(options) {
	const response = await fetch(wordnik.words('randomWord', options))
	const json = JSON.stringify(await response.json())
	const data = JSON.parse(json)
	return data
}

/**
 * @example
 * ```js
 * import { randomWord } from 'https://deno.land/x/wordnik/mod.js'
 * const response = await randomWord()
 * console.log(response.word) // prints a random word
 * ```
 */
