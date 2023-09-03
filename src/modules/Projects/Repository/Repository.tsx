/* eslint-disable node/no-unpublished-import -- disabled */
/* eslint-disable no-restricted-globals -- disabled */
/* eslint-disable no-alert -- disabled */
import React from "react";
import { Key } from "ts-key-enum";

import type { CustomRepoEvent } from "@/@types/repo";
import { openRepositoryLink } from "@/helpers/repo";

import type { Repo } from "../helpers";
import otherStyles from "../Projects.module.css";
import styles from "./Repository.module.css";

type RepositoryProperties = Repo & { readonly tab: number };

/**
 * Represents a repository created by the user
 *
 * @param props - The properties of the component, contain all the fields of the `Repo` type
 * @returns The repository
 */
export const Repository = ({
    tab,
    ...rest
}: RepositoryProperties): JSX.Element => {
    /**
     * Callback that fires when the mouse hovers over the repository element
     * @param event - The mouse event that fires when the mouse hovers over the repository element
     */
    const mouseEnter = React.useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const { target } = event;
            if (target !== undefined) {
                const convertedTarget = target as HTMLDivElement;
                if (
                    !convertedTarget.className.includes(
                        ` ${otherStyles.currently_selected}`,
                    )
                ) {
                    const event_ = new CustomEvent<CustomRepoEvent>(
                        "updateSelection",
                        {
                            bubbles: true,
                            detail: { repoName: rest.name },
                        },
                    );
                    convertedTarget.dispatchEvent(event_);
                }
            }
        },
        [rest.name],
    );

    /**
     * The callback that fires when the mouse leaves (is not hovered over the element)
     * @param event - The mouse event that fires when the mouse "leaves" the element
     */
    const mouseLeave = React.useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            const { target } = event;
            if (target !== undefined) {
                const convertedTarget = target as HTMLDivElement;
                if (
                    convertedTarget.className.includes(
                        ` ${otherStyles.currently_selected}`,
                    )
                ) {
                    const event_ = new CustomEvent<CustomRepoEvent>(
                        "deselectSelection",
                        {
                            bubbles: true,
                            detail: { repoName: rest.name },
                        },
                    );
                    convertedTarget.dispatchEvent(event_);
                }
            }
        },
        [rest.name],
    );

    /**
     * When the keyboard is pressed while the focus is on a repository element
     * @param event - The keyboard event that is fired when the repository has focus, and the keyboard is pressed
     */
    const onKeyDown = React.useCallback((event: React.KeyboardEvent) => {
        const { key, target } = event;
        if (
            document !== undefined &&
            document.activeElement === target &&
            key === Key.Enter
        ) {
            openRepositoryLink(target as HTMLDivElement);
        }
    }, []);

    return (
        <div
            className={styles.repository}
            data-reponame={rest.name}
            data-repourl={rest.html_url}
            id="repository"
            onClick={(): void => {
                const openInNewTab = confirm(`Open ${rest.name} in new tab?`);
                if (openInNewTab) {
                    window.open(rest.html_url, "_newtab");
                }
            }}
            onKeyDown={onKeyDown}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            role="menuitem"
            tabIndex={tab}
        >
            <div className={styles.name}>{rest.name}</div>
            <div className={styles.date}>
                {new Date(rest.created_at ?? Date.now()).toLocaleString()}
            </div>
        </div>
    );
};
