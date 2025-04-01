import React, { useEffect } from "react";
import { useState } from "react";
import { MENU_LINKS } from "../utils/data";
import { Link } from "react-scroll";

const Navbar = () => {
	const [iSOpen, setISOpen] = useState(true);

	const toggleMenu = () => {
		setISOpen(!iSOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setISOpen(true);
			} else {
				setISOpen(false);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<nav className="container mx-auto sticky top-5 z-10">
			<div
				className="flex items-center justify-between rounded-full bg-white/25 border border-[#cce6fe] backdrop-blur-[10px]
            m-5 p-3 md:p-0"
			>
				{/* logo */}
				<img className="h-7 ml-6 -mb-1" src="#" alt="logo" />

				{/* hamburger icon visible only on small screen side */}
				<button
					className="block md:hidden text-[#333] mr-6 focus:outline-none"
					onClick={toggleMenu}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						{iSOpen ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						)}
					</svg>
				</button>

				{/* navigation links */}
				<ul className={`${iSOpen ? "flex" : "hidden"} menu-wrapper`}>
					{MENU_LINKS.map((item) => (
						<li key={item.id}>
							<Link
								activeClass="active"
								to={item.to}
								smooth
								spy
								offset={item.offset}
								className="menu-item pb-1"
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				{/* hire me */}
				<button className="hidden md:block h-12 text-[15px] font-medium text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105">
					Hire Me
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
