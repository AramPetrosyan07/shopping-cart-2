import React from 'react'
import './style/shop.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from "react";
import { CardContext } from './Context'

function Shop({ items }) {
    let [count, setCount] = useState(items.count)
    let [val, setVal] = useState(items.price)
    let [card, setCard] = useContext(CardContext);

    useEffect(() => {
        let sum = count * items.price;
        items.count = count
        setVal(sum)
    }, [count])

    let del = () => {
        // let ind = card.indexOf(items)
        // items.count = 0
        // console.log(card);
        // card.splice(ind, 1)
        // console.log(card);
        setCard(card.filter((x) => x !== items))
    }

    let Background = items.url
    let sectionStyle = {
        width: "250px",
        height: "270px",
        color: "#a18a96",
        backgroundImage: `url( ${Background} )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        overflow: "hidden",
    }
    let price = items.count * items.price
    return (
        <div className='box'>
            <div className='imgDiv' style={sectionStyle}></div>
            <div className='info'>
                <h2>{items.name}</h2>
                <h4>{items.module}</h4>
                <h1>{val}$</h1>
                <div className='buttons'>
                    <button className='minus' onClick={() => {
                        if (val <= 1) {
                            setCount(1);
                        } else {
                            return setCount(count - 1)
                        }
                    }}>-</button>
                    <h2>{count}</h2>
                    <button className='plus' onClick={() => {
                        setCount(count + 1)
                    }}>+</button>
                </div>
                < button className='btnX' onClick={del} >x</button>

            </div>
        </div>
    )
}

export { Shop }