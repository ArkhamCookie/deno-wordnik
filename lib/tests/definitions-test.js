#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertEquals, assertExists } from 'assert'

import { definitions } from '../mod.js'

Deno.test({
	name: 'word/definitions: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await definitions('cookie', {})
		assertExists(response)
	}
})

Deno.test({
	name: 'word/definitions: limit',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const limit = 3
		const response = await definitions('cookie', { limit })

		assertEquals(response.length, limit)
	}
})

Deno.test({
	name: 'word/definitions: correct part of speech',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await definitions('cookie', { partOfSpeech: 'noun' })

		assertExists(response)
	}
})

Deno.test({
	name: 'word/definition: >1 part of speechs w/ correct part of speech',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await definitions('cookie', { partOfSpeech: 'noun,verb' })

		assertExists(response)
	}
})

Deno.test({
	name: 'word/definitions: incorrect part of speech',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await definitions('cookie', { partOfSpeech: 'verb' })

		// This is like assert doesn't exist
		assertEquals(response.status, undefined)
	}
})

Deno.test({
	name: 'word/definitions: more than one option',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await definitions('cookie', {
			includeRelated: true,
			includeTags: true
		})

		assertExists(response)
	}
})
