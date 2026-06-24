import { Link } from "react-router-dom";

export default function InfoCard({text}) {
//inline-block is a solution for now; but find way to make it uniform when component is actually complete

const {header, body} = text

return(
    <div className='border-width-2 px-2 my-7 justify-center flex-col border-3 rounded-md border-purple-600 text-white p-2'>
        <p className="font-bold text-3xl leading-10 border-2 p-1.5 rounded-md border-purple-600">{header}</p>
        <p className="p-3 text-grey">{body}</p>
    </div> 
) 
}
