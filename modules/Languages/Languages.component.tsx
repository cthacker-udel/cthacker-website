import { BasicLayout } from "modules/common";
import React from "react";
import { Accordion } from "react-bootstrap";

import languagesStyles from "./Languages.module.css";

/**
 *
 * @returns
 */
export const Languages = (): JSX.Element => (
	<BasicLayout>
		<div
			className={`w-100 d-flex flex-column justify-content-center align-items-center ${languagesStyles.languages_page}`}
		>
			<div className="fs-2 text-decoration-underline mb-3">
				{"Languages"}
			</div>
			<Accordion
				className={`w-75 ${languagesStyles.languages_accordion}`}
				flush
			>
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						<i className="fa-brands fa-python" />
						<div
							className={`ms-2 ${languagesStyles.languages_accordion_title}`}
						>
							{"Python"}
						</div>
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"Python was one of the first languages I learned and one of the last of my undergrad I would be teaching to fellow students. I learned Python from the bottom up and accomplished some amazing things in the language. I built my first API wrapper and a visual program with the turtle library. I work with Python time and time again, even when it's not required, just because writing in it has proven to be very satisfactory for me due to the lax structure of the language and the amazing feats you can achieve with this language."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>
						<i className="fa-brands fa-java" />
						<div
							className={`ms-2 ${languagesStyles.languages_accordion_title}`}
						>
							{"Java"}
						</div>
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"Java was my second language learned and one of my favorite languages. Due to its heavy OOP design and the incredibly tight structure to types, I was immediately hooked on Java when I practiced it sophomore year of college. I aimed to practice it every day to become an excellent Java programmer. Java landed me my first internship, it was an unpaid job building an Android application for a startup company, and I had to integrate APIs into the application to communicate with various crypto markets and link users' accounts. The internship was my first foray into API interaction and was monumental for my future success as a full-stack developer. I would go on to land a co-op that involved heavy usage of API calls in .NET. I am forever grateful for my first opportunity being the most beneficial."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header>
						<i className="fa-solid fa-c" />
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"One of my first intimidating languages, the class required that we code it in the terminal, was my first time dealing with the notorious segfault. Figuring out how to fix those and how to work with memory directly would become an immeasurable benefit for my future career as a programmer. In Python and Java, you have the heap managed for you and rarely do direct work with the memory. This class taught me the intro to pointers, and I still code in C sometimes just for kicks of a challenging problem because working with strings is extremely difficult for good reason in my eyes. The other non-low-level languages provide help working with them for us, but at a cost as well."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="3">
					<Accordion.Header>
						<i className="fa-solid fa-c" />
						<i className="fa-solid fa-plus fa-xs" />
						<i className="fa-solid fa-plus fa-xs" />
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"Introduced to this language after experiencing C, it was a breath of fresh air, the ability to use pointers with the luxury of having classes and a string type. Working in this language was nothing short of a miracle after working with C for a whole semester. This language is popular among the competitive programming community due to its robust standard library and fast runtime due to the simpleness of its standard library and implementation."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="4">
					<Accordion.Header>
						<i className="fa-solid fa-c" />
						<i className="fa-solid fa-hashtag ms-1" />
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"C# was introduced to me in January of 2022 when I landed my first co-op with a relatively large company. I was super nervous, immediately hopping into the code I was unfamiliar with and picking it up very quickly. I began integrating features left and right and having a blast using this language. I also took a class that integrated this language into a SQL database and showed the ease of using C# to manage database operations. It was stunning how well it worked and seamlessly plugged into the database."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="5">
					<Accordion.Header>
						<i className="fa-brands fa-js" />
						<div
							className={`ms-2 ${languagesStyles.languages_accordion_title}`}
						>
							{"Javascript"}
						</div>
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"Javascript is what's running this website right now! It's one of my top 3 languages and by far my most familiar due to how well I gravitated toward this language. One of my favorite classes of my entire undergrad career, CISC275, was Intro to Software Engineering, and we used React and JS(mainly TS) to create web applications. It was intimidating to learn at first, but now that I've been developing in JS for two years, I can say without certainty that it is turning into a very robust, scalable, magnificent language. The hacks you can perform in JS are amusing as well. I created an entire frogger game in my CISC474 class using just javascript."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="6">
					<Accordion.Header>
						<i className="fa-solid fa-t" />
						<i className="fa-solid fa-s" />
						<div
							className={`ms-2 ${languagesStyles.languages_accordion_title}`}
						>
							{"Typescript"}
						</div>
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"Typescript is the language in the website's built and managed in. With the ability to craft discord bots and build web servers, this language has endless potential and an insanely robust infrastructure. I am addicted to linting code and maintaining the most efficient code possible, and having the ability to import all these rules that use typescript and enforce specific styles is nothing short of amazing. This language landed me my first real job as a Junior Dev at a small company in Pennsylvania."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="7">
					<Accordion.Header>
						<i className="fa-solid fa-s" />
						<i className="fa-solid fa-q" />
						<i className="fa-solid fa-l" />
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"I still use it today, and the principles I still use with all my interactions within databases. This language was taught to me late in my scholarly career when I took CISC475, and this language is easy to learn if you are a computer scientist. The programming language reads like English, with low cognitive syntax. The principles of this language are the most important to learn from my perspective. The principles I've absorbed are maintaining an efficient and foundational database and structuring data within a database so it can be queried efficiently and stored efficiently."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="8">
					<Accordion.Header>
						<i className="fa-solid fa-terminal" />
						<div
							className={`ms-2 ${languagesStyles.languages_accordion_title}`}
						>
							{"Linux Terminal"}
						</div>
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"I learned the Linux terminal in my early undergrad classes and still use the same methodologies today. Learning the techniques to utilize a terminal is necessary if you are to use any framework or develop on your own because it usually involves utilizing the command line in some manner. The teachings of formulating and using simple commands can stretch very far in terms of your capabilities in solving problems without a programming language."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="9">
					<Accordion.Header>
						<i className="fa-brands fa-node" />
						<div
							className={`ms-2 ${languagesStyles.languages_accordion_title}`}
						>
							{"NodeJS"}
						</div>
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"I still use this today, even the day I am writing this. I am actively using NodeJS to build efficient server-side code and manage my projects that require it. It is an essential tool to have in any full-stack developer's repertoire. I recently constructed an entire API framework in Express that runs insanely smooth and precisely as intended due to the scalable property of the NodeJS framework."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="10">
					<Accordion.Header>
						<i className="fa-brands fa-html5" />
						<div
							className={`ms-2 ${languagesStyles.languages_accordion_title}`}
						>
							{"HTML"}
						</div>
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"This website is HTML, and mostly every website is. Learning this was only essential to becoming a full-stack developer because you can't structure websites properly if you don't use HTML in your website. Being extremely knowledgeable about this language has only improved my ability in other aspects, such as styling and adding functionality through JS."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="11">
					<Accordion.Header>
						<i className="fa-brands fa-css3-alt" />
						<div
							className={`ms-2 ${languagesStyles.languages_accordion_title}`}
						>
							{"CSS"}
						</div>
					</Accordion.Header>
					<Accordion.Body
						className={`${languagesStyles.language_text}`}
					>
						{
							"Learning CSS is still an uphill battle as no one knows every CSS property, but mastering little by little, has made me an incredible developer. So much so that this website was built entirely by me with React, HTML, and CSS! Without CSS, you can't use HTML to its full extent, and without HTML, you can't use CSS to its full power. As the old analogy goes, CSS is the skin, HTML is the skeletal structure, and js is the nerves and muscles that enable the person to perform actions."
						}
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item
					className={`text-center ${languagesStyles.languages_page_and_many_more}`}
					eventKey="12"
				>
					<div>
						{"... and many more!"}
						<i className="ms-1 fa-solid fa-dragon fa-flip" />
					</div>
				</Accordion.Item>
			</Accordion>
		</div>
	</BasicLayout>
);
