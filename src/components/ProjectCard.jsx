import React from "react";

const ProjectCard = ({ link, imgUrl, title, tags }) => {
	return (
		<div className="h-full bg-white rounded-xl overflow-hidden shadow-md mx-2">
			<a href={link}>
				<img
					src={imgUrl}
					alt={title}
					className="w-full h-72 md:h-80 object-fill"
				/>
			</a>

			<div className="px-4 py-5">
				<a href={link}>
					<h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
						{title}
					</h3>
				</a>

				<div className="flex flex-wrap gap-2 mt-2">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="text-xs text-blue-700 bg-blue-300 px-3 py-1 rounded"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
