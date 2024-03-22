import PricePrevimg1 from '../../assets/PricePrevimg1.png';

export default function PreviewPriceCard({ img, title, children, price }) {
    return (
        <div className='border-2 rounded-xl p-8 grid place-items'>
            <p className='text-center text-primaryGreen font-semibold font-poppins'>
                Beginner Pack
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
                    <li className=''>Hello</li>
                    <li className=''>Hello</li>
                    <li className=''>Hello</li>
                </ul>
            </div>
            <div>
                <p className='text-center font-medium font-poppins text-primaryGreen'>
                    Rp 1.000.000
                </p>
            </div>
        </div>
    );
}
