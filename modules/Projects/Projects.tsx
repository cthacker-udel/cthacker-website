/* eslint-disable no-shadow -- disabled due to issues with enums */
/* eslint-disable no-magic-numbers -- disabled due to issues with enums */
/* eslint-disable no-unused-vars -- disabled due to issues with enums */
import { BasicLayout } from "modules/common";
import React from "react";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

import { ProjectContainer } from "./ProjectContainer";
import { ProjectSeason } from "./ProjectSeason";
import { ProjectYear } from "./ProjectYear";

const PROJECT_CONSTANTS = {
	BUTTON_NOT_TOGGLED_VARIANT: "outline-success",
	BUTTON_TOGGLED_VARIANT: "success",
};

/**
 * The projects page, which will detail ongoing projects, as well as old ones.
 *
 * @returns The projects page
 */
export const Projects = (): JSX.Element => {
	const [selectedYear, setSelectedYear] = React.useState<number>(
		ProjectYear.TWENTY_TWENTY,
	);
	const [selectedSeason, setSelectedSeason] = React.useState<number>(
		ProjectSeason.WINTER,
	);

	return (
		<BasicLayout>
			<div className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
				<ButtonToolbar>
					<ButtonGroup>
						<Button
							onClick={(): void => {
								setSelectedYear(ProjectYear.TWENTY_TWENTY);
							}}
							variant={
								selectedYear === ProjectYear.TWENTY_TWENTY
									? PROJECT_CONSTANTS.BUTTON_TOGGLED_VARIANT
									: PROJECT_CONSTANTS.BUTTON_NOT_TOGGLED_VARIANT
							}
						>
							{"2020"}
						</Button>
						<Button
							onClick={(): void => {
								setSelectedYear(ProjectYear.TWENTY_TWENTY_ONE);
							}}
							variant={
								selectedYear === ProjectYear.TWENTY_TWENTY_ONE
									? PROJECT_CONSTANTS.BUTTON_TOGGLED_VARIANT
									: PROJECT_CONSTANTS.BUTTON_NOT_TOGGLED_VARIANT
							}
						>
							{"2021"}
						</Button>
						<Button
							onClick={(): void => {
								setSelectedYear(ProjectYear.TWENTY_TWENTY_TWO);
							}}
							variant={
								selectedYear === ProjectYear.TWENTY_TWENTY_TWO
									? PROJECT_CONSTANTS.BUTTON_TOGGLED_VARIANT
									: PROJECT_CONSTANTS.BUTTON_NOT_TOGGLED_VARIANT
							}
						>
							{"2022"}
						</Button>
					</ButtonGroup>
				</ButtonToolbar>
				<ButtonToolbar className="mt-1">
					<ButtonGroup>
						<Button
							onClick={(): void => {
								setSelectedSeason(ProjectSeason.WINTER);
							}}
							variant={
								selectedSeason === ProjectSeason.WINTER
									? PROJECT_CONSTANTS.BUTTON_TOGGLED_VARIANT
									: PROJECT_CONSTANTS.BUTTON_NOT_TOGGLED_VARIANT
							}
						>
							{"Winter"}
						</Button>
						<Button
							onClick={(): void => {
								setSelectedSeason(ProjectSeason.SPRING);
							}}
							variant={
								selectedSeason === ProjectSeason.SPRING
									? PROJECT_CONSTANTS.BUTTON_TOGGLED_VARIANT
									: PROJECT_CONSTANTS.BUTTON_NOT_TOGGLED_VARIANT
							}
						>
							{"Spring"}
						</Button>
						<Button
							onClick={(): void => {
								setSelectedSeason(ProjectSeason.SUMMER);
							}}
							variant={
								selectedSeason === ProjectSeason.SUMMER
									? PROJECT_CONSTANTS.BUTTON_TOGGLED_VARIANT
									: PROJECT_CONSTANTS.BUTTON_NOT_TOGGLED_VARIANT
							}
						>
							{"Summer"}
						</Button>
						<Button
							onClick={(): void => {
								setSelectedSeason(ProjectSeason.FALL);
							}}
							variant={
								selectedSeason === ProjectSeason.FALL
									? PROJECT_CONSTANTS.BUTTON_TOGGLED_VARIANT
									: PROJECT_CONSTANTS.BUTTON_NOT_TOGGLED_VARIANT
							}
						>
							{"Fall"}
						</Button>
					</ButtonGroup>
				</ButtonToolbar>
				<ProjectContainer season={selectedSeason} year={selectedYear} />
			</div>
		</BasicLayout>
	);
};
