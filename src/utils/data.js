import {
	FaReact,
	FaHtml5,
	FaCss3,
	FaNodeJs,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaGithub,
	FaFileExcel,
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
	SiLeetcode,
} from "react-icons/si";
import autoxcell from "../assets/images/autoxcell.png";
import connectplus from "../assets/images/connectplus.png";
import strings from "../assets/images/strings.png";
import mealforall from "../assets/images/mealforall.png";
import aican from "../assets/images/aican.png";

export const MENU_LINKS = [
	{ id: "01", label: "Home", offset: -100, to: "hero" },
	{ id: "02", label: "Skills", offset: -80, to: "skills" },
	{ id: "03", label: "About Me", offset: -80, to: "about" },
	{ id: "04", label: "Projects", offset: -80, to: "projects" },
	{ id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
	{ id: "01", count: "1", label: "Year of \nExperience" },
	{ id: "02", count: "35+", label: "Automations \nImplemented" },
	{ id: "03", count: "4", label: "Projects \nBuilt" },
	{ id: "04", count: "320+", label: "End Users \nSupported" },
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
			"Built responsive UIs using component-based structure and Tailwind CSS.",
		progress: 85,
	},
	{
		id: "02",
		icon: FaNodeJs,
		skill: "Node.js",
		type: "backend",
		description:
			"Created scalable backend services using Express and RESTful APIs.",
		progress: 80,
	},
	{
		id: "03",
		icon: SiMongodb,
		skill: "MongoDB",
		type: "backend",
		description:
			"Designed schemas with Mongoose and managed NoSQL data efficiently.",
		progress: 75,
	},
	{
		id: "04",
		icon: SiMysql,
		skill: "MySQL",
		type: "backend",
		description:
			"Wrote optimized queries and handled relational data with MySQL.",
		progress: 70,
	},
	{
		id: "05",
		icon: SiPostgresql,
		skill: "PostgreSQL",
		type: "backend",
		description:
			"Utilized PostgreSQL for full-stack apps and performance tuning.",
		progress: 65,
	},
	{
		id: "06",
		icon: SiTailwindcss,
		skill: "Tailwind CSS",
		type: "frontend",
		description:
			"Styled applications quickly with utility-first CSS for responsive design.",
		progress: 85,
	},
	{
		id: "07",
		icon: SiJavascript,
		skill: "JavaScript",
		type: "backend",
		description:
			"Built interactive UIs, handled async ops, and DOM manipulation.",
		progress: 90,
	},
	{
		id: "08",
		icon: SiRedux,
		skill: "Redux Toolkit",
		type: "frontend",
		description:
			"Managed global state predictably in React projects using Redux Toolkit.",
		progress: 70,
	},
	{
		id: "09",
		icon: FaPython,
		skill: "Python",
		type: "backend",
		description:
			"Automated tasks and analyzed data using NumPy, Pandas, and SQL.",
		progress: 65,
	},
	{
		id: "10",
		icon: SiNumpy,
		skill: "NumPy",
		type: "tools",
		description:
			"Performed array-based computation and numerical operations in Python.",
		progress: 60,
	},
	{
		id: "11",
		icon: SiPandas,
		skill: "Pandas",
		type: "tools",
		description:
			"Cleaned, transformed, and analyzed data for insights and reporting.",
		progress: 60,
	},
	{
		id: "12",
		icon: SiCplusplus,
		skill: "C++",
		type: "backend",
		description:
			"Solved 250+ DSA problems and strengthened logic via CP platforms.",
		progress: 85,
	},
	{
		id: "13",
		icon: FaPeopleCarry,
		skill: "Communication",
		type: "soft-skills",
		description:
			"Clearly presented insights, collaborated with teams, and explained data logic.",
		progress: 90,
	},
	{
		id: "14",
		icon: FaLightbulb,
		skill: "Problem-Solving",
		type: "soft-skills",
		description:
			"Tackled complex issues using root cause analysis and automation.",
		progress: 85,
	},
	{
		id: "15",
		icon: FaUsers,
		skill: "Teamwork",
		type: "soft-skills",
		description:
			"Worked across 25+ teams, syncing goals with sales and data units.",
		progress: 90,
	},
	{
		id: "16",
		icon: FaClock,
		skill: "Time Management",
		type: "soft-skills",
		description:
			"Delivered timely automations and daily reports within tight deadlines.",
		progress: 80,
	},
	{
		id: "17",
		icon: FaBrain,
		skill: "Adaptability",
		type: "soft-skills",
		description:
			"Adapted to sales domain, picked up CRM logic and ops quickly.",
		progress: 85,
	},
	{
		id: "18",
		icon: SiMysql,
		skill: "SQL",
		type: "tools",
		description:
			"Wrote complex queries, performed joins, aggregations, and optimized scanning costs.",
		progress: 85,
	},
	{
		id: "19",
		icon: FaFileExcel,
		skill: "Excel / Google Sheets",
		type: "tools",
		description:
			"Created automated trackers, dashboards, and managed revenue data pipelines.",
		progress: 90,
	},
];

