/* eslint-disable node/no-process-env -- disabled */
import { createTokenAuth } from "@octokit/auth-token";
import { request } from "@octokit/request";
import { BasicLayout } from "modules/common";
import Head from "next/head";
import React from "react";
import { toast } from "react-toastify";

import { Repo } from "./helpers";

const STATUS_OK = 200;

/**
 * The projects page, which will detail ongoing projects, as well as old ones.
 *
 * @returns The projects page
 */
const Projects = (): JSX.Element => {
	const getRepos = React.useCallback(async () => {
		console.log("fetching repos");
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
			console.log(convertedRepos);
		} else {
			toast.update(gettingRepos, {
				autoClose: 1000,
				isLoading: false,
				render: "Failed to fetch projects",
				type: "error",
			});
		}
	}, []);

	const [repos, setRepos] = React.useState<Repo[]>([]);
	const [loading, setLoading] = React.useState<boolean>(false);

	React.useEffect(() => {
		getRepos()
			.then(() => {
				toast.info(
					"This is where all the projects are listed, including current and past repositories",
					{
						autoClose: 5000,
					},
				);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [getRepos]);

	return (
		<>
			<Head>
				<title>{"Cameron Thacker's Projects"}</title>
			</Head>
			<BasicLayout>
				<div>{"hello"}</div>
			</BasicLayout>
		</>
	);
};

export { Projects };
