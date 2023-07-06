import Link from "next/link";
import React from "react";

/**
 * The school section component of the landing page
 *
 * @returns The school section component
 */
export const SchoolSection = (): JSX.Element => {
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
				className={`fa-solid fa-school fa-xl my-auto ${
					isHovering && "fa-bounce"
				}`}
			/>
			<Link className="text-decoration-none" href="school">
				<div
					className="fs-4 ms-3 section_link"
					onMouseEnter={toggleHover}
					onMouseLeave={toggleHover}
				>
					{"School"}
				</div>
			</Link>
		</div>
	);
};
