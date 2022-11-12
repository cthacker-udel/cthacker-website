/* eslint-disable no-magic-numbers -- disabled */
import React from "react";

import type { AggregateRepoStats } from "../helpers";
import languageStyles from "./ProjectAggregateStats.module.css";

/**
 *
 * @param props - The aggregate repo stats
 * @param props.languages - The languages of all my repos
 * @param props.languagesCount - The count of all the languages in my repos
 * @param props.totalCount - The total count of all repositories I own
 * @param props.totalStars - The total amount of all stars on all my repos
 * @param props.totalWatch - The total amount of all watches on all my repos
 * @returns The component that displays the aggregate data acquired of all my repos
 */
export const ProjectAggregateStats = ({
	languages,
	languagesCount,
	totalCount,
	totalStars,
	totalWatch,
}: AggregateRepoStats): JSX.Element => (
	<>
		<div className="fs-4">{"Overall Project Stats"}</div>
		<div className="d-flex flex-column">
			<div className="d-flex flex-row">
				<i className="fa-solid fa-language me-1 my-auto fa-xs" />
				{languages.length > 0 ? (
					<div className={`${languageStyles.language_list}`}>
						{languages.map((eachLang: string) => (
							<div key={eachLang}>{eachLang}</div>
						))}
					</div>
				) : (
					<div>{"No Languages"}</div>
				)}
			</div>
			<div>
				<i className="fa-solid fa-hashtag fa-xs" />
				<i className="fa-solid fa-language me-1 my-auto fa-xs" />
				{languagesCount}
			</div>
			<div>
				<i className="fa-solid fa-hashtag fa-xs" />
				<i className="fa-solid fa-folder me-1 my-auto fa-xs" />
				{totalCount}
			</div>
			<div>
				<i className="fa-solid fa-star me-1 my-auto fa-xs" />
				{totalStars}
			</div>
			<div>
				<i className="fa-solid fa-eye me-1 my-auto fa-xs" />
				{totalWatch}
			</div>
		</div>
	</>
);
