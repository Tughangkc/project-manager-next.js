"use client";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import menuItems from "@/helpers/data/main-menu.json";
import { usePathname } from "next/navigation";
import { navLink } from "./header.module.scss";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import {useSession} from "next-auth/react"

const Header = () => {
	const pathname = usePathname();
	const {data: session} = useSession();

	console.log("session", session)
	return (
		<Navbar
			expand="lg"
			className="bg-dark"
			data-bs-theme="dark"
			collapseOnSelect
		>
			<Container className=" align-items-center ">
				<Navbar.Brand href="/" as={Link}>
					<Image
						src={logo}
						alt="Cosmo shop"
						className="img-fluid"
						style={{ height: "30px", width: "auto" }}
					/>
				</Navbar.Brand>

				{session ? <Link href="/dashboard" className="order-lg-2 nav-link text-light">
					Dashboard
				</Link> : <Link href="/api/auth/signin" className="order-lg-2 nav-link text-light">
					Login
				</Link> }
				

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						{menuItems.map((item) => (
							<Nav.Link
								className={navLink}
								href={item.url}
								as={Link}
								key={item.id}
								active={pathname === item.url}
							>
								{item.title}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
