import { useState } from 'react'
import TweetInput from './Components/TweetInput'
import Xsvg from './Components/svgs/X'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="logo">
      <Xsvg />
      </div>
      <div className="card">
        <TweetInput />
        <button onClick={() => setCount((count) => count + 1)}>
          Like {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
