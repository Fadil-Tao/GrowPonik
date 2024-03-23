import PreviewPriceCard from './PriceCard';
import { Link } from 'react-router-dom';

export default function PriceContainer() {
    return (
        <div className='md:px-28 px-4 '>
            <ul className='md:flex xitems-center justify-evenly'>
                <li>
                    <PreviewPriceCard />
                </li>
                <li>
                    <PreviewPriceCard />
                </li>
                <li>
                    <PreviewPriceCard />
                </li>
            </ul>
            <div className='flex justify-center items-center my-5'>
                <Link
                    to={'/langganan'}
                    className='text-primaryGreen font-semibold transition duration-300 ease-in-out transform hover:scale-105'
                >
                    Lihat Lebih Lanjut
                </Link>
            </div>
        </div>
    );
}
