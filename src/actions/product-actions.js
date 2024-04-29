"use server";
import { config } from "@/helpers/config";
import {
    convertFormDataToJSON,
    transformYupErrors,
} from "@/helpers/form-validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";
const FormSchema = Yup.object({
    id: Yup.number().required("Required"),
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    price: Yup.number().typeError("Invalid price").required("Required"),
    imageBaseUrl: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
});
const CreateSchema = FormSchema.omit(["id"]);
export const createProductAction = async (prevState, formData) => {
    //FormData olarak gelen form datasi, JSON yapisina cevrildi
    const fields = convertFormDataToJSON(formData);
    try {
        //Validation
        CreateSchema.validateSync(fields, { abortEarly: false });
        fields.image = fields.imageBaseUrl + fields.image;
        delete fields.imageBaseUrl;
        //Mutation
        const res = await fetch(`${config.apiURL}/products`, {
            method: "post",
            body: JSON.stringify(fields),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            throw new Error("Something went wrong");
        }
        // Revalidation (Cache leri temizler)
        revalidatePath("/products");
        revalidatePath("/dashboard/products");
        return {
            ok: true,
            message: "Products was created",
            errors: {},
        };
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
            return transformYupErrors(err.inner);
        }
        return {
            ok: false,
            message: "Something went wrong. Try again later.",
            errors: null,
        };
    }
    // Redirect komutu try-catch icinde olmamalidir
    // redirect("/dashboard/products");
};
export const updateProductAction = async (prevState, formData) => {
    const fields = convertFormDataToJSON(formData);
    try {
        FormSchema.validateSync(fields, { abortEarly: false });
        fields.image = fields.imageBaseUrl + fields.image;
        delete fields.imageBaseUrl;
        const res = await fetch(`${config.apiURL}/products/${fields.id}`, {
            method: "put",
            body: JSON.stringify(fields),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            throw new Error("Something went wrong.");
        }
        revalidatePath("/products");
        revalidatePath("/dashboard/products");
        return {
            ok: true,
            message: "Product was updated",
            errors: {},
        };
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
            return transformYupErrors(err.inner);
        }
        return {
            ok: false,
            message: "Something went wrong. Try again later.",
            errors: null,
        };
    }
};
export const deleteProductAction = async (id) => {
    try {
        if(!id) throw new Error("Id is missing");

        const res = await fetch(`${config.apiURL}/products/${id}`,{
            method:'delete',
        })

        if(!res.ok){
            throw new Error("Something went wrong");
        }

        revalidatePath("/products")
        revalidatePath("/dashboard/products")

    } catch (err) {
        return{
            ok:false,
            message: err.message,
        };
        
    }
    redirect("/dashboard/products")
}