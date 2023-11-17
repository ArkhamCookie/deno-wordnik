#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertEquals, assertExists } from 'assert'

import { frequency } from '../mod.js'

Deno.test({
	name: 'word/frequency: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await frequency('cookie', {})
		assertExists(response)
	}
})

Deno.test({
	name: 'word/frequency: end year',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await frequency('cookie', { endYear: 1900 })
		assertEquals(response.totalCount, 90)
	}
})

Deno.test({
	name: 'word/frequency: start + end year',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await frequency('cookie', { startYear: 1875, endYear: 1900 })
		assertEquals(response.totalCount, 49)
	}
})
