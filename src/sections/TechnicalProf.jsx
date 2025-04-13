/* eslint-disable */
import React, { useState } from "react";
import { SKILL_TABS, SKILLS } from "../utils/data";
import Tabs from "../components/Tabs";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

const TechnicalProf = () => {
	const [tabData, setTabData] = useState(SKILLS);
	const [activeTab, setActiveTab] = useState("all");

	const handleTabValueChange = (value) => {
		setActiveTab(value);
		if (value === "all") {
			setTabData(SKILLS);
		} else {
			const filtered = SKILLS.filter((skill) => skill.type === value);
			setTabData(filtered);
		}
	};

	return (
		<section id="skills" className="bg-background mt-20">
			<div className="container mx-auto p-10">
				<div className="w-full lg:w-[60vw] mx-auto">
					<h4 className="section-title">Technical Proficiency</h4>
					<p className="text-center text-sm mt-4 text-gray-600 leading-6">
						Here’s a quick look at the technologies and tools I’ve
						worked with across full-stack development, data, and
						scripting. Filter by category to view specific areas of
						expertise.
					</p>

					<Tabs
						tabList={SKILL_TABS}
						activeTab={activeTab}
						onChange={handleTabValueChange}
					/>
				</div>

				<motion.div
					key={activeTab}
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0, y: 10 },
						visible: {
							opacity: 1,
							y: 0,
							transition: { staggerChildren: 0.1 },
						},
					}}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]"
				>
					{tabData.map((skill) => (
						<motion.div
							key={skill.id}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<SkillCard
								icon={
									<skill.icon className="w-6 h-6 text-blue-500" />
								}
								skillName={skill.skill}
								description={skill.description}
								progress={skill.progress}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default TechnicalProf;
