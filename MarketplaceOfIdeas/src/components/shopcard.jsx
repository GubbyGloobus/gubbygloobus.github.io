import kgb from '../assets/images/kgbimpressed.jpeg'

export default function ShopCard({idea}) {
    const {title, image, desc, price} = idea

   return(
        <div className='my-7 justify-center flex-col border rounded-md border-purple-600 text-white p-2'>
            <p className='leading-10 font-bold text-3xl'>{title}</p>
            <div>
                <img className='mx-auto'width={200}src={image} alt="" />
            </div>
            <p>{desc}
            </p>
            <p>{price}</p>
        </div>
    )
}