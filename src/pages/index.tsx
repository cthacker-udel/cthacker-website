import type { NextPage } from "next";
import React from "react";

import { LandingPage } from "@/modules/LandingPage";

/**
 * The home page component, houses only the landing page which is where the user lands on
 *
 * @returns The home page, the first page the user lands on upon entering the website
 */
const Home: NextPage = () => <LandingPage />;

export default Home;
