import { useState, useEffect } from 'react';

type windowState = {
  width: number,
  height: number
}

function getWindowDimensions(): windowState {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {

    const [windowDimensions, setWindowDimensions] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        if (typeof window != "undefined") {

            setWindowDimensions(getWindowDimensions());

            const handleResize = () => {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }   
    }, []);

    return windowDimensions;
}