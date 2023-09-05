import Head from "next/head";
import React from "react";

import { Divider } from "../common/modules/Divider";
import { AboutMeSection } from "./AboutMeSection";
import { ContactInfoSection } from "./ContactInfoSection";
import styles from "./LandingPage.module.css";
import { LanguageSection } from "./LanguageSection";
import { NameSection } from "./NameSection";
import { ProjectSection } from "./ProjectSection";
import { SchoolSection } from "./SchoolSection";
import { WorkHistorySection } from "./WorkHistorySection";

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
                        <ProjectSection />
                        <WorkHistorySection />
                    </div>
                </div>
                <div className={styles.landing_section}>
                    <div className={styles.landing_section_header}>
                        {"Studies"}
                    </div>
                    <div className={styles.landing_section_content}>
                        <SchoolSection />
                        <LanguageSection />
                    </div>
                </div>
                <div className={styles.landing_section}>
                    <div className={styles.landing_section_header}>
                        {"Personal"}
                    </div>
                    <div className={styles.landing_section_content}>
                        <AboutMeSection />
                        <ContactInfoSection />
                    </div>
                </div>
            </div>
        </div>
    </>
);
