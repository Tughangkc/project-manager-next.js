"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";
const ButtonBack = ({ variant = "secondary", title = "Cancel" }) => {
    const router = useRouter();
    return (
        <Button type="button" variant={variant} onClick={() => router.back()}>
            {title}
        </Button>
    );
};
export default ButtonBack;