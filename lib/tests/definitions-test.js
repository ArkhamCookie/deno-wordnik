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
	name: 'word/definitions: correct part of speech',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await definitions('cookie', { partOfSpeech: 'noun' })

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
