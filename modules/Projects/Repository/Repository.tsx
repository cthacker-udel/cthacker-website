import React from "react";
import { Repo } from "../helpers";
import styles from "./Repository.module.css";

type RepositoryProps = Repo;

export const Repository = ({ ...rest }: RepositoryProps): JSX.Element => {
	const [languages, setLanguages] = React.useState<string[]>([]);

	const fetchLanguages = React.useCallback(async () => {}, []);

	return (
		<div className={styles.repository}>
			<div className={styles.name}>{rest.name}</div>
			<div className={styles.date}>
				{new Date(rest.created_at).toLocaleString()}
			</div>
		</div>
	);
};
