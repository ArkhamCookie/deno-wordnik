#!/usr/bin/env -S deno test --allow-read --allow-env --allow-net

import { assertExists } from 'assert'
import 'dotenv'

/** Vaildate Config File */
Deno.test(
	'config: API key value', () => {
		assertExists(Deno.env.get('WORDNIK_KEY'), 'API key value is not set')
	}
)
