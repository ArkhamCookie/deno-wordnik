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
	excludePartOfSpeech,
	minCorpusCount,
	maxCorpusCount,
	minDictionaryCount,
	maxDictionaryCount,
	minLength,
	maxLength
}) {
	const wordnik = new Wordnik('words.json/randomWord')
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

	if (minCorpusCount) {
		if (!(typeof minCorpusCount === 'number')) {
			throw new Error('"minCorpusCount" must be a integer')
		}
		endpoint = endpoint + 'minCorpusCount=' + minCorpusCount
	}
	if (maxCorpusCount) {
		if (!(typeof maxCorpusCount === 'number')) {
			throw new Error('"maxCorpusCount" must be a integer')
		}
		endpoint = endpoint + 'maxCorpusCount=' + maxCorpusCount
	}

	if (minDictionaryCount) {
		if (!(typeof minDictionaryCount === 'number')) {
			throw new Error('"minDictionaryCount" must be a integer')
		}
		endpoint = endpoint + 'minDictionaryCount=' + minDictionaryCount
	}
	if (maxDictionaryCount) {
		if (!(typeof maxDictionaryCount === 'number')) {
			throw new Error('"maxDictionaryCount" must be a integer')
		}
		endpoint = endpoint + 'maxDictionaryCount=' + maxDictionaryCount
	}

	if (minLength) {
		if (!(typeof minLength === 'number')) {
			throw new Error('"minLength" must be a integer')
		}
		endpoint = endpoint + 'minLength=' + minLength
	}
	if (maxLength) {
		if (!(typeof maxLength === 'number')) {
			throw new Error('"maxLength" must be a integer')
		}
		endpoint = endpoint + 'maxLength=' + maxLength
	}

	endpoint = endpoint + '&' + wordnik.key

	const response = await fetch(endpoint)
	return await response.json()
}

/**
 * Random Words - Return an array of random WordObjects
 * @param {boolean} [hasDictionaryDef] - Only return words dictionary definitions
 * @param {string} [includePartOfSpeech] - CSV part-of-speech values in include
 * @param {string} [excludePartOfSpeech] - CSV part-of-speech values in exclude
 * @param {integer} [minCorpusCount] - Minimum corpus frequency for terms
 * @param {integer} [maxCorpusCount] - Maximum corpus frequency for terms
 * @param {integer} [minDictionaryCount] - Minimum dictionary count
 * @param {integer} [maxDictionaryCount] - Maximum dictionary count
 * @param {integer} [minLength] - Minimum word length
 * @param {integer} [maxLength] - Maximum word length
 * @param {string} [sortBy] - Attribute to sort by
 * @param {string} [sortOrder] - Sort direction
 * @param {integer} [limit] - Maximum number of results to return
 *
 * @example
 * ```js
 * const words = await randomWords({})
 * console.log(words[0].word) // prints first random word
 * ```
 */
export async function randomWords({
	hasDictionaryDef,
	includePartOfSpeech,
	excludePartOfSpeech,
	minCorpusCount,
	maxCorpusCount,
	minDictionaryCount,
	maxDictionaryCount,
	minLength,
	maxLength,
	sortBy,
	sortOrder,
	limit
}) {
	const wordnik = new Wordnik('words.json/randomWords')
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

	if (minCorpusCount) {
		if (!(typeof minCorpusCount === 'number')) {
			throw new Error('"minCorpusCount" must be a integer')
		}
		endpoint = endpoint + 'minCorpusCount=' + minCorpusCount
	}
	if (maxCorpusCount) {
		if (!(typeof maxCorpusCount === 'number')) {
			throw new Error('"maxCorpusCount" must be a integer')
		}
		endpoint = endpoint + 'maxCorpusCount=' + maxCorpusCount
	}

	if (minDictionaryCount) {
		if (!(typeof minDictionaryCount === 'number')) {
			throw new Error('"minDictionaryCount" must be a integer')
		}
		endpoint = endpoint + 'minDictionaryCount=' + minDictionaryCount
	}
	if (maxDictionaryCount) {
		if (!(typeof maxDictionaryCount === 'number')) {
			throw new Error('"maxDictionaryCount" must be a integer')
		}
		endpoint = endpoint + 'maxDictionaryCount=' + maxDictionaryCount
	}

	if (minLength) {
		if (!(typeof minLength === 'number')) {
			throw new Error('"minLength" must be a integer')
		}
		endpoint = endpoint + 'minLength=' + minLength
	}
	if (maxLength) {
		if (!(typeof maxLength === 'number')) {
			throw new Error('"maxLength" must be a integer')
		}
		endpoint = endpoint + 'maxLength=' + maxLength
	}

	if (sortBy) {
		if (sortBy !== 'alpha' || sortBy !== 'count') {
			endpoint = endpoint + 'sortBy=' + sortBy
		} else {
			throw new Error('"sortBy" must be either "alpha" or "count"')
		}
	}

	if (sortOrder) {
		if (sortOrder !== 'asc' || sortOrder !== 'desc') {
			endpoint = endpoint + 'sortOrder=' + sortOrder
		} else {
			throw new Error('"sortOrder" must be either "asc" or "desc"')
		}
	}

	if (limit) {
		if (!(typeof limit === 'number')) {
			throw new Error('"limit" must be a integer')
		}
		endpoint = endpoint + 'limit=' + limit
	}

	endpoint = endpoint + '&' + wordnik.key

	const response = await fetch(endpoint)
	return await response.json()
}
