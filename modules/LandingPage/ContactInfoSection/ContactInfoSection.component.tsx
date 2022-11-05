import React from "react";

/**
 * The contact info section of the landing page
 *
 * @returns The contact info section
 */
export const ContactInfoSection = (): JSX.Element => (
	<div className="d-flex flex-row justify-content-center w-100">
		<i className="fa-solid fa-xl fa-shake fa-phone my-auto" />
		<div className="fs-4 ms-3">{"Contact Info"}</div>
	</div>
);
