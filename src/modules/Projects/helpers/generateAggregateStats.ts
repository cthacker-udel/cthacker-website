/* eslint-disable camelcase -- disabled */
import { Octokit } from "octokit";

import type { Repo } from "./Repo";

type AggregateRepoStats = {
    totalCount: number;
    totalStars: number;
    totalWatch: number;
    languages: string[];
    languagesCount: number;
};

/**
 *
 * @param repos
 */
const generateAggregateStats = async (
    repos: Repo[],
): Promise<AggregateRepoStats> => {
    const totalCount = repos.length;
    const languages: string[] = [];
    let totalStars = 0;
    let totalWatch = 0;
    const octokit = new Octokit({ auth: process.env.GITHUB_API_TOKEN });
    const languagesPromises = [];
    for (const eachRepo of repos) {
        totalStars += eachRepo.stargazers_count ?? 0;
        totalWatch += eachRepo.watchers_count ?? 0;
        const { languages_url } = eachRepo;
        languagesPromises.push(
            octokit.request(
                `GET ${languages_url.replace("https://api.github.com", "")}`,
            ),
        );
    }
    const fetchedLanguages = await Promise.all(languagesPromises);
    for (const eachLanguage of fetchedLanguages) {
        const { data } = eachLanguage;
        for (const eachKey of Object.keys(data)) {
            if (!languages.includes(eachKey)) {
                languages.push(eachKey);
            }
        }
    }
    languages.sort((lang1: string, lang2: string) =>
        lang1.localeCompare(lang2),
    );
    return {
        languages,
        languagesCount: languages.length,
        totalCount,
        totalStars,
        totalWatch,
    };
};

export { type AggregateRepoStats, generateAggregateStats };
