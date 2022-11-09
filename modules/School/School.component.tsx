/* eslint-disable no-shadow -- disabled */
/* eslint-disable no-unused-vars -- disabled */
/* eslint-disable no-magic-numbers -- disabled */
import { BasicLayout } from "modules/common";
import Image from "next/image";
import React from "react";

import schoolStyles from "./School.module.css";

enum SCHOOL_SELECTED {
	MIDDLE_SCHOOL = 0,
	HIGH_SCHOOL = 1,
	COLLEGE_ = 2,
}

/**
 * The school component, which will list all the schools I've went to, and current curriculum I am undergoing
 *
 * @returns The school component
 */
export const School = (): JSX.Element => {
	const [selectedSlide, setSelectedSlide] = React.useState<number>(
		SCHOOL_SELECTED.MIDDLE_SCHOOL,
	);
	return (
		<BasicLayout>
			<div
				className={`d-flex flex-column h-100 w-100 justify-content-center align-items-center ${schoolStyles.school_page}`}
			>
				<div className="d-flex flex-row w-75 position-relative">
					<div>
						<i className="fa-solid fa-caret-left fa-2xl" />
					</div>
					<div className="d-flex flex-column w-100">
						<div
							className={`d-flex flex-row justify-content-between p-4 mb-4 rounded ${schoolStyles.school_container}`}
						>
							<Image
								alt="The Independence School. Newark, DE."
								className={`${schoolStyles.school_picture} rounded-circle img-thumbnail position-relative`}
								height="200"
								src="/independence_school.jpg"
								width="200"
							/>
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
						<div
							className={`d-flex flex-row justify-content-between my-4 p-4 rounded ${schoolStyles.school_container}`}
						>
							<Image
								alt="The Salesianum School. Wilmington, DE."
								className={`${schoolStyles.school_picture} rounded-circle img-thumbnail position-relative`}
								height="200"
								src="/salesianum_school.jpg"
								width="200"
							/>
							<div
								className={`${schoolStyles.school_description} text-wrap my-auto`}
							>
								<div className="mx-4">
									{
										"Salesianum School was a private high school located in Wilmington, DE. I received generous financial aid to go there, so it was my first choice. It had all the boxes checked, sports and rigorous academia. I played soccer during my first year there and got along well with the academia. I met some great friends along the way, and we would hang out after school every day. The experience was exceptionally bright for all four years I was there."
									}
								</div>
							</div>
						</div>
						<div
							className={`d-flex flex-row justify-content-between mt-4 p-4 rounded ${schoolStyles.school_container}`}
						>
							<Image
								alt="The University of Delaware. Newark, DE."
								className={`${schoolStyles.school_picture} rounded-circle img-thumbnail position-relative`}
								height="200"
								src="/ud.jpg"
								width="200"
							/>
							<div
								className={`${schoolStyles.school_description} text-wrap my-auto`}
							>
								<div className="mx-4">
									{
										"The University of Delaware was such an honor to attend. I've met many amazing people here, from those in my realm of study to those studying archaeology. I settled down with an exceptional friend group at school and have found my place. This university has prepared me for the industry and instilled the drive to keep learning by continuously improving my craft. It's created a highly skilled professional ready and willing to put in the time and effort to achieve a desirable result."
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</BasicLayout>
	);
};
