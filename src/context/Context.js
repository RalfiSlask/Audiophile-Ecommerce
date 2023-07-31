import { createContext, useEffect, useState } from "react";

const Context = createContext({})

export const ContextProvider = ( {children}) => {
    const [screenWitdh, setScreenWidth] = useState(window.innerWidth);
    const [screenType, setScreenType] = useState("")

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
        if(screenWitdh < 772) {
            setScreenType("mobile")
        } else if(screenWitdh < 1280) {
            setScreenType("tablet")
        } else {
            setScreenType("desktop")
        }
    }, [screenWitdh, screenType])

    useEffect(() => {
        console.log(screenWitdh)
    })

    const contextValue = {
        screenWitdh: screenWitdh,
        screenType: screenType,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}


export default Context