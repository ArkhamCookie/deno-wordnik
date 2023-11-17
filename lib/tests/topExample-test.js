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
	}
})
