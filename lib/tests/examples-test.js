#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertEquals, assertExists, assertGreater, assertNotEquals } from 'assert'

import { examples } from '../mod.js'

Deno.test({
	name: 'word/examples: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await examples('hackable', {})
		assertExists(response)
	}
})

/*
TODO: includeDuplicates test
Deno.test({
	name: 'word/examples: includeDuplicates = true',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await examples('light', {})
		assertExists(response, 'trouble getting default response')
	}
})
*/

Deno.test({
	name: 'word/examples: skip',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const responseDefault = await examples('hackable', {})
		assertExists(responseDefault, 'trouble getting default response')

		const skip = 2
		const responseSkip = await examples('hackable', {
			skip
		})
		assertExists(responseSkip, 'trouble getting skipped response')

		const defaultFirst = responseDefault.examples[0]
		const defaultSkippedTo = responseDefault.examples[2]
		const skippedTo = responseSkip.examples[0]

		assertNotEquals(defaultFirst, skippedTo)
		assertEquals(defaultSkippedTo, skippedTo)
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
		assertExists(responseLimited, 'trouble getting limited response')
		assertEquals(responseLimited.examples.length, limit)

		const responseDefault = await examples('hackable', {})
		assertExists(responseDefault, 'trouble getting default response')
		assertGreater(responseDefault.examples.length, limit)
	}
})
