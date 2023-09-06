import styles from "@/modules/Projects/Projects.module.css";

import { removeCurrentlySelectedClassName } from "./removeCurrentlySelectedClassName";

/**
 * Adds the currently selected class-name to the element (repo)
 *
 * @param element - The element to add the class name to
 * @param scroll - Whether to scroll the element into view as well
 */
export const addCurrentlySelectedClassName = (
    element: HTMLDivElement,
    scroll?: ScrollIntoViewOptions,
): void => {
    const { className } = element;
    if (className.includes(styles.currently_selected)) {
        removeCurrentlySelectedClassName(element);
    }

    element.className = `${className} ${styles.currently_selected}`;

    if (scroll !== undefined) {
        element.scrollIntoView(scroll);
    }
};
