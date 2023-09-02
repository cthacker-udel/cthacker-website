/**
 * Maps all the repositories from node elements to div elements
 *
 * @param repos - The repos to map
 * @returns All the mapped repositories
 */
export const mapReposToDivs = (repos: NodeListOf<Element>): HTMLDivElement[] =>
    [...repos].map((eachRepo: Element) => eachRepo as HTMLDivElement);
