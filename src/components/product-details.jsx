import Image from 'next/image'
import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import FlexImage from './flex-image';

const ProductDetails = ({product}) => {
    const {image,title,description,category,price} = product;
  return (
    <Row className='g-4'>
        <Col md ={6}>
            <FlexImage src={image} alt={title} height='500px'/>
        </Col>
        <Col md ={6}>
            <h2>{title}</h2>
            <p>{description}</p>
            <h4>
                <Badge>{category}</Badge>
                <Badge>{price}</Badge>
            </h4>
        </Col>
    </Row>
  )
}

export default ProductDetails
