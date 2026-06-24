import { Link } from "react-router-dom";
import ShopCard from "../components/shopcard";
import { Component } from "react";

export default function ShopIdeas() {
    const ideas = [
        {
            //STARTS AT ITEM #0//
            title:'john smith',
            image: 'src/assets/images/kgbimpressed.jpeg',
            desc: 'BITCH!!!!!!!!!!!',
            price: 'a mere penny :)'
        },

        {
            title: 'john the smith',
            image: 'src/assets/images/homunculus.jpg',
            desc: 'breden wont SHUT UP!!!!!!!!!!!!!!',
            price: 'priceless.',

        },

        {title: 'john the smith',
            image: 'src/assets/images/homunculus.jpg',
            desc: 'breden wont SHUT UP!!!!!!!!!!!!!!',
            price: 'priceless.',
        },
    ]

    return (
        <div className="mx-5">
            <h1>Browse our Idealist Wares.</h1>
            <p>shopshopshopshopshopshopshopshopshopshopshopshopshopshosphopshopshosphshopshosphpsh</p>
            <div className="grid grid-cols-3 justify-center gap-x-30 gap-y-5">
                {
                    ideas.map((idea) => (
                        <ShopCard idea={idea}/>
                    ))
                }
            </div>
        </div>
    )
}

