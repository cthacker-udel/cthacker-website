/* eslint-disable node/no-process-env -- disabled */
import { createTokenAuth } from "@octokit/auth-token";
import { request } from "@octokit/request";
import Head from "next/head";
import React from "react";
import { toast } from "react-toastify";

import { useRepos } from "@/hooks/useRepos";
import { BasicLayout } from "@/modules/common";

import type { Repo } from "./helpers";
import styles from "./Projects.module.css";
import { Repository } from "./Repository";

const STATUS_OK = 200;

/**
 * The projects page, which will detail ongoing projects, as well as old ones.
 *
 * @returns The projects page
 */
const Projects = (): JSX.Element => {
    const { isLoading, repos } = useRepos();

    return (
        <>
            <Head>
                <title>{"Cameron Thacker's Projects"}</title>
            </Head>
            <BasicLayout>
                <div className={styles.repo_layout}>
                    <div className={styles.repo_display}>
                        {repos.map((eachRepo: Repo) => (
                            <Repository
                                key={eachRepo.id + Date.now()}
                                {...eachRepo}
                            />
                        ))}
                    </div>
                </div>
            </BasicLayout>
        </>
    );
};

export { Projects };
