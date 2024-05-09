#!/usr/bin/env -S deno test --allow-all

import { assertEquals } from 'assert'

import { relatedWords } from '../mod.js'

Deno.test({
	name: 'word/relatedWords: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await relatedWords('cookie', {})
		assertEquals(response)
	}
})
