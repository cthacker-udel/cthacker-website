import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>Cameron Thacker</title>
		</Head>
		<Component {...pageProps} />
	</>
);

export default MyApp;
