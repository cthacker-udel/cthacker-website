/* eslint-disable no-mixed-spaces-and-tabs -- not needed */
/* eslint-disable @typescript-eslint/indent -- not needed */
/* eslint-disable no-shadow -- disabled due to issues with enums */
/* eslint-disable no-magic-numbers -- disabled due to issues with enums */
/* eslint-disable no-unused-vars -- disabled due to issues with enums */
import { BasicLayout } from "modules/common";
import React from "react";

import { ProjectContainer } from "./ProjectContainer";
import projectStyles from "./Projects.module.css";

enum Season {
	WINTER = 0,
	SPRING = 1,
	SUMMER = 2,
	FALL = 3,
}

const availableYears = [2017, 2018, 2019, 2020, 2021, 2022];

const mappedSeasons = ["Winter", "Spring", "Summer", "Fall"];

const seasons = [Season.WINTER, Season.SPRING, Season.SUMMER, Season.FALL];

/**
 * The projects page, which will detail ongoing projects, as well as old ones.
 *
 * @returns The projects page
 */
export const Projects = (): JSX.Element => {
	const yearDiv = React.createRef<HTMLDivElement>();

	const [selectedYearIndex, setSelectedYearIndex] = React.useState<number>(0);
	const [selectedSeasonIndex, setSelectedSeasonIndex] =
		React.useState<Season>(0);

	return (
		<BasicLayout>
			<div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
				<div
					className={`${projectStyles.project_container} rounded w-75 h-75 position-relative`}
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
				</div>
			</div>
		</BasicLayout>
	);
};
