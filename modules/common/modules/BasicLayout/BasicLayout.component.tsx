import React, { type ReactNode } from "react";

import { Navbar } from "../Navbar";
import basicLayoutStyles from "./BasicLayout.module.css";

type BasicLayoutProperties = {
	children: ReactNode;
};

/**
 * The basic layout component, which houses the template for how all pages should look
 *
 * @param properties - The props of the layout, takes in children because it acts as a HOC component
 * @param properties.children - The html wrapped by this component
 * @returns The basic layout component
 */
export const BasicLayout = ({
	children,
}: BasicLayoutProperties): JSX.Element => (
	<div className={`${basicLayoutStyles.basic_layout}`}>
		<Navbar />
		{children}
	</div>
);
