import { Link } from "react-router-dom";

export default function InfoCard() {
//inline-block is a solution for now; but find way to make it uniform when component is actually complete
return(
    <div className='border-width-2 px-2 my-7 justify-center flex-col border-3 rounded-md border-purple-600 text-white p-2'>
        <p className="font-bold text-3xl leading-10 border-2 p-1.5 rounded-md border-purple-600">IdeaTextHolder</p>
        <p className="p-3 text-grey">Enjoying yourselves, intruders? It's worth knowing the cataclysmic damage you will be responsible for here today. Do no fool yourselves. This facility is not the fruitless work of some petty scientist. This house was created by the great Clovis Bray II himself. Within lies humanity's salvation. Le fontaine du jouvence.</p>
    </div> 
) 
}
