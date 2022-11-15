import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

/**
 * The main document component
 *
 * @returns The basic document component, which wraps all pages rendered
 */
const Document = (): JSX.Element => (
	<Html>
		<Head>
			<link
				crossOrigin="anonymous"
				href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
				integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
				rel="stylesheet"
			/>
			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
				rel="stylesheet"
			/>
			<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" />
			<link href="https://fonts.googleapis.com" rel="preconnect" />
			<link
				crossOrigin="anonymous"
				href="https://fonts.gstatic.com"
				rel="preconnect"
			/>
			<link
				href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Roboto+Condensed:wght@300;400&display=swap"
				rel="stylesheet"
			/>
			<link href="/headshot.ico" rel="icon" type="image/png" />
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default Document;
