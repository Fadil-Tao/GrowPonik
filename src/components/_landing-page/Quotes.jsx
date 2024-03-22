import handPng from '../../assets/Hand.png';

export default function QuotesImage() {
    return (
        <div className='relative mt-10'>
            <p className='md:absolute text-center md:text-white font-poppins md:text-4xl text-2xl top-[50%] px-10 md:px-28'>
                Tujuan Kami Adalah Untuk Membuat Proses Penanaman Hidroponik
                Mudah Bagi Siapapun
            </p>
            <img src={handPng} alt='img' className='hidden md:block' />
        </div>
    );
}
