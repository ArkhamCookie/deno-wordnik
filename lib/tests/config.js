#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists, assertEquals } from 'assert'
import 'dotenv'

import { Wordnik, getKey } from '../mod.js'

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

Deno.test({
	name: 'config: Wordnik',
	permissions: { read: true, env: true, net: true },
	fn() {
		const wordnik = new Wordnik()
		assertEquals(wordnik.base, 'https://api.wordnik.com/')
		assertEquals(wordnik.key, getKey())
		assertEquals(wordnik.version, 'v4/')
		console.debug(wordnik)
	}
})
