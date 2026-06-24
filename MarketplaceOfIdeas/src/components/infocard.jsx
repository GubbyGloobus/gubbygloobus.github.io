import { Link } from "react-router-dom";

export default function InfoCard() {
//inline-block is a solution for now; but find way to make it uniform when component is actually complete
return(
    <div className='inline-block px-5 my-7 justify-center flex-col border-3 rounded-md border-purple-600 text-white p-2'>
        <h1>InfoTitle</h1>
        <p>MoneyandIdeas!</p>
    </div> 
) 
}
