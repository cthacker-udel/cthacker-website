import React from "react";

import navbarStyles from "./Navbar.module.css";

/**
 * The navbar component that allows the user to navigate the website
 *
 * @returns The common navbar component
 */
export const Navbar = (): JSX.Element => {
	return <div className={`${navbarStyles.navbar}`}>Navbar</div>;
};
