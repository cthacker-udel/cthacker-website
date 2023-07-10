import React from "react";

import { WorkHistorySection } from "@/modules/WorkHistory/WorkHistorySection";

export const WH2022 = [
    <WorkHistorySection
        companyName="University of Delaware"
        current
        description="Taught and supervised multiple different programming courses. Ensured grading and delivery of information was top quality; consistently. Taught students Java, Python, and C on an introductory level; while introducing them to new and complicated topics."
        imgHrefLink="https://udel.edu"
        imgLink="/udcampus.jpg"
        jobLocation="Newark, DE"
        jobTitle="Teaching Assistant"
        key="WH2022-0"
    />,
    <WorkHistorySection
        companyName="University of Delaware"
        current
        description="Involved in a research project with a team of colleagues under the supervision of Professor Yarrington, one that was tailored towards making assignment timelines more accessible to neuro-divergent students."
        imgHrefLink="https://udel.edu"
        imgLink="/udcampus2.jpg"
        jobLocation="Newark, DE"
        jobTitle="Research Assistant"
        key="WH2022-1"
    />,
    <WorkHistorySection
        companyName="Quantum Strategies LLC"
        current
        description="Developing greenfield projects in React and NodeJS. Constructing a backend and front-end interface for flawless communication. Involving cross-team communication and management to get projects done to meet strict deadlines. Scrum format."
        imgHrefLink="https://qs2500.com/"
        imgLink="/qslogo.jpg"
        jobLocation="Glen Mills, PA"
        jobTitle="Junior Full-Stack Developer"
        key="WH2022-2"
    />,
    <WorkHistorySection
        companyName="University of Delaware"
        current
        description="Personal tutor for students starting introductory computer science coursework and helped cultivate and improve their understanding of the subject. Lectured programming languages ranging from OOP to Bash Scripting, and all students who signed up for help. I converted their overall grades from a D+ to a B+ with the help I provided playing a factor."
        imgHrefLink="https://udel.edu"
        imgLink="/udcampus3.jpg"
        jobLocation="Newark, DE"
        jobTitle="Computer Science Tutor"
        key="WH2022-3"
    />,
    <WorkHistorySection
        companyName="TherapyNotes LLC"
        description="Worked in the Advance Team, one of which was working on a greenfield project involving a new monumental feature to enhance the current application ecosphere. Coded in C#, React, SQL. Utilized Azure Service Bus, Octopus Deployment, ElasticSearch, and Jira for project management."
        endDate={new Date(2022, 9, 28)}
        imgHrefLink="https://www.therapynotes.com/"
        imgLink="/tn.png"
        jobLocation="Horsham, PA"
        jobTitle="Co-Op Full-Stack Developer"
        key="WH2022-4"
        startDate={new Date(2022, 1, 1)}
    />,
];
