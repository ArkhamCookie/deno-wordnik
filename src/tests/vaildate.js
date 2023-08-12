#!/usr/bin/env -S deno run --allow-read --allow-env --allow-net

import { AssertionError } from 'assert'

const base = 'https://api.wordnik.com/v4/'
const key = '?api_key=' + Deno.env.get('WORKNIK_KEY')

/** Vaildate Connection
 * @param {string} target - change fetch target
*/
Deno.test({
	name: 'Test: http status',
	async fn() {
		// if (target === null) { const target = 'words.json/wordOfTheDay' }
		const target = 'words.json/wordOfTheDay'
		const response = (await fetch(
			base + target + key
		))
		const status = response.status

		switch (status) {
		case 200:
			console.debug('Response: ' + response.statusText)
			return
		}
		throw new AssertionError('Connection failed!')
	}
})
