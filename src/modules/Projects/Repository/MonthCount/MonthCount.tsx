import React from "react";

import { CountUpAnimation } from "@/modules/common/modules/CountUpAnimation";

import styles from "./MonthCount.module.css";

type MonthCountProperties = {
    readonly ind: number;
    readonly month: string;
    readonly totalAmount: number;
};

/**
 *
 * @param param0
 */
export const MonthCount = ({
    totalAmount,
    ind,
    month,
}: MonthCountProperties): JSX.Element => {
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
            className={`${styles.repo_individual_month}${
                applyAppear ? ` ${styles.repo_individual_month_appear}` : ""
            }`}
        >
            <span className={styles.repo_individual_month_header}>{month}</span>
            <span className={styles.repo_individual_month_stat}>
                {applyAppear && (
                    <CountUpAnimation>{totalAmount}</CountUpAnimation>
                )}
            </span>
        </div>
    );
};
