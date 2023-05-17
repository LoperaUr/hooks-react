import { useEffect, useState } from 'react'
import Header from '../helpers/Header'

const Photos = () => {
  const [photos, setPhotos] = useState([])

  const showPhotos = async () => {
    await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    showPhotos()
  }, [])

  return (
    <section>
      <Header />
      <main>
        <section className='cards-container'>
          {photos.slice(0, 10).map((photo) => (
            <div key={photo.id} className='card-item card-center-content'>
              <img src={photo.url}></img>
            </div>
          ))}
        </section>
      </main>
    </section>
  )
}

export default Photos
