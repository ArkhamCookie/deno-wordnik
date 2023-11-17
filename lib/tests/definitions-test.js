#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists } from 'assert'

import { definitions } from '../word/mod.js'

Deno.test({
	name: 'word/definitions: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await definitions('cookie', {})
		assertExists(response)
	}
})
