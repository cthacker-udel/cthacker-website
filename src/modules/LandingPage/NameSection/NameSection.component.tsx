import Image from "next/image";
import React from "react";

import styles from "./NameSection.module.css";

/**
 * The name section of the landing page, displays the name along with what the purpose of the page is
 *
 * @returns The name section of the landing page
 */
export const NameSection = (): JSX.Element => (
    <div className={styles.main_display}>
        <div className={styles.name}>{"Cameron M.C. Thacker"}</div>
        <div className={`${styles.img_container}`}>
            <Image
                alt="Profile image"
                className={styles.landing_page_image}
                height={500}
                src="https://avatars.githubusercontent.com/u/70614147?v=4"
                width={500}
            />
        </div>
        <div className={styles.occupation}>
            {"Full Stack Developer & Beginner Data Scientist"}
        </div>
    </div>
);
