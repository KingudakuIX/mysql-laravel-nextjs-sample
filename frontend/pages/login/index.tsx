import { useAuth } from '@/hooks/auth'
import { Button, Card, Input } from 'antd';
import React, { FormEvent, useRef, useState } from 'react'

function Login() {
  const { login } = useAuth({ middleware: "auth" });
  const [errors, setErrors] = useState<string[]>([]);
  const form = useRef<HTMLFormElement>(null!);
  return (
    <form ref={form} onSubmit={(formEvent: FormEvent) => {
      formEvent.preventDefault();
      const formData = new FormData(form.current);

      console.log("email", formData.get("email"));
      console.log("password", formData.get("password"));

      login({
        setErrors: setErrors,
        email: String(formData.get("email")),
        password: String(formData.get("password")),
      })

    }} className="w-96">
      <Card className="w-96 [&>div]:flex [&>div]:flex-col [&>div]:gap-4">
        {
          errors.map(x => <span>{x}</span>)
        }
        <Input id="email" name="email" placeholder='Email'></Input>
        <Input id="password" name="password" placeholder='Password'></Input>
        <Button htmlType="submit">Login</Button>
      </Card>
    </form>
  )
}

export default Login
