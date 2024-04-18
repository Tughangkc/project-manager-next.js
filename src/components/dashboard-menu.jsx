"use client"
import Link from "next/link";
import { Nav } from "react-bootstrap";


const DashboardMenu = () => {
	return (
		<Nav className="flex-column">
			<Nav.Link href="/dashboard" as={Link}>
				Home
			</Nav.Link>
			<Nav.Link href="/dashboard/profile" as={Link}>
				Profile
			</Nav.Link>
			<Nav.Link href="/dashboard/products" as={Link}>
				Products
			</Nav.Link>
		</Nav>
	);
};

export default DashboardMenu;
