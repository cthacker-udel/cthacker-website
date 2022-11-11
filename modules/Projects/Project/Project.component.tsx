import React from "react";

import projectStyles from "./Project.module.css";

type ProjectProperties = {
	link: string;
	isPrivate: boolean;
	title: string;
};

/**
 *
 * @param props - properties of the Project app
 * @param props.link - link of the repository
 * @param props.title - title of the repo
 * @param props.private - whether the repo is private or not
 * @returns The project rendered
 */
export const Project = ({
	link,
	title,
	isPrivate,
}: ProjectProperties): JSX.Element => (
	<div className="d-flex flex-row">
		<a className={`${projectStyles.description}`} href={link}>
			{title}{" "}
			{isPrivate ? (
				<i className="fa-solid fa-lock" />
			) : (
				<i className="fa-solid fa-unlock" />
			)}
		</a>
	</div>
);
