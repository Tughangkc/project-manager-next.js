import { wait } from "@/helpers/misc";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import natureImg from "../../../../public/images/nature.jpg";
import PageHeader from "@/components/page-header";

export const metadata ={
	title: 'About',
	description: "About our services, products and services"
}



const AboutPage = async () => {
	//await wait(5000)

	console.log("Static Rendering")

	return (
		<div>

			<PageHeader title="About Us"/>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<Image
				src="/images/landscape.jpg"
				width={400}
				height={300}
				alt="..."
			/>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<Image src="/images/iwatch.png" width={100} height={80} alt="..." />
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<Image src={natureImg} alt="..." className="img-fluid" />
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<Image
				src="https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				width="700"
				height="500"
				alt="..."
			/>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo...
			</p>
			<div
				style={{ position: "relative", width: "100%", height: "200px" }}
			>
				<Image
					src="/images/nature.jpg"
					alt="..."
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
				quia obcaecati omnis quasi. In officiis eligendi pariatur velit,
				culpa quaerat, optio ad animi deserunt odit repellendus,
				deleniti explicabo mollitia quo.
			</p>

			<Link href="/contact" scroll={false}>
				Go to contact page
			</Link>
			<br />
			<Link href="/products?id=23&catid=45&title=sdfsd+sdfs+sdf">
				Product
			</Link>
			<br />
			<Link
				href={{
					pathname: "/products",
					query: {
						id: 23,
						catid: 45,
						title: "sdfsd+sdfs+sdf",
					},
				}}
			>
				Product
			</Link>
		</div>
	);
};

export default AboutPage;
