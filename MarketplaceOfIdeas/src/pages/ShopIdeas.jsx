import { Link } from "react-router-dom";
import ShopCard from "../components/shopcard";
import { Component } from "react";

export default function ShopIdeas() {

    return (
        <div className="mx-5">
            <h1>Browse our Idealist Wares.</h1>
            <p>shopshopshopshopshopshopshopshopshopshopshopshopshopshosphopshopshosphshopshosphpsh</p>
            <div className="grid grid-cols-3 justify-center gap-x-30 gap-y-5">
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
            </div>
        </div>
    )
}

