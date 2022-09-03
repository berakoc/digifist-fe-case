import { useState } from "react";
import { concatCss } from "../../common";
import { colorSelectorOptions } from "../../constants"
import S from './index.module.css'

const ColorSelector = () => {
    const [selectedColorOptionIndex, setSelectedColorOptionIndex] = useState(0);
    const getBackgroundStyle = (backgroundColor) => ({ backgroundColor });
    return <div {...concatCss(S.ColorSelector)}>
        {colorSelectorOptions.map((colorSelectorOption, index) =>
            <div style={getBackgroundStyle(colorSelectorOption)} onClick={() => setSelectedColorOptionIndex(index)} {...concatCss(S.colorSelectorOption, selectedColorOptionIndex === index && S.activeColorSelectOption)} key={index}>
            <div {...concatCss(selectedColorOptionIndex === index ? S.activeColorSelectOptionOuterCircle : S.displayNone)} />
            <div style={getBackgroundStyle(colorSelectorOption)} {...concatCss(selectedColorOptionIndex === index ? S.activeColorSelectOptionInnerCircle : S.displayNone)} />
        </div>)}
    </div>
}

export default ColorSelector;