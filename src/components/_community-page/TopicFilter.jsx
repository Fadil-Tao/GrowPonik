import CheckBox from './CheckBox';

const checkBoxOptions = [
    { label: 'Umum', name: 'umum' },
    { label: 'Teknikal', name: 'teknikal' },
    { label: 'Pengetahuan', name: 'pengetahuan' },
    { label: 'Sharing', name: 'sharing' },
];

export default function TopicFilter() {
    return (
        <ul>
            {checkBoxOptions.map((option, index) => (
                <li key={index}>
                    <CheckBox lable={option.label} name={option.name} />
                </li>
            ))}
        </ul>
    );
}
