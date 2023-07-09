import React, { type ReactNode } from "react";

import { Navbar } from "../Navbar";
import basicLayoutStyles from "./BasicLayout.module.css";

type BasicLayoutProperties = {
    children: ReactNode;
    cssOverride?: string;
};

/**
 * The basic layout component, which houses the template for how all pages should look
 *
 * @param properties - The props of the layout, takes in children because it acts as a HOC component
 * @param properties.children - The html wrapped by this component
 * @param properties.cssOverride - Overrides the CSS in the layout component
 * @returns The basic layout component
 */
export const BasicLayout = ({
    children,
    cssOverride,
}: BasicLayoutProperties): JSX.Element => (
    <div
        className={`${basicLayoutStyles.basic_layout} ${cssOverride ?? ""}`}
        id="basic_layout"
    >
        <Navbar />
        {children}
    </div>
);
