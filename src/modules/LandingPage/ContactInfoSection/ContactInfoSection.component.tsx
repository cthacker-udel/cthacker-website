import Link from "next/link";
import React from "react";

/**
 * The contact info section of the landing page
 *
 * @returns The contact info section
 */
export const ContactInfoSection = (): JSX.Element => {
	const [isHovering, setIsHovering] = React.useState<boolean>(false);
	/**
	 * Toggles the hovering state
	 */
	const toggleHover = (): void => {
		setIsHovering(!isHovering);
	};
	return (
		<div className="d-flex flex-row justify-content-center w-100">
			<i
				className={`fa-solid fa-xl fa-phone my-auto ${
					isHovering && "fa-shake"
				}`}
			/>
			<Link className="text-decoration-none" href="contactinfo">
				<div
					className="fs-4 ms-3 section_link"
					onMouseEnter={toggleHover}
					onMouseLeave={toggleHover}
				>
					{"Contact Info"}
				</div>
			</Link>
		</div>
	);
};