export const ABOUT_ME = {
	content:
		"Hi, I'm Akshat Biniwale, a Computer Engineering student at Sardar Patel Institute of Technology. I have a strong interest in problem-solving and software development, backed by hands-on experience in C++, JavaScript, and Python. \n\nI began my professional journey as a Full-Stack Developer intern at AICAN, where I contributed to building key product features. Later, I interned as a Data Analyst at WorkIndia, where I worked with SQL and automation to improve data processes and reporting efficiency. These roles gave me valuable insight into how both data and software contribute to solving real-world business problems. \n\nOver time, I realized my true passion lies in building software. Since then, I’ve focused on full-stack development, working with technologies like the MERN stack and Django. Through personal projects and continuous learning, I’ve developed a solid understanding of both frontend and backend systems. \n\nNow, I’m excited to step into a full-time Software Development Engineer role where I can apply my skills, build meaningful products, and continue learning from real-world challenges.",
	socialLinks: [
		{
			id: "01",
			label: "LinkedIn",
			icon: FaLinkedin,
			link: "https://www.linkedin.com/in/akshatbiniwale/",
		},
		{
			id: "02",
			label: "GitHub",
			icon: FaGithub,
			link: "https://github.com/akshatbiniwale",
		},
		{
			id: "03",
			label: "LeetCode",
			icon: SiLeetcode,
			link: "https://leetcode.com/u/akshatbiniwale/",
		},
		{
			id: "04",
			label: "Instagram",
			icon: FaInstagram,
			link: "https://www.instagram.com/akshatbiniwale_/",
		},
	],
	email: "akshatbiniwale@gmail.com",
	phone: "+91 7506961794",
	linkedin: "https://www.linkedin.com/in/akshatbiniwale/",
};

export const PROJECTS = [
	{
		id: 1,
		title: "AutoXCell",
		image: autoxcell,
		tags: [
			"MongoDB",
			"Express.js",
			"Node.js",
			"React.js",
			"Python",
			"Machine Learning",
		],
		description:
			"An examination cell automation system that automates seat allocation, scheduling, and grade management with role-based access.",
		link: "https://github.com/akshatbiniwale/client-ecas",
	},
	{
		id: 2,
		title: "Strings - Blog Website",
		image: strings,
		tags: ["MongoDB", "Express.js", "Node.js", "React.js"],
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
		tags: ["MongoDB", "Express.js", "Node.js", "React.js"],
		description:
			"A platform that connects NGOs with organizations that have surplus food. Won 3rd place at a hackathon for its impact.",
		link: "https://github.com/akshatbiniwale/MealForAll",
	},
	{
		id: 5,
		title: "Production Line Tracking System",
		image: aican,
		tags: ["Express.js", "React.js", "Node.js", "PostgreSQL"],
		description:
			"Developed for AICAN, this system allows seamless inventory check-in/out with QR codes and RFID scanning for accurate tracking.",
		link: "https://aican.in/",
	},
];
