#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertEquals, assertExists, assertGreaterOrEqual, assertLessOrEqual } from 'assert'

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
		const minLength = 5
		const response = await randomWords({
			minLength
		})
		response.forEach((word) => assertGreaterOrEqual(word.word.length, minLength))
		response.forEach((word) => console.log(`${word.word}: ${word.word.length}`))
	}
})

Deno.test({
	name: 'words/randomWords: maxLength',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const maxLength = 5
		const response = await randomWords({
			maxLength
		})
		response.forEach((word) => assertLessOrEqual(word.word.length, maxLength))
		response.forEach((word) => console.log(`${word.word}: ${word.word.length}`))
	}
})

Deno.test({
	name: 'words/randomWords: limit',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const limit = 3
		const response = await randomWords({
			limit
		})
		assertEquals(response.length, limit)
	}
})
