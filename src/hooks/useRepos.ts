/* eslint-disable no-confusing-arrow -- disabled */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style -- disabled */

import { createTokenAuth } from "@octokit/auth-token";
import { request } from "@octokit/request";
import React from "react";
import { toast } from "react-toastify";

import type { Repo } from "@/modules/Projects/helpers";

type useReposReturn = {
    failed: boolean;
    isLoading: boolean;
    repos: Repo[];
};

/**
 * Custom hook to fetch all repositories in the background and return them appropriately
 *
 * @returns All the repos, whether the request failed or succeeded, whether the request is pending, etc.
 */
export const useRepos = (): useReposReturn => {
    const [repos, setRepos] = React.useState<Repo[]>([]);
    const [nextRepoPage, setNextRepoPage] = React.useState<number>(1);
    const [isLoading, setIsLoading] = React.useState(false);
    const [failed, setFailed] = React.useState<boolean>(false);
    const [_isPending, startTransition] = React.useTransition();

    const getRepos = React.useCallback(async () => {
        const gettingRepos = toast.loading("Fetching projects...");
        const auth = createTokenAuth(
            process.env.NEXT_PUBLIC_GITHUB_API_TOKEN ?? "",
        );
        const authToken = await auth();
        const response = await request(
            `GET /user/repos?per_page=100&page=${nextRepoPage}`,
            {
                headers: {
                    authorization: `token ${authToken.token}`,
                },
                type: "all",
            },
        );
        const {
            data,
            headers: { link },
        } = response;
        const queryString = new URLSearchParams(link);
        const convertedRepos = data as Repo[];
        startTransition(() => {
            setIsLoading(
                nextRepoPage !==
                    Number(queryString.get("page") ?? nextRepoPage),
            );
            setRepos((oldRepos: Repo[]) => [...oldRepos, ...convertedRepos]);
            setNextRepoPage((oldRepoPage) =>
                oldRepoPage === Number(queryString.get("page") ?? oldRepoPage)
                    ? oldRepoPage
                    : Number(queryString.get("page") as string),
            );
        });
    }, [nextRepoPage]);

    React.useEffect(() => {
        console.log("changing");
    }, [getRepos]);

    React.useEffect(() => {
        getRepos()
            .then(() => {
                startTransition(() => {
                    setIsLoading(false);
                    setFailed(false);
                });
            })
            .catch(() => {
                startTransition(() => {
                    setIsLoading(false);
                    setFailed(false);
                    setRepos([]);
                });
            });
    }, []);

    return {
        failed,
        isLoading,
        repos,
    };
};
