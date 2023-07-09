/* eslint-disable no-console -- disabled */
/* eslint-disable require-await -- disabled, need to report non-awaited promise to front-end */
/* eslint-disable @typescript-eslint/indent -- disabled */
/* eslint-disable no-shadow -- disabled */
/* eslint-disable no-unused-vars -- disabled */
/* eslint-disable no-magic-numbers -- disabled */

import Image from "next/image";
import React from "react";

import { BasicLayout } from "@/modules/common";

import schoolStyles from "./School.module.css";

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

const SCHOOL_CONTAINER_QUERY_SELECTOR = "#school_container";

const ANIMATION_EASING_FUNCTION = "ease-in-out";

const schoolElements = [
    <>
        <div className="d-flex flex-row justify-content-center align-items-center">
            <Image
                alt="The Independence School. Newark, DE."
                className={`${schoolStyles.school_picture}`}
                height="200"
                src="/independence_school.jpg"
                width="200"
            />
        </div>
        <div className={`${schoolStyles.school_description} text-wrap my-auto`}>
            <div className="mx-4">
                {
                    "The Independence School is where I spent all my years as a young middle school student. As you can see, it has a magnificent campus. A campus that spans miles, leaving lots of places to meet new people. Most of us graduated here and went to local high schools. Someone described this school online, and I echo their sentiments as well. That the time I spent at school felt less like a school and more like an actual community."
                }
            </div>
        </div>
    </>,
    <>
        <div className="d-flex flex-row justify-content-center align-items-center">
            <Image
                alt="Salesianum School. Wilmington, DE."
                className={`${schoolStyles.school_picture}`}
                height="200"
                src="/salesianum_school.jpg"
                width="200"
            />
        </div>
        <div className={`${schoolStyles.school_description} text-wrap my-auto`}>
            <div className="mx-4">
                {
                    "Salesianum School was a private high school located in Wilmington, DE. I received generous financial aid to go there, so it was my first choice. It had all the boxes checked, sports and rigorous academia. I played soccer during my first year there and got along well with the academia. I met some great friends along the way, and we would hang out after school every day. The experience was exceptionally bright for all four years I was there."
                }
            </div>
        </div>
    </>,
    <>
        <div className="d-flex flex-row justify-content-center align-items-center">
            <Image
                alt="The University of Delaware. Newark, DE."
                className={`${schoolStyles.school_picture}`}
                height="200"
                src="/ud.jpg"
                width="200"
            />
        </div>
        <div className={`${schoolStyles.school_description} text-wrap my-auto`}>
            <div className="mx-4">
                {
                    "The University of Delaware was such an honor to attend. I've met many amazing people here, from those in my realm of study to those studying archaeology. I settled down with an exceptional friend group at school and have found my place. This university has prepared me for the industry and instilled the drive to keep learning by continuously improving my craft. It's created a highly skilled professional ready and willing to put in the time and effort to achieve a desirable result."
                }
            </div>
        </div>
    </>,
];

/**
 * Swings the school container from the right
 */
const swingRight = (): void => {
    const schoolContainer = document.querySelector(
        SCHOOL_CONTAINER_QUERY_SELECTOR,
    );
    schoolContainer?.animate(
        [
            { opacity: "0%", position: "absolute", right: "100vw" },
            { opacity: "100%", position: "relative", right: "0" },
        ],
        {
            duration: 1200,
            easing: ANIMATION_EASING_FUNCTION,
            fill: "forwards",
        },
    );
};

/**
 * Swings the school container from the left
 */
const swingLeft = (): void => {
    const schoolContainer = document.querySelector(
        SCHOOL_CONTAINER_QUERY_SELECTOR,
    );
    schoolContainer?.animate(
        [
            { left: "100vw", opacity: "0%", position: "absolute" },
            { left: "0", opacity: "100%", position: "relative" },
        ],
        {
            duration: 1200,
            easing: ANIMATION_EASING_FUNCTION,
            fill: "forwards",
        },
    );
};

/**
 * The school component, which will list all the schools I've went to, and current curriculum I am undergoing
 *
 * @returns The school component
 */
export const School = (): JSX.Element => {
    const [selectedSlide, setSelectedSlide] = React.useState<number>(
        SCHOOL_SELECTED.COLLEGE,
    );

    /**
     * Handles the event when the left button is clicked
     */
    const toggleLeftClick = React.useCallback(async (): Promise<void> => {
        const schoolContainer = document.querySelector(
            SCHOOL_CONTAINER_QUERY_SELECTOR,
        );
        const animation = schoolContainer?.animate(
            [
                { opacity: "100%", position: "absolute", right: "0vw" },
                {
                    opacity: "0%",
                    position: "absolute",
                    right: "100vw",
                },
            ],
            {
                duration: 1200,
                easing: ANIMATION_EASING_FUNCTION,
                fill: "forwards",
            },
        );
        const isAnimationFinished = await animation?.finished;
        if (isAnimationFinished) {
            setSelectedSlide(
                selectedSlide === 0
                    ? schoolArray[2]
                    : schoolArray[selectedSlide - 1],
            );
            swingLeft();
        }
    }, [selectedSlide]);

    /**
     * Handles the event when the right button is clicked
     */
    const toggleRightClick = React.useCallback(async (): Promise<void> => {
        const schoolContainer = document.querySelector(
            SCHOOL_CONTAINER_QUERY_SELECTOR,
        );
        const animation = schoolContainer?.animate(
            [
                { left: "0vw", opacity: "100%", position: "absolute" },
                {
                    left: "100vw",
                    opacity: "0%",
                    position: "absolute",
                },
            ],
            {
                duration: 1200,
                easing: ANIMATION_EASING_FUNCTION,
                fill: "forwards",
            },
        );
        const isAnimationFinished = await animation?.finished;
        if (isAnimationFinished) {
            setSelectedSlide(
                selectedSlide === 2
                    ? schoolArray[0]
                    : schoolArray[selectedSlide + 1],
            );
            swingRight();
        }
    }, [selectedSlide]);

    return (
        <BasicLayout>
            <div
                className={`d-flex flex-column w-100 justify-content-center align-items-center ${schoolStyles.school_page}`}
            >
                <div className={`position-relative ${schoolStyles.school_row}`}>
                    <div
                        className={`d-flex flex-row justify-content-between p-4 mb-4 rounded ${schoolStyles.school_container} position-relative`}
                        id="school_container"
                    >
                        {schoolElements[selectedSlide]}
                    </div>
                    <div
                        className={`position-absolute d-flex flex-row justify-content-between ${schoolStyles.toggle_container}`}
                    >
                        <div
                            className={`p-2 rounded-circle ${schoolStyles.toggle_caret}`}
                            id="left_button"
                            onClick={toggleLeftClick}
                        >
                            <i className="fa-solid fa-caret-left fa-2xl" />
                        </div>
                        <div
                            className={`p-2 rounded-circle ${schoolStyles.toggle_caret}`}
                            id="right_button"
                            onClick={toggleRightClick}
                        >
                            <i className="fa-solid fa-caret-right fa-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </BasicLayout>
    );
};
