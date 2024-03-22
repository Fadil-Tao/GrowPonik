export default function BottomNavCourse() {
    return (
        <div className='flex py-5 bg-white w-full justify-between md:px-40 px-3 fixed bottom-0 border-t-2'>
            <div>{'<---'}</div>
            <div className=''>
                <p className='font-poppins'>{'[Course Name]'}</p>
            </div>
            <div>{'--->'}</div>
        </div>
    );
}
