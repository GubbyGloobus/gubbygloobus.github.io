import { Link } from "react-router-dom";

export default function SupportFAQ() {
    const buttonformat = "px-20 py-15 text-5xl font-bold border rounded-md bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"

    return (
        <div className='gap-8 min-h-screen flex flex-col items-center justify-center'>
            <Link className={buttonformat} to="/Support">Support</Link>
             <Link className={buttonformat} to="/FAQ">FAQ</Link>
        </div>
    )
}