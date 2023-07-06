import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";

/**
 * The main application component
 *
 * @param props - The properties of the App component
 * @param props.Component - The main component
 * @param props.pageProps - The passed down pageProps
 * @returns The main application
 */
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <>
        <Head>
            <title>{"Cameron Thacker"}</title>
        </Head>
        <Component {...pageProps} />
        <ToastContainer
            autoClose={5000}
            closeOnClick
            draggable
            hideProgressBar={false}
            newestOnTop={false}
            pauseOnHover={false}
            position="top-right"
            rtl={false}
            theme="light"
        />
    </>
);

export default MyApp;
