import { createTokenAuth } from "@octokit/auth-token";
import { request } from "@octokit/request";
import React from "react";

import type { Owner } from "@/modules/Projects/helpers/Repo";

type useRepoLanguagesReturn = {
    failed: boolean;
    isLoading: boolean;
    languages: string[];
};

/**
 * Fetches the repository's languages
 *
 * @param languagesUrl - The url to fetch the languages from
 */
export const useRepoLanguages = (
    repoOwner: Owner,
    repoName: string,
): useRepoLanguagesReturn => {
    const [failed, setFailed] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [languages, setLanguages] = React.useState<string[]>([]);
    const [_, startTransition] = React.useTransition();

    const getRepoLanguages = React.useMemo(
        () => async () => {
            const auth = createTokenAuth(
                process.env.NEXT_PUBLIC_GITHUB_API_TOKEN ?? "",
            );
            const authToken = await auth();
            const response = await request(
                "GET /repos/{owner}/{repo}/languages",
                {
                    headers: {
                        authorization: `token ${authToken.token}`,
                    },
                    owner: repoOwner.login,
                    repo: repoName,
                },
            );
            const { data } = response;
            startTransition(() => {
                setIsLoading(false);
                setLanguages(Object.keys(data));
            });
        },
        [repoName, repoOwner.login],
    );

    React.useEffect(() => {
        if (isLoading) {
            getRepoLanguages().catch(() => {
                startTransition(() => {
                    setIsLoading(false);
                    setFailed(true);
                });
            });
        }
    }, [getRepoLanguages, isLoading]);

    return {
        failed,
        isLoading,
        languages,
    };
};
