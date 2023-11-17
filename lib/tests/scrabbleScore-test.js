#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertEquals, assertExists } from 'assert'

import { scrabbleScore } from '../mod.js'

Deno.test({
	name: 'word/scrabbleScore',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await scrabbleScore('cookie')
		assertExists(response)

		assertEquals(response.value, 12)
	}
})
