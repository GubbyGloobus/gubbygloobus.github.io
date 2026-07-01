import { Link } from "react-router-dom";
import InfoCard from "../components/infocard";

export default function Home() {
   //The big idea is the central worshipped figure. It gives ideas form and monetary value.
   const textbox = [
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
        <div>
            <h1>Welcome to the Marketplace.</h1>
            <p className="text-container">People have ideas. Yours are next, and can be turned into Money. Money can become a purchase, and that means you're doing it right. Start thinking, stack bands, change the world.</p>
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