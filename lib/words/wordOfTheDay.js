import { buildTarget } from './../mod.js'

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
