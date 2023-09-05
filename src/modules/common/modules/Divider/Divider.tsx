import React from "react";

import styles from "./Divider.module.css";

type BarSpacing = "SM" | "MD" | "LG" | "XL";

type DividerProperties = {
    readonly barSpacing?: BarSpacing;
    readonly cssOverride?: string;
};

/**
 * The common divider component, which allows for putting a horizontal "bar" between components
 *
 * @returns The common divider component
 */
export const Divider = ({
    barSpacing = "SM",
    cssOverride,
}: DividerProperties): JSX.Element => (
    <div
        className={`${styles.divider} ${cssOverride ?? ""} ${
            styles[`divider_${barSpacing.toLowerCase()}`]
        }`}
    />
);
