import React from "react";

/**
 * Renders the project section of the landing page
 *
 * @returns The project section of the landing page
 */
export const ProjectSection = (): JSX.Element => (
	<div className="w-75 mx-auto d-flex flex-row justify-content-center">
		<i className="fa-solid fa-briefcase fa-beat my-auto fa-xl" />
		<div className="fs-4 ms-3 section_link">{"Projects"}</div>
	</div>
);
