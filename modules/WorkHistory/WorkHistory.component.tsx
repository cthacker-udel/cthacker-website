import { BasicLayout } from "modules/common";
import React from "react";

import { Fall2022 } from "./sections";
import { WorkHistoryHeader } from "./WorkHistoryHeader";

/**
 * Page detailing all the places I've worked at, along with languages, and tasks.
 *
 * @returns The work history component
 */
export const WorkHistory = (): JSX.Element => (
	<BasicLayout>
		<div className="w-100 h-100 d-flex flex-row mt-4">
			<WorkHistoryHeader
				// When we have scroll-spy implemented displayOrder={0}
				sections={[...Fall2022]}
				year={2022}
			/>
		</div>
	</BasicLayout>
);
