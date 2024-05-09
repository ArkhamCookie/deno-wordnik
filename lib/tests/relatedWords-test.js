#!/usr/bin/env -S deno test --allow-all

import { assertExists } from 'assert'

import { relatedWords } from '../mod.js'

Deno.test({
	name: 'word/relatedWords: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await relatedWords('cookie', {})
		assertExists(response)
	}
})
