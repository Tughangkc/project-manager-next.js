import React from "react";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";
import { config } from "@/helpers/config";
import ProductDetails from "@/components/product-details";
export const metadata = {
    title: "Products",
    description: "High quality and cheap products",
};
const ProductDetailsPage = async ({ params }) => {
    const productId = params.id;
    if(!productId) throw new Error("ProductId is missing!");
    const res = await fetch(`${config.apiURL}/products/${productId}`);
    if(!res.ok) notFound();
    const product = await res.json();
    // console.log(product)
    
    
    return (
        <>
            <PageHeader title="Product Detail" />
			<ProductDetails product={product}/>
        </>
    );
};
export default ProductDetailsPage;
