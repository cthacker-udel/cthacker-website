import Link from "next/link";
import React, { type ReactNode } from "react";

import styles from "./LandingPageLink.module.css";

type IconSize = "sm" | "md" | "lg" | "xl" | "xxl";
type IconAnimation =
    | "beat"
    | "fade"
    | "beat-fade"
    | "bounce"
    | "flip"
    | "shake"
    | "spin";

type LandingPageLinkProperties = {
    readonly content: string | ReactNode;
    readonly contentCssOverride?: string;
    readonly href: string;
    readonly icon?: string;
    readonly iconAnimation: IconAnimation;
    readonly iconCssOverride?: string;
    readonly iconSize: IconSize;
    readonly linkCssOverride?: string;
    readonly rootCssOverride?: string;
};

/**
 * Represents a link nested in the landing page
 *
 * @param props - The properties of the landing page link
 * @param props.content - The content being displayed by the link
 * @param props.contentCssOverride - (optional) The css class used to override the content of the link
 * @param props.href - The link we are redirecting the user to
 * @param props.icon - The icon we are utilizing in the link
 * @param props.iconAnimation - The animation we are applying to the icon displaying next to the link
 * @param props.iconCssOverride - (optional) The css class we are providing to the icon element
 * @param props.iconSize - (optional, defaults to sm) The size of the icon
 * @param props.linkCssOverride - (optional) The css class we are providing to the link
 * @param props.rootCssOverride - (optional) The css class we are providing to the root element
 * @returns The landing page link, formatted with the correct options
 */
export const LandingPageLink = ({
    content,
    contentCssOverride,
    href,
    icon,
    iconAnimation,
    iconCssOverride,
    iconSize = "sm",
    linkCssOverride,
    rootCssOverride,
}: LandingPageLinkProperties): JSX.Element => {
    const [isHovering, setIsHovering] = React.useState<boolean>(false);

    const toggleHover = React.useCallback((): void => {
        setIsHovering(!isHovering);
    }, [isHovering]);

    return (
        <div
            className={`${styles.landing_page_link_container} ${
                rootCssOverride ?? ""
            }`}
        >
            {icon && (
                <i
                    className={`fa-solid fa-${icon} fa-${iconSize} ${
                        isHovering && `fa-${iconAnimation}`
                    } ${iconCssOverride ?? ""}`}
                />
            )}
            <Link
                className={`${styles.landing_page_link} ${
                    linkCssOverride ?? ""
                }`}
                href={href}
            >
                <div
                    className={`${styles.landing_page_link_content} ${
                        contentCssOverride ?? ""
                    }`}
                    id="section_link"
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                >
                    {content}
                </div>
            </Link>
        </div>
    );
};
