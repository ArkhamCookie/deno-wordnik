#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists } from 'assert'

import { examples } from '../../lib/mod.js'

Deno.test({
	name: 'word/examples: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await examples('hackable')
		assertExists(response)
		console.log(response)
	}
})
