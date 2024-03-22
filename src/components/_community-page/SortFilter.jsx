import CheckBox from './CheckBox';

const checkBoxOptions = [
    { label: 'Komentar Terbanyak', name: 'komentarTerbanyak' },
    { label: 'Diskusi Terbaru', name: 'diskusiTerbaru' },
    { label: 'Paling Banyak Di like', name: 'palingBanyakDiLike' },
    { label: 'Ditandai', name: 'ditandai' },
];

export default function SortFilter() {
    return (
        <ul>
            {checkBoxOptions.map((option, index) => (
                <li key={index}>
                    <CheckBox
                        lable={option.label}
                        name={option.name}
                        handleChange={() => {
                            console.log('');
                        }}
                        value={''}
                    />
                </li>
            ))}
        </ul>
    );
}
