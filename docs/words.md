# Word

## Random Word

Return a single random word

### Parameters

| Parameter | Description | Type |
| --- | --- | --- |
| hasDictionaryDef | Only return words with dictionary definitions | boolean |
| includePartOfSpeech | CSV part-of-speech values in include | string |
| excludePartOfSpeech | CSV part-of-speech values in exclude | string |
| minCorpusCount | Minimum corpus frequency for terms | integer |
| maxCorpusCount | Maximum corpus frequency for terms | integer |
| minDictionaryCount | Minimum dictionary count | integer |
| maxDictionaryCount | Maximum dictionary count | integer |
| minLength | Minimum word length | integer |
| maxLength | Maximum word length | integer |

#### Corpus Count/Frequency

The corpus frequency is the measure of how many times a (case-sensitive) word has been found, and is based on the millions of documents consumed by Wordnik. You can use this measure to determine the "commonality" of a word. [^1]

[^1]: <https://stackoverflow.com/questions/11583339/what-is-minimum-corpus-frequency-for-terms-in-wordnik-api>
