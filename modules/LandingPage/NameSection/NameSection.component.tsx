import Image from "next/image";
import React from "react";

import styles from "./NameSection.module.css";

/**
 * The name section of the landing page, displays the name along with what the purpose of the page is
 *
 * @returns The name section of the landing page
 */
export const NameSection = (): JSX.Element => (
	<div className="d-flex flex-row w-75 mx-auto justify-content-center">
		<div className="text-start fs-2 fw-bold my-auto me-4">
			{"Cameron M.C. Thacker"}
		</div>
		<div
			className={`position-relative ${styles.img_container} d-none d-lg-block`}
		>
			<Image
				alt="Profile image"
				className="border border-dark rounded-circle img-thumbnail"
				fill
				src="https://avatars.githubusercontent.com/u/70614147?v=4"
			/>
		</div>
		<div
			className={`fs-2 fw-semibold text-muted my-auto ms-4 ${styles.occupation}`}
		>
			{"Full Stack Developer"}
		</div>
	</div>
);
