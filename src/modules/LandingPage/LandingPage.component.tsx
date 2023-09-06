import Head from "next/head";
import React from "react";

import { Divider } from "../common/modules/Divider";
import styles from "./LandingPage.module.css";
import { LandingPageLink } from "./LandingPageLink/LandingPageLink";
import { NameSection } from "./NameSection";

/**
 * The base landing page, which will display all the options for where the user can navigate
 */
export const LandingPage = (): JSX.Element => (
    <>
        <Head>
            <meta
                content="homepage, personal website, cameron thacker, full-stack developer"
                name="keywords"
            />
            <meta
                content="Personal website about full-stack developer Cameron Thacker, who goes to the University of Delaware"
                name="description"
            />
            <meta content="EN" name="language" />
            <meta content="Cameron Thacker" name="author" />
            <title>{"Home Page"}</title>
        </Head>
        <div
            className={`d-flex flex-column w-100 justify-content-around align-items-center ${styles.landing_page}`}
        >
            <NameSection />
            <Divider />
            <div className={styles.bottom_section}>
                <div className={styles.landing_section}>
                    <div className={styles.landing_section_header}>
                        {"Work"}
                    </div>
                    <div className={styles.landing_section_content}>
                        <LandingPageLink
                            content="Projects"
                            href="projects"
                            icon="briefcase"
                            iconAnimation="bounce"
                            iconSize="xl"
                        />
                        <LandingPageLink
                            content="Work History"
                            href="workhistory"
                            icon="building"
                            iconAnimation="bounce"
                            iconSize="xl"
                        />
                    </div>
                </div>
                <div className={styles.landing_section}>
                    <div className={styles.landing_section_header}>
                        {"Studies"}
                    </div>
                    <div className={styles.landing_section_content}>
                        <LandingPageLink
                            content="School"
                            href="school"
                            icon="school"
                            iconAnimation="bounce"
                            iconSize="xl"
                        />
                    </div>
                </div>
                <div className={styles.landing_section}>
                    <div className={styles.landing_section_header}>
                        {"Personal"}
                    </div>
                    <div className={styles.landing_section_content}>
                        <LandingPageLink
                            content="About Me"
                            href="aboutme"
                            icon="user"
                            iconAnimation="bounce"
                            iconSize="xl"
                        />
                        <LandingPageLink
                            content="Contact Info"
                            href="contactinfo"
                            icon="phone"
                            iconAnimation="shake"
                            iconSize="xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
);
