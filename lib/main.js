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

export class Wordnik {
	constructor() {
		/**
		 * Generate base vars for Wordnik's API
		 * @constructs
		 * @param {string} base
		 * @param {string} key
		 * @param {string} version
		 */
		this.base = 'https://api.wordnik.com/'
		this.key = getKey()
		this.version = getVersion()
	}

	word(word, target, options) {
		if (!word) word = 'hackable'
		if (!target) target = 'scrabbleScore'
		if (options) {
			this.key = '&' + this.key
		} else {
			this.key = '?' + this.key
		}

		return this.base + this.version + 'word.json/' +
			word + '/' +
			target +
			this.key
	}

	words(target, options) {
		if (!target) target = 'wordOfTheDay'
		if (options) {
			this.key = '&' + this.key
		} else {
			this.key = '?' + this.key
		}

		return this.base + this.version + 'words.json/' +
			target +
			this.key
	}
}
