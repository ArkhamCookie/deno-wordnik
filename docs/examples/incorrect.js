import { Wordnik } from '../../lib/mod.js'

const wordnik = new Wordnik()

/** Examples of incorrect code */

console.log(wordnik.word()) // no word or target given

console.log(wordnik.word('hackable')) // no target given
console.log(wordnik.words()) // no target given
