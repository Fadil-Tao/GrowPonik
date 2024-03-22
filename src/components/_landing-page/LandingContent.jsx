import Bropng from '../../assets/bro.png';

export default function LandingContent({ inmg, title, desc }) {
    return (
        <div className='flex justify-between items-center my-16 md:flex-row flex-col '>
            <div className='md:w-[50rem] md:h-[20rem] w-[10rem] '>
                <img
                    src={Bropng}
                    alt='img'
                    className=' object-cover w-full h-full'
                />
            </div>
            <div className='md:ml-10'>
                <div className='md:mb-12 mb-6'>
                    <h3 className='font-poppins font-medium text-2xl md:text-start text-center'>
                        Organize your farm and get more done
                    </h3>
                </div>
                <div>
                    <p className='font-nunito'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Excepturi labore officiis maxime vitae
                        reprehenderit fugit, dolor exercitationem magnam earum
                        iure ab nemo deserunt rem sunt voluptates eum assumenda
                        similique asperiores.
                    </p>
                </div>
            </div>
        </div>
    );
}
