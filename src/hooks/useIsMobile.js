import { useLayoutEffect, useState } from "react";
import { mobileScreenMaxWidth } from "../constants";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
  
    useLayoutEffect(() => {
      const updateSize = () => {
        setIsMobile(window.innerWidth < mobileScreenMaxWidth);
      };
      window.addEventListener('resize', updateSize);

      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  
    return isMobile;
  };