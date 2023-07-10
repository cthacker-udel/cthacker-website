import Link from "next/link";
import React from "react";

/**
 * The about me section of the landing page
 */
export const AboutMeSection = (): JSX.Element => {
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
                className={`fa-solid fa-user my-auto fa-xl ${
                    isHovering && "fa-bounce"
                }`}
            />
            <Link className="text-decoration-none" href="aboutme">
                <div
                    className="fs-4 ms-3 section_link"
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                >
                    {"About Me"}
                </div>
            </Link>
        </div>
    );
};
