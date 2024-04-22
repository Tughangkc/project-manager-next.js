import React from "react";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";
import { config } from "@/helpers/config";
import ProductDetails from "@/components/product-details";
import Spacer from "@/components/spacer";

export const generateMetadata = async({params}) => {
	const productId = params.id;

	const res = await fetch(`${config.apiURL}/products/${productId}`);
	const product = await res.json();

	const {title,description} = product;
    return {
		title,
    	description,
	};
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
			<Spacer/>
			<ProductDetails product={product}/>
			<Spacer/>
        </>
    );
};
export default ProductDetailsPage;
