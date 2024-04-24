import DashboardProductsEdit from "@/components/dashboard-products-edit";
import { config } from "@/helpers/config";
import { notFound } from "next/navigation";
import React from "react";

const EditProductPage = async ({ params }) => {
	const productId = params.id;
	
	const res = await fetch(`${config.apiURL}/products/${productId}`);
	const product = await res.json();
	
	
	
	if(!res.ok) notFound();
	
	return <div>
		<DashboardProductsEdit product={product}/>
	</div>;
};

export default EditProductPage;
