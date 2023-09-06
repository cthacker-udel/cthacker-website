/* eslint-disable node/no-unpublished-import -- disabled */
import { Key } from "ts-key-enum";

/**
 * Calculates the new index of the repository we are going to "select"
 *
 * @param key - The key being pressed
 * @param repoLength - The length of the repos
 * @param oldIndex - The old currently selected index
 * @returns The new index of the repository we are going to "select"
 */
export const calculateNewSelectedIndex = (
    key: string,
    repoLength: number,
    oldIndex: number,
): number => {
    if (key === Key.ArrowDown) {
        return oldIndex === repoLength - 1 ? 0 : oldIndex + 1;
    }
    return oldIndex === 0 ? repoLength - 1 : oldIndex - 1;
};
