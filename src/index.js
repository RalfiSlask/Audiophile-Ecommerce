import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Checkout from './pages/Checkout/Checkout';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { HashRouter, Routes, Route} from "react-router-dom"
import { ContextProvider } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
    <HashRouter>    
        <Routes>
            <Route exact path="/" element = {<Home />}/>  
            <Route path="/category" element = {<Category />}/>  
            <Route path="/checkout" element = {<Checkout />}/>  
            <Route path="/product" element = {<ProductDetail />}/>  
        </Routes>
    </HashRouter>
    </ContextProvider>
);

