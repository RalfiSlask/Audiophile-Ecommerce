import { createContext, useEffect, useState } from 'react';
import data from '../data/data.json';

const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [screenWitdh, setScreenWidth] = useState(window.innerWidth);
  const [screenType, setScreenType] = useState('');
  const [category, setCategory] = useState('headphones');
  const [productList, setProductList] = useState(data);
  const [product, setProduct] = useState('');
  const [modals, setModals] = useState({ shop: false, cart: false, thankyou: false, lightbox: false });
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [grandTotal, setGrandtotal] = useState(0);
  const [inputList, setInputList] = useState([]);
  const [number, setNumber] = useState(1);
  const [isCashActive, setIsCashActive] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [validList, setValidList] = useState([]);

  useEffect(() => {
    console.log(number);
  });

  useEffect(() => {
    const list = [
      {
        id: 1,
        title: 'Billing Details',
        inputs: [
          { id: 1, label: 'Name', input: '', placeholder: 'Alexei Ward', isLarge: false },
          { id: 2, label: 'Email Address', input: '', placeholder: 'alexeiward@mail.com', isLarge: false },
          { id: 3, label: 'Phone Number', input: '', placeholder: '+1202-555-0136', isLarge: false },
        ],
      },
      {
        id: 2,
        title: 'Shipping Info',
        inputs: [
          { id: 4, label: 'Your Address', input: '', placeholder: '1137 Williams Avenue', isLarge: true },
          { id: 5, label: 'Zip Code', input: '', placeholder: '10001', isLarge: false },
          { id: 6, label: 'City', input: '', placeholder: 'New York', isLarge: false },
          { id: 7, label: 'Country', input: '', placeholder: 'United States', isLarge: false },
        ],
      },
      {
        id: 3,
        title: 'Payment Details',
        isCash: false,
        inputs: [
          { id: 8, label: 'e-Money Number', placeholder: '238521993', isLarge: false },
          { id: 9, label: 'e-Money PIN', placeholder: '6891', isLarge: false },
        ],
      },
    ];
    setInputList(list);
  }, []);

  useEffect(() => {
    const updateInputList = [...inputList];
    const paymentDetails = updateInputList.find(object => object.title === 'Payment Details');
    if (paymentDetails) {
      if (isCashActive) {
        paymentDetails.isCash = true;
        paymentDetails.inputs = [];
      } else {
        paymentDetails.isCash = false;
        paymentDetails.inputs = [
          { id: 8, label: 'e-Money Number', placeholder: '238521993', isLarge: false },
          { id: 9, label: 'e-Money PIN', placeholder: '6891', isLarge: false },
        ];
      }
      setInputList(updateInputList);
    }
  }, [isCashActive]);

  useEffect(() => {
    const shipping = 50;
    const grandTotal = shipping + totalPrice;
    const grandTotalWithCommas = formatNumberWithCommas(grandTotal);
    setGrandtotal(grandTotalWithCommas);
  }, [totalPrice]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cartList'));
    if (storedCart) {
      setCartList(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartList', JSON.stringify(cartList));
  }, [cartList]);

  useEffect(() => {
    if (screenType === 'desktop' && modals.shop) {
      const updatedModals = { ...modals };
      updatedModals.shop = false;
      updatedModals.lightbox = false;
      setModals(updatedModals);
    }
  }, [screenType]);

  useEffect(() => {
    let total = 0;
    const newList = [...cartList];
    newList.forEach(product => {
      let price = product.count * product.price;
      total += price;
    });
    setTotalPrice(total);
  }, [cartList]);

  useEffect(() => {
    const storedProduct = JSON.parse(localStorage.getItem('product'));
    if (storedProduct) {
      setProduct(storedProduct);
    }
  }, []);

  useEffect(() => {
    const storedCategory = localStorage.getItem('category');
    if (storedCategory) {
      setCategory(storedCategory);
    }
  }, []);

  useEffect(() => {
    const updatedProductList = data.filter(product => product.category === category);
    setProductList(updatedProductList);
  }, [category]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  useEffect(() => {
    if (screenWitdh < 772) {
      setScreenType('mobile');
    } else if (screenWitdh < 1280) {
      setScreenType('tablet');
    } else {
      setScreenType('desktop');
    }
  }, [screenWitdh, screenType]);

  useEffect(() => {
    if (buttonPressed && validList.length > 0) {
      const allInputsValid = validList.every(input => input.isValid);
      if (allInputsValid) {
        openModal('thankyou');
      }
    }
  }, [validList, buttonPressed]);

  const formatNumberWithCommas = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const addProductToCartOnClick = (number, name, price) => {
    name = name.includes('Headphones') ? name.replace('Headphones', '') : name;
    name = name.includes('Mark') ? name.replace('Mark', 'MK') : name;
    name = name.includes('ZX7') || name.includes('ZX9') || name.includes('YX1') ? name.substring(0, 3) : name;

    const productObject = {
      id: cartList.length + 1,
      count: number,
      name: name,
      price: price,
    };

    const productAlreadyExists = cartList.some(product => product.name === productObject.name);

    if (productAlreadyExists) {
      const updatedList = [...cartList];
      const product = updatedList.find(product => product.name === productObject.name);
      product.count !== number ? (product.count = number) : null;
      setCartList(updatedList);
    } else {
      setCartList(prevList => [...prevList, productObject]);
    }
  };

  const emptyCartOnClick = () => {
    setCartList([]);
  };

  const incrementOnClick = setNumber => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const decrementOnClick = (number, setNumber) => {
    if (number > 1) {
      setNumber(prevNumber => prevNumber - 1);
    }
  };

  const setProductOnClick = product => {
    setProduct(product);
    localStorage.setItem('product', JSON.stringify(product));
  };

  const setCategoryOnClick = category => {
    setCategory(category);
    localStorage.setItem('category', category);
  };

  const openModal = modalType => {
    const updateModals = { ...modals };
    updateModals[modalType] = true;
    updateModals.lightbox = true;
    setModals(updateModals);
  };

  const closeModal = modalType => {
    const updateModals = { ...modals };
    updateModals[modalType] = false;
    updateModals.lightbox = false;
    setModals(updateModals);
  };

  const toggleModal = modalType => {
    if (modalType === 'cart') {
      if (modals.shop) {
        setModals({ shop: false, cart: true, lightbox: true });
      } else {
        setModals(prevState => ({
          ...prevState,
          cart: !prevState.cart,
          lightbox: !prevState.lightbox,
        }));
      }
    } else if (modalType === 'shop') {
      if (modals.cart) {
        setModals({ shop: true, cart: false, lightbox: true });
      } else {
        setModals(prevState => ({
          ...prevState,
          shop: !prevState.shop,
          lightbox: !prevState.lightbox,
        }));
      }
    }
  };

  const validateInput = (value, pattern) => {
    return pattern.test(value);
  };

  const validateAllInputs = (id, isValid) => {
    const updateList = [...validList];
    const inputExists = updateList.find(input => input.id === id);
    if (!inputExists) {
      setValidList(prevList => [...prevList, { id, isValid }]);
    } else {
      const input = updateList.find(input => input.id === id);
      input.isValid = isValid;
      setValidList(updateList);
    }
  };

  const contextValue = {
    // states
    screenWitdh: screenWitdh,
    screenType: screenType,
    category: category,
    productList: productList,
    inputList: inputList,
    cartList: cartList,
    product: product,
    totalPrice: totalPrice,
    grandTotal: grandTotal,
    number: number,
    isCashActive: isCashActive,
    buttonPressed: buttonPressed,
    validList: validList,
    modals: modals,
    // setters
    setCategory: setCategory,
    setModals: setModals,
    setNumber: setNumber,
    setProduct: setProduct,
    setCartList: setCartList,
    setIsCashActive: setIsCashActive,
    setButtonPressed: setButtonPressed,
    setValidList: setValidList,
    // functions
    setCategoryOnClick: setCategoryOnClick,
    setProductOnClick: setProductOnClick,
    addProductToCartOnClick: addProductToCartOnClick,
    incrementOnClick: incrementOnClick,
    decrementOnClick: decrementOnClick,
    emptyCartOnClick: emptyCartOnClick,
    formatNumberWithCommas: formatNumberWithCommas,
    closeModal: closeModal,
    openModal: openModal,
    toggleModal: toggleModal,
    validateInput: validateInput,
    validateAllInputs: validateAllInputs,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
