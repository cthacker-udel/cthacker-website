/* eslint-disable security/detect-object-injection -- disabled, does not use user input */
import type { Repo } from "@/modules/Projects/helpers";

type MonthKeys =
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December";

const months: { [key: number]: MonthKeys } = {
    "0": "January",
    "1": "February",
    "10": "November",
    "11": "December",
    "2": "March",
    "3": "April",
    "4": "May",
    "5": "June",
    "6": "July",
    "7": "August",
    "8": "September",
    "9": "October",
};

/**
 *
 * @param repos
 * @returns
 */
const repoCountByMonth = (
    repos: Repo[],
): Partial<{ [_key in MonthKeys]: number }> => {
    const monthCount: Partial<{ [_key in MonthKeys]: number }> = {};
    for (const eachRepo of repos) {
        if (eachRepo.created_at !== null) {
            const createdAtDate = new Date(Date.parse(eachRepo.created_at));
            const month = createdAtDate.getMonth();
            const stringifiedMonth = months[month];
            if (stringifiedMonth in monthCount) {
                (monthCount as { [_key in MonthKeys]: number })[
                    stringifiedMonth
                ] += 1;
            } else {
                monthCount[stringifiedMonth] = 1;
            }
        }
    }

    return monthCount;
};

export { type MonthKeys, repoCountByMonth };
