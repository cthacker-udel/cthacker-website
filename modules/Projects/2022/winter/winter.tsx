import { ProjectCard } from "modules/Projects/ProjectCard";
import React from "react";

/**
 * A list of all winter projects
 *
 * @returns All winter projects
 */
export const Winter = (): JSX.Element[] => [
	<ProjectCard
		description="Practice your stock market skills in this application that allows you to sign up, and get trading right away! Compete to reach the top of the leader boards!"
		key="stockApplication"
		language="NodeJS & AngularJS"
		name="Stock Application"
	/>,
	<ProjectCard
		description="App to schedule your school's courses, with fully functional backend."
		key="courseScheduler"
		language="NestJS & React"
		name="CourseScheduler"
	/>,
	<ProjectCard
		description="LeetCode problem solutions, attempted in all languages present in the Languages section of this website."
		key="leetCodeProblems"
		language="All"
		name="LeetCodeProblems"
	/>,
];
