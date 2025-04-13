import React from "react";
import PROFILE_PIC from "../assets/images/PROFILE_PIC.jpg";
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";

const Hero = () => {
	return (
		<section id="hero" className="container mx-auto px-8">
			<div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
				<div className="order-2 lg:order-1 items-center lg:text-left mt-16 lg:mt-0">
					<h3 className="text-xl lg:text-2xl font-medium text-black">
						👋 Hi, I'm Akshat Biniwale
					</h3>
					<h1 className="w-full lg:w-[560px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] bg-gradient-primary bg-clip-text text-transparent mt-5">
						From data to development; solving real-world problems
						with code.
					</h1>

					<p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
						I'm a final-year Computer Engineering student currently
						interning at WorkIndia, where I help build scalable
						automations and deliver insightful analysis. With
						experience in full-stack development and tools like
						MERN, Django, SQL, and C++, I’m now focused on
						transitioning into a full-time Software Engineering
						role.
					</p>

					<div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
						<button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
							View My Work
						</button>
						<button className="flex-1 md:flex-none action-btn btn-scale-anim">
							<a
								href="/resume@akshatbiniwale.pdf"
								download="resume@akshatbiniwale.pdf"
							>
								Download Resume
							</a>
						</button>
					</div>
				</div>
				<div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-blue-200 rounded-3xl relative order-1 lg:order-2">
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
			<div className="grid grid-cols-1 md:grid-cols-2 xl:flex gap-12 mt-16 md:mt-24">
				{STATS.map((item) => (
					<StatInfoCard
						key={item.id}
						count={item.count}
						label={item.label}
					/>
				))}
			</div>
		</section>
	);
};

export default Hero;
