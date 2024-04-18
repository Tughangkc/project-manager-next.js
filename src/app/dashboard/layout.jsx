import DashboardHeader from "@/components/dashboard-header";
import { Container  } from "react-bootstrap";

export const metadata ={
	title: 'Dashboard',
	description: "About our services, products and services"
}

const DashboardLayout = ({ children }) => {
	return (
		<>
			<DashboardHeader />
			<Container className="flex-grow-1">
				{children}
			</Container>
		</>
	);
};

export default DashboardLayout;
