import React from "react";

import { BasicLayout } from "@/modules/common";

import styles from "./ContactInfo.module.css";

/**
 * The Contact Info page
 */
export const ContactInfo = (): JSX.Element => (
    <BasicLayout>
        <div
            className={`d-flex flex-column w-100 justify-content-center align-items-center ${styles.contact_info_page}`}
        >
            <div className={`${styles.contact_info_section}`}>
                <div className="fs-1 text-decoration-underline mb-2 text-center">
                    {"Contact Info"}
                </div>
                <ul className="fa-ul m-0 fs-4">
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-solid fa-phone my-auto fa-sm" />
                        <a
                            className={styles.contact_info_link}
                            href="tel:3024198559"
                        >
                            {"(302) 419-8559"}
                        </a>
                    </li>
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-solid fa-envelope fa-sm my-auto" />
                        <a
                            className={styles.contact_info_link}
                            href="mailto:cthacker@udel.edu"
                        >
                            {"cthacker@udel.edu"}
                        </a>
                    </li>
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-brands fa-github fa-sm my-auto" />
                        <a
                            className={styles.contact_info_link}
                            href="https://github.com/cthacker-udel"
                            rel="noreferrer"
                            target="_blank"
                        >
                            {"cthacker-udel"}
                        </a>
                    </li>
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-brands fa-linkedin fa-sm my-auto" />
                        <a
                            className={styles.contact_info_link}
                            href="https://www.linkedin.com/in/cameron-thacker/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            {"cameron-thacker"}
                        </a>
                    </li>
                    <li className="d-flex flex-row justify-content-center mb-1">
                        <i className="fa-brands fa-spotify fa-sm my-auto" />
                        <a
                            className={styles.contact_info_link}
                            href="https://open.spotify.com/user/camthack2010"
                            rel="noreferrer"
                            target="_blank"
                        >
                            {"camthack2010"}
                        </a>
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
