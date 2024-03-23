import IconDiscussion from './IconDiscussion';
import { FaRegComment } from 'react-icons/fa';
import { BiUpvote } from 'react-icons/bi';
import { BiDownvote } from 'react-icons/bi';

export default function DiscussionCard() {
    return (
        <div className='py-3 flex items-center border-2 border-primaryGreen  rounded-xl font-poppins    '>
            <div className=' w-[20%] grid place-items-center  '>
                <div className='h-14 w-14'>
                    <img
                        src='https://placebear.com/200/300'
                        alt=''
                        className='object-cover w-full h-full rounded-full'
                    />
                </div>
                <div className='text-center md:text-xs text-[8px]'>
                    <p className='text-gray-300'>By Dimas</p>
                    <p className='text-gray-300'>Posted On 32/02/2004</p>
                </div>
            </div>
            <div className='w-full '>
                <div className='w-44  rounded-md px-2 text-center bg-green-400'>
                    <p className='text-white'>General Question</p>
                </div>
                <div className='my-2'>
                    <h2 className='font-nunito'>
                        Hi Guys!, Im New At Agricultural World Any Suggestions?
                    </h2>
                </div>
                <div className='flex '>
                    <IconDiscussion
                        amoun={10}
                        title={'Comment'}
                        icon={<FaRegComment />}
                    />
                    <IconDiscussion
                        amoun={10}
                        title={'Upvote'}
                        icon={<BiUpvote />}
                    />
                    <IconDiscussion
                        amoun={10}
                        title={'Downvote'}
                        icon={<BiDownvote />}
                    />
                </div>
            </div>
        </div>
    );
}
