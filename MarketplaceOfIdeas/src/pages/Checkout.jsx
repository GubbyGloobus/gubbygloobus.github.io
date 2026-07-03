import {Link} from "react-router-dom";
import React from "react";

export default function Checkout() {
    const options = [
        '"Steal" USA\'s The Secret File',
        'Conjure a Digital Homunculus',
        'Japanese Proverb',
        'Smel Bad',
        'Run a Fade',
        'Get Your Fade Ran',
    ];

const [selectedOption, setSelectedOption] = React.useState(options[0]);
const [cardNumber, setCardNumber] = React.useState("");

    return (
        <div>
            <h1 className="text-3xl font-bold text-center shake">GOOD!</h1>
            <p className="text-container">Hope you're mind-hungry. Select your brainfood idea to purchase.</p>

            <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mx-4 p-2 text-lg border rounded-md bg-violet-600 hover:bg-violet-700 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <div className="flex flex-col items-center gap-10 justify-center mt-10 mb-10">
                <Link className="mx-4 p-4 text-2xl border rounded-md bg-violet-600 hover:bg-violent-700 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700" to="/IDEAINJECTION">BUY IT!!!</Link>
                <input
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Teach me your card number, and I will teach you the idea."
                    className="mx-4 p-2 text-lg border rounded-md bg-violet-600 hover:bg-violet-700 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"
                />
                <Link className="mx-4 p-4 text-2xl border rounded-md bg-violet-600 hover:bg-violent-700 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700" to="/ShopIdeas">BACK TO SHOP</Link>
            </div>
        </div>
    );
}