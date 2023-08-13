#!/usr/bin/env -S deno run --allow-read --allow-env

import { assertExists } from 'assert'
import 'dotenv'

/** Vaildate Config File */
Deno.test(
	'Test: API key value', () => {
		assertExists(Deno.env.get('WORDNIK_KEY'), 'API key value is not set')
	}
)
