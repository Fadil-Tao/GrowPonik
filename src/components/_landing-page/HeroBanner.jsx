import BigBanner from '../../assets/BigBanner.png';
import { Link } from 'react-router-dom';

export default function HeroBanner() {
    return (
        <div className='relative h-[35rem]'>
            <img
                src={BigBanner}
                alt='img'
                className=' object-cover w-full h-full'
            />
            <div className='absolute top-[30%] text-white md:px-28'>
                <p className='font-poppins md:text-5xl text-2xl text-center font-medium'>
                    Kembangkan Keterampilan Bertani Anda dengan Hidroponik yang
                    Mudah dan Efektif
                </p>
                <p className='text-nunito text-center my-5 md:text-xl text-sm'>
                    Selamat Datang di Portal Pembelajaran Hidroponik Terbaik:
                    Tingkatkan Pengetahuan Anda dan Mulai Bertani Hari Ini!
                </p>
                <div className='flex justify-center items-center md:mt-10'>
                    <div className='border-[1.5px] text-3xl px-2 py-2 text-center rounded-xl mr-2  text-white font-semibold'>
                        <Link to={'/register'}>Bergabung</Link>
                    </div>
                    <div className='border-[1.5px] text-3xl px-2 py-2 text-center rounded-xl bg-black border-white opacity-70'>
                        <Link className='' to={'learning'}>
                            Coba Gratis
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
