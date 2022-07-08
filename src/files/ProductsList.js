import React from "react";
import './style/productlist.css'
import { Product } from "./Product";
import { useContext } from 'react'
import { CardContext } from './Context'
import { useEffect } from "react";


const objects = [
    {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13762670/2021/4/19/4ebdad10-f4c7-4ef2-a30b-6d52b16942541618813125380-Nike-Varsity-Compete-TR-3-Mens-Training-Shoe-565161881312467-1.jpg",
        name: "Nike",
        module: "Men Grey & Black VARSITY COMPETE Training Shoes",
        size: 38 - 40,
        price: 120,
        id: 1,
        count: 0,
        livePrice: 0,
    },
    {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17205532/2022/5/31/bc63765f-6a2e-40eb-b059-53ad23a8669e1653979824746-Nike-Winflo-8-Mens-Road-Running-Shoes-5151653979824348-1.jpg",
        name: "Nike",
        module: "Men Grey Zoom Winflo 8 Running Shoes",
        size: 40 - 43,
        price: 170,
        id: 2,
        count: 0,
        livePrice: 0,
    },
    {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17205648/2022/5/12/d2ce6d5c-2f4b-441b-95d2-5df61b0b5d761652358449536-Nike-Women-Grey-Flex-Essential-TR-Training-Shoes-33816523584-1.jpg",
        name: "Nike",
        module: "Women Grey Flex Essential TR Training Shoes",
        size: 38 - 40,
        price: 110,
        id: 3,
        count: 0,
        livePrice: 0,
    },
];
let objects2 = [
    {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17205476/2022/5/25/5462bf2c-0a61-4c9a-8d9c-d23102877e1f1653458940404-AIR-JORDAN-5-RETRO-3151653458940148-1.jpg",
        name: "Nike",
        module: "Men Black AIR JORDAN 5 RETRO Basketball Shoes",
        size: 36 - 42,
        price: 250,
        id: 4,
        count: 0,
        livePrice: 0,
    },
    {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17205520/2022/6/13/f2bb81b4-769a-43b9-9321-384df1c3e15d1655102465836-Nike-Downshifter-11-Mens-Road-Running-Shoes-4281655102465544-1.jpg",
        name: "Nike",
        module: "Men Black DOWNSHIFTER 11 Road Running Shoes",
        size: 36 - 44,
        price: 90,
        id: 5,
        count: 0,
        livePrice: 0,
    },
    {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17205622/2022/5/18/27357e28-b2cb-4d78-b747-010eb02836d81652862297139-Nike-React-Infinity-Run-Flyknit-3-Mens-Road-Running-Shoes-36-1.jpg",
        name: "Nike",
        module: "Men Grey React Infinity Run Flyknit 3 Road Running Shoes",
        size: 36 - 40,
        price: 130,
        id: 6,
        count: 0,
        livePrice: 0,
    },
    {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16274190/2022/6/13/32376a43-0028-48a3-be31-164c9ca87d8d1655106874218-Nike-Air-Max-2021-SE-Mens-Shoes-7821655106873869-1.jpg",
        name: "Nike",
        module: "Men Grey AIR MAX 2021 SE Textured Sneakers",
        size: 36 - 40,
        price: 270,
        id: 7,
        count: 0,
        livePrice: 0,
    },
    {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16274012/2022/4/19/cd56df05-dffa-4abe-8e14-8e8ffbc85afd1650370483235-Nike-Zoom-Fly-4-Mens-Road-Running-Shoes-7781650370482920-1.jpg",
        name: "Nike",
        module: "Men Yellow Zoom Fly 4 Road Running Shoes",
        size: 37 - 43,
        price: 222,
        id: 8,
        count: 0,
        livePrice: 0,
    },
    {
        url: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16274012/2022/4/19/cd56df05-dffa-4abe-8e14-8e8ffbc85afd1650370483235-Nike-Zoom-Fly-4-Mens-Road-Running-Shoes-7781650370482920-1.jpg",
        name: "Nike",
        module: "Men Yellow Zoom Fly 4 Road Running Shoes",
        size: 37 - 43,
        price: 222,
        id: 9,
        count: 0,
        livePrice: 0,
    },
]

function ProductsList() {
    let [card, setCard, pseudoCunt, setPseudoCunt, realCount, setRealCount] = useContext(CardContext);

    useEffect(() => {
        let sum = 0;
        objects.forEach((item) => {
            sum += item.count
        })
        objects2.forEach((item) => {
            sum += item.count
        })
        setRealCount(sum)
    }, [pseudoCunt])
    return (
        <div className="productBody">
            <div className="productlist">
                <div className="group1 firstGroup">
                    {
                        objects.map((item) => {
                            return <Product key={item.id} items={item} />
                        })
                    }
                </div>

                <div className="group2 twoImg">
                    <div className="divOne">
                        <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_621,c_limit/2668aeff-aa6d-49e2-b8e1-194004c5d163/nike-just-do-it.jpg" />
                        <div className="absaluteTop">
                            <h1>Trending Now</h1>
                        </div>
                        <div className="absalute absalute1">
                            <h2>Best Sellers</h2>
                            <button className="one">Shop</button>
                        </div>
                    </div>
                    <div className="divTwo">
                        <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_621,c_limit/2b465761-0a70-4fc1-8e96-a2043a52e071/nike-just-do-it.jpg" />
                        <div className="absalute absalute2">
                            <h2>Gear Up for Basketball</h2>
                            <button className="two">Shop</button>
                        </div>
                    </div>

                </div>
                <div className="group3">
                    {
                        objects2.map((item) => {
                            return <Product key={item.id} items={item} />
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export { ProductsList };
