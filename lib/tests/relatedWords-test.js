#!/usr/bin/env -S deno test --allow-all
/* eslint-disable quotes */
/* eslint-disable quote-props */

import { assertEquals, assertExists } from 'assert'

import { relatedWords } from '../mod.js'

Deno.test({
	name: 'word/relatedWords: default',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const response = await relatedWords('cookie', {})
		assertExists(response)
	}
})

Deno.test({
	name: 'word/relatedWords: limitPerRelationshipType',
	permissions: { read: true, env: true, net: true },
	async fn() {
		const limitPerRelationshipType = 1
		const expectedResponse = [
			{
				"relationshipType": "cross-reference",
				"words": [
					"Wikipedia article on HTTP cookies"
				]
			},
			{
				"relationshipType": "rhyme",
				"words": [
					"bookie"
				]
			},
			{
				"relationshipType": "synonym",
				"words": [
					"English"
				]
			}
		]
		const responseLimited = await relatedWords('cookie', {
			limitPerRelationshipType
		})
		assertExists(responseLimited, 'trouble getting limited response')
		assertEquals(responseLimited, expectedResponse)
	}
})
