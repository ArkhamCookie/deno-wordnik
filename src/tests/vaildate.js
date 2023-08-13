#!/usr/bin/env -S deno run --allow-read --allow-env --allow-net

/** Resources
 * [HTTP response status codes - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
 * [HTTP Status Code Registry - iana](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml)
 * [Additional HTTP Status Codes - RTF](https://www.rfc-editor.org/rfc/rfc6585.html)
 * [Extending HTTP - RTF](https://www.rfc-editor.org/rfc/rfc9110.html#name-extending-http)
 * [IM Used - Datatracker](https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1)
 * [I'm a teapot/Hyper Text Coffee Pot Control Protocol - Wikipedia](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol)
*/

import { AssertionError } from 'assert'
import 'dotenv'

const base = 'https://api.wordnik.com/v4/'
const key = '?api_key=' + Deno.env.get('WORDNIK_KEY')

/** HTTP Status
 * Vaildate Connection Status
 * @param {string} [target] - change fetch target
 * @param {Object} [allowType] - choose which special reponses to allow
 * @param {boolean} [allowType.webdav] - allow WebDAV responses
 * @param {boolean} [allowType.im] - allow IM Used response
 * @param {boolean} [allowType.deprecated] - allow deprecated responses
 * @param {boolean|intiger} [unreconized] - allow unreconized (or custom) responses
 * @param {string}
*/

Deno.test({
	name: 'Test: HTTP Status',
	async fn(target, failOn, allowType, unreconized) {
		// Get config
		if (target === undefined) { target = 'words.json/wordOfTheDay' }
		if (failOn === undefined) {
			failOn = {
				content: false
			}
		}
		if (allowType === undefined) {
			allowType = {
				webdav: false,
				im: false,
				deprecated: false
			}
		} else {
			let json = JSON.stringify(allowType)
			json = JSON.parse(json)
			console.debug('allowType:', json)
		}

		// Get Response
		const response = (await fetch(
			base + target + key
		))
		// const status = response.status
		const status = 305
		if (response) { await response.body.cancel() }

		/**
		 * Check Response Status
		 * @returns {boolean}
		*/
		switch (true) {
		case (isNaN(status)):
			throw new AssertionError('Status is not a number!')

		/** Success Statuses */
		// Basic
		case (status === 200): // Successful
			console.debug('Successfully Connected')
			return true

		case (status === 203): // Non-Authoritative Information
		case (status === 205): // Reset Content (UI, form, canvas, etc)
			console.debug(status + ':', response.statusText)
			return true

		// Part/No Content
		case (status === 204): // No Content
		case (status === 206): // Partial Content
			console.debug(status + ':', response.statusText)
			break

		/** Redirection Messages */
		case (status === 300): // Multiple Choices
			console.debug(status + ':', response.statusText)
			break

		case (status === 304): // Not Modified (for caching)
			console.debug(status + ':', response.statusText)
			break

		case (status === 301): // Moved Permanently
		case (status === 302): // Moved Temporarily
		case (status === 303): // See Other
		case (status === 307): // Temporary Redirect
		case (status === 308): // Permanent Redirect
			// console.debug('Redirecting (' + status + ')... ')
			console.debug(status + ':', response.statusText)
			break

		/** Client error statuses */
		case (400 <= status && status <= 417):
		case (421 <= status && status !== 418 && status <= 426):
		case (status === 428):
		case (status === 429):
		case (status === 451):
			console.debug(status + ':', response.statusText)
			throw new AssertionError('Client error')
		case ((500 <= status && status <= 508) || status === 511): // Server error statuses
			console.debug(status + ':', response.statusText)
			throw new AssertionError('Server error')

		/** Non-standard Statuses */
		// WebDAV Statuses
		case (status === 207 || status === 208):
			console.debug('WebDAV Response. Status:', status)
			if (allowType.webdav === true) {
				break
			}
			throw new AssertionError('WebDAV')
		// IM Used Status
		case (status === 226):
			console.debug(status + ':', response.statusText)
			if (allowType.im === true) {
				break
			}
			throw new AssertionError('IM Used')
		// I'm a teapot Status
		case (status === 418):
			console.debug(status + ':', response.statusText)
			if (allowType.teapot === true) {
				break
			}
			throw new AssertionError("I'm a teapot")

		/** Deprecated Statuses */
		case (status === 305 || status === 306 || status === 510):
			// console.error('Deprecated. Status: ', status)
			console.error('Deprecated.')
			console.error(status + ':', response.statusText)
			if (allowType.deprecated === true) {
				break
			}
			throw new AssertionError('Deprecated')

		/** Unreconized Statuses */
		case (unreconized === true):
		case (unreconized):
			break
		default:
			// console.debug('Custom Response status?')
			console.debug(status + ':', 'Unknown Response Status')
			throw new AssertionError('Connection failed!\n' + response.statusText)
		}
	}
})
