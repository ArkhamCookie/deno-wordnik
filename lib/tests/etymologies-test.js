#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists } from 'assert'

import { etymologies } from '../mod.js'

Deno.test({
	name: 'word/etymologies: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await etymologies('hackable', {})
		assertExists(response)
	}
})
