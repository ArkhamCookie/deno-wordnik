import { Wordnik } from '../mod.js'

const wordnik = new Wordnik()

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
	let response

	if (date) {
		date = 'date=' + date
		response = await fetch(wordnik.words('wordOfTheDay', date))
	} else if (!date) {
		response = await fetch(wordnik.words('wordOfTheDay'))
	}

	if (response.status !== 200) {
		console.error('Error! Status:', response.statusText)
		return
	}
	return await response.json()
}
