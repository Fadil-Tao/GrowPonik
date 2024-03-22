import NewDiscussionButton from './NewDiscussion';
import SortFilter from './SortFilter';
import TopUserList from './TopUser';
import TopicFilter from './TopicFilter';

export default function SecondaryBox() {
    return (
        <>
            <div className='md:py-0 py-2'>
                <NewDiscussionButton />
                <div className='grid place-items-center'>
                    <div className='shadow-xl p-6 w-56'>
                        <p>Urutkan Menurut :</p>
                        <SortFilter />
                    </div>
                    <div className='shadow-xl p-6 w-56'>
                        <p>Diskusi Menurut Topik :</p>
                        <TopicFilter />
                    </div>
                    <div className='shadow-xl p-6 w-56'>
                        <p>Top User :</p>
                        <TopUserList />
                    </div>
                </div>
            </div>
        </>
    );
}
