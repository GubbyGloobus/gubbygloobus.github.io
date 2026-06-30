import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <Link
        to="/ShopIdeas"
        className="shake px-20 py-14 text-2xl font-bold rounded-xl bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition duration-200">
        THE ONLY HELP YOU NEED IS SHOPPING!!!!!!!!!!! GO!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      </Link>
    </div>
  );
}