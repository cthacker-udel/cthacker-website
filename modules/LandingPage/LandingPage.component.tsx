import "./LandingPage.module.css";

import React from "react";

import { ContactInfoSection } from "./ContactInfoSection";
import { LanguageSection } from "./LanguageSection";
import { NameSection } from "./NameSection";
import { ProjectSection } from "./ProjectSection";
import { SchoolSection } from "./SchoolSection";
import { WorkHistorySection } from "./WorkHistorySection";

/**
 * The base landing page, which will display all the options for where the user can navigate
 */
export const LandingPage = (): JSX.Element => (
	<div className="d-flex flex-column w-100 h-100 justify-content-around align-items-center landing_page">
		<NameSection />
		<div className="border w-100" />
		<ProjectSection />
		<WorkHistorySection />
		<SchoolSection />
		<LanguageSection />
		<ContactInfoSection />
	</div>
);
