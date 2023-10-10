#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertEquals, assertExists, assertGreater } from 'assert'

import { examples } from '../../lib/mod.js'

Deno.test({
	name: 'word/examples: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await examples('hackable', {})
		assertExists(response)
		console.log(response)
	}
})

Deno.test({
	name: 'word/examples: includeDuplicates = true',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await examples('light', {})
		assertExists(response)
		console.log(response)
	}
})

Deno.test({
	name: 'word/examples: limit',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const limit = 2
		const responseLimited = await examples('hackable', {
			limit
		})
		assertExists(responseLimited)
		assertEquals(responseLimited.examples.length, limit)

		const responseDefault = await examples('hackable', {})
		assertExists(responseDefault, 'trouble getting default response')
		assertGreater(responseDefault.examples.length, limit)
	}
})
