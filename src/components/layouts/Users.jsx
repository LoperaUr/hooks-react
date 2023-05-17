import { useState, useEffect } from 'react'
import Header from '../helpers/Header'

const Users = () => {
  const [users, setUsers] = useState([])

  const showUsers = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err)
      })
    console.log(users)
  }

  useEffect(() => {
    showUsers()
  }, [])

  return (
    <section>
      <Header />
      <main>
        <section className='cards-container'>
          {users.map((user) => (
            <div key={user.id} className='card-item'>
              <h3>{user.username}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
            </div>
          ))}
        </section>
      </main>
    </section>
  )
}

export default Users
