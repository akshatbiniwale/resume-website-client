import React from "react";

const StatInfoCard = ({ count, label }) => {
	return (
		<div className="flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#d1e5ff] to-[#ffffff] rounded-[14px] p-5 items-center">
			<h4 className="text-4xl md:text-5xl font-medium text-blue-600">
				{count}
			</h4>
			<div className="flex items-center md:ml-0 ml-auto">
				<p className="text-sm md:text-[16px] font-normal text-black leading-6 whitespace-nowrap md:whitespace-pre-line">
					{label}
				</p>
			</div>
		</div>
	);
};


export default StatInfoCard;
