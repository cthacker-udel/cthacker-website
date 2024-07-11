import styles from "@/modules/Projects/Projects.module.css";

/**
 * Finds the indexes of all the repositories who's name matches the name we are searching for
 *
 * @param repoName - The name of the repo we are searching for
 * @param repos - The repository elements we are searching over
 * @param updateFirstFound - Whether to 1) scroll to first repo found and 2) Update class name of first repo found
 * @returns The indexes of the found repositories
 */
export const findRepoNameIndexes = (
    repoName: string,
    repos: HTMLDivElement[],
    updateFirstFound?: boolean,
): number[] => {
    if (repoName.length <= 0) {
        return [];
    }

    const matchingRepoIndexes = [];
    let index = 0;
    let updateFirst = updateFirstFound;
    for (const eachRepo of repos) {
        const { reponame } = eachRepo.dataset;
        if (
            reponame
                ?.toLocaleLowerCase()
                .startsWith(repoName.toLocaleLowerCase())
        ) {
            if (updateFirst) {
                eachRepo.scrollIntoView({ behavior: "smooth" });
                eachRepo.className = `${eachRepo.className} ${styles.currently_selected}`;
                updateFirst = false;
            }
            matchingRepoIndexes.push(index);
        }

        index += 1;
    }
    return matchingRepoIndexes;
};
