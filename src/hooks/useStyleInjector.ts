/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion -- disabled, is necessary, since the type is `Element` and not `HTMLElement` */
import React from "react";

type Query = {
    cssQuery: string;
    className?: string;
    classNames?: string[];
    style?: Partial<CSSStyleDeclaration>;
};

/**
 * Allows for the user to specify a list of injections to take place on each page, rather
 * then have individual hooks for specific elements, allows for lots of flexibility when customizing pages.
 *
 * @param props - The properties of the useStyleInjector hook
 * @param props.queries - The queries that contain the cssQuery used to find the element via `querySelector` method, and the styles to apply
 */
export const useStyleInjector = (queries: Query[]): void => {
    React.useEffect(() => {
        for (const eachQuery of queries) {
            const foundElement = document.querySelector(
                eachQuery.cssQuery,
            ) as HTMLElement | null;
            if (foundElement !== null) {
                const { className, classNames, style } = eachQuery;

                if (style !== undefined) {
                    for (const eachStyle of Object.keys(style)) {
                        foundElement.style[eachStyle as unknown as number] = (
                            style as { [key: string]: string }
                        )[eachStyle as unknown as number];
                    }
                }
                if (className !== undefined) {
                    foundElement.className += ` ${className}`;
                }
                if (classNames !== undefined && classNames.length > 0) {
                    for (const eachClassName of classNames) {
                        foundElement.className += ` ${eachClassName}`;
                    }
                }
            }
        }
    }, [queries]);
};
