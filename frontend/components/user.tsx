"use client"
import { useAuth } from '@/hooks/auth'
import React from 'react'

function user() {
  const { user, isLoading } = useAuth({ middleware: "auth" });

  console.log("user", user)

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      {user?.name}
    </div>
  )
}

export default user
