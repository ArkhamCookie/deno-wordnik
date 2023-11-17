#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertEquals, assertExists } from 'assert'

import { topExample } from '../mod.js'

Deno.test({
	name: 'word/topExample: basic',
	permissions:  { read: true, env: true, net: true },
	async fn() {
		const testWord = 'cookie'

		const response = await topExample(testWord)
		assertExists(response)

		assertEquals(response.word, testWord)

		// This might have to be updated if the top example changes
		const expectedResponse = 'I noticed there\'s a small cookie, nice? ya all for $7.90 but excluding serbice charge la. de tea/coffee comes with a kan small cookie~'
		assertEquals(response.text, expectedResponse)
	}
})

/*
TODO: test plural words without useCanonical

Deno.test({
	name: 'word/topExample: plural',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const testWord = 'cats'
		const response = await topExample(testWord)
		assertEquals(response.word, testWord)
	}
})
*/

/*
TODO: test plural word with useCanonical

Deno.test({
	name: 'word/topExample: useCanonical',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const testWord = 'cats'
		const expectedWord = 'cat'

		const response = await topExample(testWord, true)

		assertEquals(response.word, expectedWord)
	}
})
*/
