import React from "react";

import { BasicLayout } from "@/modules/common";

import contactInfoStyles from "./ContactInfo.module.css";

/**
 * The Contact Info page
 */
export const ContactInfo = (): JSX.Element => (
    <BasicLayout>
        <div
            className={`d-flex flex-column w-100 justify-content-center align-items-center ${contactInfoStyles.contact_info_page}`}
        >
            <div className={`${contactInfoStyles.contact_info_section}`}>
                <div className="fs-1 text-decoration-underline mb-2 text-center">
                    {"Contact Info"}
                </div>
                <ul className="fa-ul m-0 fs-4">
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-solid fa-phone my-auto fa-sm" />
                        <span className="ms-2">{"(302) 419-8559"}</span>
                    </li>
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-solid fa-envelope fa-sm my-auto" />
                        <span className="ms-2">{"cthacker@udel.edu"}</span>
                    </li>
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-brands fa-github fa-sm my-auto" />
                        <span className="ms-2">{"cthacker-udel"}</span>
                    </li>
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-brands fa-linkedin fa-sm my-auto" />
                        <span className="ms-2">{"cameron-thacker"}</span>
                    </li>
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-brands fa-spotify fa-sm my-auto" />
                        <span className="ms-2">{"camthack2010"}</span>
                    </li>
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-brands fa-twitter my-auto" />
                        <span className="ms-2">{"CameronThacker_"}</span>
                    </li>
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-brands fa-instagram my-auto" />
                        <span className="ms-2">
                            {"yakushevseverin19882912"}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </BasicLayout>
);
