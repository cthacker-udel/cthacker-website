import Link from "next/link";
import React from "react";

/**
 * Renders the project section of the landing page
 *
 * @returns The project section of the landing page
 */
export const ProjectSection = (): JSX.Element => {
    const [isHovering, setIsHovering] = React.useState<boolean>(false);
    /**
     * Toggles the hover state
     */
    const toggleHover = (): void => {
        setIsHovering(!isHovering);
    };
    return (
        <div className="w-75 mx-auto d-flex flex-row justify-content-center">
            <i
                className={`fa-solid fa-briefcase my-auto fa-xl ${
                    isHovering && "fa-bounce"
                }`}
            />
            <Link className="text-decoration-none" href="projects">
                <div
                    className="fs-4 ms-3 section_link"
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                >
                    {"Projects"}
                </div>
            </Link>
        </div>
    );
};
