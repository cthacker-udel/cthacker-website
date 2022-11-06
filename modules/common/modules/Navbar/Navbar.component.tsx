import Link from "next/link";
import React from "react";

import navbarStyles from "./Navbar.module.css";

/**
 * The navbar component that allows the user to navigate the website
 *
 * @returns The common navbar component
 */
export const Navbar = (): JSX.Element => (
	<div
		className={`${navbarStyles.navbar} d-flex flex-row justify-content-between`}
	>
		<Link
			className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
			href="aboutme"
		>
			<div>{"About Me"}</div>
		</Link>
		<Link
			className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
			href="contactinfo"
		>
			<div>{"Contact Info"}</div>
		</Link>
		<Link
			className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
			href="contactinfo"
		>
			<div>{"Languages"}</div>
		</Link>
		<Link
			className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
			href="languages"
		>
			<div>{"Projects"}</div>
		</Link>
		<Link
			className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
			href="school"
		>
			<div>{"School"}</div>
		</Link>
		<Link
			className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${navbarStyles.navbar_link}`}
			href="workhistory"
		>
			<div>{"Work History"}</div>
		</Link>
	</div>
);
