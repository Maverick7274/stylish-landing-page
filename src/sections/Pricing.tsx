"use client";

import CheckIcon from "@/assets/check.svg";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const pricingTiers = [
	{
		title: "Free",
		monthlyPrice: 0,
		buttonText: "Get started for free",
		popular: false,
		inverse: false,
		features: [
			"Up to 5 project members",
			"Unlimited tasks and projects",
			"2GB storage",
			"Integrations",
			"Basic support",
		],
	},
	{
		title: "Pro",
		monthlyPrice: 9,
		buttonText: "Sign up now",
		popular: true,
		inverse: true,
		features: [
			"Up to 50 project members",
			"Unlimited tasks and projects",
			"50GB storage",
			"Integrations",
			"Priority support",
			"Advanced support",
			"Export support",
		],
	},
	{
		title: "Business",
		monthlyPrice: 19,
		buttonText: "Sign up now",
		popular: false,
		inverse: false,
		features: [
			"Up to 5 project members",
			"Unlimited tasks and projects",
			"200GB storage",
			"Integrations",
			"Dedicated account manager",
			"Custom fields",
			"Advanced analytics",
			"Export capabilities",
			"API access",
			"Advanced security features",
		],
	},
];

export const Pricing = () => {
	return (
		<section className="py-24 bg-white">
			<div className="container">
				<div className="section-heading">
					<h2 className="section-title">Pricing</h2>
					<p className="section-description mt-5">
						Free forever. Upgrade for unlimited tasks, better
						security, and exclusive features.
					</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-6 items-center md:items-end justify-center mt-10">
				{pricingTiers.map(
					(
						{
							title,
							monthlyPrice,
							buttonText,
							popular,
							inverse,
							features,
						},
						index
					) => (
						<div
							key={index}
							className={cn(
								"card",
								inverse === true &&
									"border-black bg-black text-white/60"
							)}
						>
							<div className="flex justify-between">
								<h3
									className={cn(
										"text-lg font-bold text-black/50",
										inverse === true && "text-white/60"
									)}
								>
									{title}
								</h3>
								{popular === true && (
									<div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
										<motion.span
											animate={{
												backgroundPositionX: "100%",
											}}
											transition={{
												repeat: Infinity,
												duration: 1,
												ease: "linear",
												repeatType: "loop",
											}}
										 className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCb92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCb92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium">
											Popular
										</motion.span>
									</div>
								)}
							</div>
							<div className="flex items-baseline gap-1 my-[30px]">
								<span className="text-4xl font-blod tracking-tighter leading-none">
									${monthlyPrice}
								</span>
								<span className="tracking-tight font-bold text-black/50">
									/month
								</span>
							</div>
							<button
								className={cn(
									"btn btn-primary w-full",
									inverse === true && "bg-white text-black"
								)}
							>
								{buttonText}
							</button>
							<ul className="flex flex-col gap-5 mt-8">
								{features.map((feature) => (
									<li className="text-sm flex items-center gap-4">
										<CheckIcon className="w-6 h-6" />
										{feature}
									</li>
								))}
							</ul>
						</div>
					)
				)}
			</div>
		</section>
	);
};
