import React from "react";

/**
 * The landing section component of the landing page
 *
 * @returns The language section component of the landing page
 */
export const LanguageSection = (): JSX.Element => {
	const [isHovering, setIsHovering] = React.useState<boolean>(false);

	/**
	 * Toggles the hover state
	 */
	const toggleHover = (): void => {
		setIsHovering(!isHovering);
	};
	return (
		<div className="d-flex flex-row w-100 justify-content-center">
			<i
				className={`fa-solid fa-computer fa-xl my-auto ${
					isHovering && "fa-bounce"
				}`}
			/>
			<div
				className="fs-4 ms-3 section_link"
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
			>
				{"Languages"}
			</div>
		</div>
	);
};
