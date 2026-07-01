import { Link } from "react-router-dom";

export default function NavBar() {
    const linkclasses = "mx-4 p-2.5 border rounded-md bg-violet-600 hover:bg-violet-700 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"

    return (
        <div className="text-container my-0 py-3.5 justify-center text-white">
            <Link className={linkclasses} to="/">ABSCOND!!</Link>
            <Link className={linkclasses} to="/BigIdea">Bless the Big Idea</Link>
            <Link className={linkclasses} to="/ShopIdeas">Shop Ideas</Link>
            <Link className={linkclasses} to="/SupportFAQ">Support/FAQ</Link>
        </div>
    )
}
    