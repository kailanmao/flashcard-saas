import { SignIn } from '@clerk/nextjs'
import React from 'react'
import { Box, Typography } from '@mui/material'
type Props = {}
// Default Clerk SignIn page Export
const SignInPage = (props: Props) => {
  return (
    <>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{textAlign: 'center', my: 4}}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Sign In
      </Typography>
      <SignIn />
    </Box></>
  )
}

export default SignInPage