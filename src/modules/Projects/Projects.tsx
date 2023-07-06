/* eslint-disable no-extra-boolean-cast -- disabled */
/* eslint-disable node/no-process-env -- disabled */
import Head from "next/head";
import React from "react";
import { Form } from "react-bootstrap";
import { Key } from "ts-key-enum";

import { useRepos } from "@/hooks/useRepos";
import { BasicLayout } from "@/modules/common";

import type { Repo } from "./helpers";
import styles from "./Projects.module.css";
import { Repository } from "./Repository";

const allRepositoryQuerySelector = "#repository";

/**
 * The projects page, which will detail ongoing projects, as well as old ones.
 *
 * @returns The projects page
 */
const Projects = (): JSX.Element => {
    const { repos } = useRepos();

    const [searchQuery, setSearchQuery] = React.useState<string>("");
    // eslint-disable-next-line no-unused-vars -- disabled
    const [currentlySelectedRepository, setCurrentlySelectedRepository] =
        React.useState<number>(-1);

    const changeSearchQuery = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const { target } = event;
            if (Boolean(target)) {
                const { value } = target;
                setSearchQuery(value);
                const allRepositories = document.querySelectorAll(
                    allRepositoryQuerySelector,
                );
                if (allRepositories.length > 0) {
                    const matchingRepoNames: number[] = [];
                    let ind = 0;
                    for (const eachRepo of allRepositories) {
                        const { reponame } = (eachRepo as HTMLDivElement)
                            .dataset;
                        if (
                            value.length > 0 &&
                            reponame
                                ?.toLowerCase()
                                .startsWith(value.toLowerCase())
                        ) {
                            matchingRepoNames.push(ind);
                        }
                        ind += 1;
                    }
                    if (matchingRepoNames.length > 0) {
                        allRepositories[matchingRepoNames[0]].scrollIntoView({
                            behavior: "smooth",
                        });
                        allRepositories[matchingRepoNames[0]].animate(
                            [
                                { border: "1px solid rgba(0, 0, 0, 0.25)" },
                                { border: "1px solid rgba(0, 0, 255, .5)" },
                                { border: "1px solid rgba(0, 0, 0, 0.25)" },
                            ],
                            {
                                duration: 2000,
                                easing: "ease-in-out",
                                fill: "forwards",
                            },
                        );
                        (
                            allRepositories[matchingRepoNames[0]] as HTMLElement
                        ).className += ` ${styles.currently_selected}`;
                        setCurrentlySelectedRepository(
                            (oldSelectedRepository) => {
                                if (oldSelectedRepository === -1) {
                                    return matchingRepoNames[0];
                                }
                                const convertedElement = allRepositories[
                                    oldSelectedRepository
                                ] as HTMLElement;
                                convertedElement.className =
                                    convertedElement.className.replace(
                                        ` ${styles.currently_selected}`,
                                        "",
                                    );
                                return matchingRepoNames[0];
                            },
                        );
                    } else {
                        setCurrentlySelectedRepository(
                            (oldSelectedRepository) => {
                                const convertedElement = allRepositories[
                                    oldSelectedRepository
                                ] as HTMLElement;
                                convertedElement.className =
                                    convertedElement.className.replace(
                                        ` ${styles.currently_selected}`,
                                        "",
                                    );
                                return -1;
                            },
                        );
                    }
                }
            }
        },
        [],
    );

    const keyPressedInput = React.useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            const { key } = event;
            if (key === Key.Escape) {
                setSearchQuery("");
                const allRepositories = document.querySelectorAll(
                    allRepositoryQuerySelector,
                );
                if (allRepositories.length > 0) {
                    allRepositories[0].scrollIntoView({ behavior: "smooth" });
                }
            }
        },
        [],
    );

    return (
        <>
            <Head>
                <title>{"Cameron Thacker's Projects"}</title>
            </Head>
            <BasicLayout>
                <div className={styles.repo_layout}>
                    <div className={styles.repo_multiselect}>
                        <Form.Control
                            className={styles.repo_search}
                            onChange={changeSearchQuery}
                            onKeyDown={keyPressedInput}
                            placeholder="Name"
                            type="text"
                            value={searchQuery}
                        />
                    </div>
                    <div className={styles.repo_display}>
                        {repos.map((eachRepo: Repo) => (
                            <Repository key={eachRepo.id} {...eachRepo} />
                        ))}
                    </div>
                </div>
            </BasicLayout>
        </>
    );
};

export { Projects };
