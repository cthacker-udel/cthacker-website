import React from "react";

import { CountUpAnimation } from "@/modules/common/modules/CountUpAnimation";

import styles from "./CodeCount.module.css";

type CodeCountProperties = {
    readonly ind: number;
    readonly language: string;
    readonly totalCount: number;
};

/**
 *
 * @param param0
 * @returns
 */
export const CodeCount = ({
    ind,
    language,
    totalCount,
}: CodeCountProperties): JSX.Element => {
    const [applyAppear, setApplyAppear] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (document !== undefined) {
            setTimeout(
                () => {
                    setApplyAppear(true);
                },
                500 * (ind + 1),
            );
        }
    }, [ind]);

    return (
        <div
            className={`${styles.repo_individual_language}${
                applyAppear ? ` ${styles.repo_individual_language_appear}` : ""
            }`}
        >
            <span className={styles.repo_language_stats_language}>
                {language}
            </span>
            <span className={styles.repo_language_stats_language_stat}>
                {applyAppear && (
                    <CountUpAnimation>{totalCount}</CountUpAnimation>
                )}
            </span>
        </div>
    );
};
