import { buildTarget } from '../mod.js'

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
export function random() {
	console.debug('random')
}

/**
 * Word of the Day
 * @param {string} [date] - Fetches by date (in yyyy-MM-dd format)
 * @returns {json} response
 */
export async function wordOfTheDay(date) {
	let response

	if (date) {
		response = await fetch(buildTarget('/words.json/wordOfTheDay' + '?date=' + date + '&'))
	} else if (!date) {
		response = await fetch(buildTarget('/words.json/wordOfTheDay?'))
	}

	if (response.status !== 200) {
		console.error('Error! Status:', response.statusText)
		return
	}
	console.log(await response.json())
}
