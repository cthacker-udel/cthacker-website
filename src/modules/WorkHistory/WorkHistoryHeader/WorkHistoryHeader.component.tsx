import React from "react";

import workHistoryHeaderStyles from "./WorkHistoryHeader.module.css";

type WorkHistoryHeaderProperties = {
    // When we have the scrollspy implemented displayOrder?: number;
    sections?: JSX.Element[];
    year?: number;
};

/**
 *
 * @param param0
 * @returns
 */
export const WorkHistoryHeader = ({
    sections,
    year,
}: WorkHistoryHeaderProperties): JSX.Element => (
    <div
        className={`h-25 w-100 d-flex flex-column ${workHistoryHeaderStyles.workhistory_header}`}
        id={`work-history-header-${year}`}
    >
        <div className="d-flex flex-row justify-content-start">
            <div
                className={`border border-secondary w-50 ${workHistoryHeaderStyles.workhistory_year_header_border} my-auto mx-2 opacity-50`}
            />
            <div
                className={`${workHistoryHeaderStyles.workhistory_year_header_year}`}
            >
                {year}
            </div>
        </div>
        {sections}
    </div>
);
