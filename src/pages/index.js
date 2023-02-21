import Head from 'next/head'
import { useState } from 'react'
import Definition from '@/components/Definition'

export default function Home () {
  const [searchTerm, setSearchTerm] = useState('')
  const [result, setResult] = useState({})

  const handleSearch = () => {
    fetch(`/api/hello?word=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        setResult(data)
      })
  }
  
  return (
    <>
      <Head>
        <title>English Dictionary</title>
        <meta name="description" content="English dictionary in React and Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>English Dictionary</h1>
        <input
          placeholder="Enter a word"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
        />
        <button onClick={handleSearch}>Search</button>
        {result && result.word && <Definition result={result} />} {/* Se verifica que la propiedad "word" exista en la respuesta antes de mostrar el componente */}
      </main>
    </>
  )
}
