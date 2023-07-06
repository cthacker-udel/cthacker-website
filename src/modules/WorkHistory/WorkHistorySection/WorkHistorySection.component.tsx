/* eslint-disable @typescript-eslint/no-floating-promises -- disabled, known bug */
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import workHistorySectionStyles from "./WorkHistorySection.module.css";

type WorkHistorySectionProperties = {
	current?: boolean;
	companyName?: string;
	description: string;
	endDate?: Date;
	jobLocation: string;
	jobTitle: string;
	imgHrefLink?: string;
	imgLink?: string;
	startDate?: Date;
};

/**
 *
 * @param date
 * @returns
 */
const dateifyDate = (date: Date): string =>
	`${date.getMonth()}/${date.getFullYear()}`;

/**
 *
 * @param param0
 * @returns
 */
export const WorkHistorySection = ({
	current,
	companyName,
	description,
	endDate,
	jobLocation,
	jobTitle,
	imgHrefLink,
	imgLink,
	startDate,
}: WorkHistorySectionProperties): JSX.Element => {
	const router = useRouter();

	/**
	 *
	 * @param route
	 */
	const imgClick = (route: string): void => {
		router.push(route);
	};

	return (
		<div
			className={`d-flex flex-row justify-content-around w-100 mb-4 ${workHistorySectionStyles.section}`}
		>
			{imgLink && (
				<div className="d-flex flex-column">
					<Image
						alt="work_history_section_link"
						className={`${workHistorySectionStyles.job_img} shadow`}
						height="200"
						onClick={(): void => {
							imgClick(imgHrefLink ?? "#");
						}}
						src={imgLink}
						width="200"
					/>
					{jobTitle && (
						<div
							className={`text-center fw-bold ${workHistorySectionStyles.img_subtitle}`}
						>
							{jobTitle}
						</div>
					)}
					{jobLocation && (
						<div
							className={`text-center ${workHistorySectionStyles.img_subtitle}`}
						>
							{jobLocation}
						</div>
					)}
					{companyName && (
						<div
							className={`text-center ${workHistorySectionStyles.img_subtitle}`}
						>
							{companyName}
						</div>
					)}
					{current ? (
						<div
							className={`badge bg-primary ${workHistorySectionStyles.current_badge} mx-auto mt-1`}
						>
							{"Current"}
						</div>
					) : (
						<div
							className={`${workHistorySectionStyles.start_end_date} text-center`}
						>
							{startDate &&
								endDate &&
								`${dateifyDate(startDate)} - ${dateifyDate(
									endDate,
								)}`}
						</div>
					)}
				</div>
			)}
			<div
				className={`${workHistorySectionStyles.description} d-flex flex-column justify-content-center text-wrap`}
			>
				{description}
			</div>
		</div>
	);
};
