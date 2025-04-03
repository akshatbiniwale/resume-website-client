import {
	FaReact,
	FaHtml5,
	FaCss3,
	FaNodeJs,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import {
	VscVscode,
	VscCommentUnresolved,
	VscTerminalPowershell,
} from "react-icons/vsc";
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";
import {
	FaDatabase,
	FaPython,
	FaPeopleCarry,
	FaLightbulb,
	FaUsers,
	FaClock,
	FaBrain,
} from "react-icons/fa";
import {
	SiPostgresql,
	SiTailwindcss,
	SiJavascript,
	SiRedux,
	SiNumpy,
	SiPandas,
	SiCplusplus,
} from "react-icons/si";
import autoxcell from "../assets/images/autoxcell.png";
import connectplus from "../assets/images/connectplus.png";
import strings from "../assets/images/strings.png";
import mealforall from "../assets/images/mealforall.png";
import aican from "../assets/images/aican.png"

export const MENU_LINKS = [
	{ id: "01", label: "Home", offset: -100, to: "hero" },
	{ id: "02", label: "Skills", offset: -80, to: "skills" },
	{ id: "03", label: "About Me", offset: -80, to: "about" },
	{ id: "04", label: "Projects", offset: -80, to: "projects" },
	{ id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
	{ id: "01", count: "1", label: "Years of \nExperience" },
	{ id: "02", count: "35+", label: "Automations \nImplemented" },
	{ id: "03", count: "4", label: "Projects \nBuilt" },
	{ id: "04", count: "320+", label: "Users \nImpacted" },
];

export const SKILL_TABS = [
	{ id: "01", label: "All", value: "all" },
	{ id: "02", label: "Frontend", value: "frontend" },
	{ id: "03", label: "Backend", value: "backend" },
	{ id: "04", label: "Tools", value: "tools" },
	{ id: "05", label: "Skills", value: "soft-skills" },
];

export const SKILLS = [
	{
		id: "01",
		icon: FaReact,
		skill: "React JS",
		type: "frontend",
		description:
			"Built multiple full-stack applications using React. Focused on component-based architecture, state management, and responsive UI using Tailwind CSS.",
		progress: 85,
	},
	{
		id: "02",
		icon: FaNodeJs,
		skill: "Node.js",
		type: "backend",
		description:
			"Developed scalable APIs with Node.js and Express. Integrated RESTful services and optimized backend performance.",
		progress: 80,
	},
	{
		id: "03",
		icon: SiMongodb,
		skill: "MongoDB",
		type: "backend",
		description:
			"Designed and managed NoSQL databases for efficient data storage. Used Mongoose for schema validation and data modeling.",
		progress: 75,
	},
	{
		id: "04",
		icon: SiMysql,
		skill: "MySQL",
		type: "backend",
		description:
			"Worked extensively with relational databases. Optimized queries and managed data using MySQL and PostgreSQL.",
		progress: 70,
	},
	{
		id: "05",
		icon: SiPostgresql,
		skill: "PostgreSQL",
		type: "backend",
		description:
			"Used PostgreSQL in full-stack applications, ensuring data integrity and performance tuning.",
		progress: 65,
	},
	{
		id: "06",
		icon: SiTailwindcss,
		skill: "Tailwind CSS",
		type: "frontend",
		description:
			"Created responsive and visually appealing UI using Tailwind. Improved development speed with utility-first CSS.",
		progress: 85,
	},
	{
		id: "07",
		icon: SiJavascript,
		skill: "JavaScript",
		type: "backend",
		description:
			"Proficient in JavaScript ES6+. Built interactive web applications, handled asynchronous operations, and optimized performance.",
		progress: 90,
	},
	{
		id: "08",
		icon: SiRedux,
		skill: "Redux Toolkit",
		type: "frontend",
		description:
			"Managed global state efficiently in React applications. Implemented Redux Toolkit for predictable state updates.",
		progress: 70,
	},
	{
		id: "09",
		icon: FaPython,
		skill: "Python",
		type: "backend",
		description:
			"Worked on data analysis and automation tasks using Python. Used libraries like NumPy and Pandas for data manipulation.",
		progress: 65,
	},
	{
		id: "10",
		icon: SiNumpy,
		skill: "NumPy",
		type: "tools",
		description:
			"Used NumPy for numerical computing and efficient array operations in data analysis projects.",
		progress: 60,
	},
	{
		id: "11",
		icon: SiPandas,
		skill: "Pandas",
		type: "tools",
		description:
			"Utilized Pandas for data cleaning, manipulation, and analysis in analytics projects.",
		progress: 60,
	},
	{
		id: "12",
		icon: SiCplusplus,
		skill: "C++",
		type: "backend",
		description:
			"Strong understanding of C++ for DSA. Solved problems on various competitive coding platforms.",
		progress: 85,
	},
	{
		id: "13",
		icon: FaPeopleCarry,
		skill: "Communication",
		type: "soft-skills",
		description:
			"Effectively convey ideas, actively listen, and collaborate with teams to ensure clarity and efficiency.",
		progress: 90,
	},
	{
		id: "14",
		icon: FaLightbulb,
		skill: "Problem-Solving",
		type: "soft-skills",
		description:
			"Analytical thinking and creativity in approaching challenges, optimizing workflows, and improving efficiency.",
		progress: 85,
	},
	{
		id: "15",
		icon: FaUsers,
		skill: "Teamwork",
		type: "soft-skills",
		description:
			"Experience working in cross-functional teams, fostering collaboration, and achieving shared goals.",
		progress: 90,
	},
	{
		id: "16",
		icon: FaClock,
		skill: "Time Management",
		type: "soft-skills",
		description:
			"Prioritizing tasks effectively to meet deadlines and ensure maximum productivity.",
		progress: 80,
	},
	{
		id: "17",
		icon: FaBrain,
		skill: "Adaptability",
		type: "soft-skills",
		description:
			"Quickly learning new technologies, adjusting to changing requirements, and staying flexible in problem-solving.",
		progress: 85,
	},
];

export const ABOUT_ME = {
	content: "write something about me over here...",
	socialLinks: [
		{ id: "01", label: "LinkedIn", icon: FaLinkedin, link: "#" },
		{ id: "02", label: "GitHub", icon: FaLinkedin, link: "#" },
	],
	email: "akshatbiniwale@gmail.com",
	phone: "+91 7506961794",
	website: "https://www.linkedin.com/in/akshatbiniwale/",
};

export const PROJECTS = [
	{
		id: 1,
		title: "AutoXCell",
		image: autoxcell,
		tags: ["MERN Stack", "Python", "Machine Learning"],
		description:
			"An examination cell automation system that automates seat allocation, scheduling, and grade management with role-based access.",
		link: "https://github.com/akshatbiniwale/client-ecas",
	},
	{
		id: 2,
		title: "Strings - Blog Website",
		image: strings,
		tags: ["MERN Stack"],
		description:
			"A responsive blog site where users can write, edit, and manage posts. Features rich text editing, comments, and a search function.",
		link: "https://github.com/akshatbiniwale/summer-projects/tree/blog-app",
	},
	{
		id: 3,
		title: "Connect+ - Video Conferencing App",
		image: connectplus,
		tags: ["WebRTC", "JavaScript", "Node.js"],
		description:
			"A real-time video conferencing app with messaging, screen sharing, and camera/mic toggling for seamless communication.",
		link: "https://github.com/akshatbiniwale/summer-projects/tree/video-conferencing-app",
	},
	{
		id: 4,
		title: "MealForAll",
		image: mealforall,
		tags: ["MERN Stack"],
		description:
			"A platform that connects NGOs with organizations that have surplus food. Won 3rd place at a hackathon for its impact.",
		link: "https://github.com/akshatbiniwale/MealForAll",
	},
	{
		id: 5,
		title: "Production Line Tracking System",
		image: aican,
		tags: ["React", "Node.js", "PostgreSQL"],
		description:
			"Developed for AICAN, this system allows seamless inventory check-in/out with QR codes and RFID scanning for accurate tracking.",
	},
];
