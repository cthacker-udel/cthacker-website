/* eslint-disable no-magic-numbers -- disabled */
import React from "react";
import { Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import type { AggregateRepoStats } from "../helpers";
import projectAggregateStyles from "./ProjectAggregateStats.module.css";

/**
 * Generates a tooltip element given the properties from the overlay trigger
 *
 * @param properties - The props for the tooltip element
 * @param id - the id for the tooltip element
 * @param text - the text for the tooltip element
 * @returns - The tooltip element
 */
const createProjectTooltip = (
	properties: OverlayInjectedProps,
	id: string,
	text: string,
): JSX.Element => (
	<Tooltip id={id} {...properties}>
		{text}
	</Tooltip>
);

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
					<div className={`${projectAggregateStyles.language_list}`}>
						{languages.map((eachLang: string) => (
							<div key={eachLang}>{eachLang}</div>
						))}
					</div>
				) : (
					<div>{"No Languages"}</div>
				)}
			</div>
			<div>
				<OverlayTrigger
					delay={{ hide: 50, show: 100 }}
					overlay={(properties: OverlayInjectedProps): JSX.Element =>
						createProjectTooltip(
							properties,
							"numLanguageTooltip",
							"Number of languages",
						)
					}
					placement="right"
				>
					<Badge bg="dark" className="me-1">
						<i className="fa-solid fa-hashtag fa-sm me-1" />
						<i className="fa-solid fa-language fa-sm" />
					</Badge>
				</OverlayTrigger>
				{languagesCount}
			</div>
			<div>
				<OverlayTrigger
					delay={{ hide: 50, show: 100 }}
					overlay={(properties: OverlayInjectedProps): JSX.Element =>
						createProjectTooltip(
							properties,
							"numRepositoryTooltip",
							"Number of projects",
						)
					}
					placement="right"
				>
					<Badge bg="dark" className="me-1">
						<i className="fa-solid fa-folder fa-sm me-1" />
					</Badge>
				</OverlayTrigger>
				{totalCount}
			</div>
			<div>
				<OverlayTrigger
					delay={{ hide: 50, show: 100 }}
					overlay={(properties: OverlayInjectedProps): JSX.Element =>
						createProjectTooltip(
							properties,
							"numRepositoryFavoritedCount",
							"Number of projects favorited",
						)
					}
					placement="right"
				>
					<Badge bg="dark" className="me-1">
						<i className="fa-solid fa-star fa-sm me-1" />
					</Badge>
				</OverlayTrigger>
				{totalStars}
			</div>
			<div>
				<OverlayTrigger
					delay={{ hide: 50, show: 100 }}
					overlay={(properties: OverlayInjectedProps): JSX.Element =>
						createProjectTooltip(
							properties,
							"numRepositoryWatched",
							"Number of projects followed",
						)
					}
					placement="right"
				>
					<Badge bg="dark" className="me-1">
						<i className="fa-solid fa-eye" />
					</Badge>
				</OverlayTrigger>
				{totalWatch}
			</div>
		</div>
	</>
);
