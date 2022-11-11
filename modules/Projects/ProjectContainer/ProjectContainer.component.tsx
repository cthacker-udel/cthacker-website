import React from "react";

import { Project } from "../Project/Project.component";
import projectContainerProperties from "./ProjectContainer.module.css";

type ProjectSchema = {
	link: string;
	isPrivate: boolean;
	title: string;
};

type ProjectContainerProperties = {
	projects: ProjectSchema[];
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
		className={`${projectContainerProperties.project_container} d-flex flex-column`}
	>
		{projects.map((eachProject: ProjectSchema, _ind: number) => (
			<Project
				isPrivate={eachProject.isPrivate}
				key={eachProject.title}
				link={eachProject.link}
				title={eachProject.title}
			/>
		))}
	</div>
);
