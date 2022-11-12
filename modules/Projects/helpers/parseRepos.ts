import type { RenderableProject } from "./RenderableProject";
import type { Repo } from "./Repo";

/**
 * Parses an array of repos for display in the frontend
 *
 * @param repos - An array of x repos
 * @returns The repos that belong to the user cthacker-udel, and all the essential information stripped from the response
 */
export const parseRepos = (repos: Repo[]): RenderableProject[] => {
	const generatedRepos = repos
		.filter((eachRepo: Repo) => eachRepo.owner.login === "cthacker-udel")
		.map((eachRepo: Repo) => ({
			createdDay: new Date(
				eachRepo.created_at ?? new Date().toUTCString(),
			).getUTCDay(),
			createdMonth: new Date(
				eachRepo.created_at ?? new Date().toUTCString(),
			).getUTCMonth(),
			createdYear: new Date(
				eachRepo.created_at ?? new Date().toUTCString(),
			).getUTCFullYear(),
			isPrivate: eachRepo.visibility === "private",
			link: eachRepo.html_url,
			title: eachRepo.name,
		}))
		.sort((repo1: RenderableProject, repo2: RenderableProject) =>
			repo1.title.localeCompare(repo2.title),
		);
	const filteredRepos: RenderableProject[] = [];
	for (const eachProject of generatedRepos) {
		if (
			!filteredRepos.some(
				(filteredProject) =>
					filteredProject.title.toLocaleLowerCase().trim() ===
					eachProject.title.toLocaleLowerCase().trim(),
			)
		) {
			filteredRepos.push(eachProject);
		}
	}
	return filteredRepos;
};
