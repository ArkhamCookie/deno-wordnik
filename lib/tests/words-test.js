#!/usr/bin/env -S deno run --allow-read --allow-env

import { assertExists } from 'assert'

import { randomWord } from '../mod.js'

Deno.test({
	name: 'Test: randomWord',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await randomWord()
		assertExists(response)
		assertExists(response.word)
	}
})
