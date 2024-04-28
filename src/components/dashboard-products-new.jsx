"use client";
import React, { useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import ButtonBack from "./button-back";
import { createProductAction } from "@/actions/product-actions";
import { useFormState } from "react-dom";
import Swal from 'sweetalert2';
import { useRouter } from "next/navigation";
const DashboardProductsNew = () => {
    const initialState = { ok:false, message: "", errors: {} };
    const router = useRouter();
    const [state, dispatch] = useFormState(createProductAction, initialState);
    
    useEffect(()=> {
        if(state.ok){
            Swal.fire({
                title: state.message,
                text: 'Do you want to continue',
                icon: 'success',    
              });
    
              router.push("/dashboard/products")
    
        }
    }, [state.ok])

    return (
        <Form action={dispatch}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    isInvalid={!!state.errors?.title}
                />
                <Form.Control.Feedback type="invalid">
                    {state.errors?.title}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    name="description"
                    isInvalid={!!state.errors.title}
                />
                <Form.Control.Feedback type="invalid">
                    {state.errors.title}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                    name="category"
                    defaultValue=""
                    isInvalid={!!state.errors.category}
                >
                    <option value="" disabled>
                        Select
                    </option>
                    <option value="Home">Home</option>
                    <option value="Computers">Computers</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Kids">Kids</option>
                    <option value="Grocery">Grocery</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {state.errors.category}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    isInvalid={!!state.errors.price}
                />
                <Form.Control.Feedback type="invalid">
                    {state.errors.price}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <InputGroup>
                    <Form.Select
                        name="imageBaseUrl"
                        defaultValue=""
                        isInvalid={!!state.errors.imageBaseUrl}
                    >
                        <option value="" disabled>
                            Select
                        </option>
                        <option value="https://images.pexels.com">
                            Pexels
                        </option>
                        <option value="https://loremflickr.com">
                            Lorem Flickr
                        </option>
                    </Form.Select>
                    <Form.Control type="text" name="image" isInvalid={!!state.errors.image}/>
                    <Form.Control.Feedback type="invalid">
                        {state.errors.imageBaseUrl || state.errors.image}
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <div className="d-flex justify-content-between">
                <ButtonBack />
                <Button type="submit" variant="danger">
                    Create
                </Button>
            </div>
        </Form>
    );
};
export default DashboardProductsNew;