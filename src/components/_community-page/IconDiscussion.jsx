export default function IconDiscussion({ icon, amoun, title, handleClick }) {
    return (
        <div className='flex md:mx-2 items-center'>
            <div>
                <button>{icon}</button>
            </div>
            <div className='mx-2'>{amoun}</div>
            <div>{title}</div>
        </div>
    );
}
