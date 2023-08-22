// deno-lint-ignore no-unused-vars
import { buildTarget } from '../../mod.js'

/**
 * Random Word - Return a single random word/WordObject
 * @param {boolean} [hasDictionaryDef] - Only return words dictionary definitions
 * @param {string} [includePartOfSpeech] - CSV part-of-speech values in include
 * @param {string} [excludePartOfSpeech] - CSV part-of-speech values in exclude
 * @param {integer} [minCorpusCount] - Minimum corpus frequency for terms
 * @param {integer} [maxCorpusCount] - Maximum corpus frequency for terms
 * @param {integer} [minDictionaryCount] - Minimum dictionary count
 * @param {integer} [maxDictionaryCount] - Maximum dictionary count
 * @param {integer} [minLength] - Minimum word length
 * @param {integer} [maxLength] - Maximum word length
 */
export function random() {
	console.debug('random')
}
