#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists } from 'assert'
import 'dotenv'

import { getKey } from '../mod.js'

/** Vaildate Config File */
Deno.test(
	'config: API key value', () => {
		assertExists(Deno.env.get('WORDNIK_KEY'), 'API key value is not set')
	}
)

Deno.test({
	name: 'config: getKey()',
	permissions: { read: true, env: true, net: true },
	fn() {
		const key = getKey()
		assertExists(key)
	}
})
