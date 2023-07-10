/* eslint-disable @typescript-eslint/indent -- prettier/eslint conflict */
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { type ReactNode } from "react";

import navLinkStyles from "./NavLink.module.css";

type NavLinkProperties = LinkProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        exact?: boolean;
        children: ReactNode;
    };

/**
 * NavLink component, used for active styling for the navbar
 */
export const NavLink = ({
    exact,
    ...properties
}: NavLinkProperties): JSX.Element => {
    const { children, className, href } = properties;
    const { pathname } = useRouter();
    const isActive = exact
        ? pathname === href
        : pathname.startsWith(`/${href}`);

    if (isActive) {
        properties.className += ` ${navLinkStyles.active}`;
    } else {
        properties.className = className?.replaceAll(" active", "");
    }

    return (
        <Link {...properties} href={href}>
            {children}
        </Link>
    );
};
