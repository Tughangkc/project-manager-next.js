"use client";
import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import ButtonBack from "./button-back";
import {useFormState} from "react-dom";
const DashboardProductsEdit = ({product}) => {
    const initialState = {ok:false, message:null, errors:{}};

    const [] = useFormState();

    const imageUrl = new URL (product.image);

    return (
        <Form>
            <input type="hidden" name="id" defaultValue={product.id}/>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" defaultValue ={product.title}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" defaultValue ={product.description}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select defaultValue ={product.category}>
                    <option>Select</option>
                    <option value="Home">Home</option>
                    <option value="Computers">Computers</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Kids">Kids</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Tools">Tools</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" defaultValue ={product.price} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <InputGroup>
                    <Form.Select defaultValue={imageUrl.origin}>
                        <option value="https://images.pexels.com">
                            Pexels
                        </option>
                        <option value="https://loremflickr.com">
                            Lorem Flickr
                        </option>
                    </Form.Select>
                    <Form.Control type="text" defaultValue={imageUrl.pathname}/>
                </InputGroup>
            </Form.Group>
            <div className="d-flex justify-content-between">
            <ButtonBack/>
            <Button type="submit" variant="danger">Update</Button>
            </div>
        </Form>
    );
};
export default DashboardProductsEdit;