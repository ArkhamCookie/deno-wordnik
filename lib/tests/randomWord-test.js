#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists, assertGreaterOrEqual, assertLessOrEqual } from 'assert'

import { randomWord } from '../mod.js'

Deno.test({
	name: 'words/randomWord: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await randomWord({})
		assertExists(response)
		assertExists(response.word)
	}
})

/*
TODO: hasDictionaryDef tests
*/

/*
TODO: min & max CorpusCount tests
*/

/*
TODO: min & max DictionaryCount tests
*/

Deno.test({
	name: 'words/randomWord: minLength',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const minLength = 5
		const response = await randomWord({
			minLength
		})
		assertGreaterOrEqual(response.word.length, minLength)
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
	}
})
