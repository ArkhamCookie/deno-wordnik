import 'dotenv'

/**
 * Module to setup your config
 * @module @worknik/conifg
 * @exports getKey - auth suffex + API key
 */

/**
 * Get API Key
 * @returns {string} key
*/
export function getKey() {
	if (Deno.env.has('WORDNIK_KEY')) {
		const key = '?api_key=' + Deno.env.get('WORDNIK_KEY')
		return key
	} else {
		console.error('No API key found!')
	}
}
