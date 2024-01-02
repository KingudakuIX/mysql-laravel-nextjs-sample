"use client"
import { useAuth } from '@/hooks/auth'
import React from 'react'

function user() {
  const { user, isLoading } = useAuth({ middleware: "auth" });

  if (isLoading) return <div>Loading...</div>

  return (
    <h2 className='text-lg'>Welcome {user?.name}</h2>
  )
}

export default user
