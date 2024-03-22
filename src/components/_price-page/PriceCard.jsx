// eslint-disable-next-line react/prop-types
export default function PriceCard({ children, title, price, desc }) {
    return (
        <div className='w-[18rem] h-auto grid'>
            <div className='grid py-2 px-5 '>
                <h3 className='text-4xl font-medium text-primaryGreen'>
                    {title}
                </h3>
                <p className='font-nunito'>{desc}</p>
            </div>
            <div className='bg-gray-100 rounded-md px-5 py-2'>
                <div>
                    <p className=' font-poppins font-semibold text-2xl'>
                        {price}
                    </p>
                </div>
                <div className='h-[12rem] font-nunito flex justify-center items-start'>
                    <ul className=' list-disc'>{children}</ul>
                </div>
                <div className='border-[1.5px] shadow-lg py-10 relative px-10 text-poppins font-semibold text-2xl border-black'>
                    <div className=' -rotate-45 absolute text-primaryGreen top-0 right-0'>
                        {'--->'}
                    </div>
                    <button className=' text-primaryGreen'>
                        Beli Langganan
                    </button>
                </div>
            </div>
        </div>
    );
}
