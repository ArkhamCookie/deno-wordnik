#!/usr/bin/env -S deno run --allow-read --allow-env --allow-net

/** Resources
 * [MDN - HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
 * [iana - HTTP Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
 * [RTF - Additional HTTP Status Codes](https://www.rfc-editor.org/rfc/rfc6585.html)
 * [RTF - Extending HTTP](https://www.rfc-editor.org/rfc/rfc9110.html#name-extending-http)
 * [Wikipedia - Hyper Text Coffee Pot Control Protocol](https://wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)
*/

import { AssertionError } from 'assert'
import 'dotenv'

const base = 'https://api.wordnik.com/v4/'
const key = '?api_key=' + Deno.env.get('WORDNIK_KEY')

/** HTTP Status
 * Vaildate Connection Status
 * @param {string} [target] - change fetch target
 * @param {Object} [allowType] - choose which special reponses to allow
 * @param {boolean} allowType.webdav - allow WebDAV responses
 * @param {boolean} allowType.im - allow IM Used response
 * @param {boolean} allowType.deprecated - allow deprecated responses
 * @param {boolean|intiger} [unreconized] - allow unreconized (or custom) responses
*/

/* deno-lint-ignore prefer-const
let allowType = { // eslint-disable-line prefer-const
	webdav: false,
	im: false,
	deprecated: false
}
*/

Deno.test({
	name: 'Test: HTTP Status',
	async fn(target, allowType, unreconized) {
		// if (target === null) { const target = 'words.json/wordOfTheDay' }
		// target = 'words.json/wordOfTheDay'
		target = 'foo'
		const response = (await fetch(
			base + target + key
		))
		const status = response.status
		await response.body.cancel()

		//
		if (status === 200) {
			console.debug('Response: ' + status)
			return
		} else if (204 <= status && status <= 225) {
			console.debug('Response: ' + response.statusText)
			return
		}

		//
		if ((300 <= status && status <= 304) || status === 308) { // Redirection messages
			console.debug('Redirecting (' + status + ')... ')
		}

		//
		if ((400 <= status && status <= 417) || (421 <= status && status <= 426) || (428 <= status && status <= 429) || status === 451) { // Client error responses
			console.debug('Status:', status)
			throw new AssertionError('Client error')
		} else if ((500 <= status && status <= 508) || status === 511) { // Server error responses
			console.debug('Deprecated:', status)
			throw new AssertionError('Deprecated')
		}

		//
		if (status === 207 || status === 208) { // WebDAV Responses
			console.debug('WebDAV Response, Code:', status)
			if (allowType.webdav === true) {
				return
			}
			throw new AssertionError('WebDAV')
		} else if (status === 226) { // IM Used Reponse
			console.debug('IM Used, Code:', status)
			if (allowType.im === true) {
				return
			}
			throw new AssertionError('IM Used')
		} else if (status === 418) { // I'm a teapot Response
			console.debug('I\'m a teapot')
			if (allowType.teapot) {
				return
			}
			throw new AssertionError('I\'m a Teapot')
		}

		//
		if (!unreconized === undefined) {
			console.error('Unreconized Response Status:', status)
			throw new AssertionError('Connection failed!\n' + response.statusText)
		} else {
			console.error('Unreconized Response Status:', status)
			throw new AssertionError('Connection failed!\n' + response.statusText)
		}

		/* switch (true) {
		case (isNaN(status)):
			throw new AssertionError('Status: ' + response.status + 'is not a number!')
		case (status === 200): // Successful
			console.debug('Response: ' + status)
			break
		case (204 <= status <= 225): // Part successful
			console.debug('Response: ' + response.statusText)
			break

		// Standard Error HTTP Responses
		case (300 <= status <= 304 || status === 308): // Redirection messages
			console.debug('Redirecting (' + status + ')... ')
			// throw new AssertionError('Redirecting: ' + response.status)
		case (400 <= status <= 417 || 421 <= status <= 426 || 428 <= status <= 429 || status === 451): // Client error responses
			throw new AssertionError('Client error: ' + response.status)
		case (500 <= status <= 508 || status === 511): // Server error responses
			throw new AssertionError('Deprecated:' + response.status)

		case (status === 207 || status === 208): // WebDAV Responses
			console.debug('WebDAV Response, Code: ' + status)
			if (allowType.webdav === true) {
				console.debug()
				break
			}
		case (status === 226): // IM Used
			if (allowType.im === true) {
				console.debug()
				break
			}
		case (status === 418):
			if (allowType.teapot) {
				break
			}
			throw new AssertionError('Deprecated' + response.statusText)
		case (status === 305 || status === 306 || status === 418 || status === 510):
			if (allowType.deprecated === true) {
				console.error('Deprecated status code: ' + status)
				break
			}
			throw new AssertionError('Deprecated: ' + response.status)
		default: // Unreconized
			console.debug('Custom Response status?')
			if (unreconized === true) { // will allow you to specify in the future
				console.debug('Response Code: ' + status)
				break
			}
			console.error('Unreconized Response Status: ' + status)
			throw new AssertionError('Connection failed!\n' + response.statusText)
		} */
	}
})
