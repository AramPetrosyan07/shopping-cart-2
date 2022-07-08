import React from 'react'
import './style/product.css'
import { useContext } from 'react'
import { CardContext } from './Context'
import { useState } from 'react';
import { useEffect } from 'react';


function Product({ items }) {
    let [card, setCard, pseudoCunt, setPseudoCunt, realCount, setRealCount] = useContext(CardContext);
    let [count, setCount] = useState(items.count)
    let [val, setVal] = useState(items.price)

    useEffect(() => {
        let sum = count * items.price;
        items.count = count
        setVal(sum)
    }, [count])

    let addTOCart = () => {
        if (!(card.includes(items))) {
            // items.count += 1
            setCard([...card, items])
        } else {
            // items.count += 1
        }
        setPseudoCunt(pseudoCunt + 1)
    }

    useEffect(() => {
        let sum = count * items.price;
        items.count = count
        setVal(sum)
    }, [count])


    let Background = items.url
    let sectionStyle = {
        position: "relative",
        width: "300px",
        height: "400px",
        color: "#a18a96",
        backgroundImage: `url( ${Background} )`,
        backgroundPosition: "0px -20px",
        backgroundSize: "cover",
        borderRadius: "20px",
        overflow: "hidden",
    }
    return (
        <article className='card' style={sectionStyle}>
            <div className='card__content' >
                <h3 className='card__title'>{items.name}</h3>
                <span className='card_subtitle'>{items.module}</span>
                <div className='card__description btnDiv'>
                    <button className='btn' onClick={addTOCart}>BUY</button>
                </div>
                <div className='buttons buttonsProduct'>
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
            </div >
        </article >
    )
}

export { Product }