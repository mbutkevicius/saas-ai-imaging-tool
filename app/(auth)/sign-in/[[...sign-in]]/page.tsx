import { SignIn, SignInButton, SignUp } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <SignIn path="/sign-in"/>
  )
}

export default SignInPage