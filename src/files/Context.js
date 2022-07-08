import React from 'react'
import { useState } from 'react';

export const CardContext = React.createContext();

function Context(props) {
    let [card, setCard] = useState([])
    let [pseudoCunt, setPseudoCunt] = useState(0)
    let [realCount, setRealCount] = useState(0)
    console.log(pseudoCunt);

    return (
        <CardContext.Provider value={[card, setCard, pseudoCunt, setPseudoCunt, realCount, setRealCount]}>
            {props.children}
        </CardContext.Provider>
    )
}

export { Context }