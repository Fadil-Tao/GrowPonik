import { IoMdSearch } from 'react-icons/io';
import DiscussionCard from './DiscussionCard';
import SecondaryBox from './LeftNav';
export default function MainBox() {
    return (
        <div className='md:pl-10 w-full'>
            <div className='border-2 w-full border-primaryGreen rounded-lg p-2 flex'>
                <IoMdSearch className='text-2xl text-primaryGreen' />
                <input
                    type='text'
                    className='w-full placeholder:text-gray-300'
                    placeholder='Search Discussion'
                />
            </div>
            <div className='md:hidden block'>
                <SecondaryBox />
            </div>
            <div className='py-3'>
                <DiscussionCard />
            </div>
        </div>
    );
}
