import { useState } from 'react';

export default function DropDownNav({ title, children, titleSize }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <div>
                <button
                    className='flex items-center w-full'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div
                        className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                    >
                        <span className='text-2xl'>{'>'}</span>
                    </div>
                    <span className={`ml-8 font-semibold  ${titleSize}`}>
                        {title}
                    </span>
                </button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'}`}>{children}</div>
        </div>
    );
}
