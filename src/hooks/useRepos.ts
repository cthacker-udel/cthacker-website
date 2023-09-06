/* eslint-disable no-confusing-arrow -- disabled */
/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style -- disabled */

import { createTokenAuth } from "@octokit/auth-token";
import { request } from "@octokit/request";
import React from "react";
import { type Id, toast } from "react-toastify";

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
    const [isLoading, setIsLoading] = React.useState(true);
    const [failed, setFailed] = React.useState<boolean>(false);
    const [_, startTransition] = React.useTransition();
    const [loadingToastId, setLoadingToastId] = React.useState<Id | undefined>(
        undefined,
    );

    /**
     * Callback hook that fetches all repositories from a user's github account, uses multiple states
     * to overcome the limit they set on get requests, as it comes paginated
     */
    const getRepos = React.useMemo(
        () => async () => {
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
                    nextRepoPage <
                        Number(queryString.get("page") ?? nextRepoPage),
                );
                setRepos((oldRepos: Repo[]) =>
                    [...oldRepos, ...convertedRepos].sort((a, b) =>
                        a.name.localeCompare(b.name),
                    ),
                );
                setNextRepoPage((oldRepoPage) =>
                    oldRepoPage ===
                    Number(queryString.get("page") ?? oldRepoPage)
                        ? oldRepoPage
                        : Number(queryString.get("page") as string),
                );
            });
        },
        [nextRepoPage],
    );

    /**
     * Just for toast management, nothing else
     */
    React.useEffect(() => {
        if (isLoading) {
            setLoadingToastId((oldLoadingToastId: Id | undefined) => {
                if (oldLoadingToastId === undefined) {
                    return toast.loading("Fetching github repositories", {
                        autoClose: 5000,
                    });
                }
                return oldLoadingToastId;
            });
        } else if (!isLoading) {
            setLoadingToastId((oldLoadingToastId: Id | undefined) => {
                if (oldLoadingToastId !== undefined) {
                    toast.update(oldLoadingToastId, {
                        autoClose: 1000,
                        isLoading: false,
                        render: "Completed fetching repositories!",
                        type: "success",
                    });
                }
                return undefined;
            });
        }
    }, [isLoading, loadingToastId]);

    /**
     * Firing off the initial getRepos hook
     */
    React.useEffect(() => {
        if (isLoading) {
            getRepos().catch(() => {
                startTransition(() => {
                    setIsLoading(false);
                    setFailed(true);
                    setRepos([]);
                });
            });
        }
    }, [getRepos, isLoading]);

    return {
        failed,
        isLoading,
        repos,
    };
};
