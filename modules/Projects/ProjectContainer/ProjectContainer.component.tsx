/* eslint-disable @typescript-eslint/no-explicit-any -- disabled */
import React from "react";

import { Winter as tttWinter } from "../2022/winter/winter";
import type { ProjectSeason } from "../ProjectSeason";
import type { ProjectYear } from "../ProjectYear";

type ProjectContainerProperties = {
	year: ProjectYear;
	season: ProjectSeason;
};

const PROJECT_MAPPING: any = [[], [], [tttWinter(), [], [], []]];

/**
 * A container which will house all the projects of the given year and the given season
 *
 * @param properties - The properties passed into the component
 * @param properties.year - The year of the projects to display
 * @param properties.season - The season of the projects to display
 */
export const ProjectContainer = ({
	year,
	season,
}: ProjectContainerProperties): JSX.Element => (
	<div className="d-flex flex-row w-75 mt-5">
		{PROJECT_MAPPING[year][season]}
	</div>
);
