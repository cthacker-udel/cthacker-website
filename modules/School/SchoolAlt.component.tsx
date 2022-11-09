/* eslint-disable no-unused-vars -- disabled */
/* eslint-disable no-magic-numbers -- disabled */
import { BasicLayout } from "modules/common";
import Image from "next/image";
import React from "react";

import schoolStyles from "./SchoolAlt.module.css";

enum SCHOOL_SELECTED {
	MIDDLE_SCHOOL = 0,
	HIGH_SCHOOL = 1,
	COLLEGE = 2,
}

const schoolArray = [
	SCHOOL_SELECTED.MIDDLE_SCHOOL,
	SCHOOL_SELECTED.HIGH_SCHOOL,
	SCHOOL_SELECTED.COLLEGE,
];

/**
 * The school component, which will list all the schools I've went to, and current curriculum I am undergoing
 *
 * @returns The school component
 */
export const School = (): JSX.Element => {
	const [selectedSlide, setSelectedSlide] = React.useState<number>(
		SCHOOL_SELECTED.MIDDLE_SCHOOL,
	);

	/**
	 * Handles the event when the left button is clicked
	 */
	const toggleLeftClick = React.useCallback((): void => {
		setSelectedSlide(
			selectedSlide === 0
				? schoolArray[2]
				: schoolArray[selectedSlide - 1],
		);
	}, [selectedSlide]);

	/**
	 * Handles the event when the right button is clicked
	 */
	const toggleRightClick = React.useCallback((): void => {
		setSelectedSlide(
			selectedSlide === 2
				? schoolArray[0]
				: schoolArray[selectedSlide + 1],
		);
	}, [selectedSlide]);

	return (
		<BasicLayout>
			<div
				className={`d-flex flex-column h-100 w-100 justify-content-center align-items-center ${schoolStyles.school_page}`}
			>
				<div className={`position-relative ${schoolStyles.school_row}`}>
					<div
						className={`${schoolStyles.left_toggle} position-absolute p-3 rounded-circle`}
						onClick={toggleLeftClick}
					>
						<i className="fa-solid fa-caret-left fa-2xl" />
					</div>
					<div
						className={`${schoolStyles.right_toggle} position-absolute p-3 rounded-circle`}
						onClick={toggleRightClick}
					>
						<i className="fa-solid fa-caret-right fa-2xl" />
					</div>
					<div
						className={`d-flex flex-row justify-content-between p-4 mb-4 rounded ${schoolStyles.school_container}`}
					>
						<div className="d-flex flex-row justify-content-center align-items-center">
							<Image
								alt="The Independence School. Newark, DE."
								className={`${schoolStyles.school_picture}`}
								height="200"
								src="/independence_school.jpg"
								width="200"
							/>
						</div>
						<div
							className={`${schoolStyles.school_description} text-wrap my-auto`}
						>
							<div className="mx-4">
								{
									"The Independence School is where I spent all my years as a young middle school student. As you can see, it has a magnificent campus. A campus that spans miles, leaving lots of places to meet new people. Most of us graduated here and went to local high schools. Someone described this school online, and I echo their sentiments as well. That the time I spent at school felt less like a school and more like an actual community."
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</BasicLayout>
	);
};
