"use client";
import React, { useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import ButtonBack from "./button-back";
import { useFormState } from "react-dom";
import { updateProductAction } from "@/actions/product-actions";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
const DashboardProductsEdit = ({ product }) => {
    const initialState = { ok: false, message: null, errors: {} };
    const router = useRouter();
    const [state, dispatch] = useFormState(updateProductAction, initialState);
    const imageUrl = new URL(product.image);
    useEffect(() => {
        if (state.ok) {
            Swal.fire({
                title: state.message,
                icon: "success",
            });
            router.push("/dashboard/products");
        }
    }, [state.ok]);
    return (
        <>
            {!state.ok && state.message ? (
                <Alert variant="danger">{state.message}</Alert>
            ) : null}
            <Form action={dispatch}>
                <input type="hidden" name="id" defaultValue={product.id} />
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        defaultValue={product.title}
                        isInvalid={!!state.errors.title}
                    />
                    <Form.Control.Feedback type="invalid">
                        {state.errors.title}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        name="description"
                        type="text"
                        defaultValue={product.description}
                        isInvalid={!!state.errors.description}
                    />
                    <Form.Control.Feedback type="invalid">
                        {state.errors.description}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                        name="category"
                        defaultValue={product.category}
                        isInvalid={!!state.errors.category}
                    >
                        <option value="Home">Home</option>
                        <option value="Computers">Computers</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Kids">Kids</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Tools">Tools</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {state.errors.category}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        name="price"
                        type="number"
                        defaultValue={product.price}
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
                            defaultValue={imageUrl.origin}
                            isInvalid={!!state.errors.imageBaseUrl}
                        >
                            <option value="https://images.pexels.com">
                                Pexels
                            </option>
                            <option value="https://loremflickr.com">
                                Lorem Flickr
                            </option>
                        </Form.Select>
                        <Form.Control
                            name="image"
                            type="text"
                            defaultValue={imageUrl.pathname}
                            isInvalid={!!state.errors.image}
                        />
                        <Form.Control.Feedback type="invalid">
                            {state.errors.imageBaseUrl || state.errors.image}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <div className="d-flex justify-content-between">
                    <ButtonBack />
                    <Button type="submit" variant="danger">
                        Update
                    </Button>
                </div>
            </Form>
        </>
    );
};
export default DashboardProductsEdit;