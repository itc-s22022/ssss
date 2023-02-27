import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState('')

  const handleGuess = async (e) => {
    e.preventDefault()
    const response = await axios.get('/api/random')
    const randomNumber = response.data.randomNumber
    const playerGuess = parseInt(guess)
    if (playerGuess === randomNumber) {
      setMessage('多分あたってるはずよ')
    } else {
      setMessage(`全然違うよ ${randomNumber}.`)
    }
  }

  return (
    <div>
      <h1>数当てゲーム</h1>
      <form onSubmit={handleGuess}>
        <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />
        <button type="submit">Guess</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

