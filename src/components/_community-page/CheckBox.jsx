export default function CheckBox({ lable, name, handleChange, value }) {
    return (
        <div>
            <input
                type='checkbox'
                onChange={handleChange}
                value={value}
                name={name}
            />
            <label htmlFor={name} className='ml-2 text-black'>
                {lable}
            </label>
        </div>
    );
}
