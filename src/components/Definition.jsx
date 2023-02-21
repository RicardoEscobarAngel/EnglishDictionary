
const Definition = ({ result }) => {
  const { word, phonetics, meanings, examples } = result || {} // Se corrige el nombre de la propiedad y se establece un objeto vacío como valor predeterminado para evitar errores

  return (
    <>
      <div className="word_section">
        <span>
          <h2>{word}</h2>
          {phonetics && <span>{phonetics[0].text}</span>} {/* Se verifica que la propiedad exista antes de acceder a ella */}
        </span>
      </div>
      {meanings && (
        <div className='definition_meaning'>
          {meanings.map((meaning, index) => {
            return (
              <div className='deff' key={index}>
                <div className='deff_type'>
                  <h3>{meaning.partOfSpeech}</h3>
                  <span className='deff_line'></span>
                </div>
                <ul>
                  {meaning.definitions.map((definition, index) => {
                    return (
                      <li key={index}>
                        <p>{definition.definition}</p>
                        {definition.example && <p><strong>Example:</strong> {definition.example}</p>}
                        {definition.synonyms && <p><strong>Synonyms:</strong> {definition.synonyms.join(', ')}</p>}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      )}
      {examples && (
        <div className="examples_section">
          <h4>Examples</h4>
          <ul>
            {examples.map((example, index) => {
              return (
                <li key={index}>
                  <p>{example.text}</p>
                  {example.translation && <p><strong>Translation:</strong> {example.translation}</p>}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </>
  )
}

export default Definition
