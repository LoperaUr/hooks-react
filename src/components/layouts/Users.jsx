import { useState } from 'react'
import Header from '../helpers/Header'

const Users = () => {
  const [users, setUsers] = useState()

  const showUsers = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err)
      })
  }

  showUsers()

  return (
    <section>
      <Header />
      <mausersin>users</mausersin>
    </section>
  )
}

export default Users
