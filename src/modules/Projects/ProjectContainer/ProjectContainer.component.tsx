/* eslint-disable no-magic-numbers -- disabled */
import React from "react";

import type { RenderableProject } from "../helpers";
import { Project } from "../Project/Project.component";
import projectContainerProperties from "./ProjectContainer.module.css";

type ProjectContainerProperties = {
	projects: RenderableProject[];
};

/**
 * Container to display the repos
 *
 * @param props - properties of ProjectContainer
 * @param props.projects - list of repos
 */
export const ProjectContainer = ({
	projects,
}: ProjectContainerProperties): JSX.Element => (
	<div
		className={`${projectContainerProperties.project_container} d-flex flex-column p-3`}
	>
		{projects.length > 0 ? (
			projects.map((eachProject: RenderableProject, _ind: number) => (
				<Project
					isPrivate={eachProject.isPrivate}
					key={eachProject.title}
					link={eachProject.link}
					title={eachProject.title}
				/>
			))
		) : (
			<div>{"No Projects to Display"}</div>
		)}
	</div>
);
