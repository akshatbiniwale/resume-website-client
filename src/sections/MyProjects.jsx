import React, { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { PROJECTS } from "../utils/data";
import { IoIosArrowForward } from "react-icons/io";
import ProjectCard from "../components/ProjectCard";

const MyProjects = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
	});
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	const updateScrollButtons = useCallback(() => {
		if (emblaApi) {
			setCanScrollPrev(emblaApi.canScrollPrev());
			setCanScrollNext(emblaApi.canScrollNext());
		}
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		emblaApi.on("select", updateScrollButtons);
		updateScrollButtons();
	}, [emblaApi, updateScrollButtons]);

	return (
		<section id="projects" className="bg-background mt-14">
			<div className="container mx-auto px-8 md:px-10 py-10">
				<div className="w-full md:w-[60vw] mx-auto">
					<h4 className="section-title">Recent Projects</h4>

					<p className="text-sm text-center mt-4 leading-6">
						Here are some of the projects I've built to apply and
						improve my development skills. Each one reflects my
						interest in solving real-world problems using clean and
						efficient code.
					</p>
				</div>

				<div className="relative">
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex pt-14 pb-8">
							{PROJECTS.map((project) => (
								<div
									key={project.id}
									className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]"
								>
									<ProjectCard
										key={project.id}
										imgUrl={project.image}
										title={project.title}
										tags={project.tags}
										link={project.link}
									/>
								</div>
							))}
						</div>
					</div>

					{/* navigation buttons */}
					<button
						className={`arrow-btn -left-5 ${
							!canScrollPrev
								? "opacity-50 cursor-not-allowed"
								: ""
						}`}
						onClick={() => emblaApi && emblaApi.scrollPrev()}
						disabled={!canScrollPrev}
					>
						<IoIosArrowForward className="rotate-180" />
					</button>

					<button
						className={`arrow-btn -right-5 ${
							!canScrollPrev
								? "opacity-50 cursor-not-allowed"
								: ""
						}`}
						onClick={() => emblaApi && emblaApi.scrollNext()}
						disabled={!canScrollNext}
					>
						<IoIosArrowForward className="rotate-270" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default MyProjects;
