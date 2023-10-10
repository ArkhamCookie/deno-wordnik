#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists, assertGreaterOrEqual, assertLessOrEqual } from 'assert'

import { randomWords } from '../../lib/mod.js'

Deno.test({
	name: 'words/randomWords: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await randomWords({})

		assertExists(response)
		assertExists(response[0])
		assertExists(response[0].word)
		response.forEach((word) => assertExists(word))
		response.forEach((word) => assertExists(word.word))

		response.forEach((word) => console.log(word.word))
	}
})

Deno.test({
	name: 'words/randomWords: minLength',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await randomWords({
			minLength: 5
		})
		response.forEach((word) => assertGreaterOrEqual(word.word.length, 5))
		response.forEach((word) => console.log(`${word.word}: ${word.word.length}`))
	}
})

Deno.test({
	name: 'words/randomWords: maxLength',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await randomWords({
			maxLength: 5
		})
		response.forEach((word) => assertLessOrEqual(word.word.length, 5))
		response.forEach((word) => console.log(`${word.word}: ${word.word.length}`))
	}
})
