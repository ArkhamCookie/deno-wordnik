import { wordOfTheDay } from '../../lib/mod.js'

const response = await wordOfTheDay()
console.log(response.word)
