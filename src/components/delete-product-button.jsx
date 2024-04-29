"use client";
import { deleteProductAction } from "@/actions/product-actions";
import React from "react";
import { Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
const DeleteProductButton = ({ id }) => {
    const handleDelete = async () => {
        const answer = await Swal.fire({
            title: "Do you want to delete?",
            showCancelButton: true,
            confirmButtonText: "Delete",
        });
        if (!answer.isConfirmed) return;
        const res = await deleteProductAction(id);
        if (res) {
            Swal.fire({
                title: res.message,
                icon: "error",
            });
        }
    };
    return (
        <Button variant="link" className="text-danger" onClick={handleDelete}>
            <MdDelete />
        </Button>
    );
};
export default DeleteProductButton;