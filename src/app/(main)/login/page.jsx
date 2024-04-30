import LoginForm from '@/components/login-form'
import PageHeader from '@/components/page-header'
import React from 'react'

export const metadata ={
	title: 'Login',
	description: "About our services, products and services"
}
const LoginPage = () => {
  return (
    <div>
      <PageHeader title="Login"/>
      <LoginForm/>
    </div>
  )
}

export default LoginPage