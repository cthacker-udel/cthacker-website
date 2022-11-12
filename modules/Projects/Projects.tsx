/* eslint-disable node/no-process-env -- disabled */
/* eslint-disable node/no-unpublished-import -- not needed */
/* eslint-disable quotes -- not needed */
/* eslint-disable camelcase -- not needed */
/* eslint-disable no-mixed-spaces-and-tabs -- not needed */
/* eslint-disable @typescript-eslint/indent -- not needed */
/* eslint-disable no-shadow -- disabled due to issues with enums */
/* eslint-disable no-magic-numbers -- disabled due to issues with enums */
/* eslint-disable no-unused-vars -- disabled due to issues with enums */

import type { OctokitResponse } from "@octokit/types";
import { BasicLayout } from "modules/common";
import { Octokit } from "octokit";
import React from "react";
import { Spinner } from "react-bootstrap";

import {
	type RenderableProject,
	type Repo,
	organizeParsedRepos,
	parseRepos,
} from "./helpers";
import { ProjectContainer } from "./ProjectContainer";
import projectStyles from "./Projects.module.css";
import { Season } from "./Season";

const availableYears = [2017, 2018, 2019, 2020, 2021, 2022];

const mappedSeasons = ["Winter", "Spring", "Summer", "Fall"];

const seasons = [Season.WINTER, Season.SPRING, Season.SUMMER, Season.FALL];

/**
 * The projects page, which will detail ongoing projects, as well as old ones.
 *
 * @returns The projects page
 */
const Projects = (): JSX.Element => {
	const yearDiv = React.createRef<HTMLDivElement>();

	const [selectedYearIndex, setSelectedYearIndex] = React.useState<number>(0);
	const [selectedSeasonIndex, setSelectedSeasonIndex] =
		React.useState<Season>(0);
	const [organizedRepoCollection, setOrganizedRepoCollection] =
		React.useState<
			| {
					[key: number]: { [key: number]: RenderableProject[] };
			  }
			| undefined
		>(undefined);
	const [repoCollection, setRepoCollection] = React.useState<
		RenderableProject[]
	>([]);
	const [finishedCollecting, setFinishedCollecting] =
		React.useState<boolean>(false);
	const [paginationPage, setPaginationPage] = React.useState<number>(1);

	React.useEffect(() => {
		if (finishedCollecting) {
			const organizedRepos = organizeParsedRepos(repoCollection);
			setOrganizedRepoCollection(organizedRepos);
		}
	}, [finishedCollecting, repoCollection]);

	React.useEffect(() => {
		const octokit: Octokit = new Octokit({
			auth: process.env.GITHUB_AUTH_TOKEN,
		});
		octokit
			.request("GET /user/repos", { page: paginationPage, per_page: 100 })
			.then((response: OctokitResponse<Repo[]>) => {
				const { data: repos, headers } = response;
				if (repos.length === 0) {
					setFinishedCollecting(true);
					throw new Error("Finished");
				}
				const nextPage = Number(
					headers.link
						?.split('rel="next"')[0]
						.split("?")[1]
						.split("&")[0]
						.split("=")[1],
				);
				if (nextPage === undefined) {
					setFinishedCollecting(true);
					throw new Error("Finished");
				}
				const parsedReturnedRepositories = parseRepos(
					repos as unknown as Repo[],
				);
				setRepoCollection((previousRepos: RenderableProject[]) => {
					if (previousRepos.length > 0) {
						return [
							...previousRepos,
							...parsedReturnedRepositories,
						];
					}
					return parsedReturnedRepositories;
				});
				console.log("setting next page to", nextPage);
				setPaginationPage((previousPaginationPage) => {
					if (previousPaginationPage >= nextPage) {
						setFinishedCollecting(true);
						return previousPaginationPage;
					}
					return nextPage;
				});
			})
			.catch((error: unknown) => {
				setFinishedCollecting(true);
				if ((error as Error).message === "Finished") {
					console.log("Finished collecting repos");
				} else {
					console.error(
						`Failed to fetch github repos ${
							(error as Error).stack
						}`,
					);
				}
			});
	}, [paginationPage]);

	return (
		<BasicLayout>
			<div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
				<div
					className={`${projectStyles.project_container} rounded w-75 h-75 position-relative d-flex flex-column justify-content-center align-items-center`}
				>
					<div
						className={`${projectStyles.project_year} position-absolute`}
					>
						<div
							className={`d-flex flex-row justify-content-between ${projectStyles.project_scrollable_section}`}
						>
							<div
								className={`${projectStyles.project_scroll} d-flex flex-column`}
							>
								{availableYears.map((eachYear, _index) => (
									<div
										className={
											_index === selectedYearIndex
												? `${projectStyles.project_selected} text-center`
												: `${projectStyles.project_unselected} text-center rounded`
										}
										id={`year-${eachYear}`}
										key={eachYear}
										onClick={(): void => {
											document
												.querySelector(
													`#year-${eachYear}`,
												)
												?.scrollIntoView({
													behavior: "smooth",
												});
											setSelectedYearIndex(_index);
										}}
									>
										{eachYear}
									</div>
								))}
							</div>
							<div
								className={`${projectStyles.project_scroll} d-flex flex-column fs-5`}
							>
								{seasons.map((eachSeason, _index) => (
									<div
										className={
											_index === selectedSeasonIndex
												? `${projectStyles.project_selected} text-center`
												: `${projectStyles.project_unselected} text-center rounded`
										}
										id={`season-${eachSeason}`}
										key={eachSeason}
										onClick={(): void => {
											document
												.querySelector(
													`#season-${eachSeason}`,
												)
												?.scrollIntoView({
													behavior: "smooth",
												});
											setSelectedSeasonIndex(_index);
										}}
									>
										{mappedSeasons[eachSeason]}
									</div>
								))}
							</div>
						</div>
					</div>
					{organizedRepoCollection ? (
						<ProjectContainer
							projects={
								organizedRepoCollection[
									availableYears[selectedYearIndex]
								] === undefined
									? []
									: organizedRepoCollection[
											availableYears[selectedYearIndex]
									  ][seasons[selectedSeasonIndex]]
							}
						/>
					) : (
						<Spinner animation="border" />
					)}
				</div>
			</div>
		</BasicLayout>
	);
};

export { Projects };
