'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'

export function SignUp({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      if (response.ok) {
        onSuccess()
        router.push('/dashboard')
      } else {
        const data = await response.json()
        setError(data.message || 'An error occurred during sign up')
      }
    } catch (error) {
      setError('An error occurred during sign up')
    }
  }

  return (
    <form onSubmit={handleSignUp} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-indigo-700">Name</Label>
        <Input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-indigo-700">Email</Label>
        <Input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password" className="text-indigo-700">Password</Label>
        <Input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">Sign Up</Button>
    </form>
  )
}