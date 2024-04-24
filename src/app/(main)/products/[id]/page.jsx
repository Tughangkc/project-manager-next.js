import React from "react";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";
import { config } from "@/helpers/config";
import ProductDetails from "@/components/product-details";
import Spacer from "@/components/spacer";
import ProductsInSameCategory from "@/components/products-in-same-category";

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
    const fetchProduct = (await fetch(`${config.apiURL}/products/${productId}`)).json();
	const fetchProducts = (await fetch(`${config.apiURL}/products`)).json();

	const [product,products] = await Promise.all([fetchProduct,fetchProducts])


	if(!product) notFound();
    // console.log(product)
    
    
    return (
        <>
            <PageHeader title="Product Detail" />
			<Spacer/>
			<ProductDetails product={product}/>
			<Spacer/>
            <ProductsInSameCategory products={products}/>
            <Spacer/>
        </>
    );
};
export default ProductDetailsPage;
