
import { montserratsubrayada, roboto } from "@/helpers/fonts";
import "../global.scss";



export const metadata = {
	title:{
		template: " %s | Cosmo Shop",
		default: "Cosmo Shop"

	},
	description: "High-Quality and Cheap Products",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${roboto.variable} ${montserratsubrayada.variable}h-100`}>
			<body
				className={`${roboto.className} d-flex flex-column justify-content-between h-100`}
			>
				{children}
			</body>
		</html>
	);
}
