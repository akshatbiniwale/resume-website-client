import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PROFILE_PIC from "../assets/images/PROFILE_PIC.jpg";
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";
import { Link } from "react-scroll";

const Hero = () => {
	const [showCaptchaModal, setShowCaptchaModal] = useState(false);
	const recaptchaRef = useRef(null);

	const handleCaptcha = (value) => {
		if (value) {
			const link = document.createElement("a");
			link.href = "/resume@akshatbiniwale.pdf";
			link.download = "resume@akshatbiniwale.pdf";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			setShowCaptchaModal(false);
		}
	};

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

					<div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 md:gap-8 mt-6">
						<Link to="projects" smooth className="w-full lg:w-auto">
							<button className="action-btn-outline btn-scale-anim w-full lg:w-auto">
								View My Work
							</button>
						</Link>

						<button
							onClick={() => setShowCaptchaModal(true)}
							className="action-btn btn-scale-anim w-full lg:w-auto"
						>
							Download Resume
						</button>
					</div>
				</div>

				<div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-blue-200 rounded-3xl relative order-1 lg:order-2">
					<img
						src={PROFILE_PIC}
						alt="Profile Pic"
						className="profile-pic rounded-3xl"
					/>
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

			{/* reCAPTCHA Modal */}
			{showCaptchaModal && (
				<div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
					<div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md text-center flex flex-col items-center">
						<h2 className="text-lg font-semibold mb-4">
							Verify you're human
						</h2>
						<div className="flex justify-center">
							<ReCAPTCHA
								sitekey={`${
									import.meta.env.VITE_RECAPTCHA_SITE_KEY
								}`}
								onChange={handleCaptcha}
								ref={recaptchaRef}
							/>
						</div>
						<button
							onClick={() => setShowCaptchaModal(false)}
							className="mt-4 text-sm text-gray-600 hover:text-gray-800"
						>
							Cancel
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Hero;