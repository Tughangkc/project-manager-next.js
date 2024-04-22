import Image from 'next/image'
import React from 'react'

const FlexImage = ({src,alt,width="100%",height="100%"}) => {
  return (
    <div style={{position: "relative", height: "500px"}}>
            <Image src = {src} fill alt={alt} style={{objectFit: "cover"}}/>
            </div>
  )
}

export default FlexImage
