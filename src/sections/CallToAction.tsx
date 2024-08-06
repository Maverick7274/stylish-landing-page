"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const CallToAction = () => {

	const ctaRef = useRef(null);

	const {scrollYProgress} = useScroll(
		{
			target: ctaRef,
			offset: ["start end", "end start"],
		}
	);


	const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
	
	return (
		<section ref={ctaRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
			<div className="container">
				<div className="section-heading relative">
					<div className="section-title mt-5">
						Sign up for free today
					</div>
					<p className=" section-description mt-5">
						Celebrate the joy of accomplishment with an app designed
						to track your progress and motivate your efforts.
					</p>
					<motion.img
						src={starImage.src}
						alt="Star"
						width={360}
						height={360}
						className="absolute -left-[350px] -top-[137px] sm:flex hidden"
						style={{translateY}}
					/>
                    <motion.img
                        src={springImage.src}
                        alt="Spring"
                        width={360}
                        height={360}
                        className="absolute -right-[331px] -top-[19px] sm:flex hidden"
						style={{translateY}}
                    />
				</div>
				<div className="flex gap-2 mt-10 justify-center items-center">
					<button className="btn btn-primary">
						Get started for free
					</button>
					<button className="flex btn btn-text gap-1">
						<span>Learn More</span>
						<ArrowIcon className="w-5 h-5" />
					</button>
				</div>
			</div>
		</section>
	);
};
