'use client'
import React from 'react'

import { signIn, signOut } from 'next-auth/react'

export const LoginButton = () => {
  return <button onClick={() => signIn()}>LoginButton</button>
}

export const LogoutButton = () => {
  return <button onClick={() => signOut()}>LogoutButton</button>
}
