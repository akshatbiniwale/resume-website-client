import React, { useState } from "react";
import ContactInfoCard from "./../components/ContactInfoCard";
import { IoMdMail } from "react-icons/io";
import { ABOUT_ME } from "./../utils/data";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

const ContactMe = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");

		try {
			const response = await fetch("http://localhost:5000/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

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
					<div>
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
		</section>
	);
};

export default ContactMe;
