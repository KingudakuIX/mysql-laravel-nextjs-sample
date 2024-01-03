import { useAuth } from '@/hooks/auth'
import { UserOutlined } from '@ant-design/icons';
import { Button, Card, Input } from 'antd';
import React, { FormEvent, useRef, useState } from 'react'

function Login() {
  const { login, isLoading } = useAuth({ middleware: "auth" });
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null!);

  if (isLoading) return <div>Loading...</div>

  return (
    <main className='h-screen grid place-content-center'>
      <form ref={form} onSubmit={async (formEvent: FormEvent) => {
        formEvent.preventDefault();
        setSubmitted(true)
        const formData = new FormData(form.current);

        console.log("email", formData.get("email"));
        console.log("password", formData.get("password"));

        await login({
          setErrors: setErrors,
          email: String(formData.get("email")),
          password: String(formData.get("password")),
        })
        setSubmitted(false)
      }} className="w-96">
        <Card className="w-96 [&>div]:flex [&>div]:flex-col [&>div]:gap-4">
          {
            errors.map(x => <span>{x}</span>)
          }
          <Input id="email" name="email" placeholder='Email' prefix={<UserOutlined />}></Input>
          <Input id="password" name="password" placeholder='Password' type='password'></Input>
          {submitted ? <div>Loggin in....</div> : <Button name='login' htmlType="submit">Login</Button>}
        </Card>
      </form>
    </main>
  )
}

export default Login
