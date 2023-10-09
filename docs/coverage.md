# API Coverage

## Basic Endpoint Coverage

[`https://api.wordnik.com`](https://developer.wordnik.com/docs)

### [`/word.json`](https://developer.wordnik.com/docs#/word)

| endpoint | operation | covered |
| --- | --- | --- |
| [`/{word}/audio`](https://developer.wordnik.com/docs#!/word/getAudio) | Fetches audio metadata for a word | [ ] |
| [`/{word}/definitions`](https://developer.wordnik.com/docs#!/word/getDefinitions) | Returns definitions for a word | [ ] |
| [`/{word}/etymologies`](https://developer.wordnik.com/docs#!/word/getEtymologies) | Fetches etymology data | [ ] |
| [`/{word}/examples`](https://developer.wordnik.com/docs#!/word/getExamples) | Returns examples for a word | [ ] |
| [`/{word}/frequency`](https://developer.wordnik.com/docs#!/word/getWordFrequency) | Returns word usage over time | [ ] |
| [`/{word}/hyphenation`](https://developer.wordnik.com/docs#!/word/getHyphenation) | Returns syllable information for a word | [ ] |
| [`/{word}/phrases`](https://developer.wordnik.com/docs#!/word/getPhrases) | Fetches bi-gram phrases for a word | [ ] |
| [`/{word}/pronunciations`](https://developer.wordnik.com/docs#!/word/getTextPronunciations) | Returns text pronunciations for a given word | [ ] |
| [`/{word}/relatedWords`](https://developer.wordnik.com/docs#!/word/getRelatedWords) | Given a word as a string, returns relationships from the Word Graph | [ ] |
| [`/{word}/scrabbleScore`](https://developer.wordnik.com/docs#!/word/getScrabbleScore) | Returns the Scrabble score for a word | [ ] |
| [`/{word}/topExample`](https://developer.wordnik.com/docs#!/word/getTopExample) | Returns a top example for a word | [ ] |

### [`/words.json`](https://developer.wordnik.com/docs#/words)

| endpoint | operation | covered |
| --- | --- | --- |
| [`/randomWord`](https://developer.wordnik.com/docs#!/words/getRandomWord) | Returns a single random WordObject | [ ] |
| [`/randomWords`](https://developer.wordnik.com/docs#!/words/getRandomWords) | Returns an array of random WordObjects | [ ] |
| [`/reverseDictionary`](https://developer.wordnik.com/docs#!/words/reverseDictionary) | Reverse dictionary search | [x] |
| [`/search/{query}`](https://developer.wordnik.com/docs#!/words/searchWords) | Searches words | [x] |
| [`/wordOfTheDay`](https://developer.wordnik.com/docs#!/words/getWordOfTheDay) | Returns a specific WordOfTheDay | [x] |
