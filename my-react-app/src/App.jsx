import { useState } from 'react'
import TweetInput from './Components/TweetInput'
import TweetList from './Components/TweetList'
import Xsvg from './Components/svgs/X'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [tweets, setTweets] = useState([])

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  }

  return (
    <>
      <div className="logo">
      <Xsvg />
      </div>
      <div className="card">
        <TweetInput addTweet={addTweet} />
        <TweetList tweets={tweets} />
        <button onClick={() => setCount((count) => count + 1)}>
          Like {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
