const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export default async function handler (req, res) {
  const { word } = req.query // Corrección del nombre de la propiedad a "query"
  const response = await fetch(`${BASE_URL}/${word}`)
    .then((res) => res.json())
    .then((data) => {
      return {
        word: data[0].word,
        phonetics: data[0].phonetics,
        meanings: data[0].meanings.map((meaning) => {
          return {
            partOfSpeech: meaning.partOfSpeech,
            definitions: meaning.definitions.map((definition) => {
              return {
                definition: definition.definition,
                example: definition.example,
                synonyms: definition.synonyms
              }
            })
          }
        })
      }
    })

  res.status(200).json(response)
}
