export default function MentorContent({ img, title, desc }) {
    return (
        <div className='flex justify-between items-center my-16 md:flex-row flex-col '>
            <div className='md:mr-10'>
                <div className='md:mb-12 mb-6'>
                    <h3 className='font-poppins font-medium text-2xl md:text-start text-center'>
                        {title}
                    </h3>
                </div>
                <div>
                    <p className='font-nunito'>{desc}</p>
                </div>
            </div>
            <div className='md:w-[90rem] md:h-[20rem] w-[20rem] '>
                <img
                    src={img}
                    alt='img'
                    className=' object-cover w-full h-full'
                />
            </div>
        </div>
    );
}
