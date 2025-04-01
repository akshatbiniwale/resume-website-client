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

export const MENU_LINKS = [
	{ id: "01", label: "Home", offset: -100, to: "hero" },
	{ id: "02", label: "Skills", offset: -80, to: "sills" },
	{ id: "03", label: "About Me", offset: -80, to: "about" },
	{ id: "04", label: "Projects", offset: -80, to: "projects" },
	{ id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
	{ id: "01", count: "1", label: "Years of \nExperience" },
	{ id: "02", count: "2", label: "Certifications \nEarned" },
	{ id: "03", count: "3", label: "Projects \ncompleted" },
	{ id: "04", count: "4", label: "Happy \nClients" },
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
		description: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
		progress: 35,
	},
	{
		id: "02",
		icon: FaReact,
		skill: "React JS",
		type: "frontend",
		description: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
		progress: 40,
	},
	{
		id: "03",
		icon: FaReact,
		skill: "React JS",
		type: "frontend",
		description: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
		progress: 45,
	},
	{
		id: "04",
		icon: FaReact,
		skill: "React JS",
		type: "frontend",
		description: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah",
		progress: 50,
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
		title: "ECAS",
		image: "hi",
		tags: ["React", "Express.js", "MongoDB", "Node.js"],
	},
	{
		id: 2,
		title: "ECAS",
		image: "hi",
		tags: ["React", "Express.js", "MongoDB", "Node.js"],
	},
	{
		id: 3,
		title: "ECAS",
		image: "hi",
		tags: ["React", "Express.js", "MongoDB", "Node.js"],
	},
	{
		id: 4,
		title: "ECAS",
		image: "hi",
		tags: ["React", "Express.js", "MongoDB", "Node.js"],
	},
];
