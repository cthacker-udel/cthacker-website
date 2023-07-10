import Link from "next/link";
import React from "react";

/**
 * Work History section, which contains a list of all the jobs held previously and currently
 *
 * @returns The work history section of the landing page
 */
export const WorkHistorySection = (): JSX.Element => {
    const [isHovering, setIsHovering] = React.useState<boolean>(false);
    /**
     * Toggles the hover state
     *
     * @returns void
     */
    const toggleHover = (): void => {
        setIsHovering(!isHovering);
    };
    return (
        <div className="d-flex flex-row justify-content-center w-100">
            <i
                className={`fa-solid fa-building my-auto fa-xl ${
                    isHovering && "fa-bounce"
                }`}
            />
            <Link className="text-decoration-none" href="workhistory">
                <div
                    className="fs-4 ms-3 section_link"
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                >
                    {"Work History"}
                </div>
            </Link>
        </div>
    );
};
