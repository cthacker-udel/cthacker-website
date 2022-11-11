/* eslint-disable no-mixed-spaces-and-tabs -- not needed */
/* eslint-disable @typescript-eslint/indent -- not needed */
/* eslint-disable no-shadow -- disabled due to issues with enums */
/* eslint-disable no-magic-numbers -- disabled due to issues with enums */
/* eslint-disable no-unused-vars -- disabled due to issues with enums */
import { BasicLayout } from "modules/common";
import React from "react";

import { ProjectContainer } from "./ProjectContainer";
import projectStyles from "./Projects.module.css";

const availableYears = [2017, 2018, 2019, 2020, 2021, 2022];

/**
 * The projects page, which will detail ongoing projects, as well as old ones.
 *
 * @returns The projects page
 */
export const Projects = (): JSX.Element => {
	const yearDiv = React.createRef<HTMLDivElement>();

	const [selectedYearIndex, setSelectedYearIndex] = React.useState<number>(0);

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
							className={`${projectStyles.project_year_scroll} d-flex flex-column`}
						>
							{availableYears.map((eachYear, _index) => (
								<div
									className={
										_index === selectedYearIndex
											? `${projectStyles.project_year_selected}`
											: ""
									}
									key={eachYear}
								>
									{eachYear}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</BasicLayout>
	);
};
