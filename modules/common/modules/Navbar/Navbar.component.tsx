import Link from "next/link";
import React from "react";

import { NavLink } from "../NavLink";
import navbarStyles from "./Navbar.module.css";

/**
 * The navbar component that allows the user to navigate the website
 *
 * @returns The common navbar component
 */
export const Navbar = (): JSX.Element => (
	<>
		<div
			className={`${navbarStyles.navbar} d-flex flex-row justify-content-between d-none d-md-flex`}
		>
			<NavLink
				className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
				href="aboutme"
			>
				<div>{"About Me"}</div>
			</NavLink>
			<NavLink
				className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
				href="contactinfo"
			>
				<div>{"Contact Info"}</div>
			</NavLink>
			<NavLink
				className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
				href="languages"
			>
				<div>{"Languages"}</div>
			</NavLink>
			<NavLink
				className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
				href="projects"
			>
				<div>{"Projects"}</div>
			</NavLink>
			<NavLink
				className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
				href="school"
			>
				<div>{"School"}</div>
			</NavLink>
			<NavLink
				className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
				href="workhistory"
			>
				<div>{"Work History"}</div>
			</NavLink>
		</div>
		<div
			className={`d-md-none d-flex flex-row justify-content-around ${navbarStyles.navbar} `}
		>
			<Link
				className={`p-1 rounded-circle mx-1 text-dark ${navbarStyles.navbar_link_icon}`}
				href="aboutme"
			>
				<i className="fa-solid fa-user fa-sm" />
			</Link>
			<Link
				className={`p-1 rounded-pill mx-1 text-dark ${navbarStyles.navbar_link_icon}`}
				href="contactinfo"
			>
				<i className="fa-solid fa-phone fa-sm" />
			</Link>
			<Link
				className={`p-1 rounded-pill mx-1 text-dark ${navbarStyles.navbar_link_icon}`}
				href="languages"
			>
				<i className="fa-solid fa-computer fa-sm" />
			</Link>
			<Link
				className={`p-1 rounded-pill mx-1 text-dark ${navbarStyles.navbar_link_icon}`}
				href="projects"
			>
				<i className="fa-solid fa-briefcase fa-sm" />
			</Link>
			<Link
				className={`p-1 rounded-pill mx-1 text-dark ${navbarStyles.navbar_link_icon}`}
				href="school"
			>
				<i className="fa-solid fa-school fa-sm" />
			</Link>
			<Link
				className={`p-1 rounded-pill mx-1 text-dark ${navbarStyles.navbar_link_icon}`}
				href="workhistory"
			>
				<i className="fa-solid fa-building fa-sm" />
			</Link>
		</div>
	</>
);
