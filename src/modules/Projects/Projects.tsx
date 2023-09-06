/* eslint-disable security/detect-object-injection -- not applying to indexing with pre-defined numbers */
/* eslint-disable node/no-unpublished-import -- disabled */
/* eslint-disable no-extra-boolean-cast -- disabled */
import Head from "next/head";
import React from "react";
import { Form } from "react-bootstrap";
import { Key } from "ts-key-enum";

import {
    addCurrentlySelectedClassName,
    calculateNewSelectedIndex,
    findRepoNameIndexes,
    mapReposToDivs,
    type MonthKeys,
    openRepositoryLink,
    removeCurrentlySelectedClassName,
    repoCountByMonth,
} from "@/helpers/repo";
import { useRepoLanguagesBulk } from "@/hooks/useRepoLanguagesBulk";
import { useRepos } from "@/hooks/useRepos";
import { BasicLayout } from "@/modules/common";

import type { Repo } from "./helpers";
import styles from "./Projects.module.css";
import { Repository } from "./Repository";
import { CodeCount } from "./Repository/CodeCount";
import { MonthCount } from "./Repository/MonthCount";

const allRepositoryQuerySelector = "#repository";

/**
 * The projects page, which will detail ongoing projects, as well as old ones.
 *
 * @returns The projects page
 */
