import React from "react";

const ContactInfoCard = ({ icon, text, type }) => {
	return (
		<div className="flex items-center gap-5 bg-blue-50 rounded border border-blue-100 px-4 py-3 mb-5">
			<div className="w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-primary rounded-lg">
				{icon}
			</div>

			{["email", "phone", "linkedin"].includes(type) && (
				<a
					href={
						type === "email"
							? `mailto:${text}`
							: type === "phone"
							? `tel:${text}`
							: text
					}
					target={type === "linkedin" ? "_blank" : "_self"}
					rel={type === "linkedin" ? "noopener noreferrer" : ""}
					className="text-blue-600 text-xs md:text-sm"
				>
					{type === "linkedin"
						? "linkedin.com/in/akshatbiniwale/"
						: text}
				</a>
			)}
		</div>
	);
};

export default ContactInfoCard;
