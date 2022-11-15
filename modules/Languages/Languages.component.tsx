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
							"Python was one of my first languages I've learned, and one of the last of my undergrad I would be teaching to fellow students. I've learned Python from the bottom up, and done some amazing things in python, I built my first api wrapper in python, I built my first visual program in python with the python turtle. I work with Python time and time again, even when it's not required, just because writing in it has proven to be very satisfactory for me due to the lax structure of the language, and the amazing feats you can achieve with this language."
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
							"Java was my second language learned, and is one of my favorites, due to it's heavy OOP design and it's incredible tight structure to types. I was immediately hooked on Java when I learnt it sophomore year of college, taking aim at practicing it everyday to become an excellent Java programmer. That's what landed me my first internship, it was an unpaid job building an Android application for a startup company, and I had to integrate apis into the application to communicate with various crypto markets and link user's accounts. This was my first foray into api interaction, and it would prove to become highly beneficial, as I would go on to land an co-op which involved heavy usage of api calls in .NET. I am forever grateful for my first opportunity being the most beneficial."
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
							"One of my first intimidating languages, the class that taught it required that we code it in the terminal. First time dealing with the notorious segfault. Figuring out how to fix those, and how to work with memory directly, would prove to become an inmeasurable benefit for my future career as an programmer, in Python and Java, you have the heap managed for you, you rarely if any directly modify the memory. This taught me the intro to pointers, and I still code in C sometimes just for kicks of a challenge, because working with strings is extremely difficult, but for good reason, they are truly just arrays of characters with a null terminating character at the end, the other languages provide help working with them for us, but at a cost as well."
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
							"Learnt this after experiencing C, and it was a breath of fresh air, the ability to use pointers with the luxury of having classes and finally a string type. Working in this language was nothing short of a miracle after having to work with C for a whole semester. This language would prove to become a very useful one as well, as it's used in the competitive programming scene quite often due to it's inclination to support algorithmic problems well having a robust standard library, and also it's ability to run very fast due to it being relatively low-level, having similar properties to C while having properties of an OOP language."
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
							"This was first introduced to me in January of 2022, when I landed my first co-op with a relatively large company. I was super nervous, and we immediately hopped into code I was unfamiliar with, and I picked it up very quickly, and began integrating features left and right, and having a blast using this language. I eventually actually took a class as well that integrated this language into a SQL database, and showed the ease of using this language to manage database operations, and it was stunning how well it worked and seamlessly plugged into the database."
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
							"Can't say enough about this language, this is what is running in this website right now! One of my top 3 languages, and by far, my most familiar due to the nature of how well I gravitated towards this language. This was one of my favorite classes of my entire undergrad career, was CISC275, intro to software engineering, and we used React and JS(mainly TS) to create web applications, and this was intimidating to learn at first, but now that I've been developing in JS for close to almost 2 years, I can say without certainty that it is turning into a very robust, scalable, magnificent language. The hacks you can perform in JS are quite amusing as well. I created an entire frogger game in my CISC474 class using just javascript, it's extremely powerful."
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
							"This is the language that is website is literally built in, the latter is the one this website is compiled into. This language has so much power, so much structure, it is easily one of my favorite languages of all time, from building discord bots in it, to building web servers, this language has endless potential, and has an insanely robust infrastructure. I am addicted to linting code, and maintaining the most efficient code possible, and having the ability to import all these rules, that use typescript to enforce specifics, is nothing short of amazing. This language landed me my first real job, as a Junior Dev at a small company in Pennsylvania."
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
							"This language I still use today, and the principles I still carry on to all my interactions with databases. This language was taught to me late in my scholarly career when I took CISC475, and this language is extremely easy to learn if you are a computer scientist. The language almost reads out like English and the syntax is incredibly easy to comprehend. The principles of this language are the most important, however, is learning how to maintain an efficient and strong foundational database, how to structure data within that database so it can be queried efficiently and stored efficiently."
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
							"I learnt the linux terminal in my early undergrad classes, and I still use the same syntax today, and learning how to use a terminal is absolutely necessary if you are to use any framework, or develop on your own, because it usually involves calling the terminal, or even when fixing issues, involves using the terminal. The teachings of generally what a terminal is, and how to use simple commands, can stretch very far in terms of your capabilities in solving problems without a programming language."
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
							"I still use this today, even the day I am writing this, I am actively using nodejs to build efficient server-side code, and manage my projects that require it, is is a very essential tool to have in any full-stack developer's tool-belt. I recently built an entire api framework in Express, and it runs insanely smooth and exactly as I intended, due to the nodejs framework being so scale-able and easy to write in."
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
							"This website is literally html, and mostly every website is. Learning this was only essential to becoming a full-stack developer, because without it, you can't really structure websites at all properly. Being extremely knowledgeable about this language has only improved my ability in other aspects, such as styling, and adding functionality through JS."
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
							"Learning CSS is still an uphill battle, no one knows every css property, but mastering little by little, has made me an incredible developer, so much in-fact that this website was built entirely by me with nothing but React, html, and css! Without css, you can't properly use html, and without html, you can't properly use css. Css is the skin, and the html is skeletal structure, while js is the nerves and muscles that enable the person to perform actions."
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