const Projects = (): JSX.Element => {
    const { failed, isLoading, repos } = useRepos();
    const { languagesCount } = useRepoLanguagesBulk(
        !failed && !isLoading,
        repos,
    );

    const [searchQuery, setSearchQuery] = React.useState<string>("");
    const [currentlySelectedRepository, setCurrentlySelectedRepository] =
        React.useState<number>(-1);

    /**
     * Event that fires when the user inputs a search query, into the name search input
     * @param event - The event that fires when the user inputs a query into the search query
     */
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
                    const allDivRepositories = mapReposToDivs(allRepositories);
                    const matchingRepoIndexes: number[] = findRepoNameIndexes(
                        value,
                        allDivRepositories,
                        true,
                    );
                    setCurrentlySelectedRepository((oldSelectedRepository) => {
                        if (oldSelectedRepository === -1) {
                            return matchingRepoIndexes[0] ?? -1;
                        }

                        removeCurrentlySelectedClassName(
                            allDivRepositories[oldSelectedRepository],
                        );

                        return matchingRepoIndexes.length > 0
                            ? matchingRepoIndexes[0] ?? -1
                            : -1;
                    });
                }
            }
        },
        [],
    );

    /**
     * Fires when a user inputs keys within the **name search**
     * @param event - The event that fires when a user inputs keys into the name search input
     */
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

    /**
     * Fires when the user presses a key **anywhere** on the entire document
     * @param event - The event that fires when the user presses a key on the document
     */
    const keyPressedDocument = React.useCallback(
        (event: KeyboardEvent) => {
            const { key } = event;
            const allRepoNodes = document.querySelectorAll(
                allRepositoryQuerySelector,
            );
            if (allRepoNodes.length > 0) {
                const convertedNodes = mapReposToDivs(allRepoNodes);

                if (key === Key.Enter && currentlySelectedRepository >= 0) {
                    openRepositoryLink(
                        convertedNodes[currentlySelectedRepository],
                    );
                } else if (key === Key.ArrowDown || key === Key.ArrowUp) {
                    setCurrentlySelectedRepository((oldValue: number) => {
                        if (oldValue === -1) {
                            return key === Key.ArrowDown ? 0 : repos.length - 1;
                        }

                        removeCurrentlySelectedClassName(
                            convertedNodes[oldValue],
                        );

                        const newIndex = calculateNewSelectedIndex(
                            key,
                            repos.length,
                            oldValue,
                        );

                        addCurrentlySelectedClassName(
                            convertedNodes[newIndex],
                            { behavior: "smooth", block: "center" },
                        );
                        return newIndex;
                    });
                }
            }
        },
        [currentlySelectedRepository, repos.length],
    );

    /**
     * Fires when the user hovers their mouse over an repository element
     * @param event - The custom event that contains the repository name
     */
    const selectCurrentlySelectedByHover = React.useCallback(
        (event: Event) => {
            const { repoName: eventRepoName } = (event as CustomEvent).detail;
            const allRepositories = document.querySelectorAll(
                allRepositoryQuerySelector,
            );
            if (allRepositories.length > 0 && searchQuery.length === 0) {
                const convertedRepo = mapReposToDivs(allRepositories);
                let ind = 0;
                for (const eachRepository of convertedRepo) {
                    const { reponame: repoName } = eachRepository.dataset;
                    if (repoName === eventRepoName) {
                        addCurrentlySelectedClassName(eachRepository);
                        setCurrentlySelectedRepository(ind);
                        break;
                    }
                    ind += 1;
                }
            }
        },
        [searchQuery.length],
    );

    /**
     * Fires when the user's mouse leaves a repository element (leaves as in exits the boundary of the element)
     * @param event - The custom event that contains the repository name
     */
    const deselectCurrentlySelectedByHover = React.useCallback(
        (event: Event) => {
            const { target } = event;
            if (searchQuery.length === 0) {
                if (target !== undefined) {
                    const convertedTarget = target as HTMLDivElement;
                    removeCurrentlySelectedClassName(convertedTarget);
                }
                setCurrentlySelectedRepository(-1);
            }
        },
        [searchQuery.length],
    );

    /**
     * Adds and removes the event listeners for the document, those that fire on keydown, and the custom ones as well
     */
    React.useEffect(() => {
        if (document !== undefined) {
            document.addEventListener("keydown", keyPressedDocument);
            document.addEventListener(
                "updateSelection",
                selectCurrentlySelectedByHover,
            );
            document.addEventListener(
                "deselectSelection",
                deselectCurrentlySelectedByHover,
            );
        }

        return () => {
            document.removeEventListener("keydown", keyPressedDocument);
            document.removeEventListener(
                "updateSelection",
                selectCurrentlySelectedByHover,
            );
            document.removeEventListener(
                "deselectSelection",
                deselectCurrentlySelectedByHover,
            );
        };
    }, [
        keyPressedDocument,
        selectCurrentlySelectedByHover,
        deselectCurrentlySelectedByHover,
    ]);

    const repoMonthCount = repoCountByMonth(repos);

    return (
        <>
            <Head>
                <meta
                    content="homepage, personal website, cameron thacker, full-stack developer"
                    name="keywords"
                />
                <meta
                    content="Job history of full-stack developer Cameron Thacker"
                    name="description"
                />
                <meta content="EN" name="language" />
                <meta content="Cameron Thacker" name="author" />
                <title>{"Projects"}</title>
            </Head>
            <BasicLayout>
                <div className={styles.repo_layout}>
                    <div className={styles.repo_language_stats}>
                        {Object.keys(languagesCount).length > 0 && (
                            <>
                                <div
                                    className={
                                        styles.repo_language_stats_header
                                    }
                                >
                                    {"Lines of Code per Language"}
                                </div>
                                <div
                                    className={styles.repo_language_stats_list}
                                >
                                    {Object.keys(languagesCount).length > 0 &&
                                        Object.keys(languagesCount).map(
                                            (
                                                eachLanguage,
                                                eachLanguageIndex,
                                            ) => (
                                                <CodeCount
                                                    ind={eachLanguageIndex}
                                                    key={eachLanguage}
                                                    language={eachLanguage}
                                                    totalCount={
                                                        languagesCount[
                                                            eachLanguage
                                                        ]
                                                    }
                                                />
                                            ),
                                        )}
                                </div>
                            </>
                        )}
                    </div>
                    <div className={styles.repo_list}>
                        <div className={styles.repo_search_container}>
                            <Form.Control
                                className={styles.repo_search}
                                onChange={changeSearchQuery}
                                onKeyDown={keyPressedInput}
                                placeholder="Name"
                                type="text"
                                value={searchQuery}
                            />
                            <div className={styles.repo_count}>
                                {`${repos.length} projects`}
                            </div>
                        </div>
                        <div className={styles.repo_display}>
                            {repos.map(
                                (eachRepo: Repo, eachRepoIndex: number) => (
                                    <Repository
                                        key={eachRepo.id}
                                        tab={eachRepoIndex}
                                        {...eachRepo}
                                    />
                                ),
                            )}
                        </div>
                    </div>
                    <div className={styles.repo_month_frequency}>
                        {Object.keys(repoMonthCount).length > 0 && (
                            <>
                                <div
                                    className={
                                        styles.repo_month_frequency_title
                                    }
                                >
                                    {"Number of Projects per Month"}
                                </div>
                                {Object.keys(repoMonthCount).map(
                                    (
                                        eachRepoMonth: string,
                                        eachRepoMonthIndex: number,
                                    ) => (
                                        <MonthCount
                                            ind={eachRepoMonthIndex}
                                            key={`repo_month_${eachRepoMonth}`}
                                            month={eachRepoMonth}
                                            totalAmount={
                                                (
                                                    repoMonthCount as {
                                                        [_key in MonthKeys]: number;
                                                    }
                                                )[eachRepoMonth as MonthKeys]
                                            }
                                        />
                                    ),
                                )}
                            </>
                        )}
                    </div>
                </div>
            </BasicLayout>
        </>
    );
};

export { Projects };
