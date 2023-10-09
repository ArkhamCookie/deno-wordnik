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

/** Wordnik constructor for getting endpoints */

export class Wordnik {
	constructor(target) {
		/**
		 * Generate base vars for Wordnik's API
		 * @constructs
		 * @param {string} base
		 * @param {string} key
		 * @param {string} version
		 * @param {string} target - target endpoint
		 */
		this.base = 'https://api.wordnik.com/'
		this.key = getKey()
		this.version = getVersion()

		this.target = target + '?'
	}

	/**
	 * @param {string} target
	 * @param {*} options
	 * @returns {string} url to fetch
	 */
	words(target, options) {
		let targetEndpoint
		if (!target) throw new Error('no target given')

		if (options) {
			targetEndpoint =
				this.base + this.version + 'words.json/' +
				target + '?' + options +
				'&' + this.key
		} else {
			targetEndpoint =
				this.base + this.version + 'words.json/' +
				target + '?' + this.key
		}

		return targetEndpoint
	}
}
