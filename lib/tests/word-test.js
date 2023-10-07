#!/usr/bin/env -S deno run --allow-read --allow-env

import { assertEquals } from 'assert'

import { scrabbleScore } from '../word/mod.js'

Deno.test({
	name: 'Test: scrabbleScore',
	permissions: { read: true, env: true, net: true },
	async fn() {
		assertEquals(12, await scrabbleScore('cookie'))
	}
})
