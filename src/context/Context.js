import { createContext, useEffect, useState } from "react";

const Context = createContext({})

export const ContextProvider = ( {children}) => {
    const [screenWitdh, setScreenWidth] = useState(window.innerWidth);
    const [screenType, setScreenType] = useState("");
    const [category, setCategory] = useState("");
    const [productList, setProductList] = useState([]);

    const setCategoryOnClick = (category) => {
        setCategory(category)
    };

    const productArray = [
        {id: 1, type: "headphones", product: "XX99 Mark IIHeadphones", info: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."},
        {id: 2, type: "headphones", product: "XX99 Mark IHeadphones", info: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."},
        {id: 3, type: "headphones", product: "XX59Headphones", info: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."},
        {id: 4, type: "earphones",  product: "YX1 wireless earphones", info: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."},
        {id: 5, type: "speakers", product: "ZX9SPEAKER", info: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."}, 
        {id: 6, type: "speakers", product: "ZX7SPEAKER", info: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."}
    ];

    useEffect(() => {
       const updatedProductList = productArray.filter((product => product.type === category))
       setProductList(updatedProductList)
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

    useEffect(() => {
        console.log(productList)
    });

    const contextValue = {
        // states
        screenWitdh: screenWitdh,
        screenType: screenType,
        category: category,
        productList: productList,
        // setters
        setCategory: setCategory,
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