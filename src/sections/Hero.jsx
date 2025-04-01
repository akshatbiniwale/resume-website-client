import React from "react";
import PROFILE_PIC from "../assets/images/PROFILE_PIC.jpg";

const Hero = () => {
	return (
		<section id="hero" className="container mx-auto px-8">
			<div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
				<div className="order-2 lg:order-1 items-center lg:text-left mt-16 lg:mt-0">
					<h3 className="text-xl lg:text-2xl font-medium text-black">
						👋 Hi, I'm Akshat Biniwale
					</h3>
					<h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] bg-gradient-primary bg-clip-text text-transparent">
						Building something something which i will update later
					</h1>

					<p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
						I am this that etc etc
					</p>

					<div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
						<button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
							View My Work
						</button>
						<button className="flex-1 md:flex-none action-btn btn-scale-anim">
							Download Resume
						</button>
					</div>
				</div>
				<div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
					<img
						src={PROFILE_PIC}
						alt="Profile Pic"
						className="profile-pic rounded-3xl"
					/>

					{/* <img
						src=""
						alt="Icon 1"
						className="icon-img left-10 bottom-20 rotate-[1.75deg]"
					/> */}
				</div>
			</div>
		</section>
	);
};

export default Hero;
