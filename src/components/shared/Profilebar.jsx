export default function ProfileBar() {
    return (
        <div className='flex items-center bg-primaryGreen rounded-md px-3 py-1 text-white'>
            <div className='h-6 w-6 mx-2'>
                <img
                    src='https://placebear.com/200/300'
                    alt='img'
                    className='object-cover h-full w-full rounded-full'
                />
            </div>
            <p>Dimas Ukin</p>
        </div>
    );
}
