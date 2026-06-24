import kgb from '../assets/images/kgbimpressed.jpeg'

export default function ShopCard({idea}) {
    const {title, image, desc, price} = idea

<<<<<<< HEAD
   return(
        <div className='my-7 justify-center flex-col border rounded-md border-purple-600 text-white p-2'>
            <p className='leading-10 font-bold text-3xl'>{title}</p>
=======
    return(
        <div className='my-7 mx-7 justify-center flex-col border rounded-md border-purple-600 text-white p-2'>
            <p className='leading-10 font-bold text-3xl'>eat yo mattress</p>
>>>>>>> b944a0abb3cdb46f43a4e9dfc6c5318ef0448936
            <div>
                <img className='mx-auto'width={200}src={image} alt="" />
            </div>
            <p>{desc}
            </p>
            <p>{price}</p>
        </div>
    )
}