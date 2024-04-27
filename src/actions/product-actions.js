"use server"

import { config } from "@/helpers/config"
import { convertFormDataToJSON } from "@/helpers/form-validation"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import * as Yup from "yup"

const FormSchema = Yup.object({
    title: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
    image: Yup.string().required('Required')
})

export const createProductAction = async(formData) => {
    // FormData olarak gelen form datasi, JSON yapisina cevrildi
    const fields = convertFormDataToJSON(formData);

    fields.image = fields.imageBaseUrl + fields.image;
    delete fields.imageBaseUrl;

    
    try {
        // Validation
        FormSchema.validateSync(fields, {abortEarly:false});

        // Mutation
        const res = await fetch(`${config.apiURL}/products`, {
            method:"post",
            body:JSON.stringify(fields),
            headers:{
                "Content-Type": "application/json" 
            }
        })
// Revalidation (Cachleri temizler)
        revalidatePath("/products");
        revalidatePath("/dashboard/products");
        
    } catch (err) {
        console.log(err)
        
    }
    redirect("/dashboard/products")




  
}
