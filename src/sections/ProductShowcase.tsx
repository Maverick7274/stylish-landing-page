"use client";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Leaf from "@/assets/leaf.svg";
import Target from "@/assets/target.svg";
import Lock from "@/assets/lock.svg";
import Bell from "@/assets/bell.svg";
import ArrowIcon from "@/assets/arrow-right.svg";

const features = [
	{
		icon: <Leaf />,
		title: "Integration ecosystem",
		description: "Track your progress and motivate your everyday.",
		buttonText: "Learn more",
	},
	{
		icon: <Target />,
		title: "Goal setting and tracking",
		description: "Set and track goals with manageable task breakdowns.",
		buttonText: "Learn more",
	},
	{
		icon: <Lock />,
		title: "Secure data encryption",
		description: "Ensure your data's safety with top-tier encryption.",
		buttonText: "Learn more",
	},
	{
		icon: <Bell />,
		title: "Customizable Notifications",
		description: "Get alerts on tasks and deadlines that matter the most.",
		buttonText: "Learn more",
	},
];

export const ProductShowcase = () => {
	const sectionRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

	return (
		<section
			ref={sectionRef}
			className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
		>
			<div className="container">
				<div className="section-heading">
					<div className="flex justify-center">
						<div className="tag">Boost your productivity</div>
					</div>
					<h2 className="section-title mt-5">
						A more effective way to track progress
					</h2>
					<p className="section-description mt-5">
						Effortlessly turn your ideas into fully functional,
						responsive, website in just minutes with this template.
					</p>
				</div>
				<div className="relative">
					<Image
						src={productImage}
						alt="Product Image"
						className="mt-10"
					/>
					<motion.img
						src={pyramidImage.src}
						alt="Pyramid Image"
						width={262}
						height={262}
						className="hidden md:flex absolute -right-36 -top-32"
						style={{ translateY }}
					/>
					<motion.img
						src={tubeImage.src}
						alt="Tube Image"
						width={248}
						height={248}
						className="hidden md:flex absolute -left-36 -bottom-24"
						style={{ translateY }}
					/>
				</div>
			</div>
			<div className="container mt-10">
				<div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-between items-center">
					{features.map((feature, index) => (
						<div key={index} className="flex flex-col gap-2 p-3">
							{feature.icon}
							<h3 className="text-md tracking-tight font-bold">
								{feature.title}
							</h3>
							<p className="tracking-tighter">{feature.description}</p>
							<div className="flex justify-start">
							<button className="btn-text flex items-center justify-center gap-1">
								<span>{feature.buttonText}</span>
								<ArrowIcon className="w-5 h-5" />
							</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
