"use client"
import React from 'react'
import ServerComponent from './server-component'

const ClientComponent = ({children}) => {
    console.log("Client side rendering...")
  return (
    <div>
      ClientComponent
      {children}
    </div>
  )
}

export default ClientComponent
