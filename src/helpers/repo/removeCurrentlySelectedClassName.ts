import styles from "@/modules/Projects/Projects.module.css";

/**
 * Takes the found element, and removes the currently selected class-name from it's current class-name
 *
 * @param element - The element to replace the className for
 */
export const removeCurrentlySelectedClassName = (
    element: HTMLDivElement,
): void => {
    element.className = element.className.replace(
        ` ${styles.currently_selected}`,
        "",
    );
};
