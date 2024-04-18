"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import slider from "@/helpers/data/slider.json";
import Image from "next/image";
import styles from "./slider.module.scss"

const Slider = () => {
	return (
		<Carousel>
			{slider.map((item) => (
				<Carousel.Item key={item.id}>
					<div className={styles.slide}>
                        <Image src={`/images/${item.fileName}`} fill alt="..." style={{ objectFit: "cover"}}/>
                    </div>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Slider;
