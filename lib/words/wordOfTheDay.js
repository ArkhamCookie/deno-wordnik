import { Wordnik } from '../mod.js'

/**
 * Word of the Day
 * @param {string} [date] - Fetches by date (in yyyy-MM-dd format)
 * @returns {json} response
 *
 * @example
 * ```js
 * const response = await wordOfTheDay()
 * console.log(response.word) // returns today's word of the day
 * ```
 */
export async function wordOfTheDay(date) {
	const wordnik = new Wordnik('words.json/wordOfTheDay')
	let endpoint =
		wordnik.base + wordnik.version + wordnik.target

	if (date) {
		endpoint = endpoint + 'date=' + date
	}

	endpoint = endpoint + '&' + wordnik.key
	const response = await fetch(endpoint)

	if (response.status !== 200) {
		console.error('Error! Status:', response.statusText)
		return
	}
	return await response.json()
}
