import { useEffect, useRef, useState } from "react";
import { HorizontalLayoutPadding, ScreenType } from "../constants";
import useScreenType from "./useScreenType";
import useSwiperButtons from "./useSwiperButtons";

export default function useSwipe(listLength, S) {
    const screenType = useScreenType();
    const swiperRef = useRef(null);
    const [swipePositionTracker, setSwipePositionTracker] = useState([0, 0]);
    const swiperButtons = useSwiperButtons({ swiperRef, listLength, S });

    const isMobile = screenType === ScreenType.MOBILE;
    const horizontalLayoutPadding = HorizontalLayoutPadding[screenType];
    const eventTargetXSelector = e => e.touches[0].clientX;

    useEffect(() => {
        const swipeDifference = swipePositionTracker[0] - swipePositionTracker[1];
        const currentXPosition = parseInt(swiperRef.current.style.left) || 0;
        swiperRef.current.style.left = `${currentXPosition + swipeDifference}px`;
    }, [swipePositionTracker]);

    const onSwipeStart = (e) => {
        const xValue = eventTargetXSelector(e);
        setSwipePositionTracker([xValue, xValue]);
    }

    const onSwipeMove = (e) => {
        const xValue = eventTargetXSelector(e);
        setSwipePositionTracker(previousSlidePositionTracker => [xValue, previousSlidePositionTracker[0]]);
    }

    const onSwipeEnd = () => {
        const relativeWindowWidth = isMobile ? window.innerWidth : window.innerWidth / 2;
        if (parseInt(swiperRef.current.style.left) > 0) {
            swiperRef.current.style.left = '0px';
        } else if (swiperRef.current.scrollWidth - relativeWindowWidth + parseInt(swiperRef.current.style.left) < - horizontalLayoutPadding * 2) {
            swiperRef.current.style.left = `${- swiperRef.current.scrollWidth + relativeWindowWidth - horizontalLayoutPadding * 2}px`;
        }
    }

    const swipeEvents = {
        onTouchStart: onSwipeStart,
        onTouchMove: onSwipeMove,
        onTouchEnd: onSwipeEnd,
    }

    return {
        swiperRef,
        swiperButtons,
        ...swipeEvents
    }
}