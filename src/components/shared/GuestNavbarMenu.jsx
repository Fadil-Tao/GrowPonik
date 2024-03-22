import { Link } from 'react-router-dom';

export default function GuestNavbarMenu() {
    return (
        <div className='md:flex grid place-items-center md:items-center'>
            <ul className='md:flex'>
                <li>
                    <a
                        href='#tentang'
                        className='mx-3 hover:border-b-[1.5px] duration-75 transition-all'
                    >
                        Tentang Kami
                    </a>
                </li>
                <li>
                    <a
                        href='#tentang'
                        className='mx-3 hover:border-b-[1.5px] duration-75 transition-all'
                    >
                        Artikel
                    </a>
                </li>
                <li>
                    <a
                        href='#tentang'
                        className='mx-3 hover:border-b-[1.5px] duration-75 transition-all'
                    >
                        Komunitas
                    </a>
                </li>
                <li>
                    <a
                        href='#harga'
                        className='mx-3 hover:border-b-[1.5px] duration-75 transition-all'
                    >
                        Langganan
                    </a>
                </li>
            </ul>
            <div className='flex'>
                <div className='border-[1.5px] px-2 py-1 rounded-xl mr-2 bg-white text-primaryGreen font-semibold'>
                    <Link to={'/register'}>Bergabung</Link>
                </div>
                <div className='border-[1.5px] px-2 py-1 rounded-xl'>
                    <Link className=''>Coba Gratis</Link>
                </div>
            </div>
        </div>
    );
}
