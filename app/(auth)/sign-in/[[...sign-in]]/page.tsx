import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}
// Default Clerk SignIn page Export
const SignInPage = (props: Props) => {
  return (
    <SignIn /> 
  )
}

export default SignInPage