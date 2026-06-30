import kgb from '../assets/images/kgbimpressed.jpeg'

export default function ShopCard({idea}) {
    const {title, image, desc, price} = idea

   return(
        <div className='my-2 justify-center border rounded-md border-purple-600 text-white p-2 flex flex-col h-full'>
            <p className='leading-10 font-bold text-3xl'>{title}</p>
            <div>
                <img className='mx-auto'width={200}src={image} alt="" />
            </div>
            <p>{desc}
            </p>
            <div className= 'mt-auto text-green-600 font-bold text-green drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]'>
                <p>{price}</p>
            </div>
        </div>
    )
}