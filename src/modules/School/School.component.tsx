/* eslint-disable no-console -- disabled */
/* eslint-disable require-await -- disabled, need to report non-awaited promise to front-end */
/* eslint-disable @typescript-eslint/indent -- disabled */
/* eslint-disable no-shadow -- disabled */
/* eslint-disable no-unused-vars -- disabled */
/* eslint-disable no-magic-numbers -- disabled */

import Image from "next/image";
import React from "react";
import { Button, OverlayTrigger } from "react-bootstrap";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import { generateTooltip } from "@/helpers";
import { BasicLayout } from "@/modules/common";

import schoolStyles from "./School.module.css";

enum SCHOOL_SELECTED {
    MIDDLE_SCHOOL = 0,
    HIGH_SCHOOL = 1,
    COLLEGE = 2,
}

const SCHOOL_PREVIOUS_TEXT: { [key: number]: string } = {
    "0": "College (University of Delaware)",
    "1": "Middle School (Independence School)",
    "2": "High School (Salesianum School)",
};

const SCHOOL_NEXT_TEXT: { [key: number]: string } = {
    "0": "High School (Salesianum School)",
    "1": "College (University of Delaware)",
    "2": "Middle School (Independence School)",
};

const schoolArray = [
    SCHOOL_SELECTED.MIDDLE_SCHOOL,
    SCHOOL_SELECTED.HIGH_SCHOOL,
    SCHOOL_SELECTED.COLLEGE,
];

const schoolElements = [
    <div
        className={schoolStyles.school_content}
        key="Independence School Description"
    >
        <Image
            alt="The Independence School. Newark, DE."
            className={`${schoolStyles.school_picture}`}
            height="200"
            src="/independence_school.jpg"
            width="200"
        />
        <div className={`${schoolStyles.school_description}`}>
            <div className="mx-4">
                {
                    "The Independence School is where I spent all my years as a young middle school student. As you can see, it has a magnificent campus. A campus that spans miles, leaving lots of places to meet new people. Most of us graduated here and went to local high schools. Someone described this school online, and I echo their sentiments as well. That the time I spent at school felt less like a school and more like an actual community."
                }
            </div>
        </div>
    </div>,

    <div
        className={schoolStyles.school_content}
        key="Salesianum School Description"
    >
        <Image
            alt="Salesianum School. Wilmington, DE."
            className={`${schoolStyles.school_picture}`}
            height="200"
            src="/salesianum_school.jpg"
            width="200"
        />
        <div className={`${schoolStyles.school_description}`}>
            <div className="mx-4">
                {
                    "Salesianum School was a private high school located in Wilmington, DE. I received generous financial aid to go there, so it was my first choice. It had all the boxes checked, sports and rigorous academia. I played soccer during my first year there and got along well with the academia. I met some great friends along the way, and we would hang out after school every day. The experience was exceptionally bright for all four years I was there."
                }
            </div>
        </div>
    </div>,
    <div
        className={schoolStyles.school_content}
        key="University of Delaware school description"
    >
        <Image
            alt="The University of Delaware. Newark, DE."
            className={`${schoolStyles.school_picture}`}
            height="200"
            src="/ud.jpg"
            width="200"
        />
        <div className={`${schoolStyles.school_description}`}>
            <div className="mx-4">
                {
                    "The University of Delaware was such an honor to attend. I've met many amazing people here, from those in my realm of study to those studying archaeology. I settled down with an exceptional friend group at school and have found my place. This university has prepared me for the industry and instilled the drive to keep learning by continuously improving my craft. It's created a highly skilled professional ready and willing to put in the time and effort to achieve a desirable result."
                }
            </div>
        </div>
    </div>,
];

/**
 * The school component, which will list all the schools I've went to, and current curriculum I am undergoing
 *
 * @returns The school component
 */
export const School = (): JSX.Element => {
    const [selectedSlide, setSelectedSlide] = React.useState<number>(
        SCHOOL_SELECTED.COLLEGE,
    );

    return (
        <BasicLayout cssOverride={schoolStyles.school_layout}>
            <div
                className={schoolStyles.school_container}
                id="school_container"
            >
                {schoolElements[selectedSlide]}
            </div>
            <div className={schoolStyles.button_bar}>
                <OverlayTrigger
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generateTooltip({
                            content: SCHOOL_PREVIOUS_TEXT[selectedSlide],
                            props: properties,
                        })
                    }
                    placement="top-end"
                >
                    <Button variant="outline-primary">
                        <i className="fa-solid fa-arrow-left" />
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={(properties: OverlayInjectedProps): JSX.Element =>
                        generateTooltip({
                            content: SCHOOL_NEXT_TEXT[selectedSlide],
                            props: properties,
                        })
                    }
                    placement="top-start"
                >
                    <Button variant="outline-primary">
                        <i className="fa-solid fa-arrow-right" />
                    </Button>
                </OverlayTrigger>
            </div>
        </BasicLayout>
    );
};
