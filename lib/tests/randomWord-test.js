#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists, assertGreaterOrEqual } from 'assert'

import { randomWord } from '../../lib/mod.js'

Deno.test({
	name: 'words/randomWord',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await randomWord({})
		assertExists(response)
		assertExists(response.word)
		console.log(response.word)
	}
})

Deno.test({
	name: 'words/randomWord: minLength',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const minLength = 5
		const response = await randomWord({
			minLength
		})
		assertGreaterOrEqual(response.word.length, minLength)
		console.log(`${response.word}: ${response.word.length}`)
	}
})

