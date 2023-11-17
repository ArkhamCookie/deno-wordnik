#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertEquals, assertExists } from 'assert'

import { topExample } from '../mod.js'

Deno.test({
	name: 'word/topExample',
	permissions:  { read: true, env: true, net: true },
	async fn() {
		const response = await topExample('cookie')
		assertExists(response)
	}
})
