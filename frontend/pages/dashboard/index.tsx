import Articles from '@/components/articles'
import Logout from '@/components/logout'
import User from '@/components/user'
import Head from 'next/head'
import React from 'react'

function Dashboard() {
  return (
    <main className='container p-2'>
      <Head>
        <title>Dashboard</title>
      </Head>
      <User />
      <Articles />
      <Logout />
    </main>
  )
}

export default Dashboard
