import { BasicLayout } from "modules/common";
import React from "react";

import aboutMeStyles from "./AboutMe.module.css";

/**
 * The about me page
 *
 * @returns The about me component
 */
export const AboutMe = (): JSX.Element => (
	<BasicLayout>
		<div
			className={`d-flex flex-column justify-content-center align-items-center h-100 w-100 ${aboutMeStyles.about_me_page}`}
		>
			<div
				className={`fs-1 fw-bold mb-4 ${aboutMeStyles.about_me_text_header}`}
			>
				{"About Me"}
			</div>
			<div className={`${aboutMeStyles.about_me_text} w-75`}>
				<div className={`${aboutMeStyles.about_me_paragraph}`}>
					{
						"Avid developer from Newark, DE. Knowledgeable in the fundamentals but also the specifics of languages. I've been learning CS for many years, possessing a drive to improve my skills through rigorous practice. I'm a primarily self-taught programmer and have augmented my foundation through academia and extracurricular side projects. My high-frequency inclination is to always put others above me. I am an extrovert and embody a mission of helping others above everything else. Holding multiple jobs as a helper and a provider, I cultivate the next generation of programmers and provide that foundation simultaneously. Those who I've interacted with have nothing but positive comments. I'm a people pleaser and prioritize getting the work done efficiently first and foremost."
					}
				</div>
				<div className={`${aboutMeStyles.about_me_paragraph}`}>
					{
						"To describe my history in Delaware, let's start at the beginning. I was born in Christiana Hospital, minutes after my twin brother, so I am the youngest. I grew up with two brothers, who all went to the same kindergarten-middle school. It was a private school with massive green recreational fields with trees surrounding them like a forest; all you could hear was nature when you were alone. The gigantic maze of metal bars and basketball hoops stood next to the retro-looking school, constructed with red brick back when that was the main building ingredient. The walk up to the playground was a long asphalt path that would leave you sweating when you got to the top. We would always play pick-up football in the field behind it after school, with no pads, and get our school uniforms as dirty as can be. We would sneak out of recess and go into the computer lab to play flash player games when we had a supervisor we knew was relaxed."
					}
				</div>
				<div className={`${aboutMeStyles.about_me_paragraph}`}>
					{
						"That wasn't the only activity I did besides recess. I did choir and was very good at it; we still have tapes of our recitals in my parent's house, filmed on our old camcorder that you see in 90's nostalgia videos. I went from choir to playing in the school band as a percussionist. My twin played the saxophone. I remember getting my first drum set. I immediately started playing on it until one of my drumsticks broke. It's so tiny now I can't even sit on the seat."
					}
				</div>
				<div className={`${aboutMeStyles.about_me_paragraph}`}>
					{
						"During all these musical adventures, I was also playing on a travel soccer team, a local team in Hockessin. We all would meet up at the soccer fields next to the mushroom farms, behind the train tracks, during the week. The drive there would feel like we were entering a different realm, bumpy dirt roads, no buildings, unmarked streets. We would practice drills and play scrimmages until the sun was setting. We went to regional tournaments and even placed 2nd one time! That was a phenomenal achievement for all of us, we were frustrated about not getting first, but we were so proud of having a trophy to show."
					}
				</div>
				<div className={`${aboutMeStyles.about_me_paragraph}`}>
					{
						"The minuscule amount of these soccer trophies barely compares to my successful time as a martial artist. I am a black belt in Tang-Soo-Do, training under some of the greatest martial artists, those who won world championships, and I would soon enough as well. I was a worldwide Tang-Soo-Do competitor, winning local tournaments without a challenge; I had to seek tougher ones. I learned sacred techniques passed down from generation to generation from my masters. Revered in the Hockessin martial arts circuit; if the name Thacker is ever said, they know who you are talking about since we were famous locals."
					}
				</div>
				<div className={`${aboutMeStyles.about_me_paragraph}`}>
					{
						"However, once high school struck, we did not have as much time as we'd liked to spend practicing the arts, so we eventually shelved it. I received a generous scholarship from Salesianum High School, which was a famous high school known for its sports program and academics. There have been champions of the NFL and the NBA who graduated from there; while I was attending. The school was stellar. I met so many talented and unique people there. That's where I found my drive for Computer Science as well. I was taking an Introductory to Web Applications class, and that was my first experience with Javascript and HTML. I tried to build a beautiful web page and created one about cars. I was amazed by the creations of other students. They could author these self-expressions through just words given to a computer left me in astonishment."
					}
				</div>
				<div className={`${aboutMeStyles.about_me_paragraph}`}>
					{
						"College applications began to approach, and I had multiple choices, but my first one was The University of Delaware. I heard they have an excellent curriculum and many famous graduates. I wanted to go there more than anything, so I sent my application and prayed just like everyone else. I got the letter back, and I was so nervous. I was accepted! I was very joyous that day, knowing I would be moving onto the next stage, where I would formulate and build the foundation of my career. I got accepted into the SEEDS scholarship, which granted students free tuition if they maintained above a 3.0 GPA. I had to take classes in Wilmington, DE, where UD had a remote campus. I took courses there, ones to fill up the requirements. My goal was to reach UD in Newark and take the classes I wanted to take. I finally completed that goal after traversing hurdle after hurdle, and I was extremely excited."
					}
				</div>
				<div className={`${aboutMeStyles.about_me_paragraph}`}>
					{
						"I immediately signed up for computing classes, rushing to my computer and occupying those seats as soon as course registration was open. I knew this was what I wanted to do. I was right, as I completed those courses exceptionally well. In some classes, I even scored above hundred percent. Eventually, my performance finally received recognition. Checking my email inbox one morning,  I saw a professor offering me the job of monitoring their lab sessions and grading class assignments. I immediately accepted, haphazardly running to my computer to follow the links they sent to enroll. This success would not subside, as I would become highly successful in all my future classes, maintaining a 4.0 GPA in all computer classes I took during my college career."
					}
				</div>
			</div>
		</div>
	</BasicLayout>
);
