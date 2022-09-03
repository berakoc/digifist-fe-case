import { useState } from "react";
import { concatCss, getIconFromResources } from "../common";
import { HorizontalLayoutPadding, ProductListSpacing, SwiperButtonDirection } from "../constants";
import useScreenType from "./useScreenType";

export default function useSwiperButtons({
    swiperRef, listLength, S, swipeMultiplier = 2
}) {
    const screenType = useScreenType();
    const productListSpacing = ProductListSpacing[screenType];
    const defaultSwiperButtons = [<button {...concatCss(S.swiperButton, S.leftButton)}>
        <img src={getIconFromResources('arrow')} alt='arrow icon' />
    </button>, <button {...concatCss(S.swiperButton, S.rightButton)}>
        <img src={getIconFromResources('arrow')} alt='arrow icon' />
    </button>]
    const [swiperButtons] = useState(defaultSwiperButtons);
    const horizontalLayoutPadding = HorizontalLayoutPadding[screenType];    

    const handleSwiperButtonClick = (direction) => {
        const swiperWidth = swiperRef.current.scrollWidth;
        const swipeAmount = ((swiperWidth - productListSpacing * listLength) / listLength) * swipeMultiplier;
        if (direction === SwiperButtonDirection.LEFT) {
            if (parseInt(swiperRef.current.style.left) + swipeAmount > horizontalLayoutPadding) {
                swiperRef.current.style.left = `0px`;
            } else {
                swiperRef.current.style.left = `${parseInt(swiperRef.current.style.left) + swipeAmount}px`;
            }
        } else if (direction === SwiperButtonDirection.RIGHT) {
            console.log(swiperRef.current.scrollWidth)
            if (swiperRef.current.scrollWidth - window.innerWidth / 2 + parseInt(swiperRef.current.style.left) - swipeAmount < - horizontalLayoutPadding * 2) {
                swiperRef.current.style.left = `${- swiperRef.current.scrollWidth + window.innerWidth / 2 - 2 * horizontalLayoutPadding}px`;
            } else {
                swiperRef.current.style.left = `${parseInt(swiperRef.current.style.left) - swipeAmount}px`;
            }
        }
    }

    return swiperButtons.map((button, index) => button && ({
        ...button,
        key: index,
        props: {
            ...button.props,
            onClick: () => handleSwiperButtonClick(index === 0 ? SwiperButtonDirection.LEFT : SwiperButtonDirection.RIGHT),
        }
    }));
}