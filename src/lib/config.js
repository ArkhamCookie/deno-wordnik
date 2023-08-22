import 'dotenv'

/** Utils to setup your config */

/**
 * Get API Key
 * @returns {string} key
*/
export function getKey() {
	if (Deno.env.has('WORDNIK_KEY')) {
		const key = 'api_key=' + Deno.env.get('WORDNIK_KEY')
		return key
	} else {
		console.error('No API key found!')
	}
}

/**
 * Get API Version
 * @returns {string} version
*/
export function getVersion() {
	if (Deno.env.has('API_VERSION')) {
		const version = 'v' + Deno.env.get('API_VERSION') + '/'
		return version
	} else if (!Deno.env.has('API_VERSION')) {
		const version = 'v4/' // update when new api version comes out
		return version
	}
}

/**
 * Build Target Util
 * @param {string} target - what api operation to use
 * @returns {string} build - url to fetch
 */
export function buildTarget(target) {
	const base = 'https://api.wordnik.com/'
	const version = getVersion()
	const key = getKey()

	if (!target) {
		target = '/words.json/wordOfTheDay?'
	}

	const build = base + version + target + key
	return build
}
