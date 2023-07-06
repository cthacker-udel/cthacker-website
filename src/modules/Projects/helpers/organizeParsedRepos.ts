/* eslint-disable no-negated-condition -- not needed */
import { Season } from "../Season";
import type { RenderableProject } from "./RenderableProject";

const seasons = [
	Season.WINTER,
	Season.WINTER,
	Season.SPRING,
	Season.SPRING,
	Season.SPRING,
	Season.SUMMER,
	Season.SUMMER,
	Season.SUMMER,
	Season.FALL,
	Season.FALL,
	Season.FALL,
	Season.WINTER,
];

const seasonValues = [Season.WINTER, Season.SPRING, Season.SUMMER, Season.FALL];

/**
 *
 * @param month - the month we are determining which season it falls under
 * @returns - The calculated season
 */
const genSeasonValueFromMonth = (month: number): Season => seasons[month];

/**
 * Organizes all projects into a findable, efficient record, allowing O(1) access time
 *
 * @param repos - the parsed projects
 * @returns the projects organized into a year-season style
 */
export const organizeParsedRepos = (
	repos: RenderableProject[],
): { [key: number]: { [key: number]: RenderableProject[] } } => {
	// { 2020: { fall: [], spring: [] }}
	const yearRecord: {
		[key: number]: { [key: number]: RenderableProject[] };
	} = {};
	for (const eachRepo of repos) {
		// O(n)
		if (
			eachRepo.createdDay !== undefined &&
			eachRepo.createdMonth !== undefined &&
			eachRepo.createdYear !== undefined
		) {
			if (
				!Object.keys(yearRecord).includes(
					eachRepo.createdYear.toString(),
				)
			) {
				const calculatedSeason = genSeasonValueFromMonth(
					eachRepo.createdMonth,
				);
				yearRecord[eachRepo.createdYear] = {};
				yearRecord[eachRepo.createdYear][calculatedSeason] = [eachRepo];
			} else {
				const calculatedSeason = genSeasonValueFromMonth(
					eachRepo.createdMonth,
				);
				const monthRecords = yearRecord[eachRepo.createdYear];
				if (
					Object.keys(monthRecords).includes(
						calculatedSeason.toString(),
					)
				) {
					monthRecords[calculatedSeason] = [
						...monthRecords[calculatedSeason],
						eachRepo,
					];
				} else {
					monthRecords[calculatedSeason] = [eachRepo];
				}
			}
		}
	}
	for (const eachYear of Object.keys(yearRecord)) {
		for (const eachSeason of seasonValues) {
			if (yearRecord[Number(eachYear)][eachSeason] === undefined) {
				yearRecord[Number(eachYear)][eachSeason] = [];
			}
		}
	}
	return yearRecord;
};
