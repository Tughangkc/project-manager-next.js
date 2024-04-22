import Link from 'next/link'
import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { MdDelete, MdEdit } from "react-icons/md";

const DashboardProducts = ({products}) => {
  return (
    <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th style={{width:"110px"}}></th>
                </tr>
            </thead>
            <tbody>
                {products.map((item,index)=>(  
                <tr key = {item.id}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>${item.price}</td>
                    <td>
                        <Link className='btn' href={`/dashboard/products/${item.id}`}><MdEdit /></Link>
                        <Button variant='link' className='text-danger'><MdDelete /></Button>
                    </td>

                </tr>
                ))}
            </tbody>
        </Table>
  )
}

export default DashboardProducts
