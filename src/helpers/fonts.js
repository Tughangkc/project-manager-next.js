import {Roboto, Montserrat_Subrayada} from "next/font/google"

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-roboto"
})

const montserratsubrayada = Montserrat_Subrayada({
    subsets: ["latin"],
    weight: ['700'],
    variable: "--font-montserrat-subrayda"
})

export {roboto,montserratsubrayada};