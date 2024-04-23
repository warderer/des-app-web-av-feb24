import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import './App.css'

function App () {
  const [gifs, setGifs] = useState([])
  const apikey = import.meta.env.VITE_GIPHY_API_KEY

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=20&offset=0&rating=r&bundle=messaging_non_clips`)
      .then((response) => {
        return response.json()
      }).then((results) => {
        setGifs(results.data)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>Giphy App</h1>
      <div className='grid-cards'>
        {gifs.map((gif) => (
          <ImageCard key={gif.id} url={gif.images.original.url} title={gif.title} />
        ))}
      </div>
    </>
  )
}

export default App
