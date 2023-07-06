import { createTokenAuth } from "@octokit/auth-token";
import { request } from "@octokit/request";
import { Repo } from "@/modules/Projects/helpers";
import React from "react";
import { toast } from "react-toastify";

const STATUS_OK = 200;

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
    const [isLoading, setIsLoading] = React.useState(false);
    const [failed, setFailed] = React.useState<boolean>(false);
    const [_isPending, startTransition] = React.useTransition();

    const getRepos = React.useCallback(async () => {
        const gettingRepos = toast.loading("Fetching projects...");
        const auth = createTokenAuth(
            process.env.NEXT_PUBLIC_GITHUB_API_TOKEN ?? "",
        );
        const authToken = await auth();
        const response = await request("GET /user/repos", {
            headers: {
                authorization: `token ${authToken.token}`,
            },
            type: "all",
        });
        if (response.status === STATUS_OK) {
            toast.update(gettingRepos, {
                autoClose: 1000,
                isLoading: false,
                render: "Successfully fetched projects",
                type: "success",
            });
            const convertedRepos = response.data as Repo[];
            setRepos(convertedRepos);
        } else {
            toast.update(gettingRepos, {
                autoClose: 1000,
                isLoading: false,
                render: "Failed to fetch projects",
                type: "error",
            });
        }
    }, []);

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
