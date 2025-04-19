import React, { useState, useRef } from "react";
import ContactInfoCard from "./../components/ContactInfoCard";
import { IoMdMail } from "react-icons/io";
import { ABOUT_ME } from "./../utils/data";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";

const ContactMe = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");
	const [verified, setVerified] = useState(false);
	const [showCaptchaModal, setShowCaptchaModal] = useState(false);
	const recaptchaRef = useRef();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");

		try {
			const response = await fetch(
				`${import.meta.env.VITE_BACKEND_URL}/contact`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			const data = await response.json();
			if (data.success) {
				setStatus("Message sent successfully!");
				setFormData({ name: "", email: "", message: "" });
			} else {
				setStatus("Failed to send message.");
			}
		} catch (err) {
			setStatus("Error sending message.");
			console.error(err);
		}
	};

	const handleCaptcha = (value) => {
		if (value) {
			setVerified(true);
			setShowCaptchaModal(false);
		}
	};

	return (
		<section id="contact">
			<div className="container mx-auto px-10">
				<div className="w-full lg:w-[60vw] mx-auto">
					<h4 className="section-title">Contact Me</h4>
					<p className="text-sm text-center mt-4 leading-6">
						Let’s get in touch! Drop your query or feedback below.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
					<div className="relative">
						{/* Contact Cards */}
						<div className="space-y-4">
							<ContactInfoCard
								icon={<IoMdMail />}
								text={ABOUT_ME.email}
								type={"email"}
							/>
							<ContactInfoCard
								icon={<IoPhonePortraitOutline />}
								text={ABOUT_ME.phone}
								type={"phone"}
							/>
							<ContactInfoCard
								icon={<MdOutlineWeb />}
								text={ABOUT_ME.linkedin}
								type={"linkedin"}
							/>
						</div>

						{/* Blur Overlay */}
						{!verified && (
							<div className="absolute inset-0 backdrop-blur-sm bg-white bg-opacity-70 z-10 flex items-center justify-center rounded-lg">
								<button
									onClick={() => setShowCaptchaModal(true)}
									className="action-btn btn-scale-anim"
								>
									View Contact Info
								</button>
							</div>
						)}
					</div>

					<div>
						<h5 className="md:hidden text-blue-600 text-lg font-medium mt-4 pb-5">
							Contact Form
						</h5>
						<form className="flex flex-col" onSubmit={handleSubmit}>
							<input
								type="text"
								name="name"
								placeholder="Full Name"
								className="input-box"
								autoComplete="off"
								value={formData.name}
								onChange={handleChange}
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Email Address"
								className="input-box"
								autoComplete="off"
								value={formData.email}
								onChange={handleChange}
								required
							/>
							<textarea
								name="message"
								placeholder="Message"
								rows={3}
								className="input-box"
								autoComplete="off"
								value={formData.message}
								onChange={handleChange}
								required
							/>
							<button
								type="submit"
								className="action-btn btn-scale-anim"
							>
								SUBMIT
							</button>

							{status && (
								<p className="text-xs text-center mt-2 text-gray-600">
									{status}
								</p>
							)}
						</form>
					</div>
				</div>
			</div>

			{/* CAPTCHA Modal */}
			{showCaptchaModal && (
				<div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
					<div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md text-center">
						<h2 className="text-lg font-semibold mb-4">
							Verify you're human
						</h2>
						<ReCAPTCHA
							className="flex justify-center"
							sitekey={`${
								import.meta.env.VITE_RECAPTCHA_SITE_KEY
							}`}
							onChange={handleCaptcha}
							ref={recaptchaRef}
						/>
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

export default ContactMe;
