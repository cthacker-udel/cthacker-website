/**
 *
 * @param repository
 * @returns
 */
export const openRepositoryLink = (repository: HTMLDivElement): void => {
    if (window !== undefined) {
        const { repourl: repoUrl } = repository.dataset;
        if (repoUrl !== undefined) {
            window.open(repoUrl, "_newtab");
        }
    }
};
