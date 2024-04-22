import PageHeader from '@/components/page-header'
import ProductList from '@/components/product-list'
import Spacer from '@/components/spacer'
import { config } from '@/helpers/config'
import React from 'react'

export const metadata ={
	title: 'Products',
	description: "About our services, products and services"
}

const ProductPage = async() => {

  const res = await fetch (`${config.apiURL}/products`)
  const products = await res.json();

  console.log(products)
  return (
    <div>
      <PageHeader title="Products"/>
      <Spacer/>
      <ProductList products={products}/>
      <Spacer/>
    </div>
  )
}

export default ProductPage