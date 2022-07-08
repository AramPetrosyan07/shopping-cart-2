import React from "react";
import './style/shoppinglist.css'
import { Shop } from "./Shop";
import { useContext } from "react";
import { CardContext } from './Context'


function ShoppingList() {
    let [card, setCard] = useContext(CardContext);
    console.log(card);
    return (
        <div className="shoppinglist">
            {
                card.map((item) => {
                    return (
                        <Shop key={item.id} items={item} />
                    )
                })
            }
        </div>
    )
}

export { ShoppingList };
