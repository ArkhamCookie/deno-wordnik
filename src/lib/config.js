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

export function getVersion() {
	if (Deno.env.has('API_VERSION')) {
		const version = 'v' + Deno.env.get('API_VERSION') + '/'
		return version
	} else if (!Deno.env.has('API_VERSION')) {
		const version = 'v4/' // update when new api version comes out
		return version
	}
}

export function buildTarget(target) {
	const base = 'https://api.wordnik.com/'
	const version = getVersion()
	const key = getKey()

	if (!target) {
		target = '/words.json/wordOfTheDay'
	}

	const build = base + version + target + key
	return build
}
