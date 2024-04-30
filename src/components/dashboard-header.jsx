"use client";
import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import menuItems from "@/helpers/data/dashboard-menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";
import { signOut } from "next-auth/react";

const DashboardHeader = () => {
	const pathname = usePathname();
	const handleLogout = async() => {
		const answer = await Swal.fire({
			title: "Are you sure to logout?",
			showCancelButton: true,
			confirmButtonText: "Logout",
		});

		if (!answer.isConfirmed) return;

		signOut({callbackUrl: "/"});
	}
	

	return ( 
		<Navbar expand="none" className="bg-danger mb-3" collapseOnSelect>
			<Container fluid>
				<Navbar.Brand href="#">Product Manager</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-lg`}
					aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
							Product Manager
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							{menuItems.map((item) => (
								<Nav.Link
									key={item.id}
									href={item.url}
									as={Link}
									active={pathname === item.url}
								>
									{item.title}
								</Nav.Link>
							))}
							<Nav.Link onClick={handleLogout}>Logout</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default DashboardHeader;
