import Articles from '@/components/articles'
import Logout from '@/components/logout'
import User from '@/components/user'
import React from 'react'

function Dashboard() {
  return (
    <main className='container p-2'>
      <User />
      <Articles />
      <Logout />
    </main>
  )
}

export default Dashboard
