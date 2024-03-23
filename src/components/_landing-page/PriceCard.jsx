import PricePrevimg1 from '../../assets/PricePrevimg1.png';

export default function PreviewPriceCard({ img, title, children, price }) {
    return (
        <div className='border-2 rounded-xl p-8 grid place-items'>
            <p className='text-center text-primaryGreen font-semibold font-poppins'>
                {title}
            </p>
            <div className='w-52 h-52'>
                <img
                    src={PricePrevimg1}
                    alt='image'
                    className='object-cover w-full h-full'
                />
            </div>
            <div className='font-nunito'>
                <ul className='list-disc'>
                    {/* <li className=''>Test 1</li>
                    <li className=''>Test 2</li>
                    <li className=''>Test 3</li> */}
                    {children}
                </ul>
            </div>
            <div>
                <p className='text-center font-medium font-poppins text-primaryGreen'>
                    {price}
                </p>
            </div>
        </div>
    );
}
