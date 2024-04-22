import Link from 'next/link'
import React from 'react'

const DashboardProductsHeader = () => {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      <h2>Products</h2>
      <Link className='btn btn-danger' href="/dashboard/products/new">New Product</Link>
    </div>
  )
}

export default DashboardProductsHeader
