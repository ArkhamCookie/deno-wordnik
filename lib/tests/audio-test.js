#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists } from 'assert'

import { audio } from '../mod.js'

Deno.test({
	name: 'word/audio',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await audio('cookie', {})
		assertExists(response)
	}
})
