/**
 * Takes in the repository code lengths (the number of lines of a specific language across all repos), and sorts them by code line amount
 *
 * @param results - The code language results
 * @returns The sorted code results by lines
 */
export const sortCodeResultsByLines = (results: {
    [key: string]: number;
}): { [key: string]: number } => {
    const sortedValues = Object.entries(results).sort(
        (entry1, entry2) => entry2[1] - entry1[1],
    );

    const sortedCodeLines: { [key: string]: number } = {};

    for (const eachEntry of sortedValues) {
        sortedCodeLines[eachEntry[0]] = eachEntry[1];
    }

    return sortedCodeLines;
};
