import { Link } from "react-router-dom";
import ShopCard from "../components/shopcard";
import { Component } from "react";

export default function ShopIdeas() {
    const ideas = [
        {
            //STARTS AT ITEM #0//
            title:'"Steal" USA\'s The Secret File',
            image: 'src/assets/images/kgbimpressed.jpeg',
            desc: 'you can get rich by selling secret "from" file',
            price: '$400.93'
        },

        {
            title: 'Conjure a Digital Homunculus',
            image: 'src/assets/images/homunculus.jpg',
            desc: 'create a digital homunculus to do your every bidding and sew seeds of anger on online forums',
            price: '$8,0000',

        },

        {title: 'Japanese Proverb',
            image: 'src/assets/images/japaneseproverb.jpg',
            desc: 'train to become a samurai and gain Intelligence Points with your peers. Proverbial goddess. The lifekind. Perchance.',
            price: '¥200',
        },

        {title: 'Smel Bad',
            image: 'src/assets/images/smel.jpg',
            desc: 'create an aura to deter your annoying coworkers #stinkayyyy',
            price: 'priceless.',
        },

        {title: 'Run a Fade',
            image: 'src/assets/images/fade.jpg',
            desc: 'something annoying you? get rid of it yourself! self-sufficient, and classic.',
            price: '$5,000 fine + up to 2 yrs prison',
        },

        {title: 'Get Your Fade Ran',
            image: 'src/assets/images/punch.jpg',
            desc: 'Provoke the strongest person you know. YEEEEEEEEOWWCH!! But in a character building way.',
            price: 'hopital',
        },
    ]

    return (
        <div className="mx-5">
            <h1>Browse our Idealist Wares.</h1>
            <p>shopshopshop  we think one new idea every wednesday. buy the idea, and make it happen yourself. hopshosphopshop<br />
               <i>CLAIMER: if you use an idea without buying it first i will sue you big time</i> 
            </p>
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

