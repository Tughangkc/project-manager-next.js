import DashboardProducts from '@/components/dashboard-products'
import DashboardProductsHeader from '@/components/dashboard-products-header'
import { config } from '@/helpers/config'
import React from 'react'
import { Table } from 'react-bootstrap'

// export const revalidate = 120;
export const dynamic = "force-dynamic";

const ProductsPage = async() => {
  const res = await fetch(`${config.apiURL}/products`)
  const products = await res.json();

  return (
    <div>
      <DashboardProductsHeader/>
      <DashboardProducts products={products}/>
    </div>
  )
}

export default ProductsPage