#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertEquals } from 'assert'

import { scrabbleScore } from '../word/mod.js'

Deno.test({
	name: 'word: scrabbleScore',
	permissions: { read: true, env: true, net: true },
	async fn() {
		assertEquals(12, await scrabbleScore('cookie'))
	}
})
