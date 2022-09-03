import { useLayoutEffect, useState } from "react";
import { ScreenType, screenTypeSizeBoundries } from "../constants";

export default function useScreenType() {
    const [screenType, setScreenType] = useState(ScreenType.MOBILE);
  
    useLayoutEffect(() => {
      const updateScreenType = () => {
        setScreenType(window.innerWidth <= screenTypeSizeBoundries[ScreenType.MOBILE] ? ScreenType.MOBILE : window.innerWidth <= screenTypeSizeBoundries[ScreenType.TABLET] ? ScreenType.TABLET : ScreenType.DESKTOP);
      };
      window.addEventListener('resize', updateScreenType);

      updateScreenType();
      return () => window.removeEventListener('resize', updateScreenType);
    }, []);
  
    return screenType;
}