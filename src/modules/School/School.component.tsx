/* eslint-disable no-console -- disabled */
/* eslint-disable @typescript-eslint/indent -- disabled */
/* eslint-disable no-shadow -- disabled */
/* eslint-disable no-unused-vars -- disabled */

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, OverlayTrigger } from "react-bootstrap";
import type { OverlayInjectedProps } from "react-bootstrap/esm/Overlay";

import { generateTooltip } from "@/helpers";
import { useStyleInjector } from "@/hooks/useStyleInjector";
import { BasicLayout } from "@/modules/common";

import schoolStyles from "./School.module.css";

enum SCHOOL_SELECTED {
    MIDDLE_SCHOOL = 0,
    HIGH_SCHOOL = 1,
    COLLEGE = 2,
}

enum DIRECTION {
    LEFT = 0,
    RIGHT = 1,
    NONE = 2,
}

type SchoolState = {
    direction: DIRECTION;
    selected: SCHOOL_SELECTED;
};

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

const schoolElements = [
    <div
        className={schoolStyles.school_content}
        key="Independence School Description"
    >
        <Link href="https://www.theindependenceschool.org/" target="_blank">
            <Image
                alt="The Independence School. Newark, DE."
                className={`${schoolStyles.school_picture}`}
                height="200"
                src="/independence_school.jpg"
                width="200"
            />
        </Link>
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
        <Link href="https://www.salesianum.org/" target="_blank">
            <Image
                alt="Salesianum School. Wilmington, DE."
                className={`${schoolStyles.school_picture}`}
                height="200"
                src="/salesianum_school.jpg"
                width="200"
            />
        </Link>
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
        <Link href="https://www.udel.edu/" target="_blank">
            <Image
                alt="The University of Delaware. Newark, DE."
                className={`${schoolStyles.school_picture}`}
                height="200"
                src="/ud.jpg"
                width="200"
            />
        </Link>
        <div className={`${schoolStyles.school_description}`}>
            <div className="mx-4">
                {
                    "The University of Delaware was such an honor to attend. I've met many amazing people here, from those in my realm of study to those studying archaeology. I settled down with an exceptional friend group at school and have found my place. This university has prepared me for the industry and instilled the drive to keep learning by continuously improving my craft. It's created a highly skilled professional ready and willing to put in the time and effort to achieve a desirable result."
                }
            </div>
        </div>
    </div>,
];

const ANIMATION_CONSTANTS = {
    easingFunction: "ease-in-out",
    fillDirection: "forwards" as FillMode,
    marginMeasurement: "calc(100vw + 85vw)",
    schoolContainerQuery: "#school_container",
};

/**
 * The school component, which will list all the schools I've went to, and current curriculum I am undergoing
 *
 * @returns The school component
 */
