import { Link } from "react-router-dom";
import ShopCard from "../components/shopcard";
import { Component } from "react";

export default function ShopIdeas() {
    const ideas = [
        {
            //STARTS AT ITEM #0//
            title:'Steal USA\'s Secret File',
            image: 'src/assets/images/kgbimpressed.jpeg',
            desc: 'you can get rich by selling secret from file',
            price: '$400.93'
        },

        {
            title: 'Conjure a Digital Homunculus',
            image: 'src/assets/images/homunculus.jpg',
            desc: 'create a digital homunculus to do your every bidding and sew seeds of anger on online forums',
            price: '$8,0000',

        },

        {title: 'john the smith',
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
            <p>shopshopshopshopshopshopshopshop  we think one new idea every wednesday.  hopshosphopshopshosphshopshosphpshop</p>
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

