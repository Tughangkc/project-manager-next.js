import Slider from '@/components/slider'
import ClientComponent from '@/components/test/client-component'
import ServerComponent from '@/components/test/server-component'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Slider/>
      
      <ClientComponent>
        <ServerComponent/>
      </ClientComponent>
      

    </div>
  )
}

export default HomePage