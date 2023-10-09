#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists, assertEquals } from 'assert'

import { wordOfTheDay } from '../mod.js'

Deno.test({
	name: 'words/wordOfTheDay: today',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await wordOfTheDay()
		assertExists(response)
		assertExists(response.word)
		console.log(response.word)
	}
})

Deno.test({
	name: 'words/wordOfTheDay: test day',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await wordOfTheDay('2023-07-03')
		assertExists(response)
		assertExists(response.word)
		assertEquals(response.word, 'mundungus')
		console.log(response.word)
	}
})
