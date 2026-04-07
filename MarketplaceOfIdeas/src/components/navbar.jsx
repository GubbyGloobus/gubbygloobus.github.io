import { Link } from "react-router-dom";

export default function NavBar() {
    
    return (
        <div className="my-2 py-2 border rounded-md border-purple-400 justify-center">
           <Link className="mx-4"to="/">ABSCOND!!</Link>
           <Link className="mx-4 btn"to="/BigIdea">Bless the Big Idea</Link>
           <Link className="mx-4"to="/ShopIdeas">Shop Ideas</Link>
        </div>
    )
}
    