import React, { useState } from 'react';
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './files/Home';
import { ProductsList } from './files/ProductsList';
import { About } from './files/About';
import { ShoppingList } from './files/ShoppingList';
import { CardContext } from './files/Context'
import { useContext } from 'react'
import { useEffect } from 'react';
import logo from './image/logo.png'


function App() {
    let [card, setCard, pseudoCunt, setPseudoCunt, realCount, setRealCount] = useContext(CardContext);
    let [classN, setClassN] = useState('a')
    useEffect(() => {
        if (realCount <= 0) {
            setClassN(classN = 'a')
        } else if (realCount > 0) {
            setClassN(classN = 'calc')
        }
    }, [realCount])
    return (
        <div className='header'>
            <div className='flexDiv'>
                <img src={logo} alt="logo" />
                <div className='nav'>
                    <Link to='/'>Home</Link>
                    <Link to='/productlist'>Products</Link>
                    <Link to='/about'>About</Link>
                    <Link className={classN} data-count={realCount} to='/shoppingcard'>ShoppingCard</Link>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productlist' element={<ProductsList />} />
                <Route path='/about' element={<About />} />
                <Route path='/shoppingcard' element={<ShoppingList />} />
            </Routes>
        </div>
    );

    // ------------------------

}

export default App;