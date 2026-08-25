"use client";

import { useEffect, useRef, useState } from "react";

export function useNumberCounter({
    startNumber = 0,
    endNumber = 0,
    isActive = false,
    duration = 2000
}) {
    const startValue = Number(startNumber) || 0;
    const endValue = Number(endNumber) || 0;
    const [currentNumber, setCurrentNumber] = useState(startValue);
    const frameRef = useRef(null);
    const hasAnimatedRef = useRef(false);

    useEffect(() => {
        if (!isActive || hasAnimatedRef.current) {
            return;
        }

        hasAnimatedRef.current = true;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const value = startValue + (endValue - startValue) * easedProgress;

            setCurrentNumber(Math.round(value));

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(animate);
            }
        };

        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, [isActive, startValue, endValue, duration]);

    return currentNumber;
}
