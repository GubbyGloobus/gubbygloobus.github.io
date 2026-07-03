import { Link } from "react-router-dom";
import { Component } from "react";
import InfoCard from "../components/infocard";

export default function BigIdea() {

    const textbox= [
    {
        header:'yup',
        body:'nope',
    },

    {
        header:'who are we?',
        body:'we are the man who thinks. stupid boy',
    },
   ]
   
    return (
        <div className="mx-10">
            <h1 className="italic">Get a clue. Get the Big Idea.</h1>
            <p className="text-container">The Big Idea is the prime Idea in all its forms. It is the most expensive, and it is the one that came first. Praise be to its contributions to our earth economy. Listen up, punk, and learn.</p>
            <img className="mx-auto p-10 max-w-4xl" src="src/assets/images/light.jpg" alt="" />
                <div className="grid grid-cols-2 justify-center gap-x-20 mx-4 my-2">
                    {
                        textbox.map((text) => (
                        <InfoCard text={text}/>                 
                    ))              
                }  
                </div> 
        </div>
    )
}
    