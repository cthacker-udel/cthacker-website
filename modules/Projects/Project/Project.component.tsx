import React from "react";

import type { RenderableProject } from "../helpers";
import projectStyles from "./Project.module.css";

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
}: RenderableProject): JSX.Element => (
	<div className="d-flex flex-row">
		<a className={`${projectStyles.description}`} href={link}>
			{title.trim()}{" "}
		</a>
		{isPrivate ? (
			<i className="fa-solid fa-eye-slash fa-xs ms-1 my-auto" />
		) : (
			<i className="fa-solid fa-eye fa-xs ms-1 my-auto" />
		)}
	</div>
);
