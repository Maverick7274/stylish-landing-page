"use client";

import cubeHelix from "../assets/cube-helix.png";
import cube from "../assets/cube.png";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
	{
		title: "Integration ecosystem",
		description:
			"Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
		imageSrc: cubeHelix.src,
	},
	{
		title: "Goal setting and tracking",
		description:
			"Define and track your goals, breaking down objectives into acheivable tasks, to keep your targets in sight.",
		imageSrc: cube.src,
	},
];

const FeatureCard = (props: {
	title: string;
	description: string;
	imageSrc: string;
}) => {
	return (
		<div className="card max-w-sm">
			<div className="flex flex-col items-center gap-4">
				<motion.img
					animate={{
						translateY: [-30, 30],
					}}
					transition={{
						repeat: Infinity,
						repeatType: "mirror",
						duration: 3,
						ease: "easeInOut",
					}}
					src={props.imageSrc}
					alt={props.title}
					width={320}
					height={320}
				/>
				<div className="text-center">
					<h3 className="section-title text-xl">{props.title}</h3>
					<p className="mt-4 text-sm text-[#010D3E]">
						{props.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export const EverythingYouNeed = () => {
	return (
		<section className="py-24 bg-white">
			<div className="container">
				<div className="section-heading">
					<div className="flex justify-center">
						<div className="tag">Everything you need</div>
					</div>
					<div className="section-title mt-5">
						Streamlined for easy management
					</div>
					<p className=" section-description mt-5">
						Enjoy customizable lists, team work tools, and smart
						tracking all in one place. Set tasks, get reminders, and
						see your progress simply and quickly.
					</p>
				</div>
			</div>
			<div className="flex justify-center mt-10">
				<div className="flex items-center justify-center md:flex-row flex-col gap-7">
					{features.map((feature, index) => (
						<FeatureCard key={index} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
};