export const School = (): JSX.Element => {
    useStyleInjector([{ cssQuery: "body", style: { overflowX: "hidden" } }]);

    const [schoolState, setSchoolState] = React.useState<SchoolState>({
        direction: DIRECTION.NONE,
        selected: SCHOOL_SELECTED.COLLEGE,
    });

    const swapSchoolSides = React.useCallback(async (leftToRight: boolean) => {
        const schoolContainer = document.querySelector(
            ANIMATION_CONSTANTS.schoolContainerQuery,
        );

        const animationKeyFrames = leftToRight
            ? [
                  {
                      marginRight: ANIMATION_CONSTANTS.marginMeasurement,
                  },
                  {
                      marginLeft: ANIMATION_CONSTANTS.marginMeasurement,
                      marginRight: "0",
                  },
              ]
            : [
                  { marginLeft: ANIMATION_CONSTANTS.marginMeasurement },
                  {
                      marginLeft: "0",
                      marginRight: ANIMATION_CONSTANTS.marginMeasurement,
                  },
              ];

        await schoolContainer?.animate(animationKeyFrames, {
            duration: 1000,
            easing: ANIMATION_CONSTANTS.easingFunction,
            fill: ANIMATION_CONSTANTS.fillDirection,
        }).finished;
    }, []);

    const animateFrom = React.useCallback(async (left: boolean) => {
        const schoolContainer = document.querySelector(
            ANIMATION_CONSTANTS.schoolContainerQuery,
        );
        await schoolContainer?.animate(
            [
                {
                    opacity: "0%",
                },
                { opacity: "100%" },
            ],
            {
                duration: 1,
                easing: ANIMATION_CONSTANTS.easingFunction,
                fill: ANIMATION_CONSTANTS.fillDirection,
            },
        ).finished;

        const keyFrames = left
            ? [
                  { marginRight: ANIMATION_CONSTANTS.marginMeasurement },
                  { marginRight: "0" },
              ]
            : [
                  {
                      marginLeft: ANIMATION_CONSTANTS.marginMeasurement,
                  },
                  { marginLeft: "0" },
              ];

        await schoolContainer?.animate(keyFrames, {
            duration: 1000,
            easing: ANIMATION_CONSTANTS.easingFunction,
            fill: ANIMATION_CONSTANTS.fillDirection,
        }).finished;
    }, []);

    const animateTo = React.useCallback(async (left: boolean) => {
        const schoolContainer = document.querySelector(
            ANIMATION_CONSTANTS.schoolContainerQuery,
        );

        const keyframes = left
            ? [
                  {
                      marginRight: "0",
                  },
                  {
                      marginRight: ANIMATION_CONSTANTS.marginMeasurement,
                  },
              ]
            : [
                  {
                      marginLeft: "0",
                  },
                  {
                      marginLeft: ANIMATION_CONSTANTS.marginMeasurement,
                  },
              ];

        await schoolContainer?.animate(keyframes, {
            duration: 1000,
            easing: ANIMATION_CONSTANTS.easingFunction,
            fill: ANIMATION_CONSTANTS.fillDirection,
        }).finished;
        await schoolContainer?.animate(
            [
                {
                    opacity: "100%",
                },
                {
                    opacity: "0%",
                },
            ],
            {
                duration: 1,
                easing: ANIMATION_CONSTANTS.easingFunction,
                fill: ANIMATION_CONSTANTS.fillDirection,
            },
        ).finished;
    }, []);

    React.useEffect(() => {
        if (schoolState.direction === DIRECTION.LEFT) {
            animateFrom(false)
                .then(() => {
                    setSchoolState((oldState) => ({
                        ...oldState,
                        direction: DIRECTION.NONE,
                    }));
                })
                .catch(console.error);
        } else if (schoolState.direction === DIRECTION.RIGHT) {
            animateFrom(true)
                .then(() => {
                    setSchoolState((oldState) => ({
                        ...oldState,
                        direction: DIRECTION.NONE,
                    }));
                })
                .catch(console.error);
        }
    }, [animateFrom, schoolState]);

    return (
        <>
            <Head>
                <meta
                    content="homepage, personal website, cameron thacker, full-stack developer"
                    name="keywords"
                />
                <meta
                    content="School history of full-stack developer Cameron Thacker"
                    name="description"
                />
                <meta content="EN" name="language" />
                <meta content="Cameron Thacker" name="author" />
                <title>{"School History"}</title>
            </Head>
            <BasicLayout cssOverride={schoolStyles.school_layout}>
                <div
                    className={schoolStyles.school_container}
                    id="school_container"
                >
                    {schoolElements[schoolState.selected]}
                </div>
                <div className={schoolStyles.button_bar}>
                    <OverlayTrigger
                        overlay={(
                            properties: OverlayInjectedProps,
                        ): JSX.Element =>
                            generateTooltip({
                                content:
                                    SCHOOL_PREVIOUS_TEXT[schoolState.selected],
                                props: properties,
                            })
                        }
                        placement="top-end"
                    >
                        <Button
                            onClick={async (): Promise<void> => {
                                await animateTo(true);
                                await swapSchoolSides(true);
                                setSchoolState((oldState) => ({
                                    direction: DIRECTION.LEFT,
                                    selected:
                                        oldState.selected ===
                                        SCHOOL_SELECTED.MIDDLE_SCHOOL
                                            ? SCHOOL_SELECTED.COLLEGE
                                            : oldState.selected - 1,
                                }));
                            }}
                            variant="outline-success"
                        >
                            <i className="fa-solid fa-arrow-left" />
                        </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        overlay={(
                            properties: OverlayInjectedProps,
                        ): JSX.Element =>
                            generateTooltip({
                                content: SCHOOL_NEXT_TEXT[schoolState.selected],
                                props: properties,
                            })
                        }
                        placement="top-start"
                    >
                        <Button
                            onClick={async (): Promise<void> => {
                                await animateTo(false);
                                await swapSchoolSides(false);
                                setSchoolState((oldState) => ({
                                    direction: DIRECTION.RIGHT,
                                    selected:
                                        oldState.selected ===
                                        SCHOOL_SELECTED.COLLEGE
                                            ? SCHOOL_SELECTED.MIDDLE_SCHOOL
                                            : oldState.selected + 1,
                                }));
                            }}
                            variant="outline-success"
                        >
                            <i className="fa-solid fa-arrow-right" />
                        </Button>
                    </OverlayTrigger>
                </div>
            </BasicLayout>
        </>
    );
};
