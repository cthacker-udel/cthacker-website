// Reference: https://jshakespeare.com/simple-count-up-number-animation-javascript-react/ (Adapted to typescript)
import React from "react";

/**
 * Simulates the ease-out animation on the given number
 *
 * @param t - The number to simulate the ease-out animation on
 * @returns The calculated progress # from the ease-out animation
 */
const easeOutQuad = (t: number): number => t * (2 - t);

// Milliseconds --> Seconds
const frameDuration = 1000 / 60;

type CountUpAnimationProperties = {
    children: string | number;
    duration?: number;
};

/**
 *
 * @param param0
 */
export const CountUpAnimation = ({
    children,
    duration = 2000,
}: CountUpAnimationProperties): number => {
    const countTo = Number.parseInt(children as string, 10);
    const [count, setCount] = React.useState<number>(0);

    React.useEffect(() => {
        let frame = 0;
        const totalFrames = Math.round(duration / frameDuration);
        const counter = setInterval(() => {
            frame += 1;
            const progress = easeOutQuad(frame / totalFrames);
            setCount(countTo * progress);

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameDuration);
    }, [countTo, duration]);

    return Math.floor(count);
};
