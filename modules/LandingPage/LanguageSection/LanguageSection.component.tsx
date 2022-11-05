import React from "react";

/**
 * The landing section component of the landing page
 *
 * @returns The language section component of the landing page
 */
export const LanguageSection = (): JSX.Element => (
	<div className="d-flex flex-row w-100 justify-content-center">
		<i className="fa-solid fa-computer fa-xl my-auto fa-bounce" />
		<div className="fs-4 ms-3">{"Languages"}</div>
	</div>
);
