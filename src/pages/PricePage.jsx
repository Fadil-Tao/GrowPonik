import priceVectorImg from '../assets/payments.png';
import PricesContainer from '../components/_price-page/PricesContainer';

export default function PricePage() {
    return (
        <div className='md:px-28 px-4'>
            <div className='flex md:flex-row flex-col-reverse my-5 md:my-20'>
                <div className='md:w-1/2'>
                    <p className='text-3xl font-semibold font-poppins'>
                        Pilih Paket Yang Paling Sesuai dengan mu
                    </p>
                    <p className='text-justify text-lg font-nunito'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Odio reiciendis, velit ex atque natus recusandae
                        sunt, nulla cupiditate dicta vitae aperiam similique
                        repudiandae molestias aliquid a, voluptas praesentium?
                        Voluptatibus, debitis!
                    </p>
                </div>
                <div className='w-full h-[20rem]'>
                    <img
                        src={priceVectorImg}
                        alt='image'
                        className='object-cover w-full h-full'
                    />
                </div>
            </div>
            <PricesContainer />
        </div>
    );
}
