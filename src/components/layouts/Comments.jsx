import { useState, useEffect } from 'react'
import Header from '../helpers/Header'

const Comments = () => {
  const [comments, setComments] = useState([])

  const showComments = async () => {
    await fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    showComments()
  }, [])

  return (
    <section>
      <Header />
      <main>
        <section className='cards-container'>
          {comments.slice(0, 10).map((comment) => (
            <div key={comment.id} className='card-item'>
              <h3>{comment.name}</h3>
              <h5>{comment.email}</h5>
              <p>{comment.body}</p>
            </div>
          ))}
        </section>
      </main>
    </section>
  )
}

export default Comments
