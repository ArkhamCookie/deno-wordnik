import 'dotenv'

/**
 * Module to setup your config
 * @module @worknik/conifg
 * @exports key - auth suffex + API key
 */

module.exports = {
	/**
	 * Get API Key
	 * @returns {string} key
	*/

	key: function() {
		if (Deno.env.has('WORKNIK_KEY')) {
			const key = '?api_key=' + Deno.env.get('WORDNIK_KEY')
			return key
		} else {
			console.error('No API key found!')
		}
	}
}
