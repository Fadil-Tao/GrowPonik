export default function MentorshipCard() {
    return (
        <div className='md:h-[15rem] h-auto md:px-0 px-7 md:border-2 md:flex rounded-xl my-5 md:my-10'>
            <div className='md:w-1/3 md:h-full h-[10rem]'>
                <img
                    src='https://placebear.com/900/200'
                    alt='img'
                    className='object-cover w-full h-full rounded-t-xl md:rounded-l-xl md:rounded-r-none '
                />
            </div>
            <div className=' md:px-10 lg:py-7  grid font-nunito w-full'>
                <p className='text-black font-semibold md:text-6xl text-3xl'>
                    Andi Susanto
                </p>
                <div className=''>
                    <p className='md:text-2xl text-medium'>
                        10 tahun dalam bidang pertanian dan hidroponik, memiliki
                        sertifikasi internasional dalam teknik hidroponik.
                    </p>
                </div>
                <div className='flex text-primaryGreen'>
                    <p>Pertanian</p>
                    <p className='mx-2'>Hidroponik</p>
                </div>
                <div>
                    <div className='text-primaryGreen font-semibold text-xl'>
                        Hubungi {'>'}
                    </div>
                </div>
            </div>
        </div>
    );
}
