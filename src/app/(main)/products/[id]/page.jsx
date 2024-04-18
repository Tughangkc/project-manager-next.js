import React from "react";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";

const ProductDetails = ({ params, searchParams }) => {
	console.log("Dynamic Rendering")
	if (params.id > 100) notFound();

	return (
		<div>
			<PageHeader title="Product Detail" />
		</div>
	);
};

export default ProductDetails;
