#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertEquals, assertExists } from 'assert'

import { topExample } from '../mod.js'

Deno.test({
	name: 'word/topExample',
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
