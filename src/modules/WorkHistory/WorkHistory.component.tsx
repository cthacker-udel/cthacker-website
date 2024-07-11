/* eslint-disable security/detect-object-injection -- disabled, user input not detected with object bracket notation access */
import debounce from "lodash.debounce";
import Head from "next/head";
import React from "react";

import { BasicLayout } from "@/modules/common";

import { WH2022, WH2023 } from "./sections";
import { WH2021 } from "./sections/2021";
import { WorkHistoryHeader } from "./WorkHistoryHeader";

const workHistorySectionArray = [
    <WorkHistoryHeader
        key="work-history-section-21"
        sections={[...WH2021]}
        year={2021}
    />,
];

const yearArray = [2021];

/**
 * Page detailing all the places I've worked at, along with languages, and tasks.
 *
 * @returns The work history component
 */
export const WorkHistory = (): JSX.Element => {
    const [workHistory, setWorkHistory] = React.useState<JSX.Element[]>([
        <WorkHistoryHeader
            key="wh-wh-2023"
            // When we have scroll-spy implemented displayOrder={0}
            sections={[...WH2023]}
            year={2023}
        />,
        <WorkHistoryHeader
            key="work-history-section-22"
            sections={[...WH2022]}
            year={2022}
        />,
    ]);
    const [currentAddedIndex, setCurrentAddedIndex] = React.useState<number>(0);

    const scrollHandler = React.useCallback(
        (_event: Event) => {
            if (
                Math.ceil(window.scrollY + window.innerHeight) >=
                    document.body.scrollHeight &&
                currentAddedIndex < workHistorySectionArray.length
            ) {
                setWorkHistory((oldWorkHistory) => [
                    ...oldWorkHistory,
                    workHistorySectionArray[currentAddedIndex],
                ]);
                setCurrentAddedIndex(
                    (_currentIndex: number) => _currentIndex + 1,
                );
            }
        },
        [currentAddedIndex],
    );

    React.useEffect(() => {
        if (currentAddedIndex) {
            document
                .querySelector(
                    `#work-history-header-${yearArray[currentAddedIndex - 1]}`,
                )
                ?.scrollIntoView({ behavior: "smooth" });
        }
    }, [currentAddedIndex]);

    const debouncedMemo = React.useMemo(
        () => debounce(scrollHandler, 35),
        [scrollHandler],
    );

    React.useEffect(() => {
        if (window !== null) {
            window.addEventListener("scroll", debouncedMemo);
        }

        return (): void => {
            window.removeEventListener("scroll", debouncedMemo);
        };
    }, [debouncedMemo]);

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
                <title>{"Work History"}</title>
            </Head>
            <BasicLayout>
                <div
                    className="w-100 h-100 d-flex flex-column mt-4"
                    id="work-history-container"
                >
                    {workHistory}
                </div>
            </BasicLayout>
        </>
    );
};
