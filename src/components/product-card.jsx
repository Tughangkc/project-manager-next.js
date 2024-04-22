"use client"
import Image from 'next/image'
import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import "./product-card.scss"
import { useRouter } from 'next/navigation'
import FlexImage from './flex-image'


const ProductCard = ({id,title,price,image}) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/products/${id}`)

      
    }
    
  return (
    <Card className='product-card' onClick={handleClick}>
        <FlexImage src={image} alt={title} height='200px'/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>
            <Badge>{price}</Badge>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
