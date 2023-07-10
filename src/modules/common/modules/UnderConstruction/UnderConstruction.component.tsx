import React from "react";

import { BasicLayout } from "../BasicLayout";
import underConstructionStyles from "./UnderConstruction.module.css";

/**
 * Construction page to default if the page is not available at the moment
 *
 * @returns Basic Under Construction page
 */
export const UnderConstruction = (): JSX.Element => (
    <BasicLayout>
        <div
            className={`w-100 h-100 d-flex flex-column justify-content-center align-items-center ${underConstructionStyles.under_construction_page}`}
        >
            <div className="d-flex flex-row">
                <i className="fa-solid fa-wrench fa-2xl my-auto fa-shake" />
                <div
                    className={`mx-3 fs-1 fa-flip ${underConstructionStyles.under_construction_main_text}`}
                >
                    {"Under Construction"}
                </div>
                <i className="fa-solid fa-wrench fa-2xl my-auto fa-shake" />
            </div>
        </div>
    </BasicLayout>
);
