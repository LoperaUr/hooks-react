import { useState, useEffect } from 'react'
import Header from '../helpers/Header'

const Albums = () => {
  const [albums, setAlbums] = useState([])

  const showAlbums = async () => {
    await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((data) => setAlbums(data))
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    showAlbums()
  }, [])

  return (
    <section>
      <Header />
      <main>
        <section className='cards-container'>
          {albums.slice(0, 10).map((album) => (
            <div key={album.id} className='card-item card-center-content'>
              <h3>{album.title}</h3>
            </div>
          ))}
        </section>
      </main>
    </section>
  )
}

export default Albums
