import { useAuth } from '@/hooks/auth';
import { Button } from 'antd';
import React from 'react'

function Logout() {
  const { logout } = useAuth({ middleware: "auth" });
  return (
    <Button onClick={() => {
      logout({ setErrors: () => { } })
    }}>Logout</Button>
  )
}

export default Logout
