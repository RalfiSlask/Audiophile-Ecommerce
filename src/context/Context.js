import { createContext, useEffect, useState } from "react";

const Context = createContext({})

export const ContextProvider = ( {children}) => {
    const [screenWitdh, setScreenWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        };

        window.addEventListener("resize", handleResize)
        return () => (
            window.removeEventListener("resize", handleResize)
        )
    })

    useEffect(() => {
        screenWitdh < 772 ? setIsMobile(true) : setIsMobile(false)
        screenWitdh > 1280 ? setIsDesktop(true) : setIsDesktop(false)
    }, [screenWitdh, isDesktop, isMobile])

    const contextValue = {
        screenWitdh: screenWitdh,
        isDesktop: isDesktop,
        isMobile: isMobile,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}


export default Context