import React from "react";
import { Card } from "react-bootstrap";

import projectCardStyles from "./ProjectCard.module.css";

type ProjectCardProperties = {
	description: string;
	language: string;
	name: string;
};

/**
 * Helper component to make it easier to craft project cards
 */
export const ProjectCard = ({
	description,
	language,
	name,
}: ProjectCardProperties): JSX.Element => (
	<Card className={`p-3 mx-2 shadow ${projectCardStyles.project_card}`}>
		<Card.Title className={`${projectCardStyles.project_card_title}`}>
			{`${name}`}
		</Card.Title>
		<div className="border border-success my-2" />
		<Card.Text>{description}</Card.Text>
		<Card.Footer className={`${projectCardStyles.project_card_footer}`}>
			{language}
		</Card.Footer>
	</Card>
);
