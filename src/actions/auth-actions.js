"use server";
import { signIn } from "@/auth";
import {
    convertFormDataToJSON,
    transformYupErrors,
} from "@/helpers/form-validation";
import { AuthError } from "next-auth";
import * as Yup from "yup";
const FormSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
});
export const signInWithCredentials = async (prevState, formData) => {
    console.log(formData);
    const fields = convertFormDataToJSON(formData);
    try {
        FormSchema.validateSync(fields, { abortEarly: false });
        await signIn("credentials", fields);
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
            return transformYupErrors(err.inner);
        } else if (err instanceof AuthError) {
            return {
                ok: false,
                message: "Authentication failed",
                errors: null,
            };
        }
        // signIn methodu basarili oldugunda ortaya bir NEXT_REDIRECT firlatir.
        // Kodlarimiz try catch icinde oldugu icin bu firlatilan redirection islemi calismaz, hata gibi yakalanir
        // Bu sebeple alttaki throw err ile yakalanan hata tekrar firlatilmaktadir
        throw err;
    }
};
export const signInWithSocial = async (formData) => {
    const provider = formData.get("provider");
    try {
        await signIn(provider);
    } catch (err) {
        if (err instanceof AuthError) {
            return {
                ok: false,
                message: "Authentication failed",
                errors: null,
            };
        }
        // signIn methodu basarili oldugunda ortaya bir NEXT_REDIRECT firlatir.
        // Kodlarimiz try catch icinde oldugu icin bu firlatilan redirection islemi calismaz, hata gibi yakalanir
        // Bu sebeple alttaki throw err ile yakalanan hata tekrar firlatilmaktadir
        throw err;
    }
};