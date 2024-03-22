import { useState } from 'react';
import DropDownNav from '../shared/DropDown';

export default function SideNavCourse() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <div className='relative z-10'>
                <div
                    className={`fixed ${isOpen ? 'right-0' : '-right-[250px]'}  transition-all duration-500 ease-in-out flex`}
                >
                    <div className=''>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='border-2 border-r-0 text-xl rounded-l-xl p-3 bg-[#588157]'
                        >
                            <div className='w-6 h-1 bg-white my-1'></div>
                            <div className='w-6 h-1 bg-white my-1'></div>
                            <div className='w-6 h-1 bg-white my-1'></div>
                        </button>
                    </div>
                    <div className='h-screen bg-white border-2 w-64 '>
                        <div className=' bg-secondaryGreen w-full text-white font-poppins h-[50px] grid place-items-center py-2 px-4'>
                            <p className='text-2xl'>Module List :</p>
                        </div>
                        <div className='flex py-2 px-6 items-center border-2'>
                            <div className='relative w-44 rounded-full h-3 border-2 border-gray-500 '>
                                <div className='absolute w-20  rounded-full h-2 bg-primaryGreen'></div>
                            </div>
                            <p className='mx-2'>20/22</p>
                        </div>
                        <ul className=' py-2 px-6 font-nunito'>
                            <li>
                                <DropDownNav title={'Belajar Ngoding'}>
                                    <div className='ml-12'>
                                        <div>Apple</div>
                                        <div>Pineapple</div>
                                        <div>WaterMelon</div>
                                    </div>
                                </DropDownNav>
                            </li>
                            <li>
                                <DropDownNav title={'Belajar Ngolok'}>
                                    <div className='ml-12'>
                                        <div>Apple</div>
                                        <div>Pineapple</div>
                                        <div>WaterMelon</div>
                                    </div>
                                </DropDownNav>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
