import kgb from '../assets/images/kgbimpressed.jpeg'
export default function ShopCard() {

    return(
        <div className='my-7 justify-center flex-col border rounded-md border-purple-600 text-white p-2'>
            <p className='leading-10 font-bold text-3xl'>eat yo mattress</p>
            <div>
                <img className='mx-auto'width={200}src={kgb} alt="" />
            </div>
            <p>so much to gain, but nothing to lose.</p>
            <p>cuban missile crisis</p>
        </div>
    )
}