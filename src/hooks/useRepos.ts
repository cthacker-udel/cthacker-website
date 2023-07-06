import { Repo } from "modules/Projects/helpers";
import React from "react";

type useReposReturn = {
    isLoading: boolean;
    repos: Repo[];
}

/**
 * 
 * @returns 
 */
export const useRepos = (): useReposReturn => {
    const [repos, setRepos] = React.useState<Repo[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

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


    return {
        isLoading,
        repos
    }
}