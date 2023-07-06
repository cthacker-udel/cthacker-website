/* eslint-disable no-magic-numbers -- disabled */
import Link from "next/link";
import React from "react";

import { NavLink } from "../NavLink";
import styles from "./Navbar.module.css";

/**
 * The navbar component that allows the user to navigate the website
 *
 * @returns The common navbar component
 */
export const Navbar = (): JSX.Element => (
    <>
        <div
            className={`${styles.navbar} d-flex flex-row justify-content-between d-none d-md-flex ${styles.navbar_link_cancel_anim}`}
            id="navbar"
        >
            <NavLink
                className={`p-1 w-100 text-center mx-1 text-decoration-none text-dark ${styles.navbar_link}`}
                href="aboutme"
                id="navbar_link"
                onMouseLeave={(
                    event: React.MouseEvent<HTMLAnchorElement>,
                ): void => {
                    const { target } = event;
                    const convertedTarget = target as HTMLAnchorElement;

                    convertedTarget.className = `${convertedTarget.className} ${styles.reverse_hover}`;
                    setTimeout(() => {
                        convertedTarget.className =
                            convertedTarget.className.replace(
                                styles.reverse_hover,
                                "",
                            );
                    }, 1000);
                }}
                title="About Me"
            >
                <div className={styles.navbar_link_div}>{"About Me"}</div>
            </NavLink>
            <NavLink
                className={`p-1 w-100 text-center mx-1 text-decoration-none text-dark ${styles.navbar_link}`}
                href="contactinfo"
                id="navbar_link"
                onMouseLeave={(
                    event: React.MouseEvent<HTMLAnchorElement>,
                ): void => {
                    const { target } = event;
                    const convertedTarget = target as HTMLAnchorElement;
                    convertedTarget.className = `${convertedTarget.className} ${styles.reverse_hover}`;
                    setTimeout(() => {
                        convertedTarget.className =
                            convertedTarget.className.replace(
                                styles.reverse_hover,
                                "",
                            );
                    }, 1000);
                }}
                title="Contact Info"
            >
                <div className={styles.navbar_link_div}>{"Contact Info"}</div>
            </NavLink>
            <NavLink
                className={`p-1 w-100 text-center mx-1 text-decoration-none text-dark ${styles.navbar_link}`}
                href="languages"
                id="navbar_link"
                onMouseLeave={(
                    event: React.MouseEvent<HTMLAnchorElement>,
                ): void => {
                    const { target } = event;
                    const convertedTarget = target as HTMLAnchorElement;
                    convertedTarget.className = `${convertedTarget.className} ${styles.reverse_hover}`;
                    setTimeout(() => {
                        convertedTarget.className =
                            convertedTarget.className.replace(
                                styles.reverse_hover,
                                "",
                            );
                    }, 1000);
                }}
                title="Languages"
            >
                <div className={styles.navbar_link_div}>{"Languages"}</div>
            </NavLink>
            <NavLink
                className={`p-1 w-100 text-center mx-1 text-decoration-none text-dark ${styles.navbar_link}`}
                href="projects"
                id="navbar_link"
                onMouseLeave={(
                    event: React.MouseEvent<HTMLAnchorElement>,
                ): void => {
                    const { target } = event;
                    const convertedTarget = target as HTMLAnchorElement;
                    convertedTarget.className = `${convertedTarget.className} ${styles.reverse_hover}`;
                    setTimeout(() => {
                        convertedTarget.className =
                            convertedTarget.className.replace(
                                styles.reverse_hover,
                                "",
                            );
                    }, 1000);
                }}
                title="Projects"
            >
                <div className={styles.navbar_link_div}>{"Projects"}</div>
            </NavLink>
            <NavLink
                className={`p-1 w-100 text-center mx-1 text-decoration-none text-dark ${styles.navbar_link}`}
                href="school"
                id="navbar_link"
                onMouseLeave={(
                    event: React.MouseEvent<HTMLAnchorElement>,
                ): void => {
                    const { target } = event;
                    const convertedTarget = target as HTMLAnchorElement;
                    convertedTarget.className = `${convertedTarget.className} ${styles.reverse_hover}`;
                    setTimeout(() => {
                        convertedTarget.className =
                            convertedTarget.className.replace(
                                styles.reverse_hover,
                                "",
                            );
                    }, 1000);
                }}
                title="School"
            >
                <div className={styles.navbar_link_div}>{"School"}</div>
            </NavLink>
            <NavLink
                className={`p-1 w-100 text-center rounded-pill mx-1 text-decoration-none text-dark ${styles.navbar_link}`}
                href="workhistory"
                id="navbar_link"
                onMouseLeave={(
                    event: React.MouseEvent<HTMLAnchorElement>,
                ): void => {
                    const { target } = event;
                    const convertedTarget = target as HTMLAnchorElement;
                    convertedTarget.className = `${convertedTarget.className} ${styles.reverse_hover}`;
                    setTimeout(() => {
                        convertedTarget.className =
                            convertedTarget.className.replace(
                                styles.reverse_hover,
                                "",
                            );
                    }, 1000);
                }}
                title="Work History"
            >
                <div className={styles.navbar_link_div}>{"Work History"}</div>
            </NavLink>
        </div>
        <div
            className={`d-md-none d-flex flex-row justify-content-around ${styles.navbar} `}
        >
            <Link
                className={`p-1 rounded-circle mx-1 text-dark ${styles.navbar_link_icon}`}
                href="aboutme"
                title="About Me"
            >
                <i className="fa-solid fa-user fa-sm" />
            </Link>
            <Link
                className={`p-1 rounded-pill mx-1 text-dark ${styles.navbar_link_icon}`}
                href="contactinfo"
                title="Contact Info"
            >
                <i className="fa-solid fa-phone fa-sm" />
            </Link>
            <Link
                className={`p-1 rounded-pill mx-1 text-dark ${styles.navbar_link_icon}`}
                href="languages"
                title="Languages"
            >
                <i className="fa-solid fa-computer fa-sm" />
            </Link>
            <Link
                className={`p-1 rounded-pill mx-1 text-dark ${styles.navbar_link_icon}`}
                href="projects"
                title="Projects"
            >
                <i className="fa-solid fa-briefcase fa-sm" />
            </Link>
            <Link
                className={`p-1 rounded-pill mx-1 text-dark ${styles.navbar_link_icon}`}
                href="school"
                title="School"
            >
                <i className="fa-solid fa-school fa-sm" />
            </Link>
            <Link
                className={`p-1 rounded-pill mx-1 text-dark ${styles.navbar_link_icon}`}
                href="workhistory"
                title="Work History"
            >
                <i className="fa-solid fa-building fa-sm" />
            </Link>
        </div>
    </>
);
