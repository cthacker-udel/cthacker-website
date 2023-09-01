/* eslint-disable node/no-unpublished-import -- disabled */
/* eslint-disable no-extra-boolean-cast -- disabled */
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
                                if (oldSelectedRepository === -1) {
                                    return oldSelectedRepository;
                                }
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

    const keyPressedDocument = React.useCallback(
        (event: KeyboardEvent) => {
            const { key } = event;
            if (key === Key.Enter && currentlySelectedRepository >= 0) {
                const allRepositories = document.querySelectorAll(
                    allRepositoryQuerySelector,
                );
                if (allRepositories.length > 0) {
                    const selectedRepository =
                        allRepositories[currentlySelectedRepository];
                    const { repourl: repoUrl } = (
                        selectedRepository as HTMLDivElement
                    ).dataset;
                    if (repoUrl !== undefined) {
                        window.open(repoUrl, "_newtab");
                    }
                }
            } else if (key === Key.ArrowDown) {
                const allRepositories = document.querySelectorAll(
                    allRepositoryQuerySelector,
                );
                if (allRepositories.length > 0) {
                    setCurrentlySelectedRepository((oldValue: number) => {
                        if (oldValue === -1) {
                            return 0;
                        }
                        const convertedElement = allRepositories[
                            oldValue
                        ] as HTMLElement;
                        convertedElement.className =
                            convertedElement.className.replace(
                                ` ${styles.currently_selected}`,
                                "",
                            );
                        const newValue =
                            oldValue === repos.length - 1 ? 0 : oldValue + 1;
                        const currentElement = allRepositories[newValue];
                        currentElement.className += ` ${styles.currently_selected}`;
                        currentElement.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        });
                        return newValue;
                    });
                }
            } else if (key === Key.ArrowUp) {
                const allRepositories = document.querySelectorAll(
                    allRepositoryQuerySelector,
                );
                if (allRepositories.length > 0) {
                    setCurrentlySelectedRepository((oldValue: number) => {
                        if (oldValue === -1) {
                            return repos.length - 1;
                        }
                        const convertedElement = allRepositories[
                            oldValue
                        ] as HTMLElement;
                        convertedElement.className =
                            convertedElement.className.replace(
                                ` ${styles.currently_selected}`,
                                "",
                            );
                        const newValue =
                            oldValue === 0 ? repos.length - 1 : oldValue - 1;
                        const currentElement = allRepositories[newValue];
                        currentElement.className += ` ${styles.currently_selected}`;
                        currentElement.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        });
                        return newValue;
                    });
                }
            }
        },
        [currentlySelectedRepository, repos.length],
    );

    const selectCurrentlySelectedByHover = React.useCallback((event: Event) => {
        const repoName = (event as CustomEvent).detail;
        const allRepositories = document.querySelectorAll(
            allRepositoryQuerySelector,
        );
        let ind = 0;
        for (const eachRepository of allRepositories) {
            const convertedElement = eachRepository as HTMLDivElement;
            if (convertedElement.dataset.reponame === repoName) {
                setCurrentlySelectedRepository(ind);
                break;
            }
            ind += 1;
        }
    }, []);

    const deselectCurrentlySelectedByHover = React.useCallback(
        (event: Event) => {
            const { target } = event;
            if (searchQuery.length > 0) {
                const allRepositories = document.querySelectorAll(
                    allRepositoryQuerySelector,
                );
                if (allRepositories.length > 0) {
                    const convertedTarget = target as HTMLDivElement;

                    let matchingTargetIndex = 0;
                    let matchingRepositoryIndex = 0;
                    for (const eachRepository of allRepositories) {
                        const convertedElement =
                            eachRepository as HTMLDivElement;
                        const { reponame } = convertedElement.dataset;
                        if (
                            reponame
                                ?.toLocaleLowerCase()
                                .startsWith(searchQuery.toLocaleLowerCase())
                        ) {
                            setCurrentlySelectedRepository(
                                matchingRepositoryIndex,
                            );
                            break;
                        }
                        matchingRepositoryIndex += 1;
                    }
                    for (const eachRepository of allRepositories) {
                        const convertedElement =
                            eachRepository as HTMLDivElement;
                        if (
                            convertedElement.dataset.reponame?.toLocaleLowerCase() ===
                            convertedTarget.dataset.reponame?.toLocaleLowerCase()
                        ) {
                            break;
                        }
                        matchingTargetIndex += 1;
                    }

                    if (
                        matchingTargetIndex !== matchingRepositoryIndex &&
                        target !== undefined
                    ) {
                        convertedTarget.className =
                            convertedTarget.className.replace(
                                ` ${styles.currently_selected}`,
                                "",
                            );
                        setCurrentlySelectedRepository(-1);
                    }
                }
            } else {
                if (target !== undefined) {
                    const convertedTarget = target as HTMLDivElement;
                    convertedTarget.className =
                        convertedTarget.className.replace(
                            ` ${styles.currently_selected}`,
                            "",
                        );
                }
                setCurrentlySelectedRepository(-1);
            }
        },
        [searchQuery],
    );

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
                <title>{"Cameron Thacker's Projects"}</title>
            </Head>
            <BasicLayout>
                <div className={styles.repo_layout}>
                    <div>
                        <Form.Control
                            className={styles.repo_search}
                            onChange={changeSearchQuery}
                            onKeyDown={keyPressedInput}
                            placeholder="Name"
                            type="text"
                            value={searchQuery}
                        />
                    </div>
                    <div className={styles.repo_count}>
                        {`${repos.length} projects`}
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
