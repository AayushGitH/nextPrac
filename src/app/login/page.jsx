import React from 'react'
import LoginPage from './LoginPage'

export const metadata = {
  title: 'Login - ' + process.env.SITE_NAME
}

const Login = () => {
  return (
    <LoginPage/>
  )
}

export default Login
