import SecondaryBox from '../components/_community-page/LeftNav';
import MainBox from '../components/_community-page/MainBox';

export default function CommunityPage() {
    return (
        <div className='flex md:px-28 my-20 px-4'>
            <div className='hidden md:block'>
                <SecondaryBox />
            </div>
            <MainBox />
        </div>
    );
}
