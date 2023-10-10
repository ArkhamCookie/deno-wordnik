#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists, assertGreaterOrEqual, assertLessOrEqual } from 'assert'

import { randomWord } from '../../lib/mod.js'

Deno.test({
	name: 'words/randomWord: default',
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

Deno.test({
	name: 'words/randomWord: maxLength',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const maxLength = 5
		const response = await randomWord({
			maxLength
		})
		assertLessOrEqual(response.word.length, maxLength)
		console.log(`${response.word}: ${response.word.length}`)
	}
})
