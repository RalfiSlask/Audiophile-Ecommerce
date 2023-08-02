import { createContext, useEffect, useState } from "react";
import data from "../data/data.json"


const Context = createContext({})

export const ContextProvider = ( {children}) => {
    const [screenWitdh, setScreenWidth] = useState(window.innerWidth);
    const [screenType, setScreenType] = useState("");
    const [category, setCategory] = useState("");
    const [productList, setProductList] = useState(data);
    const [product, setProduct] = useState("");


    const setCategoryOnClick = (category) => {
        setCategory(category)
        localStorage.setItem("category", category)
    };

    useEffect(() => {
        const storedCategory = localStorage.getItem("category");
        if(storedCategory) {
            setCategory(storedCategory)
        } else {
            setCategory("headphones")
        }
    }, [])

    useEffect(() => {
      /*  const updatedProductList = 
       setProductList(updatedProductList) */
    }, [category])

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        };

        window.addEventListener("resize", handleResize)
        return () => (
            window.removeEventListener("resize", handleResize)
        )
    });

    useEffect(() => {
        if(screenWitdh < 772) {
            setScreenType("mobile")
        } else if(screenWitdh < 1280) {
            setScreenType("tablet")
        } else {
            setScreenType("desktop")
        }
    }, [screenWitdh, screenType])

    const contextValue = {
        // states
        screenWitdh: screenWitdh,
        screenType: screenType,
        category: category,
        productList: productList,
        product: product,
        // setters
        setCategory: setCategory,
        setProduct: setProduct,
        // functions 
        setCategoryOnClick: setCategoryOnClick,
        
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}


export default Context