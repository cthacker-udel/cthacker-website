import Head from "next/head";
import React from "react";

import { AboutMeSection } from "./AboutMeSection";
import { ContactInfoSection } from "./ContactInfoSection";
import landingPageStyles from "./LandingPage.module.css";
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
				content="Cameron Thacker's personal website landing page"
				name="description"
			/>
			<meta
				content="homepage, personal website, cameron thacker, full-stack developer"
				name="keywords"
			/>
			<meta content="Personal website about full-stack developer Cameron Thacker, who goes to the University of Delaware" />
			<meta content="EN" name="language" />
			<meta content="Cameron Thacker" name="author" />
			<title>{"Home Page"}</title>
		</Head>
		<div
			className={`d-flex flex-column w-100 justify-content-around align-items-center ${landingPageStyles.landing_page}`}
		>
			<NameSection />
			<div className="border border-dark w-100" />
			<ProjectSection />
			<WorkHistorySection />
			<SchoolSection />
			<LanguageSection />
			<AboutMeSection />
			<ContactInfoSection />
		</div>
	</>
);
