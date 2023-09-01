import React from "react";

type LanguagesBarProperties = {
    readonly languages: string[];
};

const customMappings: { [key: string]: string } = {
    assembly: "git",
    batchfile: "firefox",
    brainfuck: "eslint",
    "c#": "csharp",
    "c++": "cplusplus",
    css: "css3",
    dockerfile: "docker",
    html: "html5",
    "jupyter notebook": "jupyter",
    makefile: "jquery",
    powershell: "dotnetcore",
    pug: "linux",
    shell: "bash",
};

const addedLanguages = [
    "bootstrap",
    "github",
    "gitlab",
    "gradle",
    "heroku",
    "intellij",
    "jira",
    "markdown",
    "mongodb",
    "mysql",
    "nestjs",
    "nextjs",
    "nodejs",
    "postgresql",
    "pycharm",
    "react",
    "redis",
    "socketio",
    "spring",
    "subversion",
    "trello",
    "ubuntu",
    "webpack",
];

/**
 * The bar of languages that displays
 *
 * @param properties - The props of the LanguageBar
 * @param properties.languages - The array of languages
 * @returns The languages bar at the bottom of the project container
 */
export const LanguagesBar = ({
    languages,
}: LanguagesBarProperties): JSX.Element => (
    <>
        {[...languages, ...addedLanguages].map((eachLanguage: string) => (
            <i
                className={`p-1 devicon-${
                    customMappings[eachLanguage.toLowerCase()] ??
                    eachLanguage.toLowerCase()
                }-plain`}
                key={eachLanguage}
            />
        ))}
    </>
);
