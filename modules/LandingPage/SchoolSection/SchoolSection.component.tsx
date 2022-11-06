import React from "react";

/**
 * The school section component of the landing page
 *
 * @returns The school section component
 */
export const SchoolSection = (): JSX.Element => (
	<div className="d-flex flex-row w-100 justify-content-center">
		<i className="fa-solid fa-school fa-xl my-auto fa-fade" />
		<div className="fs-4 ms-3 section_link">{"School"}</div>
	</div>
);
