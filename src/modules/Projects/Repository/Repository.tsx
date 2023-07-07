/* eslint-disable no-restricted-globals -- disabled */
/* eslint-disable no-alert -- disabled */
import React from "react";

import { useRepoLanguages } from "@/hooks/useRepoLanguages";

import type { Repo } from "../helpers";
import otherStyles from "../Projects.module.css";
import styles from "./Repository.module.css";

type RepositoryProperties = Repo;

/**
 * Represents a repository created by the user
 *
 * @param props - The properties of the component, contain all the fields of the `Repo` type
 * @returns The repository
 */
export const Repository = ({ ...rest }: RepositoryProperties): JSX.Element => {
    const { languages } = useRepoLanguages(rest.owner, rest.name);

    const mouseEnter = React.useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            console.log("entering");
            const { target } = event;
            if (target !== undefined) {
                const convertedTarget = target as HTMLDivElement;
                if (
                    !convertedTarget.className.includes(
                        ` ${otherStyles.currently_selected}`,
                    )
                ) {
                    convertedTarget.className += ` ${otherStyles.currently_selected}`;
                }
            }
        },
        [],
    );

    const mouseLeave = React.useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            console.log("leaving");
            const { target } = event;
            if (target !== undefined) {
                const convertedTarget = target as HTMLDivElement;
                if (
                    convertedTarget.className.includes(
                        ` ${otherStyles.currently_selected}`,
                    )
                ) {
                    convertedTarget.className =
                        convertedTarget.className.replace(
                            ` ${otherStyles.currently_selected}`,
                            "",
                        );
                }
            }
        },
        [],
    );

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
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            <div className={styles.name}>{rest.name}</div>
            <div className={styles.date}>
                {new Date(rest.created_at ?? Date.now()).toLocaleString()}
            </div>
        </div>
    );
};
