/* eslint-disable security/detect-object-injection -- disabled */
/* eslint-disable node/no-unpublished-import -- disabled */
/* eslint-disable @typescript-eslint/indent -- disabled */
import { createTokenAuth } from "@octokit/auth-token";
import { request } from "@octokit/request";
import type { OctokitResponse } from "@octokit/types";
import React from "react";

import type { GithubLanguagesResponse } from "@/@types/repo";
import type { Repo } from "@/modules/Projects/helpers";

type useRepoLanguagesBulkReturn = {
    failed: boolean;
    isLoading: boolean;
    languagesCount: { [key: string]: number };
};

/**
 * Fetches all the language data from all the repositories
 *
 * @param repoLoadingCompleted - Have the repositories completed loading
 * @param repos - The repositories we are grabbing all the languages for
 * @returns All the languages count from all repos
 */
export const useRepoLanguagesBulk = (
    repoLoadingCompleted: boolean,
    repos: Repo[],
): useRepoLanguagesBulkReturn => {
    const [failed, setFailed] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [languagesCount, setLanguagesCount] = React.useState<{
        [key: string]: number;
    }>({});
    const [_, startTransition] = React.useTransition();

    const getRepoLanguagesBulk = React.useMemo(
        () => async (): Promise<boolean> => {
            if (repos === undefined || repos.length === 0) {
                return false;
            }

            const auth = createTokenAuth(
                process.env.NEXT_PUBLIC_GITHUB_API_TOKEN ?? "",
            );
            const authToken = await auth();
            const languageRequests: Promise<
                OctokitResponse<GithubLanguagesResponse>
            >[] = [];

            for (const eachRepo of repos) {
                languageRequests.push(
                    request("GET /repos/{owner}/{repo}/languages", {
                        headers: {
                            authorization: `token ${authToken.token}`,
                        },
                        owner: eachRepo.owner.login,
                        repo: eachRepo.name,
                    }) as Promise<OctokitResponse<GithubLanguagesResponse>>,
                );
            }

            const languagesResponses = await Promise.all(languageRequests);

            setLanguagesCount((oldLanguagesCount) => {
                for (const eachLanguageResponse of languagesResponses) {
                    const { data } = eachLanguageResponse;
                    for (const eachLanguage of Object.keys(data)) {
                        if (eachLanguage in oldLanguagesCount) {
                            oldLanguagesCount[eachLanguage] +=
                                data[eachLanguage];
                        } else {
                            oldLanguagesCount[eachLanguage] =
                                data[eachLanguage];
                        }
                    }
                }
                return oldLanguagesCount;
            });
            startTransition(() => {
                setIsLoading(false);
                setFailed(false);
            });

            return true;
        },
        [repos],
    );

    React.useEffect(() => {
        if (isLoading && repoLoadingCompleted) {
            getRepoLanguagesBulk().catch(() => {
                startTransition(() => {
                    setIsLoading(false);
                    setFailed(true);
                });
            });
        }
    }, [getRepoLanguagesBulk, isLoading, repoLoadingCompleted]);

    return {
        failed,
        isLoading,
        languagesCount,
    };
};
