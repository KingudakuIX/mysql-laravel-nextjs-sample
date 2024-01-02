"use client"
import { axios } from "@/lib/axios"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import useSWR from 'swr'

interface ILogin {
  email: string,
  password: string,
  setErrors: (errors: []) => void,
}

export const useAuth = ({ middleware }: { middleware: any }) => {
  const router = useRouter();

  // Loading 
  const [isLoading, setIsLoading] = useState(true)

  // User
  const { data: user, error, mutate } = useSWR("/api/v1/user",
    () => axios
      .get("/api/v1/user")
      .then(res => res.data.data)
      .catch(err => {
        if (err.response.status !== 409) throw err;
      })
  );

  // CSRF
  const csrf = useCallback(() => axios.get("/sanctum/csrf-cookie"), [])

  // Login
  const login = useCallback(async ({ setErrors, ...props }: ILogin) => {
    setErrors([]);

    await csrf();

    axios
      .post("/login", props)
      .then(async () => await mutate() && router.push("/dashboard"))
      .catch((err: any) => {
        if (err.response.status !== 422) throw err;
        // @ts-ignore
        setErrors(Object.values(err.response.data.errors).flat());
      })
  }, [csrf, mutate, router])

  // Logout
  const logout = useCallback(async ({ setErrors }: any) => {
    await axios.post("/logout")

    mutate(null);

    router.push("/login");
  }, [mutate, router])

  useEffect(() => {
    if (user || error) {
      setIsLoading(false);
    }
    if (middleware === "guest" && user) router.push("/dashboard");
    if (middleware === "auth" && error) router.push("/login");
  }, [user, error])

  return {
    user,
    csrf,
    isLoading,
    login,
    logout
  }
}